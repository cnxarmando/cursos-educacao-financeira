$('.slider-principal').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000
});

var aulasCurso = [];

const cursos = [
    {

        id: 1,
        titulo: " Como definir preço de venda ",
        descrição: "Saber como definir o preço de venda é tão importante quanto a qualidade e a estratégia de marketing utilizada para comercializar os seus produtos e serviços. Muitos empreendedores, entretanto, ficam com dúvidas se o valor estabelecido é realmente justo e competitivo. Neste curso, você compreenderá quais são os custos fixos e variáveis do seu negócio, entenderá a importância da margem de contribuição e passará por um aprendizado capaz de ajudá-lo a chegar ao tão almejado ponto de equilíbrio.Chegou a hora de saber definir o preço de venda ideal e atrativo para seus clientes e ainda encontrará outras respostas necessárias para o sucesso do seu empreendimento.",
        img: "imagem1.png",
        professor: "Ana",
        aulas: ["Online"],
        dataCriacao: "2021-11-27",
        dataAtualizacao: "2021-11-27"
    },
    {
        id: 2,
        titulo: "Simples nacional",
        descrição: "Para tomar a decisão mais acertada para o seu negócio é fundamental entender por que o Simples Nacional foi criado e como é o tratamento simplificado, diferenciado e favorecido que essa modalidade de tributação oferece às Micro e Pequenas Empresas. No curso Simples Nacional, você aprenderá quais são os impostos incluídos no Simples Nacional e como calculá-los, além de avaliar se esta é uma opção vantajosa para a sua empresa. Vamos lá?",
        img: "imagem2.jpg",
        professor: "Marcelo",
        aulas: ["Online"],
        dataCriacao: "2021-11-27",
        dataAtualizacao: "2021-11-27"
    },
    {
        id: 3,
        titulo: "Controle de gastos no comércio",
        descrição: "Já faz parte da cultura popular que, para vender bem, é só multiplicar o valor de compra do produto por 3, 4 ou 5 que o milagre do lucro se realizará. No entanto, é preciso ter muito cuidado com essa fórmula: sem um balanço financeiro e um controle de gastos no comércio, quem poderá garantir que esse cálculo aleatório cobrirá o custo das mercadorias vendidas e os outros gastos da empresa? Sem saber de onde vêm essas despesas, como gerenciá-las da melhor maneira e identificar possíveis reduções? Por esses e outros motivos, o controle de gastos no comércio deve vir antes da formação dos preços de venda, justamente para que estes preços sejam coerentes com o mercado, o tipo de mercadoria, o público-alvo e a estrutura da empresa. Neste curso, você aprenderá a estabelecer uma administração consciente, utilizando ferramentas de controle de custos para ampliar a lucratividade e a competitividade do seu negócio.",
        img: "imagem3.jpg",
        professor: "Simone",
        aulas: ["Online"],
        dataCriacao: "2021-11-27",
        dataAtualizacao: "2021-11-27"
    },
    {
        id: 4,
        titulo: "Gestão financeira",
        descrição: "Todo empreendedor sabe que a necessidade de planejamento é uma realidade, mas como alcançar uma rotina organizada? O curso Gestão financeira possibilita que você consiga fazer a análise e o controle das atividades financeiras da sua empresa. Assim, será possível tomar decisões cada vez mais acertadas e, consequentemente, maximizar os resultados financeiros. Ao compreender o que envolve a gestão financeira, você terá autonomia para fazer o fluxo de caixa de sua empresa, bem como o controle do giro de caixa e da verificação de estoques. Vamos lá?",
        img: "imagem4.jpg",
        professor: "Maria",
        aulas: ["Online"],
        dataCriacao: "2021-11-27",
        dataAtualizacao: "2021-11-27"
    },
    {
        id: 5,
        titulo: "Como controlar o fluxo de caixa",
        descrição: "A gestão eficiente do negócio é tão importante quanto desenvolver ou entregar para o mercado um produto de qualidade. Para manter a saúde financeira do seu empreendimento e evitar surpresas desagradáveis, é fundamental saber como controlar o fluxo de caixa, registrando entradas e saídas de dinheiro no dia a dia.",
        img: "imagem5.jpg",
        professor: "Armando",
        aulas: ["Online"],
        dataCriacao: "2021-11-27",
        dataAtualizacao: "2021-11-27"
    },
    {
        id: 6,
        titulo: "Microcrédito consciente",
        descrição: "Neste curso você vai entender a importância do planejamento e da gestão antes de solicitar crédito para sua pequena empresa. Saiba quais são os critérios das instituições financeiras e os requisitos para ter acesso ao microcrédito, compare taxas de juros, aprenda a cálcular o capital de giro e entenda mais sobre custos e fluxo de caixa. Conheça também as causas de inadimplência e muitas dicas para usar o crédito de forma consciente.",
        img: "imagem6.jpg",
        professor: "Rosiane",
        aulas: ["Online"],
        dataCriacao: "2021-11-27",
        dataAtualizacao: "2021-11-27"
    },

]

