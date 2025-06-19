import { useState } from "react"
import { PrevoiusDummyData } from "../dummyData/Table"

export default function MarkAttendance({
    attendanceStatus,
    MarkTodayAttendance,
    attendanceList
}){

    const [showAll, setShowAll] = useState(false);

    const PrevoiusDummyDataSlice = showAll ? PrevoiusDummyData : PrevoiusDummyData.slice(0, 4)// replace PrevoiusDummyData with attendanceStatus 

    return (
        <div className="p-2 m-2 my-4 overflow-x-auto rounded-md shadow-md bg-white">

            <div className="p-3 flex justify-between h-auto w-full">

                <div className="py-2 flex flex-col">
                    <div className="text-xl font-semibold ">Mark Today Attendance</div>
                    <div className="text-sm font-medium flex gap-2 ">Today Attendance <p className=" text-gray-400">{attendanceStatus ? "Marked" : "Not Marked"}</p>
                    </div>
                </div>

                    <button
                    onClick={MarkTodayAttendance}
                    className="cursor-pointer rounded-md p-1 m-5 min-h-10 h-auto max-w-[30%] min-w-[20%] text-center hover:text-green-600 text-gray-200 bg-green-400"
                    >
                    Mark Your Attendance
                    </button>
            </div>

            <div className="py-5 px-2">
                <div className="text-md py-2 px-2 font-semibold">Recent Attendance</div>

                <table className="min-w-full table-auto py-3">
                    <thead className="">
                    <tr className="border-b border-gray-200">
                        <th className="text-left p-3 font-semibold text-gray-700">Date</th>
                        <th className="text-left p-3 font-semibold text-gray-700">Time</th>
                        <th className="text-left p-3 font-semibold text-gray-700">Status</th>
                    </tr>
                    </thead>
                    <tbody className=" text-gray-700">
                        {PrevoiusDummyDataSlice.map((data)=>{
                            return (<tr key={data.id} className="hover:bg-gray-50">
                                        <td className="p-3 whitespace-nowrap">{data.date}</td>
                                        <td className="p-3 whitespace-nowrap">{data.time}</td>
                                        <td style={{color: data.status === "Marked" ? "green" : "red"}} className="px-3 py-1 p-3 flex flex-wrap gap-2">{data.status}</td>
                                    </tr>
                            )})}
                    </tbody>
                </table>
        
                <div className="py-10 px-5 flex justify-start h-14 w-full items-center">
                    <div onClick={()=>setShowAll(!showAll)} className="cursor-pointer underline text-sm font-medium text-blue-500">See All</div>
                </div>

            </div>
        </div>

    )
}