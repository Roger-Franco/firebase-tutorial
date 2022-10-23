import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase-config'

function App() {
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, "users")

  const createUser = async () => {

  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      // data.forEach((doc) => {
      //   return console.log(doc.data(), doc.id);
      // });
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getUsers()

  }, [])
  return (
    <div className="App">
      <input placeholder="Name..." />
      <input type="number" placeholder="Age..." />
      <button onClick={createUser} >Create User </button>
      {users.map((user) => {
        return (
          <div>
            <h1>Name: {user.name || user.Name}</h1>
            <h1>Age: {user.age || user.Age}</h1>
          </div>
        )
      })}
    </div>
  );
}

export default App;
