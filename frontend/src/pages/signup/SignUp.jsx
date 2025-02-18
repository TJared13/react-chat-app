import GenderCheckbox from '../signup/GenderCheckbox'

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
            Sign up for 
            <span className="text-blue-500"> ChatSpace</span>
         </h1>
        
         <form>
            <div className="flex flex-row">
                <div className="mr-2">
                    <label className="label p-2 pt-5">
                    <span className="text-base label-text text-blue-500 font-semibold">First Name</span>
                </label>
                <input type="text" placeholder="First Name" className="w-full input input-bordered h-10" />
                </div>
                <div className="ml-2">
                <label className="label p-2 pt-5">
                    <span className="text-base label-text text-blue-500 font-semibold">Last Name</span>
                </label>
                <input type="text" placeholder="Last Name" className="w-full input input-bordered h-10" />
                </div>
            </div>

            <GenderCheckbox/>

            <div>
                <label className="label p-2 pt-2">
                    <span className="text-base label-text text-blue-500 font-semibold">Username</span>
                </label>
                <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" />
            </div>


            <div>
                <label className="label">
                    <span className="text-base label-text text-blue-500 font-semibold pt-1">Password</span>
                </label>
                <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10" />
            </div>
            <div>
                <label className="label">
                    <span className="text-base label-text text-blue-500 font-semibold pt-1">Confirm Password</span>
                </label>
                <input type="confirm password" placeholder="Enter password" className="w-full input input-bordered h-10" />
            </div>


            <div>
                <button className="btn btn-block btn-sm mt-5">Sign Up</button>
            </div>


            <a href="#" className="text-sm text-white hover:underline hover:text-blue-500 font-semibold mt-2 inline-block">Already have an account?</a>
         </form>

        </div>
      
    </div>
  )
}

export default SignUp



//STARTER CODE FOR THIS FILE
/* const SignUp = () => {
    return (
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
          <div className="w-full p-6 rounded-lg shadow-md bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center text-gray-300">
              Sign up for 
              <span className="text-blue-500"> ChatSpace</span>
           </h1>
          
           <form>
              <div className="flex flex-row">
                  <div className="mr-2">
                      <label className="label p-2 pt-5">
                      <span className="text-base label-text text-blue-500 font-semibold">First Name</span>
                  </label>
                  <input type="text" placeholder="First Name" className="w-full input input-bordered h-10" />
                  </div>
                  <div className="ml-2">
                  <label className="label p-2 pt-5">
                      <span className="text-base label-text text-blue-500 font-semibold">Last Name</span>
                  </label>
                  <input type="text" placeholder="Last Name" className="w-full input input-bordered h-10" />
                  </div>
              </div>
  
              <GenderCheckbox/>
  
              <div>
                  <label className="label p-2 pt-2">
                      <span className="text-base label-text text-blue-500 font-semibold">Username</span>
                  </label>
                  <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" />
              </div>
  
  
              <div>
                  <label className="label">
                      <span className="text-base label-text text-blue-500 font-semibold pt-1">Password</span>
                  </label>
                  <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10" />
              </div>
              <div>
                  <label className="label">
                      <span className="text-base label-text text-blue-500 font-semibold pt-1">Confirm Password</span>
                  </label>
                  <input type="confirm password" placeholder="Enter password" className="w-full input input-bordered h-10" />
              </div>
  
  
              <div>
                  <button className="btn btn-block btn-sm mt-5">Sign Up</button>
              </div>
  
  
              <a href="#" className="text-sm text-white hover:underline hover:text-blue-500 font-semibold mt-2 inline-block">Already have an account?</a>
           </form>
  
          </div>
        
      </div>
    )
  }
  
  export default SignUp
  
 */