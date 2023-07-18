import React from "react";
import ChartBar from "./ChartBar";
import "../../styles/Chart.css";

const Chart = (props) =>{
    let datapointValues = props.datapoints.map((datapoint)=>(datapoint.value));
    let totalMaximum = Math.max(...datapointValues);
    return(
        <div className="chart">
            {props.datapoints.map((datapoint)=>(
                <ChartBar key={datapoint.label} value={datapoint.value} maxValue={totalMaximum} label={datapoint.label}></ChartBar>
            ))}
        </div>
    )
}

export default Chart;