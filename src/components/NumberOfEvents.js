import React from 'react';

const NumberOfEvents = ({ setNumberOfEvents }) => {
    const handleNumberOfEventsChange = (event) => {
        const selectedValue = parseInt(event.target.value, 10);
        setNumberOfEvents(selectedValue);
    };

    return (
        <select onChange={handleNumberOfEventsChange}>
            <option key={1} value={10}>10</option>
            <option key={2} value={20}>20</option>
            <option key={3} value={50}>50</option>
            <option key={4} value={100}>100</option>
        </select>
    );
};

export default NumberOfEvents;
