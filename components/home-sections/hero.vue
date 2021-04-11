<template>
  <section class='hero-section'>
    <client-only>
      <carousel v-bind="{
    loop: true,
    nav: false,
    dots: true,
    mouseDrag: true,
    duration: 10000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 1,
    autoplay: true,
    autoplayHoverPause: false
  }" class='hero-slider'>
        <div class='hs-item'
             style='background-image: url(/img/hero-slider/mosaico.jpg); background-size: cover;'>
          <div class='hs-text'>
            <div class='container'>
              <div class='row'>
                <div class='col-lg-8'>
                  <!--                  <div class='hs-subtitle'>Award Winning UNIVERSITY</div>-->
                  <h2 class='hs-title'>Pesquisas na linha de Inteligência Artificial</h2>
                  <p class='hs-des' style='font-size: 16px; font-weight: bolder;'>Este portal visa apresentar pesquisas
                    e trabalhos do IFG nas diversas áreas da Inteligência Artificial e suas aplicações</p>
                  <!--                  <div class='site-btn'>GET STARTED</div>-->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='hs-item'
             style='background-image: url(/img/hero-slider/joel-filipe-VuwAfoHpxgs-unsplash.jpg); background-size: cover;'>
          <div class='hs-text'>
            <div class='container'>
              <div class='row'>
                <div class='col-lg-8'>
                  <!--                  <div class='hs-subtitle'>Award Winning UNIVERSITY</div>-->
                  <h2 class='hs-title'>PÓS-GRADUAÇÃO PÚBLICA, GRATUITA E FEDERAL</h2>
                  <p class='hs-des'>O IFG disponibiliza o curso de pós-graduação em Inteligência Artificial Aplicada,
                    mistrado por professores altamente qualificados.</p>
                  <!--                  <div class='site-btn'>GET STARTED</div>-->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--        <div class='hs-item'-->
        <!--             style='background-image: url(/img/hero-slider/ifg_anapolis-1000x550.jpg); background-size: cover; background-position: bottom center;'>-->
        <!--          <div class='hs-text'>-->
        <!--            <div class='container'>-->
        <!--              <div class='row'>-->
        <!--                <div class='col-lg-8'>-->
        <!--                  <div class='hs-subtitle'>Award Winning UNIVERSITY</div>-->
        <!--                  <h2 class='hs-title'>An investment in knowledge pays the best interest.</h2>-->
        <!--                  <p class='hs-des'>Education is not just about going to school and getting a degree. It's about-->
        <!--                    widening your<br> knowledge and absorbing the truth about life. Knowledge is power.</p>-->
        <!--                  <div class='site-btn'>GET STARTED</div>-->
        <!--                </div>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
      </carousel>
    </client-only>
  </section>

</template>

<script>
export default {
  name: 'hero'
}
</script>

<style scoped>

</style>
