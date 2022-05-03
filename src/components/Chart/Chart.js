import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    // grabs the value of each data point and converts it into a value so we are returned an array of values
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    // .max() wants a list of comma separated vlaues, so by using the spread operator we can extract those values from the array so .max() can run
    const totalMaximum = Math.max(...dataPointValues)
    console.log(`Total Maximum: ${totalMaximum}`);
    return (
        <div className="chart">
            {
                props.dataPoints.map((dataPoint) => {
                    return <ChartBar 
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={totalMaximum}
                        label={dataPoint.label}
                    />
                })
            }
        </div>
    )
};

export default Chart;