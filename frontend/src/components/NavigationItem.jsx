import { useNavigate } from 'react-router';
import styles from './NavigationItem.module.css';

const NavigationItem = ({ icon, label, path}) => {
    const navigate = useNavigate();

    return (
        <div className={styles.item} onClick={() => navigate(path)}>
            <div className={styles.iconContainer}>
                <img src={icon} />
            </div>
            <div className={styles.label}>{label}</div>
        </div>
    )
};

export default NavigationItem;