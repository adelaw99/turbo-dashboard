import { Box, Typography } from '@mui/material';

export const SmallStatusPill = ({ status }: { status: 'Paid' | 'Pending' }) => {
  return (
    <Box
      sx={theme => ({
        backgroundColor:
          status === 'Paid' ? theme.palette.success.main : theme.palette.warning.main,
        borderRadius: 1,
        padding: theme.spacing(0.5, 1),
      })}
    >
      <Typography
        sx={theme => ({
          color: theme.palette.common.white,
          fontSize: '10px',
          textTransform: 'capitalize',
          display: 'flex',
          alignItems: 'center',
        })}
      >
        {status}
      </Typography>
    </Box>
  );
};

export const MainStatusPill = ({ status }: { status: 'Confirmed' | 'Pending' | 'Cancelled' }) => {
  return (
    <Box
      sx={theme => ({
        backgroundColor:
          status === 'Confirmed'
            ? theme.palette.success.main
            : status === 'Pending'
              ? theme.palette.warning.main
              : theme.palette.error.main,
        color: theme.palette.common.white,
        borderRadius: 1,
        padding: theme.spacing(0.5, 1),
        display: 'inline-block',
      })}
    >
      <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
        {status}
      </Typography>
    </Box>
  );
};
