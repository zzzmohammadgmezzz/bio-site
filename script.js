// DOM elements
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const currentYear = document.getElementById('currentYear');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

// Language content
const translations = {
    'en': {
        'nav_home': 'Home',
        'nav_about': 'About',
        'nav_skills': 'Skills',
        'nav_links': 'Links',
        'nav_contact': 'Contact',
        'profile_name': 'Mammad',
        'profile_tagline': 'Software Engineer • Network Specialist • Content Creator',
        'profile_bio_short': '🎮 Gamer • 🎥 Content Creator • 🎨 Designer • 🤖 AI Enthusiast',
        'profile_level': 'Software Engineer',
        'stat_degree': 'Software Engineering',
        'stat_experience': 'Years Experience',
        'stat_projects': 'Projects',
        'about_title': 'About Me',
        'about_subtitle_en': '🇺🇸 English Bio',
        'about_intro_en': 'Hey! They call me MAMMAD 😄',
        'about_degree_en': "I hold a Bachelor's degree in Software Engineering and I am currently pursuing a Master's in Network Engineering. My passion lies at the intersection of technology and creativity.",
        'about_skills_intro_en': 'As a multi-faceted professional, I excel in:',
        'skill_development_en': '• Full-stack Web Development',
        'skill_networking_en': '• Network Architecture & Security',
        'skill_design_en': '• UI/UX & Graphic Design',
        'skill_gaming_en': '• Game Development & Streaming',
        'about_location_en': '📍 Based in Tehran, Iran',
        'about_goals_en': 'My goal is to bridge the gap between complex technology and user-friendly experiences while building innovative solutions for the future.',
        'about_subtitle_fa': '🇮🇷 بیوگرافی فارسی',
        'about_intro_fa': 'سلام! من محمدم 😄',
        'about_degree_fa': 'دارای مدرک کارشناسی مهندسی نرم‌افزار هستم و در حال حاضر در مقطع کارشناسی ارشد مهندسی شبکه تحصیل می‌کنم. علاقه‌مندی من در تقاطع فناوری و خلاقیت قرار دارد.',
        'about_skills_intro_fa': 'به عنوان یک حرفه‌ای چندوجهی، در زمینه‌های زیر تخصص دارم:',
        'skill_development_fa': '• توسعه وب فول‌استک',
        'skill_networking_fa': '• معماری شبکه و امنیت',
        'skill_design_fa': '• طراحی UI/UX و گرافیک',
        'skill_gaming_fa': '• توسعه بازی و استریمینگ',
        'about_location_fa': '📍 ساکن تهران، ایران',
        'about_goals_fa': 'هدف من پل زدن بین فناوری پیچیده و تجربیات کاربرپسند است در حالی که راه‌حل‌های نوآورانه‌ای برای آینده می‌سازم.',
        'skills_title': 'Technical Skills',
        'skills_subtitle': 'Expertise across multiple domains',
        'skill_frontend': 'Frontend Development',
        'skill_frontend_desc': 'HTML5, CSS3, JavaScript, React, Vue.js',
        'skill_backend': 'Backend Development',
        'skill_backend_desc': 'Node.js, Python, PHP, Databases, APIs',
        'skill_networking': 'Network Engineering',
        'skill_networking_desc': 'Cisco, Security, Protocols, Infrastructure',
        'skill_design': 'Creative Design',
        'skill_design_desc': 'Adobe Suite, Figma, UI/UX, Motion Graphics',
        'skill_gaming': 'Gaming & Content',
        'skill_gaming_desc': 'Streaming, Game Dev, Community Building',
        'location_title': '📍 Location',
        'location_tehran': 'Tehran, Iran',
        'location_timezone': 'Timezone: IRST (UTC+3:30)',
        'location_availability': 'Available for remote work & collaboration',
        'setup_pc': 'Development Setup',
        'setup_pc_specs': 'Ryzen 7 • RTX 3060 • 32GB RAM • Dual Monitor',
        'setup_peripherals': 'Creative Tools',
        'setup_peripherals_specs': 'Wacom Tablet • Blue Yeti Mic • Elgato Stream Deck',
        'setup_achievements': 'Certifications',
        'setup_achievements_specs': 'CCNA • AWS Certified • Adobe Certified',
        'links_title': 'My Links',
        'links_subtitle': 'Connect with me across platforms',
        'link_twitch': 'Twitch',
        'link_twitch_desc': 'Live gaming streams & coding sessions',
        'link_youtube': 'YouTube',
        'link_youtube_desc': 'Tutorials, tech reviews & gaming content',
        'link_discord': 'Discord',
        'link_discord_desc': 'Join our tech & gaming community',
        'link_instagram': 'Instagram',
        'link_instagram_desc': 'Daily updates & behind the scenes',
        'link_telegram': 'Telegram',
        'link_telegram_desc': 'Tech news & personal updates channel',
        'link_github': 'GitHub',
        'link_github_desc': 'Open source projects & code repositories',
        'link_linkedin': 'LinkedIn',
        'link_linkedin_desc': 'Professional network & career updates',
        'link_whatsapp': 'WhatsApp',
        'link_whatsapp_desc': 'Quick contact for business inquiries',
        'link_steam': 'Steam',
        'link_steam_desc': 'Gaming profile & friend connections',
        'contact_title': 'Contact',
        'contact_subtitle': 'Get in touch for collaborations & inquiries',
        'contact_email': 'Email',
        'contact_phone': 'Phone',
        'contact_business': 'Business Inquiries',
        'contact_business_desc': 'For projects, partnerships & consulting',
        'footer_tagline': 'Building the future with code & creativity',
        'footer_copyright': '© Mammad',
        'footer_rights': 'All rights reserved.'
    },
    'fa': {
        'nav_home': 'خانه',
        'nav_about': 'درباره من',
        'nav_skills': 'مهارت‌ها',
        'nav_links': 'لینک‌ها',
        'nav_contact': 'تماس',
        'profile_name': 'ممد',
        'profile_tagline': 'مهندس نرم‌افزار • متخصص شبکه • سازنده محتوا',
        'profile_bio_short': '🎮 گیمر • 🎥 سازنده محتوا • 🎨 طراح • 🤖 علاقه‌مند به هوش مصنوعی',
        'profile_level': 'مهندس نرم‌افزار',
        'stat_degree': 'مهندسی نرم‌افزار',
        'stat_experience': 'سال تجربه',
        'stat_projects': 'پروژه',
        'about_title': 'درباره من',
        'about_subtitle_en': '🇺🇸 English Bio',
        'about_intro_en': 'Hey! They call me MAMMAD 😄',
        'about_degree_en': "I hold a Bachelor's degree in Software Engineering and I am currently pursuing a Master's in Network Engineering. My passion lies at the intersection of technology and creativity.",
        'about_skills_intro_en': 'As a multi-faceted professional, I excel in:',
        'skill_development_en': '• Full-stack Web Development',
        'skill_networking_en': '• Network Architecture & Security',
        'skill_design_en': '• UI/UX & Graphic Design',
        'skill_gaming_en': '• Game Development & Streaming',
        'about_location_en': '📍 Based in Tehran, Iran',
        'about_goals_en': 'My goal is to bridge the gap between complex technology and user-friendly experiences while building innovative solutions for the future.',
        'about_subtitle_fa': '🇮🇷 بیوگرافی فارسی',
        'about_intro_fa': 'سلام! من محمدم 😄',
        'about_degree_fa': 'دارای مدرک کارشناسی مهندسی نرم‌افزار هستم و در حال حاضر در مقطع کارشناسی ارشد مهندسی شبکه تحصیل می‌کنم. علاقه‌مندی من در تقاطع فناوری و خلاقیت قرار دارد.',
        'about_skills_intro_fa': 'به عنوان یک حرفه‌ای چندوجهی، در زمینه‌های زیر تخصص دارم:',
        'skill_development_fa': '• توسعه وب فول‌استک',
        'skill_networking_fa': '• معماری شبکه و امنیت',
        'skill_design_fa': '• طراحی UI/UX و گرافیک',
        'skill_gaming_fa': '• توسعه بازی و استریمینگ',
        'about_location_fa': '📍 ساکن تهران، ایران',
        'about_goals_fa': 'هدف من پل زدن بین فناوری پیچیده و تجربیات کاربرپسند است در حالی که راه‌حل‌های نوآورانه‌ای برای آینده می‌سازم.',
        'skills_title': 'مهارت‌های فنی',
        'skills_subtitle': 'تخصص در چندین حوزه مختلف',
        'skill_frontend': 'توسعه فرانت‌اند',
        'skill_frontend_desc': 'HTML5, CSS3, JavaScript, React, Vue.js',
        'skill_backend': 'توسعه بک‌اند',
        'skill_backend_desc': 'Node.js, Python, PHP, پایگاه داده، API',
        'skill_networking': 'مهندسی شبکه',
        'skill_networking_desc': 'سیسکو، امنیت، پروتکل‌ها، زیرساخت',
        'skill_design': 'طراحی خلاقانه',
        'skill_design_desc': 'Adobe Suite, Figma, UI/UX, گرافیک متحرک',
        'skill_gaming': 'گیمینگ و محتوا',
        'skill_gaming_desc': 'استریمینگ، توسعه بازی، ساخت جامعه',
        'location_title': '📍 موقعیت',
        'location_tehran': 'تهران، ایران',
        'location_timezone': 'منطقه زمانی: IRST (UTC+3:30)',
        'location_availability': 'آماده همکاری دورکاری و پروژه‌ها',
        'setup_pc': 'سیستم توسعه',
        'setup_pc_specs': 'Ryzen 7 • RTX 3060 • 32GB RAM • دو مانیتور',
        'setup_peripherals': 'ابزارهای خلاقانه',
        'setup_peripherals_specs': 'تبلت واکوم • میکروفون Blue Yeti • Elgato Stream Deck',
        'setup_achievements': 'مدارک تخصصی',
        'setup_achievements_specs': 'CCNA • AWS Certified • Adobe Certified',
        'links_title': 'لینک‌های من',
        'links_subtitle': 'در پلتفرم‌های مختلف با من در ارتباط باشید',
        'link_twitch': 'توییچ',
        'link_twitch_desc': 'استریم بازی و جلسات برنامه‌نویسی',
        'link_youtube': 'یوتیوب',
        'link_youtube_desc': 'آموزش‌ها، بررسی تکنولوژی و محتوای گیمینگ',
        'link_discord': 'دیسکورد',
        'link_discord_desc': 'به جامعه تکنولوژی و گیمینگ ما بپیوندید',
        'link_instagram': 'اینستاگرام',
        'link_instagram_desc': 'به‌روزرسانی روزانه و پشت صحنه',
        'link_telegram': 'تلگرام',
        'link_telegram_desc': 'کانال اخبار تکنولوژی و به‌روزرسانی‌های شخصی',
        'link_github': 'گیت‌هاب',
        'link_github_desc': 'پروژه‌های متن‌باز و مخازن کد',
        'link_linkedin': 'لینکدین',
        'link_linkedin_desc': 'شبکه حرفه‌ای و به‌روزرسانی شغلی',
        'link_whatsapp': 'واتساپ',
        'link_whatsapp_desc': 'تماس سریع برای درخواست‌های تجاری',
        'link_steam': 'استیم',
        'link_steam_desc': 'پروفایل گیمینگ و ارتباط با دوستان',
        'contact_title': 'تماس',
        'contact_subtitle': 'برای همکاری و استعلام با من در تماس باشید',
        'contact_email': 'ایمیل',
        'contact_phone': 'تلفن',
        'contact_business': 'درخواست‌های تجاری',
        'contact_business_desc': 'برای پروژه‌ها، همکاری‌ها و مشاوره',
        'footer_tagline': 'ساخت آینده با کد و خلاقیت',
        'footer_copyright': '© ممد',
        'footer_rights': 'تمام حقوق محفوظ است.'
    }
};

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    currentYear.textContent = new Date().getFullYear();
    
    // Initialize theme
    initTheme();
    
    // Initialize language
    initLanguage();
    
    // Initialize particles
    initParticles();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize section reveal
    initSectionReveal();
    
    // Initialize skills animation
    initSkillsAnimation();
    
    // Set up event listeners
    setupEventListeners();
});

