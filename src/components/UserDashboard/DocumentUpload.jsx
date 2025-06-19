

export default function DocumentUpload({
    aadhar,
    setAadhar,
    pan,
    setPan,
    resume,
    setResume
}){
    return(<div className="p-2 m-2 my-7 overflow-x-auto rounded-md shadow-md bg-white">
            <div className="p-3 w-full">
                <div className="text-xl font-semibold">Document Upload</div>
            </div>

            <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-fit">
                
                <div className="flex flex-col">
                <div className="flex items-center justify-start mb-1 space-x-2">
                    <babel className="font-medium text-xs text-gray-800" htmlFor="aadhar">Aadhar Card</babel>
                    <p style={{color: aadhar !== "" ? "green" : "red"}} className="font-medium text-xs"> {resume !== "" ? "(Uploaded)" : "(Missing)"}</p>
                </div>
                <input
                    id="aadhar"
                    type="file"
                    value={aadhar}
                    onChange={(e)=>setAadhar(e.target.value)}
                    className="h-10 w-full rounded-sm border border-gray-200 text-gray-700 focus:ring-blue-300 focus:border-blue-300 p-2 outline-none"
                />
                </div>

                <div className="flex flex-col">
                <div className="flex items-center justify-start mb-1 space-x-2">
                    <label className="font-medium text-xs text-gray-800" htmlFor="pan">PAN Card</label>
                    <p style={{color: pan !== "" ? "green" : "red"}} className="font-medium text-xs"> {resume !== "" ? "(Uploaded)" : "(Missing)"}</p>
                </div>
                <input
                    id="pan"
                    type="file"
                    value={pan}
                    onChnage={(e)=>setPan(e.target.value)}
                    className="h-10 w-full rounded-sm border border-gray-200 text-gray-700 focus:ring-blue-300 focus:border-blue-300 p-2 outline-none"
                />
                </div>

                <div className="flex flex-col">
                <div className="flex items-center justify-start mb-1 space-x-2">
                    <label className="font-medium text-xs text-gray-800" htmlFor="resume">Resume</label>
                    <p style={{color: resume !== "" ? "green" : "red"}} className="font-medium text-xs"> {resume !== "" ? "(Uploaded)" : "(Missing)"}</p>
                </div>
                <input
                    id="resume"
                    type="file"
                    value={resume}
                    onChange={(e)=>setResume(e.target.value)}
                    className="h-10 w-full rounded-sm border border-gray-200 text-gray-700 focus:ring-blue-300 focus:border-blue-300 p-2 outline-none"
                />
                </div>
            </div>
            </div>
)
}