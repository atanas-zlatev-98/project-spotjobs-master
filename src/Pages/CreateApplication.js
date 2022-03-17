import BelowNav from "./BelowNav";
import Footer from "../Components/Footer/Footer";
import '../Style/custom_style.scss'
import {Container, Nav,Row,Col,Card,Breadcrumb, Button,Form} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import Filters from "../Components/Filters/Filters";
import logoOne from '../Style/Images/Logos/logo_.png';
import logoTwo from '../Style/Images/Logos/logo_2.png';
import logoThree from '../Style/Images/Logos/logo_3.png';
import logoFour from '../Style/Images/Logos/logo_4.png';
import logoFive from '../Style/Images/Logos/logo_5.png';
function CreateApplication(props) {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <>
      <div className="main-layout">
        <div className="mini-nav">
          <BelowNav></BelowNav>
          <Container className="d-flex flex-column navilinks">
          <Card className="ps-5 bg-transparent text-white border-0">
          <Card.Body className="bg-transparent h3">Създаване на обява</Card.Body>
          </Card>
          <Breadcrumb className='h2 text-white pt-3 p-3 bread-crump'>

  <Breadcrumb.Item href="#"> 
  <LinkContainer className='text-white ps-5 pe-1 ms-5' to="/">
                    <Nav.Link className="h5" href="/">Начало</Nav.Link>
         </LinkContainer>
  </Breadcrumb.Item>

  <Breadcrumb.Item>
  <LinkContainer className='text-white ps-4 pe-1 h5' to="/search-company">
                    <Nav.Link className="ps-1 h5" href="/search-company">Работодатели</Nav.Link>
  </LinkContainer>
  </Breadcrumb.Item>
  <Breadcrumb.Item active>
  <LinkContainer className='text-white d-flex' to="#">
                    <Nav.Link className="ps-1 h5" href="#">Създаване на Обява</Nav.Link>
  </LinkContainer>
  </Breadcrumb.Item>
</Breadcrumb>
</Container>
          </div>
<Container>
<Card className="d-flex justify-content-between flex-row align-items-center border-0 mt-4">
  <Card.Body >Имате акаунт? Ако нямате акаунт, можете да<br/>създадете такъв по-долу, като въведете своя имейл адрес. 
      Автоматично ще ви бъде изпратена парола.
     
  </Card.Body>
  <Button className="button-create-app" variant="outline-primary">Вход</Button>
</Card>
</Container>
<Container className="mt-5 ">
        <Card className="border-0">
  <Card.Body className="border-bottom h4 mb-4"><b>Информация за Обявата</b></Card.Body>
</Card>

<Container>

  <Row>
    <Col sm><Form>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Заглавие</Form.Label>
    <Form.Control type="name" placeholder="Заглавие" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicLoc">
    <Form.Label>Работно Време</Form.Label>
    <Form.Select aria-label="Default select example">
  <option>Моля изберете работно време</option>
  <option value="1">Пълно работно време</option>
  <option value="2">Половин работно време</option>
  <option value="3">Временна работа</option>
</Form.Select>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicLoc">
    <Form.Label>Регион</Form.Label>
    <Form.Select aria-label="Default select example">
  <option>Моля изберете Регион</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
  </Form.Group>

  <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Моля прикачете снимка</Form.Label>
    <Form.Control type="file" />
  </Form.Group>

</Form></Col>




    <Col sm>
    <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Емайл адрес</Form.Label>
                <Form.Control type="email" placeholder="Въведете емайл" />
                <Form.Text className="text-muted">
                Ние никога няма да споделим вашият емайл с когото и да е било!
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLoc">
    <Form.Label>Местоположение</Form.Label>
    <Form.Select aria-label="Default select example">
  <option>Моля изберете Местоположение</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
  </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Категория</Form.Label>
                <Form.Control type="text" placeholder="Категория" />
            </Form.Group>

            

</Form>

</Col>
<Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Описание</Form.Label>
    <Form.Control as="textarea" rows={8} />
  </Form.Group>
</Form>

  </Row>


</Container>
        <Container className="mt-5">
        <Card className="border-0">
                <Card.Body className="border-bottom h4"><b>Информация за работодателя</b></Card.Body>
                </Card>

               <Row>
                   <Col sm>
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Име на компанията</Form.Label>
                            <Form.Control type="text" placeholder="Компания" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Уеб Сайт(По-избор)</Form.Label>
                            <Form.Control type="text" placeholder="Линк към Уеб Сайт" />
                        </Form.Group>
                        </Form>
                   </Col>
                   <Col sm>

                   <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Профил в Facebook(По-избор)</Form.Label>
                            <Form.Control type="text" placeholder="Профил в Facebook" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Профил в Twitter(По-избор)</Form.Label>
                            <Form.Control type="text" placeholder="Профил в Twitter" />
                        </Form.Group>
                        </Form>


                   </Col>
               </Row>
                <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Описание</Form.Label>
    <Form.Control as="textarea" rows={8} />
  </Form.Group>
</Form>

        </Container>

        <Container className="d-flex justify-content-center">
        <Button variant="primary"  className="m-3 ms-0"> Създаване на обява</Button>
        </Container>
        </Container>
        <div className='footers mt-5'>
                <Footer></Footer>
    </div>

      </div>
       
        </>
    
    )
}
export default CreateApplication;