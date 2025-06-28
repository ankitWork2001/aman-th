import {Notifications as Notify} from '../dummyData/Notifications'

export default function Notifications({ViewAll}){
    return(
        <div class="p-4 m-2 overflow-x-auto rounded-md shadow-md bg-white">
            {/* <!-- Header --> */}
            <div class="flex justify-between items-center h-14 w-full border-b pb-2">
                <div class="text-xl font-semibold text-gray-800">Notifications</div>
                <div onClick={()=>{ViewAll}} className="hover:text-blue-400 underline text-blue-400 relative bottom-2 cursor-pointer">See All</div>
            </div>

            {/* <!-- Notifications List --> */}
            <div class="py-3 space-y-4 text-gray-600">
                {Notify.map((data)=>
                    <p id={data.id} class="w-full">{data.message}</p>                    
                )}
            </div>
        </div>
    )
}