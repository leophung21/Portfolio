// Typing Animation
function initTypingAnimation() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;
    
    const text = "Hi, I'm Leo Phung";
    let index = 0;
    
    function type() {
        if (index < text.length) {
            typingElement.textContent = text.substring(0, index + 1);
            index++;
            setTimeout(type, 100); // Adjust speed here (lower = faster)
        } else {
            // Add blinking cursor after typing completes
            typingElement.classList.add('typing-complete');
            // Start terminal animation after title finishes
            setTimeout(initTerminalAnimation, 500);
        }
    }
    
    // Start typing after a short delay
    setTimeout(type, 500);
}

// Terminal Animation
function initTerminalAnimation() {
    const terminalElement = document.getElementById('terminal-text');
    if (!terminalElement) return;
    
    const text = '"I write stories using data!"';
    let index = 0;
    
    function typeTerminal() {
        if (index < text.length) {
            terminalElement.textContent = text.substring(0, index + 1);
            index++;
            setTimeout(typeTerminal, 80); // Slightly faster than title
        } else {
            terminalElement.classList.add('typing-complete');
        }
    }
    
    // Start terminal typing
    typeTerminal();
}

// Particle System
function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
            if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
        }
        
        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Initialize particles
initParticles();

// Initialize typing animation
document.addEventListener('DOMContentLoaded', () => {
    initTypingAnimation();
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send this to a backend
    // For now, we'll just show an alert
    alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
    
    // Reset form
    contactForm.reset();
    
    // In a real application, you might want to:
    // - Send data to a backend API
    // - Use a service like Formspree, EmailJS, or similar
    // - Show a success message instead of alert
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.project-card, .skill-category, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// 3D Tilt Effect for Project Cards
document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
    });
});


// Konami Code Easter Egg
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        showEasterEgg();
        konamiCode = [];
    }
});

function showEasterEgg() {
    const easterEgg = document.getElementById('easter-egg');
    if (easterEgg) {
        easterEgg.classList.remove('hidden');
    }
}

function closeEasterEgg() {
    const easterEgg = document.getElementById('easter-egg');
    if (easterEgg) {
        easterEgg.classList.add('hidden');
    }
}

// Add click confetti effect
function createConfetti(x, y) {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7'];
    const emojis = ['🎉', '✨', '⭐', '💫', '🎊'];
    
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.textContent = Math.random() > 0.5 
            ? emojis[Math.floor(Math.random() * emojis.length)]
            : '';
        confetti.style.position = 'fixed';
        confetti.style.left = x + 'px';
        confetti.style.top = y + 'px';
        confetti.style.fontSize = '1.5rem';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '10000';
        confetti.style.transform = `translate(${(Math.random() - 0.5) * 200}px, ${(Math.random() - 0.5) * 200}px) rotate(${Math.random() * 360}deg)`;
        confetti.style.opacity = '1';
        confetti.style.transition = 'all 1s ease-out';
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.style.opacity = '0';
            confetti.style.transform += ' scale(0)';
            setTimeout(() => confetti.remove(), 1000);
        }, 100);
    }
}

// Add confetti to button clicks
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const rect = btn.getBoundingClientRect();
        createConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
    });
});

// Fun cursor trail
let cursorTrail = [];
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.7) {
        const trail = document.createElement('div');
        trail.style.position = 'fixed';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        trail.style.width = '10px';
        trail.style.height = '10px';
        trail.style.borderRadius = '50%';
        trail.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
        trail.style.pointerEvents = 'none';
        trail.style.zIndex = '9999';
        trail.style.transition = 'all 0.5s ease-out';
        document.body.appendChild(trail);
        
        setTimeout(() => {
            trail.style.opacity = '0';
            trail.style.transform = 'scale(0)';
            setTimeout(() => trail.remove(), 500);
        }, 100);
    }
});

