import React from 'react'

function Book({image,title,price}) {
  return (
    <>
    <div className="col-2 shadow rounded-3 d-flex justify-content-center flex-column text-center small-font">
                <img className='bookimage pt-3'  src={image} alt="" />
                <p className='mt-4'>{title}</p>
                <h5>${price}</h5>
            </div>
    </>
  )
}

export default Book
