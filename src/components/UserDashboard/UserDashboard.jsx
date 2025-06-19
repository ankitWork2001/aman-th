import { useState } from "react";
import HeadingEmployeeDetails from "../EmployeeDetails/HeadingEmployeeDetails";
import MarkAttendance from "./MarkAttendance";
import ThreeButtons from "./ThreeButtons";
import PersonalInformation from "./PersonalInformation";
import ApplyForLeave from "./ApplyForLeave";
import DocumentUpload from "./DocumentUpload";
import UserNotification from "./UserNotification";
import Loading from '../Loading';

export default function UserDashboard() {
    const [data, setData] = useState([]);
    const [attendanceStatus, setAttendanceStatus] = useState(false);
    const [attendanceList, setAttendanceList] = useState([]);
    const [name, setName] = useState('John Doe');
    const [designation, setDesignation] = useState('Software Engineer');
    const [department, setDepartment] = useState('Engineering');
    const [email, setEmail] = useState('john.doe@company.com');
    const [joinningDate, setJoinningDate] = useState('15 January 2024');
    const [phoneNo, setPhoneNo] = useState('+91 657490462');
    const [empId, setEmpId] = useState('EMP-01');
    const [leaveType, setLeaveType] = useState('');
    const [startDate, setStartDate] = useState('');
    const [lastDate, setLastDate] = useState('');
    const [reason, setReason] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [pan, setPan] = useState('');
    const [resume, setResume] = useState('');
    const [error, setError] = useState(null); // for leave form validation

    function EditProfile() {
        console.log("EditProfile");
    }

    function MarkTodayAttendance() {
        setAttendanceStatus(true);
        console.log("MarkTodayAttendance");
    }

    function ApplyForLeaveFunction() {
        console.log("ApplyForLeave");
    }

    function UploadDocument() {
        console.log("UploadDocument");
    }

    function ProfileUpdate() {
        console.log("ProfileUpdate");
    }

    function SendLeaveApplicationFunction() {
        try {
            if (!leaveType || !startDate || !lastDate || !reason) {
                throw new Error("All fields are required");
            }
            console.log("SendLeaveApplicationFunction");
        } catch (e) {
            setError(e.message);
        }
    }

    function Clear() {
        setLeaveType('');
        setStartDate('');
        setLastDate('');
        setReason('');
        console.log("Clear");
    }

    return (
        <div className="min-w-72 w-full max-w-screen h-screen bg-slate-50 p-0 m-0">
            <HeadingEmployeeDetails
                heading={"EmployeeDetails John Doe!"}
                empid={"Employee ID - EMP-01"}
            />

            {attendanceList.length === 0 ? (
                <MarkAttendance
                    attendanceStatus={attendanceStatus}
                    MarkTodayAttendance={MarkTodayAttendance}
                    attendanceList={attendanceList}
                />
            ) : (
                <Loading />
            )}

            <ThreeButtons
                ApplyForLeave={ApplyForLeaveFunction}
                UploadDocument={UploadDocument}
                ProfileUpdate={ProfileUpdate}
            />

            {(name && designation && department && email) ? (
                <PersonalInformation
                    name={name}
                    designation={designation}
                    department={department}
                    email={email}
                    joinningDate={joinningDate}
                    phoneNo={phoneNo}
                    empId={empId}
                    EditProfile={EditProfile}
                />
            ) : (
                <Loading />
            )}

            <ApplyForLeave
                leaveType={leaveType}
                setLeaveType={setLeaveType}
                startDate={startDate}
                setStartDate={setStartDate}
                lastDate={lastDate}
                setLastDate={setLastDate}
                reason={reason}
                setReason={setReason}
                SendLeaveApplicationFunction={SendLeaveApplicationFunction}
                Clear={Clear}
                error={error}
            />

            <DocumentUpload
                aadhar={aadhar}
                setAadhar={setAadhar}
                pan={pan}
                setPan={setPan}
                resume={resume}
                setResume={setResume}
            />

            <UserNotification data={data} />
        </div>
    );
}



















// import HeadingEmployeeDetails from "../EmployeeDetails/HeadingEmployeeDetails";
// import { useState } from "react";
// import MarkAttendance from "./MarkAttendance";
// import ThreeButtons from "./ThreeButtons";
// import PersonalInfomation from "./PersonalInformation";
// import ApplyForLeave from "./ApplyForLeave";
// import DocumentUpload from "./DocumentUpload";
// import UserNotification from "./UserNotification";
// import Loading from '../Loading';


