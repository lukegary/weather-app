import React from 'react'
import { Chart } from 'react-charts'

const MyChart = (props) => {
  const data = React.useMemo(
    () => [
      {
        label: 'Temperature',
        data: [["Low", props.low], ["Current", props.temperature], ["High", props.high]]
      }
    ],
    []
  )

  const data2 = React.useMemo(
    () => [
      {
        label: 'Humidity',
        data: [["Humidity", props.humidity]]
      }
    ],
    []
  )

  const data3 = React.useMemo(
    () => [
      {
        label: 'Pressure',
        data: [["Pressure", props.pressure]]
      }
    ],
    []
  )

  const series = React.useMemo(
    () => ({
      type: 'bar',
      series: 10,
      dataType: 'ordinal'
    }),
    []
  )

  const series2 = React.useMemo(
    () => ({
      type: 'bar'
    }),
    []
  )




  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { position: 'left', type: 'linear', stacked: true }
    ],
    []
  )

  return( 
    // A react-chart hyper-responsively and continuusly fills the available
    // space of its parent element automatically
    <div
      style={{
        width: '200px',
        height: '200px',
        display: 'block',
        margin: '0 auto'
      }}
    >
      <Chart data={data} axes={axes} series={series} tooltip  />
      <Chart data={data2} series={series} axes={axes} tooltip />
      <Chart data={data3} series={series2} axes={axes} tooltip />
    </div>
  )
}

export default MyChart;