// importing hooks
import { useEffect } from 'react'

// components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Produto(props) {
    const produtoId = props.produtoId

    const produtosInfo = {
        barras_chatas: {
            nome: "Barras Chatas",
            conteudo: <>
                <p>As <strong>barras chatas de ferro e aço</strong> são fundamentais para uma ampla gama de projetos de construção, serralheria e estruturas metálicas, proporcionando resistência e durabilidade. Na MK3, localizada em <strong>Carapicuíba</strong>, você encontra <strong>barras chatas de ferro e aço</strong> de alta qualidade, perfeitas para a fabricação de grades, portões, suportes e estruturas industriais.</p>
                <p>Com foco em atender as necessidades de empresas e profissionais da região, a MK3 oferece <strong>barras chatas</strong> em diferentes dimensões, garantindo flexibilidade e soluções sob medida. Além de atender <strong>Carapicuíba</strong>, a MK3 também distribui barras chatas de ferro e aço para <strong>Cotia</strong>, <strong>Barueri</strong>, <strong>Osasco</strong>, <strong>Jandira</strong>, <strong>Itapevi</strong>, <strong>Taboão da Serra</strong>, <strong>Caucaia do Alto</strong> e <strong>Embu das Artes</strong>, sempre com rapidez e eficiência.</p>
                <p>Escolher as <strong>barras chatas de ferro e aço</strong> da MK3 é optar por qualidade e confiança em cada projeto. Com uma equipe experiente e comprometida, a MK3 se destaca como uma das principais <strong>distribuidoras de ferro e aço</strong> na Grande São Paulo, oferecendo materiais que seguem os mais altos padrões de qualidade e resistência.</p>
                <p>Seja para pequenos reparos ou grandes obras, a MK3 está pronta para fornecer <strong>barras chatas de ferro e aço</strong> com o melhor custo-benefício, garantindo que suas estruturas tenham a durabilidade necessária para enfrentar os desafios do dia a dia.</p>
            </>,
            imgSrc: '/informacoes/barra_chata.png'
        }
    }

    return (
        <>
            <Navbar />
            <main>
                <div className='container p-5 text-lg-start text-center'>
                    <h1 className="fw-black mt-2 mb-5">{produtosInfo[produtoId].nome.toUpperCase()}</h1>
                    <img src={produtosInfo[produtoId].imgSrc} alt={produtosInfo[produtoId].nome} className="img-thumbnail mb-5 p-0 border-3 border-primary" />
                    <div className="fs-5">{produtosInfo[produtoId].conteudo}</div>
                    <h2 className="fw-black fs-3 mt-lg-5 mt-3 mb-5">MK3 - {produtosInfo[produtoId].nome.toUpperCase()} E OUTROS PRODUTOS</h2>
                    <p className="fs-5">A MK3 é um <strong>distribuidor de ferro e aço</strong> que oferece as melhores opções em produtos metálicos. Presente no mercado há mais de duas décadas, a MK3 se modernizou e cresceu, sempre buscando oferecer o melhor para seus clientes e parceiros. </p>
                    <p className="fs-5">Além de disponibilizar produtos como as <strong>barras chatas</strong>, as <strong>cantoneiras</strong>, as <strong>chapas expandidas</strong>, as <strong>chapas perfuradas</strong>, o <strong>tubo de ferro</strong>, o <strong>tubo metalon quadrado</strong> e outros produtos, a empresa também realiza serviços como o <strong>corte e dobra de chapas</strong>. A MK3 atende a maior parte do estado de São Paulo de forma ágil. Contate a MK3 e conheça os benefícios de adquirir produtos de uma ótima empresa.</p>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Produto