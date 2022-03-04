<template>
  <div>
    <Hero />
    <!--    <Service />-->
    <News class='bg-gray spad' />
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
        name: 'Msc. Alessandro Rodrigues e Silva',
        photo: '/img/member/alessandro.gif',
        disciplines: ['Processamento de Imagens 2D/3D', 'Computação em Nuvem'],
        socials: [
          { url: 'http://lattes.cnpq.br/6278694958208888', type: 'lattes' },
          { url: '', type: 'linkedin' },
          { url: '', type: 'envelope' }
        ]
      },
      {
        name: 'Msc. Alexandre Bellezi José',
        photo: '/img/member/alexandre.jpeg',
        disciplines: ['Internet das Coisas', 'Engenharia de Software'],
        socials: [
          { url: 'http://lattes.cnpq.br/9765585618707211', type: 'lattes' },
          { url: '', type: 'lattes' },
          { url: '', type: 'lattes' }
        ]
      },
      {
        name: 'Dr. Daniel Xavier Souza',
        photo: '/img/member/daniel2.jpg',
        disciplines: ['Recuperação de Informação', 'Aprendizado de Máquina'],
        socials: [
          { url: 'http://lattes.cnpq.br/4603724338719739', type: 'lattes' },
          { url: '', type: 'lattes' },
          { url: '', type: 'lattes' }
        ]
      },
      {
        name: 'Dr. Eduardo Noronha de Andrade Freitas',
        photo:
          '/img/member/eduardo.gif',
        disciplines: [
          'Pesquisa Operacional Aplicada',
          'Engenharia de Software Baseada em Busca'
        ],
        socials: [
          { url: 'http://lattes.cnpq.br/8639235593693663', type: 'lattes' },
          { url: '', type: 'lattes' },
          { url: '', type: 'lattes' }
        ]
      },
      {
        name: 'Dr. Hugo Vinícius Leão e Silva',
        photo: '/img/member/hugo.jpg',
        disciplines: ['Processamento de Imagens 2D/3D', 'Computação em Nuvem'],
        socials: [
          { url: 'http://lattes.cnpq.br/9311172675946559', type: 'lattes' },
          { url: '', type: 'linkedin' },
          { url: '', type: 'envelope' }
        ]
      },
      {
        name: 'Dra. Kátia Cilene Costa Fernandes',
        photo: '/img/member/katia.gif',
        disciplines: ['Pesquisa Operacional', 'Matemática Computacional'],
        socials: [
          { url: 'http://lattes.cnpq.br/8575752368239596', type: 'lattes' },
          { url: '', type: 'lattes' },
          { url: '', type: 'lattes' }
        ]
      },
      // {
      //   name: 'Dr. Luiz Fernando Batista Loja',
      //   photo: '/img/member/loja.jpeg',
      //   disciplines: [
      //     'Programação em Jogos Digitais',
      //     'Engenharia de Software'
      //   ],
      //   socials: [
      //     { url: 'http://lattes.cnpq.br/0807441004466785', type: 'lattes' },
      //     { url: 'mailto:luiz.loja@ifg.edu.br', type: 'envelope' },
      //     { url: 'https://www.linkedin.com/in/luizloja/', type: 'linkedin' }
      //   ]
      // },
      {
        name: 'Dr. Raphael de Aquino Gomes',
        photo: '/img/member/raphael.gif',
        disciplines: ['Computação em Nuvem', 'Internet das Coisas'],
        socials: [
          { url: 'http://lattes.cnpq.br/4136576326278536', type: 'lattes' },
          { url: '', type: 'linkedin' },
          { url: '', type: 'envelope' }
        ]
      },
      {
        name: 'Dr. Sérgio Daniel Canuto',
        photo: '/img/member/sergio.gif',
        disciplines: ['Recuperação de Informação', 'Aprendizado de Máquina'],
        socials: [
          { url: 'http://lattes.cnpq.br/5172447060300953', type: 'lattes' },
          { url: '', type: 'linkedin' },
          { url: '', type: 'envelope' }
        ]
      },
      // {
      //   name: 'Dr. Sirlon Diniz de Carvalho',
      //   photo: '/img/member/sirlon.gif',
      //   disciplines: ['Sistemas Tutores Inteligentes', 'Inteligência em Negócios'],
      //   socials: [
      //     { url: 'http://lattes.cnpq.br/5607449747114793', type: 'lattes' },
      //     { url: '', type: 'linkedin' },
      //     { url: '', type: 'envelope' }
      //   ]
      // }
    ]
  })

}
</script>
