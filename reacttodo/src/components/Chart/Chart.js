import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';


// props.dataPoints : fia el array taba3 el shhur with value
const Chart = (props) => {




    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);//(12) [0, 0, 0, 0, 0, 1094, 0, 0, 450, 0, 0, 0]
    // console.log(dataPointValues);
    const totalMaximum = Math.max(...dataPointValues);//1094


    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}//Jun
                    value={dataPoint.value}//450
                    maxValue={totalMaximum}//1094
                    label={dataPoint.label}//Jun
                />
            ))}
        </div>
    )
}

export default Chart;