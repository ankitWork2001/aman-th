import { OngoingTasks as MessagesOngoingTasks } from "../dummyData/OngoingTasks"

export default function OngoingTasks({data}){
    return(
        <div class="p-4 m-2 overflow-x-auto rounded-md shadow-md bg-white">
  <div class="mb-4">
    <h2 class="text-xl font-semibold text-gray-800">Ongoing Tasks</h2>
  </div>

  <ul class="space-y-2 text-slate-600 w-full">
    {MessagesOngoingTasks.map((data)=>{
        return (<li key={data.id} class="flex items-start justify-between gap-4">
        <div class="flex gap-2 items-start">
            <span class="relative -top-1 text-lg text-slate-400 mt-1">•</span>
            <p>{data.message}</p>
        </div>
        <p style={{color: data.status === "Complete" ? "green" : "orange"}} class="text-sm">{data.status}</p>
        </li>)
    })}
  </ul>
</div>
    )
}