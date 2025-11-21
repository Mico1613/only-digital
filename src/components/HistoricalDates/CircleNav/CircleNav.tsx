import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import * as styles from './CircleNav.module.scss';
import { TimePeriod } from '../../../mock/data';

interface CircleNavProps {
  periods: TimePeriod[];
  activeId: number;
  onSelect: (id: number) => void;
}

const CircleNav: React.FC<CircleNavProps> = ({ periods, activeId, onSelect }) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const totalPoints = periods.length;
  const angleStep = 360 / totalPoints;
  const radius = 265; // Half of 530px width
  const activeIndex = periods.findIndex(p => p.id === activeId);

  useEffect(() => {
    if (circleRef.current) {
      // Target angle for the active item (e.g., 45 degrees - top right)
      // Or usually 30 degrees to match the image better?
      // Let's assume 60 degrees (index 1 position) is the "active" slot visually
      // In the image, "6" is at approx 2 o'clock, which is -30 or 30 degrees from horizontal?
      // Let's stick to a standard rotation: Active item always rotates to -60 degrees (top rightish)
      
      const targetAngle = 300; // 300 degrees is top-right (if 0 is right, 270 is top)
      // Actually, let's just rotate so the active point is at a fixed visual position.
      // Let's say the "active position" is at angle -60 (300) degrees.
      
      const currentAngle = activeIndex * angleStep;
      const rotation = -(currentAngle) + 300; // Rotate to bring current to 300
      
      gsap.to(circleRef.current, {
        rotation: rotation,
        duration: 1,
        ease: 'power2.out',
      });

      // Also rotate the points back so they stay upright? 
      // The image shows the number "6" upright.
      // So we need to counter-rotate the points.
      gsap.to('.point-content', {
        rotation: -rotation,
        duration: 1,
        ease: 'power2.out',
      });
    }
  }, [activeId, activeIndex, angleStep]);

  return (
    <div className={styles.container} ref={circleRef}>
      {periods.map((period, index) => {
        const angle = index * angleStep;
        // Convert polar to cartesian
        // 0 degrees is right (3 o'clock)
        const radian = (angle * Math.PI) / 180;
        const x = Math.cos(radian) * radius + radius; // +radius to center in 530x530 box
        const y = Math.sin(radian) * radius + radius;

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
            <div className="point-content" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
