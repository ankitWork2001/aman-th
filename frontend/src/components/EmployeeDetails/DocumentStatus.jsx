import { useState } from "react"
import { DocumentStatus as TableDocumentStatus } from "../dummyData/Table"

export default function DocumentStatus({data}){

    const [showAll, setShowAll] = useState(false);
    const initialCount = 3;
    const visibleItems = showAll ? TableDocumentStatus : TableDocumentStatus.slice(0, initialCount);


    function Action(){
        console.log("Action");
    }
    return (
        <div className="p-2 m-2 overflow-x-auto rounded-md shadow-md bg-white">
            <div className="p-3 flex justify-between h-14 w-full">
                <div className="text-xl font-semibold">Document Status</div>
                <div onClick={() => setShowAll(!showAll)} className="cursor-pointer hover:text-blue-400 underline text-blue-400 relative bottom-2">View All</div>
            </div>

          <table className="min-w-full table-auto">
            <thead className="">
            <tr className="border-b border-gray-200">
                <th className="text-left p-3 font-semibold text-blue-700">Document</th>
                <th className="text-left p-3 font-semibold text-blue-700">Status</th>
                <th className="text-left p-3 font-semibold text-blue-700">Actions</th>
            </tr>
            </thead>
            <tbody className=" text-gray-700">
                {visibleItems.map((data)=>{
                    return (<tr key={data.id} className="hover:bg-gray-50">
                            <td className="p-3 whitespace-nowrap">{data.document}</td>
                            <td style={{color: data.status === "Casual" ? "green" : "orange"}} className="p-3 whitespace-nowrap">{data.status}</td>
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
                                        default:
                                            bgColor = 'bg-gray-100';
                                            textColor = 'text-gray-600';
                                    }

                                    return (
                                        <button
                                            onClick={()=>{Action()}}
                                            key={act}
                                            className={`px-3 py-1 rounded ${bgColor} ${textColor} hover:underline`}
                                        >
                                            {act}
                                        </button>
                                    );
                                })}
                            </td>
                        </tr>
                    )})}          
            </tbody>
        </table>
        </div>

    )
}