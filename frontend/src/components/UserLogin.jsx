import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

export default function UserLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState('Somthing went wrong');
    const [loading, setLoading]= useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError('');

        try{
            await fetch("www.techbackend.com",{method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, password})
            })
            navigate("/dashboard");
            console.log("handleSubmit")

        }catch(e){
            setError('Somthing went wrong,'+ `${e}`);
        }finally{
            setLoading(false);
        }
        console.log('handleSubmit');
    }

    function handleForgotPassword(e) {
        e.preventDefault();
        navigate("/forgot-password");
        console.log("handleForgotPassword")
    }

    return (
        <div className="z-0 m-0 h-screen w-screen bg-[url('https://wallpapercave.com/wp/Zbd9HRH.jpg')] bg-cover bg-center p-0 flex items-center justify-center sm:justify-center md:justify-start lg:justify-start">
            <div className="md:pl-20 lg:pl-20 p-2 flex justify-center items-center rounded-md text-slate-700 dark:text-slate-200">
                {loading ? 
                <Loading/> :
                <div className="p-4 m-2 w-[28rem] rounded-md shadow-lg">
                    <h1 className="text-center text-2xl flex font-bold text-slate-200">
                        Thynk<div className="font-thin">tech</div>
                    </h1>
                    <form onSubmit={handleSubmit} className="p-6 mt-4 bg-slate-100 dark:bg-slate-700 rounded-md">
                        <h2 className="mb-4 text-xl font-semibold">Admin Login</h2>

                        <label className="block mb-1 text-sm font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="john@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="p-2 w-full mb-4 border-1 rounded-md border-blue-200 focus:outline-none focus:ring-1 focus:ring-blue-300"
                        />

                        <label className="block mb-1 text-sm font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="!@HYTajgh2025"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="p-2 w-full mb-6 border-1 rounded-md border-blue-200 focus:outline-none focus:ring-1 focus:ring-blue-300 font-normal"
                        />

                        {error && <div className="p-2 my-2 w-full h-auto text-center text-red-500">{error}</div>}

                        <button
                            type="submit"
                            className="p-2 w-full bg-blue-400 text-white rounded-md hover:bg-blue-500 transition duration-200"
                        >
                            Submit
                        </button>

                        <button
                            type="button"
                            onClick={handleForgotPassword}
                            className="p-2 mt-3 w-full text-blue-500 hover:underline"
                        >
                            Forgot password?
                        </button>
                    </form>
                </div>
                }
            </div>
        </div>
    );
}