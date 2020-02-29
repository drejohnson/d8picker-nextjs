import React, { useEffect } from 'react';
import dayjs from 'dayjs';

import { Icon } from '@chakra-ui/core';

const Events = ({ events, day, currentMonth, currentYear }) => {
  return (
    <>
      {events &&
        events.map(e => {
          const hasEvents =
            day === dayjs(e && e.start.dateTime).date() &&
            currentMonth === dayjs(e && e.start.dateTime).month() &&
            currentYear === dayjs(e && e.start.dateTime).year();

          return hasEvents ? (
            <React.Fragment key={e.id}>
              <Icon name="circle" color="green.200" /> {e.summary}
            </React.Fragment>
          ) : null;
        })}
    </>
  );
};

export default Events;
