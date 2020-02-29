import React from 'react';
import { useDisclosure, Flex, Box } from '@chakra-ui/core';
import Cell from './Cell';
import EventsIndicator from './EventsIndicator';
import EventsViewModal from './EventsViewModal';

const Days = ({
  events,
  daysInMonth,
  currentDay,
  currentMonth,
  currentYear
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toggleDayView = i => console.log(i);
  return (
    <>
      <EventsViewModal
        events={events}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
      {[...Array(daysInMonth).keys()].map(i => {
        const day = i + 1;
        const isToday =
          day === currentDay.date() &&
          currentMonth === currentDay.month() &&
          currentYear === currentDay.year();

        return (
          <Cell
            className="calendar-days-item faded"
            borderBottomWidth="1px"
            borderBottomColor="gray.200"
            key={i}
            onClick={onOpen}
          >
            <Flex
              direction="column"
              align="center"
              justify="space-between"
              h="100%"
              py={[1, 8]}
            >
              <Box
                as="span"
                fontSize={['xl', '2xl']}
                fontWeight={700}
                color={isToday ? 'red.200' : 'inherit'}
              >
                {day}
              </Box>
              <EventsIndicator
                events={events}
                day={day}
                currentMonth={currentMonth}
                currentYear={currentYear}
              />
            </Flex>
          </Cell>
        );
      })}
    </>
  );
};

export default Days;
