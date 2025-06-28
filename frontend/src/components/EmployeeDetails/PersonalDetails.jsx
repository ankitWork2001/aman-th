

export default function PersonalDetails({
    name,designation,department,email,joinningDate,phoneNo,empId,
}){
    function Edit(){
        console.log("Edit");
    }
    function Deactivate(){
        console.log("Deactivate");
    }
    function resetPassword(){
        console.log("resetPassword");
    }
    return(
        <div className="p-4 m-2 overflow-x-auto rounded-md shadow-md bg-white">
        <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:text-left text-center">
            <div className=" w-full pb-10">
            <div className=" text-xs text-slate-800">Name</div>
            <div className=" text-sm text-blue-300">{name}</div>
            </div>
            <div className=" w-full pb-10">
            <div className=" text-xs text-slate-800">Designation</div>
            <div className=" text-sm text-blue-300">{designation}</div>
            </div>
            <div className=" w-full pb-10">
            <div className=" text-xs text-slate-800">Department</div>
            <div className=" text-sm text-blue-300">{department}</div>
            </div>
            <div className=" w-full pb-10">
            <div className=" text-xs text-slate-800">E-mail</div>
            <div className=" text-sm text-blue-300">{email}</div>
            </div>
            <div className=" w-full pb-10">
            <div className=" text-xs text-slate-800">Joining Date</div>
            <div className=" text-sm text-blue-300">{joinningDate}</div>
            </div>
            <div className=" w-full pb-10">
            <div className=" text-xs text-slate-800">Phone No.</div>
            <div className=" text-sm text-blue-300">{phoneNo}</div>
            </div>
            <div className=" w-full pb-10">
            <div className=" text-xs text-slate-800">Employee ID</div>
            <div className=" text-sm text-blue-300">{empId}</div>
            </div>
        </div>
        <div className="flex flex-row w-full h-auto">
            <button onClick={()=>{Edit()}} className="px-3 py-1 m-2 text-sky-500 bg-sky-200 hover:bg-sky-300 rounded-md transition-normal duration-200">Edit</button>
            <button onClick={()=>{Deactivate()}} className="px-3 py-1 m-2 text-red-500 bg-red-200 hover:bg-red-300 rounded-md transition-normal duration-200">Deactivate</button>
            <button onClick={()=>{resetPassword()}} className="px-3 py-1 m-2 text-slate-500 bg-slate-200 hover:bg-slate-300 rounded-md transition-normal duration-200">Reset Password</button>
        </div>
        </div>

    )
}