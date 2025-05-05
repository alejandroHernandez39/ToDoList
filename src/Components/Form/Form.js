import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Form.scss';
import { addTodo } from '../../Reducers/todoSlice';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';

function BasicExample() {
  const imputRefName = useRef();
  const imputRefDescription = useRef();
  const imputRefDate = useRef();

  const dispatch = useDispatch();
  const addItem = (e) => {
    e.preventDefault();
    dispatch(addTodo({"id":Date.now(),"name": imputRefName.current.value, "description": imputRefDescription.current.value, "dueDate": imputRefDate.current.value}));
  }
  
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formNameTask">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="" ref={imputRefName}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDescriptionTask">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="" ref={imputRefDescription}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDateTask">
        <Form.Label>Done Date</Form.Label>
        <Form.Control type="date" placeholder="" ref={imputRefDate}/>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={addItem}>
        Add Goal
      </Button>
    </Form>
  );
}

export default BasicExample;