// Theme functionality
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
}

function setTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
    }
}

function toggleTheme() {
    const isLightMode = document.body.classList.contains('light-mode');
    setTheme(isLightMode ? 'dark' : 'light');
}

// Language functionality
function initLanguage() {
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
}

function setLanguage(lang) {
    // Update HTML direction
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Update language toggle button
    const langText = document.querySelector('.lang-text');
    langText.textContent = lang === 'fa' ? 'FA' : 'EN';
    
    // Show/hide Persian/English about text
    const aboutEn = document.querySelector('.about-text[lang="en"]');
    const aboutFa = document.querySelector('.about-text[lang="fa"]');
    
    if (lang === 'fa') {
        if (aboutEn) aboutEn.style.display = 'none';
        if (aboutFa) aboutFa.style.display = 'block';
    } else {
        if (aboutEn) aboutEn.style.display = 'block';
        if (aboutFa) aboutFa.style.display = 'none';
    }
    
    // Update all translatable elements
    const translatableElements = document.querySelectorAll('[data-i18n]');
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.value = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Save preference
    localStorage.setItem('language', lang);
}

function toggleLanguage() {
    const currentLang = localStorage.getItem('language') || 'en';
    setLanguage(currentLang === 'en' ? 'fa' : 'en');
}

// Particles background
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#00e5ff"
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 0.3,
                    random: true
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#00e5ff",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Smooth scrolling
function initSmoothScrolling() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Update active nav link
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                link.classList.add('active');
                
                // Close mobile menu if open
                if (hamburger.classList.contains('active')) {
                    toggleMobileMenu();
                }
                
                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Section reveal animation
