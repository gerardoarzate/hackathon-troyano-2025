import Title from "../components/Title";
import ProfileItem from "../components/ProfileItem";
import { Link } from "react-router";
import AlertsButton from "../components/IssuesButton";
import styles from './ProfilePage.module.css';

const ProfilePage = () => {
    return (
        <div className={styles.profilePage}>
            <Title>Profile</Title>
            <div className={styles.itemsContainer}>
                <ProfileItem label={'Nombre'} value={'Francisco'} />
                <ProfileItem label={'Apellidos'} value={'Luna Fernández'} />
                <ProfileItem label={'Correo electrónico'} value={'francisco@gmail.com'} />
            </div>
            <AlertsButton activeIssues={2} />
            <div className={styles.linkContainer}>
                <Link to={'/'}>Cerrar sesión</Link>
            </div>
        </div>
    );
};

export default ProfilePage;