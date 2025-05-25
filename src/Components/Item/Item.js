import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss';
import { removeTodo } from '../../Reducers/todoSlice';
import { useDispatch } from 'react-redux';

function BasicExample(props) {
  const dispatch = useDispatch();
  const removeItem = (e) => {
    e.preventDefault();
    dispatch(removeTodo(props.id))
  }
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Text>
          {props.dueDate}
        </Card.Text>
        <Button variant="primary" onClick={removeItem}>Remover</Button>
        <Button variant="primary"></Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;