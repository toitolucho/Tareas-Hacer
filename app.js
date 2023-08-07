require('colors')
console.clear();

// const{mostrarMenu, pausa}= require('./helpers/mensajes');
const{inquirerMenu, pausa, leerInput, mostrarListadoCheklist, listadoTareasBorrar, confirmar} = require('./helpers/inquirer');
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
                tareas.listarPendientesCompletadas(true);
                break;
            case '4':
                tareas.listarPendientesCompletadas(false);
                break;
            case '5'://completado I pendiente
                const ids =await mostrarListadoCheklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
                break;
            case '6'://Borrar
                const id =await listadoTareasBorrar(tareas.listadoArr);
                if(id!=='0'){
                    const ok=await confirmar('¿Está seguro?');
                    if(ok){
                    tareas.borrarTarea(id);
                    console.log('Tarea borrada');
                    }
                }

            break;
        }
        guardarBD(tareas.listadoArr);//nosotros guardamos en todo momento
        await pausa();       

    }while(opt!=='0');    
}
main();