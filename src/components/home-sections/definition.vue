<template>
  <section class='testimonial-section spad'>
    <div class='container'>
      <client-only>
        <carousel v-bind="{
            loop: true,
            nav: false,
            dots: true,
            mouseDrag: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items: 1,
            autoplay: true,
            autoplayHoverPause: true,
          }" class='testimonial-slider'>
          <div v-for='def in definitions' :key='Math.random() * 10000' class='ts-item'>
            <div class='row'>
              <div class='col-md-12 ts-text'>
                <p>“ {{ def.text }} ”</p>
                <h5>{{ def.author }}</h5>
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
  name: 'definition',
  data: () => ({
    definitions: [
      {
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores dignissimos
                  distinctio eaque eos explicabo in iste, itaque libero, molestiae nulla porro possimus quos ratione
                  reiciendis repellat sed? Commodi consequatur dicta dolorum enim magni perspiciatis quis, sunt
                  temporibus. Accusamus ad cumque delectus perspiciatis tenetur. Amet fugit nostrum quam reiciendis
                  saepe!`,
        author: 'Alan Turing'
      },
      {
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores dignissimos
                  distinctio eaque eos explicabo in iste, itaque libero, molestiae nulla porro possimus quos ratione
                  reiciendis repellat sed? Commodi consequatur dicta dolorum enim magni perspiciatis quis, sunt
                  temporibus. Accusamus ad cumque delectus perspiciatis tenetur. Amet fugit nostrum quam reiciendis
                  saepe!`,
        author: 'MC Pokahontas'
      }
    ]
  })
}
</script>

<style scoped>

</style>
