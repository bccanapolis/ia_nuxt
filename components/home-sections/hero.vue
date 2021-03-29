<template>
  <section class="hero-section">
    <client-only>
      <carousel v-bind="{
    loop: true,
    nav: false,
    dots: true,
    mouseDrag: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 1,
    autoplay: true
  }" class="hero-slider">
        <div class="hs-item" style="background-image: url(/img/hero-slider/1.jpg);">
          <div class="hs-text">
            <div class="container">
              <div class="row">
                <div class="col-lg-8">
                  <div class="hs-subtitle">Award Winning UNIVERSITY</div>
                  <h2 class="hs-title">An investment in knowledge pays the best interest.</h2>
                  <p class="hs-des">Education is not just about going to school and getting a degree. It's about
                    widening your<br> knowledge and absorbing the truth about life. Knowledge is power.</p>
                  <div class="site-btn">GET STARTED</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hs-item" style="background-image: url(/img/hero-slider/2.jpg);">
          <div class="hs-text">
            <div class="container">
              <div class="row">
                <div class="col-lg-8">
                  <div class="hs-subtitle">Award Winning UNIVERSITY</div>
                  <h2 class="hs-title">An investment in knowledge pays the best interest.</h2>
                  <p class="hs-des">Education is not just about going to school and getting a degree. It's about
                    widening your<br> knowledge and absorbing the truth about life. Knowledge is power.</p>
                  <div class="site-btn">GET STARTED</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </carousel>
    </client-only>
  </section>

</template>

<script>
export default {
  name: "hero"
};
</script>

<style scoped>

</style>
