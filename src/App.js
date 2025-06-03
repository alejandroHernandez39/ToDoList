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
    ).then((response) => {
      response.forEach((todo) => {
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
          {todos.map((todoJson) => (
            <Item key={todoJson._id} id={todoJson._id} name={todoJson.title} description={todoJson.description} dueDate={todoJson.dueDate}></Item>
          ))}
        </Col>
        </Row>
      </Container> 
    </div>
  );
}

export default App;
