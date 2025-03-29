import styles from './BigButton.module.css';

const BigButton = ({ children, onClick }) => {
    return (
        <button className={styles.bigButton} onClick={onClick}>{children}</button>
    )
};

export default BigButton;