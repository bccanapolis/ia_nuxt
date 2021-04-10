<template>
  <div>
    <Hero />
    <Service />
    <News />
<!--    <Definition />-->
    <Team class='spad' :members='members' title='Professores da Área de IA' />
    <Partners />
  </div>
</template>

<script>
import Hero from '~/components/home-sections/hero'
import Service from '~/components/home-sections/service'
import Definition from '~/components/home-sections/definition'
import Team from '~/components/home-sections/team'
import News from '~/components/home-sections/news'
import Partners from '~/components/home-sections/partners'

export default {
  name: 'Home',
  components: { News, Team, Definition, Service, Hero, Partners },
  data: () => ({
    members: [
      {
        name: 'Dr. Hugo Vinícius Leão e Silva',
        photo: '/img/member/hugo.jpg',
        disciplines: ['Processamento de Imagens 2D/3D', 'Computação em Nuvem'],
        socials: [
          { url: 'http://lattes.cnpq.br/9311172675946559', type: 'lattes' },
          { url: '', type: 'linkedin' },
          { url: '', type: 'envelope' }
        ]
      }
    ]
  })
}
</script>
