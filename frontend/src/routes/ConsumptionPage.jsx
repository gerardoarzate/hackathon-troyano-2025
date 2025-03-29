import Title from "../components/Title";
import Card from "../components/Card";
import styles from './ConsumptionPage.module.css';

const Consumption = () => {
    return (
        <div className={styles.consumptionPage}>
            <Title>Consumo</Title>
            <div className={styles.cardContainer}>
                <Card>
                    <p className={styles.cardTitle}>Información general</p>
                    <p className={styles.cardListElement}>Semana 1: 100 L</p>
                    <p className={styles.cardListElement}>Semana 2: 250 L</p>
                    <p className={styles.cardListElement}>Semana 3: 70 L</p>
                    <p className={styles.cardListElement}>Semana 4: 201 L</p>
                </Card>
            </div>
        </div>
    );
};

export default Consumption;