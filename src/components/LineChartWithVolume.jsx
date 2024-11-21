import { useState } from 'react';
import {
  ChartCanvas,
  Chart,
  XAxis,
  YAxis,
  LineSeries,
  MouseCoordinateX,
  MouseCoordinateY,
  CrossHairCursor,
  VolumeProfileSeries,
} from 'react-financial-charts';
import { scaleTime } from 'd3-scale';

const data = [
  { date: new Date('2023-01-01'), close: 100, volume: 2000 },
  { date: new Date('2023-01-02'), close: 110, volume: 2500 },
  { date: new Date('2023-01-03'), close: 120, volume: 3000 },
  // Add more data here...
];

const LineChartWithVolume = () => {
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
          seriesName="Line Chart with Volume"
          data={data}
          xAccessor={(d) => d.date}
          xScale={xScale}
          xExtents={xExtents}
        >
          <Chart id={1} yExtents={(d) => d.close}>
            <XAxis />
            <YAxis />
            <LineSeries yAccessor={(d) => d.close} />
            <MouseCoordinateX />
            <MouseCoordinateY />
            <CrossHairCursor />
          </Chart>
          <Chart id={2} yExtents={(d) => d.volume} origin={(w, h) => [0, h / 2]}>
            <VolumeProfileSeries />
          </Chart>
        </ChartCanvas>
      )}
    </div>
  );
};

export default LineChartWithVolume;
