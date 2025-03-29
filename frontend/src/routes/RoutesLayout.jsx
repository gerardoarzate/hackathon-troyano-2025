import Navigation from "../components/Navigation";
import { Outlet } from "react-router";
import styles from './RoutesLayout.module.css';

const RoutesLayout = () => {
    return (
        <div className={styles.routesLayout}>
            <div className={styles.contentContainer}>
                <Outlet />
            </div>
            <Navigation />
        </div>
    );
};

export default RoutesLayout;