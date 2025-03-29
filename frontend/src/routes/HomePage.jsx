import Title from "../components/Title";
import Card from "../components/Card";
import ConsumptionMeter from "../components/ConsumptionMeter";
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <Title>Inicio</Title>
            <div className={styles.meterContainer}>
                <ConsumptionMeter displayedLiters={114.6} maxLiters={230} />
                <p className={styles.centeredText}>Consumo actual</p>
            </div>
            <div className={styles.cardGrid}>
                <div className={styles.cardGridWideRow}>
                    <Card>Tu consumo fue un % mas/ menor que el mes anterior</Card>
                </div>
                <Card>
                    <p>Semana pasada</p>
                    <p>230L</p>
                </Card>
                <Card>
                    <p>Semana actual</p>
                    <p>114.6L</p>
                </Card>
                <Card>
                    <p>Mes pasado</p>
                    <p>784L</p>
                </Card>
                <Card>
                    <p>Mes actual</p>
                    <p>574L</p>
                </Card>
            </div>

        </div>
    );
};

export default HomePage;