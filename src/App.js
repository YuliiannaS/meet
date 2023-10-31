import { useState, useEffect } from 'react';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import CitySearch from './components/CitySearch';
import { extractLocations, getEvents } from './api';

import './App.css';

function App() {
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [events, setEvents] = useState([]);
  const [numberOfEvents, setNumberOfEvents] = useState(32);
  const [allLocations, setAllLocations] = useState([]);

  useEffect(() => {
    fetchData();
  }, [currentCity]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, numberOfEvents));
    setAllLocations(extractLocations(allEvents));
  }

  return (
    <div className="App">
      <CitySearch setCurrentCity={setCurrentCity} allLocations={allLocations} />
      <NumberOfEvents setNumberOfEvents={setNumberOfEvents} />
      <EventList city={currentCity} events={events} numberOfEvents={numberOfEvents} />
    </div>
  );
}

export default App;