// export default function UserDashboard(){

//     const [data,setData] = useState([])
//     const [attendanceStatus,setAttendanceStatus] = useState(false);
//     const [attendanceList,setAttendanceList] = useState([]);
//     const [name,setName] = useState('John Doe');
//     const [designation,setDesignation] = useState('Software Engineer');
//     const [department, setDepartment] = useState('Engineering');
//     const [email,setEmail] = useState('jhon.doe@company.com');
//     const [joinningDate, setJoinningDate] = useState('15 January 2024');
//     const [phoneNo, setPhoneNo] = useState('+91 657490462');
//     const [empId, setEmpId] = useState('EMP-01');
//     const [leaveType, setLeaveType] = useState('');
//     const [startDate, setStartDate] = useState('');
//     const [lastDate, setLastDate] = useState('');
//     const [reason, setReason] = useState('');
//     const [aadhar, setAadhar] = useState('');
//     const [pan,setPan] = useState('');
//     const [resume, setResume] = useState('');


//   /*
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("/your-api-endpoint", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });

//         const result = await res.json();
//         setPrevousAttendanceList(result);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [month]);
// */

// /*
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("/your-api-endpoint", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });

//         const result = await res.json();
//         setData(result);
//         setName(() => result.name)
//         setDesignation(() => result.designation)
//         setDepartment(() => result.department)
//         setEmail(() => result.email)
//         setJoinningDate(() => result.joinningDate)
//         setPhoneNo(() => result.phoneNo)
//         setEmpId(() => result.empId)
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [name,designation,department,email,joinningDate,phoneNo,empId]);
// */

//   function EditProfile(){
//     try{      
//       console.log("EditProfile");
//     }catch(e){

//     }
//   }
//   function MarkTodayAttendance(){
//     setAttendanceStatus(true);
//     console.log("MarkTodayAttendance");
//   }

//   function ApplyForLeaveFunction(){
//     try{      
//       console.log("ApplyForLeave");
//     }catch(e){

//     }
//   }

//   function UploadDocument(){
//     try{      
//       console.log("UploadDocument");    
//     }catch(e){

//     }
//   }

//   function ProfileUpdate(){
//     try{      
//       console.log("ProfileUpdate");
//     }catch(e){

//     }
//   }


//   function SendLeaveApplicationFunction(){
//     try{
//       if(!leaveType || !startDate || !lastDate || !reason){
//         throw new Error("All Fields are required");        
//       }      
//       console.log("SendLeaveApplicationFunction");
//     }catch(e){
//       setError(e);
//     }
//   }

//   function Clear(){
//     try {
//       setLeaveType('');
//       setStartDate('');
//       setLastDate('');
//       setReason('');
//       console.log("Clear")
//     } catch (error) {
      
//     }
//   }
//     return(<div className="min-w-72 w-full max-w-screen h-screen bg-slate-50 dar p-0 m-0">

//         <HeadingEmployeeDetails heading={"EmployeeDetails jhonDoe!"} empid={"Employee ID - EM01"}/>

//         {attendanceList ?
//           <MarkAttendance 
//             attendanceStatus={attendanceStatus}
//             MarkTodayAttendance={MarkTodayAttendance}
//             attendanceList={attendanceList}
//           />
//           :<Loading/>
//         }

//         <ThreeButtons
//             ApplyForLeave={ApplyForLeaveFunction}
//             UploadDocument={UploadDocument}
//             ProfileUpdate={ProfileUpdate}
//         />

//         {name && designation && department && email
//           <PersonalInfomation
//             name={name} 
//             designation={designation} 
//             department={department} 
//             email={email}
//             joinningDate={joinningDate} 
//             phoneNo={phoneNo} 
//             empId={empId}
//             EditProfile={EditProfile}
//           />
//         }

//         <ApplyForLeave
//             leaveType={leaveType}
//             setLeaveType={setLeaveType}
//             startDate={startDate}
//             setStartDate={setStartDate}
//             lastDate={lastDate}
//             setLastDate={setLastDate}
//             reason={reason}
//             setReason={setReason}
//             SendLeaveApplicationFunction={SendLeaveApplicationFunction}
//             Clear={Clear}
//         />

//         <DocumentUpload 
//             aadhar={aadhar}
//             setAadhar={setAadhar}
//             pan={pan}
//             setPan={setPan}
//             resume={resume}
//             setResume={setResume}
//         />
//         <UserNotification data={data}/>
//     </div>)
// }
