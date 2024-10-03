import React from "react";

export default function useTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const onChangeRowsPerPage = (value: number) => {
    setRowsPerPage(value);
    setPage(0);
  };

  const onChangePage = (newPage: number) => {
    setPage(newPage);
  };

  return {
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    onChangePage,
    onChangeRowsPerPage,
  };
}
