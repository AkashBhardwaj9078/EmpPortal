import React from 'react'
import Header from '../other/header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../other/TaskList'


const EmpDashboard = () => {
  return (
    <div className='p-2'>
        <Header/>
        <TaskListNumber/>
        <TaskList/>
        

  {/*   <div className="p-4 h-[55%] flex gap-[10%] justify-start  flex-nowrap flex-shrink-0 ">
            <div className="bg-[#c5533d] w-[400px] h-[100%] p-3 rounded-t-lg">
                 <div className="flex justify-between items-center rounded-xl">
                    <p className='bg-[#bd4d35] rounded-lg p-1 font-bold text-white ' > High</p>
                    <p className='font-bold text-white'>20 Feb 2024</p>
                </div>
                <div className="flex flex-col gap-1 my-2">
                    <p className='text-xl text-white font-bold'>Ek aur Task</p>
                    <p className='text-lg text-white font-bold'>Task jaisa kabhi nhi dekha hoga </p>
                </div>

            </div>
            <div className="bg-[#95a963] p-3 rounded-t-lg">
                <div className="flex justify-between items-center rounded-xl">
                    <p className='bg-[#bd4d35] rounded-lg p-1 font-bold text-white ' > High</p>
                    <p className='font-bold text-white'>20 Feb 2024</p>
                </div>
                <div className="flex flex-col gap-1 my-2">
                    <p className='text-xl text-white font-bold'>Ek aur Task</p>
                    <p className='text-lg text-white font-bold'>Task jaisa kabhi nhi dekha hoga </p>
                </div>

            </div>
            <div className="bg-[#396eb6] p-3 rounded-t-lg">
                <div className="flex justify-between items-center rounded-xl">
                    <p className='bg-[#bd4d35] rounded-lg p-1 font-bold text-white ' > High</p>
                    <p className='font-bold text-white'>20 Feb 2024</p>
                </div>
                <div className="flex flex-col gap-1 my-2">
                    <p className='text-xl text-white font-bold'>Ek aur Task</p>
                    <p className='text-lg text-white font-bold'>Task jaisa kabhi nhi dekha hoga </p>
                </div>

            </div>

    
        </div> */}
        
      
    </div>
  )
}

export default EmpDashboard
