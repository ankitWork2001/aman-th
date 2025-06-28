

export default function ApplyForLeave({
        leaveType,
        setLeaveType,
        startDate,
        setStartDate,
        lastDate,
        setLastDate,
        reason,
        setReason,
        SendLeaveApplicationFunction,
        Clear,
        error
}){
    return (
        <div className="p-2 m-2 my-7 overflow-x-auto rounded-md shadow-md bg-white">
  <div className="p-3 w-full">
    <div className="text-xl font-semibold">Apply For Leave</div>
  </div>

  <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-fit">
    
    <div className="flex flex-col">
      <label className="font-medium text-xs mb-1 text-gray-800" htmlFor="leave-type">Leave Type</label>
      <select
        id="leave-type"
        onChange={(e)=>setLeaveType(e.target.value)}
        className="h-10 w-full text-center rounded-sm ring-0 border border-gray-200 text-gray-700 focus:ring-blue-300 focus:border-gray-300 p-2 outline-none lg:max-w-70"
      >
        {/* {leaveType.map((leave)=>{
          return <option key={leave.id}>{leave.value}</option>
        })} */}
        <option disabled selected>Select leave type</option>
        <option value="casual">Casual Leave</option>
        <option value="sick">Sick Leave</option>
        <option value="earned">Earned Leave</option>
      </select>
    </div>

    <div className="flex flex-col">
      <label className="font-medium text-xs mb-1 text-gray-800" htmlFor="start-date">Start Date</label>
      <input
        id="start-date"
        type="date"
        value={startDate}
        onChange={(e)=>setStartDate(e.target.value)}
        className="h-10 w-full text-center rounded-sm ring-0 border border-gray-200 text-gray-700 focus:ring-blue-300 focus:border-gray-300 p-2 outline-none lg:max-w-70"
      />
    </div>

    <div className="flex flex-col">
      <label className="font-medium text-xs mb-1 text-gray-800" htmlFor="end-date">End Date</label>
      <input
        id="end-date"
        type="date"
        value={lastDate}
        onChange={(e)=>setLastDate(e.target.value)}
        className="h-10 w-full text-center rounded-sm ring-0 border border-gray-200 text-gray-700 focus:ring-blue-300 focus:border-gray-300 p-2 outline-none lg:max-w-70"
      />
    </div>

    <div className="flex flex-col col-span-1 md:col-span-2 lg:col-span-3">
      <label className="font-medium text-xs mb-1 text-gray-800" htmlFor="reason">Reason</label>
      <textarea
        id="reason"
        rows="4"
        value={reason}
        onChange={(e)=>setReason(e.target.value)}
        placeholder="Write your reason here..."
        className="min-h-28 w-full rounded-sm ring-0 border border-gray-100 text-gray-700 focus:ring-blue-300 focus:border-gray-300 p-2 outline-none "
      ></textarea>
    </div>


  <div className="w-full space-x-4">
    <button onClick={SendLeaveApplicationFunction} className="hover:cursor-pointer bg-blue-500 text-white rounded-md px-4 my-2 h-9 w-full sm:w-auto hover:bg-blue-600 transition duration-200 ease-in-out">Submit Application</button>
    <button onClick={Clear} className="hover:cursor-pointer bg-slate-300 text-white rounded-md px-4 h-9 w-full sm:w-auto hover:bg-slate-400 transition duration-200 ease-in-out">Clear</button>
  </div>

    {error && <div className=" p-2 mt-3 w-full h-auto text-red-500">{error}</div>}

  </div>
</div>
    )
}