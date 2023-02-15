import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const PaginaPrincipal = ({handleLogin, handleLogaut, alert})=>{
   

    return(
        <div>
            <h1 className='mb-5 '>Pagina Principal</h1>
            {!alert ?
               ""
               :
             <Alert variant='success' style={{width:'400px', margin:'auto', marginBottom:'15px', color:'#515151', fontSize:'15px',textAlign:'center'}}>Estado de usuario en True</Alert>
               
            }
    <Card style={{ width: '500px', height:'400px', margin: 'auto' }}>
      <Card.Body>
        <Card.Title><h2>Login</h2></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Informacion</Card.Subtitle>
        <Card.Text>
           Para acceder a la pagina protegida (Portafolio).
           Dale click en Login asi su estado de usuario pasa a tener un valor de verdadero (true).
        </Card.Text>
        <Button variant="primary" style={{marginLeft:'90px', width:'300px',height:'50px',marginTop:'40px'}} onClick={()=>{handleLogin()}}>Login</Button><br />
        <Button variant="secondary" style={{marginLeft:'90px', width:'300px',height:'50px', marginTop:'20px'}} onClick={()=>{handleLogaut()}}>Logaut</Button>
        
      </Card.Body>
    </Card>
        </div>
    )
}

export default PaginaPrincipal