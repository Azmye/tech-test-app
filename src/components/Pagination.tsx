import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

type Props = {
  page: number;
  onChangePage: (value: number) => void;
  rowsPerPage: number;
  onChangeRowsPerPage: (value: number) => void;
  count: number;
  rowsPerPageOptions: number[];
};

export const Pagination = ({
  page,
  onChangePage,
  rowsPerPage,
  onChangeRowsPerPage,
  count,
  rowsPerPageOptions,
}: Props) => {
  const totalPages = Math.ceil(count / rowsPerPage);

  const handlePreviousPage = () => {
    if (page > 0) {
      onChangePage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages - 1) {
      onChangePage(page + 1);
    }
  };

  const getPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];

    if (totalPages <= 5) {
      // Show all pages if there are 5 or fewer
      for (let i = 0; i < totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show the first two pages
      pageNumbers.push(0, 1);

      if (page > 3) {
        pageNumbers.push("...");
      }

      // Show current page and adjacent pages
      const start = Math.max(page - 1, 2);
      const end = Math.min(page + 1, totalPages - 3);
      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }

      if (page < totalPages - 4) {
        pageNumbers.push("...");
      }

      // Always show the last two pages
      pageNumbers.push(totalPages - 2, totalPages - 1);
    }

    return pageNumbers;
  };

  return (
    <div className="mt-5 flex flex-row items-center justify-between">
      <div>
        <p className="inline-block">Show</p>
        <select
          className="ring-1 ring-black outline-none px-2 py-1 rounded-sm mx-1"
          value={rowsPerPage}
          onChange={(e) => onChangeRowsPerPage(parseInt(e.target.value))}
        >
          {rowsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <p className="inline-block">per page of {count} results</p>
      </div>

      <div>
        <ul className="flex border border-blue-500 rounded-md">
          <li
            className="border-r border-r-blue-500 w-14 py-1 px-2 flex items-center justify-center cursor-pointer"
            onClick={handlePreviousPage}
          >
            <FaAngleLeft />
          </li>
          {getPageNumbers().map((pageNumber, index) =>
            pageNumber === "..." ? (
              <li
                key={index}
                className="border-r border-blue-500 w-10 py-1 px-2 flex items-center justify-center"
              >
                ...
              </li>
            ) : (
              <li
                key={index}
                className={`border-r border-blue-500 w-10 py-1 px-2 flex items-center justify-center cursor-pointer ${
                  page === pageNumber ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => onChangePage(pageNumber as number)}
              >
                {typeof pageNumber === "number" ? pageNumber + 1 : pageNumber}
              </li>
            )
          )}
          <li
            className="w-14 py-1 px-2 flex items-center justify-center cursor-pointer"
            onClick={handleNextPage}
          >
            <FaAngleRight />
          </li>
        </ul>
      </div>
    </div>
  );
};
