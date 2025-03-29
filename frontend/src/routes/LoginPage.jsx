import { Link } from "react-router";
import { useNavigate } from 'react-router';
import Input from "../components/Input";
import Title from "../components/Title";
import BigButton from '../components/BigButton';
import styles from './LoginPage.module.css';
import logo from '../assets/HydroMind.svg';

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.loginPage} >
            <div className={styles.logoContainer}>
                <img src={logo} className={styles.logo} />
                <Title>Iniciar Sesión</Title>
            </div>
            <Input type={'text'} name={'e-mail'}/>
            <Input type={'password'} name={'password'} />
            <BigButton onClick={() => navigate('/home')}>Iniciar sesión</BigButton>
            <div className={styles.signUpContainer}>
                ¿No tienes cuenta?
                <Link to={'/signup'}>Registrate aquí</Link>
            </div>
        </div>
    );
};

export default LoginPage;