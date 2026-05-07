export const DATE_RANGE_OPTIONS = ['7d', '30d', '90d'] as const;
export type DateRange = (typeof DATE_RANGE_OPTIONS)[number];

export const CATEGORY_FILTER_OPTIONS = ['all', 'tech', 'office', 'furniture'] as const;
export type CategoryFilter = (typeof CATEGORY_FILTER_OPTIONS)[number];
export type Category = Exclude<CategoryFilter, 'all'>;

export const CHANNEL_FILTER_OPTIONS = ['all', 'search', 'display', 'email'] as const;
export type ChannelFilter = (typeof CHANNEL_FILTER_OPTIONS)[number];
export type Channel = Exclude<ChannelFilter, 'all'>;

export type RawMetricRecord = {
  date: IsoDateString;
  category: Category;
  channel: Channel;
  revenue: number;
  clicks: number;
  impressions: number;
};

export type Filters = {
  dateRange: DateRange;
  category: CategoryFilter;
  channel: ChannelFilter;
}

export type WidgetType = 'kpi' | 'line' | 'bar';

export type Metric = 'revenue' | 'clicks' | 'impressions' | 'ctr';

export type Widget = {
  id: string;
  type: WidgetType;
  metric: Metric;
  title: string;
};

export type DashboardState = {
  filters: Filters;
  widgets: Widget[];
};

export type DashboardAction = 
  | { type: 'filters/setDateRange', payload: DateRange }
  | { type: 'filters/setCategory', payload: CategoryFilter }
  | { type: 'filters/setChannel', payload: ChannelFilter }
  | { type: 'widget/add', payload: Widget }
  | { type: 'widget/remove', payload: Pick<Widget, 'id'> };

export type IsoDateString = `${number}-${number}-${number}`;

export type AggregatedMetricRecord =
  | { date: IsoDateString; revenue: number }
  | { date: IsoDateString; clicks: number }
  | { date: IsoDateString; impressions: number };
