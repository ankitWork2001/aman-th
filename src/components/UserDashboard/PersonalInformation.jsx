

export default function PersonalInfomation({
    name,designation,department,email,joinningDate,phoneNo,empId,EditProfile
}){
    return(
        <div class="p-4 m-2 overflow-x-auto rounded-md shadow-md bg-white">
        <div class="mb-4">
            <h2 class="text-xl font-semibold text-gray-800">Personal Information</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:text-left text-center">
            <div class=" w-full pb-10">
            <div class=" text-xs text-slate-800">Name</div>
            <div class=" text-sm text-blue-300">{name}</div>
            </div>
            <div class=" w-full pb-10">
            <div class=" text-xs text-slate-800">Designation</div>
            <div class=" text-sm text-blue-300">{designation}</div>
            </div>
            <div class=" w-full pb-10">
            <div class=" text-xs text-slate-800">Department</div>
            <div class=" text-sm text-blue-300">{department}</div>
            </div>
            <div class=" w-full pb-10">
            <div class=" text-xs text-slate-800">E-mail</div>
            <div class=" text-sm text-blue-300">{email}</div>
            </div>
            <div class=" w-full pb-10">
            <div class=" text-xs text-slate-800">Joining Date</div>
            <div class=" text-sm text-blue-300">{joinningDate}</div>
            </div>
            <div class=" w-full pb-10">
            <div class=" text-xs text-slate-800">Phone No.</div>
            <div class=" text-sm text-blue-300">{phoneNo}</div>
            </div>
            <div class=" w-full pb-10">
            <div class=" text-xs text-slate-800">Employee ID</div>
            <div class=" text-sm text-blue-300">{empId}</div>
            </div>
        </div>
        <div class="flex flex-row w-full h-auto">
            <button onClick={EditProfile} class="cursor-pointer px-3 py-1 m-2 text-sky-500 bg-sky-200 hover:bg-sky-300 rounded-md transition-normal duration-200">Edit Profile</button>
        </div>
        </div>

    )
}