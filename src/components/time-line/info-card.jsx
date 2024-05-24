import { Button, Card } from 'react-bootstrap'
import "./info-card.scss";

const InfoCard = (props) => {
    const {paraf,description,link} = props;
  return (
    <div className='info-card'>
        <div className='card-div'>
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>{paraf}</Card.Header>
        <Card.Body>
          <Card.Text className='card-text'>
            <p>
      {description}</p>
           <div> <Button variant="primary"><a href={link} target='_blank'>See project</a></Button>
           </div></Card.Text>
        </Card.Body>
      </Card>
      </div>
    </div>
  )
}

export default InfoCard
