import { useState } from "react";

export default function PerformanceNotes({PerformanceNotes}){
    const [data, setData] = useState(PerformanceNotes)

    function Save(){
        console.log("save");
    }
    function Clear(){
        setData('')
        console.log("Clear");
    }
    return(
        <div class="p-4 m-2 overflow-x-auto rounded-md shadow-md bg-white">
            <div class="mb-4">
                <h2 class="text-xl font-semibold text-gray-800">Performance Notes</h2>
            </div>

            <article class=" border border-slate-200 rounded-xl py-2 px-1 my-2 text-slate-500 max-w-fit w-auto h-fit">
                {"this.message "}{data}
            </article>
            <div class="flex flex-row w-full h-auto">
                <button onClick={()=>{Save()}} class="cursor-pointer px-3 py-1 m-2 text-sky-500 bg-sky-200 hover:bg-sky-300 rounded-md transition-normal duration-200">Save</button>
                <button onClick={()=>{Clear()}} class="cursor-pointer px-3 py-1 m-2 border border-slate-300 text-slate-500 hover:bg-slate-300 rounded-md transition-normal duration-200">Clear</button>
            </div>
        </div>
    )
}