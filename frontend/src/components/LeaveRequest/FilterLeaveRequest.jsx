import { Status, Type } from "../dummyData/Selection";

export default function FilterLeaveRequest({
    employee,
    setEmployee,
    type,
    setType,
    date,
    setDate,
    status,
    setStatus
}) {
    return (
        <div className="p-2 m-2 overflow-x-auto rounded-md shadow-md bg-white">
            <div className="p-3 w-full">
                <div className="text-xl font-semibold">Filter Leave Request</div>
            </div>

            <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full h-fit">
                <div className="flex flex-col">
                    <label className="font-light text-xs mb-1" htmlFor="name-filter">Employee Name</label>
                    <input
                        id="name-filter"
                        type="text"
                        value={employee}
                        onChange={(e) => setEmployee(e.target.value)}
                        placeholder="Enter employee name"
                        className="h-10 w-full rounded-md ring-1 border border-gray-100 text-gray-700 focus:ring-1 focus:ring-blue-300 focus:border-gray-200 p-2 outline-none lg:max-w-52"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="font-light text-xs mb-1" htmlFor="type-filter">Type</label>
                    <select
                        id="type-filter"
                        className="h-10 w-full text-center rounded-md ring-1 border border-gray-100 text-gray-700 focus:ring-1 focus:ring-blue-300 focus:border-gray-200 p-2 outline-none lg:max-w-52"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option disabled value="">Select Type</option>
                        {Type.map((t) => (
                            <option key={t.id} value={t.type}>{t.type}</option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="font-light text-xs mb-1" htmlFor="date-filter">Date</label>
                    <input
                        id="date-filter"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="h-10 w-full rounded-md ring-1 border border-gray-100 text-gray-700 focus:ring-1 focus:ring-blue-300 focus:border-gray-200 p-2 outline-none lg:max-w-52"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="font-light text-xs mb-1" htmlFor="status-filter">Status</label>
                    <select
                        id="status-filter"
                        className="h-10 w-full text-center rounded-md ring-1 border border-gray-100 text-gray-700 focus:ring-1 focus:ring-blue-300 focus:border-gray-200 p-2 outline-none lg:max-w-52"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option disabled value="">Select Status</option>
                        {Status.map((s) => (
                            <option key={s.id} value={s.status}>{s.status}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}















// import { Status, Type } from "../dummyData/Selection"


// export default function FilterLeaveRequest(
//     employee,
//     setEmployee,
//     type,
//     setType,
//     date, 
//     setDate,
//     status,
//     setStatus
// ){
//     return(
//         <div className="p-2 m-2 overflow-x-auto rounded-md shadow-md bg-white">
//         <div className="p-3 w-full">
//             <div className="text-xl font-semibold">Filter Leave Request</div>
//         </div>

//         <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full h-fit">
            
//             <div className="flex flex-col">
//             <label className="font-light text-xs mb-1" htmlFor="name-filter">Employee Name</label>
//             <input
//                 id="name-filter"
//                 type="text"
//                 value={employee}
//                 onChange={(e)=>{setEmployee(e.target.value)}}
//                 placeholder="Enter employee name"
//                 className="h-10 w-full rounded-md ring-1 border border-gray-100 text-gray-700 focus:ring-1 focus:ring-blue-300 focus:border-gray-200 p-2 outline-none lg:max-w-52"
//             />
//             </div>

//             <div className="flex flex-col">
//             <label className="font-light text-xs mb-1" htmlFor="department-filter">Type</label>
//             <select className="h-10 w-full text-center rounded-md ring-1  border border-gray-100 text-gray-700 focus:ring-1 focus:ring-blue-300 focus:border-gray-200 p-2 outline-none lg:max-w-52"
//                 onChange={(e)=>setType(e.target.value)} 
//             >
//                 <option className="bg-slate-100 text-slate-500 focus:text-gray-200 ">{type}</option>
//                 {Type.map((type)=>{
//                    return <option key={type.id} value={type.type} className="bg-slate-100 text-slate-500 focus:text-gray-200 ">{type.type}</option>
//                 })}
//             </select>
//             </div>

//             <div className="flex flex-col">
//             <label className="font-light text-xs mb-1" htmlFor="name-filter">Date</label>
//             <input
//                 id="name-filter"
//                 type="date"
//                 value={date}
//                 onChange={(e)=>setDate(e.target.value)}
//                 placeholder="Enter employee name"
//                 className="h-10 w-full rounded-md ring-1 border border-gray-100 text-gray-700 focus:ring-1 focus:ring-blue-300 focus:border-gray-200 p-2 outline-none lg:max-w-52"
//             />
//             </div>

//             <div className="flex flex-col">
//             <label className="font-light text-xs mb-1" htmlFor="department-filter">Status</label>
//             <select className="h-10 w-full text-center rounded-md ring-1  border border-gray-100 text-gray-700 focus:ring-1 focus:ring-blue-300 focus:border-gray-200 p-2 outline-none lg:max-w-52"
//                 onChange={(e)=>setStatus(e.target.value)}>                
//                 <option className="bg-slate-100 text-slate-500 focus:text-gray-200 ">{status}</option>
//                 {Status.map((status)=>{
//                     return <option key={status.id} value={status.status} className="bg-slate-100 text-slate-500 focus:text-gray-200 ">{status.status}</option>
//                 })}
//             </select>
//             </div>
//         </div>
//         </div>

//     )
// }
