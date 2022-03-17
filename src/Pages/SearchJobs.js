import BelowNav from "./BelowNav";
import Footer from "../Components/Footer/Footer";
import '../Style/custom_style.scss'
import {Container, Nav,Row,Col,Card,Breadcrumb,Button} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import Filters from "../Components/Filters/Filters";
import logoOne from '../Style/Images/Logos/logo_.png';
import logoTwo from '../Style/Images/Logos/logo_2.png';
import logoThree from '../Style/Images/Logos/logo_3.png';
import logoFour from '../Style/Images/Logos/logo_4.png';
import logoFive from '../Style/Images/Logos/logo_5.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownAZ, faArrowDownZA, faArrowUpZA } from "@fortawesome/free-solid-svg-icons";
function SearchJobs(props) {
    return (
      <>
      <div className="main-layout">
        <div className="mini-nav">
          <BelowNav></BelowNav>
          <Container className="d-flex flex-column navilinks">
          <Card className="ps-5 bg-transparent text-white border-0">
          <Card.Body className="bg-transparent h3">Разглеждане на Обяви</Card.Body>
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
  <LinkContainer className='text-white d-flex' to="/search-jobs">
                    <Nav.Link className="ps-1 h5" href="/search-jobs">Разглеждане на Обяви</Nav.Link>
  </LinkContainer>
  </Breadcrumb.Item>
</Breadcrumb>
</Container>
          </div>
          <Container>
          <Row>
            <div className="spacer"></div>
    <Col className="" sm={8}>
     
    <Container fluid>
      <Container className="p-0 d-flex align-items-center">
    <Card.Text className="h3 text-black p-3 ">Обяви</Card.Text>
    
    <Container className="d-flex justify-content-end aligh-items-center pe-0">
      <Card.Text className="p-2">Работно време:  <Button variant="outline-primary"><FontAwesomeIcon icon={faArrowDownAZ}/></Button></Card.Text>
      <Card.Text className="p-2">Заплата:  <Button variant="outline-primary"><FontAwesomeIcon icon={faArrowUpZA}/></Button></Card.Text>
      
    
    </Container>
    </Container>
  <Row>
    <Col>
    
    <Card className="jobs-cards d-flex flex-row mb-3">
  <Card.Img className="logos" variant="top" src={logoOne} />
  <Card.Body className="jobs-body d-flex flex-row justify-content-between align-items-center">    
    <Card.Text className="d-flex flex-column">
    <Card.Title><b>@Tempest</b></Card.Title>
    Front-End Web Developer
    </Card.Text>
    <Card.Text className="d-flex flex-column">
     София, България
    </Card.Text>
    <Card.Text className="d-flex flex-column">
    <Card.Text className="jobs-fulltime">Пълно Работно Време</Card.Text>
    <Card.Text>Заплата: 3000лв</Card.Text>
    </Card.Text>
  </Card.Body>
</Card>
<Card className="jobs-cards d-flex flex-row mb-3">
  <Card.Img className="logos" variant="top" src={logoFive} />
  <Card.Body className="jobs-body d-flex flex-row justify-content-between align-items-center">    
    <Card.Text className="d-flex flex-column">
    <Card.Title><b>@SharkBite</b></Card.Title>
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
  <Card.Img className="logos" variant="top" src={logoFour} />
  <Card.Body className="jobs-body d-flex flex-row justify-content-between align-items-center">    
    <Card.Text className="d-flex flex-column">
    <Card.Title><b>@HoundBG</b></Card.Title>
    Java Developer
    </Card.Text>
    <Card.Text className="d-flex flex-column">
     София, България
    </Card.Text>
    <Card.Text className="d-flex flex-column">
    <Card.Text className="jobs-halftime">Половин Работно Време</Card.Text>
    <Card.Text>Заплата: 2000лв</Card.Text>
    </Card.Text>
  </Card.Body>
</Card>
<Card className="jobs-cards d-flex flex-row mb-3">
  <Card.Img className="logos" variant="top" src={logoTwo} />
  <Card.Body className="jobs-body d-flex flex-row justify-content-between align-items-center">    
    <Card.Text className="d-flex flex-column">
    <Card.Title><b>
@CD Project Dark</b></Card.Title>
Full Stack Web Developer
    </Card.Text>
    <Card.Text className="d-flex flex-column">
     Пловдив, България
    </Card.Text>
    <Card.Text className="d-flex flex-column">
    <Card.Text className="jobs-fulltime">Пълно Работно Време</Card.Text>
    <Card.Text>Заплата: 5500лв</Card.Text>
    </Card.Text>
  </Card.Body>
</Card>
<Card className="jobs-cards d-flex flex-row mb-3">
  <Card.Img className="logos" variant="top" src={logoThree} />
  <Card.Body className="jobs-body d-flex flex-row justify-content-between align-items-center">    
    <Card.Text className="d-flex flex-column">
    <Card.Title><b>@WolfNef</b></Card.Title>
   C# Developer
    </Card.Text>
    <Card.Text className="d-flex flex-column">
     София, България
    </Card.Text>
    <Card.Text className="d-flex flex-column">
    <Card.Text className="jobs-temporary">Временна Работа</Card.Text>
    <Card.Text>Заплата: По Договаряне</Card.Text>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
  </Row>
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




    </Col>
    <Col className="" sm={4}>
    
    <Container>
      <Filters></Filters>
    </Container>
    
    </Col>
  </Row>
          </Container>
          <div className='footers mt-5'>
                <Footer></Footer>
    </div>
      </div>
       
        </>
    
    )
}
export default SearchJobs;