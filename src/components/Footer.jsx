import QuoteBanner from './QuoteBanner'
import MapEmbed from './MapEmbed'
import ContactInfo from './ContactInfo'
import CopyrightInfo from './CopyrightInfo'

function Footer() {
    return(
        <footer>
            <QuoteBanner />
            <MapEmbed />
            <div class="bg-black text-white pt-5">
                <ContactInfo />
                <div class="border-top border-dark"></div>
                <CopyrightInfo />
            </div>
        </footer>
    )
}

export default Footer