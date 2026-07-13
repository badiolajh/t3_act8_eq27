import LoginForm from "../components/LoginForm";
import fondo from "../assets/img/fondo_login.png";
import logo from "../assets/img/logo_login.png";
import styles from "./LoginPage.module.css";

export default function LoginPage({ onLogin }) {
    return (
        <div className={styles.container}>
            {/* Columna izquierda */}
            <div
                className={styles.left}
                style={{ backgroundImage: `url(${fondo})` }}
            >
                <img src={logo} alt="Logo" className={styles.logo} />
            </div>

            {/* Columna derecha */}
            <div className={styles.right}>
                <LoginForm onLogin={onLogin} />
            </div>
        </div>
    );
}
