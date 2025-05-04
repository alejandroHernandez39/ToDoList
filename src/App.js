import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Menu from './Components/Menu/Menu';
import Form from './Components/Form/Form';
import Item from './Components/Item/Item';

function App() {
const tareas = [
  {
    name: "Tarea 1",
    description: "Descripcion de la tarea 1",
    dueDate: "2023-10-01"
  },
  {
    name: "Tarea 2",
    description: "Descripcion de la tarea 2",
    dueDate: "2023-10-02"
  },
  {
    name: "Tarea 3",
    description: "Descripcion de la tarea 3",
    dueDate: "2023-10-03"
  }];
  return (
    <div className="App">
      <Menu></Menu>
      <Container>
        <Row>
        <Col><Form></Form></Col>
        <Col>
          {tareas.map((tarea, index) => (
            <Item key={index} name={tarea.name} description={tarea.description} dueDate={tarea.dueDate}></Item>
          ))}
        </Col>
        </Row>
      </Container> 
    </div>
  );
}

export default App;
