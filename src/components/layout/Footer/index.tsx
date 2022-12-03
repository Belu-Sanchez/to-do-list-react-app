import Container from 'react-bootstrap/Container';
import './style.scss'

function Footer() { 
    return (
        <>
        <footer> 
            <Container>
                <div>Made with ♥ by
                    <a className="nav-link ps-1" href="https://github.com/Belu-Sanchez" target="_blank">
                        Belu Sanchez
                    </a>
                </div> 
            </Container>
        </footer>
        </>
    )
}
  
export { Footer };