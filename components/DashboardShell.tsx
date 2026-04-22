'use client';

import { useReducer, type ChangeEvent } from "react";
import { initialDashboardState } from "@/lib/dashboard/initialState";
import dashboardReducer from "@/lib/dashboard/reducer";
import {
  CategoryFilter,
  ChannelFilter,
  DateRange,
  DATE_RANGE_OPTIONS,
  CATEGORY_FILTER_OPTIONS,
  CHANNEL_FILTER_OPTIONS,
} from "@/types/dashboard";

const DashboardShell = () => {
  const [ state, dispatch ] = useReducer(dashboardReducer, initialDashboardState);

  const isDateRange = (value: string): value is DateRange => {
    return DATE_RANGE_OPTIONS.includes(value as DateRange);
  };

  const isCategoryFilter = (value: string): value is CategoryFilter => {
    return CATEGORY_FILTER_OPTIONS.includes(value as CategoryFilter);
  };

  const isChannelFilter = (value: string): value is ChannelFilter => {
    return CHANNEL_FILTER_OPTIONS.includes(value as ChannelFilter);
  };

  const handleFiltersStateUpdate = (event: ChangeEvent<HTMLSelectElement>): void => {
    const value = event.target.value;
    const name = event.target.name;

    switch (name) {
      case "date-range":
        if (isDateRange(value)) {
          dispatch({
            type: "filters/setDateRange",
            payload: value
          });
        }
        break;
      case "category":
        if (isCategoryFilter(value)) {
          dispatch({
            type: "filters/setCategory",
            payload: value
          });
        }
        break;
      case "channel":
        if (isChannelFilter(value)) {
          dispatch({
            type: "filters/setChannel",
            payload: value
          });
        }
        break;
      default:
        break;
    }
  };
  return (
    <main className="text-text-muted max-w-7xl py-12 px-4 mx-auto flex flex-col gap-8 sm:px-6 lg:px-8">
      <header 
        aria-labelledby="hero-heading"
        className="flex flex-col gap-y-3 p-8 rounded-lg bg-bg-surface shadow-md border border-border-default"
      >
        <h1 id="hero-heading" className="font-bold text-4xl md:text-5xl text-text-strong">Insights Board</h1>
        <p className="text-xl md:text-2xl text-text-muted">Get a clean read on revenue, reach, and conversion signals across your active campaigns.</p>
      </header>
      <section 
        aria-labelledby="filters-heading" 
        className="bg-bg-surface p-6 rounded-lg shadow-md border border-border-default"
      >
        <h2 id="filters-heading" className="text-text-strong font-medium">Global filters</h2>
        <div className="flex flex-col gap-y-6 sm:flex-row sm:gap-x-8 text-sm">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="date-range" className="text-sm">Date range</label>
            <select 
              name="date-range"
              id="date-range"
              value={state.filters.dateRange}
              onChange={handleFiltersStateUpdate}
              className="border rounded-sm border-border-default px-4 h-12 bg-bg-surface-soft
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-secondary focus-visible:ring-offset-2
              focus-visible:ring-offset-bg-surface focus-visible:border-accent-secondary"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="category" className="text-sm">Category</label>
            <select
              name="category"
              id="category"
              value={state.filters.category}
              onChange={handleFiltersStateUpdate}
              className="border rounded-sm border-border-default px-4 h-12 bg-bg-surface-soft
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-secondary focus-visible:ring-offset-2
              focus-visible:ring-offset-bg-surface focus-visible:border-accent-secondary"
            >
              <option value="all">All</option>
              <option value="tech">Tech</option>
              <option value="office">Office</option>
              <option value="furniture">Furniture</option>
            </select>
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="channel" className="text-sm">Channel</label>
            <select 
              name="channel"
              id="channel" 
              value={state.filters.channel}
              onChange={handleFiltersStateUpdate}
              className="border rounded-sm border-border-default px-4 h-12 bg-bg-surface-soft
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-secondary focus-visible:ring-offset-2
              focus-visible:ring-offset-bg-surface focus-visible:border-accent-secondary"
            >
              <option value="all">All</option>
              <option value="display">Display</option>
              <option value="search">Search</option>
              <option value="email">Email</option>
            </select>
          </div>
        </div>
      </section>
      <section 
        aria-label="Dashboard widgets"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
      >
        <article className="bg-bg-surface p-6 rounded-lg shadow-md border border-border-default flex flex-col gap-y-2">
          <h2 className="text-base text-text-strong font-medium">Revenue</h2>
          <p className="text-text-muted text-sm">Placeholder for a KPI summary card.</p>
        </article>
        <article className="bg-bg-surface p-6 rounded-lg shadow-md border border-border-default flex flex-col gap-y-2">
          <h2 className="text-base text-text-strong font-medium">CTR trend</h2>
          <p className="text-text-muted text-sm">Placeholder for a line chart showing performance over time.</p>
        </article>
        <article className="bg-bg-surface p-6 rounded-lg shadow-md border border-border-default flex flex-col gap-y-2">
          <h2 className="text-base text-text-strong font-medium">Category breakdown</h2>
          <p className="text-text-muted text-sm">Placeholder for a bar chart comparing campaign categories.</p>
        </article>
        <article className="bg-bg-surface p-6 rounded-lg shadow-md border border-border-default flex flex-col gap-y-2">
          <h2 className="text-base text-text-strong font-medium">Channel mix</h2>
          <p className="text-text-muted text-sm">Placeholder for a second summary or comparison widget.</p>
        </article>
      </section>
    </main>
  );
};

export default DashboardShell;