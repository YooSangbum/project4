import { useState } from 'react';

import TourSelfList from './TourSelfList';
import Paginations from './Pagination';

function Tour({ list }) {
  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage] = useState(10);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = list.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <section className="Tour selfList">
        <ul className="selfList_ul">
          {currentData.map((a, i) => {
            return <TourSelfList a={a} key={i} />;
          })}
        </ul>
      </section>
      <Paginations
        itemsPerPage={itemsPerPage}
        totalItems={list.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default Tour;
