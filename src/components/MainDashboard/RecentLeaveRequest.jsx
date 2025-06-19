import { Link } from "react-router-dom"
import { RecentLeaveRequest as LeaveData } from '../dummyData/Table';

export default function RecentLeaveRequestTable({ viewAll }) {
    return (
        <div className="p-2 m-2 overflow-x-auto rounded-md shadow-md bg-white">
            <div className="p-3 flex justify-between h-14 w-full">
                <div className="text-xl font-semibold">Recent Leave Requests</div>
                <div
                    className="hover:text-blue-400 underline text-blue-400 relative bottom-2 cursor-pointer"
                    onClick={viewAll}
                >
                    View All
                </div>
            </div>

            <table className="min-w-full table-auto">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="text-left p-3 font-semibold text-gray-700">Employee</th>
                        <th className="text-left p-3 font-semibold text-gray-700">Leave Type</th>
                        <th className="hidden sm:table-cell text-left p-3 font-semibold text-gray-700">Date</th>
                        <th className="text-left p-3 font-semibold text-gray-700">Status</th>
                        <th className="text-left p-3 font-semibold text-gray-700">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {LeaveData.map((data) => (
                        <tr key={data.id} className="hover:bg-gray-50">
                            <td className="p-3 whitespace-nowrap">{data.name}</td>
                            <td className="p-3 whitespace-nowrap">{data.leaveType}</td>
                            <td className="hidden sm:table-cell p-3 break-words">{data.date}</td>
                            <td
                                className="p-3"
                                style={{ color: data.status === "Pending" ? "orange" : "green" }}
                            >
                                {data.status}
                            </td>
                            <td className="p-3 flex flex-wrap gap-2">
                                {data.action.map((act) => {
                                    let bgColor = '';
                                    let textColor = '';

                                    switch (act) {
                                        case 'Approve':
                                            bgColor = 'bg-green-100';
                                            textColor = 'text-green-600';
                                            break;
                                        case 'Reject':
                                            bgColor = 'bg-red-100';
                                            textColor = 'text-red-600';
                                            break;
                                        case 'View':
                                            bgColor = 'bg-blue-100';
                                            textColor = 'text-blue-600';
                                            break;
                                        default:
                                            bgColor = 'bg-gray-100';
                                            textColor = 'text-gray-600';
                                    }

                                    return (
                                        <button
                                            key={act}
                                            className={`px-3 py-1 rounded ${bgColor} ${textColor} hover:underline`}
                                        >
                                            {act}
                                        </button>
                                    );
                                })}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
