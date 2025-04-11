import { Button, Paper, Stack, Typography } from "@mui/material"
import IconifyIcon from "components/base/IconifyIcon"
import BookingTable from "components/sections/booking/bookingTable"
// import SearchFilter from "components/common/SearchFilter"

const Booking=()=>{
    return(
        <Paper>
            <Stack alignItems="center" justifyContent="space-between" spacing={2}>
                <Typography variant="h5" color="common.black">
                    Recent Bookings
                </Typography>  

                <Stack direction={'row'}>
                    <Button
                        variant="contained"
                        sx={(theme) => ({
                            p: theme.spacing(0.625, 1.5),
                            borderRadius: 1.5,
                        })}
                        startIcon={<IconifyIcon icon="heroicons:adjustments-horizontal-16-solid"/>}
                        >
                        <Typography variant="body2">Filter</Typography>
                    </Button>
                    {/* <SearchFilter apiRef={}/> */}
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={(theme) => ({
                            p: theme.spacing(0.625, 1.5),
                            borderRadius: 1.5,
                        })}
                        endIcon={<IconifyIcon icon="heroicons:arrow-down-tray-20-solid"/>}
                        >
                        <Typography variant="body2">Export</Typography>
                    </Button>
                </Stack>              
            </Stack>
            <BookingTable/>
        </Paper>
    )
}

export default Booking