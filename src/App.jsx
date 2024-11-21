
import './App.css'
import AreaChartWithTooltip from './components/AreaChartWithTooltip'
import FinancialChart from './components/FinancialChart'
import LineChartWithVolume from './components/LineChartWithVolume'
import OHLCChart from './components/OHLCChart'
import StackedBarChart from './components/StackedBarChart'

function App() {
 

  return (
 <div>
  <FinancialChart/>
  <LineChartWithVolume/>
  <OHLCChart/>
  <AreaChartWithTooltip/>
  <StackedBarChart/>
 </div>

  )
}

export default App
