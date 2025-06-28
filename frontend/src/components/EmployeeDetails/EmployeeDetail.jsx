import { useState,useEffect } from "react";
import HeadingEmployeeDetails from "./HeadingEmployeeDetails";
import PersonalDetails from "./PersonalDetails";
import LeaveHistoryEmployeeDetail from "./LeaveHistoryEmployeeDetail";
import DocumentStatus from "./DocumentStatus";
import OngoingTasks from "./OngoingTasks";
import PerformanceNotes from "./PerformanceNotes";

export default function EmployeeDetail(){
    const [data,setData] = useState('');
    const [month,setMonth] = useState('');
    const [name,setName] = useState('John Doe');
    const [documentStatus, setDocumentStatus] = useState([]);
    const [designation,setDesignation] = useState('Software Engineer');
    const [department, setDepartment] = useState('Engineering');
    const [email,setEmail] = useState('jhon.doe@company.com');
    const [joinningDate, setJoinningDate] = useState('15 January 2024');
    const [phoneNo, setPhoneNo] = useState('+91 657490462');
    const [empId, setEmpId] = useState('EMP-01')
/*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/your-api-endpoint", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const result = await res.json();
        setData(result);
        setName(() => result.name)
        setDesignation(() => result.designation)
        setDepartment(() => result.department)
        setEmail(() => result.email)
        setJoinningDate(() => result.joinningDate)
        setPhoneNo(() => result.phoneNo)
        setEmpId(() => result.empId)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [name,designation,department,email,joinningDate,phoneNo,empId]);
*/
/*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/your-api-endpoint", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [month]);
*/

    return(
    <div className="min-w-72 w-full max-w-screen h-screen bg-slate-50 p-0 m-0">
        <HeadingEmployeeDetails 
          heading={"EmployeeDetails jhonDoe!"} 
          empid={"Employee ID - EM01"}
        />

        <PersonalDetails 
            name={name} 
            designation={designation} 
            department={department} 
            email={email} 
            joinningDate={joinningDate} 
            phoneNo={phoneNo} 
            empId={empId}
        />

        <LeaveHistoryEmployeeDetail 
            data={data}
            month={month}
            setMonth={setMonth}
        />

        <DocumentStatus data={documentStatus}/>

        <OngoingTasks data={data}/>

        <PerformanceNotes 
          PerformanceNotes={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius labore, dignissimos saepe voluptatem laboriosam ut facere ab sequi consequatur vero, sunt perspiciatis assumenda laudantium asperiores quo id sed, pariatur commodi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis accusamus blanditiis deleniti reiciendis eligendi, facere tenetur perferendis, quidem magnam quis dicta atque reprehenderit delectus, expedita itaque consequatur dolorum ex. Ipsa.'}
        />
    </div>
    )
}
