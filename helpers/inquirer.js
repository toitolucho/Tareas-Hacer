const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message :"Que desea hacer?",
        choices : [
            {
                value:1,
                name: '1 Crear Tarea'
            },
            {
                value:2,
                name: '2 Listar Tareas'
            },
            {
                value:3,
                name: '3 Listar Tareas completadas'
            },
            {
                value:4,
                name: '4 Listar Tareas pendientes'
            },
            {
                value:5,
                name: '5 Completar Tareas'
            },
            {
                value:6,
                name: '6 Borrar Tareas'
            },
            {
                value:0,
                name: '0 salir'
            }
        ]
    }
];


const inquirerMenu =async() =>{

    
        console.clear();
        console.log("===============================".green);
        console.log("Seleccione Opcion".green);
        console.log("===============================\n".green);

        const {opcion} = await inquirer.prompt(preguntas);

        return opcion;
}


const pausa = async() =>{
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.green} para continuar`
        }
    ]
    console.log('\n');
    await inquirer.prompt(question);
}

module.exports = {
    inquirerMenu, pausa
}