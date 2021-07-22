import styles from '../styles/Home.module.css';

export default function MainForm(props) {

	return (
		<form className={styles.form} onSubmit={props.handleSubmit}>
			<label>Total Charged Tips</label>
			<input
				type='text'
				name='totalCharged'
				id='totalCharged'
				required
			/>
			<label>Beertender Cash Tips</label>
			<input
				type='text'
				name='beerCash'
				id='beerCash'
				required
			/>
			<label>Charged To-Go Tips</label>
			<input
				type='text'
				name='togoCharged'
				id='togoCharged'
			/>
			<label>To-Go Cash</label>
			<input
				type='text'
				name='togoCash'
				id='togoCash'
			/>
			<label>Number of Beertenders Working</label>
			<input
				type='number'
				name='beertenders'
				id='beertenders'
                required
			/>
			<label>Number of Cooks Working</label>
			<input
				type='number'
				name='cooks'
				id='cooks'
                required
			/>
			<button>Submit</button>
		</form>
	);
}
