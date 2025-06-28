import { useEffect, useState } from "react";
import { EmployeeDirectory } from "../dummyData/Table";

export function TableEmployeeDirectory({ data }) {
  const [currentData, setCurrentData] = useState([]);
  const [count, setCount] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    setCurrentData(EmployeeDirectory.slice(0, pageSize));
  }, [EmployeeDirectory]);

  function Next() {
    const nextCount = count + pageSize;
    if (nextCount >= EmployeeDirectory.length) return;
    setCurrentData(EmployeeDirectory.slice(nextCount, nextCount + pageSize));
    setCount(nextCount);
  }

  function Previous() {
    const prevCount = Math.max(0, count - pageSize);
    setCurrentData(EmployeeDirectory.slice(prevCount, prevCount + pageSize));
    setCount(prevCount);
  }

  return (
    <div className="p-2 m-2 overflow-x-auto rounded-md shadow-md bg-white">
      <div className="p-3 flex justify-between h-14 w-full">
        <div className="text-xl font-semibold">All Employees</div>
      </div>

      <table className="min-w-full table-auto">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left p-3 font-semibold text-gray-700">Name</th>
            <th className="text-left p-3 font-semibold text-gray-700">E-Mail</th>
            <th className="hidden sm:table-cell text-left p-3 font-semibold text-gray-700">Department</th>
            <th className="text-left p-3 font-semibold text-gray-700">Designation</th>
            <th className="text-left p-3 font-semibold text-gray-700">Joining</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {currentData.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="p-3 whitespace-nowrap">{item.name}</td>
              <td className="p-3 whitespace-nowrap">{item.email}</td>
              <td className="hidden sm:table-cell p-3 break-words">{item.department}</td>
              <td className="p-3">{item.designation}</td>
              <td className="p-3">{item.joining}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="p-6 flex justify-between items-center w-full">
        <div className="text-sm font-medium text-gray-500">
          Showing {count + 1} to {Math.min(count + pageSize, EmployeeDirectory.length)} of {EmployeeDirectory.length}
        </div>
        <div className="space-x-2">
          <button
            onClick={Previous}
            disabled={count === 0}
            className="cursor-pointer text-gray-500 disabled:text-gray-300"
          >
            Previous
          </button>
          <button
            onClick={Next}
            disabled={count + pageSize >= EmployeeDirectory.length}
            className="cursor-pointer px-6 py-1.5 text-white bg-blue-500 rounded-md disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

















// import { useState } from "react";
// import { EmployeeDirectory } from "../dummyData/Table"

// export function TableEmployeeDirectory({data}){

//     const [currentData, setCurrentData] = useState([]);
//     const [count, setCount] = useState(0);

//     function Next(){
//         let start = Math.max(count, 0);
//         let end = Math.min(count+10, data.length);

//         setCurrentData(data.slice(start, end))
//         setCount(end)
//         console.log("Next");
//     }

//     function Previous(){
//         console.log("Previous");
//     }
    

//     return(
//         <div class="p-2 m-2 overflow-x-auto rounded-md shadow-md bg-white">
//             <div class="p-3 flex justify-between h-14 w-full">
//                 <div class="text-xl font-semibold">All Employees</div>
//             </div>

//             <table class="min-w-full table-auto">
//                 <thead class="">
//                 <tr class="border-b border-gray-200">
//                     <th class="text-left p-3 font-semibold text-gray-700">Name</th>
//                     <th class="text-left p-3 font-semibold text-gray-700">E-Mail</th>
//                     <th class="hidden sm:table-cell text-left p-3 font-semibold text-gray-700">Department</th>
//                     <th class="text-left p-3 font-semibold text-gray-700">Designation</th>
//                     <th class="text-left p-3 font-semibold text-gray-700">Joining</th>
//                 </tr>
//                 </thead>
//                 <tbody class="text-gray-700">
//                     {EmployeeDirectory.map((data)=>{
//                     return (<tr key={data.id} class="hover:bg-gray-50">
//                                 <td class="p-3 whitespace-nowrap">{data.name}</td>
//                                 <td class="p-3 whitespace-nowrap">{data.email}</td>
//                                 <td class="hidden sm:table-cell p-3 break-words">{data.department}</td>
//                                 <td class="p-3">{data.designation}</td>
//                                 <td class="p-3 flex flex-wrap gap-2">{data.joining}</td>
//                             </tr>)
//                     })}
//                 </tbody>
//             </table>

//             <div class="p-10 flex justify-between h-14 w-full items-center">
//                 <div class="text-sm font-medium text-gray-500">Showing {"10"} out of {"100"}</div>
//                 <div class="space-x-2">
//                   <button onClick={()=>{Prevous()}} class="cursor-pointer text-gray-500">prevous</button>
//                   <button onClick={()=>{Next()}} class="cursor-pointer px-6 py-1.5 text-slate-200 bg-blue-500 rounded-md">Next</button>
//                 </div>
//             </div>
//         </div>
//     )
// }