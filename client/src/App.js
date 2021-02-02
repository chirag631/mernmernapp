//import logo from './logo.svg';
import './App.css';
import axios from "axios";

import React, {useState,useEffect} from 'react';

const App = (props)=>  {

  const[data1,setdata]=useState([]);

  

  useEffect(() => {
    const loadUsers = async () => {
      const result = await axios.get("/testapi");
      //const result1=await result.json();
      //result.map(result=>result.json());
      //const {data1} = await result.json();
      
      setdata(result.data.users);
    };
    loadUsers();
  }, []);

  
  console.log(data1);
  
  return (
    <div className="App">
    <h1>hello</h1>
      <table>
        <thead>
        <tr>
          <th>name</th>
          <th>username</th>
          <th>email</th>
        </tr>
        </thead>
        <tbody>
        
        {
                data1.map(row =>(

                    <tr key={row.id}>
 
                    <td>{row.name}</td>
                    <td>{row.username}</td>
                    <td>{row.email}</td>
                    
                    </tr>

                            )
                   )
                   
                
                }

</tbody>
      </table>
      <p>hello world</p>
    </div>
  );



}




export default App;
