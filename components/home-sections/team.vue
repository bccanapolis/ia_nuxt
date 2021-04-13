<template>
  <section class='team-section'>
    <div class='container'>
      <div class='section-title text-center'>
        <h3>{{ title }}</h3>
        <!--        <p>The professional standards and expectations</p>-->
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
          <div v-for='member in team' :key='member.name' class='row'>
            <div class='col-12'>
              <div class='member'>
                <img
                  class='member-pic'
                  loading='eager'
                  :src='member.photo'
                  :alt='`Foto ${member.name}`'
                />
                <h5>{{ member.name }}</h5>
                <p
                  v-for='discipline in member.disciplines'
                  :key='Math.random() * 100000'
                >
                  {{ discipline }}
                </p>
                <div class='row mt-2'>
                  <div
                    class='col-12 d-flex justify-content-center align-items-center'
                  >
                    <template v-for='social in member.socials' v-if='!!social.url '

                    >
                      <a
                        v-if='social.type === "lattes"'
                        :href='social.url'
                        target='_blank'
                        rel='noreferrer'
                        title='Lattes'
                      >
                        <img
                          src='/img/icons/icon_lattes.svg'
                          style='width: 18px; height: 18px;'
                          :alt='`ícone lattes`'
                        />
                      </a>

                      <a
                        v-if='social.type === "envelope"'
                        :href='"mailto:"+social.url'
                        target='_blank'
                        rel='noreferrer'
                        title='E-mail'
                      >
                        <i class='fa fa-envelope' style='font-size: 18px'></i>
                      </a>

                      <a
                        v-if='social.type === "linkedin"'
                        :href='"https://linkedin.com/in/"+social.url'
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
    team: [
      {
        name: 'Msc. Alessandro Rodrigues e Silva',
        photo: '/img/member/alessandro.gif',
        disciplines: ['Processamento de Imagens 2D/3D', 'Computação em Nuvem'],
        socials: [
          { url: 'http://lattes.cnpq.br/6278694958208888', type: 'lattes' },
          { url: '', type: 'linkedin' },
          { url: 'alessandro.rodrigues@ifg.edu.br', type: 'envelope' }
        ]
      },
      {
        name: 'Dr. Daniel Xavier Souza',
        photo: '/img/member/daniel2.jpg',
        disciplines: ['Recuperação de Informação', 'Aprendizado de Máquina'],
        socials: [
          { url: 'http://lattes.cnpq.br/4603724338719739', type: 'lattes' },
          { url: '', type: 'linkedin' },
          { url: 'daniel.sousa@ifg.edu.br', type: 'envelope' }
        ]
      },
      {
        name: 'Dr. Eduardo Noronha de Andrade Freitas',
        photo:
          '/img/member/eduardo.gif',
        disciplines: [
          'Precisão (Pecuária 4.0)', 'Search Based Software Engineering (SBSE)'
        ],
        socials: [
          { url: 'http://lattes.cnpq.br/8639235593693663', type: 'lattes' },
          { url: 'eduardo-noronha-45616125', type: 'linkedin' },
          { url: 'eduardo.freitas@ifg.edu.br', type: 'envelope' }
        ]
      },
      {
        name: 'Dra. Kátia Cilene Costa Fernandes',
        photo: '/img/member/katia.gif',
        disciplines: ['Pesquisa Operacional', 'Matemática Computacional'],
        socials: [
          { url: 'http://lattes.cnpq.br/8575752368239596', type: 'lattes' },
          { url: 'katia.fernandes@ifg.edu.br', type: 'envelope' }
        ]
      },
      {
        name: 'Dr. Luiz Fernando Batista Loja',
        photo: '/img/member/loja.jpeg',
        disciplines: [
          'Programação em Jogos Digitais',
          'Engenharia de Software'
        ],
        socials: [
          { url: 'http://lattes.cnpq.br/0807441004466785', type: 'lattes' },
          { url: 'mailto:luiz.loja@ifg.edu.br', type: 'envelope' },
          { url: 'luizloja', type: 'linkedin' }
        ]
      },
      {
        name: 'Msc. Otávio Calaça Xavier',
        photo: '/img/member/otavio.gif',
        disciplines: ['Web Semântica', 'Redes Neurais Profundas'],
        socials: [
          { url: 'http://lattes.cnpq.br/7603465099889835', type: 'lattes' },
          { url: 'otavio.xavier@ifg.edu.br', type: 'envelope' }
        ]
      },
      {
        name: 'Dr. Raphael de Aquino Gomes',
        photo: '/img/member/raphael.gif',
        disciplines: ['Computação em Nuvem', 'Internet das Coisas'],
        socials: [
          { url: 'http://lattes.cnpq.br/4136576326278536', type: 'lattes' },
          { url: 'gomesra', type: 'linkedin' },
          { url: 'raphael.gomes@ifg.edu.br', type: 'envelope' }
        ]
      },
      {
        name: 'Dr. Sérgio Daniel Canuto',
        photo: '/img/member/sergio.gif',
        disciplines: ['Recuperação de Informação', 'Aprendizado de Máquina'],
        socials: [
          { url: 'http://lattes.cnpq.br/5172447060300953', type: 'lattes' },
          { url: '', type: 'linkedin' },
          { url: 'sergio.canuto@ifg.edu.br', type: 'envelope' }
        ]
      },
      {
        name: 'Dr. Sirlon Diniz de Carvalho',
        photo: '/img/member/sirlon.gif',
        disciplines: ['Sistemas Tutores Inteligentes', 'Inteligência em Negócios'],
        socials: [
          { url: 'http://lattes.cnpq.br/5607449747114793', type: 'lattes' },
          { url: '', type: 'linkedin' },
          { url: 'sirlon.carvalho@ifg.edu.br', type: 'envelope' }
        ]
      }
    ]
  }),
  props: {
    members: {
      type: Array,
      default: () => ([])
    },
    title: {
      type: String,
      default: 'Professores'
    }
  }
}
</script>

<style scoped></style>
