import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Menu from './Components/Menu/Menu';
import Form from './Components/Form/Form';
import Item from './Components/Item/Item';
import { useSelector, useDispatch } from 'react-redux';
import { initAddTodo } from './Reducers/todoSlice';
import { useEffect } from 'react';

function App() {
  const todos = useSelector((state) => state.todos);
  const options = useSelector((state) => state.options);
  const goals = useSelector((state) => state.goals);
  const dispatch = useDispatch();
  function initFetch() {
    fetch("http://localhost:3001/tasks/getTasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "391734"
      },
    }).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      }
    ).then((data) => {
      data.forEach((todo) => {
        dispatch(initAddTodo(todo));
      });
    }
    ).catch((error) => {
      console.error("Error:", error);
    });
  }

  useEffect(() => {
    initFetch();
  }, []);
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
