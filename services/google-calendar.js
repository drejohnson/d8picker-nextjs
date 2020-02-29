import { google } from 'googleapis';

const listEvents = (auth, cb) => {
  const calendar = google.calendar({ version: 'v3', auth });
  calendar.events.list(
    {
      calendarId: 'primary', // TODO: Make Dynamic
      timeMin: new Date().toISOString(),
      maxResults: 10, // TODO: Should add more events
      singleEvents: true,
      orderBy: 'startTime'
    },
    (err, res) => {
      if (err)
        return console.log(
          `The API returned an error: ${err}. Session may have expired.`
        );
      const events = res.data.items;
      if (events.length) {
        console.log('events', events);
        cb(events);
      } else {
        console.log('No upcoming events found.');
      }
    }
  );
};

export default listEvents;
