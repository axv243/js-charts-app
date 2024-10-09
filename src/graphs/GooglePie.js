import { Box } from '@mui/material';
import { useState } from 'react';
import { Chart } from "react-google-charts";

const GooglePie = (props) => {
    const [data, setData] = useState([]);

    if(props.data && data.length == 0){
        let aCount = 0;
        let bCount = 0;
        let cCount = 0;
        props.data.forEach((row) => {
            if(row["SHOP_NAME"].includes('Shop A')){
                aCount += parseInt(row["RO_COUNT"]);
            } else if (row["SHOP_NAME"].includes('Shop B')){
                bCount += parseInt(row["RO_COUNT"]);
            } else if (row["SHOP_NAME"].includes('Shop C')){
                cCount += parseInt(row["RO_COUNT"]);
            }
        });
        const formattedArr = [
            ["Shop Name", "RO Count"],
            ["Shop A", aCount],
            ["Shop B", bCount],
            ["Shop C", cCount],
        ];
        setData(formattedArr);
    }
    
    return (
        <>
        <Box>
            <Chart
                key={props.key}
                chartType="PieChart"
                data={data}
                options={{title: "RO's per Shop"}}
                width={"100%"}
                height={"400px"}
            />
        </Box>
        </>
    );
};

export default GooglePie;