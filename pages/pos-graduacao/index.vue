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
            <nav>
              <div class='nav nav-tabs' id='nav-tab' role='tablist'>
                <button
                  class='nav-link active'
                  id='nav-apresentacao-tab'
                  data-bs-toggle='tab'
                  data-bs-target='#nav-apresentacao'
                  type='button'
                  role='tab'
                  aria-controls='nav-apresentacao'
                  aria-selected='true'
                >
                  Apresentação
                </button>
                <button
                  class='nav-link'
                  id='nav-objetivo-tab'
                  data-bs-toggle='tab'
                  data-bs-target='#nav-objetivo'
                  type='button'
                  role='tab'
                  aria-controls='nav-objetivo'
                  aria-selected='true'
                >
                  Objetivos
                </button>
                <!-- <button
                  class="nav-link"
                  id="nav-professores-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-professores"
                  type="button"
                  role="tab"
                  aria-controls="nav-professores"
                  aria-selected="false"
                >
                  Professores
                </button> -->
                <button
                  class='nav-link'
                  id='nav-funcionamento-tab'
                  data-bs-toggle='tab'
                  data-bs-target='#nav-funcionamento'
                  type='button'
                  role='tab'
                  aria-controls='nav-funcionamento'
                  aria-selected='false'
                >
                  Funcionamento do Curso
                </button>
                <button
                  class='nav-link'
                  id='nav-perfil-tab'
                  data-bs-toggle='tab'
                  data-bs-target='#nav-perfil'
                  type='button'
                  role='tab'
                  aria-controls='nav-perfil'
                  aria-selected='false'
                >
                  Perfil do Egresso
                </button>
                <button
                  class='nav-link'
                  id='nav-disciplinas-tab'
                  data-bs-toggle='tab'
                  data-bs-target='#nav-disciplinas'
                  type='button'
                  role='tab'
                  aria-controls='nav-disciplinas'
                  aria-selected='false'
                >
                  Disciplinas
                </button>
                <button
                  class='nav-link'
                  id='nav-documentos-tab'
                  data-bs-toggle='tab'
                  data-bs-target='#nav-documentos'
                  type='button'
                  role='tab'
                  aria-controls='nav-documentos'
                  aria-selected='false'
                >
                  Documentos
                </button>
              </div>
            </nav>
            <div class='tab-content about-text pt-4' id='nav-tabContent'>
              <div
                class='tab-pane fade show active'
                id='nav-apresentacao'
                role='tabpanel'
                aria-labelledby='nav-apresentacao-tab'
              >
                <h5>
                  Inteligência Artificial Aplicada - Pós-graduação Lato Sensu
                </h5>
                <p>
                  O curso de pós-graduação Lato Sensu ofertado pelo Instituto Federal de Goiás visa formar profissionais
                  com a capacidade de trabalhar e aplicar as tecnologias mais recentes da área de Inteligência
                  Artificial, Aprendizado de Máquina e Recuperação de Informação.
                </p>
                <p>
                  Durante o curso, os alunos irão desenvolver competências em Inteligência Artificial, aprender métodos
                  computacionais para gerar padrões e inferências que possam ser aplicados em diversos contextos e
                  negócios. O curso tem ainda por objetivo contribuir para a desenvolvimento socioeconômico e
                  tecnológico da região Centro-Oeste e do Brasil, habilitando novos profissionais para atuarem numa das
                  áreas mais pervasivas da computação, a Inteligência Artificial.
                </p>
              </div>
              <div
                class='tab-pane fade'
                id='nav-objetivo'
                role='tabpanel'
                aria-labelledby='nav-objetivo-tab'
              >
                <h5>OBJETIVO GERAL</h5>
                <p>
                  Formar profissionais com a capacidade de coletar, processar e
                  transformar dados em informações, desenvolvendo habilidades
                  para interpretação de padrões e tendências no contexto de
                  negócio em que atuam, e ainda propor soluções para automação
                  de processos e auxílio à tomada de decisões.&nbsp;
                </p>
                <h5 class='mt-4'>OBJETIVOS ESPECÍFICOS</h5>
                <p>
                  Para atingir o objetivo geral proposto para este curso de
                  especialização, tem-se o detalhamento que segue:
                </p>
                <ul class='about-list'>
                  <li>
                    <i class='fa fa-circle mr-1'></i> Capacitar os alunos a
                    projetar e desenvolver soluções diversas em Inteligência
                    Artificial;
                  </li>
                  <li>
                    <i class='fa fa-circle'></i> Oferecer formação técnica dos
                    alunos para que sejam capazes de analisar o estado da arte
                    em Inteligência Artificial com forte embasamento conceitual
                    e prático;
                  </li>
                  <li>
                    <i class='fa fa-circle'></i> Capacitar os alunos no domínio
                    ferramental moderno para o desenvolvimento de projetos e
                    soluções de Inteligência Artificial;
                  </li>
                  <li>
                    <i class='fa fa-circle'></i> Capacitar os alunos a modelar e
                    desenvolver sistemas de suporte a decisão por meio do uso de
                    Pesquisa Operacional aplicada;
                  </li>
                  <li>
                    <i class='fa fa-circle'></i> Estimular e potencializar o
                    ecossistema de inovação por meio da aplicação de
                    Inteligência Artificial em projetos inovadores e startups;
                  </li>
                  <li>
                    <i class='fa fa-circle'></i> Promover intercâmbio entre
                    instituições públicas e/ou privadas e profissionais que
                    atuam em Inteligência Artificial;
                  </li>
                  <li>
                    <i class='fa fa-circle'></i> Realizar estudos de projetos de
                    Inteligência Artificial Aplicada.
                  </li>
                </ul>
              </div>
              <!-- <div
                class="tab-pane fade"
                id="nav-professores"
                role="tabpanel"
                aria-labelledby="nav-professores-tab"
              >
                <p>
                  Msc. Alessandro Rodrigues e Silva<br />Linhas de Pesquisa:
                  Processamento de Imagens 2D/3D e Computação em Nuvem
                  <br />Currículo Lattes:&nbsp;<a
                    href="http://lattes.cnpq.br/6278694958208888"
                    rel="alternate"
                    >http://lattes.cnpq.br/6278694958208888</a
                  >
                </p>
                <p>
                  Msc. Alexandre Bellezi José <br />Linhas de Pesquisa: Internet
                  das Coisas e Engenharia de Software <br />Currículo
                  Lattes:&nbsp;<a
                    href="http://lattes.cnpq.br/9765585618707211"
                    rel="alternate"
                    >http://lattes.cnpq.br/9765585618707211</a
                  >
                </p>
                <p>
                  Dr. Daniel Xavier de Sousa Doutorado <br />Linhas de Pesquisa:
                  Recuperação de Informação e Aprendizado de Máquina
                  <br />Currículo Lattes:&nbsp;<a
                    href="http://lattes.cnpq.br/4603724338719739"
                    rel="alternate"
                    >http://lattes.cnpq.br/4603724338719739</a
                  >
                </p>
                <p>
                  Dr. Eduardo Noronha de Andrade Freitas<br />Linhas de
                  Pesquisa: Pesquisa Operacional Aplicada e Engenharia de
                  Software Baseada em Busca <br />Currículo Lattes:&nbsp;<a
                    href="http://lattes.cnpq.br/8639235593693663"
                    rel="alternate"
                    >http://lattes.cnpq.br/8639235593693663</a
                  >
                </p>
                <p>
                  Dra. Kátia Cilene Costa Fernandes<br />Linhas de Pesquisa:
                  Pesquisa Operacional e Matemática Computacional
                  <br />Currículo Lattes:&nbsp;<a
                    href="http://lattes.cnpq.br/8575752368239596"
                    rel="alternate"
                    >http://lattes.cnpq.br/8575752368239596</a
                  >
                </p>
                <p>
                  Dr. Luiz Fernando Batista Loja<br />Linhas de Pesquisa:
                  Programação em Jogos Digitais e Engenharia de Software
                  <br />Currículo Lattes:&nbsp;<a
                    href="http://lattes.cnpq.br/0807441004466785"
                    rel="alternate"
                    >http://lattes.cnpq.br/0807441004466785</a
                  >
                </p>
                <p>
                  Dr. Raphael de Aquino Gomes Doutorado<br />Linhas de Pesquisa:
                  Computação em Nuvem e Internet das Coisas <br />Currículo
                  Lattes:&nbsp;<a
                    href="http://lattes.cnpq.br/4136576326278536"
                    rel="alternate"
                    >http://lattes.cnpq.br/4136576326278536</a
                  >
                </p>
                <p>
                  Dr. Sérgio Daniel Canuto<br />Linhas de Pesquisa: Recuperação
                  de Informação e Aprendizado de Máquina <br />Currículo
                  Lattes:&nbsp;<a
                    href="http://lattes.cnpq.br/5172447060300953"
                    rel="alternate"
                    >http://lattes.cnpq.br/5172447060300953</a
                  >
                </p>
                <p>
                  Dr. Sirlon Diniz de Carvalho<br />Linhas de Pesquisa:
                  Inteligência de Negócios <br />Currículo Lattes:&nbsp;<a
                    href="http://lattes.cnpq.br/5607449747114793"
                    rel="alternate"
                    >http://lattes.cnpq.br/5607449747114793</a
                  >
                </p>
              </div> -->
              <div
                class='tab-pane fade'
                id='nav-funcionamento'
                role='tabpanel'
                aria-labelledby='nav-funcionamento-tab'
              >
                <table class='table'>
                  <tbody>
                  <tr>
                    <th scope='row'>Habilitação</th>
                    <td>Especialista em Inteligência Artificial Aplicada</td>
                  </tr>
                  <tr>
                    <th scope='row'>Carga Horária</th>
                    <td>360 horas</td>
                  </tr>
                  <tr>
                    <th scope='row'>Trabalho de Conclusão de Curso</th>
                    <td>60 horas</td>
                  </tr>
                  <tr>
                    <th scope='row'>Carga Horária Total</th>
                    <td>420 horas</td>
                  </tr>
                  <tr>
                    <th scope='row'>Duração do Curso</th>
                    <td>
                      Mínimo: 12 meses
                      <br />
                      Máximo 24 meses ( Art. 10 da Resolução 08 de 18/05/2015)
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>Número de Vagas</th>
                    <td>30 (trinta)</td>
                  </tr>
                  <tr>
                    <th scope='row'>Funcionamento</th>
                    <td>
                      Sexta-feira: 15h às 18h e 19h às 22h<br />
                      Sábado: 09h às 12h
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>Departamento Responsável pelo Curso</th>
                    <td>
                      Goiânia: Departamento de Áreas Acadêmicas I
                      <br />
                      Anápolis: Departamento de Áreas Acadêmicas V
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>Coordenador do Curso</th>
                    <td>
                      Câmpus Goiânia: Prof. Dr. Eduardo Noronha de Andrade
                      Freitas <br />
                      Câmpus Anápolis: Prof. Dr. Daniel Xavier de Sousa
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>Modalidade</th>
                    <td>Presencial</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div
                class='tab-pane fade'
                id='nav-perfil'
                role='tabpanel'
                aria-labelledby='nav-perfil-tab'
              >
                <h5>HABILIDADES E COMPETÊNCIAS</h5>
                <p>O profissional formado neste curso estará apto a:</p>
                <ul class='about-list'>
                  <li>
                    <i class='fa fa-circle mr-1'></i>&nbsp;Projetar, desenvolver
                    e implementar projetos de sistemas de inteligência
                    artificial aplicada nos mais diversos contextos de atuação;
                  </li>
                  <li>
                    <i class='fa fa-circle mr-1'></i>&nbsp;Entender e interagir
                    com eficácia em projetos multidisciplinares que envolvam o
                    uso de IA;
                  </li>
                  <li>
                    <i class='fa fa-circle mr-1'></i>&nbsp;Assessorar em
                    assuntos sobre Inteligência Artificial, especificando as
                    soluções técnicas disponíveis no mercado;
                  </li>
                  <li>
                    <i class='fa fa-circle mr-1'></i>&nbsp;Identificar as
                    potencialidades e limitações das tecnologias em Inteligência
                    Artificial;
                  </li>
                  <li>
                    <i class='fa fa-circle mr-1'></i>&nbsp;Discutir os impactos
                    no contexto de negócio produzidos pela implantação de
                    projetos na área de Inteligência Artificial;
                  </li>
                  <li>
                    <i class='fa fa-circle mr-1'></i>&nbsp;Dedicar-se à pesquisa
                    e ao ensino dentro de sua área de especialização;
                  </li>
                  <li>
                    <i class='fa fa-circle mr-1'></i>&nbsp;Promover o espírito
                    investigativo, a criatividade e a curiosidade científica.
                  </li>
                  <li>
                    <i class='fa fa-circle mr-1'></i>&nbsp;Atuar na
                    identificação de problemas e ser capaz de apontar soluções
                    para questões por meio do uso de Inteligência Artificial
                    aplicada.
                  </li>
                </ul>
                <h5 class='mt-4'>ÁREAS DE ATUAÇÃO DO PROFISSIONAL</h5>
                <p>
                  Dado a natureza transversal de aplicação da Inteligência
                  Artificial, o profissional formado no curso de Pós-Graduação
                  Lato Sensu do IFG, estará apto a atuar em empresas públicas e
                  privadas nos mais diversos setores, tais como: industrial,
                  agroindustrial, agronegócio, educação, saúde, transporte,
                  cadeia de suprimento, energia, empresas de desenvolvimentos de
                  equipamentos e tecnologias de energias, empresas de pesquisas
                  e&nbsp; de desenvolvimento tecnológico e inovação, dentre
                  outras.
                </p>
              </div>
              <div
                class='tab-pane fade'
                id='nav-disciplinas'
                role='tabpanel'
                aria-labelledby='nav-disciplinas-tab'
              >
                <table class='table'>
                  <thead>
                  <tr>
                    <th class='text-center' scope='col' colspan='3'>
                      COMPONENTES CURRICULARES
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th class='text-center' scope='col' colspan='2'>
                      Módulos 1 e 2 (180 horas)
                    </th>
                    <th class='text-center text-uppercase' scope='row'>
                      CARGA HORÁRIA (HORAS)
                    </th>
                  </tr>
                  <tr>
                    <td class='text-center'>1</td>
                    <td>Inteligência Artificial</td>
                    <td class='text-center'>30</td>
                  </tr>
                  <tr>
                    <td class='text-center'>2</td>
                    <td>Linguagem de Programação Aplicada</td>
                    <td class='text-center'>30</td>
                  </tr>
                  <tr>
                    <td class='text-center'>3</td>
                    <td>Estatística Aplicada</td>
                    <td class='text-center'>30</td>
                  </tr>
                  <tr>
                    <td class='text-center'>4</td>
                    <td>Modelagem de Dados para IA</td>
                    <td class='text-center'>30</td>
                  </tr>
                  <tr>
                    <td class='text-center'>5</td>
                    <td>Machine Learning</td>
                    <td class='text-center'>30</td>
                  </tr>
                  <tr>
                    <td class='text-center'>6</td>
                    <td>Big Data</td>
                    <td class='text-center'>30</td>
                  </tr>
                  <tr>
                    <th class='text-center' scope='row' colspan='2'>
                      Módulos 3 e 4 (180 horas)
                    </th>
                    <td></td>
                  </tr>
                  <tr>
                    <td class='text-center'>7</td>
                    <td>Cloud Computing</td>
                    <td class='text-center'>30</td>
                  </tr>
                  <tr>
                    <td class='text-center'>8</td>
                    <td>Deep Learning</td>
                    <td class='text-center'>30</td>
                  </tr>
                  <tr>
                    <td class='text-center'>9</td>
                    <td>Metodologia de Pesquisa Científica</td>
                    <td class='text-center'>30</td>
                  </tr>
                  <tr>
                    <td class='text-center'>10</td>
                    <td>Processamento de Linguagem Natural</td>
                    <td class='text-center'>30</td>
                  </tr>
                  <tr>
                    <td class='text-center'>11</td>
                    <td>Tópicos Avançados em IA</td>
                    <td class='text-center'>30</td>
                  </tr>
                  <tr>
                    <td class='text-center'>12</td>
                    <td>Modelagem e Otimização Aplicada</td>
                    <td class='text-center'>30</td>
                  </tr>
                  <tr>
                    <td class='text-center' colspan='2'>
                      TCC – TRABALHO DE CONCLUSÃO DE CURSO
                    </td>
                    <td class='text-center'>60</td>
                  </tr>
                  <tr>
                    <td class='text-center' colspan='2'>
                      CARGA HORÁRIA TOTAL DO CURSO
                    </td>
                    <td class='text-center'>420</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div
                class='tab-pane fade'
                id='nav-documentos'
                role='tabpanel'
                aria-labelledby='nav-documentos-tab'
              >
                <h5>Documentos</h5>
                <p>
                  <a
                    href='/sites/www.ifg.edu.br/attachments/article/22626/PPC - Pós IA2_Revisao - FINAL.pdf'
                    rel='alternate'
                  >Projeto Pedagógico do Curso</a
                  >
                </p>
                <p>
                  <a
                    href='/sites/www.ifg.edu.br/attachments/article/22626/ResolucaoAprovacaoCONSUP.pdf'
                    rel='alternate'
                  >Resolução 55/2021 - Aprovação no CONSUP</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <team class='mb-5' title='Professores da Pós' :members='members' />
  </div>
</template>

<script>
import team from '~/components/home-sections/team.vue'

export default {
  components: { team },
  head: {
    title: 'Pós-Graduação | IA no IFG',
    link: [
      { rel: 'canonical', href: 'https://ia.bcc.anapolis.ifg.edu.br/pos-graduacao' }
    ]
  },
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
