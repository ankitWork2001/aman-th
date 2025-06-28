import { useState, useEffect } from "react";
import { AllRecentLeaveRequest } from "../dummyData/Table"

export function TableLeaveRequests({data}){

    const [currentData, setCurrentData] = useState([]);
    const [count, setCount] = useState(0);
    const pageSize = 10;

    useEffect(() => {
    setCurrentData(AllRecentLeaveRequest.slice(0, pageSize));
    }, [AllRecentLeaveRequest]);

    function Next() {
    const nextCount = count + pageSize;
    if (nextCount >= AllRecentLeaveRequest.length) return;
    setCurrentData(AllRecentLeaveRequest.slice(nextCount, nextCount + pageSize));
    setCount(nextCount);
    }

    function Previous() {
    const prevCount = Math.max(0, count - pageSize);
    setCurrentData(AllRecentLeaveRequest.slice(prevCount, prevCount + pageSize));
    setCount(prevCount);
    }
    

    return(
        <div className="p-2 m-2 overflow-x-auto rounded-md shadow-md bg-white">
            <div className="p-3 flex justify-between h-14 w-full">
                <div className="text-xl font-semibold">All Employees</div>
            </div>

            <table className="min-w-full table-auto">
                <thead className="">
                <tr className="border-b border-gray-200">
                    <th className="text-left p-3 font-semibold text-gray-700">Name</th>
                    <th className="text-left p-3 font-semibold text-gray-700">Leave Type</th>
                    <th className="hidden sm:table-cell text-left p-3 font-semibold text-gray-700">Date Range</th>
                    <th className="text-left p-3 font-semibold text-gray-700">Reason</th>
                    <th className="text-left p-3 font-semibold text-gray-700">Status</th>
                </tr>
                </thead>
                <tbody className="text-gray-700">
                    {currentData.map((data)=>{
                        return(
                            <tr key={data.id} className="hover:bg-gray-50">
                                <td className="p-3 whitespace-nowrap">{data.name}</td>
                                <td className="p-3 whitespace-nowrap">{data.leaveType}</td>
                                <td className="hidden sm:table-cell p-3 break-words">{data.date}</td>
                                <td className="p-3">{data.reason}</td>
                                <td style={{ color: data.status === "Pending" ? "orange" : "green" }}
                                 className="p-3 flex flex-wrap gap-2">{data.status}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div className="p-10 flex justify-between h-14 w-full items-center">
                <div className="text-sm font-medium text-gray-500">Showing {count + 1} to {Math.min(count + pageSize, AllRecentLeaveRequest.length)} of {AllRecentLeaveRequest.length}
                </div>
                <div className="space-x-2">
                  <button onClick={()=>{Previous()}} className="focus:cursor-pointer my-4 text-gray-500">prevous</button>
                  <button onClick={()=>{Next()}} className="focus:cursor-pointer px-6 py-1.5 text-slate-200 bg-blue-500 rounded-md">Next</button>
                </div>
            </div>
        </div>
    )
}