document.addEventListener('DOMContentLoaded', function () {
  var swiper1 = new Swiper('.mySwiper-1', {
      loop: true,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
  });

  var swiper2 = new Swiper('.mySwiper-2', {
      loop: true,
      autoplay: {
          delay: 5000,
          disableOnInteraction: false,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
  });

  var swiper3 = new Swiper('.mySwiper-3', {
      loop: true,
      autoplay: {
          delay: 4000,
          disableOnInteraction: false,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const carritoItems = document.getElementById('carrito-items');
  const finalizarReservaBtn = document.getElementById('finalizar-reserva');

  let carrito = JSON.parse(localStorage.getItem('reservas')) || [];

  function actualizarCarrito() {
      carritoItems.innerHTML = '';

      if (carrito.length === 0) {
          carritoItems.innerHTML = '<p>El carrito está vacío.</p>';
      } else {
          carrito.forEach(item => {
              const itemDiv = document.createElement('div');
              itemDiv.classList.add('carrito-item');
              itemDiv.innerHTML = `
                  <img src="${item.imagen}" alt="${item.nombre}">
                  <div class="carrito-item-info">
                      <h4>${item.nombre}</h4>
                      <p>Precio: S/${item.precio} x noche</p>
                      <p>Cantidad: ${item.cantidad}</p>
                      <p>Subtotal: S/${(item.precio * item.cantidad).toFixed(2)}</p>
                      <button class="btn-eliminar" data-nombre="${item.nombre}">Eliminar</button>
                  </div>
              `;
              carritoItems.appendChild(itemDiv);
          });
      }
  }

  actualizarCarrito();

  carritoItems.addEventListener('click', (e) => {
      if (e.target.classList.contains('btn-eliminar')) {
          const nombreHabitacion = e.target.getAttribute('data-nombre');
          carrito = carrito.filter(item => item.nombre !== nombreHabitacion);
          actualizarCarrito();
          localStorage.setItem('reservas', JSON.stringify(carrito));
      }
  });

  finalizarReservaBtn.addEventListener('click', () => {
      if (carrito.length === 0) {
          alert('El carrito está vacío. Agrega habitaciones antes de finalizar.');
      } else {
          alert('Reserva finalizada!');
          localStorage.removeItem('reservas');
          carrito = [];
          actualizarCarrito();
      }
  });
});
