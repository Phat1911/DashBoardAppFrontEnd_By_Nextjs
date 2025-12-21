import React from 'react'

const w: number = 250;

const dashboard = () => {
  return (
    <div className='h-screen bg-indigo-50 flex flex-col items-center'>
        <div className='font-sans bg-white w-[840px] p-[20px] mt-[20px] rounded-lg shadow-lg'>
            <h2 className='mb-[15px] font-bold text-[25px]'>Dashboard</h2>

            <p className="mb-[15px] text-[13px]">Welcome back! Here you can manage your tasks, view analytics, and make adjustments.</p>

            <div className='flex flex-wrap'>
                <a className='p-[20px_15px] block bg-indigo-100 rounded-lg no-underline mb-[20px]
                    hover:bg-indigo-200 hover:scale-105 transition-all duration-200 ease-in-out mr-[20px] ' 
                    href='/dashboard/tasks'
                    style={{
                        width: w,
                    }}
                >
                    <div className='w-[100%] flex justify-between mb-[10px]'>
                        <h4 className='text-indigo-600'>Tasks</h4>
                        <span>📋</span>
                    </div>
                    <p className='text-[13px]'>View, organize, and manage your daily tasks.</p>
                </a>

                <a className='p-[20px_15px] block bg-green-100 rounded-lg no-underline mb-[20px]
                    hover:bg-green-200 hover:scale-105 transition-all duration-200 ease-in-out mr-[10px]' 
                    href='/dashboard/analytics'
                    style={{
                        width: w,
                    }}
                >
                    <div className='w-[100%] flex justify-between mb-[10px]'>
                        <h4 className='text-green-600'>Analytics</h4>
                        <span>🏰</span>
                    </div>
                    <p className='text-[13px]'>Gain insight into your performance and trends.</p>
                </a>

                <a className='p-[20px_15px] block bg-purple-100 rounded-lg no-underline mb-[20px]
                    hover:bg-purple-200 hover:scale-105 transition-all duration-200 ease-in-out mr-[20px]' 
                    href='/dashboard/settings'
                    style={{
                        width: w,
                    }}
                >
                    <div className='w-[100%] flex justify-between mb-[10px]'>
                        <h4 className='text-purple-600'>Settings</h4>
                        <span>⚒️</span>
                    </div>
                    <p className='text-[13px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dolore!.</p>
                </a>

                <a className='p-[20px_15px] block bg-yellow-100 rounded-lg no-underline mb-[20px]
                    hover:bg-yellow-200 hover:scale-105 transition-all duration-200 ease-in-out mr-[10px]' 
                    href='/dashboard/users'
                    style={{
                        width: w,
                    }}
                >
                    <div className='w-[100%] flex justify-between mb-[10px]'>
                        <h4 className='text-yellow-600'>Users</h4>
                        <span>📋</span>
                    </div>
                    <p className='text-[13px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, enim?.</p>
                </a>
            </div>
        </div>
    </div>
  )
}

export default dashboard