inicializarLoja = () => {
    var containerProduto = document.getElementById('produtos');
    containerProduto.innerHTML = "";
    cursos.map((val) => {
        containerProduto.innerHTML += `
        
<div clas="produto-curso">
    <img src="`+ val.img + `" />
    <h2>`+ val.titulo + `</h2>
    <p>`+ val.descrição + `</p>
    <button class= "btn btn-success" id="editarCurso"  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick = "editarCurso(`+ val.id + `)" >Editar curso!</button>
    <button class= "btn btn-danger"  id="removerCurso" onClick = "removerCurso(`+ val.id + `)" >Remover curso!</button>
</div>   

`;

    })
}
inicializarLoja();

function alimentarListaDeAulas() {
    var containerListaAulas = document.getElementById("lista_de_aulas");
    containerListaAulas.innerHTML = "";
    aulasCurso.map((a) => {
        containerListaAulas.innerHTML += `<li class="list-group-item">` + a + `</li>`
    })
}

function limparListaAulas() {
    var containerListaAulas = document.getElementById("lista_de_aulas");
    containerListaAulas.innerHTML = "";
    aulasCurso = [];
}


adicionarAula = () => {
    var addLink = document.getElementById("addLink");
    addLink.addEventListener("click", function () {
        var link = document.getElementById("link_aula_curso").value;
        aulasCurso.push(link);
        alimentarListaDeAulas();
        document.getElementById("link_aula_curso").value = "";
    })
}

adicionarAula();

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

function obterCursoFormulario() {
    var idCurso = Number(document.getElementById("id_curso").value);
    var novoTitulo = document.getElementById("titulo_curso").value;
    var novaDescricao = document.getElementById("descricao_curso").value;
    var novaImagem = document.getElementById("imagem_curso").value;
    var novoProfessor = document.getElementById("professor_curso").value;

    return {
        id: idCurso,
        titulo: novoTitulo,
        descrição: novaDescricao,
        img: novaImagem,
        professor: novoProfessor,
        aulas: aulasCurso,
    }
}

function alimentarFormulario(curso) {
    aulasCurso = curso.aulas;
    document.getElementById("id_curso").value = curso.id;
    document.getElementById("titulo_curso").value = curso.titulo;
    document.getElementById("descricao_curso").value = curso.descrição;
    document.getElementById("imagem_curso").value = curso.img;
    document.getElementById("professor_curso").value = curso.professor;
    alimentarListaDeAulas();
}

function limparFormulario() {
    document.getElementById("id_curso").value = "";
    document.getElementById("titulo_curso").value = "";
    document.getElementById("descricao_curso").value = "";
    document.getElementById("imagem_curso").value = "";
    document.getElementById("professor_curso").value = "";
    document.getElementById("link_aula_curso").value = "";
    limparListaAulas()
}

function adicionarNovoCurso() {
    var novoId = cursos[cursos.length - 1].id + 1;
    curso = obterCursoFormulario();

    curso.id = novoId;
    curso.dataAtualizacao = new Date();
    curso.dataCriacao = new Date();

    cursos.push(curso);
    alert("Curso cadastrado com sucesso!!");
    return true;
}

function obterIndexOfCurso(id) {
    var indexCursoExistente;
    var i = 0;

    cursos.forEach(c => {
        if (c.id == id) {
            indexCursoExistente = i;
        }
        i++;
    });
    return indexCursoExistente;
}

function atualizarCursoExistente() {
    let curso = obterCursoFormulario();
    var indexCursoExistente = obterIndexOfCurso(curso.id);

    curso.dataAtualizacao = new Date();

    if (indexCursoExistente != undefined) {
        var cursoPersistido = cursos[indexCursoExistente];
        curso.dataCriacao = cursoPersistido.dataCriacao;
        cursos[indexCursoExistente] = curso;
        alert("Curso atualizado com sucesso!!");
        return true;
    }

    alert("Houve uma falha ao atualizar curso!");
    return false;
}

function cursoJáCadastrado() {
    var id = document.getElementById("id_curso").value;
    if (id == "") {
        return false;
    }
    return true;
}

document.getElementById('adicionarCurso').addEventListener("click", function () {
    var valid;
    if (cursoJáCadastrado()) {
        valid = atualizarCursoExistente();
    } else {
        valid = adicionarNovoCurso();
    }

    if (valid) {
        inicializarLoja();
        limparFormulario();
    }
})

function removerCurso(id) {
    var indexCursoExistente = obterIndexOfCurso(id);
    if (indexCursoExistente != undefined) {
        cursos.splice(indexCursoExistente, 1);
        inicializarLoja();
        alert("Curso removido com sucesso!");
        return;
    }
    alert("Houve uma falha ao remover curso!");

}


function editarCurso(id) {
    curso = cursos.find(c => c.id == id);
    limparListaAulas();
    alimentarFormulario(curso);
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




