import React from "react";


const login = () => {
  return (
    <>
      <div className="container d-flex font-form justify-content-center">
        <div className="bg-form  w-400">
          <form className="mx-4 my-4">
            <div className="heading">
              <h2 className="text-cadet fw-bold">Welcome Back to</h2>
            </div>
            <div className="logo">
              <img src="/logo.png" height="69" alt="Logo" />
            </div>
            <div className="py-2">
              <div className="form-group py-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
                  
                <div className="py-2">
                    <input type="checkbox" className="form-check-input" id="flexCheckDefault" />
                    <span className="text-cadet px-2" for='flexCheckDefault'>Keep me logged in</span>
                    <span className="mx-1 text-cadet">Forgot Password?</span>
                </div>
              <div className="py-2 d-grid">
                <button type="button" className="button py-2">Log in</button>
                <p className="text-cadet my-2">OR</p>
              </div>
             <div className="d-grid">
                <a href="#" className="google align-self-center  h-42 text-decoration-none">
                    <div className="p-6">

                 <img className="icon" src="/google.svg" alt="google" height='23' />
                 <span>Continue with Google</span>
                    </div>
                  
                </a>
             </div>
             <div className="my-2">
                      <a href="#" className="text-decoration-none text-cadet font-18 px-2">Don't have an accout yet?</a>
                      <span className="text-dark">Sign up</span>
                    </div>
                    <p className="text-cadet">By continuing ,you agree to ArtActually's <b> Terms of Service</b> and acknowledge you've read our <b> Privacy Policy.Notice at collection.</b></p>
            </div>
          </form>
        </div>

        <img src="/door.png" className="image" width='366' alt="Door Beautiful" />
      </div>
    </>
  );
};

export default login;
