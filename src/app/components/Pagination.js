"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Pagination from '@mui/material/Pagination';

const ListingPagination = ({
  onChange,
  totalData,
  OffSet,
  limit
  }) => {
  const [currentPage, setCurrentPage] = useState(1);
   
  useEffect(() => {
    if (OffSet === 0 || !OffSet) {
      setCurrentPage(1);
    }
  }, [OffSet]);

  const handlePagination = (event, page) => {
    setCurrentPage(page);
    onChange(page, limit); 
  };

  return (
    <>
          <div className="pagination-wrapper">          
               <Pagination
                count={Math.ceil(totalData / limit)} // Total pages
                page={currentPage}
                onChange={handlePagination}
                siblingCount={1}
                boundaryCount={1}
                color="primary"
                variant="outlined"
                shape="rounded"
              />
          </div>
     </>
  );
};

export default ListingPagination;
