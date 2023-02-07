export type Promocode = {
  code: string;
  status: Status;
  codeType: CodeType;
  value: number;
  maxValue: number;
  createdAt: string;
  start: string;
  end: string;
};

export type Status = 
  | 'active'
  | 'paused'
  | 'disabled';

export type CodeType = 'amount' | 'percent';