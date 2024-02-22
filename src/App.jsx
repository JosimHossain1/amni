
function App() {


  return (
    <>
      <div className="flex justify-between items-center bg-gray-100 h-screen px-24 rounded-md">
        {/* Text side */}

        <div className="text_side">
          <h1 className="text-6xl font-bold text-blue-600">Facebook</h1>
          <p className="text-2xl w-3/4 mt-5">Connect with frinds and the world around you on Facebook.</p>
        </div>

        <div className="form_side">
          <form className="shadow-lg p-10 w-[400px]">
            <input type="text" placeholder="Email or phone number" className="border border-black p-2 block w-full rounded" />
            <input type="password" placeholder="Password" className="border border-black p-2 block w-full rounded my-2" />

            <input type="submit" value="Login" className="p-2 block w-full rounded bg-blue-600 text-white text-xl font-semibold mb-2" />

            <a href="" className="text-center text-blue-600 underline cursor-pointer my-4">Forgot password?</a>
            <hr />


            <button className="p-2 block w-full rounded bg-green-600 text-white text-xl font-semibold my-4">Create new account</button>
          </form>
        </div >
      </div >
    </>
  )
}

export default App
