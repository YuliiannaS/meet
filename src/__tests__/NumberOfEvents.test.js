import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;

    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents
            setNumberOfEvents={() => { }}
            setErrorAlert={() => { }}
        />);
    });

    test('renders an input element', () => {
      const inputElement = NumberOfEventsComponent.getByRole('textbox');
      expect(inputElement).toBeInTheDocument();
  });

  test('calls setNumberOfEvents with the entered value', async () => {
    const setNumberOfEvents = jest.fn();
    NumberOfEventsComponent.rerender(<NumberOfEvents setNumberOfEvents={setNumberOfEvents} setErrorAlert={() => { }}/>);
    const inputElement = NumberOfEventsComponent.getByRole('textbox');

    userEvent.clear(inputElement);
    expect(inputElement).toHaveValue('');

    await userEvent.type(inputElement, '20');

    expect(setNumberOfEvents).toHaveBeenCalledWith('20');
});
});
