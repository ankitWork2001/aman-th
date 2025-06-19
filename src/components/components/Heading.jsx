import { useNavigate } from "react-router-dom"

export default function Heading({heading, username}){
    const navigate = useNavigate();

    function logout() {
        console.log("LogOut");
        navigate('/')
    }

    return(
        <div>
        <div className="w-ful flex justify-between items-center p-6 sm:p-9">
            
            <div className="text-xl font-medium">{heading}</div>
            
            <div className="flex flex-col md:flex-row items-center p-3 rounded-md min-w-40 w-auto lg:w-44">
            
            <div onClick={()=>{navigate('/userdashboard')}} className=" cursor-pointer flex flex-col items-center md:items-start md:mr-4">
                <div className="bg-amber-500 rounded-full w-8 h-8 m-2"></div>
                <div className=" text-sm -mt-1">{username}</div>
            </div>
            
            <button onClick={()=>{logout()}} className=" cursor-pointer bg-blue-500 text-white rounded-md px-4 h-9 mt-2 md:mt-0 hover:bg-blue-600 transition ease-in-out w-full md:w-auto">
                Logout
            </button>
            </div>
        </div>
        </div>
    )
}