<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hotel</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" />
  <link rel="stylesheet" href="gio.css">
</head>
<body>
  <header>
    <div class="menu container">
      <a href="#" class="logo"><img src="images/logo.png" alt="Logo"></a>
      <input type="checkbox" id="menu" />
      <label for="menu"><img src="images/menu.png" class="menu-icono" alt="Menú"></label>
      <nav class="navbar">
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#cuartos">Cuartos</a></li>
          <li><a href="#contactos">Contactos</a></li>
        </ul>
      </nav>
    </div>
    <div id="inicio" class="header-content container">
      <div class="swiper mySwiper-1">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img class="slider" src="images/slider1.jpg" alt="Slide 1"></div>
          <div class="swiper-slide"><img class="slider" src="images/slider2.jpg" alt="Slide 2"></div>
          <div class="swiper-slide"><img class="slider" src="images/slider3.jpg" alt="Slide 3"></div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </div>
      <a href="#" class="enlace">Para más información</a>
    </div>
  </header>

  <section id="servicios" class="servicios">
    <div class="swiper mySwiper-2 container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><div class="service">Servicio 1</div></div>
        <div class="swiper-slide"><div class="service">Servicio 2</div></div>
        <div class="swiper-slide"><div class="service">Servicio 3</div></div>
        <div class="swiper-slide"><div class="service">Servicio 4</div></div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </section>

  <section id="cuartos" class="habitaciones">
    <div class="swiper mySwiper-3 container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="product">
            <img src="images/b1.png" alt="Habitación Simple">
            <div class="product-txt">
              <h4>Habitación Simple</h4>
              <p>Habitación individual con baño privado</p>
              <span class="price">S/100 x noche</span>
              <a href="simple.html" class="btn-ver">Ver Habitaciones</a>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="product">
            <img src="images/b2.jpg" alt="Habitación Doble">
            <div class="product-txt">
              <h4>Habitación Doble</h4>
              <p>Habitación doble con baño privado</p>
              <span class="price">S/250 x noche</span>
              <a href="doble.html" class="btn-ver">Ver Habitaciones</a>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="product">
            <img src="images/b3.jpg" alt="Habitación Matrimonial">
            <div class="product-txt">
              <h4>Habitación Matrimonial</h4>
              <p>Habitación con jacuzzi</p>
              <span class="price">S/1000 x noche</span>
              <a href="matrimonial.html" class="btn-ver">Ver Habitaciones</a>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="product">
            <img src="images/b4.jpg" alt="Habitación Presidencial">
            <div class="product-txt">
              <h4>Habitación Presidencial</h4>
              <p>Habitación lujosa</p>
              <span class="price">S/2250 x noche</span>
              <a href="presidencial.html" class="btn-ver">Ver Habitaciones</a>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="product">
            <img src="images/b5.jpg" alt="Habitación Suite">
            <div class="product-txt">
              <h4>Habitación Suite</h4>
              <p>Habitación individual con jacuzzi</p>
              <span class="price">S/1500 x noche</span>
              <a href="suite.html" class="btn-ver">Ver Habitaciones</a>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </section>

  <section id="carrito" class="carrito">
    <div class="container">
      <h2>Carrito de Reserva</h2>
      <div id="carrito-items"></div>
      <button id="finalizar-reserva" class="btn-reservar">Finalizar Reserva</button>
    </div>
  </section>

  <section id="contactos" class="contactos">
    <div class="container">
      <h2>Contactos</h2>
    </div>
  </section>

  <footer class="footer container">
    <hr>
    <div class="footer-txt">
      <img src="images/logo.png" alt="Logo">
      <div class="links">
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#productos">Productos</a></li>
          <li><a href="#contactos">Contactos</a></li>
        </ul>
        <div class="socials">
          <img src="images/s1.svg" alt="Social 1">
          <img src="images/s2.svg" alt="Social 2">
          <img src="images/s3.svg" alt="Social 3">
        </div>
        <p>@hotel</p>
      </div>
    </div>
  </footer>
  <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
