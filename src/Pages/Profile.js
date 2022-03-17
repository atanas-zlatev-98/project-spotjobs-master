import BelowNav from "./BelowNav";
import '../Style/custom_style.scss';
import Footer from "../Components/Footer/Footer";
import {Container, Nav,Row,Col,Card,Breadcrumb,Form,Button} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faPlus, faUser,faLocationDot, faCode, faUserAlt, faBriefcase, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import profileAvatar from '../Style/Images/HappyClients/profile_avatar.png';
import fbIcon from '../Style/Images/Icons/fb_icon.png';
import twitterIcon from '../Style/Images/Icons/twitter_icon.png';
import LinkedinIcon from '../Style/Images/Icons/linkedin_icon.png';
import GitIcon from '../Style/Images/Icons/github_icon.png';
function Profile(props) {
    return (
        <>
        <div className="main-layout">
        <div className="mini-nav">
    <BelowNav></BelowNav>
    
    <Container className="d-flex flex-column navilinks">
      <Card className="ps-5 bg-transparent text-white border-0">
      <Card.Body className="bg-transparent h3">Профил</Card.Body>
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
                <Nav.Link className="ps-1 h5" href="/send-resume">Профил</Nav.Link>
      </LinkContainer>
</Breadcrumb.Item>
</Breadcrumb>
</Container>
    </div>
    <Container className="mt-5">
    <Container className="mt-5">
  <Row>
    <Col sm={8}>
        <Container>
        <Card className="d-flex flex-row border-0">
  <Card.Img variant="top" style={{width: '150px',height: '150px'}} src={profileAvatar} />
  <Card.Body className="d-flex flex-row justify-content-evenly">
      <Container className="d-flex flex-column">
      <Card.Title className="title-profile">@Николай Въклинов</Card.Title>
    <Card.Text className="color-profile mb-2">
    <FontAwesomeIcon className="pe-2" icon={faCode}/>
      Уеб Програмист
    </Card.Text>
    <Card.Text className="color-profile">
        <FontAwesomeIcon className="pe-2" icon={faLocationDot}/>
    гр.Пазарджик, България
    </Card.Text>
      </Container>
    
  </Card.Body>
</Card>
        </Container>
        
    </Col>
    <Col sm={4}>

<Container className="social_media_icons d-flex flex-column mt-3"> 
<Card className="border-0 d-flex flex-row">
<Card.Img className="social_icons m-1" src={fbIcon} />
<Card.Img className="social_icons m-1" src={twitterIcon} />
<Card.Img className="social_icons m-1" src={LinkedinIcon} />
<Card.Img className="social_icons m-1" src={GitIcon} />
</Card>
<Button variant="outline-primary mt-2">Изтегляне на CV</Button>

</Container>


    </Col>
  </Row>
  </Container>
    </Container>

    <Container className="mt-5">
        <Container>
        <Row>
    <Col sm={8}>
    <Card className="border-0 text-primary">
       <Card.Body className="h5">
       <Card.Text className="border-bottom p-3"><FontAwesomeIcon className="me-2" icon={faUserAlt}/>Кратка Информация за мен</Card.Text>
       <Card.Text className="h6 text-secondary">Известен факт е, че читателя обръща внимание на съдържанието, 
       което чете, а не на оформлението му. Свойството на Lorem Ipsum е, че до голяма степен има нормално разпределение 
       на буквите и се чете по-лесно, 
       за разлика от нормален текст на английски език като "Това е съдържание, това е съдържание".</Card.Text>
      </Card.Body>
   </Card>

   <Card className="border-0 text-primary">
       <Card.Body className="h5">
       <Card.Text className="border-bottom p-3"><FontAwesomeIcon className="me-2" icon={faUserAlt}/>Професионални Умения</Card.Text>
      
      <Container>
            <Container className="d-flex justify-content-between">
            <Form.Label className="h5">HTML</Form.Label>
            <Form.Label className="h5">80%</Form.Label>
            </Container>
            <Form.Range defaultValue={80}/>
      </Container>

      <Container>
            <Container className="d-flex justify-content-between">
            <Form.Label className="h5">CSS</Form.Label>
            <Form.Label className="h5">65%</Form.Label>
            </Container>
            <Form.Range defaultValue={65}/>
      </Container>

      <Container>
            <Container className="d-flex justify-content-between">
            <Form.Label className="h5">JavaScript</Form.Label>
            <Form.Label className="h5">50%</Form.Label>
            </Container>
            <Form.Range defaultValue={50}/>
      </Container>

      <Container>
            <Container className="d-flex justify-content-between">
            <Form.Label className="h5">React</Form.Label>
            <Form.Label className="h5">60%</Form.Label>
            </Container>
            <Form.Range defaultValue={60}/>
      </Container>

      <Container>
            <Container className="d-flex justify-content-between">
            <Form.Label className="h5">Node.js</Form.Label>
            <Form.Label className="h5">75%</Form.Label>
            </Container>
            <Form.Range defaultValue={75}/>
      </Container>

      </Card.Body>
   </Card>

   <Card className="border-0 text-primary">
       <Card.Body className="h5">
       <Card.Text className="border-bottom p-3"><FontAwesomeIcon className="me-2" icon={faBriefcase}/>Сертификати и Образование</Card.Text>
       <Card.Text className="h6 text-secondary pb-3">Известен факт е, че читателя обръща внимание на съдържанието, 
       което чете, а не на оформлението му. Свойството на Lorem Ipsum е, че до голяма степен има нормално разпределение 
       на буквите и се чете по-лесно, 
       за разлика от нормален текст на английски език като "Това е съдържание, това е съдържание".</Card.Text>
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
       <Card.Body className="h5">
       <Card.Text className="border-bottom p-3"><FontAwesomeIcon className="me-2" icon={faBriefcase}/>Работен Опит</Card.Text>
       <Card.Text className="h6 text-secondary pb-3">Известен факт е, че читателя обръща внимание на съдържанието, 
       което чете, а не на оформлението му. Свойството на Lorem Ipsum е, че до голяма степен има нормално разпределение 
       на буквите и се чете по-лесно, 
       за разлика от нормален текст на английски език като "Това е съдържание, това е съдържание".</Card.Text>
       <Container className="h6 ps-0 ms-0 text-secondary">
       <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck}/>######################</Card.Text>
       <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck}/>######################</Card.Text>
       <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck}/>######################</Card.Text>
       <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck}/>######################</Card.Text>
       <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck}/>######################</Card.Text>
       </Container>
      </Card.Body>
   </Card>

    </Col>
    <Col sm={4}>
        
    <Form className="profile-contacts p-3">
        <Form.Label>Свържете се с мен</Form.Label>
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
export default Profile;