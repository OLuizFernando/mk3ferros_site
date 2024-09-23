// components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// products images
import barra_chata from '../assets/images/informacoes/barra_chata.png'
import barra_quadrada from '../assets/images/informacoes/barra_quadrada.png'
import barra_redonda from '../assets/images/informacoes/barra_redonda.png'
import chapa from '../assets/images/informacoes/chapa.jpg'
import cantoneira from '../assets/images/informacoes/cantoneira.png'
import metalons from '../assets/images/informacoes/metalons.jpg'
import perfil_u from '../assets/images/informacoes/perfil_u.png'
import perfil_w from '../assets/images/informacoes/perfil_w.png'
import telha_galvalume from '../assets/images/informacoes/telha_galvalume.jpg'
import tubos from '../assets/images/informacoes/tubos.png'

function Informacoes() {
    return (
        <>
            <Navbar />
            <main>
                <div class="infos-section container p-5 text-lg-start text-center">
                    <h2 class="fw-black fs-1 mt-lg-5 mt-3 mb-5">INFORMAÇÕES</h2>
                    <div class="row mb-lg-4 justify-content-center">
                        <div class="col-12 col-md-6 col-lg-3 mb-lg-0 mb-4">
                            <div onclick="window.location.href='/barras_chatas'" style={{cursor: "pointer"}} class="card text-center text-primary border-3 border-primary">
                                <img src={barra_chata} class="card-img-top" alt="Barra chata de ferro e aço" />
                                <div class="card-body border-3 border-top border-primary">
                                    <h5 class="card-title fw-black">BARRAS CHATAS</h5>
                                    <a href="/barras_chatas" class="btn btn-primary">Mais detalhes</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3 mb-lg-0 mb-4">
                            <div onclick="window.location.href='/barras_quadradas'" style={{cursor: "pointer"}} class="card text-center text-primary border-3 border-primary">
                                <img src={barra_quadrada} class="card-img-top" alt="Barra quadrada de ferro e aço" />
                                <div class="card-body border-3 border-top border-primary">
                                    <h5 class="card-title fw-black">BARRAS QUADRADAS</h5>
                                    <a href="/barras_quadradas" class="btn btn-primary">Mais detalhes</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3 mb-lg-0 mb-4">
                            <div onclick="window.location.href='/barras_redondas'" style={{cursor: "pointer"}} class="card text-center text-primary border-3 border-primary">
                                <img src={barra_redonda} class="card-img-top" alt="Barra redonda de ferro e aço" />
                                <div class="card-body border-3 border-top border-primary">
                                    <h5 class="card-title fw-black">BARRAS REDONDAS</h5>
                                    <a href="/barras_redondas" class="btn btn-primary">Mais detalhes</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3 mb-lg-0 mb-4">
                            <div onclick="window.location.href='/cantoneiras'" style={{cursor: "pointer"}} class="card text-center text-primary border-3 border-primary">
                                <img src={cantoneira} class="card-img-top" alt="cantoneira de ferro e aço" />
                                <div class="card-body border-3 border-top border-primary">
                                    <h5 class="card-title fw-black">CANTONEIRAS</h5>
                                    <a href="/cantoneiras" class="btn btn-primary">Mais detalhes</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-lg-4 justify-content-center">
                        <div class="col-12 col-md-6 col-lg-3 mb-lg-0 mb-4">
                            <div onclick="window.location.href='/chapas'" style={{cursor: "pointer"}} class="card text-center text-primary border-3 border-primary">
                                <img src={chapa} class="card-img-top" alt="Chapa de ferro e aço" />
                                <div class="card-body border-3 border-top border-primary">
                                    <h5 class="card-title fw-black">CHAPAS</h5>
                                    <a href="/chapas" class="btn btn-primary">Mais detalhes</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3 mb-lg-0 mb-4">
                            <div onclick="window.location.href='/metalons'" style={{cursor: "pointer"}} class="card text-center text-primary border-3 border-primary">
                                <img src={metalons} class="card-img-top" alt="Metalons de ferro e aço" />
                                <div class="card-body border-3 border-top border-primary">
                                    <h5 class="card-title fw-black">METALONS</h5>
                                    <a href="/metalons" class="btn btn-primary">Mais detalhes</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3 mb-lg-0 mb-4">
                            <div onclick="window.location.href='/vigas_perfil_u'" style={{cursor: "pointer"}} class="card text-center text-primary border-3 border-primary">
                                <img src={perfil_u} class="card-img-top" alt="Vigas perfil U de ferro e aço" />
                                <div class="card-body border-3 border-top border-primary">
                                    <h5 class="card-title fw-black">VIGAS PERFIL U</h5>
                                    <a href="/vigas_perfil_u" class="btn btn-primary">Mais detalhes</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3 mb-lg-0 mb-4">
                            <div onclick="window.location.href='/vigas_perfil_w'" style={{cursor: "pointer"}} class="card text-center text-primary border-3 border-primary">
                                <img src={perfil_w} class="card-img-top" alt="Vigas perfil W de ferro e aço" />
                                <div class="card-body border-3 border-top border-primary">
                                    <h5 class="card-title fw-black">VIGAS PERFIL W</h5>
                                    <a href="/vigas_perfil_w" class="btn btn-primary">Mais detalhes</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-lg-4 justify-content-center">
                        <div class="col-12 col-md-6 col-lg-3 mb-lg-0 mb-4">
                            <div onclick="window.location.href='/telhas_galvalume'" style={{cursor: "pointer"}} class="card text-center text-primary border-3 border-primary">
                                <img src={telha_galvalume} class="card-img-top" alt="Telha galvalume de ferro e aço" />
                                <div class="card-body border-3 border-top border-primary">
                                    <h5 class="card-title fw-black">TELHAS GALVALUME</h5>
                                    <a href="/telhas_galvalume" class="btn btn-primary">Mais detalhes</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3 mb-lg-0 mb-4">
                            <div onclick="window.location.href='/tubos'" style={{cursor: "pointer"}} class="card text-center text-primary border-3 border-primary">
                                <img src={tubos} class="card-img-top" alt="Tubos de ferro e aço" />
                                <div class="card-body border-3 border-top border-primary">
                                    <h5 class="card-title fw-black">TUBOS</h5>
                                    <a href="/tubos" class="btn btn-primary">Mais detalhes</a>
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