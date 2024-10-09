import { Box, Typography, Tooltip } from '@mui/material';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Row, Statistic } from 'antd';

const AntKPI = (props) => {

    return (
        <>
        <Box
        sx={{ p: 1, borderRadius: 2 }}
        boxShadow={5}
        width={"225px"}>
            <Box margin={"2%"}>
        <Row gutter={16}>
            {props.data == 1 ? (
                <Tooltip title="TOTAL SALES: $787,601.55" placement='top' arrow followCursor>
                    <Card bordered={false}>
                        <Statistic
                        title="TOTAL SALES"
                        value={"$787,601.55"}
                        precision={2}
                        valueStyle={{
                            color: '#3f8600',
                        }}
                        prefix={<ArrowUpOutlined />}
                        />
                    </Card>    
                </Tooltip>
            ) : (
                <Tooltip title="TOTAL SALES: $787,601.55" placement='top' arrow followCursor>
                    <Card bordered={false}>
                        <Statistic
                        title="TOTAL SALES"
                        value={"$536,908.55"}
                        precision={2}
                        valueStyle={{
                            color: '#cf1322',
                        }}
                        prefix={<ArrowDownOutlined />}
                        
                        />
                    </Card>
                </Tooltip>)}
        </Row>
        </Box>
        </Box>
        </>
    );
};

export default AntKPI;