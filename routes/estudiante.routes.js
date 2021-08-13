module.exports = app => {
    const estudiantes = require("../controllers/estudiante.controller");
  
    var router = require("express").Router();
  
  //Obtiene listado de estudiantes - filtra por sexo
  // http://localhost:8080/api/estudiantes/listado
  router.get("/listado", estudiantes.getEstudiantes);
  
  //Guardar un estudiante - (no condicion)
  // http://localhost:8080/api/estudiantes/guardar
  router.post("/guardar", estudiantes.guardar);
  
  // localhost:8080/api/estudiantes
  app.use('/api/estudiantes', router);
   
};
  