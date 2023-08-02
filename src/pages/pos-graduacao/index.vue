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
    <Team :members="members" class='mb-5' title='Professores da Pós' />
  </div>
</template>

<script>
import Team from '~/components/home-sections/team.vue'
import TabApresentacao from '~/components/TabApresentacao'
import TabObjetivos from '~/components/TabObjetivos'
import TabFuncionamentoCurso from '~/components/TabFuncionamentoCurso'
import TabPerfilEgresso from '~/components/TabPerfilEgresso'
import TabDisciplinas from '~/components/TabDisciplinas'
import TabDocumentos from '~/components/TabDocumentos'
import TabCalendarios from '~/components/TabCalendarios'

export default {
  components: { Team },
  head: {
    title: 'Pós-Graduação | IA no IFG',
    link: [
      { rel: 'canonical', href: 'https://ia.bcc.anapolis.ifg.edu.br/pos-graduacao' }
    ]
  },
  async asyncData({$axios}) {
    const {data: members} = await (await $axios.get(`/items/professor?filter[status][_eq]=published&sort=name`)).data

    return {
      members
    }
  },
  data: () => ({
    // tabsChildren: [TabEmentas],
    tabsChildren: [TabApresentacao, TabObjetivos, TabFuncionamentoCurso, TabPerfilEgresso, TabDisciplinas, TabCalendarios, TabDocumentos]
  })
}
</script>
