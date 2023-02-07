import { Promocode } from "./types";

export const mockPromocodes: Promocode[] = [
  {
    code: 'SAVE20',
    status: 'active',
    codeType: 'percent',
    discount: 10,
    maxDiscount: 50,
    createdAt: '2022-12-01T12:00:00.000Z',
    start: '2022-12-01T12:00:00.000Z',
    end: '2022-12-31T12:00:00.000Z',
  },
  {
    code: 'SPRINGCLEANING',
    status: 'paused',
    codeType: 'amount',
    discount: 20,
    maxDiscount: 100,
    createdAt: '2022-12-01T12:00:00.000Z',
    start: '2022-12-01T12:00:00.000Z',
    end: '2022-12-31T12:00:00.000Z',
  },
  {
    code: 'MARCHMADNESS',
    status: 'paused',
    codeType: 'amount',
    discount: 40,
    maxDiscount: 100,
    createdAt: '2022-12-01T12:00:00.000Z',
    start: '2022-12-01T12:00:00.000Z',
    end: '2022-12-31T12:00:00.000Z',
  },
  {
    code: 'HOLIDAYS',
    status: 'active',
    codeType: 'amount',
    discount: 50,
    maxDiscount: 50,
    createdAt: '2022-12-01T12:00:00.000Z',
    start: '2022-12-01T12:00:00.000Z',
    end: '2022-12-31T12:00:00.000Z',
  },
  {
    code: 'PROSHOP',
    status: 'disabled',
    codeType: 'percent',
    discount: 0.3,
    maxDiscount: 100,
    createdAt: '2022-12-01T12:00:00.000Z',
    start: '2022-12-01T12:00:00.000Z',
    end: '2022-12-31T12:00:00.000Z',
  }
];