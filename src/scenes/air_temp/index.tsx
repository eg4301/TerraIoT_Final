// @ts-nocheck

import { Box, CircularProgress, useTheme } from '@mui/material';
import Header from '../../components/Header';
import { useFetchSensorData } from '../dashboard/hooks/useFetchSensorData';
import AirTempChart from '../../charts/AirTempChart';
import { tokens } from '../../theme';
import { DateRangeInput } from '../dashboard/components/DateRangePicker';
import { GraphTypesCTA } from '../../components/GraphTypesCTA';
import { useSearchParams } from 'react-router-dom';
import { DatasetEnum } from '../../shared/enums/dataset.enum';

const Air_temp = () => {
  const [searchParams] = useSearchParams();
  const dataset = searchParams.get('dataset') || DatasetEnum.HYDROPONICS;
  const { loading, atmTemperatureSeries, handleOnDateRangeChange } =
    useFetchSensorData();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const renderGraph = () => {
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

    if (!atmTemperatureSeries) {
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
      <Box height="75vh">
        <Box backgroundColor={colors.primary[450]}>
          <AirTempChart
            atmTemperatureSeries={atmTemperatureSeries}
            height="300"
          />
        </Box>
      </Box>
    );
  };

  if (dataset === DatasetEnum.SOIL) {
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
    <Box m="20px">
      <Box
        display="flex"
        flexWrap="wrap"
        mb={1}
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="flex-start"
        alignItems={{ xs: 'flex-start', md: 'center' }}
        gap={{ xs: 2, md: 3, lg: 5 }}
      >
        <Header title="Air Temperature" subtitle="Ambient Parameter" />
        <DateRangeInput onChange={handleOnDateRangeChange} />
        <GraphTypesCTA />
      </Box>

      {renderGraph()}
    </Box>
  );
};

export default Air_temp;
