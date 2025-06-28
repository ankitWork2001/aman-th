import Heading from "../components/Heading";
import  Grids from "./Grids";
import RecentLeaveRequest from "./RecentLeaveRequest";
import Notifications from "./Notifications";

export default function MainDashboard(){

  const data = null

  function ViewAll(){
    console.log("ViewAll");
  }

  function ViewAllNotification(){
    console.log("ViewAll");
  }

  return(<div className="min-w-72 max-w-screen h-screen bg-slate-50 dar p-0 m-0">
      <Heading heading={"Welcome, Rahul!"} username={"Rahul"}/>    
      <Grids data={data}/>
      <RecentLeaveRequest viewAll={ViewAll}/>
      <Notifications viewAll={ViewAllNotification}/>
  </div>)
}
