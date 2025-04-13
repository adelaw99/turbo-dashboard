export interface Customer {
  customer_id: string;
  name: string;
  email: string;
  phone: string;
}

export interface Car {
  car_id: string;
  make: string;
  model: string;
  year: number;
  license_plate: string;
}

export interface RentalDetails {
  pickup_date: string;
  return_date: string;
  pickup_location: string;
  return_location: string;
}

export interface Payment {
  amount: number;
  currency: string;
  payment_status: string;
}

export interface Booking {
  booking_id: string;
  customer: Customer;
  car: Car;
  rental_details: RentalDetails;
  payment: Payment;
  status: string;
}

export const carBookingData: Booking[] = [
  {
    booking_id: 'B001',
    customer: {
      customer_id: 'C123',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1234567890',
    },
    car: {
      car_id: 'CAR001',
      make: 'Toyota',
      model: 'Camry',
      year: 2022,
      license_plate: 'ABC-1234',
    },
    rental_details: {
      pickup_date: '2025-04-15',
      return_date: '2025-04-20',
      pickup_location: 'Downtown Branch',
      return_location: 'Airport Branch',
    },
    payment: {
      amount: 250.0,
      currency: 'USD',
      payment_status: 'Paid',
    },
    status: 'Confirmed',
  },
  {
    booking_id: 'B002',
    customer: {
      customer_id: 'C124',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+1987654321',
    },
    car: {
      car_id: 'CAR002',
      make: 'Honda',
      model: 'Civic',
      year: 2021,
      license_plate: 'XYZ-5678',
    },
    rental_details: {
      pickup_date: '2025-04-18',
      return_date: '2025-04-22',
      pickup_location: 'City Center',
      return_location: 'City Center',
    },
    payment: {
      amount: 180.0,
      currency: 'USD',
      payment_status: 'Pending',
    },
    status: 'Pending',
  },
  {
    booking_id: 'B003',
    customer: {
      customer_id: 'C440',
      name: 'Alicia Reid',
      email: 'pcantu@clark.org',
      phone: '+1-649-390-4539x670',
    },
    car: {
      car_id: 'CAR639',
      make: 'BMW',
      model: '3 Series',
      year: 2019,
      license_plate: '755003',
    },
    rental_details: {
      pickup_date: '2025-04-27',
      return_date: '2025-04-30',
      pickup_location: 'Westside Station',
      return_location: 'Airport Branch',
    },
    payment: {
      amount: 345.63,
      currency: 'USD',
      payment_status: 'Pending',
    },
    status: 'Pending',
  },
  {
    booking_id: 'B004',
    customer: {
      customer_id: 'C856',
      name: 'Mr. Jason Baker',
      email: 'randall24@davis.com',
      phone: '(831)503-5695x984',
    },
    car: {
      car_id: 'CAR496',
      make: 'Toyota',
      model: 'Camry',
      year: 2019,
      license_plate: '460-XVP',
    },
    rental_details: {
      pickup_date: '2025-04-29',
      return_date: '2025-05-02',
      pickup_location: 'Downtown Branch',
      return_location: 'North Hub',
    },
    payment: {
      amount: 216.75,
      currency: 'USD',
      payment_status: 'Paid',
    },
    status: 'Confirmed',
  },
  {
    booking_id: 'B005',
    customer: {
      customer_id: 'C331',
      name: 'Zachary Blake',
      email: 'ejohnson@shepard.info',
      phone: '(851)999-6243',
    },
    car: {
      car_id: 'CAR636',
      make: 'Toyota',
      model: 'Camry',
      year: 2022,
      license_plate: 'KAR 727',
    },
    rental_details: {
      pickup_date: '2025-04-26',
      return_date: '2025-05-03',
      pickup_location: 'Downtown Branch',
      return_location: 'North Hub',
    },
    payment: {
      amount: 464.54,
      currency: 'USD',
      payment_status: 'Pending',
    },
    status: 'Cancelled',
  },
  {
    booking_id: 'B006',
    customer: {
      customer_id: 'C134',
      name: 'Peggy Rivera',
      email: 'csmith@yahoo.com',
      phone: '3568518479',
    },
    car: {
      car_id: 'CAR976',
      make: 'Nissan',
      model: 'Altima',
      year: 2022,
      license_plate: '9666',
    },
    rental_details: {
      pickup_date: '2025-05-10',
      return_date: '2025-05-13',
      pickup_location: 'Airport Branch',
      return_location: 'Downtown Branch',
    },
    payment: {
      amount: 266.14,
      currency: 'USD',
      payment_status: 'Paid',
    },
    status: 'Cancelled',
  },
  {
    booking_id: 'B007',
    customer: {
      customer_id: 'C874',
      name: 'Billy Murray',
      email: 'garciakristen@gmail.com',
      phone: '830.880.1803x5934',
    },
    car: {
      car_id: 'CAR817',
      make: 'BMW',
      model: '3 Series',
      year: 2018,
      license_plate: 'NEU 130',
    },
    rental_details: {
      pickup_date: '2025-04-13',
      return_date: '2025-04-18',
      pickup_location: 'Downtown Branch',
      return_location: 'Downtown Branch',
    },
    payment: {
      amount: 162.51,
      currency: 'USD',
      payment_status: 'Paid',
    },
    status: 'Pending',
  },
  {
    booking_id: 'B008',
    customer: {
      customer_id: 'C372',
      name: 'Lisa Brady',
      email: 'josephmckenzie@hotmail.com',
      phone: '+1-562-396-0771x55427',
    },
    car: {
      car_id: 'CAR233',
      make: 'Hyundai',
      model: 'Elantra',
      year: 2019,
      license_plate: 'UAX S00',
    },
    rental_details: {
      pickup_date: '2025-05-08',
      return_date: '2025-05-10',
      pickup_location: 'Downtown Branch',
      return_location: 'Westside Station',
    },
    payment: {
      amount: 196.78,
      currency: 'USD',
      payment_status: 'Pending',
    },
    status: 'Confirmed',
  },
  {
    booking_id: 'B009',
    customer: {
      customer_id: 'C808',
      name: 'Sara Cooper',
      email: 'meadowshunter@ball-aguilar.com',
      phone: '751-474-2299',
    },
    car: {
      car_id: 'CAR574',
      make: 'Audi',
      model: 'A4',
      year: 2020,
      license_plate: 'MJ-9255',
    },
    rental_details: {
      pickup_date: '2025-04-29',
      return_date: '2025-05-02',
      pickup_location: 'North Hub',
      return_location: 'North Hub',
    },
    payment: {
      amount: 480.1,
      currency: 'USD',
      payment_status: 'Pending',
    },
    status: 'Confirmed',
  },
  {
    booking_id: 'B010',
    customer: {
      customer_id: 'C883',
      name: 'Stephanie Harris',
      email: 'tristansalas@gmail.com',
      phone: '(818)024-3227x2038',
    },
    car: {
      car_id: 'CAR457',
      make: 'BMW',
      model: '3 Series',
      year: 2019,
      license_plate: '479 JY0',
    },
    rental_details: {
      pickup_date: '2025-05-09',
      return_date: '2025-05-15',
      pickup_location: 'North Hub',
      return_location: 'Airport Branch',
    },
    payment: {
      amount: 116.84,
      currency: 'USD',
      payment_status: 'Paid',
    },
    status: 'Pending',
  },
  {
    booking_id: 'B011',
    customer: {
      customer_id: 'C756',
      name: 'Joanna Sexton',
      email: 'qho@jefferson.biz',
      phone: '+1-501-089-7657',
    },
    car: {
      car_id: 'CAR379',
      make: 'Chevrolet',
      model: 'Malibu',
      year: 2019,
      license_plate: 'YGJ-1305',
    },
    rental_details: {
      pickup_date: '2025-04-15',
      return_date: '2025-04-17',
      pickup_location: 'Westside Station',
      return_location: 'Westside Station',
    },
    payment: {
      amount: 479.7,
      currency: 'USD',
      payment_status: 'Pending',
    },
    status: 'Confirmed',
  },
  {
    booking_id: 'B012',
    customer: {
      customer_id: 'C608',
      name: 'Ricky Price',
      email: 'ochavez@bray-stevens.info',
      phone: '001-164-661-6706',
    },
    car: {
      car_id: 'CAR153',
      make: 'Audi',
      model: 'A4',
      year: 2022,
      license_plate: '6P Z6028',
    },
    rental_details: {
      pickup_date: '2025-04-20',
      return_date: '2025-04-22',
      pickup_location: 'North Hub',
      return_location: 'Westside Station',
    },
    payment: {
      amount: 445.63,
      currency: 'USD',
      payment_status: 'Paid',
    },
    status: 'Pending',
  },
  {
    booking_id: 'B013',
    customer: {
      customer_id: 'C216',
      name: 'Ashley Perry',
      email: 'zharris@gmail.com',
      phone: '079-522-3086',
    },
    car: {
      car_id: 'CAR448',
      make: 'Honda',
      model: 'Civic',
      year: 2021,
      license_plate: 'IP 2474',
    },
    rental_details: {
      pickup_date: '2025-04-29',
      return_date: '2025-05-03',
      pickup_location: 'North Hub',
      return_location: 'City Center',
    },
    payment: {
      amount: 287.17,
      currency: 'USD',
      payment_status: 'Paid',
    },
    status: 'Confirmed',
  },
  {
    booking_id: 'B014',
    customer: {
      customer_id: 'C504',
      name: 'Janice Molina',
      email: 'qparker@cox.net',
      phone: '001-091-329-6074',
    },
    car: {
      car_id: 'CAR484',
      make: 'Volkswagen',
      model: 'Passat',
      year: 2022,
      license_plate: '6F 11841',
    },
    rental_details: {
      pickup_date: '2025-04-20',
      return_date: '2025-04-24',
      pickup_location: 'Downtown Branch',
      return_location: 'City Center',
    },
    payment: {
      amount: 100.72,
      currency: 'USD',
      payment_status: 'Paid',
    },
    status: 'Confirmed',
  },
  {
    booking_id: 'B015',
    customer: {
      customer_id: 'C749',
      name: 'Mercedes Guerrero',
      email: 'cynthiamiller@brooks.net',
      phone: '0126667793',
    },
    car: {
      car_id: 'CAR688',
      make: 'Hyundai',
      model: 'Elantra',
      year: 2019,
      license_plate: 'UPC 646',
    },
    rental_details: {
      pickup_date: '2025-04-28',
      return_date: '2025-05-05',
      pickup_location: 'Airport Branch',
      return_location: 'Airport Branch',
    },
    payment: {
      amount: 338.31,
      currency: 'USD',
      payment_status: 'Paid',
    },
    status: 'Pending',
  },
  {
    booking_id: 'B016',
    customer: {
      customer_id: 'C977',
      name: 'Christopher Barnes',
      email: 'burkebrett@gmail.com',
      phone: '041.975.1589x4914',
    },
    car: {
      car_id: 'CAR695',
      make: 'Ford',
      model: 'Focus',
      year: 2020,
      license_plate: 'W22-14F',
    },
    rental_details: {
      pickup_date: '2025-04-24',
      return_date: '2025-05-01',
      pickup_location: 'Downtown Branch',
      return_location: 'North Hub',
    },
    payment: {
      amount: 410.04,
      currency: 'USD',
      payment_status: 'Paid',
    },
    status: 'Pending',
  },
  {
    booking_id: 'B017',
    customer: {
      customer_id: 'C464',
      name: 'Jeffrey Herrera',
      email: 'darryl96@gmail.com',
      phone: '+1-883-239-6997',
    },
    car: {
      car_id: 'CAR302',
      make: 'Volkswagen',
      model: 'Passat',
      year: 2021,
      license_plate: 'EVX 224',
    },
    rental_details: {
      pickup_date: '2025-04-27',
      return_date: '2025-05-02',
      pickup_location: 'City Center',
      return_location: 'Westside Station',
    },
    payment: {
      amount: 371.96,
      currency: 'USD',
      payment_status: 'Paid',
    },
    status: 'Pending',
  },
  {
    booking_id: 'B018',
    customer: {
      customer_id: 'C597',
      name: 'Jennifer Peters',
      email: 'francisco42@hotmail.com',
      phone: '(292)281-7666x26525',
    },
    car: {
      car_id: 'CAR153',
      make: 'Chevrolet',
      model: 'Malibu',
      year: 2021,
      license_plate: '987TC',
    },
    rental_details: {
      pickup_date: '2025-05-09',
      return_date: '2025-05-12',
      pickup_location: 'Downtown Branch',
      return_location: 'Downtown Branch',
    },
    payment: {
      amount: 204.45,
      currency: 'USD',
      payment_status: 'Paid',
    },
    status: 'Cancelled',
  },
  {
    booking_id: 'B019',
    customer: {
      customer_id: 'C192',
      name: 'Rachel Torres',
      email: 'andrewsmith@gmail.com',
      phone: '(361)996-6416',
    },
    car: {
      car_id: 'CAR494',
      make: 'Kia',
      model: 'Optima',
      year: 2020,
      license_plate: '52PW6',
    },
    rental_details: {
      pickup_date: '2025-05-02',
      return_date: '2025-05-09',
      pickup_location: 'Westside Station',
      return_location: 'Westside Station',
    },
    payment: {
      amount: 246.01,
      currency: 'USD',
      payment_status: 'Pending',
    },
    status: 'Confirmed',
  },
  {
    booking_id: 'B020',
    customer: {
      customer_id: 'C801',
      name: 'Ryan Walker',
      email: 'grimescathy@webb-bennett.com',
      phone: '(496)342-8085x86922',
    },
    car: {
      car_id: 'CAR518',
      make: 'Kia',
      model: 'Optima',
      year: 2020,
      license_plate: '7MO X95',
    },
    rental_details: {
      pickup_date: '2025-04-16',
      return_date: '2025-04-18',
      pickup_location: 'City Center',
      return_location: 'Downtown Branch',
    },
    payment: {
      amount: 189.66,
      currency: 'USD',
      payment_status: 'Pending',
    },
    status: 'Confirmed',
  },
  {
    booking_id: 'B021',
    customer: {
      customer_id: 'C521',
      name: 'Ebony Hunter',
      email: 'martinezlisa@ochoa.com',
      phone: '982-212-7756x0542',
    },
    car: {
      car_id: 'CAR954',
      make: 'Honda',
      model: 'Civic',
      year: 2019,
      license_plate: '33M I24',
    },
    rental_details: {
      pickup_date: '2025-04-14',
      return_date: '2025-04-16',
      pickup_location: 'Downtown Branch',
      return_location: 'Airport Branch',
    },
    payment: {
      amount: 270.44,
      currency: 'USD',
      payment_status: 'Paid',
    },
    status: 'Pending',
  },
  {
    booking_id: 'B022',
    customer: {
      customer_id: 'C817',
      name: 'Karen Goodwin',
      email: 'amandajimenez@jenkins-gutierrez.com',
      phone: '001-697-053-1916x277',
    },
    car: {
      car_id: 'CAR924',
      make: 'Chevrolet',
      model: 'Malibu',
      year: 2020,
      license_plate: 'WTZ8982',
    },
    rental_details: {
      pickup_date: '2025-04-17',
      return_date: '2025-04-23',
      pickup_location: 'Downtown Branch',
      return_location: 'Westside Station',
    },
    payment: {
      amount: 199.39,
      currency: 'USD',
      payment_status: 'Pending',
    },
    status: 'Confirmed',
  },
  {
    booking_id: 'B023',
    customer: {
      customer_id: 'C328',
      name: 'Charles Johnson',
      email: 'tfoster@henry.biz',
      phone: '392-231-4773',
    },
    car: {
      car_id: 'CAR791',
      make: 'Hyundai',
      model: 'Elantra',
      year: 2022,
      license_plate: 'SGZ 6501',
    },
    rental_details: {
      pickup_date: '2025-04-24',
      return_date: '2025-04-27',
      pickup_location: 'Airport Branch',
      return_location: 'Westside Station',
    },
    payment: {
      amount: 229.86,
      currency: 'USD',
      payment_status: 'Paid',
    },
    status: 'Pending',
  },
  {
    booking_id: 'B024',
    customer: {
      customer_id: 'C913',
      name: 'Dawn Owens',
      email: 'brucejordan@ferrell-ortiz.org',
      phone: '640.576.7550',
    },
    car: {
      car_id: 'CAR391',
      make: 'Hyundai',
      model: 'Elantra',
      year: 2022,
      license_plate: 'EJK3878',
    },
    rental_details: {
      pickup_date: '2025-04-29',
      return_date: '2025-05-03',
      pickup_location: 'City Center',
      return_location: 'Downtown Branch',
    },
    payment: {
      amount: 347.23,
      currency: 'USD',
      payment_status: 'Paid',
    },
    status: 'Pending',
  },
  {
    booking_id: 'B025',
    customer: {
      customer_id: 'C380',
      name: 'Jessica Miller',
      email: 'shepherdalejandra@mccann.com',
      phone: '+1-335-009-7944x729',
    },
    car: {
      car_id: 'CAR193',
      make: 'Hyundai',
      model: 'Elantra',
      year: 2023,
      license_plate: '6-5336Z',
    },
    rental_details: {
      pickup_date: '2025-05-03',
      return_date: '2025-05-06',
      pickup_location: 'Westside Station',
      return_location: 'North Hub',
    },
    payment: {
      amount: 496.9,
      currency: 'USD',
      payment_status: 'Paid',
    },
    status: 'Pending',
  },
  {
    booking_id: 'B026',
    customer: {
      customer_id: 'C471',
      name: 'Kevin Watson',
      email: 'michaelle@cross.biz',
      phone: '+1-826-057-0062',
    },
    car: {
      car_id: 'CAR966',
      make: 'Kia',
      model: 'Optima',
      year: 2020,
      license_plate: 'P95 5NU',
    },
    rental_details: {
      pickup_date: '2025-04-13',
      return_date: '2025-04-19',
      pickup_location: 'North Hub',
      return_location: 'Westside Station',
    },
    payment: {
      amount: 167.15,
      currency: 'USD',
      payment_status: 'Paid',
    },
    status: 'Confirmed',
  },
  {
    booking_id: 'B027',
    customer: {
      customer_id: 'C588',
      name: 'Jacqueline Oliver',
      email: 'pyu@hotmail.com',
      phone: '+1-884-424-0453x480',
    },
    car: {
      car_id: 'CAR371',
      make: 'Toyota',
      model: 'Camry',
      year: 2020,
      license_plate: 'V21 2ZW',
    },
    rental_details: {
      pickup_date: '2025-05-09',
      return_date: '2025-05-11',
      pickup_location: 'City Center',
      return_location: 'Airport Branch',
    },
    payment: {
      amount: 129.18,
      currency: 'USD',
      payment_status: 'Pending',
    },
    status: 'Confirmed',
  },
  {
    booking_id: 'B028',
    customer: {
      customer_id: 'C383',
      name: 'Jacob Hunt',
      email: 'pbrown@hotmail.com',
      phone: '7207562650',
    },
    car: {
      car_id: 'CAR975',
      make: 'Chevrolet',
      model: 'Malibu',
      year: 2023,
      license_plate: '261 XRA',
    },
    rental_details: {
      pickup_date: '2025-05-10',
      return_date: '2025-05-12',
      pickup_location: 'City Center',
      return_location: 'Airport Branch',
    },
    payment: {
      amount: 260.76,
      currency: 'USD',
      payment_status: 'Pending',
    },
    status: 'Pending',
  },
  {
    booking_id: 'B029',
    customer: {
      customer_id: 'C425',
      name: 'Lisa Johnson',
      email: 'stephaniesilva@anderson-jordan.com',
      phone: '(691)990-0112x15139',
    },
    car: {
      car_id: 'CAR307',
      make: 'Honda',
      model: 'Civic',
      year: 2018,
      license_plate: '934-NGS',
    },
    rental_details: {
      pickup_date: '2025-04-30',
      return_date: '2025-05-03',
      pickup_location: 'North Hub',
      return_location: 'Westside Station',
    },
    payment: {
      amount: 472.72,
      currency: 'USD',
      payment_status: 'Paid',
    },
    status: 'Pending',
  },
  {
    booking_id: 'B030',
    customer: {
      customer_id: 'C645',
      name: 'Mrs. Pamela Lopez',
      email: 'ecurtis@lara.biz',
      phone: '001-161-531-7472x91104',
    },
    car: {
      car_id: 'CAR283',
      make: 'Audi',
      model: 'A4',
      year: 2022,
      license_plate: 'TXA 9509',
    },
    rental_details: {
      pickup_date: '2025-04-27',
      return_date: '2025-05-04',
      pickup_location: 'Downtown Branch',
      return_location: 'Downtown Branch',
    },
    payment: {
      amount: 441.73,
      currency: 'USD',
      payment_status: 'Paid',
    },
    status: 'Pending',
  },
];
