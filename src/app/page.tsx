const LoginPage = () => {

  return (
    <main className="bg-pageBg bg-cover bg-center bg-no-repeat min-h-screen flex justify-center items-center">
      <div className="w-full h-full flex justify-center items-center bg-opacity-50">
        <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-80 shadow-lg shadow-black p-8">
          <h1 className="text-2xl font-bold mb-4 text-center">Sign In</h1>
          <form action="" className="space-y-4">
            <input 
              type="text" 
              placeholder="Username" 
              className="py-2 px-3 w-full text-black text-lg rounded-md outline-none border border-gray-300"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="py-2 px-3 w-full text-black text-lg rounded-md outline-none border border-gray-300"
            />
            <div className="flex justify-between items-center mt-4">
              <a 
                href="/signup" 
                className="text-blue-500 hover:underline">
                Not yet Registered?
              </a>
              <button 
                type="submit" 
                className="py-2 px-4 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600"
              >
                Sign In
              </button>
            </div>
          </form>
        </aside>
      </div>
    </main>
  )
}

export default LoginPage;