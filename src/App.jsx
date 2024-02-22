
function App() {


  return (
    <>
      <div className="flex justify-between items-center bg-gray-100 h-screen px-24">
        {/* Text side */}

        <div className="text_side">
          <h1 className="text-6xl font-bold text-blue-600">Facebook</h1>
          <p className="text-2xl w-3/4 mt-5">Connect with frinds and the world around you on Facebook.</p>
        </div>

        <div className="form_side">
          <form className="shadow-lg p-10">
            <input type="text" placeholder="Email or phone number" className="border p-2 block w-full rounded" />
            <input type="password" placeholder="Password" />

            <input type="submit" value="Login" />

            <a href="">Forgot password?</a>
            <hr />


            <button>Create new account</button>
          </form>
        </div >
      </div >
    </>
  )
}

export default App
