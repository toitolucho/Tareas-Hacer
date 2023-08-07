require('colors')
console.clear();

// const{mostrarMenu, pausa}= require('./helpers/mensajes');
const{inquirerMenu, pausa} = require('./helpers/inquirer');


const main = async() => {
    console.log("Hola Mundo");
    let opt ='';
    do {

        opt = await inquirerMenu();
        console.log({opt});
        await pausa();


        console.log('ajajaja');
        // if(opt !=='0')
        //     await pausa(); 

    }while(opt!=='0');
    // mostrarMenu();
    //pausa();
}


main();