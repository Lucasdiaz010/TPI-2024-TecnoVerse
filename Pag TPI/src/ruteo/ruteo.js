const express = require('express');
const router = express.Router();
const mainController = require('../controladores/controlador');
const authMiddleware = require('../middlewares/authMiddleware'); // Importa el middleware
const veralumnado = require('../middlewares/veralumnado'); // Importa el middleware
const veralumno = require('../middlewares/veralumno'); // Importa el middleware
 
// Rutas de registro y acceso público
router.get('/registrarse', mainController.registrarse);
router.get('/acceder', mainController.acceder); // Página de acceder
router.post('/iniciar', mainController.iniciar); // Acción para iniciar sesión


// Rutas protegidas por el middleware de autenticación
router.get('/', authMiddleware, mainController.index); // Página principal
router.get('/pagdeinicio', authMiddleware, mainController.pagdeinicio); // Página de inicio
router.get('/notas',veralumnado, authMiddleware, mainController.notas); // Página de las notas
router.get('/perfil', authMiddleware, mainController.perfil); // Página del perfil
router.get('/gestionar',veralumno, authMiddleware, mainController.gestion); // Página de gestionar alumnos
router.get('/curso/:cursoId/materia/:materiaId', authMiddleware, mainController.alumnos); // Página de alumnos
router.get('/materias/:id', authMiddleware, mainController.materias); // Página de materias

router.post('/validar', mainController.validar);

// Ruta para guardar las notas
router.post('/curso/:cursoId/materia/:materiaID', authMiddleware, mainController.guardarNotas);

// Ruta para cerrar sesión
router.post("/cerrar-sesion", authMiddleware, mainController.cerrar);

module.exports = router;