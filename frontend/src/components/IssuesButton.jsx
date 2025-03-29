import styles from './IssuesButton.module.css';
import alertIcon from '../assets/si--alert-fill.svg';
import arrowIcon from '../assets/weui--arrow-filled.svg';

const IssuesButton = ({ activeIssues }) => {
    return (
        <div className={styles.issuesButton}>
            <div className={styles.iconContainer}>
                <img src={alertIcon} className={styles.icon} />
            </div>
            <div className={styles.infoContainer}>
                <p className={styles.issuesTitle}>Mis fallas</p>
                <p className={styles.issuesDetails}>Fallas activas: {activeIssues}</p>
            </div>
            <div className={styles.arrowContainer}>
                <img src={arrowIcon} />
            </div>
        </div>
    );
};

export default IssuesButton;