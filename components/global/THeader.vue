<template>
  <header class="header-section">
    <div class="container">
      <a
        href="http://ifg.edu.br/"
        target="_blank"
        class="site-logo text-dark font-weight-bold"
      >
        <img
          src="/img/logo_ifg.svg"
          style="height: 4rem"
          alt="Instituto Federal de Goiás"
        />
      </a>

      <!-- <div class="nav-switch">
        <i class="fa fa-bars"></i>
      </div> -->
      <div
        class="header-info d-flex align-items-center float-left float-md-right"
        style="height: 5rem"
      >
        <div class="hf-item ml-0">
          <nuxt-link to="/">
            <a
              class="text-dark font-weight-bold"
              style="font-size: 1.7rem"
            >
              Inteligência <span style="color: #045b6e">Artificial</span> no IFG
            </a>
          </nuxt-link>
        </div>
      </div>
      <!--      <div class='header-info'>-->
      <!--        <div class='hf-item'>-->
      <!--          <img src='/img/logo_ifg.svg' style='height: 2.8rem;' alt=''>-->
      <!--        </div>-->
      <!--        <div class='hf-item'>-->
      <!--          <img src='/img/logo_computacao.svg' style='height: 2.8rem;' alt=''>-->
      <!--        </div>-->
      <!--        <div class="hf-item">-->
      <!--          <i class="fa fa-clock-o"></i>-->
      <!--          <p><span>Working time:</span>Monday - Friday: 08 AM - 06 PM</p>-->
      <!--        </div>-->
      <!--        <div class="hf-item">-->
      <!--          <i class="fa fa-map-marker"></i>-->
      <!--          <p><span>Find us:</span>40 Baria Street 133/2, New York City, US</p>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </header>
</template>

<script>
export default {
  name: 'THeader',
}
</script>

<style scoped></style>
