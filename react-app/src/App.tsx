import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const cities = [
    'New York',
    'San Francisco',
    'Tokyo',
    'Paris',
    'Rome',
    'London'
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [showAlert, setShowAlert] = useState(false);
  return (
    <div>
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>
          Hello <span> World! </span>
        </Alert>
      )}

      <Button cssClass="danger" onClick={() => setShowAlert(true)}>
        Test button
      </Button>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
