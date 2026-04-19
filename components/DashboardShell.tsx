'use client';

const DashboardShell = () => {
  return (
    <main className="mx-auto flex flex-col">
      <header aria-labelledby="hero-heading">
        <h1 id="hero-heading" className="font-bold text-3xl">Insights Board</h1>
        <p className="font-semibold text-2xl text-gray-700">Get a clean read on revenue, reach, and conversion signals across your active campaigns.</p>
      </header>
      <section aria-labelledby="filters-heading">
        <h2 id="filters-heading">Global filters</h2>
        <div>
          <label htmlFor="date-range">Choose a date range:</label>
          <select name="date-range" id="date-range" defaultValue="30d">
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
        </div>
        <div>
          <label htmlFor="category">Choose a category:</label>
          <select name="category" id="category" defaultValue="all">
            <option value="all">All</option>
            <option value="tech">Tech</option>
            <option value="office">Office</option>
            <option value="furniture">Furniture</option>
          </select>
        </div>
        <div>
          <label htmlFor="channel">Choose a channel:</label>
          <select name="channel" id="channel" defaultValue="all">
            <option value="all">All</option>
            <option value="display">Display</option>
            <option value="search">Search</option>
            <option value="email">Email</option>
          </select>
        </div>
      </section>
      <section aria-label="Dashboard widgets">
        <article>
          <h2>Revenue</h2>
          <p>Placeholder for a KPI summary card.</p>
        </article>
        <article>
          <h2>CTR trend</h2>
          <p>Placeholder for a line chart showing performance over time.</p>
        </article>
        <article>
          <h2>Category breakdown</h2>
          <p>Placeholder for a bar chart comparing campaign categories.</p>
        </article>
        <article>
          <h2>Channel mix</h2>
          <p>Placeholder for a second summary or comparison widget.</p>
        </article>
      </section>
    </main>
  );
};

export default DashboardShell;