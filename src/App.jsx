import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import PaginaPrincipal from './pages/paginaPrincipal/PaginaPrincipal'
import Portafolio from './pages/portafolio/Portafolio'
import Usuarios from './pages/usuarios/Usuarios'
import Administracion from './pages/administracion/Administracion'
import InformacionGeneral from './pages/informacionGeneral/InformacionGeneral'
import Navigator from './component/Navigator'
import './App.css'
import { useEffect, useState } from 'react'
import Protect from './component/Protect'
import { Button } from 'react-bootstrap'

const App =()=> {
  const [isallowed, setIsallowed] = useState(false)
  const [alert, setAlert] = useState(false)
  console.log(isallowed)


  const handleLogin =()=>{
    setIsallowed(true)
    setAlert(true)
    
  };
  setTimeout(()=>{
    setAlert(false)
  },1000)

  const handleLogaut =()=>{
    setIsallowed(false)
    setAlert(false)
  };

  

  return (
    <div className="App">
      
        <BrowserRouter>
        <Navigator />
           <Routes>
               <Route path='/' element={<div><h1 className='mt-3 mb-3'>Bienvenidos</h1>
                   <h2>Ve hacia la Pagina Principal</h2>
                   <Link to={"/paginaPrincipal"}><Button style={{marginLeft:'630px', marginTop:'20px'}}>Pagina Principal</Button></Link>
               </div>
               }></Route>
               <Route path='/paginaPrincipal' element={<PaginaPrincipal alert={alert} handleLogin={handleLogin} handleLogaut={handleLogaut}/>}></Route> 

               <Route path='/portafolio' element={ <Protect isallowed={isallowed}>
                <Portafolio />
                </Protect>}>      
               </Route>
               <Route path='/usuarios' element={<Usuarios />}></Route>
               <Route path='/administracion' element={<Administracion />}></Route>
               <Route path='/informacionGeneral' element={<InformacionGeneral />}></Route>
           </Routes>
        </BrowserRouter>       
    </div>
  )
}

export default App
