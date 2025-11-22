import type React from "react";
import { useState } from "react";
import { historicalPeriods } from "../../mock/data";
import CircleNav from "../CircleNav/CircleNav";
import EventsSlider from "../EventsSlider/EventsSlider";
import YearsDisplay from "../YearsDisplay/YearsDisplay";
import * as styles from "./HistoricalDates.module.scss";

const HistoricalDates: React.FC = () => {
	const [activePeriodId, setActivePeriodId] = useState(historicalPeriods[0].id);

	const activePeriod =
		historicalPeriods.find((p) => p.id === activePeriodId) ||
		historicalPeriods[0];
	const activeIndex = historicalPeriods.findIndex(
		(p) => p.id === activePeriodId,
	);

	const handlePrev = () => {
		if (activeIndex > 0) {
			setActivePeriodId(historicalPeriods[activeIndex - 1].id);
		}
	};

	const handleNext = () => {
		if (activeIndex < historicalPeriods.length - 1) {
			setActivePeriodId(historicalPeriods[activeIndex + 1].id);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1>
					Исторические
					<br />
					даты
				</h1>
			</div>

			<div className={styles.mainDisplay}>
				<CircleNav
					periods={historicalPeriods}
					activeId={activePeriodId}
					onSelect={setActivePeriodId}
				/>
				<YearsDisplay
					startYear={activePeriod.startYear}
					endYear={activePeriod.endYear}
				/>
			</div>

			<EventsSlider events={activePeriod.events} />

			<div className={styles.controls}>
				<div className={styles.counter}>
					0{activeIndex + 1}/0{historicalPeriods.length}
				</div>
				<div className={styles.buttons}>
					<button onClick={handlePrev} disabled={activeIndex === 0}>
						<svg
							width="10"
							height="14"
							viewBox="0 0 10 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.49988 13.0001L2.49988 7.00012L8.49988 1.00012"
								stroke="#42567A"
								strokeWidth="2"
							/>
						</svg>
					</button>
					<button
						onClick={handleNext}
						disabled={activeIndex === historicalPeriods.length - 1}
					>
						<svg
							width="10"
							height="14"
							viewBox="0 0 10 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1.50012 1.00012L7.50012 7.00012L1.50012 13.0001"
								stroke="#42567A"
								strokeWidth="2"
							/>
						</svg>
					</button>
					<div className={styles.pagination}>
						{historicalPeriods.map((period, index) => (
							<span
								key={period.id}
								className={index === activeIndex ? styles.activeDot : ""}
								onClick={() => setActivePeriodId(period.id)}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HistoricalDates;
