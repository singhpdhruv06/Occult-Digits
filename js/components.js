class MainHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light fixed-top">
            <div class="container">
                <a class="navbar-brand d-flex align-items-center" href="index.html" aria-label="Occult Digits - Vedic Numerology">
                    <i class="fas fa-dharmachakra me-2"></i>Occult Digits
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="index.html#about">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="index.html#services">Services</a></li>
                        <li class="nav-item"><a class="nav-link" href="index.html#testimonials">Testimonials</a></li>
                        <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
                        <li class="nav-item"><a class="nav-link" href="index.html#faq">FAQ</a></li>
                        <li class="nav-item"><a class="nav-link" href="index.html#contact">Contact</a></li>
                    </ul>
                    <a href="index.html#contact" class="btn btn-primary ms-lg-3 px-4 rounded-pill fw-bold">Book Consultation</a>
                </div>
            </div>
        </nav>
        `;
    }
}

class MainFooter extends HTMLElement {
    connectedCallback() {
        const currentYear = new Date().getFullYear();
        this.innerHTML = `
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4">
                        <h3 class="footer-heading"><i class="fas fa-dharmachakra me-2" style="color: #d4af37;"></i>Occult Digits</h3>
                        <p class="mt-3 text-white" style="opacity: 0.8;">Empowering your journey with the science of numbers, planetary alignments, and Vastu energies. Your trusted partner for spiritual and financial growth.</p>
                        <div class="social-icons mt-4">
                            <a href="https://youtube.com/@occultdigits" aria-label="YouTube channel" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
                            <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 mb-4">
                        <h4 class="footer-heading">Quick Links</h4>
                        <div class="footer-links">
                            <a href="index.html">Home</a>
                            <a href="index.html#about">About</a>
                            <a href="index.html#services">Services</a>
                            <a href="index.html#calculator">Free Calculator</a>
                            <a href="blog.html">Blog</a>
                            <a href="index.html#testimonials">Testimonials</a>
                            <a href="index.html#faq">FAQ</a>
                            <a href="index.html#contact">Contact</a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <h4 class="footer-heading">Our Services</h4>
                        <div class="footer-links">
                            <div class="row">
                                <div class="col-6">
                                    <a href="index.html#services">Personal Numerology</a>
                                    <a href="index.html#services">Business Master</a>
                                    <a href="index.html#services">Kundali Analysis</a>
                                    <a href="index.html#services">Digital Wealth</a>
                                </div>
                                <div class="col-6">
                                    <a href="index.html#services">Asset Numerology</a>
                                    <a href="index.html#services">Career & Purpose</a>
                                    <a href="index.html#services">Premium Vastu</a>
                                    <a href="index.html#services">Health Scan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <h4 class="footer-heading">Contact & Legal</h4>
                        <div class="footer-links">
                            <a href="tel:+918860133445" title="Click to Call"><i class="fas fa-phone me-2"></i>Call: +91-8860133445</a>
                            <a href="https://wa.me/918860133445" target="_blank" rel="noopener noreferrer" title="Click to Chat"><i class="fab fa-whatsapp me-2"></i>WhatsApp Us</a>
                            <a href="privacy-policy.html"><i class="fas fa-shield-alt me-2"></i>Privacy Policy</a>
                            <a href="terms-of-service.html"><i class="fas fa-file-contract me-2"></i>Terms of Service</a>
                            <a href="disclaimer.html"><i class="fas fa-exclamation-triangle me-2"></i>Disclaimer</a>
                        </div>
                    </div>
                </div>
                <div class="copyright border-top pt-3 mt-4 text-center">
                    <p>&copy; ${currentYear} OccultDigits.com. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('main-header', MainHeader);
customElements.define('main-footer', MainFooter);