<template>
  <section class='partners-section spad'>
    <div class='container'>
      <div class='section-title text-center'>
        <h3>Parceiros</h3>
        <!--        <p>The professional standards and expectations</p>-->
      </div>
      <client-only>
        <carousel v-bind="{
            nav: false,
            dots: true,
            mouseDrag: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {0:{items:1, loop: true},768:{items:3, loop: partners.length > 3}}
          }">
          <div v-for='partner in partners' :key='partner.name' class='row'>
            <div class='col-12'>
              <div class='partner'>
                <img class='partner-pic' loading='eager' :src='partner.image' alt=''>
                <h5>{{ partner.name }}</h5>
              </div>
            </div>
          </div>
        </carousel>
      </client-only>

    </div>
  </section>
</template>

<script>
export default {
  name: 'partners',
  data: () => ({
    partners: [{ name: 'EMBRAPII', image: '/img/partners/logo-embrapii-square.png' }, {
      name: 'AWS Amazon',
      image: '/img/partners/1200px-Amazon_Web_Services_Logo.svg.png'
    }, { name: 'TCE-GO', image: '/img/partners/associado-titular-logo-tce-go.png' }]
  })
}
</script>

<style scoped>

</style>
