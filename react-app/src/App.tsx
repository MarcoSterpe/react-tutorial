import ListGroup from './components/ListGroup';

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

  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
