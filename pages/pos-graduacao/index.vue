<template>
  <div>
    <div class='site-breadcrumb'>
      <div class='container'>
        <nuxt-link to='/'><i class='fa fa-home'></i> Home</nuxt-link>
        <i class='fa fa-angle-right'></i>
        <span>Pós Graduação</span>
      </div>
    </div>
    <section class='about-section spad pt-0'>
      <div class='container'>
        <div class='section-title text-center'>
          <h3 class='text-uppercase'>
            Pós-graduação em Inteligência Artificial Aplicada
          </h3>
        </div>
        <div class='row'>
          <div class='col-12 about-text'>
            <TabsWrapper :children='tabsChildren' />
          </div>
        </div>
      </div>
    </section>
    <team class='mb-5' title='Professores da Pós' :members='members' />
  </div>
</template>

<script>
import team from '~/components/home-sections/team.vue'
import TabApresentacao from '~/components/TabApresentacao'
import TabObjetivos from '~/components/TabObjetivos'
import TabFuncionamentoCurso from '~/components/TabFuncionamentoCurso'
import TabPerfilEgresso from '~/components/TabPerfilEgresso'
import TabDisciplinas from '~/components/TabDisciplinas'
import TabDocumentos from '~/components/TabDocumentos'

export default {
  components: { team },
  head: {
    title: 'Pós-Graduação | IA no IFG',
    link: [
      { rel: 'canonical', href: 'https://ia.bcc.anapolis.ifg.edu.br/pos-graduacao' }
    ]
  },
  data: () => ({
    // tabsChildren: [TabEmentas],
    tabsChildren: [TabApresentacao, TabObjetivos, TabFuncionamentoCurso, TabPerfilEgresso, TabDisciplinas, TabDocumentos],
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
        name: 'Dra. Kátia Cilene Costa Fernandes',
        photo: '/img/member/katia.gif',
        disciplines: ['Pesquisa Operacional', 'Matemática Computacional'],
        socials: [
          { url: 'http://lattes.cnpq.br/8575752368239596', type: 'lattes' },
          { url: '', type: 'lattes' },
          { url: '', type: 'lattes' }
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
          { url: 'https://www.linkedin.com/in/luizloja/', type: 'linkedin' }
        ]
      },
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
      {
        name: 'Dr. Sirlon Diniz de Carvalho',
        photo: '/img/member/sirlon.gif',
        disciplines: ['Sistemas Tutores Inteligentes', 'Inteligência em Negócios'],
        socials: [
          { url: 'http://lattes.cnpq.br/5607449747114793', type: 'lattes' },
          { url: '', type: 'linkedin' },
          { url: '', type: 'envelope' }
        ]
      }
    ]
  })
}
</script>
