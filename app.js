require('colors')
console.clear();

// const{mostrarMenu, pausa}= require('./helpers/mensajes');
const{inquirerMenu, pausa, leerInput} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

const main = async() => {
    console.log("Hola Mundo");
    let opt ='';
    const tareas = new Tareas();
    do {

        // const tarea = new Tarea("Comprar comida");
        // console.log(tarea);
        // opt = await inquirerMenu();
        // console.log({opt});
        // await pausa();


        //console.log('ajajaja');
        // if(opt !=='0')
        //     await pausa(); 

        opt = await inquirerMenu();
        switch (opt) {
             case '1':
                const desc = await leerInput('Descripcion:');
                console.log(desc);
                break;
             case '2':
                console.log(tareas._listado);
                break;
        
            default:
                break;
        }
        console.log('termino el menu');
        

    }while(opt!=='0');
    // mostrarMenu();
    //pausa();
}


main();