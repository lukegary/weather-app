import React from 'react'
import { Chart } from 'react-charts'

const MyChart = (props) => {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 2',
        data: [["Low", props.low], ["Current", props.temperature], ["High", props.high]]
      }
    ],
    []
  )

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  return( 
    // A react-chart hyper-responsively and continuusly fills the available
    // space of its parent element automatically
    <div
      style={{
        width: '400px',
        height: '300px',
        display: 'block',
        margin: '0 auto'
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  )
}

export default MyChart;