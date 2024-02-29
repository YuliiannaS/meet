import { useState, useEffect } from 'react';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import CitySearch from './components/CitySearch';
import { extractLocations, getEvents } from './api';
import { InfoAlert, WarningAlert, ErrorAlert } from './components/Alert';
import CityEventsChart from './components/CityEventsChart';
import EventGenresChart from './components/EventGenresChart';

import './App.css';

function App() {
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [events, setEvents] = useState([]);
  const [numberOfEvents, setNumberOfEvents] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [infoAlert, setInfoAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");

  useEffect(() => {
    if (navigator.onLine) {
      setWarningAlert("");
    } else {
      setWarningAlert("You're offline - the data is not updating");
    }
    fetchData();
  }, [currentCity, numberOfEvents]);

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
      <div className="alerts-container">
        {infoAlert?.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert?.length ? <ErrorAlert text={errorAlert} /> : null}
      </div>
      <CitySearch
        setCurrentCity={setCurrentCity}
        allLocations={allLocations}
        setInfoAlert={setInfoAlert}
      />
      <NumberOfEvents setNumberOfEvents={setNumberOfEvents} setErrorAlert={setErrorAlert} />
      <div className="charts-container">
        <EventGenresChart events={events} />
        <CityEventsChart allLocations={allLocations} events={events} />
      </div>
      <EventList city={currentCity} events={events} numberOfEvents={numberOfEvents} />
    </div>
  );
}

export default App;
