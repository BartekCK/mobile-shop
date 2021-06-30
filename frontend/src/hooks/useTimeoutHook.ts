import React from 'react';
import { useHistory } from 'react-router-dom';

function useTimeoutHook(time: number) {
  const [leftTime, setLeftTime] = React.useState<number>(time);

  const history = useHistory();

  React.useEffect(() => {
    const interval = setInterval(() => {
      setLeftTime((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  React.useEffect(() => {
    if (leftTime <= 0) {
      history.push('/');
    }
  }, [leftTime, history]);

  return leftTime;
}

export default useTimeoutHook;
