import { useTransactionQuery } from "../../../redux/api/transaction/transaction";
import { useParams } from "react-router-dom";
import { useUserQuery } from "../../../redux/api/user/user";
import { format } from "date-fns";

export default function TransactionDetails() {
  const { id } = useParams();

  const { data: transactionDetail } = useTransactionQuery({ id: Number(id) });
  const { data: customerDetail } = useUserQuery({
    id: Number(transactionDetail?.customer_id),
  });
  const { data: employeeDetail } = useUserQuery({
    id: Number(transactionDetail?.employee_id),
  });

  return (
    <div>
      <h5 className="font-semibold text-3xl text-black/80">
        Transaction Details
      </h5>

      <div className="shadow-md p-3 mt-3 border rounded-md">
        <div className="flex flex-row">
          <div className="w-1/2">
            <h5 className="text-lg font-semibold">Details Customer</h5>
            <div>
              <h6>Nama : {customerDetail?.detail.fullname}</h6>
            </div>
          </div>
          <div className="w-1/2">
            <h5 className="text-lg font-semibold">Detail Employee</h5>
            <div>
              <h6>Nama : {employeeDetail?.detail.fullname}</h6>
            </div>
          </div>
        </div>

        <div className="border-t mt-5 pt-2">
          <h5 className="text-xl font-semibold">Details Sales</h5>

          {transactionDetail?.sales_transactions.map((item, index) => (
            <div className="flex flex-row gap-5" key={index}>
              <p>Price : {item.item_price}</p>
              <p>qty : {item.qty}</p>
              <p>Total Gross : {item.total_gross_price}</p>
              <p>
                Sales Date: {format(new Date(item.created_at), "dd MMM yyyy")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
