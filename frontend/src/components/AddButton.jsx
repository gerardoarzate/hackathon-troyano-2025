import styles from './AddButton.module.css';
import addIcon from '../assets/ic--baseline-plus.svg';

const AddButton = () => {
    return (
        <div className={styles.addButton}>
            <img src={addIcon} className={styles.icon} />
        </div>
    );
};

export default AddButton;