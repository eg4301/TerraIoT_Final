// @ts-nocheck

import {
  Box,
  CircularProgress,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import AirTempChart from '../../charts/AirTempChart';
import CO2Chart from '../../charts/CO2Chart';
import O2Chart from '../../charts/O2Chart';
import HumidityChart from '../../charts/HumidityChart';
import WaterTempChart from '../../charts/WaterTempChart';
import ConductivityChart from '../../charts/ConductivityChart';
import PHChart from '../../charts/PHChart';
import { useFetchSensorData } from './hooks/useFetchSensorData';
import { DateRangeInput } from './components/DateRangePicker';
import { GraphTypesCTA } from '../../components/GraphTypesCTA';
import { useSearchParams } from 'react-router-dom';
import { DatasetEnum } from '../../shared/enums/dataset.enum';

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const dataset = searchParams.get('dataset') || DatasetEnum.HYDROPONICS;
  const {
    loading,
    atmTemperatureSeries,
    co2Series,
    o2Series,
    humiditySeries,
    waterSeries,
    conductivitySeries,
    pHSeries,
    handleOnDateRangeChange,
  } = useFetchSensorData();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const renderGraphs = () => {
    if (loading) {
      return (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            color: colors.greenAccent[500],
          }}
        >
          <CircularProgress color="inherit" />
        </Box>
      );
    }
    if (
      !atmTemperatureSeries ||
      !co2Series ||
      !o2Series ||
      !humiditySeries ||
      !waterSeries ||
      !conductivitySeries ||
      !pHSeries
    ) {
      return (
        <Box
          sx={{
            color: '#fff',
            margin: '10px, 0px',
            fontSize: '18px',
            fontWeight: 'medium',
            textAlign: 'center',
          }}
        >
          No Date Found!
        </Box>
      );
    }

    return (
      <Grid container spacing={2}>
        {/* ROW 2 */}
        {dataset === DatasetEnum.HYDROPONICS && (
          <Grid item xs={12} md={6}>
            <Box backgroundColor={colors.primary[450]}>
              <Box
                p="7px 30px"
                display="flex "
                justifyContent="space-between"
                alignItems="center"
              >
                <Box m="10px 0 0 0">
                  <Typography
                    variant="h3"
                    fontWeight="600"
                    color={colors.grey[150]}
                  >
                    Air Temperature
                  </Typography>
                  <Typography
                    variant="h5"
                    // fontWeight="bold"
                    color={colors.greenAccent[500]}
                  >
                    Ambient Data
                  </Typography>
                </Box>
              </Box>
              <Box height="280px" m="-20px 0 0 0" p="10px" width="100%">
                <AirTempChart
                  atmTemperatureSeries={atmTemperatureSeries}
                  height="200"
                />
              </Box>
            </Box>
          </Grid>
        )}

        {/* 
 
         {/* ROW 2 */}
        {dataset === DatasetEnum.HYDROPONICS && (
          <Grid item xs={12} md={6}>
            <Box backgroundColor={colors.primary[450]}>
              <Box
                p="7px 30px"
                display="flex "
                justifyContent="space-between"
                alignItems="center"
              >
                <Box m="10px 0 0 0">
                  <Typography
                    variant="h3"
                    fontWeight="600"
                    color={colors.grey[150]}
                  >
                    CO2
                  </Typography>
                  <Typography
                    variant="h5"
                    // fontWeight="bold"
                    color={colors.greenAccent[500]}
                  >
                    Ambient Data
                  </Typography>
                </Box>
                <Box></Box>
              </Box>
              <Box height="280px" m="-20px 0 0 0" p="10px" width="100%">
                <CO2Chart series={co2Series} height="200" />
              </Box>
            </Box>
          </Grid>
        )}

        {/* 
 
         {/* ROW 3 */}
        {dataset === DatasetEnum.HYDROPONICS && (
          <Grid item xs={12} md={6}>
            <Box backgroundColor={colors.primary[450]}>
              <Box
                p="7px 30px"
                display="flex "
                justifyContent="space-between"
                alignItems="center"
              >
                <Box m="10px 0 0 0">
                  <Typography
                    variant="h3"
                    fontWeight="600"
                    color={colors.grey[150]}
                  >
                    O2
                  </Typography>
                  <Typography
                    variant="h5"
                    // fontWeight="bold"
                    color={colors.greenAccent[500]}
                  >
                    Ambient Data
                  </Typography>
                </Box>
                <Box></Box>
              </Box>
              <Box height="280px" m="-20px 0 0 0" p="10px" width="100%">
                <O2Chart series={o2Series} height="200" />
              </Box>
            </Box>
          </Grid>
        )}

        {/* 
 
         {/* ROW 3 */}
        <Grid item xs={12} md={6}>
          <Box backgroundColor={colors.primary[450]}>
            <Box
              p="7px 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box m="10px 0 0 0">
                <Typography
                  variant="h3"
                  fontWeight="600"
                  color={colors.grey[150]}
                >
                  {dataset === DatasetEnum.HYDROPONICS
                    ? 'Humidity'
                    : 'Soil Moisture'}
                </Typography>
                <Typography
                  variant="h5"
                  // fontWeight="bold"
                  color={colors.greenAccent[500]}
                >
                  Ambient Data
                </Typography>
              </Box>
              <Box></Box>
            </Box>
            <Box height="280px" m="-20px 0 0 0" p="10px" width="100%">
              <HumidityChart series={humiditySeries} height="200" />
            </Box>
          </Box>
        </Grid>
        {/* 
 
         {/* ROW 4 */}
        <Grid item xs={12} md={6}>
          <Box backgroundColor={colors.primary[450]}>
            <Box
              p="7px 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box m="10px 0 0 0">
                <Typography
                  variant="h3"
                  fontWeight="600"
                  color={colors.grey[150]}
                >
                  Water Temperature
                </Typography>
                <Typography
                  variant="h5"
                  // fontWeight="bold"
                  color={colors.greenAccent[500]}
                >
                  Water Data
                </Typography>
              </Box>
              <Box></Box>
            </Box>
            <Box height="280px" m="-20px 0 0 0" p="10px" width="100%">
              <WaterTempChart series={waterSeries} height="200" />
            </Box>
          </Box>
        </Grid>

        {/* ROW 4 */}
        <Grid item xs={12} md={6}>
          <Box backgroundColor={colors.primary[450]}>
            <Box
              p="7px 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box m="10px 0 0 0">
                <Typography
                  variant="h3"
                  fontWeight="600"
                  color={colors.grey[150]}
                >
                  Conductivity
                </Typography>
                <Typography
                  variant="h5"
                  // fontWeight="bold"
                  color={colors.greenAccent[500]}
                >
                  Water Data
                </Typography>
              </Box>
              <Box></Box>
            </Box>
            <Box height="280px" m="-20px 0 0 0" p="10px" width="100%">
              <ConductivityChart series={conductivitySeries} height="200" />
            </Box>
          </Box>
        </Grid>
        {/* 
 
         {/* ROW 4 */}
        <Grid item xs={12} md={6}>
          <Box backgroundColor={colors.primary[450]}>
            <Box
              p="7px 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box m="10px 0 0 0">
                <Typography
                  variant="h3"
                  fontWeight="600"
                  color={colors.grey[150]}
                >
                  pH
                </Typography>
                <Typography
                  variant="h5"
                  // fontWeight="bold"
                  color={colors.greenAccent[500]}
                >
                  Water Data
                </Typography>
              </Box>
              <Box></Box>
            </Box>
            <Box height="280px" m="-20px 0 0 0" p="10px" width="100%">
              <PHChart series={pHSeries} height="200" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box
        display="flex"
        flexWrap="wrap"
        mb={1}
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="flex-start"
        alignItems={{ xs: 'flex-start', md: 'center' }}
        gap={{ xs: 2, md: 3, lg: 5 }}
      >
        <Header title="DashBoard" subtitle="Welcome to your dashboard" />
        <DateRangeInput onChange={handleOnDateRangeChange} />
        <GraphTypesCTA />
      </Box>

      {/* GRID & CHARTS */}
      {renderGraphs()}
    </Box>
  );
};

export default Dashboard;
