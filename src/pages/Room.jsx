import { useState } from 'react';

import RoomSelfList from './RoomSelfList';
import Paginations from './Pagination';

function Room({ list }) {
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
      <section className="Food selfList">
        <ul className="selfList_ul">
          {currentData.map((a, i) => {
            return <RoomSelfList a={a} i={i} key={i} />;
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

export default Room;
