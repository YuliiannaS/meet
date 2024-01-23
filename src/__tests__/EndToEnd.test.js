import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:3000');
        await page.waitForSelector('#event-list');
    });

    afterAll(() => {
        browser.close();
    });

    test('An event element is collapsed by default', async () => {
        const eventDetails = await page.$('.event .details');
        expect(eventDetails).toBeNull();
    });

    test('User can expand an event to see its details', async () => {
        await page.click('#event-list li .show-details');
        const eventDetails = await page.$('#event-list li .event-details');
        expect(eventDetails).toBeDefined();
    });

    test('User can collapse an event to hide details', async () => {
        await page.click('#event-list li .show-details');
        const eventDetails = await page.$('#event-list li .event-details');
        expect(eventDetails).toBeNull();
    });
});