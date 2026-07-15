import { use, useState } from "react";
import styles from "./LoginForm.module.css";
import { login } from "../services/auth";
import { toast } from "react-toastify";

import googleIcon from "../assets/icons/i_google.png";
import githubIcon from "../assets/icons/i_github.png";
import facebookIcon from "../assets/icons/i_facebook.png";

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError("Por favor llena todos los campos");
            return;
        }


        try {

            const user = await login(username, password);
            toast.success(`Bienvenido ${user.username}`);
            onLogin(user); //pasamos el usuario al dashboard
        } catch (error) {
            toast.error("Usuario o contraseña incorrectos");
        }

    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Inicia sesión</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className={styles.input}
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <a href="#" className={styles.link}>¿Olvidaste la contraseña?</a>

                <button className={styles.button} type="submit">Iniciar sesión</button>
                {error && <p className={styles.error}>{error}</p>}
            </form>

            <p>o inicia sesión con:</p>
            <div className={styles.social}>
                <button><img src={googleIcon} alt="Google" /></button>
                <button><img src={githubIcon} alt="GitHub" /></button>
                <button><img src={facebookIcon} alt="Facebook" /></button>
            </div>

            <p className={styles.register}>
                ¿Aún no tienes cuenta? <span>Regístrate</span>
            </p>
        </div>
    );
}

export default LoginForm;
