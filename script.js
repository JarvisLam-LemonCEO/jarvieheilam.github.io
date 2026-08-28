const projects = [
  {
    title: 'Java Practice Library',
    summary: 'Searchable Java study website that organizes practice questions, textbook exercises, and matched solutions with filtering, syntax highlighting, dark mode, and PDF export.',
    image: 'Java Practice Library.png',
    fallbackIcon: 'fa-brands fa-java',
    tags: ['Java', 'JavaScript', 'Tailwind CSS', 'Python'],
    details: ['Built searchable chapter and topic browsing for Java questions and exercises', 'Matched textbook exercises to solutions with Python data-import tooling', 'Added syntax highlighting, one-click solution copying, persistent light/dark themes, and print-friendly PDF exports', 'Generated a static Vercel-ready site with Node.js build scripts'],
    links: [{label:'Code', url:'https://github.com/JarvisLam-LemonCEO/Java-Practice-it', icon:'fa-brands fa-github'}, {label:'Live Site', url:'https://java-practice-it.vercel.app', icon:'fa-solid fa-arrow-up-right-from-square'}]
  },
  {
    title: 'CodeLearningLibrary — LeetCode Study Library',
    summary: 'Searchable LeetCode study web app for browsing questions and multi-language solutions in C++, Java, and Python with navigation, dark mode, and PDF export.',
    image: 'CodeLearningLibrary.png',
    fallbackIcon: 'fa-solid fa-code',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    details: ['Browse and search imported LeetCode problems by number or title', 'Switch between C++, Java, and Python solutions with support for multiple solution variants', 'Handles missing or Premium question statements while preserving available solution archives', 'Uses a static JSON import pipeline, Vercel deployment, and in-browser PDF export'],
    links: [{label:'Code', url:'https://github.com/JarvisLam-LemonCEO/CodeLearningLibrary', icon:'fa-brands fa-github'}, {label:'Live Site', url:'https://code-learning-library.vercel.app', icon:'fa-solid fa-arrow-up-right-from-square'}]
  },
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
  title: 'SplitMate',
  summary: 'Modern iOS expense-splitting app built with SwiftUI and SwiftData for tracking shared expenses and simplified settlements.',
  image: 'SplitMate.jpg',
  tags: ['Swift', 'SwiftUI', 'SwiftData'],
  details: [
    'Built with Swift 6, SwiftUI, SwiftData, Xcode 16, and iOS 18+',
    'Created group, member, expense, balance, and settings features',
    'Implemented automatic balance calculation and simplified “Who Owes Whom” settlements'
  ],
  links: [{label:'Code', url:'https://github.com/JarvisLam-LemonCEO/SplitMate', icon:'fa-brands fa-github'}]
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
    fallbackIcon: 'fa-solid fa-car',
    tags: ['PHP', 'MySQL', 'HTML'],
    details: ['Built using HTML, PHP, MySQL, and XAMPP', 'Managed issues through consistent team communication'],
    links: [{label:'Code', url:'https://github.com/JarvisLam-LemonCEO/cmpe138car-rental', icon:'fa-brands fa-github'}]
  }
];
const featuredConfig=[{index:2,theme:'dark',label:'AI media platform'},{index:3,theme:'cool',label:'Distributed AI infrastructure'},{index:4,theme:'warm',label:'Native iOS app'},{index:1,theme:'dark',label:'Developer learning platform'}];
const featuredIndexes=new Set(featuredConfig.map(x=>x.index));
const featuredContainer=document.getElementById('featuredProjects'),projectGrid=document.getElementById('projectGrid'),modal=document.getElementById('projectModal'),modalClose=document.getElementById('modalClose'),modalMedia=document.getElementById('modalMedia');
function renderFeatured(){featuredConfig.forEach(({index,theme,label})=>{const p=projects[index],primary=p.links[p.links.length-1]||p.links[0],el=document.createElement('article');el.className=`feature-project ${theme}`;el.innerHTML=`<div class="feature-copy reveal"><p class="kicker">${label}</p><h3>${p.title}</h3><p class="summary">${p.summary}</p><p class="feature-tags">${p.tags.join(' · ')}</p><div class="feature-actions"><button class="text-link" type="button" data-project="${index}">Learn more ›</button>${primary?`<a class="text-link" href="${primary.url}" target="_blank" rel="noopener">${primary.label} ↗</a>`:''}</div></div><div class="feature-media reveal">${p.image?`<img src="${p.image}" alt="${p.title} project interface" loading="lazy">`:`<div class="project-fallback">${p.title[0]}</div>`}</div>`;featuredContainer.appendChild(el)})}
function renderGrid(){projects.forEach((p,index)=>{if(featuredIndexes.has(index))return;const first=p.links[0],el=document.createElement('article');el.className='project-card reveal';el.innerHTML=`<div class="project-card-copy"><p class="kicker">${p.tags[0]||'Project'}</p><h3>${p.title}</h3><p>${p.summary}</p><div class="mini-tags">${p.tags.join(' · ')}</div><div class="card-actions"><button type="button" data-project="${index}">Details ›</button>${first?`<a href="${first.url}" target="_blank" rel="noopener">${first.label} ↗</a>`:''}</div></div><div class="project-card-media">${p.image?`<img src="${p.image}" alt="${p.title} project preview" loading="lazy">`:`<div class="project-fallback">${p.title[0]}</div>`}</div>`;projectGrid.appendChild(el)})}
function openProject(index){const p=projects[index];document.getElementById('modalTitle').textContent=p.title;document.getElementById('modalSummary').textContent=p.summary;document.getElementById('modalTags').textContent=p.tags.join(' · ');document.getElementById('modalDetails').innerHTML=p.details.map(x=>`<li>${x}</li>`).join('');document.getElementById('modalLinks').innerHTML=p.links.map(x=>`<a href="${x.url}" target="_blank" rel="noopener">${x.label} ↗</a>`).join('');modalMedia.innerHTML=p.image?`<img src="${p.image}" alt="${p.title} project preview">`:'';modal.showModal();document.body.classList.add('modal-open')}
renderFeatured();renderGrid();document.addEventListener('click',e=>{const t=e.target.closest('[data-project]');if(t)openProject(Number(t.dataset.project))});modalClose.addEventListener('click',()=>modal.close());modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});modal.addEventListener('close',()=>document.body.classList.remove('modal-open'));document.getElementById('year').textContent=new Date().getFullYear();
const navToggle=document.getElementById('navToggle'),navLinks=document.getElementById('navLinks');function closeNav(){navLinks.classList.remove('open');navToggle.classList.remove('active');navToggle.setAttribute('aria-expanded','false');navToggle.setAttribute('aria-label','Open navigation')}navToggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');navToggle.classList.toggle('active',open);navToggle.setAttribute('aria-expanded',String(open));navToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeNav));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeNav()});window.addEventListener('resize',()=>{if(window.innerWidth>720)closeNav()});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.11,rootMargin:'0px 0px -35px 0px'});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
