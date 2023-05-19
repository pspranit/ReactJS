import React from 'react'
import "../App.css"



function Movie() {
  return (
    <>
    <div className='main'>
        <h1>Movie</h1>
        <div className="card d-flex justify-content-center" >
             <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="/" className="btn btn-primary">Go somewhere</a>
             </div>
    </div>
    
   

    </div>
   

    </>

  )
}

export default Movie