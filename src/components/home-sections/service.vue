<template>
  <section class='service-section spad'>
    <div class='container services'>
      <div class='section-title text-center'>
        <h3>Algumas Aplicações</h3>
      </div>
      <client-only>
        <carousel
          v-bind="{
            loop: true,
            nav: false,
            dots: true,
            mouseDrag: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {0:{items:1, loop: true},768:{items:3, loop: products.length > 3}},
          }"
        >
          <div v-for='product in products' :key='product.name' class='row'>
            <div class='col-sm-12 service-item'>
              <a :href='product.url' target='_blank' rel='noreferrer' class='service-icon'>
                <img :alt='`Logo ${product.name}`' :src='product.image'>
              </a>
              <div class='service-content'>
                <h4>{{ product.name }}</h4>
                <p>{{ product.text }}</p>
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
  name: 'service',
  data: () => ({
    products: [
      {
        // name: 'IFG Produz',
        url: 'https://ifgproduz.ifg.edu.br',
        image: '/img/services/logo-produz.svg',
        text: 'Sistema de Recomendação para os pesquisadores do IFG sobre as pesquisas realizadas.'
      },
      { name: 'Produto X', image: '/img/services/logo-produz.svg', text: '' },
      { name: 'Produto Y', image: '/img/services/logo-produz.svg', text: '' }
    ]
  })
}
</script>

<style scoped>

</style>
