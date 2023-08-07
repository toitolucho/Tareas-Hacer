require('colors')
console.clear();

// const{mostrarMenu, pausa}= require('./helpers/mensajes');
const{inquirerMenu, pausa, leerInput} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
const { guardarBD, leerDb } = require('./helpers/guardarArchivo');


const main = async() => {
    console.log("Hola Mundo");
    let opt ='';
    const tareas = new Tareas();
    do {

        opt = await inquirerMenu();
        switch (opt) {
             case '1':
                const desc = await leerInput('Descripcion:');
                console.log(desc);
                tareas.crearTarea(desc);
                break;
             case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.li
                break;
        
        
            default:
                break;
        }
        //console.log('termino el menu');
        

    }while(opt!=='0');
    // mostrarMenu();
    //pausa();
}


main();