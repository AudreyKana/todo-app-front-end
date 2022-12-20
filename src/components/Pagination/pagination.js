import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginationApi } from "../../redux/todoSlice";

export const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const elementNumbersPages = 2;
  const count = useSelector((state) => state.tasks.count);
  const maxPage = Math.ceil(count / elementNumbersPages);
  const buttonNumbers = [];

  const dispatch = useDispatch();

  const handlePageChange = (p) => {
    dispatch(paginationApi(p));
  };

  for (let i = 1; i <= maxPage; i++) {
    const button = (
      <li
        className={`page-item ${
          currentPage === i ? " bg-blue-600 shadow-md rounded text-white" : ""
        }`}
      >
        <button
          className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      </li>
    );
    buttonNumbers.push(button);
  }

  useEffect(() => {
    handlePageChange(currentPage);
  }, [currentPage]);
  return (
    <div className="flex justify-center mt-4">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
          <li
            className="page-item"
            onClick={() => currentPage >= 1 && setCurrentPage(currentPage - 1)}
          >
            <button
              className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              disabled={currentPage <= 1}
            >
              Previous
            </button>
          </li>
          {buttonNumbers}
          <li
            className="page-item"
            onClick={() =>
              currentPage < maxPage && setCurrentPage(currentPage + 1)
            }
          >
            <button
              className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              disabled={currentPage >= maxPage}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

// let header = []; //d"claration de variable
// const head = 1 // déclaration d'une constante qui prend un entier
// const h = "false" // qui prend un string
// const b = false // qui prend un booléan
// const s = {hello:false} // qui prend un objet(clé-valeur)
// const t ={} // un objet vide
// const u ={hello:false,uygfu:{}} //qui prends un objet dans un objet
// const p = function() { // déclaration d'une fonction anonyme

// }
// const S = function Page(){ // déclaration  d'une fonction normale

// }

// const T = () =>{ //déclaration d'unr fonction flechée

// }

// const B = () =>wx //fonction fléchée qui renvoie un seul élément
