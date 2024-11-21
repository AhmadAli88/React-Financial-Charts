import { useState } from 'react';
import {
  ChartCanvas,
  Chart,
  XAxis,
  YAxis,
  BarSeries,
  MouseCoordinateX,
  MouseCoordinateY,
  CrossHairCursor,
} from 'react-financial-charts';
import { scaleTime } from 'd3-scale';

const data = [
  { date: new Date('2023-01-01'), open: 100, high: 110, low: 95, close: 105, volume: 2000 },
  { date: new Date('2023-01-02'), open: 105, high: 115, low: 100, close: 110, volume: 2500 },
  { date: new Date('2023-01-03'), open: 110, high: 120, low: 105, close: 115, volume: 3000 },
  // Add more data here...
];

const StackedBarChart = () => {
  const [showChart, setShowChart] = useState(true);

  const xScale = scaleTime();
  const xExtents = [data[0].date, data[data.length - 1].date];

  const toggleChartVisibility = () => {
    setShowChart(!showChart);
  };

  return (
    <div>
      <button onClick={toggleChartVisibility}>Toggle Chart</button>

      {showChart && (
        <ChartCanvas
          height={400}
          width={600}
          ratio={3}
          margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
          seriesName="Stacked Bar Chart"
          data={data}
          xAccessor={(d) => d.date}
          xScale={xScale}
          xExtents={xExtents}
        >
          <Chart id={1} yExtents={(d) => [d.high, d.low]}>
            <XAxis />
            <YAxis />
            <BarSeries yAccessor={(d) => d.volume} />
            <MouseCoordinateX />
            <MouseCoordinateY />
            <CrossHairCursor />
          </Chart>
        </ChartCanvas>
      )}
    </div>
  );
};

export default StackedBarChart;
