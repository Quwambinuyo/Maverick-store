// import { useState } from "react";
// import ReactPaginate from "react-paginate";

// type PProps = {
//   items: any[];
// };

// const PaginationContainer = ({ items }: PProps) => {
//   const [itemOffset, setItemOffset] = useState(0);

//   const itemsPerPage = 2;

//   const endOffset = itemOffset + itemsPerPage;
//   console.log(`Loading items from ${itemOffset} to ${endOffset}`);

//   const currentItems = items.slice(itemOffset, endOffset);
//   const pageCount = Math.ceil(items.length / itemsPerPage);

//   const handlePageClick = (event: any) => {
//     const newOffset = (event.selected * itemsPerPage) % items.length;
//     console.log(
//       `User requested page number ${event.selected}, which is offset ${newOffset}`
//     );
//     setItemOffset(newOffset);
//   };

//   return (
//     <ReactPaginate
//       breakLabel="..."
//       nextLabel="next >"
//       onPageChange={handlePageClick}
//       pageRangeDisplayed={5}
//       pageCount={pageCount}
//       previousLabel="< previous"
//       renderOnZeroPageCount={null}
//     />
//   );
// };

// export default PaginationContainer;
