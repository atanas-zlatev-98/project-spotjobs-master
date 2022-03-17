import NavBar from './Components/NavigationBar/NavBar';
import {Container,Row} from 'react-bootstrap';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import './App.css';
import routes from './Pages/PageRoutes';



function App() {

  const getRoutes = () => {
    return routes.map((route, index) => {
      return <Route 
        key={index}
        exact={route.exact}
        path={route.path}
        element={route.component}
        />
    })
  }

  return (
      <Router>
        <NavBar/>
        <Container>
          <Row className="mt-5">
            <Routes>
              {getRoutes()}
            </Routes>
          </Row>
        </Container>
      </Router>
  );
}


export default App;
