'use client';
const DashboardShell = () => {
  return (
    <main className="text-text-muted max-w-7xl py-12 px-4 mx-auto flex flex-col gap-8 sm:px-6 lg:px-8">
      <header aria-labelledby="hero-heading" className="flex flex-col gap-y-3 p-8 rounded-lg bg-bg-surface">
        <h1 id="hero-heading" className="font-bold text-4xl md:text-5xl text-text-strong">Insights Board</h1>
        <p className="text-xl md:text-2xl text-text-muted">Get a clean read on revenue, reach, and conversion signals across your active campaigns.</p>
      </header>
      <section aria-labelledby="filters-heading" className="bg-bg-surface p-6 rounded-lg">
        <h2 id="filters-heading" className="text-text-strong">Global filters</h2>
        <div className="flex flex-col gap-y-6 sm:flex-row sm:gap-x-8">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="date-range">Date range</label>
            <select name="date-range" id="date-range" defaultValue="30d" className="border rounded-sm border-border-default">
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="category">Category</label>
            <select name="category" id="category" defaultValue="all" className="border rounded-sm border-border-default">
              <option value="all">All</option>
              <option value="tech">Tech</option>
              <option value="office">Office</option>
              <option value="furniture">Furniture</option>
            </select>
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="channel">Channel</label>
            <select name="channel" id="channel" defaultValue="all" className="border rounded-sm border-border-default">
              <option value="all">All</option>
              <option value="display">Display</option>
              <option value="search">Search</option>
              <option value="email">Email</option>
            </select>
          </div>
        </div>
      </section>
      <section aria-label="Dashboard widgets" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        <article className="bg-bg-surface p-6 rounded-lg">
          <h2>Revenue</h2>
          <p>Placeholder for a KPI summary card.</p>
        </article>
        <article className="bg-bg-surface p-6 rounded-lg">
          <h2>CTR trend</h2>
          <p>Placeholder for a line chart showing performance over time.</p>
        </article>
        <article className="bg-bg-surface p-6 rounded-lg">
          <h2>Category breakdown</h2>
          <p>Placeholder for a bar chart comparing campaign categories.</p>
        </article>
        <article className="bg-bg-surface p-6 rounded-lg">
          <h2>Channel mix</h2>
          <p>Placeholder for a second summary or comparison widget.</p>
        </article>
      </section>
    </main>
  );
};

export default DashboardShell;