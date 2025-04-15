import { Button, Paper, Stack, Typography } from '@mui/material';
import { useGridApiRef } from '@mui/x-data-grid';
import IconifyIcon from 'components/base/IconifyIcon';
import CustomPagination from 'components/common/CustomPagination';
import BookingTable from 'components/sections/booking/bookingTable';
import SearchFilter from 'components/common/SearchFilter';

const Bookings = () => {
  const apiRef = useGridApiRef();

  return (
    <Paper
      sx={theme => ({
        p: theme.spacing(2, 2.5),
        width: 1,
      })}
    >
      <Stack
        direction={'row'}
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: 2, mb: 4 }}
      >
        <Typography variant="h5" color="common.black">
          Recent Bookings
        </Typography>

        <Stack direction={'row'}>
          <Button
            variant="contained"
            sx={theme => ({
              p: theme.spacing(0.625, 1.5),
              borderRadius: 1.5,
            })}
            startIcon={<IconifyIcon icon="heroicons:adjustments-horizontal-16-solid" />}
          >
            <Typography variant="body2">Filter</Typography>
          </Button>
          <SearchFilter apiRef={apiRef} />
          <Button
            variant="contained"
            color="secondary"
            sx={theme => ({
              p: theme.spacing(0.625, 1.5),
              borderRadius: 1.5,
            })}
            endIcon={<IconifyIcon icon="heroicons:arrow-down-tray-20-solid" />}
          >
            <Typography variant="body2">Export</Typography>
          </Button>
        </Stack>
      </Stack>
      <BookingTable apiRef={apiRef} />
      <CustomPagination apiRef={apiRef} />
    </Paper>
  );
};

export default Bookings;
