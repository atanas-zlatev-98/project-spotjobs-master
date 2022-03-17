import BelowNav from "./BelowNav";
import '../Style/custom_style.scss';
import Footer from "../Components/Footer/Footer";
import {Container, Nav,Row,Col,Card,Breadcrumb,Form,Button,FloatingLabel} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import {faBars, faPlus, faUser,faLocationDot, faCode, faUserAlt, faBriefcase, faCircleCheck, faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FiltersSearchCompany from "../Components/Filters/FiltersSearchCompany";
import logoOne from '../Style/Images/Logos/logo_.png';
import logoTwo from '../Style/Images/Logos/logo_2.png';
import logoThree from '../Style/Images/Logos/logo_3.png';
import logoFour from '../Style/Images/Logos/logo_4.png';
import logoFive from '../Style/Images/Logos/logo_5.png';


function SearchCompany(props) {
    return (
        <>
        <div className="main-layout">
        <div className="mini-nav">
    <BelowNav></BelowNav>
    
    <Container className="d-flex flex-column navilinks">
      <Card className="ps-5 bg-transparent text-white border-0">
      <Card.Body className="bg-transparent h3">Търсене на Работодатели</Card.Body>
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
<LinkContainer className='text-white d-flex' to="/search-company">
                    <Nav.Link className="ps-1 h5" href="/search-company">Търсене на Работодатели</Nav.Link>
          </LinkContainer>
</Breadcrumb.Item>
</Breadcrumb>
</Container>
    </div>

    <Container>
    <Form className="mt-5">
    <Container className="h1 p-2 m-0 mb-3 title-borders">Работодатели</Container>
  <Form.Group className="mb-3 d-flex flex-column justify-content-center" controlId="formBasicEmail">
   
  <FloatingLabel
    controlId="floatingInput"
    label="Търсене на Работодател"
    className="mb-3"
  >
    <Form.Control type="email" placeholder="name@example.com" />
  </FloatingLabel>

  <Button variant="outline-primary" className="button-style" type="submit">
    Търсене
  </Button>
  </Form.Group>
</Form>
    </Container>
    <Container>
      <Container>
        <Row>
          <Col sm={4}>
<FiltersSearchCompany></FiltersSearchCompany>
        
          </Col>
          <Col sm={8}>
          <Card className="jobs-cards d-flex flex-row mb-3">
  <Card.Img className="logos" variant="top" src={logoOne} />
  <Card.Body className="jobs-body d-flex flex-row justify-content-between align-items-center">    

    <Card.Text className="d-flex flex-column m-0">
    <Card.Title><b>@Tempest</b></Card.Title>
    <Card.Text className="d-flex flex-row"> 
    <FontAwesomeIcon className="p-1" icon={faFilter}/>Разработка на Софтуер
    </Card.Text>
    </Card.Text>

    <Card.Text className="d-flex flex-row m-0">
     <FontAwesomeIcon className="p-1" icon={faLocationDot}/>София, България
    </Card.Text>
    <Card.Text className="d-flex flex-column">
    <Container>  <Button variant="outline-success">3 Обяви</Button>{' '}
</Container>
    </Card.Text>
  </Card.Body>
</Card>

<Card className="jobs-cards d-flex flex-row mb-3">
  <Card.Img className="logos" variant="top" src={logoTwo} />
  <Card.Body className="jobs-body d-flex flex-row justify-content-between align-items-center">    

    <Card.Text className="d-flex flex-column m-0">
    <Card.Title><b>@CD Project Dark</b></Card.Title>
    <Card.Text className="d-flex flex-row"> 
    <FontAwesomeIcon className="p-1" icon={faFilter}/>Разработка на Софтуер
    </Card.Text>
    </Card.Text>

    <Card.Text className="d-flex flex-row m-0">
     <FontAwesomeIcon className="p-1" icon={faLocationDot}/>София, България
    </Card.Text>
    <Card.Text className="d-flex flex-column">
    <Container>  <Button variant="outline-success">2 Обяви</Button>{' '}
</Container>
    </Card.Text>
  </Card.Body>
</Card>

<Card className="jobs-cards d-flex flex-row mb-3">
  <Card.Img className="logos" variant="top" src={logoThree} />
  <Card.Body className="jobs-body d-flex flex-row justify-content-between align-items-center">    

    <Card.Text className="d-flex flex-column m-0">
    <Card.Title><b>@WolfNef</b></Card.Title>
    <Card.Text className="d-flex flex-row"> 
    <FontAwesomeIcon className="p-1" icon={faFilter}/>Разработка на Софтуер
    </Card.Text>
    </Card.Text>

    <Card.Text className="d-flex flex-row m-0">
     <FontAwesomeIcon className="p-1" icon={faLocationDot}/>София, България
    </Card.Text>
    <Card.Text className="d-flex flex-column">
    <Container>  <Button variant="outline-success">5 Обяви</Button>{' '}
</Container>
    </Card.Text>
  </Card.Body>
</Card>

<Card className="jobs-cards d-flex flex-row mb-3">
  <Card.Img className="logos" variant="top" src={logoFour} />
  <Card.Body className="jobs-body d-flex flex-row justify-content-between align-items-center">    

    <Card.Text className="d-flex flex-column m-0">
    <Card.Title><b>@HoundBG</b></Card.Title>
    <Card.Text className="d-flex flex-row"> 
    <FontAwesomeIcon className="p-1" icon={faFilter}/>Разработка на Софтуер
    </Card.Text>
    </Card.Text>

    <Card.Text className="d-flex flex-row m-0">
     <FontAwesomeIcon className="p-1" icon={faLocationDot}/>София, България
    </Card.Text>
    <Card.Text className="d-flex flex-column">
    <Container>  <Button variant="outline-success">10 Обяви</Button>{' '}
</Container>
    </Card.Text>
  </Card.Body>
</Card>

<Card className="jobs-cards d-flex flex-row mb-3">
  <Card.Img className="logos" variant="top" src={logoFive} />
  <Card.Body className="jobs-body d-flex flex-row justify-content-between align-items-center">    

    <Card.Text className="d-flex flex-column m-0">
    <Card.Title><b>@SharkBite</b></Card.Title>
    <Card.Text className="d-flex flex-row"> 
    <FontAwesomeIcon className="p-1" icon={faFilter}/>Разработка на Софтуер
    </Card.Text>
    </Card.Text>

    <Card.Text className="d-flex flex-row m-0">
     <FontAwesomeIcon className="p-1" icon={faLocationDot}/>София, България
    </Card.Text>
    <Card.Text className="d-flex flex-column">
    <Container>  <Button variant="outline-success">7 Обяви</Button>{' '}
</Container>
    </Card.Text>
  </Card.Body>
</Card>


          </Col>
        </Row>
      </Container>
    </Container>
    <div className='footers mt-5'>
                <Footer></Footer>
    </div>
    </div>
    
    </>
    )
}
export default SearchCompany;