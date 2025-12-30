// DOM elements
const themeToggle = document.getElementById('themeToggle');
const mobileThemeToggle = document.getElementById('mobileThemeToggle');
const langToggle = document.getElementById('langToggle');
const mobileLangToggle = document.getElementById('mobileLangToggle');
const hamburger = document.getElementById('hamburger');
const mobileCloseBtn = document.getElementById('mobileCloseBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileNavOverlay = document.getElementById('mobileNavOverlay');
const currentYear = document.getElementById('currentYear');
const mobileYear = document.getElementById('mobileYear');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
const mainHeader = document.getElementById('main-header');

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
        'about_degree_en': "I hold a Bachelor's degree in Software Engineering and I work mainly in the fields of Networking and Databases",
        'about_freelance_en': 'I also accept freelance projects, especially when the challenge is interesting and meaningful',
        'about_youtube_en': 'When time and motivation allow, I create content on YouTube',
        'about_content_en': 'Mostly around tech, real experiences, and practical stuff — no generic talk.',
        'about_gaming_en': "I'm a big fan of games, especially offline, shooter, and story-driven titles",
        'about_gaming_reason_en': 'Due to limited internet access, offline games became my go-to choice',
        'about_cs2_en': '(Though online games are great too — I used to play CS2 for a while 😅)',
        'about_movies_en': 'I watch movies and series whenever I get the chance',
        'about_spoilers_en': 'And one thing you should know about me: I absolutely hate spoilers',
        'about_programming_en': 'Pure coding isn\'t exactly my passion',
        'about_design_en': "I'm more into design, visuals, and creative workflows",
        'about_adobe_en': "I'm highly skilled with Adobe tools: Photoshop, Illustrator, Adobe XD, Premiere Pro, After Effects, Audition",
        'about_subtitle_fa': '🇮🇷 Persian Bio',
        'about_intro_fa': 'سلام! من ممد هستم',
        'about_degree_fa': 'لیسانس مهندسی نرم‌افزار دارم و به‌صورت حرفه‌ای توی حوزه‌های شبکه و دیتابیس فعالیت می‌کنم',
        'about_freelance_fa': 'پروژه‌های فریلنسری هم می‌پذیرم و اگر همکاری جذاب باشه، خوشحال می‌شم روش وقت بذارم',
        'about_youtube_fa': 'اگه حوصله و فرصت داشته باشم، توی یوتیوب هم محتوا تولید می‌کنم',
        'about_content_fa': 'از تکنولوژی، تجربه‌های واقعی، و چیزایی که به درد بخوره، نه حرفای کلیشه‌ای.',
        'about_gaming_fa': 'عاشق گیمم؛ مخصوصاً بازی‌های آفلاین، شوتر و داستانی',
        'about_gaming_reason_fa': 'چون اینترنت درست‌وحسابی همیشه در دسترس نیست، بیشتر رفتم سمت آفلاین‌ها',
        'about_cs2_fa': '(وگرنه آنلاین‌ها هم حال‌وهوای خودشونو دارن 😄 – یه مدت هم CS2 پلی می‌دادم)',
        'about_movies_fa': 'فیلم و سریال هم هر وقت فرصت کنم می‌بینم',
        'about_spoilers_fa': 'و یه قانون مهم دارم: اسپویل = فاجعه',
        'about_programming_fa': 'راستش برنامه‌نویسی محض، عشقِ اولم نیست',
        'about_design_fa': 'بیشتر به طراحی، دیزاین و ساخت تجربه بصری علاقه دارم',
        'about_adobe_fa': 'به نرم‌افزارهای Adobe مسلطم: Photoshop، Illustrator، Adobe XD، Premiere Pro، After Effects، Audition و …',
        'skills_title': 'Technical Skills',
        'skills_subtitle_fa': 'از نظر فنی:',
        'skill_languages_fa': 'با زبان‌های خانواده C، JavaScript و Python کار کردم (پایتون رو مسلطم 🐍)',
        'skill_web_fa': 'طراحی وب با HTML / CSS / JS کلاسیک و WordPress رو هم خوب می‌شناسم',
        'skill_ai_fa': 'توی دنیای هوش مصنوعی هم فعالم؛ پرومت‌نویسی قوی، کار با چت‌بات‌ها و استفاده کاربردی از AI توی پروژه‌ها جزو مهارت‌هامه.',
        'skills_subtitle_en': 'On the technical side:',
        'skill_languages_en': 'Experience with C-family languages, JavaScript, and strong command of Python 🐍',
        'skill_web_en': 'Web development using HTML / CSS / JS and solid experience with WordPress',
        'skill_ai_en': 'I actively work with AI tools — including prompt engineering, chatbot workflows, and practical AI integration.',
        'location_title_fa': 'موقعیت جغرافیایی',
        'location_born_fa': 'متولد دزفول (خوزستان)',
        'location_living_fa': 'ساکن تهران',
        'location_title_en': 'Location',
        'location_born_en': 'Born in Dezful, Khuzestan',
        'location_living_en': 'Currently based in Tehran',
        'skill_python': 'Python',
        'skill_web_dev': 'Web Development',
        'skill_adobe': 'Adobe Creative Suite',
        'skill_ai_tools': 'AI Tools',
        'skill_networking': 'Networking',
        'links_title': 'Connect With Me',
        'links_subtitle': 'در انتها، می‌تونی از طریق لینک‌های زیر باهام در ارتباط باشی 👇',
        'link_github': 'GitHub',
        'link_github_desc': 'Code, Projects & Contributions',
        'link_instagram': 'Instagram',
        'link_instagram_desc': 'Daily Updates & Behind Scenes',
        'link_telegram': 'Telegram',
        'link_telegram_desc': 'Channel & Direct Messages',
        'link_youtube': 'YouTube',
        'link_youtube_desc': 'Tech Content & Tutorials',
        'link_whatsapp': 'WhatsApp',
        'link_whatsapp_desc': 'Quick Messages & Chats',
        'link_steam': 'Steam',
        'link_steam_desc': 'Gaming Profile & Library',
        'link_discord': 'Discord',
        'link_discord_desc': 'Community & Gaming Chat',
        'link_linkedin': 'LinkedIn',
        'link_linkedin_desc': 'Professional Profile',
        'contact_title': 'Contact & Freelance',
        'contact_subtitle': 'Available for interesting projects & collaborations',
        'contact_email': 'Email',
        'contact_freelance': 'Freelance Projects',
        'contact_freelance_desc': 'Web, Design, Networking & AI Solutions',
        'contact_content': 'Content Creation',
        'contact_content_desc': 'YouTube videos, tutorials & tech content',
        'footer_tagline': 'Code • Design • Create • Game',
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
        'about_degree_en': "I hold a Bachelor's degree in Software Engineering and I work mainly in the fields of Networking and Databases",
        'about_freelance_en': 'I also accept freelance projects, especially when the challenge is interesting and meaningful',
        'about_youtube_en': 'When time and motivation allow, I create content on YouTube',
        'about_content_en': 'Mostly around tech, real experiences, and practical stuff — no generic talk.',
        'about_gaming_en': "I'm a big fan of games, especially offline, shooter, and story-driven titles",
        'about_gaming_reason_en': 'Due to limited internet access, offline games became my go-to choice',
        'about_cs2_en': '(Though online games are great too — I used to play CS2 for a while 😅)',
        'about_movies_en': 'I watch movies and series whenever I get the chance',
        'about_spoilers_en': 'And one thing you should know about me: I absolutely hate spoilers',
        'about_programming_en': 'Pure coding isn\'t exactly my passion',
        'about_design_en': "I'm more into design, visuals, and creative workflows",
        'about_adobe_en': "I'm highly skilled with Adobe tools: Photoshop, Illustrator, Adobe XD, Premiere Pro, After Effects, Audition",
        'about_subtitle_fa': '🇮🇷 معرفی فارسی',
        'about_intro_fa': 'سلام! من ممد هستم',
        'about_degree_fa': 'لیسانس مهندسی نرم‌افزار دارم و به‌صورت حرفه‌ای توی حوزه‌های شبکه و دیتابیس فعالیت می‌کنم',
        'about_freelance_fa': 'پروژه‌های فریلنسری هم می‌پذیرم و اگر همکاری جذاب باشه، خوشحال می‌شم روش وقت بذارم',
        'about_youtube_fa': 'اگه حوصله و فرصت داشته باشم، توی یوتیوب هم محتوا تولید می‌کنم',
        'about_content_fa': 'از تکنولوژی، تجربه‌های واقعی، و چیزایی که به درد بخوره، نه حرفای کلیشه‌ای.',
        'about_gaming_fa': 'عاشق گیمم؛ مخصوصاً بازی‌های آفلاین، شوتر و داستانی',
        'about_gaming_reason_fa': 'چون اینترنت درست‌وحسابی همیشه در دسترس نیست، بیشتر رفتم سمت آفلاین‌ها',
        'about_cs2_fa': '(وگرنه آنلاین‌ها هم حال‌وهوای خودشونو دارن 😄 – یه مدت هم CS2 پلی می‌دادم)',
        'about_movies_fa': 'فیلم و سریال هم هر وقت فرصت کنم می‌بینم',
        'about_spoilers_fa': 'و یه قانون مهم دارم: اسپویل = فاجعه',
        'about_programming_fa': 'راستش برنامه‌نویسی محض، عشقِ اولم نیست',
        'about_design_fa': 'بیشتر به طراحی، دیزاین و ساخت تجربه بصری علاقه دارم',
        'about_adobe_fa': 'به نرم‌افزارهای Adobe مسلطم: Photoshop، Illustrator، Adobe XD، Premiere Pro، After Effects، Audition و …',
        'skills_title': 'مهارت‌های فنی',
        'skills_subtitle_fa': 'از نظر فنی:',
        'skill_languages_fa': 'با زبان‌های خانواده C، JavaScript و Python کار کردم (پایتون رو مسلطم 🐍)',
        'skill_web_fa': 'طراحی وب با HTML / CSS / JS کلاسیک و WordPress رو هم خوب می‌شناسم',
        'skill_ai_fa': 'توی دنیای هوش مصنوعی هم فعالم؛ پرومت‌نویسی قوی، کار با چت‌بات‌ها و استفاده کاربردی از AI توی پروژه‌ها جزو مهارت‌هامه.',
        'skills_subtitle_en': 'On the technical side:',
        'skill_languages_en': 'Experience with C-family languages, JavaScript, and strong command of Python 🐍',
        'skill_web_en': 'Web development using HTML / CSS / JS and solid experience with WordPress',
        'skill_ai_en': 'I actively work with AI tools — including prompt engineering, chatbot workflows, and practical AI integration.',
        'location_title_fa': 'موقعیت جغرافیایی',
        'location_born_fa': 'متولد دزفول (خوزستان)',
        'location_living_fa': 'ساکن تهران',
        'location_title_en': 'Location',
        'location_born_en': 'Born in Dezful, Khuzestan',
        'location_living_en': 'Currently based in Tehran',
        'skill_python': 'Python',
        'skill_web_dev': 'توسعه وب',
        'skill_adobe': 'Adobe Creative Suite',
        'skill_ai_tools': 'ابزارهای هوش مصنوعی',
        'skill_networking': 'شبکه',
        'links_title': 'ارتباط با من',
        'links_subtitle': 'در انتها، می‌تونی از طریق لینک‌های زیر باهام در ارتباط باشی 👇',
        'link_github': 'گیت‌هاب',
        'link_github_desc': 'کد، پروژه‌ها و مشارکت‌ها',
        'link_instagram': 'اینستاگرام',
        'link_instagram_desc': 'به‌روزرسانی روزانه و پشت صحنه',
        'link_telegram': 'تلگرام',
        'link_telegram_desc': 'کانال و پیام مستقیم',
        'link_youtube': 'یوتیوب',
        'link_youtube_desc': 'محتواهای فنی و آموزش‌ها',
        'link_whatsapp': 'واتساپ',
        'link_whatsapp_desc': 'پیام‌های سریع و چت',
        'link_steam': 'استیم',
        'link_steam_desc': 'پروفایل گیمینگ و کتابخانه',
        'link_discord': 'دیسکورد',
        'link_discord_desc': 'جامعه و چت گیمینگ',
        'link_linkedin': 'لینکدین',
        'link_linkedin_desc': 'پروفایل حرفه‌ای',
        'contact_title': 'تماس و فریلنس',
        'contact_subtitle': 'آماده برای پروژه‌های جالب و همکاری‌ها',
        'contact_email': 'ایمیل',
        'contact_freelance': 'پروژه‌های فریلنس',
        'contact_freelance_desc': 'وب، طراحی، شبکه و راه‌حل‌های هوش مصنوعی',
        'contact_content': 'تولید محتوا',
        'contact_content_desc': 'ویدیوهای یوتیوب، آموزش‌ها و محتوای فنی',
        'footer_tagline': 'کد • طراحی • خلق • بازی',
        'footer_copyright': '© ممد',
        'footer_rights': 'تمامی حقوق محفوظ است.'
    }
};

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    currentYear.textContent = new Date().getFullYear();
    if (mobileYear) {
        mobileYear.textContent = new Date().getFullYear();
    }
    
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
    
    // Initialize header scroll behavior
    initHeaderScroll();
    
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
    
    // Update mobile theme toggle if exists
    updateMobileThemeToggle(theme);
}

