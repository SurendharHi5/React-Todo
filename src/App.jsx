import { useState } from 'react'
import './App.css'
import InputArea from './components/InputArea';
import FormList from './components/FormList';
import EditForm from './components/EditForm';

function App() {

  // const usersData = [
  //   {id:1,name:'Surendhar',email:'suren@gmail.com'},
  //   {id:1,name:'Anitha',email:'ani@gmail.com'},
  //   {id:1,name:'Tamizhini',email:'tamil@gmail.com'}
  // ];

  const[users, setUsers] = useState("");

  const addUser = (user)=>{
    user.id = users.length + 1;
    setUsers([...users,user])
  }

  const deleteUser = (id)=>{
    setUsers(users.filter((user)=>user.id!==id))
    setEdit(false);
  }


  const [edit,setEdit] = useState(false);
  const initialState = {id:null,name:'',description:''}
  const [currentUser,setCurrentUser] = useState(initialState);

  const editCard = (user)=>{
    setEdit(true);
    setCurrentUser({id:user.id, name:user.name, description:user.description});
  }
 
  const updateUser = (id,updatedUser)=>{
    setEdit(false);
    setUsers(users.map((user)=>(user.id===id?updatedUser:user)))
  }

  return (
   <div>
      <div id='sticky'>
          <h1 id='head'>My Todo</h1>
         
         <div >
            { edit?(<div>
                      <EditForm setEdit={setEdit} currentUser={currentUser} updateUser={updateUser}/>
                   </div>):(<div>
                              <InputArea addUser={addUser}/>
                            </div>)}
         </div>
      </div>
   <h1></h1>
   <FormList editCard={editCard} deleteUser={deleteUser} users={users}/>
   </div>
  )
}

export default App
