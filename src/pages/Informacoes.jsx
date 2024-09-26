// importing hooks
import { useEffect } from 'react'

// components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Informacoes() {
    useEffect(() => {
        document.title = "Informações - MK3"
    }, [])

    return (
        <>
            <Navbar />
            <main>
                <div className="infos-section container p-5 text-lg-start text-center">
                    <h2 className="fw-black fs-1 mt-lg-5 mt-3 mb-5">INFORMAÇÕES</h2>
                    <div className="row mb-lg-4 justify-content-center">
                        <div className="col-12 col-md-6 col-lg-3 mb-lg-0 mb-4">
                            <div onClick={() => window.location.href='/barras_chatas'} style={{cursor: "pointer"}} className="card text-center text-primary border-3 border-primary">
                                <img src={'/informacoes/barra_chata.png'} className="card-img-top" alt="Barra chata de ferro e aço" />
                                <div className="card-body border-3 border-top border-primary">
                                    <h5 className="card-title fw-black">BARRAS CHATAS</h5>
                                    <a href="/barras_chatas" className="btn btn-primary">Mais detalhes</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-lg-0 mb-4">
                            <div onClick={() => window.location.href='/barras_quadradas'} style={{cursor: "pointer"}} className="card text-center text-primary border-3 border-primary">
                                <img src={'/informacoes/barra_quadrada.png'} className="card-img-top" alt="Barra quadrada de ferro e aço" />
                                <div className="card-body border-3 border-top border-primary">
                                    <h5 className="card-title fw-black">BARRAS QUADRADAS</h5>
                                    <a href="/barras_quadradas" className="btn btn-primary">Mais detalhes</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-lg-0 mb-4">
                            <div onClick={() => window.location.href='/barras_redondas'} style={{cursor: "pointer"}} className="card text-center text-primary border-3 border-primary">
                                <img src={'/informacoes/barra_redonda.png'} className="card-img-top" alt="Barra redonda de ferro e aço" />
                                <div className="card-body border-3 border-top border-primary">
                                    <h5 className="card-title fw-black">BARRAS REDONDAS</h5>
                                    <a href="/barras_redondas" className="btn btn-primary">Mais detalhes</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-lg-0 mb-4">
                            <div onClick={() => window.location.href='/cantoneiras'} style={{cursor: "pointer"}} className="card text-center text-primary border-3 border-primary">
                                <img src={'/informacoes/cantoneira.png'} className="card-img-top" alt="cantoneira de ferro e aço" />
                                <div className="card-body border-3 border-top border-primary">
                                    <h5 className="card-title fw-black">CANTONEIRAS</h5>
                                    <a href="/cantoneiras" className="btn btn-primary">Mais detalhes</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-lg-4 justify-content-center">
                        <div className="col-12 col-md-6 col-lg-3 mb-lg-0 mb-4">
                            <div onClick={() => window.location.href='/chapas'} style={{cursor: "pointer"}} className="card text-center text-primary border-3 border-primary">
                                <img src={'/informacoes/chapa.png'} className="card-img-top" alt="Chapa de ferro e aço" />
                                <div className="card-body border-3 border-top border-primary">
                                    <h5 className="card-title fw-black">CHAPAS</h5>
                                    <a href="/chapas" className="btn btn-primary">Mais detalhes</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-lg-0 mb-4">
                            <div onClick={() => window.location.href='/metalons'} style={{cursor: "pointer"}} className="card text-center text-primary border-3 border-primary">
                                <img src={'/informacoes/metalons.png'} className="card-img-top" alt="Metalons de ferro e aço" />
                                <div className="card-body border-3 border-top border-primary">
                                    <h5 className="card-title fw-black">METALONS</h5>
                                    <a href="/metalons" className="btn btn-primary">Mais detalhes</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-lg-0 mb-4">
                            <div onClick={() => window.location.href='/vigas_perfil_u'} style={{cursor: "pointer"}} className="card text-center text-primary border-3 border-primary">
                                <img src={'/informacoes/perfil_u.png'} className="card-img-top" alt="Vigas perfil U de ferro e aço" />
                                <div className="card-body border-3 border-top border-primary">
                                    <h5 className="card-title fw-black">VIGAS PERFIL U</h5>
                                    <a href="/vigas_perfil_u" className="btn btn-primary">Mais detalhes</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-lg-0 mb-4">
                            <div onClick={() => window.location.href='/vigas_perfil_w'} style={{cursor: "pointer"}} className="card text-center text-primary border-3 border-primary">
                                <img src={'/informacoes/perfil_w.png'} className="card-img-top" alt="Vigas perfil W de ferro e aço" />
                                <div className="card-body border-3 border-top border-primary">
                                    <h5 className="card-title fw-black">VIGAS PERFIL W</h5>
                                    <a href="/vigas_perfil_w" className="btn btn-primary">Mais detalhes</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-lg-4 justify-content-center">
                        <div className="col-12 col-md-6 col-lg-3 mb-lg-0 mb-4">
                            <div onClick={() => window.location.href='/telhas_galvalume'} style={{cursor: "pointer"}} className="card text-center text-primary border-3 border-primary">
                                <img src={'/informacoes/telha_galvalume.png'} className="card-img-top" alt="Telha galvalume de ferro e aço" />
                                <div className="card-body border-3 border-top border-primary">
                                    <h5 className="card-title fw-black">TELHAS GALVALUME</h5>
                                    <a href="/telhas_galvalume" className="btn btn-primary">Mais detalhes</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-lg-0 mb-4">
                            <div onClick={() => window.location.href='/tubos'} style={{cursor: "pointer"}} className="card text-center text-primary border-3 border-primary">
                                <img src={'/informacoes/tubos.png'} className="card-img-top" alt="Tubos de ferro e aço" />
                                <div className="card-body border-3 border-top border-primary">
                                    <h5 className="card-title fw-black">TUBOS</h5>
                                    <a href="/tubos" className="btn btn-primary">Mais detalhes</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Informacoes