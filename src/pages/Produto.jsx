// importing hooks
import { useEffect } from 'react'

// components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// products data
import produtosInfo from '../data/produtosInfo'

function Produto(props) {
    const produtoId = props.produtoId

    return (
        <>
            <Navbar />
            <main>
                <div className='container p-5 text-lg-start text-center'>
                    <h1 className="fw-black mt-2 mb-5">{produtosInfo[produtoId].nome.toUpperCase()}</h1>
                    <img src={produtosInfo[produtoId].imgSrc} alt={produtosInfo[produtoId].nome + " de ferro e aço"} className="img-thumbnail mb-5 p-0 border-3 border-primary" />
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