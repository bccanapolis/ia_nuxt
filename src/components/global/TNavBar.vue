<template>
  <nav class='nav-section'>
    <div class='container'>
      <div class='nav-right'>
<!--        <a href='#'></a>-->
      </div>
      <ul class='main-menu'>
        <li
          :class="$route.path === link.route ? 'active' : ''"
          v-for='link in links'
          :key='link.route'
        >
          <nuxt-link v-if='!link.external' :to='link.route' custom v-slot='{ navigate, href }'>
            <a @click='navigate' :href='href'>{{ link.name }}</a>
          </nuxt-link>
          <a v-else :href='link.route' rel='noreferrer' target='_blank'>{{ link.name }}</a>

        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TNavBar',
  data: () => ({
    links: [
      { name: 'Home', route: '/' },
      { name: 'Cursos', route: 'http://cursos.ifg.edu.br/', external: true },
      { name: 'Áreas de Atuação', route: '/areas-atuacao' },
      // { name: 'Professores', route: '/professores' },
      { name: 'Pós Graduação', route: '/pos-graduacao' }
    ]
  })
}
</script>

<style scoped></style>
