import styles from "./UsuarioForm.module.css";

const UsuarioForm = () => {
    return(
            <div className={styles.container}>
                <h2 className={styles.title}>Registro de usuario</h2>
                <form >
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

export default UsuarioForm;