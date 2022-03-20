<template>
  <table class="table table-borderless" id="ementa-table">
    <thead class="border-bottom">
    <tr>
      <th class="text-center" scope="col" colspan="4">
        COMPONENTES CURRICULARES
      </th>
    </tr>
    </thead>
    <tbody>
    <template v-for="(module, indexI) in Object.keys(modules)">
      <tr class="border-bottom bg-gray">
        <th class="text-center" scope="col" colspan="2">
          Módulo {{ module }} (90 horas)
        </th>
        <th class="text-center text-uppercase" scope="row">
          CARGA HORÁRIA (HORAS)
        </th>
        <th></th>
      </tr>
      <template v-for="(discipline, indexJ) in Object.values(modules[module])">
        <tr data-bs-toggle="collapse"
            :href="`#${slugify(city)}-${slugify(discipline.name.replace(/\([^)]*\)/, '')).toLowerCase()}-collapse`"
            role="button"
            aria-expanded="false"
            :aria-controls="`${slugify(city)}-${slugify(discipline.name.replace(/\([^)]*\)/, '')).toLowerCase()}-collapse`">
          <td class="text-center">{{ indexI * 3 + (indexJ + 1) }}</td>
          <td>{{ discipline.name }}</td>
          <td class="text-center">{{ discipline.hour }}</td>
          <td><i class="fa fa-chevron-down"></i></td>
        </tr>
        <tr class="collapse bg-gray"
            :id="`${slugify(city)}-${slugify(discipline.name.replace(/\([^)]*\)/, '')).toLowerCase()}-collapse`">
          <td></td>
          <td colspan="3">
            <p class="ementa-professor"><span class="ementa-topic">Professor</span> {{ discipline.teacher }}</p>
            <p class="ementa-description"><span class="ementa-topic">Ementa</span>&nbsp;{{ discipline.menu }}</p>
          </td>
        </tr>
      </template>
    </template>

    <tr class="border-bottom border-top bg-gray">
      <td class="text-center" colspan="2">
        TCC – TRABALHO DE CONCLUSÃO DE CURSO
      </td>
      <td class="text-center">60</td>
      <td></td>
    </tr>
    <tr class="border-bottom border-top bg-gray">
      <td class="text-center" colspan="2">
        CARGA HORÁRIA TOTAL DO CURSO
      </td>
      <td class="text-center">420</td>
      <td></td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import slugify from "slugify";

export default {
  name: "TabDisciplinasCity",
  props: ["modules", "city"],
  methods: {
    slugify
  }
};
</script>

<style scoped>

</style>
