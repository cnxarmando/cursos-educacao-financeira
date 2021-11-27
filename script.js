$('.slider-principal').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000
});

const cursos = [
    {

        id: 1,
        titulo: " Como definir preço de venda ",
        descrição: "Saber como definir o preço de venda é tão importante quanto a qualidade e a estratégia de marketing utilizada para comercializar os seus produtos e serviços. Muitos empreendedores, entretanto, ficam com dúvidas se o valor estabelecido é realmente justo e competitivo. Neste curso, você compreenderá quais são os custos fixos e variáveis do seu negócio, entenderá a importância da margem de contribuição e passará por um aprendizado capaz de ajudá-lo a chegar ao tão almejado ponto de equilíbrio.Chegou a hora de saber definir o preço de venda ideal e atrativo para seus clientes e ainda encontrará outras respostas necessárias para o sucesso do seu empreendimento.",
        img: "imagem1.png",
        professor: "Ana",
        aulas: "Online",
    },
    {
        id: 2,
        titulo: "Simples nacional",
        descrição: "Para tomar a decisão mais acertada para o seu negócio é fundamental entender por que o Simples Nacional foi criado e como é o tratamento simplificado, diferenciado e favorecido que essa modalidade de tributação oferece às Micro e Pequenas Empresas. No curso Simples Nacional, você aprenderá quais são os impostos incluídos no Simples Nacional e como calculá-los, além de avaliar se esta é uma opção vantajosa para a sua empresa. Vamos lá?",
        img: "imagem2.jpg",
        professor: "Marcelo",
        aulas: "Online",
    },
    {
        id: 3,
        titulo: "Controle de gastos no comércio",
        descrição: "Já faz parte da cultura popular que, para vender bem, é só multiplicar o valor de compra do produto por 3, 4 ou 5 que o milagre do lucro se realizará. No entanto, é preciso ter muito cuidado com essa fórmula: sem um balanço financeiro e um controle de gastos no comércio, quem poderá garantir que esse cálculo aleatório cobrirá o custo das mercadorias vendidas e os outros gastos da empresa? Sem saber de onde vêm essas despesas, como gerenciá-las da melhor maneira e identificar possíveis reduções? Por esses e outros motivos, o controle de gastos no comércio deve vir antes da formação dos preços de venda, justamente para que estes preços sejam coerentes com o mercado, o tipo de mercadoria, o público-alvo e a estrutura da empresa. Neste curso, você aprenderá a estabelecer uma administração consciente, utilizando ferramentas de controle de custos para ampliar a lucratividade e a competitividade do seu negócio.",
        img: "imagem3.jpg",
        professor: "Simone",
        aulas: "Online",
    },
    {
        id: 4,
        titulo: "Gestão financeira",
        descrição: "Todo empreendedor sabe que a necessidade de planejamento é uma realidade, mas como alcançar uma rotina organizada? O curso Gestão financeira possibilita que você consiga fazer a análise e o controle das atividades financeiras da sua empresa. Assim, será possível tomar decisões cada vez mais acertadas e, consequentemente, maximizar os resultados financeiros. Ao compreender o que envolve a gestão financeira, você terá autonomia para fazer o fluxo de caixa de sua empresa, bem como o controle do giro de caixa e da verificação de estoques. Vamos lá?",
        img: "imagem4.jpg",
        professor: "Maria",
        aulas: "Online",
    },
    {
        id: 5,
        titulo: "Como controlar o fluxo de caixa",
        descrição: "A gestão eficiente do negócio é tão importante quanto desenvolver ou entregar para o mercado um produto de qualidade. Para manter a saúde financeira do seu empreendimento e evitar surpresas desagradáveis, é fundamental saber como controlar o fluxo de caixa, registrando entradas e saídas de dinheiro no dia a dia.",
        img: "imagem5.jpg",
        professor: "Armando",
        aulas: "Online",
    },
    {
        id: 6,
        titulo: "Microcrédito consciente",
        descrição: "Neste curso você vai entender a importância do planejamento e da gestão antes de solicitar crédito para sua pequena empresa. Saiba quais são os critérios das instituições financeiras e os requisitos para ter acesso ao microcrédito, compare taxas de juros, aprenda a cálcular o capital de giro e entenda mais sobre custos e fluxo de caixa. Conheça também as causas de inadimplência e muitas dicas para usar o crédito de forma consciente.",
        img: "imagem6.jpg",
        professor: "Rosiane",
        aulas: "Online",
    },

]

inicializarLoja = () => {
    var containerProduto = document.getElementById('produtos')
    cursos.map((val) => {
        containerProduto.innerHTML += `
        
<div clas="produto-curso">
    <img src="`+ val.img + `" />
    <h2>`+ val.titulo + `</h2>
    <p>`+ val.descrição + `</p>
    <a key="`+ val.id + `" href="#">Adicionar curso!<a/>
</div>   

`;

    })
}
inicializarLoja();

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho')
    containerCarrinho.innerHTML = "";
    cursos.map((val) => {
        if (val.quantidade > 0) {

            containerCarrinho.innerHTML += `
<div class="info-cursos-checkout">
<p style="float:left;">Produto: `+ val.titulo + `</p>
<p style="float:right;">Quantidade: `+ val.quantidade + `</p>
<div etyle="clear:both"></div>
</div>

`;
        }
    })
}

var links = document.getElementsByTagName('a')

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        let key = this.getAttibute('key');
        cursos[kay].quantidade++;
        atualizarCarrinho();
        return false;
    })
}




