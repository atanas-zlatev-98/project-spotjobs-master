import {Navbar, Container, Nav,NavDropdown,Button,Modal,Form} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import '../../Style/default.scss';

function NavBar () {

    const [show, setShow] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleClose = () => setShowLogin(false);
    const handleShow = () => setShowLogin(true);

    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);


    const showSecondDropdown = (e) => {
     setShowSecond(!showSecond);
    }
    const hideSecondDropdown = e => {
     setShowSecond(false)
    }

    const showDropdown = (e)=>{
    setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    return (
        <Navbar collapseOnSelect className="navbar-z-index p-5 fs-5" expand="lg">
  <Container>
    <Navbar.Brand className="text-white fs-3" href="#home">SpotJobs</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav">
    <span>
    <FontAwesomeIcon className="text-white" icon={faBars} />
    </span>
      </Navbar.Toggle>
    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">

      <Nav className="me-5">
         
      <LinkContainer className='text-white' to="/">
                    <Nav.Link href="/">Начало</Nav.Link>
      </LinkContainer>
 
      <LinkContainer className='text-white' to="/profile">
                    <Nav.Link href="/profile">Профил</Nav.Link>
      </LinkContainer>


        <NavDropdown id="nav-drop-color" title="Кандидати" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>

          <NavDropdown.Item className="text-white">  
          <LinkContainer to="/search-jobs">
                    <Nav.Link href="/search-jobs">Разглеждане на Обяви</Nav.Link>
          </LinkContainer>
          </NavDropdown.Item>

          <NavDropdown.Item>
          <LinkContainer to="/send-resume">
                    <Nav.Link href="/send-resume">Създаване на Автобиография</Nav.Link>
          </LinkContainer>
          </NavDropdown.Item>

          <NavDropdown.Item>
          <LinkContainer to="/search-company">
                    <Nav.Link href="/search-company">Търсене на Работодател</Nav.Link>
          </LinkContainer>
          </NavDropdown.Item>

          <NavDropdown.Item>
          <LinkContainer to="/job-page">
                    <Nav.Link href="/job-page">Обява</Nav.Link>
          </LinkContainer>
          </NavDropdown.Item>

          <NavDropdown.Item>
          <LinkContainer to="/company-page">
                    <Nav.Link href="/company-page">Страница на Работодател </Nav.Link>
          </LinkContainer>
          </NavDropdown.Item>

        </NavDropdown>

        <NavDropdown id="nav-drop-color" title="Работодатели" show={showSecond} onMouseEnter={showSecondDropdown} onMouseLeave={hideSecondDropdown}>

          <NavDropdown.Item>  
          <LinkContainer to="/create-application">
                    <Nav.Link href="/create-application">Създаване на Обява</Nav.Link>
          </LinkContainer>
          </NavDropdown.Item>

{/*<NavDropdown.Item>
          <LinkContainer to="/find-candidate">
                    <Nav.Link href="/find-candidate">Намиране на Кандидати</Nav.Link>
          </LinkContainer>
          </NavDropdown.Item>*/}

         {/*  <NavDropdown.Item>
          <LinkContainer to="/resumes">
                    <Nav.Link href="/resumes">Автобиографий</Nav.Link>
          </LinkContainer>
          </NavDropdown.Item>*/}

        </NavDropdown>
        <LinkContainer className='text-white' to="/contacts">
                    <Nav.Link href="/contacts">Контакти</Nav.Link>
          </LinkContainer>
      </Nav>

      <Button variant="outline-light"  className="me-2 btn-regi" onClick={handleShowRegister}>
      <FontAwesomeIcon icon={faPlus} /> Регистрация
      </Button>

      <Button variant="outline-light" onClick={handleShow}>
      <FontAwesomeIcon icon={faUser} /> Вход
      </Button>
       
      <Modal size="xl" show={showRegister} onHide={handleCloseRegister}>
      
        <Modal.Body className="modal-form-style">{/*TODO: Полета за Регистрация*/}
        <Container className="d-flex flex-row ps-0 pe-0 cont-height">

        <div className="imag-container"></div>



        <Form className='form-width'>

        <Modal.Header closeButton>
        </Modal.Header>

          <Form.Group className="d-flex justify-content-center">
          <Modal.Title className="text-black">Регистрация</Modal.Title>
          </Form.Group>

         <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
         <Form.Control className="form-control-style" type="text" placeholder="Име:" />
         </Form.Group> 

        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
       
        <Form.Control className="form-control-style" type="text" placeholder="Фамилия:" />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
       
        <Form.Control className="form-control-style" type="text" placeholder="Емайл:" />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
        
        <Form.Control className="form-control-style" type="number" placeholder="Телефонен Номер:" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       
        <Form.Control className="form-control-style" type="password" placeholder="Парола:" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       
        <Form.Control type="password" className="form-control-style" placeholder="Повторете Парола:" />
        </Form.Group>

        <Form.Group className="d-flex justify-content-center m-2">
        <input type="checkbox" className="form-check-input p-1 " id="exampleCheck1"/>
        <label className="form-check-label text-black ps-2" for="exampleCheck1">Прочетох и се съгласявам с Общите Условия</label>
        </Form.Group>

        <Form.Group className="d-flex justify-content-end m-2">
        <Button className="reg-button mt-1" variant="success" onClick={handleCloseRegister}>
            Регистрация
          </Button>
        </Form.Group>

      </Form>
      </Container>
        </Modal.Body >
       
      </Modal>
     
      <Modal className="modal-form-style" show={showLogin} onHide={handleClose}>
        <Modal.Header closeButton>
         
        </Modal.Header>
        <Modal.Body className="modal-form-style-login">{/*TODO: Полета за Регистрация*/}
        <Container className="d-flex flex-column ps-0 pe-0">

        <Form closeButton>

          <Form.Group className="d-flex justify-content-center">
          <Modal.Title className="text-black">Вход</Modal.Title>
          </Form.Group>


        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput2">
        <Form.Control className="form-control-style-login" type="text" placeholder="Емайл:" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Control className="form-control-style-login" type="password" placeholder="Парола:" />
        </Form.Group>

        <Form.Group  className="mb-5 d-flex justify-content-end" controlId="exampleForm.ControlInput2">
        <Button className="login-button mt-1" variant="success" onClick={handleClose}>
            Вход
          </Button>
        </Form.Group>

      </Form>
      </Container>
      </Modal.Body>
      </Modal>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavBar;