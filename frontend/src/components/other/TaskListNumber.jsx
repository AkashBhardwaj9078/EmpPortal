import React, { useEffect, useState } from 'react'
import useAuthStore from '../../store/useAuthStore'

const TaskListNumber = () => {
    const { employee } = useAuthStore()
    const [counts, setCounts] = useState({
        activeCount: 0,
        completedCount: 0,
        newTaskCount: 0,
        failedCount: 0,
    })

    useEffect(() => {
        if (employee && employee.tasks) { // changed from employee.task to employee.tasks
            const activeCount = employee.tasks.filter(task => task.active).length;
            const completedCount = employee.tasks.filter(task => task.completed).length;
            const newTaskCount = employee.tasks.filter(task => task.newTask).length;
            const failedCount = employee.tasks.filter(task => task.failed).length;

            setCounts({ activeCount, completedCount, newTaskCount, failedCount });
        }
        console.log({ activeCount: counts.activeCount, completedCount: counts.completedCount, newTaskCount: counts.newTaskCount, failedCount: counts.failedCount })
    }, [employee])

    return (
        <div className="flex gap-5 text-white p-4">
            <div className="bg-[#498ae4] h-full w-full px-4 py-2 rounded-lg">
                <span className="text-4xl font-bold">{counts.newTaskCount}</span>
                <br />
                <span className="text-xl font-bold">New Task</span>
            </div>
            <div className="bg-[#abc070] h-full w-full px-4 py-2 rounded-lg">
                <span className="text-4xl font-bold">{counts.completedCount}</span>
                <br />
                <span className="text-xl font-bold">Completed</span>
            </div>
            <div className="bg-[#f5cf5f] h-full w-full px-4 py-2 rounded-lg">
                <span className="text-4xl text-black font-bold">{counts.activeCount}</span>
                <br />
                <span className="text-xl text-black font-bold">Active</span>
            </div>
            <div className="bg-[#c5533d] h-full w-full px-4 py-2 rounded-lg">
                <span className="text-4xl font-bold">{counts.failedCount}</span>
                <br />
                <span className="text-xl font-bold">Failed</span>
            </div>
        </div>
    )
}

export default TaskListNumber

