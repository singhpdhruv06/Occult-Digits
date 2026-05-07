// Security: Content Security Policy would be set via HTTP headers
// Security: XSS prevention - sanitize inputs
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

// Loading screen
window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    setTimeout(function() {
        loading.classList.add('hidden');
    }, 1000);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            // Using Bootstrap's collapse API
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) bsCollapse.hide();
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const backToTop = document.getElementById('backToTop');
    
    if(window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Show/hide back to top button
    if(window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// Back to top functionality
document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form submission with validation
const consultationForm = document.getElementById('consultationForm');
if(consultationForm) {
    consultationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic form validation
    const form = e.target;
    if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
    }
    
    // Sanitize inputs before processing
    const name = sanitizeInput(document.getElementById('name').value.trim());
    const email = sanitizeInput(document.getElementById('email').value.trim());
    const phone = sanitizeInput(document.getElementById('phone').value.trim());
    const serviceDropdown = document.getElementById('service');
    const service = sanitizeInput(serviceDropdown.options[serviceDropdown.selectedIndex].text);
    const message = sanitizeInput(document.getElementById('message').value.trim());
    
    // Format the message for WhatsApp
    let waMessage = `Hello Dr. Jyoti,\n\nI would like to book a consultation.\n\n*Name:* ${name}\n*Email:* ${email}`;
    if (phone) waMessage += `\n*Phone:* ${phone}`;
    waMessage += `\n*Interested Service:* ${service}`;
    if (message) waMessage += `\n\n*Message:* ${message}`;
    
    // Encode text and redirect to WhatsApp
    const waUrl = `https://wa.me/918860133445?text=${encodeURIComponent(waMessage)}`;
    window.open(waUrl, '_blank');
    
    // Reset form after sending
    setTimeout(() => {
        form.reset();
        form.classList.remove('was-validated');
    }, 1000);
    });
}

