import gsap from 'gsap';
import type { TimePeriod } from 'mock/data';
import { useEffect, useRef } from 'react';
import * as styles from './CircleNav.module.scss';

interface CircleNavProps {
  periods: TimePeriod[];
  activeId: number;
  onSelect: (id: number) => void;
}

const CircleNav: React.FC<CircleNavProps> = ({ periods, activeId, onSelect }) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const totalPoints = periods.length;
  const angleStep = 360 / totalPoints;
  const activeIndex = periods.findIndex((p) => p.id === activeId);

  useEffect(() => {
    if (circleRef.current) {
      const currentAngle = activeIndex * angleStep;
      const rotation = -currentAngle + 300;

      gsap.to(circleRef.current, {
        rotation: rotation,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.to('.point-content', {
        rotation: -rotation,
        duration: 1,
        ease: 'power2.out',
      });
    }
  }, [activeIndex, angleStep]);

  return (
    <div className={styles.container} ref={circleRef}>
      {periods.map((period, index) => {
        const angle = index * angleStep;
        const radian = (angle * Math.PI) / 180;

        const isActive = period.id === activeId;

        return (
          <div
            key={period.id}
            className={`${styles.point} ${isActive ? styles.active : ''}`}
            style={{
              left: `${50 + 50 * Math.cos(radian)}%`,
              top: `${50 + 50 * Math.sin(radian)}%`,
            }}
            onClick={() => onSelect(period.id)}
          >
            <div className="point-content">
              {isActive && <span style={{ fontSize: '20px' }}>{index + 1}</span>}
              {isActive && <span className={styles.pointLabel}>{period.title}</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CircleNav;
