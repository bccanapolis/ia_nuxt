<template>
  <div>
    <div class="site-breadcrumb">
      <div class="container">
        <nuxt-link to="/"><i class="fa fa-home"></i> Home</nuxt-link>
        <i class="fa fa-angle-right"></i>
        <span>Projetos</span>
      </div>
    </div>
    <section class="about-section spad pt-0">
      <div class="container">
        <div class="section-title text-center">
          <h3>Projetos</h3>
          <p>Este são alguns de nossos projetos.</p>
        </div>
        <div class="row">
          <div class="col-12 about-text">
            <h5>Inteligência Energética</h5>
            <ul class="about-list">
              <li>
                <i class="fa fa-circle"></i> Simulador multiagente para o
                mercado de energia.
              </li>
              <li>
                <i class="fa fa-circle"></i> Otimizadores para despacho de
                usinas.
              </li>
              <li>
                <i class="fa fa-circle"></i> Previsores de carga, vazão, chuva.
              </li>
              <li>
                <i class="fa fa-circle"></i> Otimizador de gestão de contratos
                bilaterais no mercado de energia.
              </li>
              <li><i class="fa fa-circle"></i> Sistema piezoelétrico.</li>
            </ul>
            <h5 class="pt-4">Big Data e Computação em Nuvem</h5>
            <ul class="about-list">
              <li>
                <i class="fa fa-circle"></i> Escalonamento de recursos em
                computação em nuvem.
              </li>
            </ul>
            <h5 class="pt-4">Sistemas Tutores Inteligentes</h5>
            <ul class="about-list">
              <li>
                <i class="fa fa-circle"></i> Sistemas Tutores Inteligentes
                utilizando Redes Neurais SOM.
              </li>
              <li>
                <i class="fa fa-circle"></i> Treinamento Automatizado utilizando
                conhecimento do Especialista e Mapas de Kohonen.
              </li>
            </ul>
            <h5 class="pt-4">Inteligência Logística</h5>
            <ul class="about-list">
              <li>
                <i class="fa fa-circle"></i> Inteligência Logística no
                Armazenameto e Movimentação de recursos materiais utilizando IA
                - (P&D CELG D.)
              </li>
            </ul>
            <h5 class="pt-4">Processamento de Linguagem Natural</h5>
            <ul class="about-list">
              <li>
                <i class="fa fa-circle"></i> Sistemas de Recomendação
                Multi-Objetivo Individualizado e Sensível ao Risco
              </li>
              <li>
                <i class="fa fa-circle"></i> Talk2Me - Tratando de textos de
                pessoas com tendências suicidas
              </li>
              <li>
                <i class="fa fa-circle"></i> Stacking (Blending) of Deep
                Learners
              </li>
              <li><i class="fa fa-circle"></i> Bag of Textual Graphs</li>
              <li>
                <i class="fa fa-circle"></i> Sistema Inteligente de Apoio ao
                Pastoreio de Bovinos
              </li>
              <li>
                <i class="fa fa-circle"></i> Sistemas de Recomendação em
                Instituições de Ensino e Pesquisa
              </li>
              <li>
                <i class="fa fa-circle"></i> Classificação Hierárquica de Texto:
                Análise de algoritmos na base de dados do TCE-GO e proposição de
                um novo algoritmo
              </li>
              <li>
                <i class="fa fa-circle"></i> Avaliação de Redes Neurais
                Profundas no Reconhecimento de Voz
              </li>
              <li>
                <i class="fa fa-circle"></i> Algoritmos Deep Forests aplicados
                ao Aprendizado de Ranqueamento
              </li>
            </ul>
            <h5 class="pt-4 text-center">
              Produção Bibliográfica dos Professores Envolvidos
            </h5>
            <img
              src="/img/projetos/img_producao.svg"
              style="width: 100%"
              alt="Produção do grupo de professores"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Projetos',
}
</script>
