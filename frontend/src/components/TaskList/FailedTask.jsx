import React from 'react'

const FailedTask = ({data}) => {
    return (
        <div className="bg-[#498ae4] w-1/4 h-[100%] p-3 rounded-lg flex-shrink-0">
             <div className="flex justify-between items-center rounded-xl">
                <p className="bg-[#bd4d35] rounded-lg p-1 font-bold text-white">{data.category}</p>
                <p className="text-base text-white">{new Date(data.taskDate).toLocaleDateString()}</p>
            </div>
            <div className="flex flex-col gap-1 my-2">
                <p className="text-xl text-white font-bold">{data.taskTitle}</p>
                <p className="text-base text-white font-semibold">
                    {data.taskDescription}
                </p>
            </div>
            <div className="flex gap-2 ">
                <button className="bg-green-500 w-[90%] hover:bg-green-600 text-white  px-3 rounded">
                    Complete
                </button>

            </div>

        </div>
    )
}

export default FailedTask
