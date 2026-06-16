const projects = [
  {
    title: 'PixelVault — AI-Powered Media Gallery',
    summary: 'AI-enhanced media management platform with cloud galleries, drag-and-drop album management, photo retouching, and responsive UI design.',
    image: 'pixelvault.png',
    tags: ['React', 'Vite', 'Firebase', 'Cloudinary', 'AI'],
    details: ['AI-powered photo retouching and image transformation', 'Drag-and-drop album rearrangement', 'Firebase Authentication and Firestore integration', 'Cloudinary media storage infrastructure'],
    links: [{label:'Code', url:'https://github.com/JarvisLam-LemonCEO/CMPE280Hackathon', icon:'fa-brands fa-github'}, {label:'Demo', url:'https://www.youtube.com/watch?v=FnxwcjPU384', icon:'fa-solid fa-play'}]
  },
  {
    title: 'Lumina — Distributed Split Inference',
    summary: 'Distributed LLM inference system that splits transformer layers across multiple machines based on available VRAM.',
    image: 'Lumina.png',
    tags: ['Python', 'FastAPI', 'Docker', 'React', 'AWS'],
    details: ['Distributed LLM inference across three machines', 'Dynamic VRAM-based layer splitting', 'Tracker service with heartbeat monitoring and request tracing'],
    links: [{label:'Code', url:'https://github.com/JarvisLam-LemonCEO/CMPE273-Project', icon:'fa-brands fa-github'}, {label:'Demo', url:'https://youtu.be/7Ucet6pAAik', icon:'fa-solid fa-play'}]
  },
  {
    title: 'Phishing Detection System',
    summary: 'Python GUI application for phishing email analysis using heuristic checks, anomaly detection, and LLM-supported review.',
    image: 'FDS.jpg',
    tags: ['Python', 'LLM', 'Security'],
    details: ['Phishing email analysis with heuristic, anomaly, and LLM workflows', 'Dataset training and evaluation', 'Desktop GUI application'],
    links: [{label:'Code', url:'https://github.com/JarvisLam-LemonCEO/CMPE279Project.git', icon:'fa-brands fa-github'}, {label:'Demo', url:'https://youtu.be/Dff0YanQcLU', icon:'fa-solid fa-play'}]
  },
  {
    title: 'Dollar Store Vulnerability Finder',
    summary: 'LLM-based vulnerability detection and safe-code rewriting workflow focused on privacy-preserving code analysis.',
    image: 'LLM.png',
    tags: ['Python', 'Qt', 'DeepSeek'],
    details: ['Evaluate LLM-based vulnerability detection', 'Privacy-preserving code analysis', 'User-friendly adoption for security review'],
    links: [{label:'Code', url:'https://github.com/JarvisLam-LemonCEO/CMPE209Project/tree/main', icon:'fa-brands fa-github'}, {label:'Demo', url:'https://youtu.be/SrGBVvb-YE8', icon:'fa-solid fa-play'}]
  },
  {
    title: 'Dinner Invitation & RSVP Tracker',
    summary: 'PHP and MySQL application for public dinner invitation submission and guest-level RSVP status management.',
    image: 'inviteTracker.png',
    tags: ['PHP', 'MySQL', 'HTML/CSS'],
    details: ['Public invitation submission without login', 'Guest RSVP status tracking', 'Responsive public management page'],
    links: [{label:'Code', url:'https://github.com/JarvisLam-LemonCEO/DinnerInvitationTracker.git', icon:'fa-brands fa-github'}]
  },
  {
    title: 'Android Voice Assistant',
    summary: 'Senior project optimizing voice navigation commands for Android using Java and efficient command parsing.',
    image: 'SeniorProject.jpg',
    tags: ['Java', 'Android', 'AI'],
    details: ['Implemented voice commands for scroll, swipe, home, and video playback', 'Optimized command parsing with hash maps', 'Coordinated technical delivery and expo presentation'],
    links: [{label:'Code', url:'https://github.com/JarvisLam-LemonCEO/BS-Senior-Project', icon:'fa-brands fa-github'}, {label:'Demo', url:'https://youtube.com/shorts/pTrI8CmQhfU', icon:'fa-solid fa-play'}]
  },
  {
    title: 'StreetEats iOS App',
    summary: 'Mobile app project covering customer and vendor interfaces with biometric authentication features.',
    image: 'StreetEats.jpg',
    tags: ['Flutter', 'iOS', 'Mobile'],
    details: ['Customer and vendor mobile interfaces', 'UI design for both user flows', 'Touch ID and Face ID biometric authentication'],
    links: [{label:'Code', url:'https://github.com/JarvisLam-LemonCEO/CMPE137', icon:'fa-brands fa-github'}, {label:'Demo', url:'https://youtu.be/1_ZM4L6EkdE', icon:'fa-solid fa-play'}]
  },
  {
    title: 'Restaurant Finder',
    summary: 'Booking management system with customer, admin, and restaurant owner workflows.',
    image: 'RestaurantFinder.jpg',
    tags: ['JavaScript', 'Node.js', 'MongoDB'],
    details: ['Login, registration, admin, and customer UI design', 'Restaurant owner page features', 'Booking management workflows'],
    links: [{label:'Code', url:'https://github.com/JarvisLam-LemonCEO/cmpe202project', icon:'fa-brands fa-github'}, {label:'Demo', url:'https://youtu.be/iQRpQ5lE5jo', icon:'fa-solid fa-play'}]
  },
  {
    title: 'MyChinaExperience',
    summary: 'Marketplace project with database-backed login, reviews, product ranking, and browser history features.',
    image: 'MyChina.jpg',
    tags: ['Node.js', 'MySQL', 'JavaScript'],
    details: ['Database and marketplace feature implementation', 'User login and review features', 'Top-five product display and browser history'],
    links: [{label:'Code', url:'https://github.com/JarvisLam-LemonCEO/CMPE272TeamProject', icon:'fa-brands fa-github'}, {label:'Demo', url:'https://youtu.be/K0GdGPxo6rg', icon:'fa-solid fa-play'}]
  },
  {
    title: 'Car Rental System',
    summary: 'PHP and MySQL web system for rental workflows, built with XAMPP and team-based delivery.',
    image: '',
    tags: ['PHP', 'MySQL', 'HTML'],
    details: ['Built using HTML, PHP, MySQL, and XAMPP', 'Managed issues through consistent team communication'],
    links: [{label:'Code', url:'https://github.com/JarvisLam-LemonCEO/cmpe138car-rental', icon:'fa-brands fa-github'}]
  }
];

