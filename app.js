//const fs = require('fs');//para libreria ya definida en Node.
//const fs = require('express');//no es una libreria propia de node, no es nativa. Son expansiones.
//const fs = require('./fs');//para librerias que creamos propias. Archivos definidos por nosotros mismos.
const argv=require('./config/yargs').argv;//tomo lo unico que me importa de ese archivo 'argv'.
var colors = require('colors');
// .command('listar','Imprime en consola la tabla de multiplicar.', {
// 	base:{
// 		demand: true,
// 		alias:'b'
// 	},
// 	limite:{
// 		alias:'l',
// 		default:10
// 	}
// })
// .help()
// .argv;

const {crearArchivo,listarTabla}=require('./multiplicar/multiplicar');

//let base='5';
//let data='';

// for (let i=0; i<10;i++){

// 	data+=(`${base} * ${i} = ${base*i}\n`);
// };


// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//   if (err) throw err;
//   //Sino existe error:
//   console.log('Archivo creado!');
// });
//console.log(process.argv);


//let argv2=process.argv;
//console.log(argv.limite);
let comando =argv._[0];

switch(comando){
	case 'listar':
		console.log('listar');
		listarTabla(argv.base, argv.limite);

		break;
		case 'crear':
		console.log('crear');
		 crearArchivo(argv.base)
	     .then(archivo=>console.log(`Archivo creado: ${archivo.green}`))
	     .catch(e=>console.log(e));
		break;
		default:
		console.log('comando no reconocido');


}


console.log(argv);


// let argv=process.argv; //Process.Argv sirve para mandar parametros por consola.
// let parametro =argv[2];
// let base=parametro.split('=')[1];//SPLIT sirve para separar elementos, transformar un String en un arreglo.

// console.log(base);

//  crearArchivo(base)
// 	.then(archivo=>console.log(`Archivo creado: ${archivo}`))
// 	.catch(e=>console.log(e));