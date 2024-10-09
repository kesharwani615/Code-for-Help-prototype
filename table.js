/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { FaAngleDown, FaSearch } from 'react-icons/fa';
import { FcEditImage, FcEmptyTrash } from 'react-icons/fc';

const User = () => {
  const [productList, setProductList] = useState([]);
  const [rowsLimit] = useState(11);
  const [rowsToShow, setRowsToShow] = useState();
  const [customPagination, setCustomPagination] = useState([]);  
  // const [forOnchange,setFormOnchange] = useState({})
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const headingField = ['Id','Name','Email','Action',]

  const [showUserData,setShowUserData] = useState([
    {id:1,Name:"shivam",Email:"kesharwanishivam615@gmail.com"},
    {id:2,Name:"karan",Email:"karan12345@gmail.com"}
]);

   useEffect(()=>{
    setProductList(showUserData);
    setRowsToShow(showUserData.slice(0, rowsLimit));
    setTotalPage(Math.ceil(showUserData?.length / rowsLimit));
     console.log("showUserData:",showUserData);
    },[showUserData]);

  const nextPage = () => {
    const startIndex = rowsLimit * (currentPage + 1);
    const endIndex = startIndex + rowsLimit;
    const newArray = showUserData.slice(startIndex, endIndex);
    setRowsToShow(newArray);
    setCurrentPage(currentPage + 1);
  };
  const changePage = (value) => {
    const startIndex = value * rowsLimit;
    const endIndex = startIndex + rowsLimit;
    const newArray = productList.slice(startIndex, endIndex);
    setRowsToShow(newArray);
    setCurrentPage(value);
    console.log(value,totalPage);
  };
  const previousPage = () => {
    const startIndex = (currentPage - 1) * rowsLimit;
    const endIndex = startIndex + rowsLimit;
    const newArray = showUserData.slice(startIndex, endIndex);
    setRowsToShow(newArray);
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(0);
    }
  };


  const deleteItem = (id) =>{

}

  const onSubmit = (e) => {
    e.preventDefault();
    // // console.log(formData);
    // const filteredData = rowsToShow.filter((item)=>item.id !== formData.id)
    // console.log(filteredData);
    // setRowsToShow([formData,...filteredData]);
  };
  
  return (
    <div className='w-full h-[calc(100%)] bg-slate-100 flex flex-col overflow-auto'>

    <span className='text-black bg-white text-[40px] px-10'>Users</span>

    <div className=" px-8 text-black pt-10 pb-14 ">
    <div className="w-full max-w-5xl p-4 rounded-md bg-white">
      <div>
        <h1 className="text-2xl font-medium text-[#212B36]">Playlist</h1>
      </div>
      <div className="flex justify-end bg-green-800 px-2 mt-2 py-2 border-2 border-b-0">
        <div className="px-2 rounded-lg">
          <div className="flex items-center gap-2">
            <FaSearch style={{color:'white'}} />
            <input
              type="text"
              className=" h-11 rounded-[5px] pl-3 text-sm focus:ring-0 border-transparent bg-slate-200  outline-none placeholder:text-black text-black w-[85%]"
              placeholder="Keyword Search"
            />
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-scroll md:overflow-auto max-w-7xl 2xl:max-w-none">
      <table className="table-auto overflow-x-auto md:overflow-auto w-full text-left font-inter border">
  <thead className="rounded-lg text-base text-white font-semibold w-full">
    <tr className="border-x-2 border-t-2">
      {headingField.map((item, index) => (
        <th key={index} className="py-3 px-3 text-[#212B36] sm:text-base font-bold whitespace-nowrap text-center">
          {item}
        </th>
      ))}
    </tr>
  </thead>
  <tbody className="border-x-2">
    {rowsToShow?.length > 0 && rowsToShow.map((data, index) => (
      <tr className="border-b" key={index}>
        <td className="py-2 px-3 font-normal text-black text-base whitespace-nowrap text-center">
          {data.id}
        </td>
        <td className="py-2 px-3 font-normal text-black text-base whitespace-nowrap text-center">
          {data.Name}
        </td>
        <td className="py-2 px-3 font-normal text-black text-base whitespace-nowrap text-center">
          {data.Email}
        </td>
        <td className="flex justify-center py-2 px-3 font-normal text-black text-base whitespace-nowrap">
          <FcEmptyTrash className="text-[30px] cursor-pointer" onClick={() => deleteItem(data.Id)} />
        </td>
      </tr>
    ))}
  </tbody>
</table>

      </div>
      <div
        className={`w-full justify-center sm:justify-between flex-col sm:flex-row gap-5 mt-2.5 px-1 items-center ${
          productList?.length > 0 ? "flex" : "hidden"
        }`}
      >
        <div className="text-lg text-black">
          Showing {currentPage == 0 ? 1 : currentPage * rowsLimit + 1} to{" "}
          {currentPage == totalPage - 1
            ? productList?.length
            : (currentPage + 1) * rowsLimit}{" "}
          of {productList?.length} entries
        </div>
        <div className="flex">
          <ul
            className="flex justify-center items-center gap-x-[10px] z-30"
            role="navigation"
            aria-label="Pagination"
          >
            <li
              className={`prev-btn flex items-center justify-center w-[36px] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB] disabled ${
                currentPage == 0
                  ? "bg-[#cccccc] pointer-events-none"
                  : " cursor-pointer bg-blue-500"
              }`}
              onClick={previousPage}
            >
              <AiOutlineArrowLeft />
            </li>
            {customPagination?.map((data, index) => (
              <li
                className={`flex items-center justify-center w-[36px] rounded-[6px] h-[34px] border-[1px] border-solid border-[2px] bg-[#FFFFFF] text-black cursor-pointer ${
                  currentPage == index
                    ? "text-blue-600 border-sky-500"
                    : "border-[#E4E4EB] "
                }`}
                onClick={() => changePage(index)}
                key={index}
              >
                {index + 1}
              </li>
            ))}
            <li
              className={`flex items-center justify-center w-[36px] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB] ${
                currentPage == totalPage - 1
                  ? "bg-[#cccccc] pointer-events-none"
                  : " cursor-pointer bg-blue-500"
              }`}
              onClick={nextPage}
            >
              <AiOutlineArrowRight />
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
</div>
  )}

export default User
