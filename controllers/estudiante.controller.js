//const { estudiantes } = require("../models");
const db = require("../models");
const Estudiante = db.estudiantes;


//Listado de estudiantes
exports.getEstudiantes = (req, res) => {

  const genero = req.query.genero;
    
  let condicion = genero ? {sexo: genero}:{};
  
  
  Estudiante.find(condicion).then( data => {
    res.send(data);
  }).catch( err => {
    res.status(500).send(
      {status:false, mensaje: err.message}
    )
  });
}


//Guardar un estudiantes 
exports.guardar = (req, res) => {
    const matricula = req.body.matricula;
    const apellidos = req.body.apellidos;
    const nombres = req.body.nombres;
    const edad = req.body.edad;
    const sexo = req.body.sexo;

    const est = new Estudiante({
        "matricula": matricula,
        "apellidos": apellidos,
        "nombres": nombres,
        "edad": edad,
        "sexo": sexo
    });

    est.save(est).then( data => {
        res.send(data);
    }).catch( err => {
        res.status(500).send({
            mensaje:
                err.message || "Error al guardar datos en la coleccion de estudiantes..."
        });
    });
}
