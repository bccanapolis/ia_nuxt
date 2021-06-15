<template>
  <div>
    <table class='table table-borderless' id='ementa-table'>
      <thead class='border-bottom'>
      <tr>
        <th class='text-center' scope='col' colspan='4'>
          COMPONENTES CURRICULARES
        </th>
      </tr>
      </thead>
      <tbody>
      <tr class='border-bottom bg-gray'>
        <th class='text-center' scope='col' colspan='2'>
          Módulo 1 (90 horas)
        </th>
        <th class='text-center text-uppercase' scope='row'>
          CARGA HORÁRIA (HORAS)
        </th>
        <th></th>
      </tr>
      <tr data-bs-toggle='collapse' href='#inteligencia-artificial-collapse' role='button' aria-expanded='false'
          aria-controls='inteligencia-artificial-collapse'>
        <td class='text-center'>1</td>
        <td>Inteligência Artificial</td>
        <td class='text-center'>30</td>
        <td><i class='fa fa-chevron-down'></i></td>
      </tr>
      <tr class='collapse bg-gray' id='inteligencia-artificial-collapse'>
        <td></td>
        <td colspan='3'>
          <p class='ementa-professor'><span class='ementa-topic'>Professor</span> Dr. Eduardo Noronha</p>
          <p class='ementa-description'><span class='ementa-topic'>Ementa</span>&nbsp;Histórico e Princípios de IA; Resolução de problemas; Métodos de busca;
            Heurísticas; Conhecimento e
            raciocínio; Aprendizado de máquina; Algoritmos Evolutivos e Aplicações de IA.</p>
        </td>
      </tr>
      <tr data-bs-toggle='collapse' href='#liguagem-programacao-aplicada-collapse' role='button' aria-expanded='false'
          aria-controls='liguagem-programacao-aplicada-collapse'>
        <td class='text-center'>2</td>
        <td>Linguagem de Programação Aplicada</td>
        <td class='text-center'>30</td>
        <td><i class='fa fa-chevron-down'></i></td>
      </tr>
      <tr class='collapse bg-gray' id='liguagem-programacao-aplicada-collapse'>
        <td></td>
        <td colspan='3'>
          <p class='ementa-professor'><span class='ementa-topic'>Professor</span> Dr. Luiz Loja</p>
          <p class='ementa-description'><span class='ementa-topic'>Ementa</span>&nbsp;Programação em Python: introdução ao Python, variáveis, estrutura condicional,
            estrutura de repetição,
            vetores, matrizes, listas, funções e dataframes. Principais bibliotecas: Pandas, Numpy e Scypi.</p>
        </td>
      </tr>
      <tr data-bs-toggle='collapse' href='#estatistica-aplicada-collapse' role='button' aria-expanded='false'
          aria-controls='estatistica-aplicada-collapse'>
        <td class='text-center'>3</td>
        <td>Estatística Aplicada</td>
        <td class='text-center'>30</td>
        <td><i class='fa fa-chevron-down'></i></td>
      </tr>
      <tr class='collapse bg-gray' id='estatistica-aplicada-collapse'>
        <td></td>
        <td colspan='12'>
          <p class='ementa-professor'>
            <span class='ementa-topic'>Professor</span> Dra. Kátia Cirlene
          </p>
          <p class='ementa-description'><span class='ementa-topic'>Ementa</span>&nbsp;Introdução à Estatística: descritiva e inferencial; Estudo de populações e
            amostras; Introdução às séries
            estatísticas; Análise de gráficos, histogramas, percentiles e outliers; Probabilidade, variáveis aleatórias,
            funções de distribuição, análise de variância; Teste de hipóteses, p-Value, teste chi-2, intervalo de
            confiança, covariância, regressão, correlação e coeficiente de Pearson; Análise de correlação e regressão
            linear e Introdução aos testes de hipótese com uma amostra.</p>
        </td>
      </tr>

      <tr class='border-bottom border-top bg-gray'>
        <th class='text-center' scope='col' colspan='2'>
          Módulo 2 (90 horas)
        </th>
        <th class='text-center text-uppercase' scope='row'>
          CARGA HORÁRIA (HORAS)
        </th>
        <th></th>
      </tr>
      <tr data-bs-toggle='collapse' href='#modelagem-dados-collapse' role='button' aria-expanded='false'
          aria-controls='modelagem-dados-collapse'>
        <td class='text-center'>4</td>
        <td>Modelagem de Dados para IA</td>
        <td class='text-center'>30</td>
        <td><i class='fa fa-chevron-down'></i></td>

      </tr>
      <tr class='collapse bg-gray' id='modelagem-dados-collapse'>
        <td></td>
        <td colspan='12'>
          <p class='ementa-professor'>
            <span class='ementa-topic'>Professor</span> Dr. Sirlon de Carvalho
          </p>
          <p class='ementa-description'><span class='ementa-topic'>Ementa</span>&nbsp;Modelos de Dados para Tomada de Decisão: Datawarehouse; Quantificação; tabulação
            e análise de dados para IA;
            Introdução ao processamento Digital de Imagem, Áudio e Vídeo; Interpretação de Dados de Sensores: redes,
            RFID,
            Infravermelho.</p>
        </td>
      </tr>

      <tr data-bs-toggle='collapse' href='#machine-learning-collapse' role='button' aria-expanded='false'
          aria-controls='machine-learning-collapse'>
        <td class='text-center'>5</td>
        <td>Machine Learning</td>
        <td class='text-center'>30</td>
        <td><i class='fa fa-chevron-down'></i></td>
      </tr>
      <tr class='collapse bg-gray' id='machine-learning-collapse'>
        <td></td>
        <td colspan='12'>
          <p class='ementa-professor'>
            <span class='ementa-topic'>Professor</span> Dr. Daniel Xavier de Sousa
          </p>

          <p class='ementa-description'><span class='ementa-topic'>Ementa</span>&nbsp;Introdução ao aprendizado de máquina e reconhecimento de padrões; Aprendizado
            supervisionado e
            não-supervisionado; Tarefas: Regressão, Classificação, Agrupamento e Associação;
            Técnicas: Máquinas de Vetores de Suporte, Indução de Árvores de Decisão, Ensemble, Regras de Associação e
            KNN.</p>
        </td>
      </tr>

      <tr data-bs-toggle='collapse' href='#big-data-collapse' role='button' aria-expanded='false'
          aria-controls='big-data-collapse'>
        <td class='text-center'>6</td>
        <td>Big Data</td>
        <td class='text-center'>30</td>
        <td><i class='fa fa-chevron-down'></i></td>

      </tr>
      <tr class='collapse bg-gray' id='big-data-collapse'>
        <td></td>
        <td colspan='12'>
          <p class='ementa-professor'>
            <span class='ementa-topic'>Professor</span> Dr. Raphael Aquino
          </p>
          <p class='ementa-description'><span class='ementa-topic'>Ementa</span>&nbsp;Dos sistemas transacionais ao Big Data; Big Data: Volume, Variedade, Velocidade,
            Veracidade e Valor; Estrutura
            de dados e processamento em Big Data; Métodos analíticos em Big Data;
            Análise e solução de problemas reais em Big Data, envolvendo dados estruturados e não estruturados;
            Frameworks
            e ferramentas para aplicação em IA e ciência de dados.</p>
        </td>
      </tr>

      <tr class='border-bottom border-top bg-gray'>
        <th class='text-center' scope='row' colspan='2'>
          Módulo 3 (90 horas)
        </th>
        <th class='text-center text-uppercase' scope='row'>
          CARGA HORÁRIA (HORAS)
        </th>
        <th></th>
      </tr>
      <tr data-bs-toggle='collapse' href='#cloud-computing-collapse' role='button' aria-expanded='false'
          aria-controls='cloud-computing-collapse'>
        <td class='text-center'>7</td>
        <td>Cloud Computing</td>
        <td class='text-center'>30</td>
        <td><i class='fa fa-chevron-down'></i></td>

      </tr>
      <tr class='collapse bg-gray' id='cloud-computing-collapse'>
        <td></td>
        <td colspan='12'>
          <p class='ementa-professor'>
            <span class='ementa-topic'>Professor</span> Dr. Raphael Aquinno e Msc. Alessandro Rodrigues
          </p>
          <p class='ementa-description'><span class='ementa-topic'>Ementa</span>&nbsp;Visão geral dos conceitos de nuvem, principais serviços em nuvem, segurança,
            arquitetura, monitoramento,
            preços e suporte; Máquinas virtuais, contêineres, clusters e soluções serverless; Frameworks e soluções de
            aprendizado de máquina, Big Data e visão computacional em nuvem.</p>
        </td>
      </tr>

      <tr data-bs-toggle='collapse' href='#deep-learning-collapse' role='button' aria-expanded='false'
          aria-controls='deep-learning-collapse'>
        <td class='text-center'>8</td>
        <td>Deep Learning</td>
        <td class='text-center'>30</td>
        <td><i class='fa fa-chevron-down'></i></td>

      </tr>
      <tr class='collapse bg-gray' id='deep-learning-collapse'>
        <td></td>
        <td colspan='12'>
          <p class='ementa-professor'>
            <span class='ementa-topic'>Professor</span> Dr. Sérgio Canuto
          </p>
          <p class='ementa-description'><span class='ementa-topic'>Ementa</span>&nbsp;Perceptron; MLP; Regularização e sua variantes; Redes Convolucionais;
            Modelagem de Sequências: Recorrentes e LSTM; AutoEncoders e Transformes</p>
        </td>
      </tr>

      <tr data-bs-toggle='collapse' href='#metodologia-pesquisa-collapse' role='button' aria-expanded='false'
          aria-controls='metodologia-pesquisa-collapse'>
        <td class='text-center'>9</td>
        <td>Metodologia de Pesquisa Científica</td>
        <td class='text-center'>30</td>
        <td><i class='fa fa-chevron-down'></i></td>

      </tr>
      <tr class='collapse bg-gray' id='metodologia-pesquisa-collapse'>
        <td></td>
        <td colspan='12'>
          <p class='ementa-professor'>
            Diversos professores
          </p>
          <p class='ementa-description'><span class='ementa-topic'>Ementa</span>&nbsp;Técnicas para elaboração de projetos e construção de textos que apresentem os
            resultados
            Estudo da natureza do conhecimento científico, objetivando a compreensão,
            a realização de um projeto de pesquisa e a apresentação (escrita e oral) de um trabalho monográfico.</p>
        </td>
      </tr>

      <tr class='border-bottom border-top bg-gray'>
        <th class='text-center' scope='col' colspan='2'>
          Módulo 4 (90 horas)
        </th>
        <th class='text-center text-uppercase' scope='row'>
          CARGA HORÁRIA (HORAS)
        </th>
        <th></th>
      </tr>
      <tr data-bs-toggle='collapse' href='#processamento-linguagem-collapse' role='button' aria-expanded='false'
          aria-controls='processamento-linguagem-collapse'>
        <td class='text-center'>10</td>
        <td>Processamento de Linguagem Natural</td>
        <td class='text-center'>30</td>
        <td><i class='fa fa-chevron-down'></i></td>

      </tr>
      <tr class='collapse bg-gray' id='processamento-linguagem-collapse'>
        <td></td>
        <td colspan='12'>
          <p class='ementa-professor'>
            <span class='ementa-topic'>Professor</span> Dr. Daniel Xavier de Sousa
          </p>
          <p class='ementa-description'><span class='ementa-topic'>Ementa</span>&nbsp;Embeddings; Representações; Sistemas de Recomendação; Learning to Rank; Análise
            de Sentimentos.</p>
        </td>
      </tr>

      <tr data-bs-toggle='collapse' href='#topicos-avancados-collapse' role='button' aria-expanded='false'
          aria-controls='topicos-avancados-collapse'>
        <td class='text-center'>11</td>
        <td>Tópicos Avançados em IA</td>
        <td class='text-center'>30</td>
        <td><i class='fa fa-chevron-down'></i></td>

      </tr>
      <tr class='collapse bg-gray' id='topicos-avancados-collapse'>
        <td></td>
        <td colspan='12'>
          <p class='ementa-professor'>
            Diversos Professores
          </p>
        </td>
      </tr>

      <tr data-bs-toggle='collapse' href='#modelagem-otimizacao-collapse' role='button' aria-expanded='false'
          aria-controls='modelagem-otimizacao-collapse'>
        <td class='text-center'>12</td>
        <td>Modelagem e Otimização Aplicada</td>
        <td class='text-center'>30</td>
        <td><i class='fa fa-chevron-down'></i></td>

      </tr>
      <tr class='collapse bg-gray' id='modelagem-otimizacao-collapse'>
        <td></td>
        <td colspan='12'>
          <p class='ementa-professor'>
            <span class='ementa-topic'>Professor</span> Dra. Kátia Cirlene e Dr. Eduardo Noronha
          </p>
          <p class='ementa-description'><span class='ementa-topic'>Ementa</span>&nbsp;Modelagem matemática de problemas; estudo de problemas e soluções com
            programação: linear, inteira, inteira
            mista, e não linear;Análise de sensibilidade, modelos de simulação (determinístico e estocástico);Problemas
            multiobjetivo; solvers e técnicas de solução.</p>
        </td>
      </tr>

      <tr class='border-bottom border-top bg-gray'>
        <td class='text-center' colspan='2'>
          TCC – TRABALHO DE CONCLUSÃO DE CURSO
        </td>
        <td class='text-center'>60</td>
        <td></td>
      </tr>
      <tr class='border-bottom border-top bg-gray'>
        <td class='text-center' colspan='2'>
          CARGA HORÁRIA TOTAL DO CURSO
        </td>
        <td class='text-center'>420</td>
        <td></td>

      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
export default {
  name: 'TabDisciplinas',
  info: {
    name: 'disciplinas',
    label: 'Disciplinas'
  }
}
</script>

<style scoped>

</style>
