// Set tab areaTab sebagai tab default yang aktif
document.getElementById("areaTab").classList.add("active-tab");
document.getElementById("areaTabContent").classList.remove("hidden");

function showTab(tabName) {
  // Sembunyikan semua tab content
  document.getElementById("areaTabContent").classList.add("hidden");
  document.getElementById("perimeterTabContent").classList.add("hidden");

  // Hilangkan penanda pada semua tab
  document.getElementById("areaTab").classList.remove("active-tab");
  document.getElementById("perimeterTab").classList.remove("active-tab");

  // Tampilkan tab content yang dipilih dan beri penanda pada tab yang aktif
  document.getElementById(tabName + "Content").classList.remove("hidden");
  document.getElementById(tabName).classList.add("active-tab");
}

function calculate(type) {
  var sideLength;
  var resultId;
  var valueId;
  var exampleId;

  if (type === "area") {
    sideLength = parseFloat(document.getElementById("sideLength").value);
    resultId = "areaResult";
    valueId = "areaValue";
    exampleId = "areaExample";
  } else {
    sideLength = parseFloat(
      document.getElementById("sideLengthPerimeter").value
    );
    resultId = "perimeterResult";
    valueId = "perimeterValue";
    exampleId = "perimeterExample";
  }

  var resultDiv = document.getElementById(resultId);
  var valueSpan = document.getElementById(valueId);
  var exampleParagraph = document.getElementById(exampleId);

  if (!isNaN(sideLength)) {
    var area = sideLength * sideLength;
    var perimeter = 4 * sideLength;

    if (type === "area") {
      valueSpan.innerText = area;
      exampleParagraph.innerText =
        "Luas = " + sideLength + " * " + sideLength + " = " + area;
    } else {
      valueSpan.innerText = perimeter;
      exampleParagraph.innerText =
        "Keliling = 4 * " + sideLength + " = " + perimeter;
    }

    // Tampilkan hasil, sembunyikan pesan error
    resultDiv.classList.remove("hidden");
  } else {
    // Tampilkan pesan error, sembunyikan hasil
    resultDiv.classList.add("hidden");
    alert("Masukkan panjang sisi yang valid.");
  }
}

function resetInput(inputId, resultId, exampleId) {
  document.getElementById(inputId).value = "";
  document.getElementById(resultId).classList.add("hidden");
  document.getElementById(exampleId).innerText = "";
}
