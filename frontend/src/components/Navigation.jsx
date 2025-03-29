import NavigationItem from './NavigationItem';
import styles from './Navigation.module.css';
import homeIcon from '../assets/material-symbols--home.svg';
import devicesIcon from '../assets/mdi--water.svg';
import statsIcon from '../assets/bx--stats.svg';
import profileIcon from '../assets/mdi--user.svg';

const items = [
    {
        icon: homeIcon,
        label: 'Inicio',
        path: 'home'
    },
    {
        icon: devicesIcon,
        label: 'Dispositivos',
        path: 'devices'
    },
    {
        icon: statsIcon,
        label: 'Consumo',
        path: 'consumption'
    },
    {
        icon: profileIcon,
        label: 'Perfil',
        path: 'profile'
    }
];

const Navigation = () => {    
    return (
        <div className={styles.navigation}>
            {items.map((item, i) => (
                <NavigationItem 
                    key={i}
                    icon={item.icon}
                    label={item.label}
                    path={item.path}
                />
            ))}
        </div>
    );
};

export default Navigation;