const projectGrid = document.getElementById('projectGrid');
const modal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');

function createProjectCard(project, index) {
  const card = document.createElement('article');
  card.className = 'project-card reveal';
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `Open details for ${project.title}`);
  const media = project.image
    ? `<img src="${project.image}" alt="${project.title} preview" loading="lazy">`
    : `<div class="project-fallback"><i class="fa-solid fa-car"></i></div>`;
  card.innerHTML = `
    <div class="project-media">${media}</div>
    <div class="project-content">
      <div class="tag-row">${project.tags.slice(0, 3).map(tag => `<span>${tag}</span>`).join('')}</div>
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
      <div class="project-card-footer"><span>View details</span><i class="fa-solid fa-arrow-right"></i></div>
    </div>`;
  card.addEventListener('click', () => openProject(index));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openProject(index);
    }
  });
  return card;
}

function openProject(index) {
  const project = projects[index];
  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalSummary').textContent = project.summary;
  document.getElementById('modalTags').textContent = project.tags.join(' · ');
  const image = document.getElementById('modalImage');
  if (project.image) {
    image.src = project.image;
    image.alt = `${project.title} preview`;
    image.style.display = 'block';
  } else {
    image.style.display = 'none';
  }
  document.getElementById('modalDetails').innerHTML = project.details.map(detail => `<li>${detail}</li>`).join('');
  document.getElementById('modalLinks').innerHTML = project.links.map(link => `<a href="${link.url}" target="_blank" rel="noopener"><i class="${link.icon}"></i>${link.label}</a>`).join('');
  modal.showModal();
}

projects.forEach((project, index) => projectGrid.appendChild(createProjectCard(project, index)));
modalClose.addEventListener('click', () => modal.close());
modal.addEventListener('click', (event) => { if (event.target === modal) modal.close(); });

document.getElementById('year').textContent = new Date().getFullYear();

const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') document.body.classList.add('light-mode');
updateThemeIcon();

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
  updateThemeIcon();
});

function updateThemeIcon() {
  themeToggle.innerHTML = document.body.classList.contains('light-mode') ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}

const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');
mobileMenu.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
