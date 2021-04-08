<template>
  <div>
    <Hero />
    <Service />
    <News />
    <Definition />
    <Team />
  </div>
</template>

<script>
import Hero from '~/components/home-sections/hero'
import Service from '~/components/home-sections/service'
import Definition from '~/components/home-sections/definition'
import Team from '~/components/home-sections/team'
import News from '~/components/home-sections/news'

export default {
  name: 'Home',
  components: { News, Team, Definition, Service, Hero }
}
</script>
