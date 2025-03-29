import styles from './ConsumptionMeter.module.css';

const ConsumptionMeter = ({ maxLiters, displayedLiters }) => {
    const fillPercentage = (displayedLiters/maxLiters)*100;
    return (
        <div className={styles.consumptionMeter}>
            <p className={styles.display}>{displayedLiters} L</p>
            <div className={styles.fill} style={{ height: `${fillPercentage}%`}}></div>
            <p className={styles.displayShadow}>{displayedLiters} L</p>
        </div>
    );
};

export default ConsumptionMeter;