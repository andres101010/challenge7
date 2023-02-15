import { useState,useEffect } from 'react';
import Table from 'react-bootstrap/Table';


const Usuarios = ()=>{
    
    const [data, setData]=useState([]);
    const url = 'https://jsonplaceholder.typicode.com/users';

    const getData = ()=>{
        try {
            fetch(url)
            .then(resp => resp.json())
            .then(json => setData(json) )
        } catch (error) {
            console.log(error)
        }   
    };
    

    useEffect(()=>{
       getData()
    },[])

    

    return(
        <div>
            <h1 className="mt-3 mb-5">Usuarios</h1>

            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Gmail</th>
        </tr>
      </thead>
      <tbody>
         {
            data.length === 0 ? <tr><td colSpan={4}>Sin datos</td></tr> : data.map((row)=>(
                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.username}</td>
                    <td>{row.email}</td>
                </tr>
            ))
         }
      </tbody>
    </Table>

        </div>
    )
}

export default Usuarios