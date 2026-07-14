//Boton para Confirmar usuarios al rellenar el formulario
function BotonRegistrarUsuario() {
  function handleClick() {
    alert('Este boton registra los usuarios al rellenar el formulario')
  }
  return (
    <button onClick={handleClick}>
      Registrar
    </button>
  );
}
export default BotonRegistrarUsuario;
