//Boton para agregar usuarios al sistema
function BotonUsuario() {
  function handleClick() {
      alert('Este boton agrega usuarios');
  }

  return (
    <button onClick={handleClick}>
        Agregar usuario
    </button>
  );
}
export default BotonUsuario;
