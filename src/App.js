import { useState } from 'react';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import CitySearch from './components/CitySearch';
import './App.css';

function App() {
  const [city, setCity] = useState("");
  const [numberOfEvents, setNumberOfEvents] = useState("");

  return (
    <div className="App">
      <CitySearch setCity={setCity} />
      <NumberOfEvents setNumberOfEvents={setNumberOfEvents} />
      <EventList city={city} numberOfEvents={numberOfEvents} />
    </div>
  );
}

export default App;
