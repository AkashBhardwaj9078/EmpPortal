import React from 'react'
import Header from '../other/header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = () => {
  return (
    <div>
        <Header></Header>
        <CreateTask/>
        <AllTask/>
     
    </div>
  )
}

export default AdminDashboard
