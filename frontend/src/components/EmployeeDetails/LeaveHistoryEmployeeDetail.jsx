import { Months } from "../dummyData/Selection";
import { useState,useEffect } from "react";

import { LeaveHistoryEmployeeDetail as TableLeaveHistoryEmployeeDetail } from "../dummyData/Table";

export default function LeaveHistoryEmployeeDetail({ data, month, setMonth}) {
      const [currentData, setCurrentData] = useState([]);
      const [count, setCount] = useState(0);
      const pageSize = 10;
    
      useEffect(() => {
        setCurrentData(TableLeaveHistoryEmployeeDetail.slice(0, pageSize));
      }, [TableLeaveHistoryEmployeeDetail]);
    
      function Next() {
        const nextCount = count + pageSize;
        if (nextCount >= TableLeaveHistoryEmployeeDetail.length) return;
        setCurrentData(TableLeaveHistoryEmployeeDetail.slice(nextCount, nextCount + pageSize));
        setCount(nextCount);
      }
    
      function Previous() {
        const prevCount = Math.max(0, count - pageSize);
        setCurrentData(TableLeaveHistoryEmployeeDetail.slice(prevCount, prevCount + pageSize));
        setCount(prevCount);
      }
    
    return (
        <div className="p-2 m-2 overflow-x-auto rounded-md shadow-md bg-white">
            <div className="p-3 flex justify-between h-14 w-full">
                <div className="text-xl font-semibold">Leave History</div>
                <select
                    className="hover:text-gray-600 text-gray-700 border border-gray-300 rounded-md px-3 py-2 m-1"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                >
                    {Months.map((month) => (
                        <option key={month.id} value={month.month} className="text-gray-700">
                            {month.month}
                        </option>
                    ))}
                </select>
            </div>

            <table className="min-w-full table-auto">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="text-left p-3 font-semibold text-gray-700">Leave Type</th>
                        <th className="hidden sm:table-cell text-left p-3 font-semibold text-gray-700">Date</th>
                        <th className="text-left p-3 font-semibold text-gray-700">Reason</th>
                        <th className="text-left p-3 font-semibold text-gray-700">Status</th>
                        <th className="text-left p-3 font-semibold text-gray-700">Remarks</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {currentData.map((entry) => (
                        <tr key={entry.id} className="hover:bg-gray-50">
                            <td className="p-3 whitespace-nowrap">{entry.leaveType}</td>
                            <td className="hidden sm:table-cell p-3 break-words">{entry.date}</td>
                            <td className="p-3 whitespace-nowrap">{entry.reason}</td>
                            <td
                                style={{ color: entry.status === "Approve" ? "green" : "red" }}
                                className="px-3 py-1 p-3 flex flex-wrap gap-2"
                            >
                                {entry.status}
                            </td>
                            <td className="p-3">{entry.remarks}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="p-10 flex justify-between h-14 w-full items-center">
                <div className="text-sm font-medium text-gray-500">Showing {count + 1} to {Math.min(count + pageSize, TableLeaveHistoryEmployeeDetail.length)} of {TableLeaveHistoryEmployeeDetail.length}
                </div>
                <div className="space-x-2">
                    <button
                        onClick={Previous}
                        className="cursor-pointer text-gray-500 hover:text-blue-500"
                    >
                        Previous
                    </button>
                    <button
                        onClick={Next}
                        disabled={count + pageSize >= TableLeaveHistoryEmployeeDetail.length}
                        className="cursor-pointer px-6 py-1.5 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}














// import { Months } from "../dummyData/Selection"
// import { LeaveHistoryEmployeeDetail as TableLeaveHistoryEmployeeDetail } from "../dummyData/Table"

// export default function LeaveHistoryEmployeeDetail({data, month, setMonth, Prevous, Next}){
//     return (
//         <div class="p-2 m-2 overflow-x-auto rounded-md shadow-md bg-white">
//             <div class="p-3 flex justify-between h-14 w-full">
//                 <div class="text-xl font-semibold">Leave History</div>
//                 <select class="hover:text-gray-400 text-gray-300 relative rounded-md bottom-2 px-3 py-2 m-1"
//                     onChange={(e)=>setMonth(e.target.value)}>
//                     {Months.map((month)=>{
//                         <option key={month} value={month} className=" rounded-md text-gray-700">{month}</option>
//                     })}
//                 </select>
//             </div>

//           <table class="min-w-full table-auto">
//             <thead class="">
//             <tr class="border-b border-gray-200">
//                 <th class="text-left p-3 font-semibold text-gray-700">Leave Type</th>
//                 <th class="hidden sm:table-cell text-left p-3 font-semibold text-gray-700">Date</th>
//                 <th class="text-left p-3 font-semibold text-gray-700">Reason</th>
//                 <th class="text-left p-3 font-semibold text-gray-700">Status</th>
//                 <th class="text-left p-3 font-semibold text-gray-700">Remarks</th>
//             </tr>
//             </thead>
//             <tbody class=" text-gray-700">
//                 {TableLeaveHistoryEmployeeDetail.map((data)=>{
//                     return (<tr key={data.id} class="hover:bg-gray-50">
//                                 <td class="p-3 whitespace-nowrap">{data.leaveType}</td>
//                                 <td class="hidden sm:table-cell p-3 break-words">{data.date}</td>
//                                 <td class="p-3 whitespace-nowrap">{data.reason}</td>
//                                 <td style={{color: data.status === "Approve" ? "green" : "red"}} class="px-3 py-1 p-3 flex flex-wrap gap-2">{data.status}</td>
//                                 <td class="p-3">{data.remarks}</td>
//                             </tr>
//                     )})}
//             </tbody>
//         </table>

//             <div className="p-10 flex justify-between h-14 w-full items-center">
//                 <div className="text-sm font-medium text-gray-500">Showing 10 out of 100</div>
//                 <div className="space-x-2">
//                   <button onClick={()=>{Prevous()}} className="cursor-pointer text-gray-500">prevous</button>
//                   <button onClick={()=>{Next()}} className="cursor-pointer px-6 py-1.5 text-slate-200 bg-blue-500 rounded-md">Next</button>
//                 </div>
//             </div>

//         </div>

//     )
// }