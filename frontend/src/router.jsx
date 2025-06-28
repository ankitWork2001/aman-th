// src/router.js
import { createBrowserRouter } from 'react-router-dom'
import UserLogin from './components/UserLogin' // adjust path as needed
import AdminLogin from './components/AdminLogin'
import Navbar from './components/Navbar'
import MainDashboard from './components/MainDashboard/MainDashboard'
import EmployeeDirectory from './components/EmployeeDirectory/EmployeeDirectory'
import LeaveRequests from './components/LeaveRequest/LeaveRequests'
import DocumentTracker from './components/DocumentTracker/DocumentTracker'
import Notification from './components/Notification/Notification'
import EmployeeDetail from './components/EmployeeDetails/EmployeeDetail'
import UserDashboard from './components/UserDashboard/UserDashboard'
import NotFound from './components/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLogin />
  },
  {
    path: '/userlogin',
    element: <UserLogin />
  },
  {
    path: '/adminlogin',
    element: <AdminLogin />
  },
  {
    path: '/dashboard',
    element: <Navbar/>,
    children:[
      {
        index:true,
        element:<MainDashboard/>,
      },
      {
        path:'dashboard',
        element:<UserDashboard/>
      },
      {
        path:'employeeDirectory',
        element:<EmployeeDirectory/>,
        children:[
          {
            path:'id',
            element:<EmployeeDetail/>
          }
        ]
      },
      {
        path:'leaverequests',
        element:<LeaveRequests/>
      },
      {
        path:'documenttracker',
        element:<DocumentTracker/>
      },
      {
        path:'analytics',
        element:<EmployeeDetail/>
      },
      {
        path:'notifications',
        element:<Notification/>
      },
    ]
  },
  {
    path:'/*',
    element:<NotFound/>
  }
])

export default router
