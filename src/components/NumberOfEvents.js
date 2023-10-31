import React from 'react';

const NumberOfEvents = ({ setNumberOfEvents }) => {
    const handleInputChanged = (event) => {
        const value = event.target.value;
        setNumberOfEvents(value);

        if (isNaN(value)) {
            alert('value is not a number');
        } else if (value > 50) {
            alert('maximum value is 50');
        } else if (value <= 0) {
            alert('minimum value is 1');
        } else {
            setNumberOfEvents(value);
        }
    };

    return (
        <div id="number-of-events">
            <input
                type="text"
                defaultValue="32"
                onChange={handleInputChanged}
                data-testid="numberOfEventsInput"
            />
        </div>
    );
};

export default NumberOfEvents;
