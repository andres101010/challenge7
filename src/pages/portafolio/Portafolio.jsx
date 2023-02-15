import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Portafolio = ()=>{
    return(
        <div>
            <h1 className="mt-3">Portafolio</h1>
            <h2>
              <Badge className='mt-2' bg="secondary">Developer Front-End</Badge>
            </h2>

            <Container>
      <Row style={{background:'gray', marginTop:'25px', borderRadius:'15PX'}}>
        <Col xs={6}><h3 className='text-center text-white'>Sobre Mi</h3> <p className='text-center text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, dolore. Voluptatibus accusantium, sunt laudantium consequuntur dolor cum ducimus doloremque quae vero corrupti repellat sit soluta? Doloribus molestias pariatur consequatur impedit?
        Repellat perspiciatis esse rem maiores similique. Nisi cupiditate, sapiente ad in obcaecati distinctio quae alias minus blanditiis vitae fugit, vero quibusdam a. Earum deserunt rerum laudantium possimus in modi laboriosam!
        Amet omnis optio nulla consequuntur deserunt inventore harum? Aperiam ipsa numquam aliquam alias. Voluptatem fuga voluptatum unde delectus velit magnam temporibus, tenetur qui alias perferendis soluta nulla repellendus quidem illum.
        Sunt cumque numquam repellendus tenetur odio, consequuntur sit delectus tempora laborum facere amet quia asperiores quasi beatae magnam ullam maiores rem rerum et? Obcaecati quaerat officia consequuntur sunt blanditiis delectus.
        Voluptatibus nisi quibusdam ipsum ipsam itaque harum minus illum voluptatum tempore molestias atque, voluptates dolores ratione voluptate rem quas. Velit, et libero! Impedit omnis quos iste voluptatum quis aut delectus.</p></Col>
        <Col xs={6}><h3 className='text-center text-white'>Experiencia</h3> <p className='text-center text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ad repellendus ex natus facere harum, delectus similique rem provident adipisci cupiditate reiciendis qui quasi vitae. Quam, quis. Illum, quisquam eveniet.
        Praesentium nisi mollitia amet beatae odit accusamus assumenda eum distinctio expedita debitis repellendus quis omnis modi laudantium facilis delectus, officia sunt. Mollitia libero, enim pariatur vel impedit id perferendis obcaecati.
        Nihil officia ullam rem? Reiciendis dicta soluta repellendus culpa earum alias blanditiis eius eum quos excepturi, consectetur reprehenderit nesciunt quod nihil totam, ipsam eligendi ipsa ducimus molestiae! Numquam, eos mollitia.
        Sed accusamus voluptatum consequuntur, maxime nam quia ducimus saepe deleniti dolore odit libero, fuga commodi dicta consequatur accusantium facilis aut sint sit asperiores architecto! Voluptate numquam rerum ducimus voluptates non.
        Distinctio ut inventore corrupti possimus doloribus voluptates id. Laborum eveniet fugiat praesentium natus non perferendis, aliquid similique sapiente voluptatibus illo possimus dolore odio aliquam, ea iure earum at quasi qui.</p></Col>
      </Row>
    </Container>

        </div>
    )
}

export default Portafolio