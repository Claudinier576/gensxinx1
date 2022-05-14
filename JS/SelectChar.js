var selects = document.getElementsByClassName('SelecChar');
var CharImgs = document.getElementsByClassName('CharImg');






for (let i = 0; i < CharImgs.length; i++) {
  CharImgs[i].id = i+"Char";
  console.log(CharImgs[i].id);
}
for (let i = 0; i < selects.length; i++) {
  selects[i].id = i+"select";
  console.log(selects[i].id);
  selects[i].addEventListener('change', function(){
    console.log(this.id);

    var CharElement = document.getElementById(i+"Char");
    console.log(CharElement);
    CharElement.src = './imgs/Personagens/Personagem_'+ this.value +'_miniatura.webp';

});

}


