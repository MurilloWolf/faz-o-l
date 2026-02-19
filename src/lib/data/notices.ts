export type Notice = {
  title: string;
  date: string;
  linkText: string;
  link: string;
  image?: string;
};

const data: Notice[] = [
  {
    title: "Toffoli se afasta da investigação do Banco Master no Supremo Tribunal Federal",
    date: "02-12-2026",
    linkText: "Reuters",
    link: "https://www.reuters.com/business/finance/brazil-supreme-courts-toffoli-denies-receiving-payments-links-banco-masters-2026-02-12/",
    image: "/assets/tofoli.webp",
  },
  {
    title: "Entenda em 5 pontos as menções a Toffoli e a políticos no caso Master",
    date: "02-12-2026",
    linkText: "CNN Brasil",
    link: "https://www.cnnbrasil.com.br/politica/entenda-em-5-pontos-as-mencoes-a-toffoli-e-a-politicos-no-caso-master/",
    image: "/assets/tofoli.webp",
  },
  {
    title:
      "Conexões com Lula, Mantega, Lewandowski e Jaques Wagner ligam escândalo do Master ao Executivo",
    date: "02-01-2026",
    linkText: "Gazeta do Povo",
    link: "https://www.gazetadopovo.com.br/republica/conexoes-com-lula-mantega-lewandowski-e-jaques-wagner-ligam-escandalo-do-master-ao-executivo/",
  },
  {
    title:
      "Ministro do STF se afasta de caso de fraude após revelações de vínculos com presidente do banco",
    date: "02-13-2026",
    linkText: "Brazil Reports",
    link: "https://brazilreports.com/brazil-dias-toffoli-recuses-himself-banco-master/7273/",
  },
  {
    title: "Possível propaganda pró-Lula em desfile deve ser analisada no TSE; entenda",
    date: "02-16-2026",
    linkText: "CNN Brasil",
    link: "https://www.cnnbrasil.com.br/politica/possivel-propaganda-pro-lula-em-desfile-deve-ser-analisada-no-tse-entenda/",
    image: "/assets/lula-propaganda.webp",
  },
  {
    title: "Lula teria dito a aliados que Toffoli deve sair do STF ou da relatoria do caso Master",
    date: "01-26-2026",
    linkText: "Brasil 247",
    link: "https://www.brasil247.com/poder/lula-teria-dito-a-aliados-que-toffoli-deve-sair-do-stf",
    image: "/assets/lula-tofoli.webp",
  },
  {
    title: "Girão pede novo afastamento de Toffoli do caso Master por ligações com resort",
    date: "01-30-2026",
    linkText: "Gazeta do Povo",
    link: "https://www.gazetadopovo.com.br/republica/girao-novo-afastamento-toffoli-caso-master-ligacoes-resort-pr/",
    image: "/assets/taiaia.webp",
  },
  {
    title: "STF avalia afastamento de ministro do caso Banco Master",
    date: "02-12-2026",
    linkText: "Bloomberg",
    link: "https://www.bloomberg.com/news/articles/2026-02-12/brazil-s-top-court-mulls-removal-of-judge-from-banco-master-case",
    image: "/assets/tofoli.webp",
  },
  {
    title:
      "O escândalo de fraude bancária que abala a elite brasileira: o contexto do caso Master e Toffoli",
    date: "02-05-2026",
    linkText: "NBC Right Now",
    link: "https://www.nbcrightnow.com/national/the-banking-fraud-scandal-rattling-brazils-elite/article_9f3fe356-3907-5e4a-9470-fa53152b6530.html",
  },
  {
    title:
      "Senador solicita quebra de sigilos do escritório da esposa de Moraes por contrato com o Banco Master",
    date: "02-02-2026",
    linkText: "Gazeta do Povo",
    link: "https://www.gazetadopovo.com.br/republica/senador-suspeita-uso-escritorio-esposa-moraes-lavar-dinheiro-master/",
  },
  {
    title: "PF prepara relatório sobre ligação entre Moraes e Banco Master enviado ao STF",
    date: "02-13-2026",
    linkText: "Pleno News",
    link: "https://pleno.news/brasil/politica-nacional/pf-prepara-relatorio-sobre-ligacao-entre-moraes-e-banco-master.html",
  },
  {
    title:
      "Esposa de Alexandre de Moraes representa Banco Master em investigação enviada a Toffoli",
    date: "02-01-2026",
    linkText: "Brasil Paralelo",
    link: "https://www.brasilparalelo.com.br/noticias/esposa-de-alexandre-de-moraes-representa-banco-master-em-investigacao-enviada-a-toffoli",
  },
  {
    title: "Mulher de Moraes atua em processo relacionado ao Banco Master enviado ao STF",
    date: "01-21-2026",
    linkText: "CNN Brasil",
    link: "https://www.cnnbrasil.com.br/blogs/matheus-teixeira/politica/mulher-de-moraes-atua-em-processo-relacionado-ao-master-enviado-ao-stf/",
  },
  {
    title:
      "Reportagens apontam que o escritório da esposa de Moraes tinha contrato com o Banco Master",
    date: "01-21-2026",
    linkText: "Gazeta do Povo",
    link: "https://www.gazetadopovo.com.br/republica/escritorio-esposa-moraes-representa-master-processo-sigiloso/",
  },
  {
    title:
      "Apoiadores de Bolsonaro tentam relacionar Moraes à crise do Banco Master, mas checagem aponta distorções",
    date: "12-03-2025",
    linkText: "Aos Fatos",
    link: "https://www.aosfatos.org/noticias/direita-moraes-crise-do-banco-master-sugerir-prisao-bolsonaro-cortina-de-fumaca/",
  },
  {
    title: "Empreiteiras aceitam ‘desconto’ de 50% sobre multas da Lava Jato",
    date: "06-26-2024",
    linkText: "O estadão",
    link: "https://www.estadao.com.br/politica/empreiteiras-aceitam-desconto-de-50-sobre-multas-da-lava-jato-e-chegam-a-acordo-com-governo/",
  },
  {
    title: "Governo vence R$ 109 bilhões em disputas no Carf em 2023",
    date: "02-28-2024",
    linkText: "InfoMoney",
    link: "https://www.infomoney.com.br/politica/governo-vence-r-109-bilhoes-em-disputas-no-carf-em-2023/",
  },
  {
    title: "Lula sanciona lei que mantém o Perse com limite de R$ 15 bi até 2026",
    date: "05-23-2024",
    linkText: "Agência Senado",
    link: "https://www12.senado.leg.br/noticias/materias/2024/05/23/lula-sanciona-lei-que-mantem-o-perse-com-limite-de-r-15-bi-ate-2026",
  },
  {
    title: "Limite de juros sobre capital próprio não pode passar de 50%",
    date: "01-01-2024",
    linkText: "InfoMoney",
    link: "https://www.infomoney.com.br/guias/juros-sobre-capital-proprio-jcp/",
  },
  {
    title: "Exclusão do ICMS da base de cálculo de PIS/Cofins",
    date: "10-23-2023",
    linkText: "Portal STF",
    link: "https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=516801&ori=1",
  },
  {
    title: "Lula trevoga decreto que dava desconto de 50% nas alíquotas do AFRMM",
    date: "01-05-2023",
    linkText: "Conjur",
    link: "https://www.conjur.com.br/2023-jan-05/revogacao-decreto-pis-cofins-causar-chuva-acoes/",
  },
  {
    title: "Quem recebe acima de 2 salários mínimos pagará 27,5% de IR",
    date: "03-15-2024",
    linkText: "Agencia Brasil",
    link: "https://agenciagov.ebc.com.br/noticias/202403/receita-federal-divulga-regras-da-declaracao-do-imposto-de-renda-2024",
  },
  {
    title: "Aumento para 20% do ICMS para gás de cozinha",
    date: "02-01-2024",
    linkText: "Valor Globo",
    link: "https://valor.globo.com/brasil/noticia/2024/02/01/gas-de-cozinha-saiba-para-quanto-vai-o-preco-apos-alta-do-icms.ghtml",
  },
  {
    title:
      "11 unidades da Federação subiram ou vão subir a alíquota modal do ICMS neste ano; as alíquotas modais vão de 19,5% a 22%",
    date: "03-18-2024",
    linkText: "Poder 360",
    link: "https://www.poder360.com.br/poder-economia/economia/estados-estimam-extra-de-r-9-bilhoes-com-aumento-do-icms-em-2024/#:~:text=11%20unidades%20da%20Federa%C3%A7%C3%A3o%20subiram,19%2C5%25%20a%2022%25&text=Em%202024%2C%2011%20unidades%20da,Circula%C3%A7%C3%A3o%20de%20Mercadorias%20e%20Servi%C3%A7os).",
  },
  {
    title: "Fundo exclusivos passarão a operar com 'come-cotas' em alíquota de 15% e 20%",
    date: "01-01-2024",
    linkText: "InfoMoney",
    link: "https://www.infomoney.com.br/politica/fundos-exclusivos-passarao-a-operar-com-come-cotas-e-aliquotas-de-15-e-20/#:~:text=Mudan%C3%A7as-,Fundos%20exclusivos%20passar%C3%A3o%20a%20operar%20com%20%E2%80%9Ccome%2Dcotas%E2%80%9D%20em,al%C3%ADquotas%20de%2015%25%20e%2020%25&text=O%20projeto%20de%20lei%20n%C2%BA,para%20os%20fundos%20abertos%20convencionais.",
  },
  {
    title: "Sancionada lei com nova tributação para fundos de investimentos e offshores",
    date: "01-01-2024",
    linkText: "Câmara dos Deputados",
    link: "https://www.camara.leg.br/noticias/1025775-sancionada-lei-com-nova-tributacao-para-fundos-de-investimentos-e-offshores/",
  },
  {
    title: "Imposto de 20% e 25% para importação de veículos elétricos e híbridos",
    date: "06-02-2024",
    linkText: "InsideEVs",
    link: "https://insideevs.uol.com.br/news/725283/imposto-importacao-eletrico-hibridos-aumento/#:~:text=O%20ajuste%20na%20al%C3%ADquota%20estava,el%C3%A9tricos%20ter%C3%A3o%2018%25%20de%20taxas.",
  },
  {
    title: "Aumento para 55% a alíquota do IPI para armas de fogo",
    date: "11-01-2023",
    linkText: "Agência Brasil",
    link: "https://agenciabrasil.ebc.com.br/radioagencia-nacional/geral/audio/2023-11/lula-edita-decreto-que-aumenta-para-55-imposto-sobre-armas-de-fogo#:~:text=O%20presidente%20Lula%20editou%20o,%C3%A9%20de%2029%2C25%25.",
  },
  {
    title: "Alíquota 9,6% para importação de painéis solares",
    date: "01-01-2024",
    linkText: "Canal Solar",
    link: "https://canalsolar.com.br/nova-aliquota-para-importacao-de-paineis-solares-entra-em-vigor-no-brasil/#:~:text=Com%20isso%2C%20a%20al%C3%ADquota%20passa,produ%C3%A7%C3%A3o%20nacional%20de%20m%C3%B3dulos%20fotovoltaicos.",
  },
  {
    title:
      "Alíquota de PIS/Pasep devida pelas distribuidoras de biodiesel será de 0,65% sobre a receita bruta",
    date: "07-26-2024",
    linkText: "Câmara dos Deputados",
    link: "https://www.camara.leg.br/noticias/103467-projeto-simplifica-cobranca-de-impostos-para-biodiesel/#:~:text=A%20proposta%20define%20que%20a,3%25%20sobre%20a%20receita%20bruta.",
  },
  {
    title: "Taxação em 20% nas importações abaixo de U$ 50,00 (AliExpress/Shein)",
    date: "06-27-2024",
    linkText: "Tax Group",
    link: "https://www.taxgroup.com.br/intelligence/taxa-das-blusinhas-o-que-e-quando-comeca-e-quanto-vai-custar/",
  },
  {
    title:
      "De 0% para <strong>9,2%</strong>, a alíquota do imposto sobre exportação de óleos brutos ",
    date: "05-02-2023",
    linkText: "CNN Brasil",
    link: "https://www.cnnbrasil.com.br/economia/financas/aras-se-manifesta-contra-acao-no-stf-que-contesta-imposto-de-exportacao-de-petroleo/#:~:text=7%C2%BA%20da%20Medida%20Provis%C3%B3ria%201.163,%2C%20afirmou%20o%20procurador%2Dgeral.",
  },
  {
    title: " Retorno parcial da incidência de PIS/Cofins sobre gasolina",
    date: "05-01-2023",
    linkText: "Udop - União Nacional da Bioenergia",
    link: "https://www.udop.com.br/noticia/2024/02/01/da-isencao-a-reoneracao-integral-veja-como-foi-o-vaivem-dos-impostos-sobre-combustiveis-desde-2021.html",
  },
  {
    title: "Congresso promulga reforma tributária (EC 132/2023)",
    date: "12-20-2023",
    linkText: "Fonte",
    link: "https://www12.senado.leg.br/noticias/materias/2023/12/20/congresso-promulga-reforma-tributaria",
  },
  {
    title:
      "Congresso Nacional promulga emenda constitucional que muda o sistema de tributação do consumo",
    date: "12-21-2023",
    linkText: "Fonte",
    link: "https://www.gov.br/fazenda/pt-br/assuntos/noticias/2023/dezembro/congresso-nacional-promulga-emenda-constitucional-que-muda-o-sistema-de-tributacao-do-consumo",
  },
  {
    title: "Presidente sanciona lei que tributa offshores e fundos fechados (Lei 14.754/2023)",
    date: "12-13-2023",
    linkText: "Fonte",
    link: "https://www.gov.br/fazenda/pt-br/assuntos/noticias/2023/dezembro/presidente-sanciona-lei-que-tributa-offshores-e-fundos-fechados",
  },
  {
    title: "Sancionada nova tributação para fundos de investimentos e offshores (Lei 14.754/2023)",
    date: "12-13-2023",
    linkText: "Fonte",
    link: "https://www12.senado.leg.br/noticias/materias/2023/12/13/sancionada-nova-tributacao-para-fundos-de-investimentos-e-offshores",
  },
  {
    title: "Lula sanciona com veto lei que tributa offshores e super-ricos",
    date: "12-13-2023",
    linkText: "Fonte",
    link: "https://agenciabrasil.ebc.com.br/economia/noticia/2023-12/lula-sanciona-com-veto-lei-que-tributa-offshores-e-super-ricos",
  },
  {
    title: "Lula sanciona voto de qualidade no Carf e veta perdão de multas (Lei 14.689/2023)",
    date: "09-21-2023",
    linkText: "Fonte",
    link: "https://www12.senado.leg.br/noticias/materias/2023/09/21/lula-sanciona-voto-de-qualidade-no-carf-e-veta-perdao-de-multas-a-contribuintes",
  },
  {
    title: "Governo federal sanciona lei que marca retomada do Carf",
    date: "09-21-2023",
    linkText: "Fonte",
    link: "https://www.gov.br/fazenda/pt-br/assuntos/noticias/2023/setembro/governo-federal-sanciona-lei-que-marca-retomada-do-carf",
  },
  {
    title: "Lei do arcabouço fiscal é sancionada (LC 200/2023)",
    date: "08-31-2023",
    linkText: "Fonte",
    link: "https://www.camara.leg.br/noticias/993734-lei-do-arcabouco-fiscal-e-sancionada-novo-regime-substitui-o-teto-de-gastos-publicos/",
  },
  {
    title: "Presidente Lula sanciona a lei do novo arcabouço fiscal",
    date: "08-31-2023",
    linkText: "Fonte",
    link: "https://www.gov.br/planalto/pt-br/acompanhe-o-planalto/noticias/2023/08/presidente-lula-sanciona-a-lei-do-novo-arcabouco-fiscal",
  },
  {
    title: "Receita confirma reoneração de gasolina e etanol no fim do mês",
    date: "02-23-2023",
    linkText: "Fonte",
    link: "https://agenciabrasil.ebc.com.br/economia/noticia/2023-02/receita-confirma-reoneracao-de-gasolina-e-etanol-no-fim-do-mes",
  },
  {
    title:
      "Entra em vigor medida provisória que altera tributação da gasolina e do álcool (MP 1163/23)",
    date: "03-01-2023",
    linkText: "Fonte",
    link: "https://www.camara.leg.br/noticias/941708-entra-em-vigor-medida-provisoria-que-altera-tributacao-da-gasolina-e-do-alcool/",
  },
  {
    title: "Presidente edita decreto que restabelece IPI sobre armas de fogo e munições (até 55%)",
    date: "10-31-2023",
    linkText: "Fonte",
    link: "https://www.gov.br/planalto/pt-br/acompanhe-o-planalto/noticias/2023/10/presidente-edita-decreto-que-reestabelece-ipi-sobre-armas-de-fogo-e-municoes",
  },
  {
    title:
      "Entra em vigor lei que tributa apostas on-line e define regras para exploração do serviço (Lei 14.790/2023)",
    date: "01-08-2024",
    linkText: "Fonte",
    link: "https://www.camara.leg.br/noticias/1030406-ENTRA-EM-VIGOR-LEI-QUE-TRIBUTA-APOSTAS-ON-LINE-E-DEFINE-REGRAS-PARA-A-EXPLORACAO-DO-SERVICO",
  },
  {
    title: "É sancionada a lei que regulamenta as apostas esportivas on-line (bets)",
    date: "01-03-2024",
    linkText: "Fonte",
    link: "https://www12.senado.leg.br/radio/1/noticia/2024/01/03/e-sancionada-a-lei-que-regulamenta-as-apostas-esportivas-on-line-as-bets",
  },
  {
    title:
      "Entra em vigor lei que altera regras de tributação de incentivos fiscais (Lei 14.789/2023)",
    date: "01-01-2024",
    linkText: "Fonte",
    link: "https://www.camara.leg.br/noticias/1030024-ENTRA-EM-VIGOR-LEI-QUE-ALTERA-REGRAS-DE-TRIBUTACAO-DE-INCENTIVOS-FISCAIS",
  },
  {
    title:
      "Lula sanciona taxação de compra internacional e criação do programa Mover (20% até US$ 50)",
    date: "06-28-2024",
    linkText: "Fonte",
    link: "https://www12.senado.leg.br/noticias/materias/2024/06/28/lula-sanciona-taxacao-de-compra-internacional-e-criacao-do-programa-mover",
  },
  {
    title: "PF indicia ministro das Comunicações, Juscelino Filho",
    date: "06-12-2024",
    linkText: "Fonte",
    link: "https://agenciabrasil.ebc.com.br/politica/noticia/2024-06/pf-indicia-ministro-das-comunicacoes-juscelino-filho",
  },
  {
    title: "Arrecadação federal de 2023 somou R$ 2,318 trilhões (divulgação oficial)",
    date: "01-24-2024",
    linkText: "Fonte",
    link: "https://www.gov.br/fazenda/pt-br/assuntos/noticias/2024/janeiro/arrecadacao-federal-de-2023-somou-r-2-318-trilhoes",
  },
  {
    title:
      "Arrecadação total das receitas federais alcançou R$ 2,652 trilhões no ano de 2024 (divulgação oficial)",
    date: "01-28-2025",
    linkText: "Fonte",
    link: "https://www.gov.br/fazenda/pt-br/assuntos/noticias/2025/janeiro/arrecadacao-total-das-de-receitas-federais-alcancou-r-2-652-trilhoes-no-ano-de-2024",
  },
  {
    title: "Regulamentação da reforma tributária é sancionada (PLP 68/24)",
    date: "01-17-2025",
    linkText: "Fonte",
    link: "https://www.camara.leg.br/noticias/1127237-regulamentacao-da-reforma-tributaria-e-sancionada-conheca-a-nova-lei/",
  },
  {
    title: "Ministro da CGU detalha ações do governo sobre fraude contra o INSS",
    date: "04-24-2025",
    linkText: "Fonte",
    link: "https://www.gov.br/cgu/pt-br/assuntos/noticias/2025/04/ministro-da-cgu-detalha-acoes-do-governo-sobre-fraude-contra-o-inss",
  },
  {
    title:
      "Na CPMI do INSS, ministro afirma que CGU agiu rápido para investigar denúncias levantadas em 2024",
    date: "10-02-2025",
    linkText: "Fonte",
    link: "https://www.camara.leg.br/noticias/1207297-na-cpmi-do-inss-ministro-afirma-que-cgu-agiu-rapido-para-investigar-denuncias-levantadas-em-2024/",
  },
  {
    title: "Governo Central cumpre com folga a meta fiscal estabelecida para 2025 (Tesouro)",
    date: "01-30-2026",
    linkText: "Fonte",
    link: "https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/janeiro/governo-central-cumpre-com-folga-a-meta-fiscal-estabelecida-para-2025-aponta-relatorio-do-tesouro",
  },
  {
    title: "Traficantes 'são vítimas dos usuários' de drogas, diz Lula (Jacarta)",
    date: "10-24-2025",
    linkText: "Fonte",
    link: "https://www.cnnbrasil.com.br/internacional/lula-afirma-que-traficantes-de-drogas-sao-vitimas-de-usuarios/",
  },
  {
    title: "Traficantes 'são vítimas dos usuários' de drogas, diz Lula (registro da fala)",
    date: "10-24-2025",
    linkText: "Fonte",
    link: "https://www.poder360.com.br/poder-governo/traficantes-sao-vitimas-dos-usuarios-de-drogas-diz-lula/",
  },
  {
    title:
      "É falso que Lula tenha dito que ladrões roubam celulares para 'tomar uma cervejinha' (fact-check)",
    date: "10-17-2022",
    linkText: "Fonte",
    link: "https://www.aosfatos.org/noticias/falso-lula-apoia-roubo-de-celular/",
  },
  {
    title: "LC 192/2022: mudanças em regras do ICMS sobre combustíveis (monofásico)",
    date: "03-14-2022",
    linkText: "Fonte",
    link: "https://www.camara.leg.br/noticias/857797-sancionada-lei-com-mudancas-em-regras-do-icms-sobre-combustiveis/",
  },
  {
    title: "LC 194/2022 (texto no Planalto): teto de ICMS para essenciais",
    date: "06-23-2022",
    linkText: "Fonte",
    link: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp194.htm",
  },
];

export default data;
