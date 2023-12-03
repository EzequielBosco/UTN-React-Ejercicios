import './App.css'

function App() {

  return (
    <div className='div-register'>
      <h1>Registro</h1>
      <p>Completa el formulario</p>
      <form>
        <div className='form-group'>
          <label>Nombre</label>
          <input type='text' name='nombre' placeholder='Ingresa tu nombre' />
        </div>
        <div className='form-group'>
          <label>Apellido</label>
          <input type='text' name='apellido' placeholder='Ingresa tu apellido' />
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input type='email' name='email' placeholder='Ingresa tu email' />
        </div>
        <div className='form-group'>
          <label>Teléfono</label>
          <input type='number' name='telefono' placeholder='Ingresa tu teléfono' />
        </div>
        <div className='form-group'>
          <label>Contraseña</label>
          <input type='password' name='password' placeholder='Ingresa tu password' />
        </div>
        <div className='form-group'>
          <label>Confirmar contraseña</label>
          <input type='password' name='password1' placeholder='Repite tu password' />
        </div>
        <button type='submit'>Registrarme</button>
      </form>
    </div>
  )
}

export default App
