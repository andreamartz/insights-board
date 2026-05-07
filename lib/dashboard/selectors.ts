import {
  RawMetricRecord,
  Filters,
  DateRange,
  IsoDateString,
  Metric,
  Category,
} from "@/types/dashboard";

const DATE_RANGE_LOOKUP: Record<DateRange, number> = {
  '7d': 7,
  '30d': 30,
  '90d': 90
};

function getCutoffDate(
  records: RawMetricRecord[],
  filters: Filters
): IsoDateString {
  const days = DATE_RANGE_LOOKUP[filters.dateRange];
  const latestDate = records.reduce(
    (latestDate, record) => (record.date > latestDate ? record.date : latestDate),
    ""
  );
  const cutoff = new Date(latestDate + "T00:00:00Z");  // Parse explicitly as UTC midnight
  cutoff.setUTCDate(cutoff.getUTCDate() - (days - 1));
  return cutoff.toISOString().slice(0, 10) as IsoDateString;
}

/**
 * Filter records based on category/channel/dateRange filters.
 */
export const filterRecords = (
  records: RawMetricRecord[],
  filters: Filters
): RawMetricRecord[] => {
  if (records.length === 0) return [];
  const cutoffDate = getCutoffDate(records, filters);
  return records
    .filter(record => {
      const categoryMatch = filters.category === "all" || record.category === filters.category;
      const channelMatch = filters.channel === "all" || record.channel === filters.channel;
      const dateMatch = record.date >= cutoffDate; 
      return dateMatch && categoryMatch && channelMatch;
    });
}

/**
 * Sum a metric across records.
 */
export function sumMetric(
  records: RawMetricRecord[],
  metric: Exclude<Metric, "ctr">
): number {
  return records.reduce((total, record) => total + record[metric], 0);
}

/**
 * Calculate CTR as total clicks / total impressions.
 */
export function calculateCtr(records: RawMetricRecord[]): number {
  const totalClicks: number = sumMetric(records, "clicks");
  const totalImpressions: number = sumMetric(records, "impressions");
  
  return totalImpressions === 0 ? 0 : totalClicks / totalImpressions;
}

/**
 * Group by date and sum selected metric.
 */
export function buildTrendData(
  records: RawMetricRecord[],
  metric: Exclude<Metric, "ctr">
): AggregatedMetricRecord[] {

  if (records.length === 0) return [];
  const recordsWithAscDates = records.sort((a, b) => a.date.localeCompare(b.date));
  const grouped = new Map<IsoDateString, number>();

  for (const record of recordsWithAscDates) {
    const current = grouped.get(record.date) ?? 0;
    grouped.set(record.date, current + record[metric]);
  }

  return Array.from(grouped.entries())
    .map(([date, value]) => ({ date, [metric]: value } as AggregatedMetricRecord));
}

/**
 * Group by category and sum selected metric.
 */
export function buildCategoryComparison(
  records: RawMetricRecord[],
  metric: Exclude<Metric, "ctr">
): Array<{ category: Category; value: number }> {
  // TODO: implement
  return [];
}