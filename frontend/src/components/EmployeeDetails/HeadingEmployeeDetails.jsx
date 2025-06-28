import { useNavigate } from "react-router-dom";

export default function HeadingEmployeeDetails({heading, empid}){
    const naviagte = useNavigate();

    function logOut() {
        naviagte('/')
        console.log("LogOut");
    }

    return(
        <>
         <div>
            <div class="w-ful flex justify-between items-center p-6 sm:p-9">
                <div class="text-xl font-medium flex ">{heading}</div>
                <div class="flex flex-col md:flex-row items-center p-3 rounded-md min-w-40 w-auto lg:w-44">
                <div class="flex flex-col items-center md:items-start md:mr-4">
                    <div class=" w-full h-fit m-2">{empid}</div>
                </div>
                <button onClick={logOut} class="bg-blue-500 text-white rounded-md px-4 h-9 mt-2 md:mt-0 hover:bg-blue-600 transition ease-in-out w-full md:w-auto">
                    Logout
                </button>
                </div>
            </div>
        </div>
        </>
    )
}
