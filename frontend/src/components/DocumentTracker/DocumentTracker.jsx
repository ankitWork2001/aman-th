import { useState,useEffect } from "react";
// import {FilterDocumentTracker} from "./FilterDocumentTracker";
// import  TableDocumentTracker from "../components/TableDocumentTracker";
import Heading from "../components/Heading"
import FilterDocumentTracker from "./FilterDocumentTracker";
import TableDocumentTracker from "./TableDocumentTracker";
import ErrorMessage from "../components/ErrorMessage";

export default function DocumentTracker(){
    const [employee, setEmployee] = useState('');
    const [documentstype, setDocumentstype] = useState('');
    const [status, setStatus] = useState('');
    const [data, setData] = useState([]);
    const [error, setError] = useState("Lorem ipsum dolor, sit amet consectetur adipisicing elit.");

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
            <Heading heading={"DocumentTracker"} username={"Rahul"}/>
            
            {error && <ErrorMessage data={error}/>}
            
            <FilterDocumentTracker
                employee={employee}
                setEmployee={setEmployee}
                documentstype={documentstype}
                setDocumentstype={setDocumentstype}
                status={status}
                setStatus={setStatus}
            />
            <TableDocumentTracker data={data}/>
        </div>
    )
}
