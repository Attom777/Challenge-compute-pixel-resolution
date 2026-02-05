function hello(){
  var v1 = Number(document.inputValeurs.i1.value);
  var v2 = Number(document.inputValeurs.i2.value);
  var v3 = Number(document.inputValeurs.i3.value);
  var pix = Math.sqrt((v2*v2) + (v3*v3));
  var pixd = Math.trunc(pix/v1);
  var pixt = Math.trunc(v2*v3);
  var pixz = Math.trunc(v2/v3);
  //alert(v1 + " " + v2 + " " + v3);
  //alert(pixd);
  document.getElementById('r1').innerHTML = 'RESULTAT (pixels par pouce) : ' + pixd;
  document.getElementById('r2').innerHTML = 'RESULTAT (Nombre de pixels) : ' + pixt /*+ " " + pixz*/;
}
