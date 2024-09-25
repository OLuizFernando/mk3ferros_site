// importing hooks
import { useEffect } from 'react'

// components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function QuemSomos() {
    useEffect(() => {
        document.title = "Quem Somos - MK3"
    }, [])

    return (
        <>
            <Navbar />
            <main>
                <div class="p-5 mx-lg-5 mx-0">
                    <div class="row px-lg-5 px-0 mx-lg-5 mx-0 align-items-center">
                        <div class="col-12 col-lg-6 mb-4 mb-lg-0">
                            <div class="carousel slide mb-lg-0 mb-5 me-lg-5 me-0" id="carouselExample">
                                <div class="carousel-inner rounded-start-5">
                                    <div class="carousel-item active">
                                        <img src='/quem_somos/equipe_1.jpg' class="d-block w-100" alt="Equipe MK3" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src='/quem_somos/equipe_2.webp' class="d-block w-100" alt="Equipe MK3" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src='/quem_somos/atendimento_1.webp' class="d-block w-100" alt="Atendimento MK3" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src='/quem_somos/atendimento_2.webp' class="d-block w-100" alt="Atendimento MK3" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src='/quem_somos/atendimento_3.webp' class="d-block w-100" alt="Atendimento MK3" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src='/quem_somos/atendimento_4.webp' class="d-block w-100" alt="Atendimento MK3" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src='/quem_somos/atendimento_5.webp' class="d-block w-100" alt="Atendimento MK3" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src='/quem_somos/caminhoes.webp' class="d-block w-100" alt="Caminhoes de entrega MK3" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src='/quem_somos/atendimento_6.webp' class="d-block w-100" alt="Atendimento MK3" />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <h2 class="fw-black mb-5">QUEM SOMOS</h2>
                            <p>
                                A <strong>MK3 Comércio de Ferro e Aço</strong>, fundada no ano de 2000,
                                está situada na Rua Santa Cecília, cidade de Carapicuíba, em uma área
                                de aproximadamente 1.000 metros quadrados e estacionamento no local de
                                500 metros quadrados.
                            </p>
                            <p>
                                Com profissionais capacitados, proporcionamos aos clientes um
                                atendimento diferenciado e de alta qualidade, oferecendo produtos,
                                serviços e soluções inovadoras em <strong>Ferro e Aço</strong>.
                            </p>
                            <p class="mb-5">
                                São anos de experiência, onde a dedicação, o respeito, o compromisso
                                e a ética no relacionamento com seus clientes, fornecedores e colaboradores
                                fazem da MK3 Comércio de Ferro e Aço uma empresa consolidada e reconhecida
                                no mercado em que atua.
                            </p>
                            <a href="https://api.whatsapp.com/send?phone=551141674763" target="_blank" type="button" class="btn btn-primary">Faça seu orçamento</a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default QuemSomos