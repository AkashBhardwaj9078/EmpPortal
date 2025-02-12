import React from 'react'

const AcceptTask = ({data}) => {
    // "taskTitle": "Meet Client",
    //     "taskDescription": "Meet the client to discuss project details",
    //     "taskDate": "2025-02-19T00:00:00.000Z",
    //     "category": "Work",
return (
    <div className="bg-[#498ae4] w-1/4 p-3 rounded-lg flex flex-col">
        <div className="flex justify-between items-center mb-2">
            <p className="bg-[#bd4d35] rounded-lg p-1 font-bold text-white">{data.category}</p>
            <p className="text-base text-white">{new Date(data.taskDate).toLocaleDateString()}</p>
        </div>
        <div className="mb-2">
            <p className="text-xl text-white font-bold">{data.taskTitle}</p>
            <p className="text-base text-white font-semibold">{data.taskDescription}</p>
        </div>
        <div className="flex gap-2">
            <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">
                Completed
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                Failed
            </button>
        </div>
    </div>
)
}

export default AcceptTask
