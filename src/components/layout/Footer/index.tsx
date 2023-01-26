import Container from 'react-bootstrap/Container';
import { BsGithub } from 'react-icons/bs';
import './style.scss'

function Footer() { 
    return (
        <>
        <footer> 
            <Container>
                <div>Made with ♥ by
                    <a className="nav-link ps-1" href="https://github.com/Belu-Sanchez" target="_blank">
                        Belu Sanchez <BsGithub />
                    </a>
                </div> 
            </Container>
        </footer>
        </>
    )
}
  
export { Footer };