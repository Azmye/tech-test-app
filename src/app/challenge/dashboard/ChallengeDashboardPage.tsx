import { Pagination } from "../../../components/Pagination";
import useTable from "../../../hooks/useTable";
import { useUsersQuery } from "../../../redux/api/user/user";

const TABLE_HEAD = [
  { id: "fullname", label: "Fullname", align: "center" },
  { id: "username", label: "Username", align: "center" },
  { id: "status", label: "Status", align: "center" },
];

export default function ChallengeDashboardPage() {
  const { data } = useUsersQuery();

  const { onChangePage, onChangeRowsPerPage, page, rowsPerPage } = useTable();

  return (
    <div>
      <h5 className="font-semibold text-3xl text-black/80">Dashboard</h5>

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
                    {item.detail.fullname}
                  </td>
                  <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                    {item.username}
                  </td>
                  <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                    {item.detail_type.split("_")[1]}
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
