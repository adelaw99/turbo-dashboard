import { GridColDef } from '@mui/x-data-grid';
import { carBookingData } from './car_booking_data';

interface IBookingData {
  id: number;
  bookingId: string;
  bookingDate: string;
  customerName: string;
  carModel: string;
  returnDate: string;
  amount: number;
  paymentStatus: 'Paid' | 'Pending';
  status: 'Confirmed' | 'Pending' | 'Cancelled';
}

export const columns: GridColDef<(typeof bookingData)[number]>[] = [
  {
    field: 'bookingId',
    headerName: 'Booking ID',
    flex: 1.5,
    minWidth: 200,
  },
  {
    field: 'customerName',
    headerName: 'Client Name',
    flex: 1,
    minWidth: 150,
    sortable: false,
  },
  {
    field: 'bookingDate',
    headerName: 'Booking Date',
    flex: 1,
    minWidth: 150,
    sortable: false,
  },
  {
    field: 'returnDate',
    headerName: 'Return Date',
    flex: 1,
    minWidth: 150,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    flex: 1,
    minWidth: 150,
  },
  {
    field: 'status',
    headerName: 'Status',
  },
];

export const bookingData: IBookingData[] = carBookingData.map((item, index) => ({
  id: index + 1,
  bookingId: item.booking_id,
  bookingDate: item.rental_details.pickup_date,
  customerName: item.customer.name,
  carModel: item.car.model,
  returnDate: item.rental_details.return_date,
  amount: item.payment.amount,
  paymentStatus: item.payment.payment_status as 'Paid' | 'Pending',
  status: item.status as 'Confirmed' | 'Pending' | 'Cancelled',
}));
