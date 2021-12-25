import React, { useState } from 'react';

interface Props {
  startStopwatchFunc: () => void,
  stopStopwatchFunc: (id: number) => void,
  id: number,
}

export const Buttons: React.FC<Props> = ({
  startStopwatchFunc,
  stopStopwatchFunc,
  id,
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

  return (
    <div className="Buttons">
      <button
        type="button"
        onClick={startOrStopOnClickAction}
        className="Buttons__button"
      >
        {startOrStop}
      </button>
    </div>
  );
};
