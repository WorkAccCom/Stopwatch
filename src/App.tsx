import React, { useState } from 'react';
import './Stopwatch.scss';
import { Buttons } from './components/buttons';

export const App: React.FC = () => {
  const [seconds, changeSecondsValue] = useState(0);
  const [timerId, changeTimerId] = useState(0);

  const startStopwatch = () => {
    const id = window.setInterval(
      () => changeSecondsValue((s) => s + 1),
      1000,
    );

    changeTimerId(id);
  };

  const stopStopwatch = (id: number) => {
    window.clearInterval(id);
    changeSecondsValue(0);
  };

  const pauseStopwatch = (id: number) => {
    window.clearInterval(id);
  };

  const secondsReset = (id: number) => {
    window.clearInterval(id);
    changeSecondsValue(0);
  };

  const convertSeconds = (sec: number) => {
    const secondsRest = sec % 60;
    const minutes = (sec - secondsRest) / 60;
    const minutesRest = minutes % 60;
    const hours = (minutes - minutesRest) / 60;

    return (
      `${
        hours >= 10 ? hours : `0${hours}`
      }:${
        minutesRest >= 10 ? minutesRest : `0${minutesRest}`
      }:${
        secondsRest >= 10 ? secondsRest : `0${secondsRest}`
      }`
    );
  };

  return (
    <div className="Stopwatch">
      <h1 className="Stopwatch__title">
        Stopwatch
      </h1>
      <p className="Stopwatch__clock">
        {convertSeconds(seconds)}
      </p>
      <div className="Stopwatch__buttons">
        <Buttons
          startStopwatchFunc={startStopwatch}
          stopStopwatchFunc={stopStopwatch}
          id={timerId}
          wait={pauseStopwatch}
          reset={secondsReset}
        />
      </div>
    </div>
  );
};
