import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<div className={styles.buttonBox}>
					<button className={styles.btnBox}>1</button>
					<button className={styles.btnBox}>2</button>
					<button className={styles.btnBox}>3</button>
					<button className={styles.btnBox}>4</button>
				</div>
				<div className={styles.inf}>
					<div className={styles.primary}>
						<button className={styles.button}>Создать новую должность</button>
					</div>
					<div className={styles.secondary}>
						<button className={styles.button}>Сохранить</button>
					</div>
				</div>
			</div>
		</main>
	);
}
