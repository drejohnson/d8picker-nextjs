import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from '@chakra-ui/core';
import Calendar from '../components/Calendar';
import Profile from '../components/Profile';

const Dashboard = ({ data }) => {
  const [events, setEvents] = useState([]);
  const [profile, setProfile] = useState({});
  useEffect(() => {
    (async () => {
      const res = await axios.get('/api/events');
      const data = await res.data;
      const { name, email, photoUrl, events } = data;
      setEvents(events);
      setProfile({ name, email, photoUrl });
    })();
  }, []);
  useEffect(() => {
    if (events) console.log(events);
  }, [events]);
  return (
    <Box pos="relative" backgroundColor="#ebf1f1" p={[4, 16]} minHeight="100vh">
      <Profile profile={profile} />
      <Calendar events={events} />
    </Box>
  );
};

// Dashboard.getInitialProps = async () => {
//   const res = await axios.get(`${process.env.BASE_URL}/api/events`);
//   const json = await res.data;
//   return { data: json };
// };

export default Dashboard;
