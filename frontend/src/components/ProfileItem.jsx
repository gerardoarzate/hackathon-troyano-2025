import styles from './ProfileItem.module.css';

const ProfileItem = ({ label, value }) => {
    return (
        <div className={styles.profileItem}>
            <p className={styles.label}>{label}</p>
            <p className={styles.value}>{value}</p>
        </div>
    );
};

export default ProfileItem;