/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Column, Grid, Tile, Heading } from '@carbon/react';

import { Footer } from '../../components/footer/Footer';
import { PageLayout } from '../../layouts/page-layout';

// The styles are imported into index.scss by default.
// Do the same unless you have a good reason not to.

/**
 * A component for displaying a metric with a title and value
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the metric
 * @param {string|number} props.value - The value to display
 * @param {string} [props.className] - Additional CSS class names
 * @returns {JSX.Element} - Rendered component
 */
const NumberTile = ({ title, value, className }) => {
  return (
    <Column sm={4} md={4} lg={4} xlg={4}>
      <Tile
        className={`cs--dashboard__tile cs--dashboard__tile--number ${className || ''}`}
      >
        <dl>
          <dt>{title}</dt>
          <dd>{value}</dd>
        </dl>
      </Tile>
    </Column>
  );
};

/**
 * A component for displaying data visualizations or tables
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the data section
 * @param {React.ReactNode} props.children - The content to display
 * @param {number} [props.columnSpan=8] - Number of columns to span (8 or 16)
 * @returns {JSX.Element} - Rendered component
 */
const DataTile = ({ title, children, columnSpan = 8 }) => {
  return (
    <Column sm={4} md={8} lg={columnSpan} xlg={columnSpan}>
      <Tile className="cs--dashboard__tile cs--dashboard__tile--data">
        <Heading className="cs--dashboard__tile-heading">{title}</Heading>
        {children}
      </Tile>
    </Column>
  );
};

const Dashboard = () => {
  // Sample data - in a real app, this would come from an API or state
  const metrics = [
    { title: 'Active users', value: Math.round(Math.random() * 1000) },
    { title: 'Total revenue', value: `$${Math.round(Math.random() * 10000)}` },
    { title: 'Conversion rate', value: `${(Math.random() * 10).toFixed(2)}%` },
    { title: 'New signups', value: Math.round(Math.random() * 100) },
  ];

  return (
    <PageLayout
      className="cs--dashboard"
      fallback={<p>Loading dashboard page...</p>}
    >
      <Grid>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <Heading className="cs--dashboard__heading">Dashboard</Heading>
        </Column>
        {metrics.map((metric, index) => (
          <NumberTile
            key={`metric-${index}`}
            title={metric.title}
            value={metric.value}
          />
        ))}

        <DataTile title="Visualization">
          <div className="cs--dashboard__visualization-placeholder">
            <p>Interactive visualization will appear here</p>
          </div>
        </DataTile>
        <DataTile title="Data Table">
          <div className="cs--dashboard__table-placeholder">
            <p>Data table with filtering and sorting capabilities</p>
          </div>
        </DataTile>
        <Column
          sm={4}
          md={8}
          lg={16}
          xlg={16}
          className="cs--dashboard__footer-wrapper"
        >
          <Footer />
        </Column>
      </Grid>
    </PageLayout>
  );
};

export default Dashboard;
