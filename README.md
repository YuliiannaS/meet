# Meet App - A Progressive Web Application (PWA)

## Objective:
The Meet App is a cool web app made with React that fetches events using Google Calendar. It's easy to use, even when offline, and offers many features like instant loading, notifications, and more.

## Highlights:

No Fuss: No need for backend maintenance or worrying about scaling. It's always available and cost-effective.
PWA Perks: Loads instantly, even works offline, gives you push notifications, and fits any device.
### What You Get:
We've got user stories, tests, Lambda functions, and visualizations. If you want to go advanced, there's inline editing, styling, testing, and quality checks.

### Why Build This?
Show off your serverless, PWA, and development skills. Perfect for your portfolio. 

### 1.Filter Events by City:

 User Story: I want to filter events by the city they're in, so I can easily find events happening in a specific city.

### Scenario:
Given I'm using the app;

When I select a city filter;

And I choose a city, like "New York";

Then the app should show only events in "New York".

### 2.Show/Hide Event Details:

 User Story: I want to be able to show or hide the details of an event, so I can decide how much information I see.
### Scenario:
Given I'm looking at an event;

When I click "Show Details";

Then I should see all the event info;

And if I click "Hide Details," it should show less information.

### 3.Specify Number of Events:

 User Story: I want to choose how many events I see on the app at once, so I can control the number.
### Scenario:
Given I'm on the app's Events page;

When I pick the "Number of Events" option;

And I choose to show, let's say, 20 events per page;

Then the app should display up to 20 events at once.

### 4.Use the App When Offline:

 User Story: I want to use the app even when I'm not connected to the internet, so I can still see events I looked at before.
### Scenario:
Given I used the app before and looked at events;

When I open the app while not connected to the internet;

Then I should still be able to see the events I checked out previously.

### 5.Add an App Shortcut to the Home Screen:

 User Story: I want to put a shortcut to the app on my home screen so I can open it quickly.
### Scenario:
Given I'm on the app's main screen;

When I go to the settings or options;

And I choose "Add to Home Screen";

Then the app should create a shortcut on my home screen;

And I can open the app from there easily.

### 6.Display Charts Visualizing Event Details:

 User Story: I want to see charts that show upcoming events in different cities, so I can understand which events are happening where.
### Scenario:
Given I'm using the app;

When I scroll down or access a specific section;

Then I should see charts that visually display upcoming events by city;

And I can tell where events are happening.