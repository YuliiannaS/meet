import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';

const sampleEvent = {
  summary: 'Sample Event',
  location: 'Sample Location',
  start: {
    dateTime: '2023-11-01T12:00:00',
  },
  description: 'Sample Event Description',
};

describe('<Event /> component', () => {
    let EventComponent;

    beforeEach(() => {
        EventComponent = render(<Event event={sampleEvent} />);
    });

  test('renders event summary, location, and start date/time', () => {
    const summaryElement = EventComponent.queryByText('Sample Event');

    expect(summaryElement).toBeInTheDocument();
  });

  test('initially hides event details', () => {
    const descriptionElement = EventComponent.queryByText('Sample Event Description');
    expect(descriptionElement).not.toBeInTheDocument();
  });

  test('shows event details on "Show Details" button click', async () => {
    const user = userEvent.setup();
    const showDetailsButton = EventComponent.queryByText('Show Details');
    await user.click(showDetailsButton);

    const descriptionElement = EventComponent.queryByText('Sample Event Description');
    const hideDetailsButton = EventComponent.queryByText('Hide Details');

    expect(descriptionElement).toBeInTheDocument();
    expect(hideDetailsButton).toBeInTheDocument();
  });

  test('hides event details on "Hide Details" button click', async () => {
    const user = userEvent.setup();
    const showDetailsButton = EventComponent.queryByText('Show Details');
    await user.click(showDetailsButton);

    const hideDetailsButton = EventComponent.queryByText('Hide Details');
    await user.click(hideDetailsButton);

    const descriptionElement = EventComponent.queryByText('Sample Event Description');
    expect(descriptionElement).not.toBeInTheDocument();
  });
});
