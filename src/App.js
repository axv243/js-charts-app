import './App.css';
import { Box, InputLabel, MenuItem, Select, Grid } from '@mui/material';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import { usePapaParse } from 'react-papaparse';
import RechartBar from './graphs/RechartBar';
import GoogleRegion from './graphs/GoogleRegion';
import GooglePie from './graphs/GooglePie';
import CustomKPI from './graphs/CustomKPI';
import AntKPI from './graphs/AntKPI';

function App() {
  // bring in different charting packages/libraries and expirement with loading times, looks, etc.
  const { readString } = usePapaParse();
  const [data, setData] = useState();
  const [selection, setSelection] = useState(0);
  const [refreshKey, setRefreshKey] = useState(false);

  const handleFetch = (event) => {
    setRefreshKey(!refreshKey);
    setSelection(event.target.value);
    fetch( './mock_data.csv' )
          .then( response => response.text() )
          .then( responseText => {
            readString(responseText, {
              worker: true,
              header: true,
              complete: (results) => {
                let filteredArr = [];
                let resultArr = results.data;
                resultArr.forEach((row) => {
                  if(row["ENTERPRISE_NAME"].includes('2') && event.target.value == 2){
                    filteredArr.push(row);
                  } else if (row["ENTERPRISE_NAME"].includes('1') && event.target.value == 1){
                    filteredArr.push(row);
                  }
                });
                setData(filteredArr);
              },
          });  
        });
  };
      
  return (
    <Box margin={"2%"}>
      <h1>
        Examples of different chart packages
      </h1>  
      <InputLabel>Shop Selection</InputLabel>
      <Box width={200}>
        <Select
          fullWidth
          value={selection}
          label="Shop Selection"
          onChange={handleFetch}
        >
          <MenuItem value={1}>MSO 1</MenuItem>
          <MenuItem value={2}>MSO 2</MenuItem>
        </Select>  
      </Box>
      <h3>Recharts</h3>
      <h6><i>Pros: Versatile, runs on D3.js, most have built-in tooltips. Cons: Not a ton of KPI abilities (no gauge chart?)</i></h6>
      <Grid container>
        <Grid item>
          <RechartBar data={data}/>
        </Grid>
      </Grid>
      <h3>Google React Charts</h3>
      <h6><i>Pros: Multiple types of graphs/charts. Cons: very weird data feed (nested arrays), does not refresh on state change (use keys)</i></h6>
      <Grid container>
        <Grid item>
          <GoogleRegion data={data} key={refreshKey}/>
        </Grid>
        <Grid item>
          <GooglePie data={data} key={refreshKey}/>
        </Grid>
      </Grid>
      <h3>Custom MUI KPI Charts</h3>
      <h6><i>Pros: Already have installed, could become modular, easy. Cons: Limited amount of graphs, little-to-no animations, very basic</i></h6>
      <Grid container>
        <Grid item>
          <CustomKPI data={selection == 1 ? (240.57) : (301.22)}/>
        </Grid>
      </Grid>
      <h3>Ant Design KPI</h3>
      <h6><i>Pros: Well-known, easy to use, similar KPI style to diagnostics.  Cons: Not a wide selection of graphs</i></h6>
      <Grid container>
        <Grid item>
          <AntKPI data={selection}/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
