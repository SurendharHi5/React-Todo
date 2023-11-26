import React, { useState } from 'react'

function InputArea(props) {
    const initialState = {id:null,name:'',description:''}
    const [user, setUser] = useState(initialState);

    const inputChange = (event)=>{
        const {name,value} = event.target

        setUser({...user,[name]:value})
    }

  return (
    <div id='inputArea'>
         <form className="row g-3" onSubmit={
            event =>{
                event.preventDefault();
                if(!user.name || !user.description){
                    return;
                }
                props.addUser(user);
                setUser(initialState)
            }
         }>
            <div className="col-sm-5">
                <input onChange={inputChange} type="text" className="form-control" name="name" value={user.name} placeholder="Name"/>
            </div>
            <div className="col-sm-5">
                <input onChange={inputChange} type="text" className="form-control" name="description" value={user.description} placeholder="Description"/>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Add ToDo</button>
            </div>
        </form>
         
    </div>
  )
}

export default InputArea