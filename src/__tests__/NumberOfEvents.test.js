import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;

    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents />);
    });

  test('renders a select element with options', () => {
    const selectElement = NumberOfEventsComponent.getByRole('combobox');
    const options = NumberOfEventsComponent.getAllByRole('option');

    expect(selectElement).toBeInTheDocument();
    expect(options).toHaveLength(4);
  });

  test('calls setNumberOfEvents with the selected value', async () => {
    const user = userEvent.setup();
    const setNumberOfEvents = jest.fn();
    NumberOfEventsComponent.rerender(<NumberOfEvents setNumberOfEvents={setNumberOfEvents} />);
    const selectElement = NumberOfEventsComponent.getByRole('combobox');

    await user.selectOptions(selectElement, "20");

    expect(setNumberOfEvents).toHaveBeenCalledWith(20);
  });
});
