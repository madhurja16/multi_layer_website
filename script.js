// script.js
// --- DATA ---
// All website content data is centralized here for easy updates across all pages.
const publications = [
    { title: "Unraveling B, N Co-doping synergy in graphitic carbon nitride for efficient CO2 cycloaddition with styrene oxide",
      authors: "Hafila S Khairun, Gazala Parveen, Ripsa Rani Nayak, Jogeswar Chhatria, Sooraj Kunnikuruvan, Navneet Kumar Gupta", 
      journal: "Journal of Catalysis",
      year: "2025", 
      link: "https://doi.org/10.1016/j.jcat.2025.116399" },
    { title: "A Review on the Applications of “Catalysis Under 2D-Cover” for Small Molecule Activation",
      authors: "Athira Jayasankar, Sooraj Kunnikuruvan",
      journal: "Journal of the Indian Institute of Science",
      year: "2025",
      link: "https://doi.org/10.1007/s41745-025-00481-9" },
    { title: "Molecular Mechanisms of Polymer Crosslinking via Thermal Activation",
      authors: "Javed Akhtar, Jogeswar Chhatria, Sooraj Kunnikuruvan, Satyesh K Yadav, Tarak K Patra",
      journal: "arXiv preprint arXiv:2507.21143", 
      year: "2024", 
      link: "https://arxiv.org/pdf/2507.21143" },
    { title: "Orchestrating Multiple Aryl Rearrangements: Deciphering the Dynamics of Competitive Shifts and Shuttles on Four Carbons",
      authors: "Nagaraju Ponugoti, Jogeswar Chhatria, Sooraj Kunnikuruvan, Parthasarathy Venkatakrishnan",
      journal: "The Journal of Organic Chemistry",
      year: "2025",
      link: "https://doi.org/10.1021/acs.joc.5c00596" },
    { title: "Machine Learning-accelerated Screening of Bimetallic Alloys for Oxygen Evolution Reaction",
      authors: "Kumar, R., Sharma, A., Kunnikuruvan, S.",
      journal: "Journal of Physical Chemistry Letters",
      year: "2024",
      link: "#" },
    { title: "Self‐Healing, Ga‐Sb Alloy Confined Sn Anode for Stable Na‐Ion Storage in Glyme Based Electrolytes",
      authors: "Dimpal Deori, Madhurja Buragohain, Youhyun Son, Sooraj Kunnikuruvan, Ashok Kumar Nanjundan, Philipp Adelhelm, Thangavelu Palaniselvam",
      journal: "Small",
      year: "2025",
      link: "https://doi.org/10.1002/smll.202504185" },
    { title: "Electrochemical Nitrate Reduction to Ammonia using γ-Fe2O3/BCN in a Neutral Medium",
      authors: "Soniya Mariya Varghese, Anju Vakakuzhiyil Gopinathan, Sudhin Rathnakumaran, Suraj Sasikumar, Sooraj Kunnikuruvan, Ranga Rao Gangavarapu",
      journal: "ACS Catalysis",
      year: "2025",
      link: "https://doi.org/10.1021/acscatal.5c00936" }
];

const teamMembers = [
    { name: "Jogeshwar Chhatria", role: "PhD Student", joiningDate: "July 2022",
      linkedin: "https://www.linkedin.com/in/jogeswar-chhatria-6538362b4/", email: "cy22d017@smail.iiitm.ac.in", imageUrl: "jogesh.jpg" }, 
    { name: "Madhurja Buragohain", role: "PhD Student", joiningDate: "July 2022", linkedin: "https://www.linkedin.com/in/mburagohain/",
      imageUrl: "IMAGE/PROFILE/madhurja.jpeg", email: "cy22d015@smail.iiitm.ac.in" }, 
    { name: "Sudhin Rathnakumaran", role: "PhD Student", joiningDate: "July 2023",
      linkedin: "https://www.linkedin.com/in/sudhin-r/", email: "cy23d024@smail.iitm.ac.in", imageUrl: "sudhin.jpg"}, 
    { name: "Athira Jayasankar", role: "PhD Student", joiningDate: "July 2024",
      linkedin: "https://www.linkedin.com/in/athira-jayasankar-867b46214/", email: "cy24d300@smail.iitm.ac.in", imageUrl: "athira.png"}, 
    { name: "Anjana Vijayan", role: "PhD Student", joiningDate: "July 2025",
      linkedin: "#", email: "X@smail.iiitm.ac.in", imageUrl: "anjana.png"}, 
    { name: "Stuti Gupta", role: "Project Student", joiningDate: "July 2025",
      linkedin: "https://www.linkedin.com/in/stuti-gupta-24285b215/", email: "guptastuti012@gmail.com", imageUrl: "stuti.jpg"}, 
    { name: "Ankan Kamila", role: "Masters Student", joiningDate: "July 2025",
      linkedin: "#", email: "X@smail.iiitm.ac.in", imageUrl: "ankan.jpg"}, 
    { name: "Himadri Mittal", role: "Masters Student", joiningDate: "July 2025",
      linkedin: "#", email: "X@smail.iiitm.ac.in", imageUrl: "himadri.jpg"}
];

