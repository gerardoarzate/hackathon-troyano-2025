import Title from '../components/Title';
import Input from '../components/Input';
import BigButton from '../components/BigButton';
import { Link } from 'react-router';
import { useNavigate } from 'react-router';
import styles from './SignUpPage.module.css';

const SignUpPage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.signUpPage} >
            <Title>Registrarse</Title>
            
            <Input type={'text'} name={'nombre'} />
            <Input type={'text'} name={'e-mail'}/>
            <Input type={'password'} name={'password'} />

            <BigButton onClick={() => navigate('/home')}>Registrarse</BigButton>
            <div className={styles.loginContainer}>
                ¿Ya tienes cuenta?
                <Link to={'/'}>Inicia sesión</Link>
            </div>
        </div>
    );
};

export default SignUpPage;