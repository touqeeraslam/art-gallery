import React from "react";


const forgot = () => {
  return (
    <>
      <div className="container d-flex font-form justify-content-center">
        <div className="bg-form2  w-400 d-flex justify-content-center">
          <form className="mx-4 my-4 align-self-center text-center">
            <div className="heading">
              <h2 className="text-cadet fw-bold">Reset your password</h2>
              <p className="text-cadet font-18">What's your registered email?</p>
            </div>
     
            <div className="py-2">
              <div className="form-group py-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
          
                  
          
              <div className="py-2 d-grid">
                <button type="button" className="button py-2">Send a password reset email</button>
          
              </div>
        
            </div>
          </form>
        </div>

        <img src="/door.png" className="image" width='366' alt="Door Beautiful" />
      </div>
    </>
  );
};

export default forgot;
