const Home = () => {
  return (
    <div className="h-screen bg-indigo-50 flex flex-col justify-center items-center">
      <h1 className="font-sans mb-[20px] font-bold text-[25px]">Welcome to my Dashboard App</h1>
      <p className=" mb-[20px]">Manage your task, track analytics, and stay organized with our powerful dashboard</p>
      <a 
        className="bg-blue-600 text-white font-sans p-[10px_20px] font-bold no-underline rounded-lg hover:bg-blue-800"
        href='/dashboard'
      >
        Go to Dashboard
      </a>
    </div> 
  )
}

export default Home