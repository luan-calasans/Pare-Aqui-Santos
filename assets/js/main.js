(function () {
  const $ = q => document.querySelector(q);

  function renderGarage() {
    const garage = getGarage();
    $("#garage").innerHTML = "";
    garage.forEach(c => addCarToGarage(c))
  };

  function addCarToGarage(car) {
    const regex = /^([A-Z]{3}-\d{4})|([A-Z]{3}\d{1}[A-Z]{1}\d{2})$/; // Expressão regular para validar a placa do carro (padrão antigo e Mercosul)
    if (!regex.test(car.licence)) return; // Se a placa não for válida, não adiciona o carro à garagem

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${car.name}</td>
      <td>${car.licence}</td>
      <td data-time="${car.time}">
        ${new Date(car.time)
        .toLocaleString('pt-BR', {
          hour: 'numeric', minute: 'numeric'
        })}
      </td>
      <td>
        <button class="delete">x</button>
      </td>
    `;

    $("#garage").appendChild(row);
  };

  function checkOut(info) {
    let period = new Date() - new Date(info[2].dataset.time);
    period = convertPeriod(period);

    const licence = info[1].textContent;
    const msg = `O veículo ${info[0].textContent} de placa ${licence} permaneceu ${period} estacionado. \n\n Deseja encerrar?`;

    if (!confirm(msg)) return;

    const garage = getGarage().filter(c => c.licence !== licence);
    localStorage.garage = JSON.stringify(garage);

    renderGarage();
  };

  const getGarage = () => localStorage.garage ? JSON.parse(localStorage.garage) : [];

  renderGarage();
  $("#send").addEventListener("click", e => {
    const name = $("#name").value;
    let licence = $("#licence").value.toUpperCase(); // Converte a placa para letras maiúsculas

    const regex = /^([A-Z]{3}-\d{4})|([A-Z]{3}\d{1}[A-Z]{1}\d{2})$/; // Expressão regular para validar a placa do carro (padrão antigo e Mercosul)
    if (!regex.test(licence)) {
      alert("A placa informada não é válida.");
      return;
    }
    
    if (licence.length > 8) {
      alert("A placa deve ter no máximo 8 caracteres.");
      return;
    }

    const card = { name, licence, time: new Date() };

    const garage = getGarage();
    garage.push(card);

    localStorage.garage = JSON.stringify(garage);

    addCarToGarage(card);
    $("#name").value = "";
    $("#licence").value = "";
  });

  $("#garage").addEventListener("click", (e) => {
    if (e.target.className === "delete")
      checkOut(e.target.parentElement.parentElement.cells);
  });

  // Adiciona evento de escuta para converter o texto digitado em letras maiúsculas
  $("#licence").addEventListener("input", function (event) {
    this.value = this.value.toUpperCase();
  });
})();