const postdocAlumni = [
    { name: "Dr. Pragin", role: "Works at TCS", where: "Post Doc, 2024 (CCIC LAB)" }, 
    { name: "Dr. XXX ", role: "Scientist at Shell", where: "PhD, 2023" }, 
];

const mscAlumni = [
    { name: "XXXXX XXXXX", role: "Data Scientist at Google", where: "MSc, 2022" },
];


const newsItems = [
    { title: "Madhurja’s Latest Paper Publication",
      date: "October 16, 2025",
      excerpt: "We're happy to share our new article on solid electrolyte interphase (SEI) formation in Li metal batteries, published in ACS Applied Energy Materials.", 
      imageUrl: "https://placehold.co/400x250/3B82F6/FFFFFF?text=New Paper Published" },
    { title: "Mr. Madhurja recieves best oral presentation award",
      date: "Sepetember 8, 2025",
      excerpt: " We are proud to share that Madhurjya Buragohain received the Best Oral Presentation Award at the Chemistry In-House Symposium (CiHS)-2025...", 
      imageUrl: "https://placehold.co/400x250/3B82F6/FFFFFF?text= Best Oral Presentation Award" },
    { title: "Mr. Sudhin R recieves best poster award",
      date: "August 28, 2025",
      excerpt: "We are delighted to share that Sudhin R. from our CCIC lab has been awarded the Best Poster Award at the National Symposium on Electrochemical Science and Technology (NSEST-2025)...", 
      imageUrl: "https://placehold.co/400x250/3B82F6/FFFFFF?text=Best Poster Award" },
    { title: "CCIC welcomes new PhD students",
      date: "August 1, 2025", 
      excerpt: "We are excited to welcome Anjana Vijayan to the lab. She will be working on solid-electrolyte.", 
      imageUrl: "https://placehold.co/400x250/10B981/FFFFFF?text=Welcome" },
    { title: "Ms. Stuti awarded the prestigious Prof. V. Ramamurthy Endowment Award for Best MSc Thesis.",
      date: "August 17, 2025", 
      excerpt: "We’re delighted to share that STUTI GUPTA, an MSc student from our lab, has officially graduated...", 
      imageUrl: "https://placehold.co/600x375/10B981/FFFFFF?text=Prof. V. Ramamurthy Endowment Award&font_size=80" },
    { title: "Mr. Jogesh recieves best poster award",
      date: "November 6, 2024", 
      excerpt: "A big congratulations to our lab member Jogeswar Chhatria, who has been awarded the Best Poster in Theoretical Chemistry at the Chemistry In-House Symposium 2024...", 
      imageUrl: "https://placehold.co/400x250/F59E0B/FFFFFF?text=Best Poster Award" }
];
    
