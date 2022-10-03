class Calculadora{
  
    invertirNumero(){ //ya esta
        let num,digito,invertido="";
        let input = document.getElementById("result");
        num=parseFloat(input.value);
        while(num>0){
            digito= num % 10;
            num = Math.floor(num / 10);
            invertido= invertido+digito.toString();
        }
        input.value=invertido;
    }
    /*base10_2(){ //ya esta
        let digito,num,pos=0,numeros=[],base2="";
        let input = document.getElementById("result");
        num=parseInt(input.value);
        while(num>0){
        digito=num%2;
        num = Math.floor(num / 2);
        numeros[pos]=digito;
        pos = pos +1;}
    for(let ind=pos-1; ind>=0; ind--){
        base2=base2+numeros[ind].toString()
    }
    input.value=base2

 }*/
 base10_2(){
  let result= document.getElementById("result")
  let num = result.value
  let binario = [] , i=0,ini=0,bin=""
  if(isNaN(num) == false){
      if(num >=0){
          while(num >= 1 ){
              binario[i] = num % 2 
              num = Math.floor(num / 2)
              i++
          }
          console.log(binario)
          for(i=binario.length - 1 ; ini <= i ; i--){
              bin = bin + binario[i]
          }
          result.value=` la conversión es `+bin
      }else{
          result.value=`Error dato incorrecto`
      }
  }else{
      alert(`Dato incorrecto`)
  }
}

 /*buscarArreglo(){ //ya esta
    const Texto="Soy una taza, una tetera, una cuchara y un cucharon, un plato hondo, un plato llano, un cuchillito y un tenedor, soy un salero, azucarera, la batidora y la olla express"
    let input = document.getElementById("result")
    let posicion=input.value
    console.log("El arreglo es: '" + Texto + "'")
    input.value=Texto[posicion]
 }*/

 buscarArreglo(){ //ya esta
       let num1 = document.getElementById("result")
    let numero = num1.value
    let num2 = numero.split(";")
    let i=0, x
    let buscar = prompt("que dato quiere eliminar")
    for(let j=0;j<=num2.length;j++){ 
      if(buscar == j) {
          x=num2[j]
          i=1
      }

    }
    if (i==1){
        num1.value = ` El arreglo: ${buscar} es: ${JSON.stringify(x)}`
    }else{
        num1.value="no se encuentra en el arreglo"
  }
}

 /*buscarArreglo(){ //ya esta
  let input=document.getElementById("result")
    let text, resp
    let termino=prompt("ingrese el valor a buscar")
    text=input.indexOf(termino)
    if(text!== -1){
      resp= text
    } 
    input.value= "En la posicion: ${termino} del arreglo: ${JSON.stringify(cadena)} se encuentra el caracter:  ${resp}" 
  }

/* buscarArreglo(){
  let input = document.getElementById("result")
    let cadena = input.value,c=0,enc=0
    let valor = prompt("ingrese el valor a buscar")
    let buscado= parseInt(valor)
    for(let i=0;i<=cadena.length;i++){ 
   
        if(cadena[i] == buscado){
            enc = buscado
            c==1
        }
        }
        if (c==1){
          input.value = `El dato: ${buscado} se encuentra en la posicion: ${enc} del arreglo ${JSON.stringify(cadena)}`
      }
      else{
          input.value = `El dato: ${buscado} no se encuentra en el arreglo ${JSON.stringify(cadena)}`
      }
 }*/

 divisores() { //ya esta
    let num, resp="";
    let input = document.getElementById("result");
    num=parseFloat(input.value);
      for (let i =1; i<=num; i++){
          if (num % i == 0) {
            resp += `${i.toString()}\t`
          } }
        input.value=resp
      }
    

  perfecto() { //ya esta
    let n, result;
    let input= document.getElementById("result")
    n=parseFloat(input.value);
    let i = 1, acum = 0
    while (i < n) {
      if (n % i == 0) {
        acum = acum + i}
      i++}
    if (acum == n) {
      result = "Numero ingresado ." + n + ". es Perfecto"
    } else {
      result = "Numero ingresado ." + n + ". no es perfecto"
    }
    input.value=result
  }

  primo(){ //ya esta
    let result, resultado
    let input= document.getElementById("result")
    let num=parseInt(input.value);
    if (num==1){
      result =1 //No es primo xq es 1
     }else
    if(num!==1){
        for(let i=2;i<num;i++){
          if(num%i==0) {
          result =0 //No es primo xq tiene multiplos, solo son 2 divisores
          } }}
    if(result==1){
      resultado = "Numero 1 no es primo"
    } else if(result==0) {
      resultado = "Numero ingresado no es primo"
    }else {
      resultado = "Numero ingresado es primo"}
      input.value=resultado
  }
  

  /*base10_16(){ //ya esta
    let decimal, hexadecimal
    let input = document.getElementById("result")
    decimal= parseInt(input.value);
    hexadecimal= decimal.toString(16)
    input.value =hexadecimal
  }*/
  base10_16(){
    let result= document.getElementById("result")
    let numeros=[],pos=0,base16="",aux=0
    let num = parseInt(result.value)
    console.log(num)
    result.value=  `El número` +num
    if (isNaN(num) == false){
        if (num >= 0){
            while (num >= 16){
                numeros[pos] = num % 16
                num = Math.floor(num / 16)
                pos= pos + 1 
            }
            numeros[pos]=num
            for (aux= numeros.length - 1; aux >= 0; aux-- ){
                switch(numeros[aux]){
                    case 10:
                        base16 = base16 + "A"
                        break
                    case 11:
                        base16 = base16 + "B"
                        break
                    case 12:
                        base16 = base16 + "C"
                        break
                    case 13:
                        base16 = base16 + "D"
                        break
                    case 14:
                        base16 = base16 + "E"
                        break
                    case 15:
                        base16 = base16 + "F"
                        break
                default:
                    base16 = base16 + numeros[aux]
                }
            }
            console.log(base16)
            result.value+=` convertido a base 16 es: `+base16
        }else{
            result.value=`error datos incorrectos`
        }
    }else{
        alert(`Valor incorrecto`)
    }
}

  /*base10_8(){ //ya esta
      let decimal, octal
      let input = document.getElementById("result")
      decimal= parseInt(input.value);
      octal=decimal.toString(8);
      input.value=octal
  }*/
  base10_8(){
    let result = document.getElementById("result")
    let num = result.value
    let octal= "", conta = 0 
    result.value=`La conversión a base 8 es: `
    if(isNaN(num) == false){
        if(num >=0){
                while(num > 0){
                    octal = (num % 8) + octal
                    num = Math.floor(num / 8 )
                }
                result.value+= octal
        }else{
            result.value=`Error dato incorrecto`
        }
    }else {
        alert(`Valor incorrecto`)
    }
} 

  base2_10(){ //ya esta
    let i=0, num, binario, decimal=0;
    let input=document.getElementById("result")
    binario= parseInt(input.value);

    while(binario!=0){
      num= binario%10;
      binario= Number.parseInt(binario/10);
      decimal=decimal+num*Math.pow(2,i);
      ++i;
    }input.value=decimal
  }

  /*base2_16(){ //ya esta
      let hexadecimal, binario=0, num=0;
      let input = document.getElementById("result")
      binario= parseInt(input.value);
      num= parseInt(binario,2)
      hexadecimal=num.toString(16)
      input.value=hexadecimal
  }*/
  base2_16(){
    let entrada = document.getElementById("result")
    let num= entrada.value
    let  alm=[],i,cont=0,arreglo=[],total=0,pos=0,base16="",resp,bandera=true,c=0
    console.log(num.length)
    while(bandera == true && c < num.length){
        if(parseInt( num[c]) == 1 || parseInt( num[c]) == 0){
            console.log(num[c])
            bandera=true
        }else{
            bandera= false
        }
        c++
    }
    console.log(bandera)
    if(isNaN(num) == false){
        if( bandera == true){
            for(i=0;i<num.length;i++){
                alm[i]=num.charAt(i)
            }
            for(i=0;i<alm.length;i++){
                if(alm[i]==1){
                    cont = cont+Math.pow(2, alm.length-i-1)
                }
            }
            while ( cont > 0){
            total = cont % 16;
            cont = Math.floor(cont/ 16);
            switch (total > 9 || total < 16){
                case total == 10:
                    total = "A";
                    break;
                case total == 11:
                    total = "B";
                    break;
                case total == 12:
                    total = "C";
                    break;
                case total == 13:
                    total = "D";
                    break;
                case total == 14:
                    total = "E";
                    break;
                case total == 15:
                    total = "F";
                    break;     
            }
            arreglo.unshift(total)
        }
        if(total ){
            entrada.value = "La base 16 es: "+ arreglo.join('')
        }
      }else{
        result.value= `Dato ingresado incorrecto`
      }
  }else{
    alert(`Error, se ha ingresado un caracter`)
  }
}

 /*palindroma(){ //ya esta
      let texto, invertido, resp
      let input = document.getElementById("result")
      texto=input.value
      invertido=texto.split("").reverse().join("")
      if(texto==invertido){
        resp="La palabra es palindroma"
      }else{
        resp="La palabra no es palindroma"
      }

      input.value=resp
  }*/
  palindroma(){
    let result= document.getElementById("result")
    let log
    let newcadena= "", invertida=""
    let cadena =result.value
    if(isNaN(cadena) == true ){
       for(let log =cadena.length-1;log >= 0 ;log--){
         if (cadena[log] !== " " && (cadena[log] !== "," && cadena[log] !== ";")){
            newcadena = cadena[log] + newcadena
            invertida = invertida + cadena[log]
         }
       }
       console.log(newcadena,invertida)
       if(newcadena == invertida){
        result.value=` la palabra ` +cadena+ ` es palindroma`
       }else{
        result.value=`La palabra ` +cadena+ ` no es palindroma`
       }
    }else{
        alert(`Ingrese datos validos`)
    }
  }
  /*palindroma(){
    let nuevacadena="", invertida=""
    let input = document.getElementById("result")
    let cadena=result.value
    if(isNaN(cadena)== true){
      for(let log=cadena.length-1;log>=0;log--){
        if (cadena[log] !== " "){
          nuevacadena=cadena[log] + nuevacadena
          invertida = invertida + cadena [log]
        }
      }
      if(nuevacadena == invertida){
        result.value='lacadena "${cadena.toString()}" es palindroma'
      }else{
        result.value='la cadena "${cadena.toString()}" no es palindroma'
      }
    }else{
      result.value='Error: ingreso un numero'
    }
     input.value=result
}*/
/*palindroma(){
  let frase,frase2="",frase3=""
  let entrada =document.getElementById("num")
  frase = entrada.value
  for(let i=frase.length-1;i>=0;i--){
      if(frase[i]!=" "){
          frase3=frase[i]+frase3
          frase2=frase2+frase[i]
      }
  }
  if(isFinite(frase)){
      entrada.value = "introduzca una palabra"
  }else{
      if(frase3==frase2){
          entrada.value = "La palabra  "+ frase+ " es polindromo"
      }else{
          entrada.value = " La palabra "+ frase+ " no es polindromo"
      }
  }
}*/



  
  
  invertirfrase(){ //ya esta
      let texto, invertido
      let input = document.getElementById("result")
      texto=input.value
      invertido=texto.split("").reverse().join("")
      input.value=invertido
  }

   mayorarreglo(){//ya esta
    var Arreglo = "Gato;Perro;Conejo;Avestruz;Araña;Cerdo;Caballo;Cebra;Camello;Hormiga;Cocodrilo;Iguana;Tortuga;Pez;Pelicano;Tiburon;Vaca;Oveja;Cabra;Lobo;Gallo;Gallina;Loro;Mariposa;Aguila;Serpiente"
    let separador=";" 
    let input=document.getElementById("result")
    let Arreglo2=input.value //cambiar a Arreglo para hacerlo automatico
    let  resp, max=0, x=0, y=0, z=0, a=0
    let arraycadena = Arreglo2.split(separador) //cambiar a Arreglo para hacerlo automatico
    x= arraycadena[0] //Toma el primer arreglo
    y=arraycadena[1]
    for(let i = 2; i<arraycadena.length; i++){
      if(x.length < y.length){
        z=y
        x=arraycadena[i]
      }else{
        z=x
        y=arraycadena[i]
      }
      
        //
    }resp= "El arreglo mas largo es: " + z
    input.value=resp
  }
 /* mayorarreglo(){
    let arreglo,mayor,dato,cont,i=0
    let input = document.getElementById("result")
    dato=input.value
    arreglo=dato.split(",")
    mayor=0
    if(input.value=""){
      input.value="ingrese dato"
    }else{
      for(let i=o;i<arreglo.length;i++){
        if(isNaN(arreglo[i])){
          input.value="solo numeros"
          
        }else{
          if(i==0){
            mayor=arreglo[i]
          }
          if(parseFloat(arreglo[i])>mayor){
            mayor=arreglo[i]
          }
          input.value="el mayor arreglo es ="+ mayor
        }
      }
    }
  }*/
    
  
  fibonacci(){ //ya esta
    let num, fib=0, a=0, b=1; 
    let input = document.getElementById("result");
    num=parseFloat(input.value);
    
    if(num <= 1) return num;
    for (let i =2; i<=num; i++){
      fib= a + b;
      b=a;
      a=fib;
      input.value=fib;
    }
  }
  

  contarpalabras(){ //ya esta
    let tex
    let input=document.getElementById("result")
    tex=input.value;
    input.value=tex.length;
  }

  promedio(){//ya esta
    var Arreglo = "Gato;Perro;Conejo;Avestruz;Araña;Cerdo;Caballo;Cebra;Camello;Hormiga;Cocodrilo;Iguana;Tortuga;Pez;Pelicano;Tiburon;Vaca;Oveja;Cabra;Lobo;Gallo;Gallina;Loro;Mariposa;Aguila;Serpiente"
    let separador=";" 
    let input=document.getElementById("result")
    let Arreglo2=input.value //cambiar a Arreglo para hacerlo automatico
    let  resp, sum=0, x=0, y=0, promedio=0
    let arraycadena = Arreglo2.split(separador) //cambiar a Arreglo para hacerlo automatico
    for(let i = 0; i<arraycadena.length; i++){
            x=arraycadena[i]
            y=x.length
            sum=sum+y
    }
    promedio=sum/arraycadena.length
    resp= "El promedio es: " + parseFloat(promedio)
    input.value=resp
  }

  contarcaracteres(){ //ya esta
    let text,contvoc=0, contcons=0, contnum=0, countcaract=0, resp
    let input=document.getElementById("result")
    text=input.value;
    
    for(let i=0; i< text.length;i++){
      if(text[i]=="a"||text[i]=="e"||text[i]=="i"||text[i]=="o"||text[i]=="u"){
        contvoc++
      }else if(text[i]=="0"||text[i]=="1"||text[i]=="2"||text[i]=="3"||text[i]=="4"||text[i]=="5"||text[i]=="6"||text[i]=="7"||text[i]=="8"||text[i]=="9"){
        contnum++
      }else if(text[i]=="b"||text[i]=="c"||text[i]=="d"||text[i]=="f"||text[i]=="g"||text[i]=="h"||text[i]=="j"||text[i]=="k"||text[i]=="l"||text[i]=="m"||text[i]=="n"||text[i]=="p"||text[i]=="q"||text[i]=="r"||text[i]=="s"||text[i]=="t"||text[i]=="w"||text[i]=="x"||text[i]=="y"||text[i]=="z"){
        contcons++
      }else {
        countcaract++
      }
    }
    resp="Existen " + contvoc + " vocales, " + contnum + " numeros, " + contcons + " consonantes y "  + countcaract + " caracteres especiales en el arreglo"
    input.value=resp;
  }


  

  buscarcadena(){
    let result = document.getElementById("result")
    let cadena = result.value
    let enco_cadena = prompt("ingrese cadena a buscar")
    let bandera=false, ini=0, pos1 = 0, pos2 = 0 , new_cadena="",ini_posicion = 0 
    while(ini < cadena.length && bandera == false){
        if( cadena[ini] == enco_cadena[0]){
            pos1 = ini 
            ini_posicion= pos1
            pos2 = 0
            while(pos2 < enco_cadena.length){
                if(cadena[pos1] == enco_cadena[pos2]){
                   new_cadena = new_cadena + cadena[pos1]
                }
                pos2++
                pos1++ 
            }
            if(new_cadena == enco_cadena){
                bandera= true 
            }
        }
        ini++
    }
    if(bandera == true){
        pos1 = pos1 - 1
        alert(`la cadena "${enco_cadena.toString()}" fue encontrada`)
        result.value=`inicia en la posición ${ini_posicion.toString()} y finaliza en la posición ${pos1.toString()}`
    }else{
        result.value=`la cadena no ha sido encontrada `
  }
  }
    
  Limpiar(){ //ya esta
    let input=document.getElementById("result")
    input.value=``
  }
  
  EliminarArreglo(){//ya esta
    var Arreglo = "Gato;Perro;Conejo;Avestruz;Araña;Cerdo;Caballo;Cebra;Camello;Hormiga;Cocodrilo;Iguana;Tortuga;Pez;Pelicano;Tiburon;Vaca;Oveja;Cabra;Lobo;Gallo;Gallina;Loro;Mariposa;Aguila;Serpiente"
    let separador=";" 
    let num1 = document.getElementById("result")
    let numero = num1.value
    //let num2= numero.split   // 
    let num2 = numero.split(";")
    let i=0, x
    let eliminar = prompt(" que dato quieres eliminar")
    //let Arreglo2=input.value //cambiar a Arreglo para hacerlo automatico
    let arraycadena = numero.split(separador) //cambiar a Arreglo para hacerlo automatico
    for(let j=0;j<=num2.length;j++){ 
      if(eliminar == j) {
          x=num2[j]
          i=1
      }

    }
    //if (i==1){
    //    num1.value = ` El arreglo: ${eliminar} es: ${JSON.stringify(x)}`
    //}else{
    //    num1.value="no se encuentra en el arreglo"
  //}
    arraycadena= arraycadena.filter((item) => item!==x)
    num1.value=arraycadena
    num1.value = ` El arreglo sin: ${x} es: ${JSON.stringify(arraycadena)}`
  }
  /*EliminarArreglo(){
    let num1 = document.getElementById("result")
    let numero = num1.value
    let num2 = numero.split(",")
    let eliminar = prompt("que dato quiere eliminar")
    let i = num2.indexOf(eliminar)
    if (i>=0){
        num2.splice(i, 1)
        num1.value = `El dato: ${eliminar} se encontraba en la posicion: ${i} y fue eliminado ${JSON.stringify(num2)}`
    }else{
        num1.value="no se encuentra en los datos que ingreso"
  }
}*/


  
 /* InsertarArreglo(){ //ya esta
    var Arreglo = "Loro;Mariposa;Aguila;Serpiente"
    let separador=";" 
   // let input=document.getElementById("result")
    let num1 = document.getElementById("result")
    let numero = num1.value
    let num2 = numero.split(";")
    let i=0, x
    let ingresar = prompt(" que dato quieres ingresar")
    let arraycadena = Arreglo.split(separador)
    for(arraycadena=num2.length;){ 
      if(insertar = j) {
          x=num2[j]
          i=1
      

    
     }

}
input.value=Arreglo
}*/
    //let arraycadena = Arreglo.split(separador) //cambiar a Arreglo para hacerlo automatico
    //arraycadena= arraycadena.filter((item) => item!==num)
    
    //Arreglo= Arreglo + separador + num

  

  InsertarArreglo(){
    let arreglo,valor,posicion;
    let input = document.getElementById("result")
    arreglo=input.value
    arreglo=arreglo.split(";")
    valor=prompt("Ingrese el valor a insertar")
    posicion= prompt("Ingrese la posicion en la que desea insertar el valor")
    arreglo.splice(posicion,0,valor)
    input.value= `new arreglo: ${arreglo}`
}
}
  /* 
    for(let i=0;i<arreglo.length;i++){
      if(i==posicion){
        array=arreglo.length-i
        arreglo2[i]=valor;
        let k=i
        arreglo[i].push(valor)
        for (let j=0; j<array; j++){ 
          for(k;k<arreglo.length;k++){
            arreglo1[j]=arreglo[k]
          }}
        
      }
    }
    arreglot= arreglo2.concat(arreglo1)
    input.value= `new arreglo: ${arreglot}`
  }*/
  


let cal = new Calculadora()

const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});


 





