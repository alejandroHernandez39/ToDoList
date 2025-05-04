import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Form.scss';

function BasicExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formNameTask">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDescriptionTask">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDateTask">
        <Form.Label>Done Date</Form.Label>
        <Form.Control type="date" placeholder="" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Goal
      </Button>
    </Form>
  );
}

export default BasicExample;