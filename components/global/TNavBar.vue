<template>
  <nav class="nav-section">
    <div class="container">
      <!-- <div class="nav-right">
        <a href="#"><i class="fa fa-search"></i></a>
        <a href="#"><i class="fa fa-shopping-cart"></i></a>
      </div> -->
      <ul class="main-menu" style="display: block">
        <li
          :class="$route.path === link.route ? 'active' : ''"
          v-for="link in links"
          :key="link.route"
        >
          <nuxt-link :to="link.route" custom v-slot="{ navigate, href }">
            <a @click="navigate" :href="href">{{ link.name }}</a>
          </nuxt-link>
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
      { name: 'Cursos', route: '/cursos' },
      { name: 'Projetos', route: '/projetos' },
      { name: 'Professores', route: '/professores' },
    ],
  }),
}
</script>

<style scoped></style>
