'use client'
import Footer from "@/components/site/footer/page";
import Header from "@/components/site/header";
import HorizontalCard from "@/components/site/horizontalCard";
import NewsCard from "@/components/site/newsCard";
import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const news=[
  {
    id:1,
    category:'Saúde',
    title: 'Cigarros eletrônicos: Anvisa cancela viagem para visitar gigante do tabaco',
    subtitle: 'Anúncio da viagem provocou uma onda de críticas, já ocorreria em meio à forte pressão para liberação dos dispositivos no país',
    datePublished:'20/01/2025 20:11',
    dateUpdated:'20/01/2025  20:13',
    auth:'Fulano',
    body: 'Diretores da Agência Nacional de Vigilância Sanitária (Anvisa) decidiram nesta segunda-feira (20/1) cancelar a viagem que fariam ao Reino Unido para visitar as instalações da British American Tobacco (BAT) e da AstraZeneca. A decisão é reflexo da reação provocada pelo anúncio da viagem, revelada pelo JOTA na semana passada. <br/>A viagem havia sido aprovada em uma reunião de diretoria colegiada. Com data programada entre 28 e 31 de janeiro, a missão custaria cerca de R$ 70 mil para a agência. A programação previa visita às instalações da gigante do tabaco e também da AstraZeneca. O cronograma e itinerário não foram informados, tampouco qual seria o objetivo da missão. <br/>Com notícias da Anvisa e da ANS, o JOTA PRO Saúde entrega previsibilidade e transparência para empresas do setor <br/>O anúncio da viagem provocou uma onda de críticas. A missão ocorreria pouco antes da retomada das atividades do Congresso, onde há forte pressão para liberação no país dos cigarros eletrônicos. <br/>Em abril de 2024, a diretoria colegiada da agência decidiu pela manutenção da proibição de cigarros eletrônicos no país, sob o argumento do princípio da precaução. O raciocínio é o de que o comércio e produção destes aparelhos somente poderiam ser liberados caso houvesse a apresentação de estudos comprovando a sua segurança. Algo que não ocorreu até o momento. Não há na agência nenhuma discussão em curso sobre cigarros eletrônicos. O tema também não está na agenda regulatória. Esses dois fatores foram questionados por críticos. Não havendo discussões, qual seria a necessidade da visita? A Anvisa, contudo, afirmou que este tipo de missão é frequente e não está associada à agenda regulatória. <br/>Em nota divulgada pela Anvisa nesta tarde (20/1), a agência afirma que o assunto de Dispositivos Eletrônicos de Fumar não estavam na pauta da missão. <br/>Antes do cancelamento da viagem ser anunciado pela Anvisa, a AstraZeneca havia informado ao JOTA que o convite aos diretores da agência tinha sido realizado de forma genérica. Não havia uma data específica. A ideia era aproveitar uma eventual visita de diretores ao Reino Unido para que uma reunião nas instalações fosse organizada. De acordo com a farmacêutica, a confirmação ocorreu no fim de 2024. <br/>O JOTA também questionou a BAT sobre detalhes da viagem. Antes do anúncio do cancelamento, a companhia informou, por meio de nota que um dos objetivos da visita era permitir que diretores conhecessem, “de forma técnica e aprofundada a atuação em conformidade com as normas internacionais, além de iniciativas e investimentos em Ciência e Tecnologia.” A empresa destacou ainda que a visita fazia parte de um processo legítimo e transparente.logo-jota',
    image: 'cigarros-eletronicos.jpg',
    alt:'foto de cigarro eletronico',
    section: 1,
    order: 1
  },
  {
    id:2,
    category:'Saúde',
    title: 'Ministério da Saúde é favorável ao texto do PL que cria Marco Legal da IA',
    subtitle: 'Aprovado no Senado em 10 de dezembro, o PL deve tramitar na Câmara dos Deputados ainda no primeiro semestre',
    datePublished:'22/01/2025 20:11',
    dateUpdated:'22/01/2025  20:13',
    auth:'Fulano',
    body: 'O Projeto de Lei 2.338/2023 caminha para ser a primeira regulamentação brasileira sobre uso de Inteligência Artificial (IA) em diversas áreas, incluindo saúde. No campo da Saúde, a proposta traz apenas instruções gerais em duas aplicações: diagnósticos médicos e gestão de prioridade em serviços de emergência, como assistência à saúde. Caso o texto seja aprovado sem alterações neste ponto, estas duas aplicações devem seguir regras mais rígidas de aplicação, publicidade e monitoramento do uso de inteligência artificial. O Ministério da Saúde informou ao JOTA ser favorável ao texto. Aprovado no Senado em 10 de dezembro, o PL deve tramitar na Câmara dos Deputados ainda no primeiro semestre, logo após a volta do recesso parlamentar. O tema é de interesse de diferentes bancadas, com destaque para os deputados Coronel Chrisóstomo (PL/RO), Clodoaldo Magalhães (PV/PE), Eduardo Bismarck (PDT/CE), João Daniel (PT/SE), Julio Lopes (PP/RJ) e Saullo Vianna (UNIÃO/AM).',
    image: 'saude-sus.jpg',
    alt:'foto de saude-sus',
    section: 1,
    order: 2
  },
  {
    id:3,
    category:'Tributos',
    title: 'PGFN regulamenta dispensa de garantia em caso de voto de qualidade no Carf',
    subtitle: 'Para advogados, a medida é positiva, mas critérios adicionais podem gerar dificuldades práticas',
    datePublished:'22/01/2025 20:11',
    dateUpdated:'20/01/2025  20:13',
    auth:'Fulano',
    body: 'A Procuradoria-Geral da Fazenda Nacional (PGFN) regulamentou na última segunda-feira (20/1) o artigo 4º da Lei 14.689/2023, conhecida como Lei do Carf. O dispositivo dispensa da obrigação de apresentar garantia os contribuintes com capacidade de pagamento reconhecida pela PGFN e que tiveram decisão desfavorável no Conselho Administrativo de Recursos Fiscais (Carf) por voto de qualidade. Advogados ouvidos pelo JOTA avaliam que, de um lado, em termos práticos, o contribuinte poderá emitir a certidão de regularidade fiscal mesmo sem apresentar uma garantia tradicional. De outro, a portaria extrapola a lei ao definir critérios adicionais, como a obrigatoriedade de apresentar uma lista de bens de modo geral, não apenas em caso de decisão desfavorável em primeira instância, o que pode resultar em novos litígios.',
    image: 'carf-predio-brasilia.jpg',
    alt:'foto de carf-predio-brasilia',
    section: 1,
    order: 3
  },
  {
    id:4,
    category:'Poder',
    title: 'Podcast Joule analisa as megatendências do setor elétrico na transição energética',
    subtitle: 'Alexandre Viana, CEO da Envol e ex-gerente da CCEE, é o entrevistado da semana',
    datePublished:'21/01/2025 20:11',
    dateUpdated:'21/01/2025  20:13',
    auth:'Fulano',
    body: 'As novas tecnologias no setor elétrico foram destacadas na publicação da Envol sobre “megatendências" do mercado. Entre elas está o hidrogênio, que desponta como principal tema de interesse no universo da eletricidade. Essa e outras novas frentes que estão se abrindo no setor energia são detalhadas por Alexandre Viana, CEO da Envol e ex-gerente da Câmara de Comercialização de Energia Elétrica (CCEE). “O hidrogênio é relevante para a transição energética no contexto brasileiro e mundial, é uma megatendência, mas falta competitividade”, disse Viana no 38º episódio do Joule – podcast de energia do JOTA em parceria com o Inté, o Instituto Brasileiro de Transição Energética. Na entrevista, Viana fala ainda dos dois leilões a serem feitos no país e os principais desafios dos segmentos de recursos distribuídos e os carros elétricos.',
    image: '02-thumb-site-8.jpg',
    alt:'Alexandre Viana, CEO da Envol, empresa de análises do setor elétrico, e ex-gerente da Câmara de Comercialização de Energia Elétrica (CCEE)',
  },
  {
    id:5,
    category:'Economia',
    title: 'Imposto de Renda 2025 para MEI: saiba como declarar',
    subtitle: 'Contribuintes terão até o dia 31 de maio para enviar as informações fiscais da pessoa jurídica',
    datePublished:'20/01/2025 20:11',
    dateUpdated:'20/01/2025  20:13',
    auth:'Fulano',
    body: 'Além da tradicional declaração para o Imposto de Renda da Pessoa Física (IRPF), todo microempreendedor deve apresentar os rendimentos da pessoa jurídica referentes ao ano de 2024 à Receita Federal. O procedimento deve ser realizado por meio da Declaração Anual do Simples Nacional (DASN-SIMEI), e o preenchimento é obrigatório até mesmo para aqueles que não faturaram no ano. Os contribuintes terão até o dia 31 de maio para enviar as informações. O preenchimento anual do DASN-SIMEI é uma obrigação fiscal de todo microempreendedor individual. Caso o contribuinte atrase o envio da declaração, estará sujeito a multa no valor mínimo de R$ 50,00. Se o pagamento for realizado em até 30 dias após o prazo, a multa será reduzida em 50%.',
    image: 'imposto-de-renda-mei.jpg',
    alt:'Microempreendedores precisam declarar os rendimentos de 2024 para a Receita Federal. / Crédito: Joédson Alves/Agência Brasil',
  },
  {
    id:6,
    category:'Saúde',
    title: 'Demissão de trabalhador com dependência química é discriminatória, decide TRT4',
    subtitle: 'Magistrados entenderam que a demissão foi motivada por preconceito social contra pessoas com doença grave',
    datePublished:'20/01/2025 20:11',
    dateUpdated:'20/01/2025  20:13',
    auth:'Fulano',
    body: 'O Tribunal Regional do Trabalho da 4ª Região (TRT4) decidiu que a demissão de um trabalhador que tratava de dependência química foi discriminatória. No acórdão, os magistrados entenderam que a demissão foi motivada por preconceito social contra pessoas com doença grave quando o funcionário estava em internação para tratamento. Segundo os autos, o funcionário trabalhava como auxiliar de produção em uma indústria de couro em São Leopoldo, no Rio Grande do Sul. Com dependência química em cocaína, o trabalhador apresentou atestado de saúde para fazer um tratamento de transtornos mentais em uma comunidade terapêutica. No entanto, o homem foi demitido após a empresa ser informada, pela mãe do funcionário, de suas condições de saúde. Na ação trabalhista, ele afirma que a demissão foi motivada por discriminação, pede a nulidade da dispensa e indenização trabalhista.',
    image: 'demissao-discriminatoria-industria-de-couros.jpg',
    alt:'Crédito: Divulgação/Centro das Indústrias de Curtumes Do Brasil'
  },
  {
    id:7,
    category:'Saúde',
    title: 'Cigarros eletrônicos: Anvisa cancela viagem para visitar gigante do tabaco',
    subtitle: 'Anúncio da viagem provocou uma onda de críticas, já ocorreria em meio à forte pressão para liberação dos dispositivos no país',
    datePublished:'20/01/2025 20:11',
    dateUpdated:'20/01/2025  20:13',
    auth:'Fulano',
    body: 'Diretores da Agência Nacional de Vigilância Sanitária (Anvisa) decidiram nesta segunda-feira (20/1) cancelar a viagem que fariam ao Reino Unido para visitar as instalações da British American Tobacco (BAT) e da AstraZeneca. A decisão é reflexo da reação provocada pelo anúncio da viagem, revelada pelo JOTA na semana passada. <br/>A viagem havia sido aprovada em uma reunião de diretoria colegiada. Com data programada entre 28 e 31 de janeiro, a missão custaria cerca de R$ 70 mil para a agência. A programação previa visita às instalações da gigante do tabaco e também da AstraZeneca. O cronograma e itinerário não foram informados, tampouco qual seria o objetivo da missão. <br/>Com notícias da Anvisa e da ANS, o JOTA PRO Saúde entrega previsibilidade e transparência para empresas do setor <br/>O anúncio da viagem provocou uma onda de críticas. A missão ocorreria pouco antes da retomada das atividades do Congresso, onde há forte pressão para liberação no país dos cigarros eletrônicos. <br/>Em abril de 2024, a diretoria colegiada da agência decidiu pela manutenção da proibição de cigarros eletrônicos no país, sob o argumento do princípio da precaução. O raciocínio é o de que o comércio e produção destes aparelhos somente poderiam ser liberados caso houvesse a apresentação de estudos comprovando a sua segurança. Algo que não ocorreu até o momento. Não há na agência nenhuma discussão em curso sobre cigarros eletrônicos. O tema também não está na agenda regulatória. Esses dois fatores foram questionados por críticos. Não havendo discussões, qual seria a necessidade da visita? A Anvisa, contudo, afirmou que este tipo de missão é frequente e não está associada à agenda regulatória. <br/>Em nota divulgada pela Anvisa nesta tarde (20/1), a agência afirma que o assunto de Dispositivos Eletrônicos de Fumar não estavam na pauta da missão. <br/>Antes do cancelamento da viagem ser anunciado pela Anvisa, a AstraZeneca havia informado ao JOTA que o convite aos diretores da agência tinha sido realizado de forma genérica. Não havia uma data específica. A ideia era aproveitar uma eventual visita de diretores ao Reino Unido para que uma reunião nas instalações fosse organizada. De acordo com a farmacêutica, a confirmação ocorreu no fim de 2024. <br/>O JOTA também questionou a BAT sobre detalhes da viagem. Antes do anúncio do cancelamento, a companhia informou, por meio de nota que um dos objetivos da visita era permitir que diretores conhecessem, “de forma técnica e aprofundada a atuação em conformidade com as normas internacionais, além de iniciativas e investimentos em Ciência e Tecnologia.” A empresa destacou ainda que a visita fazia parte de um processo legítimo e transparente.logo-jota',
    image: 'cigarros-eletronicos.jpg',
    alt:'foto de cigarro eletronico',
  },
  {
    id: 8,
    category:'Poder',
    title: 'STF analisa novo pedido da PF para que Dino seja relator da Operação Overclean',
    subtitle: 'PGR também deve se manifestar; o caso está no gabinete do ministro Nunes Marques, designado relator após sorteio',
    datePublished:'22/01/2025',
    dateUpdated:'22/01/2025',
    auth:'Fulano',
    body: 'O Supremo Tribunal Federal (STF) recebeu novo pedido da Polícia Federal (PF) para que o inquérito sobre a Operação Overclean, a petição 13388, fique sob relatoria do ministro Flávio Dino. O caso, que investiga supostos desvios de verbas de emendas parlamentares na Bahia, está no gabinete do ministro Nunes Marques. O ministro Luís Roberto Barroso, presidente da Corte, determinou a apresentação de informações técnicas sobre o caso pela Secretaria Judiciária do Supremo e que, em seguida, a Procuradoria-Geral da República (PGR) se manifeste.',
    image: 'flavio-dino-operacao-overclean-stf.jpg',
    alt:'Ministro Flávio Dino / Créditos: Antonio Augusto/STF',
    section: 2,
    order: 1 
  },
  {
    id: 9,
    category:'Poder',
    title: 'Alunos estão apáticos e alguns não assumem ser anticonstituição, diz Vera Karam',
    subtitle: 'Professora da UFPR é a primeira entrevistada da série "Como Ensinar Direito Constitucional no Brasil polarizado"',
    datePublished:'20/01/2025',
    dateUpdated:'20/01/2025',
    auth:'Fulano',
    body: 'O ambiente é de conflito, o Supremo Tribunal Federal sob crítica, ideais da Constituição também em debate. Um momento, portanto, de turbulência e enormes desafios e controvérsias. Apesar disso, dentro da sua sala de aula, toda essa efervescência ganha ares de enfado. Vera Karam Chueiri, professora de Direito Constitucional na Universidade Federal do Paraná, com mais de 30 anos de sala de aula, vê alunos apáticos diante de temas constitucionais, talvez por certo "desencantamento" da maioria deles ou, noutra hipótese, porque muitos estão mirando apenas a descrição daquilo que o Supremo decide e o que o texto da Constituição diz. "Os alunos e as alunas, o que eu acho, estão muito mais preocupados no concurso que vai estar aberto quando eles se formarem, nos três anos que eles vão ter que pagar de pedágio até que possam fazer inscrição na Ordem, nas possibilidades de estágio, eventualmente entrar no pós-graduação", afirma a professora.',
    image: 'vera-karam-como-ensinar-direito-constitucional-brasil-polarizado-1024x576.jpg',
    alt:'Imagem',
    section: 2,
    order: 2
  },
  {
    id: 10,
    category:'Poder',
    title: 'Nunes Marques é relator da investigação da Operação Overclean no STF',
    subtitle: 'Remessa do caso ao Supremo indica que há suspeita de participação de pessoas com foro privilegiado, como parlamentares, no caso',
    datePublished:'17/01/2025',
    dateUpdated:'17/01/2025',
    auth:'Fulano',
    body: 'O ministro Kassio Nunes Marques foi sorteado relator do inquérito da Operação Overclean no Supremo Tribunal Federal (STF). A remessa do caso à Corte, encaminhado pela Polícia Federal (PF) na quinta-feira (16/1), aponta que há suspeita de participação de pessoas com foro privilegiado, como parlamentares, no caso. Com a ação no Supremo, é esperado um desenrolar da Procuradoria-Geral da República (PGR) sobre o caso ainda neste ano. O deputado federal Elmar Nascimento (União Brasil-BA) é um dos políticos já citados. A PF encontrou uma escritura de transação imobiliária do parlamentar em um cofre do empresário José Marcos Moura, conhecido como “Rei do Lixo”, um dos principais alvos da Operação Overclean.',
    image: 'nunes-marques-stf-operacao-overclean.jpg',
    alt:'Ministro Kassio Nunes Marques / Créditos: Nelson Jr./SCO/STF',
    section: 2,
    order: 3
  },
  {
    id: 11,
    category:'Poder',
    title: 'Bolsonaro recorre, mas Moraes mantém proibição a viagem para posse de Trump',
    subtitle: 'Defesa do ex-presidente alegou que ida aos Estados Unidos é ‘pontual’ e que não há justificativa para risco de fuga apontado por Moraes',
    datePublished:'17/01/2025',
    dateUpdated:'17/01/2025',
    auth:'Fulano',
    body: 'O ministro Alexandre de Moraes, do Supremo Tribunal Federal (STF), negou o recurso da defesa de Jair Bolsonaro (PL) pela devolução do passaporte do ex-presidente. Após decisão da quinta-feira (16/1), em que o ministro considerou que havia risco de fuga do ex-chefe do Executivo, os advogados de Bolsonaro voltaram à Corte sob o argumento de que o pedido de viagem é “pontual” e tem como “único fim” comparecer à posse de Donald Trump nos Estados Unidos na próxima segunda-feira (20/1). O ministro manteve a decisão. Leia a íntegra.',
    image: '52032659580-8033ec876c-k.jpg',
    alt:'Ministro do STF Alexandre de Moraes / Crédito: Carlos Moura/SCO/STF',
    section: 2,
    order: 4
  },
  {
    id: 12,
    category:'Poder',
    title: 'Moraes manda governador de SC depor à PF após fala sobre Bolsonaro e Valdemar',
    subtitle: 'Jorginho Mello disse em entrevista à Jovem Pan que Bolsonaro e Valdemar "conversam muito"; o contato entre ambos foi proibido pelo ministro',
    datePublished:'17/01/2025',
    dateUpdated:'17/01/2025',
    auth:'Fulano',
    body: 'O ministro Alexandre de Moraes, do Supremo Tribunal Federal (STF), ordenou nesta sexta-feira (17/1) que o governador de Santa Catarina, Jorginho Mello (PL), preste depoimento à Polícia Federal (PF) para esclarecer a declaração dada em entrevista sobre contato entre o presidente do PL, Valdemar Costa Neto, e o ex-presidente Jair Bolsonaro, apesar da proibição imposta pelo ministro. Mello disse que os dois “conversam muito”. Conheça o JOTA PRO Poder, plataforma de monitoramento que oferece transparência e previsibilidade para empresas “Nosso presidente Valdemar conversa muito com o presidente Bolsonaro, que é o presidente de honra né? Espero que daqui um pouquinho eles possam conversar na mesma sala, né? Para se ajudar ainda mais”, afirmou o governador catarinense em entrevista à Jovem Pan na última segunda-feira (13/1).',
    image: 'jorginho-mello-jovem-pan.jpg',
    alt:'O governador Jorginho Mello em entrevista à "Jovem Pan"/ Créditos: Reprodução/ Jovem Pan',
    section: 2,
    order: 5
  },
  {
    id: 13,
    category:'Economia',
    title: 'Pix de R$ 5 mil: brasileiros perdem a paciência, reagem e derrubam controle financeiro',
    subtitle: 'A pressão popular e a mobilização de parlamentares levaram o governo a revogar a norma da Receita Federal',
    datePublished:'21/01/2025',
    dateUpdated:'21/01/2025',
    auth:'Fulano',
    body: 'Nos últimos meses, o Brasil tem testemunhado uma crescente resistência popular contra medidas governamentais percebidas como tentativas de aumentar a carga tributária e intensificar o controle social. Essa insatisfação ficou evidente em episódios recentes, como a revogação da norma de fiscalização do Pix, conhecida como o “Pix de R$ 5 mil”, e a reação contrária à tributação de prêmios de atletas olímpicos. Em janeiro de 2025, a Receita Federal implementou uma norma que ampliava a fiscalização sobre transações financeiras, incluindo operações via Pix acima de R$ 5 mil para pessoas físicas e R$ 15 mil para pessoas jurídicas. A medida gerou intensa repercussão negativa e foi alvo de desinformação nas redes sociais, com alegações infundadas de que o governo planejava taxar o uso do Pix. Embora a norma não criasse novos impostos, declarações de secretários da Receita Federal de que o órgão utilizaria os dados do Pix para cruzá-los com outras informações e identificar sonegadores contribuíram para intensificar a opinião contrária à medida.',
    image: 'pix-1.jpg',
    alt:'Crédito: Bruno Peres/Agência Brasil',
    section: 2,
    order: 1
  },
  {
    id: 14,
    category:'Economia',
    title: 'Fundações privadas e outras entidades não empresárias podem pedir recuperação judicial?',
    subtitle: 'Uma análise de direito comparado e a orientação restritiva do ordenamento brasileiro',
    datePublished:'22/01/2025',
    dateUpdated:'22/01/2025',
    auth:'Fulano',
    body: 'Análise legislação brasileira sobre o tema. Atualmente, uma das principais discussões envolvendo a legislação brasileira no tocante à reestruturação empresarial diz respeito à legitimidade para propor os procedimentos recuperacionais regrados pela Lei 11.101/2005 (“LRF”). O segundo artigo do referido diploma legal dispõe que os benefícios nela constantes não se aplicam a “instituição financeira pública ou privada, cooperativa de crédito, consórcio, entidade de previdência complementar, sociedade operadora de plano de assistência à saúde, sociedade seguradora, sociedade de capitalização” e outras entidades legalmente equiparadas a estas. Todavia, é no primeiro artigo que consta que a LRF “disciplina a recuperação judicial, a recuperação extrajudicial e a falência do empresário e da sociedade empresária”. Ao realizar uma interpretação literal acerca do dispositivo, é indiscutível que, efetivamente, entes (eventualmente classificados como agentes econômicos), não podem ser considerados empresários e/ou sociedades empresárias e, portanto, não podem se utilizar do instituto previsto na Lei. O empresário, conforme define o art. 966 do Código Civil, é aquele que “exerce profissionalmente atividade econômica organizada para a produção ou a circulação de bens ou de serviços”, enquanto que a sociedade empresária é “a atividade organizada e exercida profissionalmente dirigida para satisfazer as necessidades do mercado”[1].',
    image: 'recuperacao-judicial.jpg',
    alt:'Crédito: Freepik',
    section: 2,
    order: 2
  },
  {
    id: 15,
    category:'Economia',
    title: 'Nacionalismo superlativo e COP30 mais fraca: as apostas do JOTA para o governo Trump',
    subtitle: 'Live desta segunda-feira (20/1) trouxe principais insights de relatório exclusivo do JOTA PRO',
    datePublished:'20/01/2025',
    dateUpdated:'20/01/2025',
    auth:'Fulano',
    body: 'Nesta segunda-feira (20/1), Donald Trump assumiu pela segunda vez a presidência dos Estados Unidos, numa mostra da força da extrema-direita e do enfraquecimento do multilateralismo globalmente. Para analisar os desdobramentos da nova liderança na Casa Branca, o JOTA promoveu uma live destrinchando os primeiros sinais do novo governo dos Estados Unidos – e o que eles significam para o Brasil. O evento contou com a participação da analista internacional do JOTA, Vivian Oswald, e do analista político Iago Bolívar. Entre nacionalismo superlativo, perspectivas para políticas ambientais e comércio internacional, a live pincelou os principais aspectos do relatório gratuito do JOTA PRO Poder sobre o tema, que você pode baixar gratuitamente aqui. No curto prazo, o efeito será mais político que econômico, especialmente devido ao alinhamento ideológico entre Trump e grupos da direita brasileira – o deputado Eduardo Bolsonaro (PL) liderou uma comitiva da oposição do governo federal aos EUA para a posse.',
    image: '00-thumbsite-a.jpg',
    alt:'Fotomontagem: Golucas/JOTA',
    section: 2,
    order: 3
  },
  {
    id: 16,
    category:'Economia',
    title: 'O papel das redes sociais na desestabilização democrática',
    subtitle: 'O equilíbrio entre liberdade de expressão e regulação das redes sociais nos moldes da Constituição Federal de 1988',
    datePublished:'20/01/2025',
    dateUpdated:'20/01/2025',
    auth:'Fulano',
    body: 'O funcionamento de uma democracia constitucional, incluindo seus valores fundamentais, institutos básicos e as instituições que a sustentam, tem enfrentado um acentuado processo de degradação no Brasil e em diversos outros países. Esse fenômeno ameaça a estabilidade democrática, comprometendo os princípios constitucionais e os direitos fundamentais que garantem o equilíbrio entre os Poderes e a participação cidadã[1].',
    image: 'jeremy-bezanger-9k-gcyloh2g-unsplash.jpg',
    alt:'Crédito: Unsplash',
    section: 2,
    order: 4
  },
  {
    id: 17,
    category:'Economia',
    title: 'Desafios regulatórios no Brasil financeirizado',
    subtitle: 'Regulação enfrenta o desafio de conciliar avanços da financeirização com a necessidade de estabilidade financeira, proteção ao consumidor e inclusão social',
    datePublished:'20/01/2025',
    dateUpdated:'20/01/2025',
    auth:'Fulano',
    body: 'Nos últimos anos, o Brasil tem testemunhado uma transformação expressiva em seu setor financeiro, impulsionada pela digitalização e pelo crescimento das fintechs. Essa expansão tem sido acompanhada pela financeirização da economia, caracterizada pela predominância de atividades especulativas e de curto prazo em detrimento de investimentos produtivos e de longo prazo. Nesse contexto, surge a necessidade de uma regulação robusta e adaptável, capaz de equilibrar a inovação tecnológica com a segurança financeira e a inclusão social. Desde a promulgação da Lei 12.865, em 2013, que estabelece o marco regulatório para arranjos de pagamento, o Brasil busca criar um ambiente propício para a inovação financeira. Esse avanço regulatório teve como um de seus principais objetivos a modernização do sistema financeiro e o incentivo à concorrência, sobretudo através da facilitação para o surgimento e operação das fintechs. Entretanto, a implementação e adaptação dessas normas têm se mostrado desafiadoras, especialmente para as instituições tradicionais, que precisam se adequar a um ambiente de rápida transformação digital.',
    image: 'dsc-9529-aprimorado-nr.jpg',
    alt:'Crédito: Iano Andrade / CNI',
    section: 2,
    order: 5
  },
  {
    id: 18,
    category:'Saúde',
    title: 'À espera de regulação, novos modelos de telemedicina com IA fogem do tradicional',
    subtitle: 'Modelos desenvolvidos superam a habitual consulta via videoconferência, mas especialistas afirmam que debate precisa ser aprofundado',
    datePublished:'22/01/2025',
    dateUpdated:'22/01/2025',
    auth:'Fulano',
    body: 'À espera de que o Congresso Nacional finalize a votação do Marco Legal da Inteligência Artificial (IA) e de que a própria Agência Nacional de Saúde Suplementar (ANS) bata o martelo sobre o seu emprego na saúde suplementar, empresas do setor fogem do tradicional ao apresentar tecnologias que prometem otimizar a dinâmica entre médicos e pacientes. Os modelos desenvolvidos de telemedicina que empregam IA superam a habitual consulta clínica via videoconferência, mas ainda esbarram em questões regulatórias e legais. A empresa Skincheck Health, por exemplo, propõe uma ferramenta que auxilia o paciente a detectar um possível câncer de pele. Ao utilizar o aplicativo, o indivíduo aponta a câmera do celular para uma marca em sua pele e a IA emite um alerta para notificá-lo se existe um risco ou não da patologia. Caso haja, a ferramenta indica que ele agende uma consulta com especialista para fazer uma biópsia. Daniel Marques, CEO da empresa, explica que o modelo foi criado pensando em ajudar o provedor de saúde a diminuir a taxa de mortalidade por meio dessa detecção precoce do câncer de pele.',
    image: 'online-consultation-5901524-128pixabay.jpg',
    alt:'Crédito: Pixabay',
    section: 2,
    order: 1
  },
  {
    id: 19,
    category:'Saúde',
    title: 'Governo de SP e hospital devem indenizar família de homem morto após demora em cirurgia',
    subtitle: 'Desembargadores do TJSP consideraram que demora na realização de cirurgia vascular foi determinante para o falecimento do paciente',
    datePublished:'22/01/2025',
    dateUpdated:'22/01/2025',
    auth:'Fulano',
    body: 'A 11ª Câmara de Direito Público do Tribunal de Justiça de São Paulo (TJSP) condenou o estado de São Paulo e o Hospital de Base de São José do Rio Preto a pagarem indenização de R$ 100 mil, por danos morais, aos familiares de um homem que morreu após demora na realização de uma cirurgia. O caso em questão envolveu um paciente que teve a perna amputada, mas faleceu três dias após atendimento inicial, por conta da demora na liberação de vaga para uma cirurgia vascular. Ele fraturou a perna em um acidente de carro e rompeu uma artéria, tendo sido atendido pela Santa Casa de Misericórdia de Jales (SP), que, em seguida, o transferiu para fazer a cirurgia no Hospital de Base.',
    image: 'hospital-2.jpg',
    alt:'Crédito: Pixabay',
    section: 2,
    order: 2
  },
  {
    id: 20,
    category:'Saúde',
    title: 'Governo de SP e hospital devem indenizar família de homem morto após demora em cirurgia',
    subtitle: 'Desembargadores do TJSP consideraram que demora na realização de cirurgia vascular foi determinante para o falecimento do paciente',
    datePublished:'22/01/2025',
    dateUpdated:'22/01/2025',
    auth:'Fulano',
    body: 'A 11ª Câmara de Direito Público do Tribunal de Justiça de São Paulo (TJSP) condenou o estado de São Paulo e o Hospital de Base de São José do Rio Preto a pagarem indenização de R$ 100 mil, por danos morais, aos familiares de um homem que morreu após demora na realização de uma cirurgia. O caso em questão envolveu um paciente que teve a perna amputada, mas faleceu três dias após atendimento inicial, por conta da demora na liberação de vaga para uma cirurgia vascular. Ele fraturou a perna em um acidente de carro e rompeu uma artéria, tendo sido atendido pela Santa Casa de Misericórdia de Jales (SP), que, em seguida, o transferiu para fazer a cirurgia no Hospital de Base.',
    image: 'hospital-2.jpg',
    alt:'Crédito: Pixabay',
    section: 2,
    order: 3
  },
  {
    id: 21,
    category:'Saúde',
    title: 'Governo de SP e hospital devem indenizar família de homem morto após demora em cirurgia',
    subtitle: 'Desembargadores do TJSP consideraram que demora na realização de cirurgia vascular foi determinante para o falecimento do paciente',
    datePublished:'22/01/2025',
    dateUpdated:'22/01/2025',
    auth:'Fulano',
    body: 'A 11ª Câmara de Direito Público do Tribunal de Justiça de São Paulo (TJSP) condenou o estado de São Paulo e o Hospital de Base de São José do Rio Preto a pagarem indenização de R$ 100 mil, por danos morais, aos familiares de um homem que morreu após demora na realização de uma cirurgia. O caso em questão envolveu um paciente que teve a perna amputada, mas faleceu três dias após atendimento inicial, por conta da demora na liberação de vaga para uma cirurgia vascular. Ele fraturou a perna em um acidente de carro e rompeu uma artéria, tendo sido atendido pela Santa Casa de Misericórdia de Jales (SP), que, em seguida, o transferiu para fazer a cirurgia no Hospital de Base.',
    image: 'hospital-2.jpg',
    alt:'Crédito: Pixabay',
    section: 2,
    order: 4
  },
  {
    id: 22,
    category:'Saúde',
    title: 'Governo de SP e hospital devem indenizar família de homem morto após demora em cirurgia',
    subtitle: 'Desembargadores do TJSP consideraram que demora na realização de cirurgia vascular foi determinante para o falecimento do paciente',
    datePublished:'22/01/2025',
    dateUpdated:'22/01/2025',
    auth:'Fulano',
    body: 'A 11ª Câmara de Direito Público do Tribunal de Justiça de São Paulo (TJSP) condenou o estado de São Paulo e o Hospital de Base de São José do Rio Preto a pagarem indenização de R$ 100 mil, por danos morais, aos familiares de um homem que morreu após demora na realização de uma cirurgia. O caso em questão envolveu um paciente que teve a perna amputada, mas faleceu três dias após atendimento inicial, por conta da demora na liberação de vaga para uma cirurgia vascular. Ele fraturou a perna em um acidente de carro e rompeu uma artéria, tendo sido atendido pela Santa Casa de Misericórdia de Jales (SP), que, em seguida, o transferiu para fazer a cirurgia no Hospital de Base.',
    image: 'hospital-2.jpg',
    alt:'Crédito: Pixabay',
    section: 2,
    order: 5
  }
]

