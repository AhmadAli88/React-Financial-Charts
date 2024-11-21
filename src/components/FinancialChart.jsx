import { useState } from 'react';
import {
  ChartCanvas,
  Chart,
  XAxis,
  YAxis,
  CandlestickSeries,
  MouseCoordinateX,
  MouseCoordinateY,
  CrossHairCursor,
} from 'react-financial-charts';

import { scaleTime } from 'd3-scale';

const data = [
  { date: new Date('2023-01-01'), open: 100, high: 110, low: 95, close: 105 },
  { date: new Date('2023-01-02'), open: 105, high: 115, low: 100, close: 110 },
  { date: new Date('2023-01-03'), open: 110, high: 120, low: 105, close: 115 },
  // Add more data here...
];

const FinancialChart = () => {
  const [showChart, setShowChart] = useState(true); // Manage chart visibility state

  const xScale = scaleTime();  // Correct xScale using d3's scaleTime

  const xExtents = [data[0].date, data[data.length - 1].date];

  // Toggle the visibility of the chart (this is just for testing)
  const toggleChartVisibility = () => {
    setShowChart(!showChart);
  };

  return (
    <div>
      <button onClick={toggleChartVisibility}>Toggle Chart</button> {/* Toggle button to hide/show chart */}
      
      {showChart && (
        <ChartCanvas
          height={400}
          width={600}
          ratio={3}
          margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
          seriesName="Financial Chart"
          data={data}
          xAccessor={(d) => d.date}
          xScale={xScale}  // Pass the correctly configured xScale
          xExtents={xExtents}
        >
          <Chart id={1} yExtents={(d) => [d.high, d.low]}>
            <XAxis />
            <YAxis />
            <CandlestickSeries />
            <MouseCoordinateX />
            <MouseCoordinateY />
            <CrossHairCursor />
          </Chart>
        </ChartCanvas>
      )}
    </div>
  );
};

export default FinancialChart;
