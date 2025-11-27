
  const APIkey = "3937ce98fed7594e476e9acb0e64808d";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=-35.169285&lon=-58.223986&appid=${APIkey}&units=metric&lang=es`;

async function respuesta() {
  const resp = await fetch(url);
  const data = await resp.json();
  
  document.getElementById("clima").innerHTML = `
    <p><b>${data.name}</b> - ${data.weather[0].description}</p>
    <p>🌡️ Temp: ${data.main.temp}°C</p>
    <p>💧 Humedad: ${data.main.humidity}%</p>
  `;
}

  
  const apiPeluqueria = "https://mocki.io/v1/20b59c8a-5ad3-4b38-9e65-9a69f92ef9e4"; 



    let puntaje = 0;
    const clientes = [
      { nombre: "ariel", pedido: "Corte clásico" },
      { nombre: "benicio", pedido: "Corte moderno" },
      { nombre: "tomas", pedido: "Degradado" },
      { nombre: "carolina", pedido: "Tintura" },
      { nombre: "mateo", pedido: "Afeitado completo" }
    ];
    const cortesDisponibles = ["Corte clásico", "Corte moderno", "Degradado", "Tintura", "Afeitado completo"];


    async function cargarInfo() {
      try {
        const res = await fetch(apiPeluqueria);
        const data = await res.json();

        document.getElementById("infoPeluqueria").innerHTML = `
          <h2>${data.nombre}</h2>
          <p><strong>Barbero:</strong> ${data.barbero}</p>
          <p><strong>Servicios:</strong> ${data.servicios.join(", ")}</p>
          <p><strong>Ubicación:</strong> ${data.ubicacion}</p>
        `;
      } catch (error) {
        document.getElementById("infoPeluqueria").textContent = "Nombre: AE._.BARBER (de Ariel Erretegui) Servicios: Cortes de pelo, Barba, Perfilado, Claritos, Global. Horarios: Sábados y domingos (programar turno con anticipación) y Días de semana (9 AM - 11 AM).Contacto: Teléfono 2223 460874, Instagram   AE._.BARBER";
      }
    }

    function nuevoCliente() {
      const cliente = clientes[Math.floor(Math.random() * clientes.length)];
      document.getElementById("cliente").textContent = `Cliente: ${cliente.nombre} quiere un ${cliente.pedido}.`;
      document.getElementById("resultado").textContent = "";

      const opcionesDiv = document.getElementById("opcionesCortes");
      opcionesDiv.innerHTML = "";

      cortesDisponibles.forEach(corte => {
        const btn = document.createElement("button");
        btn.textContent = corte;
        btn.onclick = () => hacerCorte(cliente, corte);
        opcionesDiv.appendChild(btn);
      });
    }

    function hacerCorte(cliente, corteElegido) {
      const resultadoDiv = document.getElementById("resultado");
      if (corteElegido === cliente.pedido) {
        puntaje += 10;
        resultadoDiv.textContent = "¡Perfecto! El cliente quedó feliz ";
      } else {
        puntaje -= 5;
        resultadoDiv.textContent = `Oh no , ${cliente.nombre} quería un ${cliente.pedido}.`;
      }
      document.getElementById("puntaje").textContent = `Puntaje: ${puntaje}`;
      setTimeout(nuevoCliente, 1500);
    }


    cargarInfo();
    nuevoCliente();