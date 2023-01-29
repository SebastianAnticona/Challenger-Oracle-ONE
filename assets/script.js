let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];

const textoIngresado = document.querySelector(".texto_ingresado");
const textoResultado = document.querySelector(".texto_resultado");

let imagen = document.querySelector(".contenedor_imagen");
let textoImagen = document.querySelector(".contenedor_texto")
let btnCopiar = document.querySelector(".btnCopiar")




function cambio(){
    imagen.style.display="none";
    textoImagen.style.display="none";
    textoResultado.style.display="block";
    btnCopiar.style.display="block";
}

function vacio(){
    alert("No se encontro texto de encriptar/desencriptar");
    imagen.style.display="block";
    textoImagen.style.display="block";
    textoResultado.style.display="none";
    btnCopiar.style.display="none";
    return "";
}

function btnEncriptar() {
    const texto= encriptar(textoIngresado.value)
    textoResultado.value = texto;
}

function btnDesencriptar() {
    const texto = desencriptar(textoIngresado.value)
    textoResultado.value = texto;
}

function encriptar(stringEncriptado){
    stringEncriptado = stringEncriptado.toLowerCase();

    if(stringEncriptado == ""){
        vacio();
    }
    else{
        cambio()
        for(let i=0; i <codigo.length; i++){
            if(stringEncriptado.includes(codigo[i][0])){
                stringEncriptado = stringEncriptado.replaceAll(codigo[i][0],codigo[i][1])
            }
        }
        return stringEncriptado;
    }
    
}

function desencriptar(stringDesencriptado){
    stringDesencriptado = stringDesencriptado.toLowerCase();

    if(stringDesencriptado == ""){
        vacio();
    }
    else{
        cambio()
        for(let i=0; i <codigo.length; i++){
            if(stringDesencriptado.includes(codigo[i][0])){
                stringDesencriptado = stringDesencriptado.replaceAll(codigo[i][1],codigo[i][0])
            }
        }
        return stringDesencriptado;
    }
}

function Copiar(){
    navigator.clipboard.writeText(textoResultado.value);
}