<template>
  <div>
    <Hero/>
    <!--    <Service />-->
    <News class='bg-gray spad'/>
    <!--    <Definition />-->
    <Team class='spad' :members='members' title='Professores da Área de IA'/>
    <Partners/>
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
  components: {News, Team, Definition, Service, Hero, Partners},
  async asyncData({$axios}) {
    const {data: members} = await (await $axios.get(`/items/professor?fields=*,user.first_name,user.last_name,user.avatar.id&sort=user.first_name&filter[tags][_contains]=ia`)).data

    return {
      members
    }
  },

}
</script>
