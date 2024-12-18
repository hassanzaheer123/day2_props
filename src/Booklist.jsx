import React from 'react'
import Book from './Book';
import { data } from './data';

function Booklist() {
  return (
    <>
    <div className="container p-3">
        <div className="row  gap-5 justify-content-center">
            {data.map((item,index)=>{
                return(
                    <Book {...item} />
                );
            })}
            
             
        </div>
    </div>
    </>
  )
}

export default Booklist;