import BelowNav from "./BelowNav";
import Footer from "../Components/Footer/Footer";
import '../Style/custom_style.scss';
import {Container, Nav,Row,Col,Card,Breadcrumb,Form,Button} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';

function SendResume(props) {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
        <div className="main-layout">
            <div className="mini-nav">
        <BelowNav></BelowNav>
        
        <Container className="d-flex flex-column navilinks">
          <Card className="ps-5 bg-transparent text-white border-0">
          <Card.Body className="bg-transparent h3">Създаване на Автобиография</Card.Body>
          </Card>
          <Breadcrumb className='h2 text-white pt-3 p-3 bread-crump'>

  <Breadcrumb.Item href="#"> 
  <LinkContainer className='text-white ps-5 pe-1 ms-5' to="/">
                    <Nav.Link className="h5" href="/">Начало</Nav.Link>
         </LinkContainer>
  </Breadcrumb.Item>

  <Breadcrumb.Item>
  <LinkContainer className='text-white ps-4 pe-1 h5' to="#">
                    <Nav.Link className="ps-1 h5" href="#">Кандидати</Nav.Link>
  </LinkContainer>
  </Breadcrumb.Item>
  <Breadcrumb.Item active>
  <LinkContainer className='text-white d-flex' to="/send-resume">
                    <Nav.Link className="ps-1 h5" href="/send-resume">Създаване на Автобиография</Nav.Link>
          </LinkContainer>
  </Breadcrumb.Item>
</Breadcrumb>
</Container>
        </div>
        <Container className="mt-5 ">
        <Card className="border-0">
  <Card.Body className="border-bottom h4 mb-4"><b>Информация</b></Card.Body>
</Card>

<Container>

  <Row>
    <Col sm><Form>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Име</Form.Label>
    <Form.Control type="name" placeholder="Собствено име" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicSurname">
    <Form.Label>Фамилия</Form.Label>
    <Form.Control type="text" placeholder="Фамилия" />
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

  <Form.Group className="mb-3" controlId="formBasicProf">
    <Form.Label>Професия</Form.Label>
    <Form.Control type="text" placeholder="Професия" />
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

            <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Телефонен №</Form.Label>
                <Form.Control type="number" placeholder="Телефонен номер:" />
                <Form.Text className="text-muted">
                Ние никога няма да споделим вашият телефонен номер с когото и да е било!
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Линк към други платформи</Form.Label>
                <Form.Control type="text" placeholder="Github,Linkedin...." />
            </Form.Group>

</Form>

</Col>

  </Row>


</Container>
        <Container className="mt-5">
                <Card className="border-0">
                <Card.Body className="border-bottom h4"><b>Образование</b></Card.Body>
                </Card>
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Начално Училище</Form.Label>
                            <Form.Control type="text" placeholder="Начално Училище" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Квалификация</Form.Label>
                            <Form.Control type="text" placeholder="Квалификация" />
                        </Form.Group>

                        <Form.Group className="mb-3 d-flex flex-row align-items-center" controlId="formBasicPhone">
                            <Form.Group className="mb-3 me-3">
                            <Form.Label>Начало на образованието</Form.Label>
                            <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                            <Form.Label>Край на образованието</Form.Label>
                            <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </Form.Group>
                            
                        </Form.Group>

                        <Form.Group className="mb-3">
                        <Form.Label>Сертификати и грамоти</Form.Label>
                            <Form.Control type="text" placeholder="Сертификати и грамоти" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                        <Form.Label>Допълнителна Информация</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Допълнителна Информация"/>
                        </Form.Group>
                                <Button variant="primary"  className="m-3 ms-0">
                                <FontAwesomeIcon className="pe-2" icon={faPlus} />Добяване на ВУЗ
                                </Button>
                        </Form>

        </Container>

        <Container className="mt-5">

        <Card className="border-0">
                <Card.Body className="border-bottom h4 font-weight-bold"><b>Предишна Работа(По Избор)</b></Card.Body>
                </Card>
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Фирма</Form.Label>
                            <Form.Control type="text" placeholder="Фирма" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Позиция</Form.Label>
                            <Form.Control type="text" placeholder="Позиция в фирмата" />
                        </Form.Group>

                        <Form.Group className="mb-3 d-flex flex-row align-items-center" controlId="formBasicPhone">
                            <Form.Group className="mb-3 me-3">
                            <Form.Label>Дата на назначаване</Form.Label>
                            <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                            <Form.Label>Дата на напускане</Form.Label>
                            <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </Form.Group>
                            
                        </Form.Group>

                        <Form.Group className="mb-3">
                        <Form.Label>Допълнителна Информация</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Допълнителна Информация"/>
                        </Form.Group>
                                <Button variant="primary"  className="m-3 ms-0">
                                <FontAwesomeIcon className="pe-2" icon={faPlus} />Добавяне
                                </Button>
                        </Form>


        </Container>
        <Container className="d-flex justify-content-center">
        <Button variant="primary"  className="m-3 ms-0">
                            
                                Изпращане на Автобиографията
                                </Button>
        </Container>
        </Container>
        <div className='footers mt-5'>
                <Footer></Footer>
    </div>
        </div>
        
        </>
    )
}
export default SendResume;