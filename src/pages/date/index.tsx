/** @format */

import React from 'react';
const parseMs = function parseMs(milliseconds: number) {
  return {
    days: Math.floor(milliseconds / 86400000),
    hours: Math.floor(milliseconds / 3600000) % 24,
    minutes: Math.floor(milliseconds / 60000) % 60,
    seconds: Math.floor(milliseconds / 1000) % 60,
    milliseconds: Math.floor(milliseconds) % 1000
  };
};
function TestDate() {
  const now = new Date().getTime();
  const targetDate: any = new Date('2022-06-12 12:45:24');
  const diff = targetDate.getTime() - now;
  const formatDate = parseMs(diff);
  const { days, hours, minutes, seconds, milliseconds } = formatDate;

  return (
    <>
      <p>
        There are {days} days {hours} hours {minutes} minutes {seconds} seconds{' '}
        {milliseconds} milliseconds until 2021-12-31 24:00:00
      </p>
    </>
  );
}
export default TestDate;
