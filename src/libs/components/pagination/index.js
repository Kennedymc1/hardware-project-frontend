import React from 'react';
import PropTypes from 'prop-types';


const Pagination = ({postsPerPage, totalPosts, paginate, currentPage}) => {

  const pageNumbers = []
  const totalPages = Math.ceil(totalPosts / postsPerPage)

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const numberStyles = number => ` ${number === currentPage && `z-10 outline-none border-blue-300 shadow-outline-blue bg-gray-100 text-gray-700`} -ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 cursor-pointer`

  const previousPage = () => {
    if (currentPage === 1) {
      return
    }
    paginate(currentPage - 1)
  }

  const nextPage = () => {
    if (currentPage === totalPages) {
      return
    }
    paginate(currentPage + 1)
  }

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-center border-t border-gray-200 sm:px-6">
      <nav className="relative z-0 inline-flex shadow-sm">
        <a onClick={previousPage}
           className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150 cursor-pointer"
           aria-label="Previous">
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"/>
          </svg>
        </a>

        <ul>
          {pageNumbers.map(number => (
            <li
              key={number}
              className={numberStyles(number)}
              onClick={(e) => paginate(number)}>
              <a className='page-link'>
                {number}
              </a>
            </li>
          ))}
        </ul>

        <a onClick={nextPage}
           className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150 cursor-pointer"
           aria-label="Next">
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"/>
          </svg>
        </a>
      </nav>
    </div>

  );
};

Pagination.propTypes = {};

export default Pagination;
