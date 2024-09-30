'use client'

import 'react-bootstrap';
import {Container, Navbar, Nav} from 'react-bootstrap';

export default function Pagina(props){
    
    console.log(props.titulo)
    props.titulo
    props.subtitulo
    props.children

    return (
        <>

            {/* Barra de Navegação */}
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/sorteio">Lucky tiger</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Início</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* Barra de Titulo */}
            <div className='text-center text-white py-2 bg-secondary'>
                <h1>{props.titulo}</h1>
            </div>

            {/*sub-Titulo*/}
            <div className='text-center text-white py-2 bg-dark'>
                <h2>{props.subtitulo}</h2>
            </div>

            {/*Children*/}
            <Container className='mt-2'>
                {props.children}
            </Container>
        </>

    )

}