// This is platonic, unchangeable by user applies
export type Promocode = {
  code: string;
  status: Status;
  codeType: CodeType;
  discount: number;
  maxDiscount: number;
  createdAt: string;
  start: string;
  end: string;
};

export type Status = 
  | 'active'
  | 'paused'
  | 'disabled';

export type CodeType = 'amount' | 'percent';