interface ISale {
  id: number;
  transaction_batch_id: number;
  item_id: number;
  qty: number;
  item_price: number;
  total_gross_price: number;
  discount: number;
  created_by: null;
  updated_by: null;
  created_at: string;
  updated_at: string;
}

export interface ITransaction {
  id: number;
  transaction_number: string;
  customer_id: number;
  transaction_time: string;
  employee_id: number;
  created_by: null;
  updated_by: null;
  created_at: string;
  updated_at: string;
  sales_transactions: ISale[];
}
