import { useState } from "react";
import Heading from "../components/Heading"
import { FilterNotification } from "./FilterNotification";
import { TableAllNotification } from "./TableAllNotification";

export default function Notification(){

    const [employee, setEmployee] = useState('');
    const [documentstype, setDocumentstype] = useState('');
    const [status, setStatus] = useState('');
    const [data, setData] = useState([]);
    
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

    return(
        <div class="min-w-72 w-full max-w-screen h-screen bg-slate-50 dar p-0 m-0">

            <Heading heading={"Notifications"} username={"Rahul"}/>

            <FilterNotification
                employee={employee}
                setEmployee={setEmployee}
                documentstype={documentstype}
                setDocumentstype={setDocumentstype}
                status={status}
                setStatus={setStatus}            
            />
            <TableAllNotification data={data}/>
        </div>
    )
}