function initSectionReveal() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate skill bars when skills section is visible
                if (entry.target.id === 'skills') {
                    animateSkillBars();
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Skills animation
function initSkillsAnimation() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    skillBars.forEach(bar => {
        const fill = bar.querySelector('.skill-fill');
        const percent = bar.querySelector('.skill-percent').textContent;
        
        // Set initial width to 0
        fill.style.width = '0%';
        
        // Store target width
        fill.dataset.targetWidth = percent;
    });
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    skillBars.forEach((bar, index) => {
        const fill = bar.querySelector('.skill-fill');
        const targetWidth = fill.dataset.targetWidth || '100%';
        
        setTimeout(() => {
            fill.style.width = targetWidth;
            bar.classList.add('animated');
        }, index * 200);
    });
}

// Mobile menu
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
}

// Setup event listeners
function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Language toggle
    langToggle.addEventListener('click', toggleLanguage);
    
    // Hamburger menu
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });
    
    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + 150;
        
        // Get all sections
        const sections = document.querySelectorAll('section');
        
        // Find current section
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = '#' + section.id;
            }
        });
        
        // Update active link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentSectionId) {
                link.classList.add('active');
            }
        });
    });
    
    // Keyboard navigation for accessibility
    document.addEventListener('keydown', (e) => {
        // Close mobile menu with Escape key
        if (e.key === 'Escape' && hamburger.classList.contains('active')) {
            toggleMobileMenu();
        }
        
        // Tab key navigation trap in mobile menu
        if (hamburger.classList.contains('active') && e.key === 'Tab') {
            const focusableElements = mobileNav.querySelectorAll('a, button');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.shiftKey && document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
            }
        }
    });
    
    // Animate skill bars on scroll
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                }
            });
        }, { threshold: 0.5 });
        
        skillsObserver.observe(skillsSection);
    }
}