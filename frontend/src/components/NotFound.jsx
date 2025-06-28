import { useNavigate } from "react-router-dom"

export default function NotFound(){
    const navigate = useNavigate();

    return(<div className="min-w-72 w-full max-w-screen h-screen bg-slate-50 dar p-0 m-0">
        <div className=" flex justify-center items-center flex-col py-30">
            <h1 className=" text-gray-500 text-4xl font-bold ">404</h1>
            <h2 className=" text-gray-500 text-3xl font-bold ">Page Not Found</h2>
            <h2 onClick={()=>{navigate(-1)}} className=" text-gray-500 text-md font-normal hover:underline hover:text-gray-700">Back To Page</h2>
        </div>
    </div>)
}