// importing hooks
import { useEffect } from 'react'

// components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
    useEffect(() => {
        document.title = "Home - MK3"
    }, [])

    return (
        <>
            <Navbar />
            <main>
                <img class="banner-img" src={'/home/banner_serralheiro.webp'} alt="Banner serralheiro" />

                <div class="container px-5 py-3">
                    <div class="banner-text">
                        <h1 class="text-white fw-black">A CASA DO<br /><span class="text-primary">SERRALHEIRO</span></h1>
                        <h6 class="text-white mb-3">
                            <strong>Distribuidora de Ferro e Aço</strong> para serralherias há mais de 22 anos.
                        </h6>
                        <a href="https://api.whatsapp.com/send?phone=551141674763" target="_blank" type="button" class="btn btn-primary btn-lg">Faça seu orçamento</a>
                    </div>
                    
                    <div class="products-section" id="products-section">
                        <p class="fs-2 fw-black text-center mb-5">PRODUTOS EM DESTAQUE</p>
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 mb-5">
                            <div class="col text-center">
                                <img class="w-75" src={'/home/ferros_laminados.webp'} alt="Ferro laminado" />
                                <h2 class="fs-4 fw-black">FERRO LAMINADO</h2>
                            </div>
                            <div class="col text-center">
                                <img class="w-75" src={'/home/porta_automatica.webp'} alt="Porta automática" />
                                <h2 class="fs-4 fw-black">PORTA AUTOMÁTICA</h2>
                            </div>
                            <div class="col text-center">
                                <img class="w-75" src={'/home/telha_galvalume.webp'} alt="Telha galvalume" />
                                <h2 class="fs-4 fw-black">TELHAS GALVALUME</h2>
                            </div>
                            <div class="col text-center">
                                <img class="w-75" src={'/home/tubos_de_aco.webp'} alt="Tubo metalon de aço" />
                                <h2 class="fs-4   fw-black">TUBO / METALON</h2>
                            </div>
                        </div>
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                            <div class="col text-center">
                                <img class="w-75" src={'/home/viga_u.webp'} alt="Viga perfil U" />
                                <h2 class="fs-4 fw-black">VIGA U / PERFIL U</h2>
                            </div>
                            <div class="col text-center">
                                <img class="w-75" src={'/home/viga_w.webp'} alt="Viga perfil W" />
                                <h2 class="fs-4 fw-black">VIGA W / PERFIL W</h2>
                            </div>
                            <div class="col text-center">
                                <img class="w-75" src={'/home/chapas.webp'} alt="Chapa de aço" />
                                <h2 class="fs-4 fw-black">CHAPA</h2>
                            </div>
                            <div class="col text-center my-5">
                                <h2 class="fs-4 fw-extrabold mb-3 px-3">FAÇA O SEU ORÇAMENTO AGORA MESMO!</h2>
                                <a href="https://api.whatsapp.com/send?phone=551141674763" target="_blank" type="button" class="btn btn-primary btn-lg">Faça seu orçamento</a>
                            </div>
                        </div>
                    </div>
                    
                    <img class="bg-img" id="services-section" src={'/home/projeto_bg.png'} alt="Background planta de projeto" />
                    
                    <div class="services-section bg-white shadow-sm rounded-2 p-5">
                        <p class="fw-bold text-secondary mb-1">Serviços</p>
                        <h2 class="fs-4 fw-black mb-3">CORTE E DOBRA</h2>
                        <ul class="ps-3">
                            <li>Corte de chapas sob medida</li>
                            <li>Dobra de chapas sob medida</li>
                            <li>Corte e dobra de chapa até 1/8 de espessura</li>
                        </ul>
                        <a href="https://api.whatsapp.com/send?phone=551141674763" target="_blank" type="button" class="btn btn-primary">Faça seu orçamento</a>
                    </div>

                    <img src={'/home/corte_e_dobra.jpg'} alt="Corte e dobra de ferro e aço" class="services-img rounded-2" />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Home