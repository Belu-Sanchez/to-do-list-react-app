import { useState } from "react"
import { Button, Modal } from "react-bootstrap"
import { useAuth } from "../../../hooks"

const ModalLogin = () => {

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    const auth = useAuth()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        auth.login(user, pass)
    }

    return(
        <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">User</label>
                    <input type="email" name="user" value={user} onChange={(e) => setUser(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Pass</label>
                    <input type="password" name="pass" value={pass} onChange={e => setPass(e.target.value)} />
                </div>
                <button>Iniciar sesión</button>
            </form>
          </Modal.Body>
  
          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    )


}

export { ModalLogin }