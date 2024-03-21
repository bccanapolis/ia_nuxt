<template>
  <section class='team-section'>
    <div class='container'>
      <div class='section-title text-center'>
        <h3>{{ title }}</h3>
      </div>
      <client-only>
        <carousel
          v-bind="{
            loop: false,
            nav: false,
            dots: true,
            mouseDrag: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplay: true,
            autoplayHoverPause: true,
            responsive: { 0: { items: 1 }, 768: { items: 3 } },
          }"
        >
          <div v-for='member in members' :key='member.name' class='row'>
            <div class='col-12'>
              <div class='member'>
                <img
                  class='member-pic'
                  v-if='member.user.avatar'
                  loading='eager'
                  :src='`${apiEndpoint}/assets/${member.user.avatar.id}?format=webp`'
                  :alt='`Foto ${member.name}`'
                />
                <h5><span style="text-transform: capitalize">{{ member.degree }}</span>. {{ member.user.first_name }} {{ member.user.last_name }}</h5>
                <p
                  v-for='{name} in member.subjects'
                  :key='Math.random() * 100000'
                >
                  {{ name }}
                </p>
                <div class='row mt-2'>
                  <div
                    class='col-12 d-flex justify-content-center align-items-center'
                  >
                    <template
                      v-for='social in member.socials'
                      v-if='!!social.url'
                    >
                      <a
                        v-if="social.type === 'lattes'"
                        :href='social.url'
                        target='_blank'
                        rel='noreferrer'
                        title='Lattes'
                      >
                        <img
                          src='/img/icons/icon_lattes.svg'
                          style='width: 18px; height: 18px'
                          :alt='`ícone lattes`'
                        />
                      </a>

                      <a
                        v-if="social.type === 'email'"
                        :href="'mailto:' + social.url"
                        target='_blank'
                        rel='noreferrer'
                        title='E-mail'
                      >
                        <i class='fa fa-envelope' style='font-size: 18px'></i>
                      </a>

                      <a
                        v-if="social.type === 'linkedin'"
                        :href="'https://linkedin.com/in/' + social.url"
                        target='_blank'
                        rel='noreferrer'
                        title='Linkedin'
                      >
                        <i class='fa fa-linkedin' style='font-size: 18px'></i>
                      </a>
                    </template>
                  </div>
                </div>
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
  name: 'team',
  data: () => ({
    apiEndpoint: 'https://api.bcc.ifg.edu.br'
  }),
  props: {
    members: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: 'Professores'
    }
  }
}
</script>

<style scoped></style>
