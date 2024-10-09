import { Box } from '@mui/material';
import { useState } from 'react';
import { Chart } from "react-google-charts";

const GoogleRegion = (props) => {
    const [data, setData] = useState([]);

    if(props.data && data.length == 0){
        let usCount = 0;
        let canCount = 0;
        props.data.forEach((row) => {
            if(row["COUNTRY"] == "United States"){
                usCount++;
            } else if (row["COUNTRY"] == "Canada"){
                canCount++;
            }
        });
        const formattedArr = [
            ["Country", "Shop Count"],
            ["United States", usCount],
            ["Canada", canCount],
        ];
        setData(formattedArr);
    }
    
    return (
        <>
        <Box>
            <Chart
            key={props.key}
            chartEvents={[
                {
                eventName: "select",
                callback: ({ chartWrapper }) => {
                    const chart = chartWrapper.getChart();
                    const selection = chart.getSelection();
                    if (selection.length === 0) return;
                    const region = data[selection[0].row + 1];
                },
                },
            ]}
            chartType="GeoChart"
            width="100%"
            height="100%"
            data={data}
            />    
        </Box>
        </>
    );
};

export default GoogleRegion;