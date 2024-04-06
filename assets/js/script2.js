function numeroStickers() {
  let valor1 = Number(document.querySelector("#input-value1").value);
  let valor2 = Number(document.querySelector("#input-value2").value);
  let valor3 = Number(document.querySelector("#input-value3").value);
  let valor4 = Number(document.querySelector("#input-value4").value);
  let sumaStickers = valor1 + valor2 + valor3 + valor4;
  let texto = document.querySelector("#result-stickers");

  if (sumaStickers <= 10) {
    texto.innerHTML = "Llevas " + sumaStickers + " Stickers";
  } else {
    texto.innerHTML = "Llevas muchos Stickers";
  }
}
