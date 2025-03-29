import Title from "../components/Title";
import DeviceCard from "../components/DeviceCard";
import AddButton from "../components/AddButton";
import styles from './DevicesPage.module.css';

const deviceList = [
    {
        name: 'Lavabo del baño',
        consumption: 0.5,
        powerPercentage: 85
    },
    {
        name: 'Lavabo de la cocina',
        consumption: 0.8,
        powerPercentage: 70
    },
    {
        name: 'Lavabo del baño',
        consumption: 0.3,
        powerPercentage: 88
    },
    {
        name: 'Lavabo de la cocina',
        consumption: 0.7,
        powerPercentage: 56
    }
]

const DevicesPage = () => {
    return (
        <div className={styles.devicesPage}>
            <Title>Dispositivos</Title>
            <div className={styles.devicesContainer}>
                { deviceList.map((item, i) => (
                    <DeviceCard
                        key={i}
                        name={item.name}
                        consumption={item.consumption}
                        powerPercentage={item.powerPercentage}
                    />
                )) }
            </div>
            <div className={styles.addButtonContainer}>
                <AddButton />
            </div>
        </div>
    );
};

export default DevicesPage;