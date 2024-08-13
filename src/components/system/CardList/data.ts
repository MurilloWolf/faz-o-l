export type Notice = {
  title: string;
  date: string;
  linkText: string;
  link: string;
};

const data: Notice[] = [
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
    title:
      "Lula sanciona lei que mantém o Perse com limite de R$ 15 bi até 2026",
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
    title:
      "Lula trevoga decreto que dava desconto de 50% nas alíquotas do AFRMM",
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
    title:
      "Fundo exclusivos passarão a operar com 'come-cotas' em alíquota de 15% e 20%",
    date: "01-01-2024",
    linkText: "InfoMoney",
    link: "https://www.infomoney.com.br/politica/fundos-exclusivos-passarao-a-operar-com-come-cotas-e-aliquotas-de-15-e-20/#:~:text=Mudan%C3%A7as-,Fundos%20exclusivos%20passar%C3%A3o%20a%20operar%20com%20%E2%80%9Ccome%2Dcotas%E2%80%9D%20em,al%C3%ADquotas%20de%2015%25%20e%2020%25&text=O%20projeto%20de%20lei%20n%C2%BA,para%20os%20fundos%20abertos%20convencionais.",
  },
  {
    title:
      "Sancionada lei com nova tributação para fundos de investimentos e offshores",
    date: "01-01-2024",
    linkText: "Câmara dos Deputados",
    link: "https://www.camara.leg.br/noticias/1025775-sancionada-lei-com-nova-tributacao-para-fundos-de-investimentos-e-offshores/",
  },
  {
    title:
      "Imposto de 20% e 25% para importação de veículos elétricos e híbridos",
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
      "Cobrança de imposto em apostas online pode variar de 1,3% a 283% no ano",
    date: "01-08-2024",
    linkText: "Câmara dos Deputados",
    link: "https://www.camara.leg.br/noticias/103467-projeto-simplifica-cobranca-de-impostos-para-biodiesel/#:~:text=A%20proposta%20define%20que%20a,3%25%20sobre%20a%20receita%20bruta.",
  },
  {
    title:
      "Alíquota de PIS/Pasep devida pelas distribuidoras de biodiesel será de 0,65% sobre a receita bruta",
    date: "07-26-2024",
    linkText: "Câmara dos Deputados",
    link: "https://www.camara.leg.br/noticias/103467-projeto-simplifica-cobranca-de-impostos-para-biodiesel/#:~:text=A%20proposta%20define%20que%20a,3%25%20sobre%20a%20receita%20bruta.",
  },
  {
    title:
      "Taxação em 20% nas importações abaixo de U$ 50,00 (AliExpress/Shein)",
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
];

export default data;
