<template>
  <section class='team-section spad'>
    <div class='container'>
      <div class='section-title text-center'>
        <h3>Professores</h3>
        <!--        <p>The professional standards and expectations</p>-->
      </div>
      <client-only>
        <carousel v-bind="{
            loop: true,
            nav: false,
            dots: true,
            mouseDrag: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {0:{items:1},768:{items:3}}
          }">
          <div v-for='member in team' :key='member.name' class='row'>
            <div class='col-12'>
              <div class='member'>
                <img class='member-pic' loading='eager' :src='member.photo' alt=''>
                <h5>{{ member.name }}</h5>
                <p v-for='discipline in member.disciplines' :key='Math.random() * 100000'>{{ discipline }}</p>
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
        photo: 'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4775630T4',
        disciplines: ['Processamento de Imagens 2D/3D', 'Computação em Nuvem'],
        socials: [
          { url: '', type: 'lattes' },
          { url: '', type: 'lattes' },
          { url: '', type: 'lattes' }
        ]
      },
      {
        name: 'Msc. Alexandre Bellezi José',
        photo: '/img/member/alexandre.jpeg',
        disciplines: ['Internet das Coisas', 'Engenharia de Software'],
        socials: [
          { url: '', type: 'lattes' },
          { url: '', type: 'lattes' },
          { url: '', type: 'lattes' }
        ]
      },
      {
        name: 'Dr. Daniel Xavier Souza',
        photo: '/img/member/daniel2.jpg',
        disciplines: ['Recuperação de Informação', 'Aprendizado de Máquina'],
        socials: [
          { url: '', type: 'lattes' },
          { url: '', type: 'lattes' },
          { url: '', type: 'lattes' }
        ]
      },
      {
        name: 'Dr. Eduardo Noronha de Andrade Freitas',
        photo: 'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4755037J2',
        disciplines: ['Pesquisa Operacional Aplicada', 'Engenharia de Software Baseada em Busca'],
        socials: [
          { url: '', type: 'lattes' },
          { url: '', type: 'lattes' },
          { url: '', type: 'lattes' }
        ]
      },
      {
        name: 'Dra. Kátia Cilene Costa Fernandes',
        photo: 'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4720599Y3',
        disciplines: ['Pesquisa Operacional', 'Matemática Computacional'],
        socials: [
          { url: '', type: 'lattes' },
          { url: '', type: 'lattes' },
          { url: '', type: 'lattes' }
        ]
      },
      {
        name: 'Dr. Luiz Fernando Batista Loja',
        photo: '/img/member/loja.jpeg',
        disciplines: ['Programação em Jogos Digitais', 'Engenharia de Software'],
        socials: [
          { url: '', type: 'lattes' },
          { url: '', type: 'lattes' },
          { url: '', type: 'lattes' }
        ]
      },
      {
        name: 'Dr. Raphael de Aquino Gomes Doutorado',
        photo: 'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4130492D0',
        disciplines: ['Computação em Nuvem', 'Internet das Coisas'],
        socials: [
          { url: '', type: 'lattes' },
          { url: '', type: 'lattes' },
          { url: '', type: 'lattes' }
        ]
      },
      {
        name: 'Dr. Sérgio Daniel Canuto',
        photo: 'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4230611A6',
        disciplines: ['Recuperação de Informação', 'Aprendizado de Máquina'],
        socials: [
          { url: '', type: 'lattes' },
          { url: '', type: 'lattes' },
          { url: '', type: 'lattes' }
        ]
      },
      {
        name: 'Dr. Sirlon Diniz de Carvalho',
        photo: 'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4738222Z1',
        disciplines: ['Inteligência de Negócios'],
        socials: [
          { url: '', type: 'lattes' },
          { url: '', type: 'lattes' },
          { url: '', type: 'lattes' }
        ]
      }
    ]
  })
}
</script>

<style scoped>

</style>
