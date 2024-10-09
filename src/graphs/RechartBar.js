import { Box } from '@mui/material';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, ResponsiveContainer } from 'recharts';

const RechartBar = (props) => {

    return(
        <>
        <Box
        sx={{ p: 1, borderRadius: 2 }}
        boxShadow={5}
        width={"110%"}>
            <Box margin={"2%"}>
            <BarChart
            width={500}
            height={300}
            data={props.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="MONTH"/>
            <YAxis domain={[0,250]}/>
            <Tooltip />
            <Legend />
            <Bar dataKey="RO_COUNT" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          </BarChart>
        </Box>
        </Box>
        </>
    );
}

export default RechartBar;