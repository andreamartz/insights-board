import {
  RawMetricRecord,
  Filters,
  DateRange,
  IsoDateString
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