import React, { useEffect, useState } from 'react';
import RiderSelector from './components/RiderSelector';
import CardGallery from './components/CardGallery';

function App() {
  const [riders, setRiders] = useState([]);
  const [selectedRider, setSelectedRider] = useState('');
  const [cards, setCards] = useState([]);

useEffect(() => {
  fetch("./data/riders.json")
    .then((res) => res.json())
    .then((data) => {
      setRiders(data);
    })
    .catch((err) => {
      console.error("Gagal fetch data lokal:", err);
    });
}, []);



  useEffect(() => {
    const rider = riders.find((r) => r.riderId === selectedRider);
    setCards(rider ? rider.cards : []);
  }, [selectedRider, riders]);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Ryuki Advent Card Viewer</h1>
      <RiderSelector
        riders={riders}
        selectedRider={selectedRider}
        onSelect={setSelectedRider}
      />
      <CardGallery cards={cards} />
    </div>
  );
}

export default App;
