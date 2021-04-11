<template>
  <div>
    <div class='site-breadcrumb'>
      <div class='container'>
        <nuxt-link to='/'><i class='fa fa-home'></i> Home</nuxt-link>
        <i class='fa fa-angle-right'></i>
        <span>Linhas de Atuação</span>
      </div>
    </div>
    <section class='about-section spad pt-0'>
      <div class='container'>
        <div class='section-title text-center'>
          <h3>Linhas de Atuação</h3>
        </div>
        <div class='row'>
          <div class='col-12 about-text'>
            <h5>Inteligência Energética</h5>
            <p>Sendo a Inteligência Artificial uma área pervasiva, nada mais sinérgico que sua a aplicação em energias,
              independentemente de suas fontes. No IFG essa linha de pesquisa tem conduzido a execução de vários
              projetos, como destaque de: Simulador multiagente para o mercado de energia, Otimizadores para despacho de
              usinas e Otimizador de gestão de contratos bilaterais no mercado de energia.</p>
            <p>Os projetos desenvolvidos no IFG tem como foco o desenvolvimento de soluções de energias provindas de
              fontes renováveis, buscando alternativas para promover o desenvolvimento de processos sustentáveis</p>
            <h5 class='pt-4'>Inteligência Logística</h5>
            <p>Inteligência Logística no Armazenamento e Movimentação de recursos materiais utilizando IA - (P&D CELG
              D.)</p>
            <h5 class='pt-4'>Processamento de Linguagem Natural</h5>
            <p>Na história da Inteligência Artificial, o pesquisador Alan Turing propôs um importante teste nos anos 50
              (chamado de teste de Turing), o objetivo era avaliar a capacidade da máquina de alcançar a inteligência
              humana, justamente em uma tarefa de demandas linguísticas. Estas demandas se mantem ainda mais
              contemporâneas, e os professores do IFG estão alinhados a elas. Projetos nesta linha se destacam como:
              Talk2Me - Tratando de textos de pessoas com tendências suicidas e Classificação Hierárquica de Texto:
              Análise de algoritmos na base de dados do TCE-GO e proposição de um novo algoritmo.</p>
            <h5 class='pt-4'>Sistemas de Recomendação</h5>
            <p>Que tal um dispositivo capaz de acertar seu filme favorito para uma sexta-feira a noite ou num domingo
              pela tarde? Com a grande quantidade de informações sobre nós nos sistemas que interagimos, basta uma boa
              combinação de algoritmos e introdução de alguns conceitos para construirmos os Sistemas de Recomendação.
              Nesta linha, alguns projetos dos nossos professores são: Sistemas de Recomendação Multiobjetivo
              Individualizado e Sensível ao Risco e Sistemas de Recomendação em Instituições de Ensino e Pesquisa.</p>
            <h5 class='pt-4'>Big Data e Computação em Nuvem</h5>
            <p>Com a grande quantidade de dados que as empresas precisam processar, sem precedentes na história, os
              conceitos de Big Data se fazem ainda mais necessários. Junto a isso, utilizar recursos computacionais
              espalhados nas ditas clouds, se mostrar uma combinação bastante adequada. É com essas demandas que nossos
              professores têm trabalhado em projetos como: Sistemas Tutores Inteligentes utilizando Redes Neurais SOM e
              Treinamento Automatizado utilizando conhecimento do Especialista e Mapas de Kohonen.</p>
            <p>Outro elemento pesquisado é a alocação eficiente de recursos em nuvem, visando otimização de custos</p>
            <h5 class='pt-4'>Inteligência na Agropecuária</h5>
            <p>Residindo em um estado de forte ação na agropecuária, se torna quase que uma responsabilidade nossa
              avançarmos em aplicações em que a IA possa contribuir. Estas podem ocorrer de diversas formas, seja na
              criação de animais como em plantações. Alguns dos projetos de destaque de nossos professores são: Sistema
              Inteligente de Apoio ao Pastoreio de Bovinos. <strong>EDUARDO VC TEM PROJETO AQUI, CORRETO?</strong></p>
            <h5 class='pt-4'>Aprendizado de Máquina</h5>
            <p>Em meio a tantas aplicações, existe sempre a base, os fundamentos que permitem serem aplicados. Nossos
              professores também possuem forte contribuição na construção de novos algoritmos, seja para Classificação
              Automática de Texto, Aprendizado de Ranqueamento ou mesmos nos mais recentes modelos Deep Learnings.
              Alguns projetos nesta linhão estão, Stacking (Blending) of Deep Learners, Bag of Textual Graphs, Redes
              Neurais Profundas no Reconhecimento de Voz e Algoritmos Deep Forests aplicados ao Aprendizado de
              Ranqueamento.</p>
            <h5 class='pt-4 text-center'>Produção Bibliográfica dos Professores Envolvidos</h5>
            <img
              src='/img/projetos/img_producao.svg'
              style='width: 100%'
              alt='Produção do grupo de professores'
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
  head: {
    title: 'Linhas de Atuação | IA no IFG',
    link: [
      { rel: 'canonical', href: 'https://ia.bcc.anapolis.ifg.edu.br/linhas-atuacao' },
    ]
  }
}
</script>