const galleryImages = [
    { src: "IMAGE/Gallery/Aug2_2025.png", caption: "Good food, great company • Soumya’s Farewell Dinner • 02/08/25" },
    { src: "IMAGE/Gallery/Oct9_2024.png", caption: "Celebrating teamwork, curiosity, and countless hours at the bench with a well-deserved dinner outing. Oct 2, 2024, was a night to remember for our incredible lab family!" },
    { src: "IMAGE/Gallery/Nov24_2024.png", caption: "Caption" },
    { src: "IMAGE/Gallery/13_August ‎2023.png", caption: "Caption" },
    { src: "IMAGE/Gallery/14Aug.2023.png", caption: "Caption" },
    { src: "IMAGE/Gallery/29July_2023.png", caption: "Caption" },
    { src: "IMAGE/Gallery/07August_2023.png", caption: "Caption" },
    { src: "IMAGE/Gallery/21_September_2023.png", caption: "Caption" },
    { src: "IMAGE/Gallery/10Oct_2023.png", caption: "Great vibes, amazing team • Lab dinner • 10/10/23" }
];


// --- DYNAMIC CONTENT RENDERING FUNCTIONS (only run if the element exists) ---
// These functions are designed to check if the target container exists before running,
// ensuring they only execute on the page where they are relevant (mostly team.html).

function renderPublications(limit) {
    const list = document.getElementById('publications-list');
    if (!list) return;

    list.innerHTML = ''; 

    // Sort publications by year, most recent first
    const sortedPublications = [...publications].sort((a, b) => b.year - a.year);
    const itemsToShow = limit ? sortedPublications.slice(0, limit) : sortedPublications;

    // Group publications by year
    const groupedByYear = itemsToShow.reduce((acc, p) => {
        if (!acc[p.year]) {
            acc[p.year] = [];
        }
        acc[p.year].push(p);
        return acc;
    }, {});

    const sortedYears = Object.keys(groupedByYear).sort((a, b) => b - a);

    sortedYears.forEach(year => {
        const yearSection = document.createElement('div');
        yearSection.className = 'flex flex-col md:flex-row gap-4 md:gap-8';

        const yearColumn = `
            <div class="md:w-1/12 flex-shrink-0">
                <h3 class="text-2xl font-bold text-gray-800 md:sticky md:top-24">${year}</h3>
            </div>`;

        const pubsColumn = document.createElement('div');
        pubsColumn.className = 'md:w-11/12 space-y-6';

        groupedByYear[year].forEach(p => {
            const item = document.createElement('div');
            item.className = 'bg-white p-6 rounded-lg shadow-sm border border-gray-200 transition-shadow duration-300 hover:shadow-lg';
            item.innerHTML = `
                <p class="font-bold text-lg text-gray-900">${p.title}</p>
                <p class="text-gray-600 mt-1 text-sm">${p.authors}</p>
                <p class="text-sm text-gray-500 mt-2"><em>${p.journal}</em>, ${p.year}</p>
                ${p.link && p.link !== '#' ? `
                <a href="${p.link}" target="_blank" class="inline-block mt-3 text-blue-600 font-semibold text-sm hover:underline">
                    Read Paper <span class="font-sans">&rarr;</span>
                </a>` : ''}
            `;
            pubsColumn.appendChild(item);
        });
        
        yearSection.innerHTML = yearColumn;
        yearSection.appendChild(pubsColumn);
        list.appendChild(yearSection);
    });
}
    
function renderTeam(members, containerId) {
    const list = document.getElementById(containerId);
    if (!list) return;

    list.innerHTML = '';
    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'text-center';
        const initials = member.name.split(' ').map(n => n[0]).join('');
        const imageUrl = member.imageUrl || `https://placehold.co/200x200/EBF4FF/3B82F6?text=${initials}`;
        
        let description = `<p class="text-blue-600">${member.role}</p>`;
        if (member.joiningDate) {
            description += `<p class="text-gray-500 text-sm mt-1">Joined: ${member.joiningDate}</p>`;
        }
        if (member.where) {
            description += `<p class="text-gray-500 text-sm mt-1">${member.where}</p>`;
        }

        let socialLinks = '';
        if (member.linkedin && member.email) {
            socialLinks = `
                <div class="flex justify-center space-x-3 mt-2">
                    <a href="${member.linkedin}" target="_blank" class="text-gray-400 hover:text-blue-600">
                        <i data-feather="linkedin" class="w-5 h-5"></i>
                    </a>
                    <a href="mailto:${member.email}" class="text-gray-400 hover:text-blue-600">
                        <i data-feather="mail" class="w-5 h-5"></i>
                    </a>
                </div>`;
        }

        card.innerHTML = `
            <img src="${imageUrl}" onerror="this.onerror=null;this.src='https://placehold.co/200x200/EBF4FF/3B82F6?text=${initials}';" alt="${member.name}" class="w-40 h-40 mx-auto rounded-full object-cover mb-4 shadow-lg border-4 border-white">
            <h4 class="font-bold text-lg">${member.name}</h4>
            ${description}
            ${socialLinks}
        `;
        list.appendChild(card);
    });
    // Re-initialize Feather icons after adding new elements
    feather.replace(); 
}

