import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Menu from './Components/Menu/Menu';
import Form from './Components/Form/Form';
import Item from './Components/Item/Item';
import { useSelector } from 'react-redux';

function App() {
  const todos = useSelector((state) => state.todos);
  return (
    <div className="App">
      <Menu></Menu>
      <Container>
        <Row>
        <Col><Form></Form></Col>
        <Col>
          {todos.map((todo) => (
            <Item id={todo.id} name={todo.name} description={todo.description} dueDate={todo.dueDate}></Item>
          ))}
        </Col>
        </Row>
      </Container> 
    </div>
  );
}

export default App;
