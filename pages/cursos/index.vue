<template>
  <div>
    <div class='site-breadcrumb'>
      <div class='container'>
        <nuxt-link to='/'><i class='fa fa-home'></i> Home</nuxt-link>
        <i class='fa fa-angle-right'></i>
        <span>Cursos</span>
      </div>
    </div>
    <section class='about-section spad pt-0'>
      <div class='container'>
        <div class='section-title text-center'>
          <h3>Cursos</h3>
        </div>
        <div class='row'>
          <div class='col-12 about-text'>
            <h5>Pós-Graduação</h5>
            <p>Inteligência Artificial Aplicada</p>
            <h5 class='pt-4'>Graduação Anápolis</h5>
            <p>Bacharelado em Ciência da Computação</p>
            <h5 class='pt-4'>Graduação Goiânia</h5>
            <p>Bacharelado em Sistemas da Informação</p>
            <p class='pt-5'>
              <a href='http://cursos.ifg.edu.br/' rel='noreferrer'>Cursos do Instituto Federal de Goiás</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Cursos',
  head: {
    title: 'Cursos | IA no IFG',
    link: [
      { rel: 'canonical', href: 'https://ia.bcc.anapolis.ifg.edu.br/cursos' }
    ]
  }
}
</script>
