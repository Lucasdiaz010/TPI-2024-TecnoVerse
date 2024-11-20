// middlewares/verificarRol.js
module.exports = (req, res, next) => {
  const usuario = req.session.usuario;

  // Verifica que el usuario esté autenticado y tenga un tipo de usuario válido
  if (usuario && usuario.tipo_usuario_id !== 3) { // Suponiendo que tipo_usuario_id = 1 es para alumnos
      return next(); // Permite el acceso
  }

};