function renderNews() {
    const list = document.getElementById('news-list');
    if (!list) return;

    list.innerHTML = '';
    newsItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200';
        card.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <p class="text-sm text-gray-500 mb-2">${item.date}</p>
                <h3 class="font-bold text-lg mb-3">${item.title}</h3>
                <p class="text-gray-600 text-sm">${item.excerpt}</p>
            </div>
        `;
        list.appendChild(card);
    });
}
    
function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const closeBtn = document.getElementById('modal-close-btn');

    grid.innerHTML = '';
    galleryImages.forEach(img => {
        const item = document.createElement('div');
        item.className = 'aspect-w-1 aspect-h-1 cursor-pointer overflow-hidden rounded-lg group';
        item.innerHTML = `<img src="${img.src}" onerror="this.onerror=null;this.src='https://placehold.co/400x300/F59E0B/FFFFFF?text=Photo+Missing';" alt="${img.caption}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300">`;
        
        item.addEventListener('click', () => {
            modalImg.src = img.src;
            // Add a fallback for the modal image too
            modalImg.onerror = () => modalImg.src = 'https://placehold.co/600x400/F59E0B/FFFFFF?text=Image+Not+Found'; 
            modalCaption.textContent = img.caption;
            modal.classList.remove('hidden');
        });
        grid.appendChild(item);
    });

    if (modal && closeBtn) {
        closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    }
    feather.replace();
}


// --- GLOBAL INITIALIZATION AND EVENT LISTENERS ---

document.addEventListener('DOMContentLoaded', function() {
    // --- Data Rendering ---
    // Only run on team.html:
    renderPublications(4); 
    renderTeam(teamMembers, 'team-members-list'); 
    renderTeam(postdocAlumni, 'team-alumni-postdoc-list'); 
    renderTeam(mscAlumni, 'team-alumni-msc-list'); 
    renderNews();
    renderGallery();

    // --- Global Setup ---

    // Set current year in footer
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }
    
    // Feather Icons initialization (needed on all pages)
    feather.replace();

    // --- Event Listeners (mostly relevant to team.html, but harmless globally) ---

    // "Show All" button functionality
    const toggleBtn = document.getElementById('toggle-publications-btn');
    if (toggleBtn) {
        let allShown = false;
        toggleBtn.addEventListener('click', () => {
            allShown = !allShown;
            if (allShown) {
                renderPublications(); 
                toggleBtn.textContent = 'Show Less';
            } else {
                renderPublications(4); 
                toggleBtn.textContent = 'Show All Publications';
            }
             // Scroll back to the publications section top to see the change
             // Delay ensures content height calculation is done
             setTimeout(() => {
                document.getElementById('publications').scrollIntoView({ behavior: 'smooth' });
             }, 50);
        });
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuBtn?.addEventListener('click', () => {
        mobileMenu?.classList.toggle('hidden');
    });
    
    // Close mobile menu on link click
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu?.classList.add('hidden');
        });
    });

    // Header shrink on scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('py-2');
            header.classList.remove('py-4');
        } else {
            header.classList.add('py-4');
            header.classList.remove('py-2');
        }
    });

    // Active nav link highlighting on scroll (Only relevant for team.html for internal anchors)
    const currentPage = document.querySelector('nav')?.dataset.currentPage;
    if (currentPage === 'team') {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                // Adjust sectionTop by 90px to account for fixed header height
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 90) { 
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                // Only consider the Team links (which contain a hash)
                if (link.getAttribute('href').includes('team.html#')) {
                    link.classList.remove('active');
                    const linkHash = link.getAttribute('href').split('#')[1];
                    if (current === linkHash) {
                        link.classList.add('active');
                    }
                }
            });
        });
    }
});







