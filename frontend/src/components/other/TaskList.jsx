import React from 'react'
import AcceptTask from '../TaskList/AcceptTask'
import NewTask from '../TaskList/NewTask'
import FailedTask from '../TaskList/FailedTask'
import CompleteTask from '../TaskList/CompleteTask'
import useAuthStore from '../../store/useAuthStore'

const TaskList = () => {
    const {employee}=useAuthStore()

    return (
        <div className=' h-[55%] py-5 mt-10 overflow-hidden px-10'>
            <div id="tasklist" className='flex-nowrap overflow-x-auto flex gap-5'>
            
                   {


                    employee?.tasks.map((elem)=>{
                        if(elem.active){
                            return <AcceptTask data={elem}/>
                        }
                        else if(elem.completed){
                            return <CompleteTask data={elem} />
                        }
                        else if(elem.newTask){
                            return <NewTask data={elem} />
                        }
                        else{
                            return <FailedTask data={elem}/>
                        }
                    })

                   }
            
            
            
            
            
            
            
            
              {/* {  <AcceptTask />

                <NewTask />

                <FailedTask />

                <CompleteTask />

                <AcceptTask />

                <NewTask />

                <FailedTask />

                <CompleteTask />

                <AcceptTask />

                <NewTask />

                <FailedTask />

                <CompleteTask /> }
 */}


            </div>
        </div>
    )
}

export default TaskList
