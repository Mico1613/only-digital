import * as styles from "./App.module.scss";
import HistoricalDates from "./components/HistoricalDates/HistoricalDates";

function App() {
	return (
		<div className={styles.app}>
			<HistoricalDates />
		</div>
	);
}

export default App;