function toggleTheme() {
    const isLightMode = document.body.classList.contains('light-mode');
    setTheme(isLightMode ? 'dark' : 'light');
}

function updateMobileThemeToggle(theme) {
    if (mobileThemeToggle) {
        const moonIcon = mobileThemeToggle.querySelector('.fa-moon');
        const sunIcon = mobileThemeToggle.querySelector('.fa-sun');
        
        if (theme === 'light') {
            if (moonIcon) moonIcon.style.opacity = '0';
            if (sunIcon) sunIcon.style.opacity = '1';
        } else {
            if (moonIcon) moonIcon.style.opacity = '1';
            if (sunIcon) sunIcon.style.opacity = '0';
        }
    }
}

// Language functionality
function initLanguage() {
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
}

function setLanguage(lang) {
    // Update HTML direction and lang attribute
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Update language toggle buttons
    const langTexts = document.querySelectorAll('.lang-text');
    langTexts.forEach(langText => {
        if (langText) {
            langText.textContent = lang === 'fa' ? 'FA' : 'EN';
        }
    });
    
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
    
    // Show/hide Persian/English skills text
    const skillsEn = document.querySelector('.skills-text[lang="en"]');
    const skillsFa = document.querySelector('.skills-text[lang="fa"]');
    
    if (lang === 'fa') {
        if (skillsEn) skillsEn.style.display = 'none';
        if (skillsFa) skillsFa.style.display = 'block';
    } else {
        if (skillsEn) skillsEn.style.display = 'block';
        if (skillsFa) skillsFa.style.display = 'none';
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
                    value: 60,
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
                    closeMobileMenu();
                }
                
                // Calculate scroll position considering fixed header
                const headerHeight = mainHeader.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                // Scroll to target
                window.scrollTo({
                    top: targetPosition,
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
        
        // Store target width from data attribute
        const targetWidth = fill.getAttribute('data-width') || '0';
        fill.dataset.targetWidth = targetWidth + '%';
    });
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    skillBars.forEach((bar, index) => {
        const fill = bar.querySelector('.skill-fill');
        const targetWidth = fill.dataset.targetWidth || '0%';
        
        setTimeout(() => {
            fill.style.width = targetWidth;
            bar.classList.add('animated');
        }, index * 200);
    });
}

