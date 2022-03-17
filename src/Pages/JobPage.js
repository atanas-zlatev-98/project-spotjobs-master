import BelowNav from "./BelowNav";
import '../Style/custom_style.scss';
import Footer from "../Components/Footer/Footer";
import {Container, Nav,Row,Col,Card,Breadcrumb,Form,Button,ListGroup} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import {faBars, faPlus, faUser,faLocationDot, faCode, faUserAlt, faBriefcase, faCircleCheck, faFilter, faHeart, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoFive from '../Style/Images/Logos/logo_5.png';
import jobSingle from '../Style/Images/job_single.jpg';

function JobPage(){

    return (
        <>
     <div className="main-layout">
        <div className="mini-nav">
    <BelowNav></BelowNav>
    
    <Container className="d-flex flex-column navilinks">
      <Card className="ps-5 bg-transparent text-white border-0">
      <Card.Body className="bg-transparent h3">React Developer</Card.Body>
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
<Breadcrumb.Item> 

<LinkContainer className='text-white ps-4 pe-1' to="/search-jobs">
                <Nav.Link className="h5" href="/search-jobs">Разглеждане на Обяви</Nav.Link>
</LinkContainer>

</Breadcrumb.Item>
<Breadcrumb.Item active>
<LinkContainer className='text-white d-flex' to="/job-page">
                    <Nav.Link className="ps-1 h5" href="/job-page">React Developer</Nav.Link>
          </LinkContainer>
</Breadcrumb.Item>
</Breadcrumb>
</Container>
    </div>

<Container className="p-5">
    <Container className="justify-content-between d-flex flex-column">
    <Card className="border-0 d-flex flex-row align-items-center card-column">
  <Card.Img variant="top" className="cards-imgs" src={logoFive} />
  <Card.Body className="d-flex flex-row justify-content-between card-column">
    <Card.Text className="d-flex flex-column">
        <Card.Text>
        <Card.Title className="job-page-title"><b>React Developer</b></Card.Title>
        </Card.Text>
     <Card.Text className="d-flex flex-row">
        <Card.Text className="pe-2 gray-color">
           <FontAwesomeIcon className="pe-1" icon={faBriefcase}></FontAwesomeIcon>SharkBite
        </Card.Text>
        <Card.Text className="pe-2 gray-color">
        <FontAwesomeIcon className="pe-1" icon={faLocationDot}></FontAwesomeIcon>
        София, България
        </Card.Text>
        <Card.Text className="pe-2 gray-color">
           <FontAwesomeIcon className="pe-1 " icon={faFilter}/> Уеб Разработка
        </Card.Text>
        <Card.Text className="pe-2 gray-color">
           <FontAwesomeIcon className="pe-1" icon={faClock}/> Пълен Работен Ден
        </Card.Text>
     </Card.Text>
    </Card.Text>
    <Card.Text>
    <Button className="m-2" variant="outline-primary">Кандидатстване</Button>
    <Button className="m-2" variant="outline-danger"><FontAwesomeIcon className="pe-1" icon={faHeart}/>Запази</Button>
    </Card.Text>
  </Card.Body>
</Card>
    </Container>
    <Container>
    <Row>
    <Col sm={8}> 

    <Card className="border-0 mb-3" >
    <Card.Img className="style-info border-0 img-sizes" variant="top" src={jobSingle} />
  </Card>
  
  </Col>
    <Col sm={4}>
        <Container className="ps-0 pe-0 ">

        <ListGroup className='border-0 style-info'>
    <Card className="border-0 pb-1 p-4 h4 ">
        <Card.Text className="text-primary">
                 Информация
        </Card.Text>
    </Card>
                <ListGroup.Item className="border-0"><b>Публикувана на: </b> 28.03.22</ListGroup.Item>
                <ListGroup.Item className="border-0"><b>Свободни места: </b>20</ListGroup.Item>
                <ListGroup.Item className="border-0"><b>Работно Време: </b> Пълно</ListGroup.Item>
                <ListGroup.Item className="border-0"><b>Опит: </b>2 години</ListGroup.Item>
                <ListGroup.Item className="border-0"><b>Локация: </b>София, България</ListGroup.Item>
                <ListGroup.Item className="border-0"><b>Заплата: </b>От 2000 до 4000лв</ListGroup.Item>
                <ListGroup.Item className="border-0"><b>Валидна до: </b>19.03.22</ListGroup.Item>
        </ListGroup>
        </Container>
    </Col>
  </Row>

    </Container>

    <Card className="border-0 text-primary">
       <Card.Body className="h4">
       <Card.Text className=""><FontAwesomeIcon className="me-2" icon={faBriefcase}/>Описание</Card.Text>
       <Card.Text className="h6 text-secondary pb-3">Lorem Ipsum е елементарен примерен текст, използван в печатарската и 
       типографската индустрия. Lorem Ipsum е индустриален стандарт от около 1500 година, когато неизвестен печатар взема няколко 
       печатарски букви и ги разбърква, за да напечата с тях книга с примерни шрифтове. Този начин не само е оцелял повече от 5 века, 
       но е навлязъл и в публикуването на електронни издания като е запазен почти без промяна. Популяризиран е през 60те години на 20ти 
       век със издаването на Letraset листи, съдържащи Lorem Ipsum пасажи, популярен е и в наши дни във софтуер за печатни 
       издания като Aldus PageMaker, който включва различни версии на Lorem Ipsum.</Card.Text>
      </Card.Body>
   </Card>

   <Card className="border-0 text-primary">
       <Card.Body className="h4">
       <Card.Text className=""><FontAwesomeIcon className="me-2" icon={faBriefcase}/>Отговорности</Card.Text>
       <Container className="h6 ps-0 ms-0 text-secondary">
       <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck}/>######################</Card.Text>
       <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck}/>######################</Card.Text>
       <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck}/>######################</Card.Text>
       <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck}/>######################</Card.Text>
       <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck}/>######################</Card.Text>
       </Container>
      </Card.Body>
   </Card>

   
   <Card className="border-0 text-primary">
       <Card.Body className="h4">
       <Card.Text className=""><FontAwesomeIcon className="me-2" icon={faBriefcase}/>Изисквания</Card.Text>
       <Container className="h6 ps-0 ms-0 text-secondary">
       <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck}/>######################</Card.Text>
       <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck}/>######################</Card.Text>
       <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck}/>######################</Card.Text>
       <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck}/>######################</Card.Text>
       <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck}/>######################</Card.Text>
       </Container>
      </Card.Body>
   </Card>
   
    </Container>
    <div className="footers mt-5">
        <Footer></Footer>
    </div>
    </div>

   
    </>
    )
}

export default JobPage;