// Scroll animation
function checkScroll() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 50;
        
        if(elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// Numerology Calculator Logic (Chaldean & Vedic)
const chaldeanMap = {
    'A':1, 'I':1, 'J':1, 'Q':1, 'Y':1,
    'B':2, 'K':2, 'R':2,
    'C':3, 'G':3, 'L':3, 'S':3,
    'D':4, 'M':4, 'T':4,
    'E':5, 'H':5, 'N':5, 'X':5,
    'U':6, 'V':6, 'W':6,
    'O':7, 'Z':7,
    'F':8, 'P':8
};

const numberMeanings = {
    1: "<span class='d-block mb-1' style='color:#8B5A2B; font-weight:600;'>The Leader (Sun)</span>Represents leadership, independence, and originality. You are destined to take charge and initiate.",
    2: "<span class='d-block mb-1' style='color:#8B5A2B; font-weight:600;'>The Peacemaker (Moon)</span>Symbolizes harmony, cooperation, and diplomacy. You are a natural peacemaker and team player.",
    3: "<span class='d-block mb-1' style='color:#8B5A2B; font-weight:600;'>The Communicator (Jupiter)</span>Signifies creativity, self-expression, and joy. You possess excellent communication skills.",
    4: "<span class='d-block mb-1' style='color:#8B5A2B; font-weight:600;'>The Builder (Rahu)</span>Stands for stability, hard work, and practicality. You build strong, lasting foundations.",
    5: "<span class='d-block mb-1' style='color:#8B5A2B; font-weight:600;'>The Adventurer (Mercury)</span>Represents freedom, adventure, and dynamic change. You thrive on versatility and new experiences.",
    6: "<span class='d-block mb-1' style='color:#8B5A2B; font-weight:600;'>The Nurturer (Venus)</span>Symbolizes responsibility, love, and nurturing. You are naturally caring, protective, and family-oriented.",
    7: "<span class='d-block mb-1' style='color:#8B5A2B; font-weight:600;'>The Seeker (Ketu)</span>Signifies analysis, spirituality, and inner wisdom. You are a seeker of deeper truths.",
    8: "<span class='d-block mb-1' style='color:#8B5A2B; font-weight:600;'>The Powerhouse (Saturn)</span>Stands for ambition, material success, and authority. You are highly career and wealth-driven.",
    9: "<span class='d-block mb-1' style='color:#8B5A2B; font-weight:600;'>The Humanitarian (Mars)</span>Represents compassion, humanitarianism, and completion. You have a broad, universal perspective."
};

// Lucky Data based on Mulyaank
const luckyData = {
    1: { color: "Sun Yellow, Gold, Orange", day: "Sunday" },
    2: { color: "White, Silver, Light Green", day: "Monday" },
    3: { color: "Yellow, Purple", day: "Thursday" },
    4: { color: "Light Blue, Grey", day: "Sunday, Monday" },
    5: { color: "Green, Light Shades", day: "Wednesday" },
    6: { color: "White, Light Blue, Pink", day: "Friday" },
    7: { color: "Light Green, White", day: "Monday, Wednesday" },
    8: { color: "Dark Blue, Black", day: "Saturday" },
    9: { color: "Red, Rose, Crimson", day: "Tuesday" }
};

// Friendly Numbers Matrix (Key = Bhagyank, Array = Friendly Name Numbers)
const compatibilityMatrix = {
    1: [1, 2, 3, 5, 9],
    2: [1, 2, 3, 5],
    3: [1, 2, 3, 5, 7, 9],
    4: [1, 5, 6, 7],
    5: [1, 2, 3, 4, 5, 6, 7, 8, 9], // 5 is friendly with all
    6: [1, 5, 6, 7],
    7: [1, 3, 4, 5, 6, 7],
    8: [3, 5, 6],
    9: [1, 2, 3, 5, 9]
};

function reduceToSingleDigit(num) {
    if (!num) return 0;
    while (num > 9) {
        num = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return num;
}

const calcForm = document.getElementById('numerologyCalculator');
let currentWaMessage = ""; // To store the whatsapp message

if(calcForm) {
    calcForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('calcName').value.trim().toUpperCase();
        const dobString = document.getElementById('calcDob').value;
        
        if(!name || !dobString) return;
        
        // Show main div and spinner, hide results initially
        const resultsDiv = document.getElementById('calculatorResults');
        const calcSpinner = document.getElementById('calcSpinner');
        const resultsContainer = document.getElementById('resultsContainer');
        const waBtnContainer = document.getElementById('waBtnContainer');
        
        resultsDiv.classList.remove('d-none');
        resultsDiv.classList.add('visible');
        
        calcSpinner.classList.remove('d-none');
        resultsContainer.classList.add('d-none');
        waBtnContainer.classList.add('d-none');
        
        // Calculate Name Number (Chaldean)
        let nameSum = 0;
        for(let char of name) {
            if(chaldeanMap[char]) {
                nameSum += chaldeanMap[char];
            }
        }
        const nameNumber = reduceToSingleDigit(nameSum);
        
        // Calculate Mulyaank (Psychic Number) & Bhagyank (Destiny Number)
        const [year, month, day] = dobString.split('-');
        const mulyaank = reduceToSingleDigit(parseInt(day));
        
        const fullDobStr = year + month + day;
        let bhagyankSum = 0;
        for(let digit of fullDobStr) {
            bhagyankSum += parseInt(digit);
        }
        const bhagyank = reduceToSingleDigit(bhagyankSum);
        
        // Compatibility Logic (Bhagyank vs Name Number)
        const isCompatible = compatibilityMatrix[bhagyank].includes(nameNumber);
        const badgeClass = isCompatible ? "badge-compatible" : "badge-optimize";
        const badgeText = isCompatible ? "Highly Compatible" : "Needs Optimization";
        
        // Lucky Data Logic
        const luckyColor = luckyData[mulyaank].color;
        const luckyDay = luckyData[mulyaank].day;

        // Delay rendering by 1.5s to show the spinner
        setTimeout(() => {
            // Add gold shadow to the card to make it pop
            document.querySelector('.calculator-card').classList.add('gold-shadow');
            
            calcSpinner.classList.add('d-none');
            resultsContainer.classList.remove('d-none');
            waBtnContainer.classList.remove('d-none');
            
            resultsContainer.innerHTML = `
                <div class="col-md-4 mb-3">
                    <div class="result-box">
                        <h5 class="fw-bold mb-0">Mulyaank</h5>
                        <span class="small text-muted">(Psychic/Soul Number)</span>
                        <div class="result-number">${mulyaank}</div>
                        <div class="result-meaning">${numberMeanings[mulyaank] || ''}</div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="result-box">
                        <h5 class="fw-bold mb-0">Bhagyank</h5>
                        <span class="small text-muted">(Life Path / Destiny Number)</span>
                        <div class="result-number">${bhagyank}</div>
                        <div class="result-meaning">${numberMeanings[bhagyank] || ''}</div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="result-box">
                        <h5 class="fw-bold mb-0">Name Number</h5>
                        <span class="small text-muted">(Expression Number)</span>
                        <div class="result-number">${nameNumber}</div>
                        <div class="result-meaning">${numberMeanings[nameNumber] || ''}</div>
                        <div class="compatibility-badge ${badgeClass}"><i class="fas fa-info-circle me-1"></i>Compatibility: ${badgeText}</div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="lucky-info-box d-flex justify-content-around flex-wrap">
                        <div><i class="fas fa-palette me-2" style="color: #d4af37;"></i>Lucky Color: <span class="lucky-item">${luckyColor}</span></div>
                        <div><i class="fas fa-calendar-day me-2" style="color: #d4af37;"></i>Lucky Day: <span class="lucky-item">${luckyDay}</span></div>
                    </div>
                </div>
            `;
            
            // Common WhatsApp Call to Action
            const actionText = "I would like to get a deeper analysis of my numbers and book a detailed consultation. Please guide me with the process.";

            // Update WhatsApp global variable
            currentWaMessage = `Hello Dr. Jyoti! 👋\n\nI just checked my lucky numbers on your website.\n\n*Name:* ${document.getElementById('calcName').value.trim()}\n*DOB:* ${day}-${month}-${year}\n\n*My Results:*\nPsychic (Mulyaank): ${mulyaank}\nDestiny (Bhagyank): ${bhagyank}\nName Number: ${nameNumber}\n\n${actionText}`;
        }, 1500);
    });
    
    // WhatsApp Button Click Handler
    document.getElementById('waReportBtn').addEventListener('click', function(e) {
        e.preventDefault();
        if(currentWaMessage) {
            window.open(`https://wa.me/918860133445?text=${encodeURIComponent(currentWaMessage)}`, '_blank');
        }
    });
}

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Add loading lazy for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
    });
});

// Performance optimization
if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}