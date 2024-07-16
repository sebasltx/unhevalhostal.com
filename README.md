<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hotel</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" />
  <link rel="stylesheet" href="gio.css">
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 15px;
    }

    header, footer, section {
      padding: 20px 0;
    }

    .menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0;
    }

    .menu input[type="checkbox"] {
      display: none;
    }

    .menu-icono {
      display: none;
      cursor: pointer;
    }

    .navbar ul {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .navbar ul li {
      margin: 0 10px;
    }

    .navbar ul li a {
      text-decoration: none;
      color: #000;
      font-weight: bold;
    }

    .swiper-slide img {
      width: 100%;
      height: auto;
    }

    .hotel-description {
      text-align: center;
      padding: 20px 0;
    }

    .hotel-description h1 {
      font-size: 2.5rem;
      margin-bottom: 10px;
    }

    .hotel-description p {
      font-size: 1.2rem;
      margin-bottom: 20px;
    }

    .hotel-description .enlace {
      display: inline-block;
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
    }

    .habitaciones .product {
      text-align: center;
    }

    .habitaciones .product-img {
      width: 100%;
      height: auto;
      border-radius: 10px;
    }

    .habitaciones .product-txt h4 {
      font-size: 1.5rem;
      margin: 10px 0;
    }

    .habitaciones .btn-ver {
      display: inline-block;
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
    }

    .footer-txt {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .footer-txt img {
      height: 50px;
    }

    .emails p, .links ul, .socials a {
      margin: 5px 0;
    }

    .links ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
    }

    .links ul li {
      margin: 0 10px;
    }

    .links ul li a {
      text-decoration: none;
      color: #000;
    }

    .socials a img {
      height: 30px;
      margin-right: 10px;
    }

    .carrito {
      padding: 20px;
      text-align: center;
    }

    .carrito-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
      border: 1px solid #ddd;
      padding: 10px;
      border-radius: 8px;
    }

    .carrito-item img {
      width: 100px;
      height: 75px;
      object-fit: cover;
      border-radius: 8px;
      margin-right: 10px;
    }

    .btn-eliminar {
      background-color: #dc3545;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 5px 10px;
      cursor: pointer;
    }

    .btn-eliminar:hover {
      background-color: #c82333;
    }

    /* Media Queries for Responsive Design */
    @media (max-width: 768px) {
      .menu {
        flex-direction: column;
        align-items: flex-start;
      }

      .menu-icono {
        display: block;
      }

      .navbar ul {
        display: none;
        flex-direction: column;
        width: 100%;
      }

      .navbar ul li {
        margin: 10px 0;
      }

      .menu input[type="checkbox"]:checked ~ .navbar ul {
        display: flex;
      }

      .hotel-description h1 {
        font-size: 2rem;
      }

      .hotel-description p {
        font-size: 1rem;
      }

      .habitaciones .product-txt h4 {
        font-size: 1.2rem;
      }

      .footer-txt {
        flex-direction: column;
        align-items: flex-start;
      }

      .footer-txt img {
        margin-bottom: 10px;
      }

      .links ul {
        flex-direction: column;
      }

      .links ul li {
        margin: 5px 0;
      }
    }
  </style>
</head>
<body>
  <header>
    <div class="menu container">
      <a href="#" class="logo"><img src="images/hu.png" alt="Logo"></a>
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
      <div class="hotel-description">
        <h1>Hotel Unheval</h1>
        <p>Descubre el lujo y la comodidad del Hotel Unheval, ubicado en el corazón de Huánuco. Ofrecemos elegantes habitaciones, restaurante gourmet, piscina, spa y modernos salones para eventos. Disfruta de un servicio excepcional mientras exploras la rica historia y cultura de la región.</p>
        <a href="#" class="enlace">Para más información</a>
      </div>
    </div>
  </header>

  <section id="servicios" class="servicios">
    <div class="swiper mySwiper-2 container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="service">
            <h3>Wi-Fi</h3>
            <p>Conexión a internet de alta velocidad en todas las habitaciones.</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="service">
            <h3>Desayuno</h3>
            <p>Desayuno continental incluido con tu estadía.</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="service">
            <h3>Limpieza</h3>
            <p>Servicio de limpieza diario para tu comodidad.</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="service">
            <h3>Recepción 24/7</h3>
            <p>Recepción abierta las 24 horas del día para tu conveniencia.</p>
          </div>
        </div>
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
            <img src="images/b1.png" alt="Habitación Simple" class="product-img">
            <div class="product-txt">
              <h4>Habitación Simple</h4>
              <p>Habitación individual con baño privado</p>
              <br>
              <br>
              <br>
              <a href="simple.html" class="btn-ver">Ver Habitaciones</a>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="product">
            <img src="images/b2.jpg" alt="Habitación Doble" class="product-img">
            <div class="product-txt">
              <h4>Habitación Doble</h4>
              <p>Habitación doble con baño privado</p>
              <br>
              <br>
              <br>
              <a href="doble.html" class="btn-ver">Ver Habitaciones</a>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="product">
            <img src="images/b3.jpg" alt="Habitación Matrimonial" class="product-img">
            <div class="product-txt">
              <h4>Habitación Matrimonial</h4>
              <p>Habitación con jacuzzi</p>
              <br>
              <br>
              <br>
              <a href="matrimonial.html" class="btn-ver">Ver Habitaciones</a>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="product">
            <img src="images/b4.jpg" alt="Habitación Presidencial" class="product-img">
            <div class="product-txt">
              <h4>Habitación Presidencial</h4>
              <p>Habitación lujosa</p>
              <br>
              <br>
              <br>
              <a href="presidencial.html" class="btn-ver">Ver Habitaciones</a>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="product">
            <img src="images/b5.jpg" alt="Habitación Suite" class="product-img">
            <div class="product-txt">
              <h4>Habitación Suite</h4>
              <p>Habitación individual con jacuzzi</p>
              <br>
              <br>
              <br>
              <a href="suite.html" class="btn-ver">Ver Habitaciones</a>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </section>
  <section id="contactos" class="contactos">
    <div class="container">
      <h2>Contactos</h2>
      <p>Para más información, contáctanos  hotelunheval@gmail.com 
        .</p>
    </div>
  </section>

  <footer class="footer container">
    <hr>
    <div class="footer-txt">
      <img src="images/hu.png" alt="Logo">
      <div class="emails">
        <p>2024110363@unheval.pe</p>
        <p>2024130027@unheval.pe</p>
        <p>2024120172@unheval.pe</p>
        <p>2023270024@unheval.pe</p>
    </div>
      <div class="links">
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#productos">Productos</a></li>
          <li><a href="#contactos">Contactos</a></li>
        </ul>
        <div class="socials">
          <a href="https://web.facebook.com/HotelUnheval" target="_blank">
              <img src="images/s1.svg" alt="Facebook">
          </a>
          <a href="mailto:hotelunheval@gmail.com" target="_blank">
            <img src="images/gmail.png" alt="Gmail">
        </a>
        
          <a href="https://chat.whatsapp.com/I9YPsQaW2wWA0LCTKZN8hY" target="_blank">
              <img src="images/whatsapp.png" alt="Instagram">
          </a>
      </div>
        <p>@hotel</p>
      </div>
    </div>
  </footer>
  <script src="script.js"></script>
  <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
</body>
</html>

