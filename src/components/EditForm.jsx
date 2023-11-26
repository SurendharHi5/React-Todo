import React, { useEffect, useState } from 'react'

function EditForm(props) {

    const [user,setUser] = useState(props.currentUser)

    useEffect(()=>{
        setUser(props.currentUser)
    },[props])

    const inputChange = (event)=>{
        const {name,value} = event.target

        setUser({...user,[name]:value})
    }
  return (
    <div id='editForm'>
        <form className="row g-3" onSubmit={
            event =>{
                event.preventDefault();
                if(!user.name || !user.description){
                    return;
                }
                props.updateUser(user.id,user);
            }
         }>
            <div className="col-sm-6">
                <input onChange={inputChange} type="text" className="form-control" name="name" value={user.name} placeholder="Name"/>
            </div>
            <div className="col-sm-6">
                <input onChange={inputChange} type="text" className="form-control" name="description" value={user.description} placeholder="Description"/>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Update ToDo</button>
            </div>
            <div className="col-auto">
                <button onClick={()=>{props.setEdit(false)}} type="submit" className="btn btn-primary mb-3">Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default EditForm