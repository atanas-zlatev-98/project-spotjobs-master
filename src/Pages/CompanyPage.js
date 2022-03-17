import BelowNav from "./BelowNav";
import '../Style/custom_style.scss';
import Footer from "../Components/Footer/Footer";
import {Container, Nav,Row,Col,Card,Breadcrumb,Form,Button,FloatingLabel} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import {faLocationDot,faBriefcase,faHeart, faFilter, faClock, faFolderPlus, faAlignLeft,faCircleCheck, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logoOne from '../Style/Images/Logos/logo_.png';


function CompanyPage(props) {
    return (
        <>
        <div className="main-layout">
        <div className="mini-nav">
    <BelowNav></BelowNav>
    
    <Container className="d-flex flex-column navilinks">
      <Card className="ps-5 bg-transparent text-white border-0">
      <Card.Body className="bg-transparent h3">@Tempest</Card.Body>
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
<LinkContainer className='text-white d-flex' to="/company-page">
                    <Nav.Link className="ps-1 h5" href="/company-page">Tempest</Nav.Link>
          </LinkContainer>
</Breadcrumb.Item>
</Breadcrumb>
</Container>
    </div>

<Container>

<Container className="mt-5">
    <Row>
        <Col sm={8}>
        <Container className="justify-content-between d-flex flex-column">
    <Card className="border-0 d-flex flex-row align-items-center card-column">
  <Card.Img variant="top" className="cards-imgs" src={logoOne} />
  <Card.Body className="d-flex flex-row justify-content-between card-column">
    <Card.Text className="d-flex flex-column">
        <Card.Text>
        <Card.Title className="job-page-title"><b>@Tempest</b></Card.Title>
        </Card.Text>
     <Card.Text className="d-flex flex-column">
        <Card.Text className="pe-2 gray-color">
           <FontAwesomeIcon className="pe-2" icon={faBriefcase}></FontAwesomeIcon>Разработка на софтуер
        </Card.Text>
        <Card.Text className="pe-2 gray-color">
        <FontAwesomeIcon className="pe-2" icon={faLocationDot}></FontAwesomeIcon>
        София, България
        </Card.Text>
        <Card.Text className="pe-2 gray-color">
        <FontAwesomeIcon className="pe-2" icon={faFolderPlus}></FontAwesomeIcon>
        2 Свободни позиций
        </Card.Text>
        
        </Card.Text>
    </Card.Text>
    <Card.Text>
    </Card.Text>
  </Card.Body>
</Card>


<Card className="border-0 text-primary">
       <Card.Body className="h5">
       <Card.Text className=""><FontAwesomeIcon className="me-2" icon={faAlignLeft}/>Относно Компанията</Card.Text>
       <Card.Text className="h6 text-secondary pb-3">Lorem Ipsum е елементарен примерен текст, използван в печатарската и 
       типографската индустрия. Lorem Ipsum е индустриален стандарт от около 1500 година, когато неизвестен печатар взема няколко 
       печатарски букви и ги разбърква, за да напечата с тях книга с примерни шрифтове.
       
       <Card.Text className="m-3"><FontAwesomeIcon className="me-2" icon={faCircleCheck}/>Какво е Lorem Ipsum?</Card.Text>
       <Card.Text className="m-3"><FontAwesomeIcon className="me-2" icon={faCircleCheck}/>Защо го използваме?</Card.Text>
       <Card.Text className="m-3"><FontAwesomeIcon className="me-2" icon={faCircleCheck}/>Откъде мога да го взема?</Card.Text>

        Този начин не само е оцелял повече от 5 века, 
       но е навлязъл и в публикуването на електронни издания като е запазен почти без промяна. Популяризиран е през 60те години на 20ти 
       век със издаването на Letraset листи, съдържащи Lorem Ipsum пасажи, популярен е и в наши дни във софтуер за печатни 
       издания като Aldus PageMaker, който включва различни версии на Lorem Ipsum.</Card.Text>
      </Card.Body>
   </Card>
<Container>
    <Card className="h5 mb-3 border-0 text-primary">
        <Card.Text><FontAwesomeIcon className="me-2" icon={faFolderPlus}/>
            Отворени Позиций
        </Card.Text>
    </Card>

    <Card className="jobs-cards d-flex flex-row mb-3">
  <Card.Img className="logos" variant="top" src={logoOne} />
  <Card.Body className="jobs-body d-flex flex-row justify-content-between align-items-center">    
    <Card.Text className="d-flex flex-column">
    <Card.Title><b>@Tempest</b></Card.Title>
    React Developer
    </Card.Text>
    <Card.Text className="d-flex flex-column">
     София, България
    </Card.Text>
    <Card.Text className="d-flex flex-column">
    <Card.Text className="jobs-fulltime">Пълно Работно Време</Card.Text>
    <Card.Text>Заплата: 9000лв</Card.Text>
    </Card.Text>
  </Card.Body>
</Card>

<Card className="jobs-cards d-flex flex-row mb-3">
  <Card.Img className="logos" variant="top" src={logoOne} />
  <Card.Body className="jobs-body d-flex flex-row justify-content-between align-items-center">    
    <Card.Text className="d-flex flex-column">
    <Card.Title><b>@Tempest</b></Card.Title>
    React Developer
    </Card.Text>
    <Card.Text className="d-flex flex-column">
     София, България
    </Card.Text>
    <Card.Text className="d-flex flex-column">
    <Card.Text className="jobs-fulltime">Пълно Работно Време</Card.Text>
    <Card.Text>Заплата: 9000лв</Card.Text>
    </Card.Text>
  </Card.Body>
</Card>

<Card className="jobs-cards d-flex flex-row mb-3">
  <Card.Img className="logos" variant="top" src={logoOne} />
  <Card.Body className="jobs-body d-flex flex-row justify-content-between align-items-center">    
    <Card.Text className="d-flex flex-column">
    <Card.Title><b>@Tempest</b></Card.Title>
    React Developer
    </Card.Text>
    <Card.Text className="d-flex flex-column">
     София, България
    </Card.Text>
    <Card.Text className="d-flex flex-column">
    <Card.Text className="jobs-fulltime">Пълно Работно Време</Card.Text>
    <Card.Text>Заплата: 9000лв</Card.Text>
    </Card.Text>
  </Card.Body>
</Card>
<div className="pages-holder d-flex justify-content-end">
  <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Предишна</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>

    <li class="page-item"><a class="page-link" href="#">Следваща</a></li>
  </ul>
</nav>
  </div>
</Container>
    </Container>
        </Col>
        <Col sm={4}>

        <Form className="profile-contacts p-3">
        <Form.Label>Свържете се с нас</Form.Label>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Име</Form.Label>
    <Form.Control type="text" placeholder="Име" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Емайл</Form.Label>
    <Form.Control type="text" placeholder="Емайл" />
  <Form.Text className="text-muted">
     Ние никога няма да споделим вашият емайл с когото и да е било!
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Тема</Form.Label>
    <Form.Control type="text" placeholder="Тема" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Съобщение</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Изпращане
  </Button>
</Form>

<Form className="profile-contacts p-3 mt-3">
      
  <Form.Group className="" controlId="formBasicEmail">
  <Form.Label className="gray-color company-page-contacts"><FontAwesomeIcon className="pe-2" icon={faLocationDot}/>град София, ул. "Найден Геров" № 12</Form.Label>
  <Form.Label className="gray-color company-page-contacts mb-0"><FontAwesomeIcon className="pe-2" icon={faEnvelope}/>tempest@gmail.com</Form.Label>
  </Form.Group>

</Form>

        </Col>
    </Row>
    
</Container>

</Container>

<div className="footers mt-5">
        <Footer></Footer>
    </div>

    </div>
    
    </>
    )
}
export default CompanyPage;