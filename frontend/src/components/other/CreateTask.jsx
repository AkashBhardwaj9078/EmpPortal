import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/useAuthStore';

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');
  const [taskDescription, settaskDescription] = useState('');
  const navigate=useNavigate()
  const {assignTask}=useAuthStore()

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create task payload with default properties and ISO formatted date
    const newTask = {
      taskTitle,
      taskDate: new Date(taskDate).toISOString(),
      category,
      taskDescription

      
    };
    assignTask(newTask, assignTo, navigate);

    setTaskDate('')
    setAssignTo('')
    setCategory('')
    settaskDescription('')
    // Add logic to send newTask to backend
  };

  return (
    <div className='bg-[#1c1c1c] h-1/2 w-full p-4 '>
        <form onSubmit={handleSubmit} className='flex gap-30'>
            <div className="w-1/2 flex flex-col gap-2 mb-5">
                <h3 className='w-full  font-semibold mt-1 text-xl'>Task Title</h3>
                <input type="text"
                className='outline-none border-1 border-white w-full text-base font-semibold px-6 p-1 rounded-lg'
                placeholder='Make a UI design'
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)} />

                <h3 className='w-full  font-semibold mt-1 text-xl'>Date</h3>
                <input type="date"
                className='outline-none border-1 border-white w-full text-base font-semibold px-6 p-1 rounded-lg'
                placeholder='dd/mm/yyyy'
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)} />

                <h3 className='w-full mt-1  font-semibold text-xl'>Assign to</h3>
                <input type="text"
                className='outline-none border-1 border-white w-full text-base font-semibold px-6 p-1 rounded-lg'
                placeholder='Employee Name'
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)} />

                <h3 className='w-full mt-1  font-semibold text-xl'>Category</h3>
                <input type="text"
                className='outline-none border-1 border-white w-full text-base font-semibold px-6 p-1 rounded-lg'
                placeholder='design, dev ,etc '
                value={category}
                onChange={(e) => setCategory(e.target.value)} />
            </div>
            <div className="w-1/2 flex flex-col gap-2 mb-5">
                <h3 className='w-full  font-semibold my-1 text-xl'>Description</h3>
                <textarea 
                    className="outline-none border-1 border-white w-full text-base font-semibold px-6 p-1 rounded-lg" 
                    placeholder="Enter task description" 
                    rows="8"
                    value={taskDescription}
                    onChange={(e) => settaskDescription(e.target.value)}>
                </textarea>
                <button 
                    type="submit"
                    className="outline-none border-1 mt-7 bg-[#54b586] border-black w-full text-xl font-semibold px-6 p-2 rounded-lg" >
                    Create Task
                </button>
            </div>
        </form>
    </div>
  )
}

export default CreateTask;
