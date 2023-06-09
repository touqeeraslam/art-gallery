import React from 'react'
const footer = () => {
  return (
    <>
      <div className="bg-footer py-3">
        <div className="container ">
            <div className="text-center ">
                <div className="logo">
                    <img src="/logo2.png" height='90' alt="Logo" />
                </div>
                <div className="py-2 ">
                    <input type="text" placeholder='Search art by keyword' className='footer_input '   />
                    <span className='text-light  search fw-bold'>SEARCH{`>`} </span>
                    <div className="py-2">
                       
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default footer
