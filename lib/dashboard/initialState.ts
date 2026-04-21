import { Filters, Widget, DashboardState } from '@/types/dashboard';

const initialFilters: Filters = {
  dateRange: "30d",
  category: "all",
  channel: "all"
};

const initialWidgets: Widget[] = [
  {
    id: "w-kpi-revenue",
    type: "kpi",
    metric: "revenue",
    title: "Revenue"
  },
  {
    id: "w-line-ctr",
    type: "line",
    metric: "ctr",
    title: "CTR Trend"
  },
  {
    id: "w-bar-clicks",
    type: "bar",
    metric: "clicks",
    title: "Clicks by Category"
  },
];

export const initialDashboardState: DashboardState = {
  filters: initialFilters,
  widgets: initialWidgets
}