import React, { useState } from 'react';

interface Props {
  startStopwatchFunc: () => void,
  stopStopwatchFunc: (id: number) => void,
  id: number,
  wait: (id: number) => void,
  reset: (id: number) => void
}

export const Buttons: React.FC<Props> = ({
  startStopwatchFunc,
  stopStopwatchFunc,
  id,
  wait,
  reset,
}) => {
  const [startOrStop, startOrStopSwitcher] = useState('Start');

  const startOrStopOnClickAction = () => {
    if (startOrStop === 'Start') {
      startOrStopSwitcher('Stop');
      startStopwatchFunc();
    } else {
      startOrStopSwitcher('Start');
      stopStopwatchFunc(id);
    }
  };

  const waitOnClickAction = () => {
    wait(id);
    startOrStopSwitcher('Start');
  };

  const resetOnClickAction = () => {
    reset(id);

    if (startOrStop === 'Stop') {
      startStopwatchFunc();
    }
  };

  return (
    <div className="Buttons">
      <button
        type="button"
        onClick={startOrStopOnClickAction}
        className="Buttons__button"
      >
        {startOrStop}
      </button>
      <button
        type="button"
        onDoubleClick={waitOnClickAction}
        className="Buttons__button"
      >
        Wait
      </button>
      <button
        type="button"
        onClick={resetOnClickAction}
        className="Buttons__button"
      >
        Reset
      </button>
    </div>
  );
};