// Project Modal Functions
const projectData = [
    {
        title: 'FDB LLM Log Analyzer',
        tagline: 'AI detective for chaotic logs',
        description: 'A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard. Built with React, Node.js, and PostgreSQL.',
        fullDescription: 'This project builds an end-to-end pipeline that transforms raw FoundationDB TraceEvent logs into structured analytics, surface-level statistics, and LLM-guided diagnoses. By combining log parsing, anomaly detection, and intelligent reasoning, the system helps operators quickly spot issues, understand root causes, and take corrective action with far less manual effort. The result is faster debugging, better observability, and a major boost in developer and operator productivity.',
        tech: ['Python', 'DuckDB', 'Pydantic', 'GeminiAI', 'FastAPI'],
        features: [
            'Automated log parsing that converts raw FoundationDB TraceEvent files into structured, queryable data.',
            'Statistical rollups & anomaly detection to highlight unusual patterns, spikes, or failure events',
            'LLM-powered diagnostic engine that explains anomalies, identifies likely root causes, and recommends next steps',
            'Efficient investigation workflow using iterative queries and guided reasoning to speed up debugging',
            'Improved observability by centralizing insights, reducing manual log review, and boosting operator productivity.',
        ],
        githubLink: 'https://github.com/EC528-Fall-2025/DB-LogAnalyzer'
    },
    {
        title: 'Golf Swing Analyzer',
        tagline: 'Smart feedback for every swing',
        description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
        fullDescription: 'This project analyzes a golfer’s swing in real time using computer vision and pose estimation to provide instant, personalized feedback. The pipeline captures webcam video, extracts body keypoints, and applies custom heuristics to evaluate form, posture, and swing mechanics. By automating swing analysis, the system helps players improve consistency, identify mistakes, and track progress without needing professional equipment.',
        tech: ['OpenCV', 'MediaPipe / Pose Estimation', 'Python + NumPy', 'FastAPI', 'Next.js + TypeScript'],
        features: [
            'Real-time pose estimation that tracks full-body joint positions throughout the swing',
            'Heuristics-based feedback engine to evaluate form, angles, rotation, and alignment',
            'Live video capture pipeline that processes frames continuously for smooth, low-latency analysis',
            'Automatic swing event detection (setup, backswing, impact, follow-through) for more accurate comparisons',
            'Interactive frontend dashboard that displays visuals, metrics, and personalized corrections instantly'
        ],
        githubLink: 'https://github.com/EthanL3/EC463_Team_22_Golf_Swing'
    },
    {
        title: 'UI Generator',
        tagline: 'Screenshots instantly become real UI',
        description: 'An interactive dashboard for data visualization and analytics with real-time data processing and customizable charts.',
        fullDescription: 'This project takes UI mockups or screenshots and automatically generates production-ready frontend code using a machine learning–powered pipeline. By combining image processing with a code-generation model, the system translates visual layouts into structured HTML/CSS/React components. The goal is to speed up prototyping, eliminate repetitive UI coding, and help developers move from design to implementation instantly.',
        tech: ['Python', 'OpenAI LLM + Code Model', 'OpenCV', 'pix2code Database'],
        features: [
            'Image-to-code generation that converts screenshots/mockups directly into working UI components',
            'Automated layout detection to interpret structure, hierarchy, and styling from visual elements',
            'Support for multiple frontend outputs like HTML/CSS or React components',
            'Live preview interface to instantly display the generated UI',
            'Rapid prototyping workflow that reduces repetitive manual UI coding and speeds up design-to-dev handoff'
        ],
        githubLink: 'https://github.com/vanshikachaddha/UIDesigner'
    },
    {
        title: 'Chaintrace',
        tagline: 'Track block data with clarity',
        description: 'An interactive dashboard for data visualization and analytics with real-time data processing and customizable charts.',
        fullDescription: 'ChainTrace is a real-time blockchain analysis system that leverages FPGA acceleration to trace cryptocurrency transactions, identify suspicious patterns, and flag potential cash-out endpoints. The system combines hardware-level computation with Python-based data ingestion from Ethereum APIs, enabling high-speed pattern recognition and scam-detection scoring. Designed to improve transparency and security across crypto networks, ChainTrace demonstrates how hardware and software can work together to analyze decentralized systems at scale.',
        tech: ['FPGA', 'Verilog', 'OpenCV', 'Python', 'Etherscan APIs'],
        features: [
            'Real-time blockchain transaction ingestion directly from Ethereum APIs',
            'FPGA-accelerated tracing algorithm that computes risk/confidence scores (0–100)',
            'Pattern recognition logic to detect suspicious behavior across wallets',
            'Endpoint detection to identify potential illicit cash-out points',
            'UART communication pipeline connecting Python and FPGA for seamless data transfer'
        ],
        githubLink: 'https://github.com/mrrCarter/ChainTrace/tree/master'
    },
    {
        title: 'Pintos Operating System',
        tagline: 'C code powering tiny systems',
        description: 'An interactive dashboard for data visualization and analytics with real-time data processing and customizable charts.',
        fullDescription: 'This project involved extending Pintos, a teaching operating system, by implementing core kernel features such as thread scheduling, CPU synchronization, system calls, virtual memory handling, and user program support. Through low-level C programming and debugging with GDB/QEMU, I built out key OS components that manage processes, handle interrupts, and maintain safe execution. The project strengthened my understanding of how real operating systems work under the hood—scheduling, memory, filesystems, and concurrency.',
        tech: ['C', 'GDB', 'QEMU', 'Make/GCC', 'Pintos Kernel Framework'],
        features: [
            'Custom thread scheduler with priority scheduling + priority donation',
            'Full system call interface enabling user programs to interact with the kernel',
            'User program loader & process management including argument passing and stack setup',
            'Virtual memory components (if you implemented VM) for page faults and frame management',
            'Robust synchronization primitives like semaphores, locks, and condition variables'
        ],
        githubLink: 'https://github.com/BU-EC440/pintos-lab-lav'
    },
    {
        title: 'VCM Azure Pipeline',
        tagline: 'Cloud pipeline automating car data',
        description: 'An interactive dashboard for data visualization and analytics with real-time data processing and customizable charts.',
        fullDescription: 'This project delivers a fully automated data ingestion pipeline on Microsoft Azure to process, validate, and route high-volume enterprise data across internal systems. The pipeline uses cloud-native services to schedule, clean, and store business-critical data, ensuring reliability, consistency, and fast downstream access. It improved the team’s ability to monitor KPIs, track performance metrics, and support data-driven decision-making across departments.',
        tech: ['Azure Functions', 'Azure Storage/ Blob Storage', 'Azure Pipelines / DevOPS', 'Python', 'XML Parsing Tools'],
        features: [
            'Automated ingestion workflow that processes and stores new data on a schedule',
            'XML parsing + transformation to convert raw VCM files into structured formats',
            'Error handling & validation checks to ensure consistency and detect faulty inputs',
            'Cloud-based orchestration using Azure Functions and DevOps for continuous delivery',
            'Scalable storage enabling large datasets to be managed and retrieved efficiently'
        ],
        githubLink: '#'
    },
    {
        title: 'Website Traffic Data Analytics',
        tagline: 'Turning clicks into actionable insight',
        description: 'An interactive dashboard for data visualization and analytics with real-time data processing and customizable charts.',
        fullDescription: 'This project analyzes large volumes of website traffic data to uncover user behavior patterns, engagement trends, and performance metrics for marketing and product teams. Using Python-based data processing and an interactive Streamlit dashboard, the system transforms raw logs into clear visual insights that help stakeholders understand how users navigate the site and where improvements can be made. The tool enabled data-driven decision-making by turning messy analytics data into digestible KPIs and actionable summaries.',
        tech: ['Python (Pandas, NumPy)', 'Streamlit', 'Matplotlib', 'Plotly', 'SQL'],
        features: [
            'Interactive dashboard to explore traffic patterns, top pages, and engagement trends',
            'Advanced filtering for time ranges, user segments, and performance metrics',
            'Automated data cleaning pipeline for handling messy or missing log data',
            'Visual analytics including heatmaps, line charts, KPIs, and session breakdowns',
            'Marketing insights module that highlights funnels, drop-off points, and user behavior shifts'
        ],
        githubLink: '#'
    },
    {
        title: 'Robotic Capybara',
        tagline: 'Adorable robot meets engineering magic',
        description: 'An interactive dashboard for data visualization and analytics with real-time data processing and customizable charts.',
        fullDescription: 'This project focuses on designing and building an autonomous robotic capybara capable of navigating its environment, detecting obstacles, and responding to user interaction. Using embedded sensors, microcontrollers, and custom movement logic, the robot mimics simple animal-like behaviors such as following movement, avoiding collisions, and performing pre-programmed actions. The goal of the project was to blend robotics, embedded systems, and playful design into a functional companion robot.',
        tech: ['Arduino / Microcontroller', 'Ultrasonic & IR Sensors', 'DC Motors', 'C/C++', 'SQ3D Printing / Physical FabricationL'],
        features: [
            'Autonomous navigation using real-time distance sensing',
            'Obstacle avoidance system powered by ultrasonic/IR sensors',
            'Programmable behaviors (follow mode, idle animations, response actions)',
            'Smooth motor-driven movement for walking/rolling animations',
            'Custom 3D-printed chassis for that signature capybara shape and personality'
        ],
        githubLink: '#'
    }

];

