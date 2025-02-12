import React, { useEffect } from 'react'
import useAuthStore from '../../store/useAuthStore'

const AllTask = () => {
    const { allEmployees, getAllemployees } = useAuthStore();

    const counts = (employee) => {

        if (employee) {
            const activeCount = employee.tasks.filter(task => task.active).length;
            const completedCount = employee.tasks.filter(task => task.completed).length;
            const newTaskCount = employee.tasks.filter(task => task.newTask).length;
            const failedCount = employee.tasks.filter(task => task.failed).length;

            return {
                activeCount: activeCount,
                completedCount: completedCount,
                newTaskCount: newTaskCount,
                failedCount: failedCount



            }

        }


    }
    // Default to an empty array if allEmployees is null
    useEffect(() => {
        getAllemployees()
    }, [getAllemployees])

    const employees = allEmployees || [];

    return (
        <div className="">
            <div className="flex gap-4 flex-col h-80 bg-[#1c1c1c] w-full p-4 mt-8 overflow-auto flex-nowrap">
                <div className="flex rounded-lg text-center w-[80%] bg-red-400 flex-shrink-0 w-full justify-between p-4 items-center">
                    {/* Header row with respective text colors */}
                    <h3 className="w-1/5 font-semibold mt-1 text-xl text-white">Employee Name</h3>
                    <h3 className="w-1/5 font-semibold mt-1 text-xl text-green-600">New Task</h3>
                    <h3 className="w-1/5 font-semibold mt-1 text-xl text-blue-600">Active Task</h3>
                    <h3 className="w-1/5 font-semibold mt-1 text-xl text-yellow-600">Completed</h3>
                    <h3 className="w-1/5 font-semibold mt-1 text-xl text-black">Failed</h3>
                </div>

                <div id="Alltask" className="overflow-auto text-center flex-nowrap p-4 flex gap-4 flex-col">
                    {employees.map((emp, id) => (
                        <div key={id} className="flex rounded-lg  border-2 border-green-600 flex-shrink-0 w-full justify-between p-2 items-center">
                            {/* Employee row with respective text colors */}
                            <h3 className="text-white  w-1/5 font-semibold mt-1 text-xl">{emp.fullname}</h3>
                            <h3 className="text-green-600 w-1/5 font-semibold mt-1 text-xl">{counts(emp).newTaskCount}</h3>
                            <h3 className="text-blue-600 w-1/5 font-semibold mt-1 text-xl">{counts(emp).activeCount}</h3>
                            <h3 className="text-yellow-600 w-1/5 font-semibold mt-1 text-xl">{counts(emp).completedCount}</h3>
                            <h3 className="text-black w-1/5 font-semibold mt-1 text-xl">{counts(emp).failedCount}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllTask
