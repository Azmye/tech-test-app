import { format } from "date-fns";
import { Pagination } from "../../../components/Pagination";
import useTable from "../../../hooks/useTable";
import { useTransactionsQuery } from "../../../redux/api/transaction/transaction";
import { BiDetail } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const TABLE_HEAD = [
  { id: "noTransaction", label: "No. Transaction", align: "center" },
  { id: "date", label: "Date", align: "center" },
  { id: "sales", label: "Sales", align: "center" },
  { id: "action", label: "Action", align: "center" },
];

export default function ChallengeTransactionPage() {
  const { data } = useTransactionsQuery();
  const navigate = useNavigate();

  const { onChangePage, onChangeRowsPerPage, page, rowsPerPage } = useTable();

  const handleDetail = (id: number) => {
    navigate(`/challenge/transaction/${id}/details`);
  };

  return (
    <div>
      <h5 className="font-semibold text-3xl text-black/80">Transaction</h5>

      <div className="overflow-hidden shadow-md rounded-md mt-5">
        <table className="table min-w-full rounded-md text-gray-900">
          <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
            <tr>
              {TABLE_HEAD.map((item, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-4 py-5 font-medium sm:pl-6"
                >
                  {item.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-gray-900">
            {data
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((item, index) => (
                <tr key={index} className="group">
                  <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                    {item.transaction_number}
                  </td>
                  <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                    {format(new Date(item.created_at), "dd MMM yyyy")}
                  </td>
                  <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                    {item.sales_transactions.length}
                  </td>
                  <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                    <button
                      onClick={() => handleDetail(item.id)}
                      className="text-blue-500 hover:bg-blue-500 hover:text-white p-2 rounded-full"
                    >
                      <BiDetail fontSize={25} />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Pagination
        rowsPerPageOptions={[5]}
        count={data?.length || 0}
        page={page}
        rowsPerPage={rowsPerPage}
        onChangePage={onChangePage}
        onChangeRowsPerPage={onChangeRowsPerPage}
      />
    </div>
  );
}