// Header scroll behavior
function initHeaderScroll() {
    let lastScrollTop = 0;
    const header = mainHeader;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class when not at top
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide header on scroll down, show on scroll up
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.classList.add('hidden');
        } else {
            // Scrolling up
            header.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop;
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    });
}

// Update active nav link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 150;
    
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
}

// Mobile menu functions
function openMobileMenu() {
    hamburger.classList.add('active');
    mobileNav.classList.add('active');
    mobileNavOverlay.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    hamburger.classList.remove('active');
    mobileNav.classList.remove('active');
    mobileNavOverlay.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

function toggleMobileMenu() {
    if (hamburger.classList.contains('active')) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

// Setup event listeners
function setupEventListeners() {
    // Theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', toggleTheme);
    }
    
    // Language toggle
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    if (mobileLangToggle) {
        mobileLangToggle.addEventListener('click', toggleLanguage);
    }
    
    // Hamburger menu
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // Mobile close button
    if (mobileCloseBtn) {
        mobileCloseBtn.addEventListener('click', closeMobileMenu);
    }
    
    // Close mobile menu when clicking on overlay
    if (mobileNavOverlay) {
        mobileNavOverlay.addEventListener('click', closeMobileMenu);
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Keyboard navigation for accessibility
    document.addEventListener('keydown', (e) => {
        // Close mobile menu with Escape key
        if (e.key === 'Escape' && hamburger.classList.contains('active')) {
            closeMobileMenu();
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
    
    // Fix layout on window resize
    window.addEventListener('resize', () => {
        // Close mobile menu on desktop if open
        if (window.innerWidth > 768 && hamburger.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // Prevent body scrolling when modal is open
    document.addEventListener('touchmove', (e) => {
        if (hamburger.classList.contains('active')) {
            e.preventDefault();
        }
    }, { passive: false });
}