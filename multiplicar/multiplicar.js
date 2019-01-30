
const fs = require('fs');
var colors = require('colors');


let listarTabla=(base,limite)=>{

	console.log('============='.green);
	console.log(`tabla de ${base}`.green);
	console.log(`=============`);

for (let i=0; i<=limite;i++){

			console.log(`${base} * ${i} = ${base*i}\n`);
		};


}




let crearArchivo=(base)=>{

	return new Promise((resolve,reject)=>{

		
		      let data='';

		for (let i=0; i<10;i++){

			data+=(`${base} * ${i} = ${base*i}\n`);
		};

		  if(!Number(base)){
			reject(`El valor introducido ${base} no es un numero`);
			return;
		}else{
		  	resolve(`tabla-${base}.txt`);
		  }
		


	});

}

module.exports={
	crearArchivo,
	listarTabla
}