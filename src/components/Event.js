import { useState } from 'react';

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <li>
            <strong>{event.summary}</strong> on {event.start.dateTime}<br/>
            {event.location}
            <button className="show-details" onClick={toggleDetails}>Show Details</button>
            {showDetails && (
                <div className="event-details">
                    {event.description}
                    <button className="hide-details" onClick={toggleDetails}>Hide Details</button>
                </div>
            )}
        </li>
    );
}

export default Event;