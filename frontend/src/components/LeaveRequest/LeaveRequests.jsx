import { useState, useEffect } from "react";
import Heading from "../components/Heading"
import FilterLeaveRequest from "./FilterLeaveRequest";
import { TableLeaveRequests } from "./TableLeaveRequests";
import ErrorMessage from "../components/ErrorMessage";

export default function LeaveRequests(){

    const [employee, setEmployee] = useState('');
    const [type, setType] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');
    const [data, setData] = useState([]);
    const [error, setError] = useState("Lorem ipsum dolor, sit amet consectetur adipisicing elit")

 /*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/your-api-endpoint", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ employee, role, department, status }),
        });

        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [employee, type, date, status]);
*/
    
    return(<div class="min-w-72 my-4 w-full max-w-screen h-screen bg-slate-50 dar p-0 m-0">

        <Heading heading={"LeaveRequests"} username={"Rahul"}/>    

        {error && <ErrorMessage data={error}/>}

        <FilterLeaveRequest
            employee={employee}
            setEmployee={setEmployee}
            type={type}
            setType={setType}
            date={date}
            setDate={setDate}
            status={status}
            setStatus={setStatus}
        />
        <TableLeaveRequests data={data}/>
    </div>)
}