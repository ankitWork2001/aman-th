import { useNavigate } from "react-router-dom";
import Heading from "../components/Heading";
import FilterEmployee from "./FilterEmployee";
import { TableEmployeeDirectory } from "./TableEmployeeDirectory";
import { useEffect, useState } from "react";

export default function EmployeeDirectory() {
  const [employee, setEmployee] = useState('');
  const [role, setRole] = useState('');
  const [department, setDepartment] = useState('');
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
  }, [employee, role, department, status]); // Removed `data` from deps to avoid infinite loop
*/


  return (
    <div className="min-w-72 w-full max-w-screen h-screen bg-slate-50 p-0 m-0">
      <Heading heading={"EmployeeDirectory"} username={"Rahul"} />

      <FilterEmployee
        employee={employee}
        setEmployee={setEmployee}
        role={role}
        setRole={setRole}
        department={department}
        setDepartment={setDepartment}
        status={status}
        setStatus={setStatus}
      />

      <TableEmployeeDirectory data={data}/>
    </div>
  );
}