import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss';

function BasicExample(props) {
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
        <Button variant="primary">Remover</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;