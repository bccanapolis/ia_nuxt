<template>
  <div>
<!--    <nav>-->
<!--      <div class='nav nav-tabs' id='nav-tab' role='tablist'>-->
<!--        <button-->
<!--          v-for='(child, index) in Object.keys(children)'-->
<!--          :class='`nav-link ${index === 0 ? `active`: ``}`'-->
<!--          :id='`nav-${child}-tab`'-->
<!--          data-bs-toggle='tab'-->
<!--          :data-bs-target='`#nav-${child}`'-->
<!--          type='button'-->
<!--          role='tab'-->
<!--          :aria-controls='`nav-${child}`'-->
<!--          aria-selected='true'-->
<!--        >-->
<!--          <span class='capitalize'>{{ child }}</span>-->
<!--        </button>-->
<!--      </div>-->
<!--    </nav>-->
<!--    <div class='tab-content about-text pt-4' id='nav-tabContent'>-->
      <div
        v-for='(child, index) in Object.keys(children)'
        :class='`tab-pane fade show ${index === 0 ? `active`: ``}`'
        :id='`nav-${child}`'
        role='tabpanel'
        :aria-labelledby='`nav-${child}-tab`'
      >
        <TabDisciplinasCity :modules='children[child]' :city='child' />
      </div>
<!--    </div>-->
  </div>
</template>

<script>

export default {
  name: 'TabDisciplinas',
  info: {
    name: 'disciplinas',
    label: 'Disciplinas'
  },
  data: () => ({
    children: {
      'Anápolis': {
        1: [
          {
            name: 'Inteligência Artificial (Quinta-feira às 19h, Aula Remota)',
            hour: 30,
            teacher: 'Msc. Roney Lopes Lima',
            menu: 'Histórico e Princípios de IA; Resolução de problemas; Métodos de busca; Heurísticas; Conhecimento e raciocínio; Algoritmos Evolutivos e Aplicações de IA.'
          },
          {
            name: 'Linguagem de Programação Aplicada (Sexta-feira, presencial)',
            hour: 30,
            teacher: 'Msc. Renan Rodrigues',
            menu: 'Programação em Python: introdução ao Python, variáveis, estrutura condicional, estrutura de repetição, vetores, matrizes, listas, funções e dataframes. Principais bibliotecas: Pandas, Numpy e Scypi.'
          },
          {
            name: 'Estatística Aplicada (Sexta-feira, presencial)',
            hour: 30,
            teacher: 'Msc. Eder Silva de Brito',
            menu: 'Introdução à Estatística: descritiva e inferencial; Estudo de populações e amostras; Introdução às séries estatísticas; Análise de gráficos, histogramas, percentiles e outliers; Probabilidade, variáveis aleatórias, funções de distribuição, análise de variância; Teste de hipóteses, p-Value, teste chi-2, intervalo de confiança, covariância, regressão, correlação e coeficiente de Pearson; Análise de correlação e regressão linear e Introdução aos testes de hipótese com uma amostra.'
          }
        ],
        2: [
          {
            name: 'Modelagem de Dados para IA (Quinta-feira às 19h, Aula Remota)',
            hour: 30,
            teacher: 'Dr. Gustavo Assis da Costa',
            menu: 'Identificação das Diferentes Formas e Estrutura de Dados; Limpeza, Filtragem, Reorganização, Imputação, Aumento e Agregação de Dados; Visualização de Dados; Análise e Estatística Descritiva dos Dados; Pipelines de Processamento dos Dados para Vinculação das Etapas'
          },
          {
            name: 'Machine Learning (Sexta-feira, presencial)',
            hour: 30,
            teacher: 'Dr. Lucas de Almeida Ribeiro',
            menu: 'Introdução ao aprendizado de máquina e reconhecimento de padrões; Aprendizado supervisionado e não-supervisionado; Tarefas: Regressão, Classificação, Agrupamento e Associação; Técnicas: Máquinas de Vetores de Suporte, Indução de Árvores de Decisão, Ensemble, Regras de Associação e KNN.'
          },
          {
            name: 'Cloud Computing (Sexta-feira, presencial)',
            hour: 30,
            teacher: 'Dr. Raphael Aquinno',
            menu: 'Visão geral dos conceitos de nuvem, principais serviços em nuvem, segurança, arquitetura, monitoramento, preços e suporte; Máquinas virtuais, contêineres, clusters e soluções serverless; Frameworks e soluções de aprendizado de máquina, Big Data e visão computacional em nuvem.'
          }
        ],
        3: [
          {
            name: 'Deep Learning (Sexta-feira, presencial)',
            hour: 30,
            teacher: 'Dr. Sérgio Canuto',
            menu: 'Perceptron; MLP; Regularização e sua variantes; Redes Convolucionais; Modelagem de Sequências: Recorrentes e LSTM; AutoEncoders e Transformes'
          },
          {
            name: 'Modelagem e Otimização Aplicada (Quinta-feira às 19h, Aula Remota)',
            hour: 30,
            teacher: 'Dr. Daywes Pinheiro Neto',
            menu: 'Modelagem matemática de problemas; estudo de problemas e soluções com programação: linear, inteira, inteira mista, e não linear;Análise de sensibilidade, modelos de simulação (determinístico e estocástico);Problemas multiobjetivo; solvers e técnicas de solução.'
          },
          {
            name: 'Visão Computacional (Sexta-feira, presencial)',
            hour: 30,
            teacher: 'Msc. Alessandro Rodrigues e Silva',
            menu: 'Aquisição de Imagens, Filtragem no Domínio Espacial e Frequência, Segmentação, Reconhecimento de Padrões, Detecção de Características, Composição de Imagens, Estimação de Movimento, Estimação de profundidade, Imagens sintéticas e Reconstrução 3D.'
          }
        ],
        4: [
          {
            name: 'Processamento de Linguagem Natural (Sexta-feira, presencial)',
            hour: 30,
            teacher: 'Dr. Daniel Xavier de Sousa',
            menu: 'Embeddings; Representações; Sistemas de Recomendação; Learning to Rank; Análise de Sentimentos.'
          },
          {
            name: 'Tópicos Avançados em IA (Sexta-feira, presencial)',
            hour: 30,
            teacher: 'Diversos Professores',
            menu: 'Depende to tópico oferecido.'
          },

          {
            name: 'Metodologia de Pesquisa Científica (Quinta-feira às 19h, Aula Remota)',
            hour: 30,
            teacher: 'Dr. Alan Keller Gomes',
            menu: 'Técnicas para elaboração de projetos e construção de textos que apresentem os resultados Estudo da natureza do conhecimento científico, objetivando a compreensão, a realização de um projeto de pesquisa e a apresentação (escrita e oral) de um trabalho monográfico.'
          }
        ]
      }
    }
  })
}
</script>

<style scoped>

</style>
