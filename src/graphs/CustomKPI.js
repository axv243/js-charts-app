import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';
import {Tooltip} from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CustomKPI = (props) => {

    return (
        <>
        <Box
        sx={{ p: 1, borderRadius: 2 }}
        boxShadow={5}
        width={"120%"}>
            <Box margin={"3%"}>
                <Typography><b>P&M COST / RO</b></Typography>
                <Stack direction={{ xs: 'column', md: 'row' }}>
                    <Tooltip title={"P&M COST / RO: " + props.data} placement='top' followCursor>
                        <Gauge width={200} height={200} value={props.data} startAngle={-90} endAngle={90} valueMax={350} text={({ value }) => `$${value}`}/>    
                    </Tooltip>
                    <Box marginTop={10}>
                        {props.data > 300 ? (
                            <Tooltip title="Previous Month: $203.45">
                                <ArrowDropUpIcon style={{ fontSize: 55, color:'green'}}/>    
                            </Tooltip>
                        ) : (
                            <Tooltip title="Previous Month: $331.81">
                                <ArrowDropDownIcon style={{ fontSize: 55, color:'red'}}/>    
                            </Tooltip>
                        )}
                    </Box>
                </Stack>
            </Box>
        </Box>
        </>
    );
};

export default CustomKPI;