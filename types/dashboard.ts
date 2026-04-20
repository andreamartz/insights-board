export type DateRange = '7d' | '30d' | '90d';
export type Category = 'tech' | 'office' | 'furniture';
export type Channel = 'search' | 'display' | 'email';
export type CategoryFilter = 'all' | Category;
export type ChannelFilter = 'all' | Channel;

export type RawMetricRecord = {
  date: string;
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