interface Post{
  id: number
  category: string
  title: string 
  subtitle: string
  auth: string
  body: string
  datePublished: string
  dateUpdated: string
  image: string
  alt: string
  order: number
  section: number
}

export default function Home() {
  const [postList, setPostList] = useState<Post[]>([])

  const getPostList = async () => {
    try {
      const res = await fetch(`${process.env.PUBLIC_API_URL}/posts/`)
          , resData = await res.json()
          
        setPostList(resData);            
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPostList();
  }, []); 

  return (
    <>
    <Header />
    <Box mt='155px'>
      <Box className='container' pt='30px' as='section'>
        <Grid 
        templateColumns={{base:'repeat(2, 1fr)', lg: "repeat(3, 1fr)"}}
        templateRows={{ base: 'auto', lg: 'auto' }}
        gap="6">
          <GridItem colSpan={2} rowSpan={{base: 1, lg: 0}}>
            <Flex justifyContent={{base:'space-around', lg:'space-between'}}>
              {postList.filter(newsChild => newsChild.section === 1 && newsChild.order === 1)
                .map((newsChild) => 
                  <NewsCard
                  key={newsChild.id}
                  category= {newsChild.category}
                  title= {newsChild.title}
                  subtitle= {newsChild.subtitle}
                  image= {newsChild.image}
                  alt= {newsChild.alt}
                  section= {newsChild.section}
                  order={newsChild.order}
                  />
                )
              } 
              <Flex flexDirection='column' ml='10px'>
                {postList.filter(newsChild => newsChild.section === 1 && newsChild.order != 1)
                  .map((newsChild) => 
                    <NewsCard
                    key={newsChild.id}
                    category= {newsChild.category}
                    title= {newsChild.title}
                    image= {newsChild.image}
                    alt= {newsChild.alt}
                    section= {newsChild.section}
                    order={newsChild.order}
                    />
                  )
                }
              </Flex>                 
            </Flex>
          </GridItem>
          <GridItem colSpan={{base: 2, lg: 1}} rowSpan={{base: 1, lg: 0}}
          pl='20px'>
            <Text fontSize='20px' lineHeight={1} className='primary'>
              Recentes
            </Text>
            <Flex flexDirection={{base:'column', sm:'row', lg:'column'}}>
              {postList.filter(newsChild => newsChild.section == undefined) 
              .sort((a, b) => {
                const dateA = new Date(a.datePublished)
                const dateB = new Date(b.datePublished)
                return dateB.getTime() - dateA.getTime()
              })
              .map((newsChild, index) => (
                <HorizontalCard
                  key={index}
                  id={newsChild.id}
                  category= {newsChild.category}
                  title= {newsChild.title}
                  image= {newsChild.image}
                  alt= {newsChild.alt}
                  />
              ))            
            }
            </Flex>
          </GridItem>
        </Grid>
      </Box>
      <Box className='container' py='60px' as='section'>
        <Grid 
        templateColumns={{base:'repeat(0)', md:"repeat(3, 1fr)"}} 
        templateRows={{base:"repeat(3, 1fr)", md:"auto"}}
        gap="6">
          <GridItem colSpan={1}>
            <Text 
            className="power secondSectionTitle"
            borderBottom='1px solid #132fcc'>
              Política
            </Text>
            <Flex flexDirection='column'>
              {postList
              .filter(item => item.section === 2 && item.category === 'Política') 
              .sort((a, b) => (a.order|| 0) - ( b.order|| 0))
              .map((newsChild, index)=> 
                <HorizontalCard
                  key={index}
                  id={newsChild.id}
                  title= {newsChild.title}
                  titleFontSize= {'18px'}
                  image= {newsChild.image}
                  alt= {newsChild.alt}
                  />
              )
              }
            </Flex>
          </GridItem>
          <GridItem colSpan={1}>
            <Text 
            className="economy secondSectionTitle"
            borderBottom='1px solid #1dbb2a'>
              Economia
            </Text>
            <Flex flexDirection='column'>
              {postList
              .filter(item => item.section === 2 && item.category === 'Economia') 
              .sort((a, b) => (a.order|| 0) - ( b.order|| 0))
              .map((newsChild, index)=> 
                <HorizontalCard
                  key={index}
                  id={newsChild.id}
                  title= {newsChild.title}
                  titleFontSize= {'18px'}
                  image= {newsChild.image}
                  alt= {newsChild.alt}
                  />
              )
              }
            </Flex>
          </GridItem>
          <GridItem colSpan={1}>
            <Text 
            className="health secondSectionTitle"
            borderBottom='1px solid #F05841'>
              Saúde
            </Text>
            <Flex flexDirection='column'>
              {postList
              .filter(item => item.section === 2 && item.category === 'Saúde') 
              .sort((a, b) => (a.order|| 0) - ( b.order|| 0))
              .slice(0, 5)
              .map((newsChild, index)=> 
                <HorizontalCard
                  key={index}
                  id={newsChild.id}
                  title= {newsChild.title}
                  titleFontSize= {'18px'}
                  image= {newsChild.image}
                  alt= {newsChild.alt}
                  />
              )
              }
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Box>
    <Footer />
    </>
  );
}