function openProjectModal(index) {
    const project = projectData[index];
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    // Map project indices to image paths
    const imagePaths = [
        'images/projects/fdb-analyzer.png',
        'images/projects/golf-swing.png',
        'images/projects/ui-generator.png',
        'images/projects/chaintrace.png',
        'images/projects/pintos.png',
        'images/projects/azure-pipeline.png',
        'images/projects/traffic-analytics.png',
        'images/projects/capybara.png'
    ];
    
    const imagePath = imagePaths[index] || '';
    
    modalBody.innerHTML = `
        <div class="modal-project-image">
            <img src="${imagePath}" alt="${project.title}" class="modal-cartoon-image" onerror="this.style.display='none'; this.parentElement.innerHTML='${project.emoji}';">
        </div>
        <h2 class="modal-project-title">${project.title}</h2>
        <p class="modal-project-description">${project.fullDescription}</p>
        
        <div class="modal-project-details">
            <h4>Key Features</h4>
            <ul>
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-project-tech">
            ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        
        <div class="modal-project-links">
            <a href="${project.githubLink}" target="_blank" onclick="event.stopPropagation()">
                GitHub
            </a>
        </div>
    `;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

// Prevent modal from closing when clicking inside modal content
document.addEventListener('DOMContentLoaded', () => {
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
});

// Terminal typing animation for Facts sections
function initTerminalFacts() {
    const factsSections = document.querySelectorAll('.facts');
    
    factsSections.forEach((section, sectionIndex) => {
        const codeLines = section.querySelectorAll('.terminal-line-code');
        
        // Animate Python code typing
        if (codeLines.length > 0) {
            setTimeout(() => {
                animateTerminalCode(codeLines);
            }, sectionIndex * 800); // Stagger sections
        }
    });
}

function animateTerminalCode(codeLines) {
    codeLines.forEach((line, lineIndex) => {
        // Store the original HTML structure
        const originalHTML = line.innerHTML;
        
        // Clear and show line with animation
        line.innerHTML = '';
        line.style.opacity = '0';
        line.style.transform = 'translateX(-10px)';
        
        setTimeout(() => {
            // Restore HTML and animate in
            line.innerHTML = originalHTML;
            line.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            line.style.opacity = '1';
            line.style.transform = 'translateX(0)';
        }, lineIndex * 100);
    });
}

// Initialize terminal facts on page load
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for page to be ready, then start terminal animation
    setTimeout(() => {
        initTerminalFacts();
    }, 1500);
});

