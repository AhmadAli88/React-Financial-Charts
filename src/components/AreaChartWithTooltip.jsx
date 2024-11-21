import { useState } from 'react';
import {
  ChartCanvas,
  Chart,
  XAxis,
  YAxis,
  AreaSeries,
  MouseCoordinateX,
  MouseCoordinateY,
  CrossHairCursor,
//   Tooltip,
} from 'react-financial-charts';
import { scaleTime } from 'd3-scale';

const data = [
  { date: new Date('2023-01-01'), close: 100 },
  { date: new Date('2023-01-02'), close: 110 },
  { date: new Date('2023-01-03'), close: 120 },
  // Add more data here...
];

const AreaChartWithTooltip = () => {
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
          seriesName="Area Chart with Tooltip"
          data={data}
          xAccessor={(d) => d.date}
          xScale={xScale}
          xExtents={xExtents}
        >
          <Chart id={1} yExtents={(d) => d.close}>
            <XAxis />
            <YAxis />
            <AreaSeries yAccessor={(d) => d.close} />
            <MouseCoordinateX />
            <MouseCoordinateY />
            <CrossHairCursor />
            {/* <Tooltip /> */}
          </Chart>
        </ChartCanvas>
      )}
    </div>
  );
};

export default AreaChartWithTooltip;
