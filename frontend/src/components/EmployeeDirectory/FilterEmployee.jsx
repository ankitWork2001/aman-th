import { Role, Status } from "../dummyData/Selection";
export default function FilterEmployee(
    {employee,
    setEmployee,
    role,
    setRole,
    department, 
    setDepartment,
    status,
    setStatus}
){
    return(
        <div className="p-2 m-2 overflow-x-auto rounded-md shadow-md bg-white">
        <div className="p-3 w-full">
            <div className="text-xl font-semibold">Filter Employees</div>
        </div>

        <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full h-fit">
            
            <div className="flex flex-col">
            <label className="font-light text-xs mb-1" htmlFor="name-filter">Name</label>
            <input
                id="name-filter"
                value={employee}
                onChange={(e)=>setEmployee(e.target.value)}
                type="text"
                placeholder="Enter employee name"
                className="h-10 w-full rounded-md ring-1 border border-gray-100 text-gray-700 focus:ring-1 focus:ring-blue-300 focus:border-gray-200 p-2 outline-none lg:max-w-52"
            />
            </div>

            <div className="flex flex-col">
            <label className="font-light text-xs mb-1" htmlFor="department-filter">Role</label>
            <select  className="h-10 w-full text-center rounded-md ring-1  border border-gray-100 text-gray-700 focus:ring-1 focus:ring-blue-300 focus:border-gray-200 p-2 outline-none lg:max-w-52"
            onChange={(e)=>setRole(e.target.value)}>
                {Role.map((role)=>{
                    return <option key={role.id} value={role.role} className="bg-slate-100 text-slate-500 focus:text-gray-200 ">{role.role}</option>
                })}
            </select>
            </div>

            <div className="flex flex-col">
            <label className="font-light text-xs mb-1" htmlFor="department-filter">Department</label>
            <input
                id="department-filter"
                type="text"
                value={department}
                onChange={(e)=>{setDepartment(e.target.value)}}
                placeholder="Enter department"
                className="h-10 w-full rounded-md ring-1 border border-gray-100 text-gray-700 focus:ring-1 focus:ring-blue-300 focus:border-gray-200 p-2 outline-none lg:max-w-52"
            />
            </div>

            <div className="flex flex-col">
            <label className="font-light text-xs mb-1" htmlFor="department-filter">Status</label>
            <select className="h-10 w-full text-center rounded-md ring-1  border border-gray-100 text-gray-700 focus:ring-1 focus:ring-blue-300 focus:border-gray-200 p-2 outline-none lg:max-w-52"
            onChange={(e)=>setStatus(e.target.value)}>
                {Status.map((status)=>{
                    return <option key={status.id} value={status.status} className="bg-slate-100 text-slate-500 focus:text-gray-200 ">{status.status}</option>
                })}
            </select>
            </div>
        </div>
        </div>
    )
}