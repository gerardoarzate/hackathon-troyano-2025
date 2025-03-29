import Switch from './Switch';
import styles from './DeviceCard.module.css';
import deviceIcon from '../assets/mdi--tap.svg';
import batteryIcon from '../assets/mdi--battery.svg';

const DeviceCard = ({ name, consumption, powerPercentage }) => {
    return (
        <div className={styles.deviceCard}>
            <div className={styles.iconContainer}>
                <img className={styles.icon} src={deviceIcon} />
            </div>
            <div className={styles.infoContainer}>
                <p className={styles.name}>{name}</p>
                <p className={styles.consumption}>Consumo hoy {consumption} L</p>
                <div className={styles.batteryContainer}>
                    <img src={batteryIcon} className={styles.batteryIcon} />
                    <p className={styles.powerIndicator}>{powerPercentage}%</p>
                </div>
            </div>
            <div className={styles.switchContainer}>
                <Switch onEnable={()=>console.log('enabled')} onDisable={()=>console.log('disabled')}/>
            </div>
        </div>
    );
};

export default DeviceCard;