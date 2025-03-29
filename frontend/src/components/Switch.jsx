import { useState } from 'react';
import styles from './Switch.module.css';
import icon from '../assets/ion--switch.svg';

const Switch = ({ initialState = true, onEnable, onDisable }) => {
    const [isEnabled, setIsEnabled] = useState(initialState);
    const [hasBeenPushed, setHasBeenPushed] = useState(false);

    if (hasBeenPushed) {
        if (isEnabled) {
            onEnable();
        } else {
            onDisable();
        }
    }

    return (
        <img 
            src={icon}
            className={styles.switch}
            style={{ opacity: isEnabled ? 1 : 0.5 }}
            onClick={() => {
                setIsEnabled(!isEnabled);
                if (!hasBeenPushed) {
                    setHasBeenPushed(true);
                }
            }}
        />
    )
};

export default Switch;