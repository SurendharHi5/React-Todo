import React from 'react'

function FormList(props) {
  return (
    <div id='formList' >
       
            {
                props.users.length>0?(
                    props.users.map((user)=>(
                           <div key={user.id} >
                               <div className="col" >
                                    <div className="card" >
                                        <div className="card-body" >
                                        <p>Name : {user.name}</p>
                                        <p>Description : {user.description}</p>
                                        {/* <p>Status</p> */}
                                            <div className='edBtn'>
                                            <button onClick={()=>{props.editCard(user)}} type="button" className="ed btn btn-success btn-lg">Edit</button>
                                            <button onClick={()=>{props.deleteUser(user.id)}} type="button" className="ed btn btn-danger btn-lg">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           </div>
                    ))
                ):(
                    <h3>No ToDos</h3>
                )
            }
        
    </div>
  )
}

export default FormList