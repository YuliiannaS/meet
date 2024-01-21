import React from 'react';

const NumberOfEvents = ({ setNumberOfEvents, setErrorAlert }) => {
    const handleInputChanged = (event) => {
        const value = event.target.value;
        setNumberOfEvents(value);

        let errorText;
        if (isNaN(value)) {
            errorText = 'Value is not a number';
        } else if (value > 50) {
            errorText = 'Maximum value is 50';
        } else if (value <= 0) {
            errorText = 'Minimum value is 1';
        } else {
            setNumberOfEvents(value);
        }
        setErrorAlert(errorText);
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
