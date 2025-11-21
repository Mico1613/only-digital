import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import * as styles from '../HistoricalDates.module.scss';

interface YearsDisplayProps {
  startYear: number;
  endYear: number;
}

const YearsDisplay: React.FC<YearsDisplayProps> = ({ startYear, endYear }) => {
  const [displayStart, setDisplayStart] = useState(startYear);
  const [displayEnd, setDisplayEnd] = useState(endYear);
  
  const prevStartRef = useRef(startYear);
  const prevEndRef = useRef(endYear);

  useEffect(() => {
    const controls = {
      start: prevStartRef.current,
      end: prevEndRef.current,
    };

    gsap.to(controls, {
      start: startYear,
      end: endYear,
      duration: 1,
      ease: 'power2.out',
      onUpdate: () => {
        setDisplayStart(Math.round(controls.start));
        setDisplayEnd(Math.round(controls.end));
      },
      onComplete: () => {
        prevStartRef.current = startYear;
        prevEndRef.current = endYear;
      }
    });
  }, [startYear, endYear]);

  return (
    <div className={styles.yearsDisplay}>
      <span className={styles.startYear}>{displayStart}</span>
      <span className={styles.endYear}>{displayEnd}</span>
    </div>
  );
};

export default YearsDisplay;
