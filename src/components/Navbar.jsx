import logo_branca from '../assets/images/logo_branca.webp'

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-black" style={{ "--bs-bg-opacity": ".5" }}>
                <div class="container px-5 py-3">
                    <a class="navbar-brand" href="/">
                        <img src={logo_branca} alt="Logo MK3 Comércio de Ferro e Aço" width="91" height="45" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-evenly">
                            <li class="nav-item">
                                <a class="nav-link text-white" aria-current="page" href="/#products-section">Produtos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="/#services-section">Serviços</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#contact-section">Contato</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="/quem_somos">Quem Somos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="/informacoes">Informações</a>
                            </li>
                        </ul>         
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar