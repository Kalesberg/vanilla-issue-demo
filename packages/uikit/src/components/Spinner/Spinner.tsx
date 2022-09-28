import { useEffect, useState } from 'react';
import Cycle from '../Cycle/Cycle';

const Spinner = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setProgress(progress + 1), 200);

    return () => {
      clearInterval(interval);
    };
  });

  return <Cycle color='action' cycleProgress={progress % 12} />;
};

export default Spinner;
