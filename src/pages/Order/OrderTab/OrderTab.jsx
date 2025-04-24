import React, { useState } from 'react';
import FoodCard from '../../../components/FoodCard/FoodCard';

const OrderTab = ({ items }) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // optional scroll to top
  };

  return (
    <div className="mt-10 mb-10">
      <div className="grid md:grid-cols-3 gap-10">
        {currentItems.map(item => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>

      {/* Pagination UI */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`btn btn-sm ${currentPage === index + 1 ? 'btn-active bg-orange-400 text-white' : 'btn-outline'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderTab;
