import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { GridApiCommunity } from '@mui/x-data-grid/models/api/gridApiCommunity';
import { columns, bookingData } from 'data/booking/bookingTableData';
import { MutableRefObject } from 'react';

const BookingTable = ({ apiRef }: { apiRef: MutableRefObject<GridApiCommunity> }) => {
  return (
    <Box
      sx={{
        height: '100%',
        width: 1,
        mt: 2,
        mb: 4,
      }}
    >
      <DataGrid
        apiRef={apiRef}
        columns={columns}
        rows={bookingData}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
      />
    </Box>
  );
};

export default BookingTable;
