import logo_branca from '../assets/images/logo_branca.webp'

function ContactInfo() {
    return (
        <>
            <div class="container p-5" id="contact-section">
                <div class="row justify-content-between">
                    <div class="col-md-3 text-center text-md-start mb-4">
                        <img src={logo_branca} width="91" height="45" alt="Logo MK3 Comércio de Ferro e Aço" class="mb-3" />
                        <p><strong>Distribuidora de Ferro e Aço</strong> para serralherias há mais de 22 anos.</p>
                        <div class="border-top border-primary mb-3"></div>
                        <div>
                            <p><i class="bi bi-clock text-primary me-3"></i>Segunda à Sexta: 08:00 às 17:30</p>
                            <p><i class="bi bi-clock text-primary me-3"></i>Sábado: 08:00 às 12:00</p>
                        </div>
                    </div>
        
                    <div class="col-md-2 text-center text-md-start mb-4">
                        <h5 class="text-primary fw-bold mb-4">Menu</h5>
                        <ul class="list-unstyled">
                            <li class="mb-2"><i class="bi bi-circle-fill small-icon text-primary me-3"></i>Home</li>
                            <li class="mb-2"><i class="bi bi-circle-fill small-icon text-primary me-3"></i>Quem somos</li>
                            <li class="mb-2"><i class="bi bi-circle-fill small-icon text-primary me-3"></i>Serviços</li>
                            <li><i class="bi bi-circle-fill small-icon text-primary me-3"></i>Produtos</li>
                        </ul>
                    </div>
        
                    <div class="col-md-2 text-center text-md-start mb-4">
                        <h5 class="text-primary fw-bold mb-4">Serviços</h5>
                        <ul class="list-unstyled">
                            <li class="mb-2"><i class="bi bi-circle-fill small-icon text-primary me-3"></i>Corte</li>
                            <li><i class="bi bi-circle-fill small-icon text-primary me-3"></i>Dobra</li>
                        </ul>
                    </div>
        
                    <div class="col-md-4 text-center text-md-start mb-4">
                        <h5 class="text-primary fw-bold mb-4">Contato</h5>
                        <ul class="list-unstyled">
                            <li class="mb-2"><i class="bi bi-whatsapp text-primary me-3"></i>(11) 4167-4763</li>
                            <li class="mb-2"><i class="bi bi-telephone text-primary me-3"></i>(11) 4167-1411</li>
                            <li class="mb-2"><i class="bi bi-envelope text-primary me-3"></i>vendas@mk3ferros.com</li>
                            <li><i class="bi bi-geo-alt text-primary me-3"></i>Rua Santa Cecília, 59 Carapicuíba / SP</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactInfo