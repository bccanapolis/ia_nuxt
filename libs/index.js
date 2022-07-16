import { sortMembers } from '~/utils'

export const members = [
  {
    degree: 'Dr.',
    name: 'Alan Keller Gomes',
    photo: '/img/member/alankeller.png',
    disciplines: [
      'Aprendizado de Máquina',
      'Metodologias de Pesquisa e Desenvolvimento em IA',
    ],
    socials: [
      { url: 'http://lattes.cnpq.br/0598533987527432', type: 'lattes' },
      { url: '', type: 'linkedin' },
      { url: 'alankeller@ifg.edu.br', type: 'envelope' },
    ],
  },
  {
    degree: 'Msc.',
    name: 'Alessandro Rodrigues e Silva',
    photo: '/img/member/alessandro.gif',
    disciplines: ['Processamento de Imagens 2D/3D', 'Computação em Nuvem'],
    socials: [
      { url: 'http://lattes.cnpq.br/6278694958208888', type: 'lattes' },
      { url: '', type: 'linkedin' },
      { url: 'alessandro.rodrigues@ifg.edu.br', type: 'envelope' },
    ],
  },
  {
    degree: 'Dr.',
    name: 'Daniel Xavier Souza',
    photo: '/img/member/daniel2.jpg',
    disciplines: ['Recuperação de Informação', 'Aprendizado de Máquina'],
    socials: [
      { url: 'http://lattes.cnpq.br/4603724338719739', type: 'lattes' },
      { url: '', type: 'linkedin' },
      { url: 'daniel.sousa@ifg.edu.br', type: 'envelope' },
    ],
  },
  {
    degree: 'Dr.',
    name: 'Eduardo Noronha de Andrade Freitas',
    photo: '/img/member/eduardo.gif',
    disciplines: [
      'Pecuária de Precisão (Pecuária 4.0)',
      'Search Based Software Engineering (SBSE)',
    ],
    socials: [
      { url: 'http://lattes.cnpq.br/8639235593693663', type: 'lattes' },
      { url: 'eduardo-noronha-45616125', type: 'linkedin' },
      { url: 'eduardo.freitas@ifg.edu.br', type: 'envelope' },
    ],
  },
  {
    degree: 'Dr.',
    name: 'Gustavo de Assis Costa',
    photo: '/img/member/gustavo.png',
    disciplines: ['Web Semântica', 'Processamento de Linguagem Natural'],
    socials: [
      { url: 'http://lattes.cnpq.br/1543798708473666', type: 'lattes' },
      { url: 'gustavo-de-assis-costa-20733347', type: 'linkedin' },
      { url: 'gustavo.costa@ifg.edu.br', type: 'envelope' },
    ],
  },
  {
    degree: 'Dra.',
    name: 'Kátia Cilene Costa Fernandes',
    photo: '/img/member/katia.gif',
    disciplines: ['Pesquisa Operacional', 'Matemática Computacional'],
    socials: [
      { url: 'http://lattes.cnpq.br/8575752368239596', type: 'lattes' },
      { url: 'katia.fernandes@ifg.edu.br', type: 'envelope' },
    ],
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
  //     { url: 'luizloja', type: 'linkedin' }
  //   ]
  // },
  // {
  //   name: 'Msc. Otávio Calaça Xavier',
  //   photo: '/img/member/otavio.gif',
  //   disciplines: ['Web Semântica', 'Redes Neurais Profundas'],
  //   socials: [
  //     { url: 'http://lattes.cnpq.br/7603465099889835', type: 'lattes' },
  //     { url: 'otavio.xavier@ifg.edu.br', type: 'envelope' }
  //   ]
  // },
  {
    degree: 'Dr.',
    name: 'Raphael de Aquino Gomes',
    photo: '/img/member/raphael.gif',
    disciplines: ['Computação em Nuvem', 'Internet das Coisas'],
    socials: [
      { url: 'http://lattes.cnpq.br/4136576326278536', type: 'lattes' },
      { url: 'gomesra', type: 'linkedin' },
      { url: 'raphael.gomes@ifg.edu.br', type: 'envelope' },
    ],
  },
  {
    degree: 'Dr.',
    name: 'Sérgio Daniel Canuto',
    photo: '/img/member/sergio.gif',
    disciplines: ['Recuperação de Informação', 'Aprendizado de Máquina'],
    socials: [
      { url: 'http://lattes.cnpq.br/5172447060300953', type: 'lattes' },
      { url: '', type: 'linkedin' },
      { url: 'sergio.canuto@ifg.edu.br', type: 'envelope' },
    ],
  },
  {
    degree: 'Dr.',
    name: 'Leandro Alexandre',
    photo: '/img/member/leandro_alexandre.jpeg',
    disciplines: ['Redes 5G/6G', 'Computação em Nuvem e em Borda'],
    socials: [
      { url: '', type: 'lattes' },
      {
        url: 'https://www.linkedin.com/in/leandro-alexandre-57aa0b195',
        type: 'linkedin',
      },
      { url: '', type: 'envelope' },
    ],
  },
  {
    degree: 'Msc.',
    name: 'Renan Oliveira',
    photo: '/img/member/renan_oliveira.jpeg',
    disciplines: [
      'Recuperação de Informação',
      'Inteligência Artificial Aplicada',
    ],
    socials: [
      { url: '', type: 'lattes' },
      {
        url: 'https://www.linkedin.com/in/renan-oliveira-22761919/',
        type: 'linkedin',
      },
      { url: '', type: 'envelope' },
    ],
  },
  {
    degree: 'Dr.',
    name: 'Daniel Canedo',
    photo: '/img/member/daniel_canedo.jpeg',
    disciplines: ['Intrusion Detection System', 'Redes As Hoc'],
    socials: [
      { url: '', type: 'lattes' },
      {
        url: 'https://www.linkedin.com/in/renan-oliveira-22761919/',
        type: 'linkedin',
      },
      { url: '', type: 'envelope' },
    ],
  },
  {
    degree: 'Msc.',
    name: 'Alexandre Bellezi José',
    photo: '/img/member/alexandre2.jpeg',
    disciplines: ['Internet das Coisas', 'Engenharia de Software'],
    socials: [
      { url: 'http://lattes.cnpq.br/9765585618707211', type: 'lattes' },
      { url: '', type: 'lattes' },
      { url: '', type: 'lattes' },
    ],
  },
  // {
  //   name: 'Dr. Sirlon Diniz de Carvalho',
  //   photo: '/img/member/sirlon.gif',
  //   disciplines: [
  //     'Sistemas Tutores Inteligentes',
  //     'Inteligência em Negócios'
  //   ],
  //   socials: [
  //     { url: 'http://lattes.cnpq.br/5607449747114793', type: 'lattes' },
  //     { url: '', type: 'linkedin' },
  //     { url: 'sirlon.carvalho@ifg.edu.br', type: 'envelope' }
  //   ]
  // },
].sort(sortMembers)
