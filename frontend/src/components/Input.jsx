import { useState } from 'react';
import styles from './Input.module.css';

const Input = ({ type, name }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <label className={styles.label} >
            {name}
            <input className={styles.input} type={type} value={value} onChange={handleChange}/>
        </label>
    );
};

export default Input;