import './UserModal.css';

const UserModal = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className=''>{title}</h2>

        <div className="section-title">Datos Personales</div>
        <div className="form-row"><label>Nombre:</label> <input type="text" placeholder="Ej. Andres Roblez" /></div>
        <div className="form-row"><label>Usuario:</label> <input type="text" placeholder="Ej. Andres2047" /></div>
        <div className="form-row"><label>Correo:</label> <input type="email" placeholder="Ejemplo@gmail.com" /></div>
        <div className="form-row"><label>Contraseña:</label> <input type="password" /></div>
        <div className="form-row"><label>Rol:</label>
            <select>
                <option value="user">Usuario</option>
                <option value="admin">Administrador</option>
            </select>
        </div>

        <div className="section-title">Datos Opcionales</div>
        <div className="form-row"><label>Teléfono:</label> <input type="text" placeholder="951 673 52 12" /></div>
        <div className="form-row"><label>Dirección:</label> <input type="text" placeholder="Av. Reforma 222B" /></div>

        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose}>Descartar Cambios</button>
          <button className="Boton-Verde">Registrar</button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
