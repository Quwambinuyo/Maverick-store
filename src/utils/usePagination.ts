import { useState } from "react";

export const usePagination = (
  array: any = [],
  currentPage: number,
  itemsPerPage: number = 2
) => {
  const [searchText, setSearchText] = useState("");
  const totalPages = Math.ceil(array?.length / itemsPerPage);

  const getSlicedData = () => {
    // console.log(searchText);
    const filteredHistory = array?.filter(
      (d: any) =>
        d?.orderId?.toLowerCase().startsWith(searchText.toLowerCase()) ||
        d?.name?.toLowerCase().startsWith(searchText.toLowerCase()) ||
        d?.logistic?.toLowerCase().startsWith(searchText.toLowerCase())
    );

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return filteredHistory?.slice(startIndex, endIndex);
  };

  return {
    totalPages,
    getSlicedData,
    setSearchText,
    searchText,
  };
};
