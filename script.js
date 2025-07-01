document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });
    }

    // Tab switching for admin panel
    document.querySelectorAll('.admin-sidebar [data-tab]').forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const tabName = tab.getAttribute('data-tab');

            // Remove active class from all tabs
            document.querySelectorAll('.admin-sidebar [data-tab]').forEach(t => {
                t.classList.remove('active-tab', 'bg-gray-800');
            });

            // Add active class to clicked tab
            tab.classList.add('active-tab', 'bg-gray-800');

            // Hide all tab contents
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.add('hidden');
            });

            // Show selected tab content
            const targetTabContent = document.getElementById(`${tabName}-tab-content`);
            if (targetTabContent) {
                targetTabContent.classList.remove('hidden');
            }
        });
    });

    // Sidebar toggle
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.admin-sidebar');
    const adminContent = document.querySelector('.admin-panel .flex-1');


    if (sidebarToggle && sidebar && adminContent) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('w-64');
            sidebar.classList.toggle('w-20');
            // Adjust main content margin or width if needed (optional)
             adminContent.classList.toggle('ml-64');
             adminContent.classList.toggle('ml-20');
        });
    }


    // Login modal handling
    const loginBtn = document.getElementById('login-btn');
    const mobileLoginBtn = document.getElementById('mobile-login-btn');
    const loginModal = document.getElementById('login-modal');
    const closeLoginModal = document.getElementById('close-login-modal');
    const landingPage = document.getElementById('landing-page');
    const adminPanel = document.getElementById('admin-panel');

    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            if (loginModal) loginModal.classList.remove('hidden');
        });
    }
    if (mobileLoginBtn) {
        mobileLoginBtn.addEventListener('click', () => {
            if (loginModal) loginModal.classList.remove('hidden');
        });
    }
    if (closeLoginModal) {
        closeLoginModal.addEventListener('click', () => {
            if (loginModal) loginModal.classList.add('hidden');
        });
    }

    // Simulate login (demo purposes)
    const loginForm = document.getElementById('login-form');

    if (loginForm && landingPage && adminPanel) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const username = usernameInput ? usernameInput.value : '';
            const password = passwordInput ? passwordInput.value : '';


            // Simple validation (in real app, validate with backend)
            if (username === 'admin' && password === 'admin123') {
                if (loginModal) loginModal.classList.add('hidden');
                landingPage.classList.add('hidden');
                adminPanel.classList.remove('hidden');

                // Activate dashboard tab by default
                const dashboardTab = document.querySelector('.dashboard-tab');
                if(dashboardTab) dashboardTab.click();

            } else {
                alert('Invalid credentials. Try admin/admin123 for demo.');
            }
        });
    }


    // Project modal handling
    const addProjectBtn = document.getElementById('add-project-btn');
    const addProjectModal = document.getElementById('add-project-modal');
    const closeProjectModal = document.getElementById('close-project-modal');
    const cancelProject = document.getElementById('cancel-project');

    if (addProjectBtn) {
        addProjectBtn.addEventListener('click', () => {
            if (addProjectModal) addProjectModal.classList.remove('hidden');
        });
    }
    if (closeProjectModal) {
        closeProjectModal.addEventListener('click', () => {
            if (addProjectModal) addProjectModal.classList.add('hidden');
        });
    }
     if (cancelProject) {
        cancelProject.addEventListener('click', () => {
            if (addProjectModal) addProjectModal.classList.add('hidden');
        });
    }

    // Client modal handling
    const addClientBtn = document.getElementById('add-client-btn');
    const addClientModal = document.getElementById('add-client-modal');
    const closeClientModal = document.getElementById('close-client-modal');
    const cancelClient = document.getElementById('cancel-client');

    if (addClientBtn) {
        addClientBtn.addEventListener('click', () => {
            if (addClientModal) addClientModal.classList.remove('hidden');
        });
    }
    if (closeClientModal) {
        closeClientModal.addEventListener('click', () => {
            if (addClientModal) addClientModal.classList.add('hidden');
        });
    }
     if (cancelClient) {
        cancelClient.addEventListener('click', () => {
            if (addClientModal) addClientModal.classList.add('hidden');
        });
    }

    // Form submissions (demo purposes - no backend connection)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Contact form submitted (frontend demo only).');
            e.target.reset();
        });
    }

    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Newsletter subscribed (frontend demo only).');
            e.target.reset();
        });
    }

    const projectForm = document.getElementById('project-form');
    if (projectForm) {
        projectForm.addEventListener('submit', (e) => {
            e.preventDefault();
             alert('Project form submitted (frontend demo only).');
            // In a real app, you'd send this data to your backend API
             e.target.reset();
             // Optionally close modal
             if (addProjectModal) addProjectModal.classList.add('hidden');
        });
    }

     const clientForm = document.getElementById('client-form');
    if (clientForm) {
        clientForm.addEventListener('submit', (e) => {
            e.preventDefault();
             alert('Client form submitted (frontend demo only).');
            // In a real app, you'd send this data to your backend API
             e.target.reset();
             // Optionally close modal
             if (addClientModal) addClientModal.classList.add('hidden');
        });
    }

    // Image preview for project and client forms
    const projectImageInput = document.getElementById('project-image');
    const projectImagePreview = document.getElementById('project-image-preview');
    if (projectImageInput && projectImagePreview) {
        projectImageInput.addEventListener('change', function(e) {
            const reader = new FileReader();
            reader.onload = function() {
                projectImagePreview.src = reader.result;
            }
            reader.readAsDataURL(e.target.files[0]);
        });
    }

    const clientImageInput = document.getElementById('client-image');
    const clientImagePreview = document.getElementById('client-image-preview');
     if (clientImageInput && clientImagePreview) {
        clientImageInput.addEventListener('change', function(e) {
            const reader = new FileReader();
            reader.onload = function() {
                clientImagePreview.src = reader.result;
            }
            reader.readAsDataURL(e.target.files[0]);
        });
    }

    // Trigger fade-in animation on scroll
    function revealOnScroll() {
        document.querySelectorAll('.fade-in').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('DOMContentLoaded', revealOnScroll);

    // Initial tab activation in admin panel (if admin panel is visible)
    if (!adminPanel.classList.contains('hidden')) {
         const dashboardTab = document.querySelector('.dashboard-tab');
         if(dashboardTab) dashboardTab.click();
    }

});
document.addEventListener('DOMContentLoaded', function () {
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');

  tabLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      tabLinks.forEach(l => l.classList.remove('active-tab'));
      this.classList.add('active-tab');
      const tab = this.getAttribute('data-tab');
      tabContents.forEach(content => {
        content.style.display = content.id === tab + '-tab-content' ? 'block' : 'none';
      });
    });
  });

  // Show the first tab by default
  if (tabContents.length) tabContents[0].style.display = 'block';
});

// Fetch and display clients in the Happy Clients section
document.addEventListener('DOMContentLoaded', function () {
  // Replace this URL with your actual backend endpoint
  fetch('https://your-backend-api.com/api/clients')
    .then(response => response.json())
    .then(clients => {
      const clientsList = document.getElementById('clients-list');
      if (!clientsList) return;
      clientsList.innerHTML = ''; // Clear any existing content
      clients.forEach(client => {
        const clientCard = document.createElement('div');
        clientCard.className = 'flex flex-col items-center text-center bg-gray-50 rounded-lg shadow p-6';
        clientCard.innerHTML = `
          <img src="${client.image}" alt="${client.name}" class="w-24 h-24 object-cover rounded-full mb-4 border-4 border-orange-200 shadow">
          <h3 class="text-lg font-semibold">${client.name}</h3>
          <p class="text-orange-500 text-sm mb-2">${client.designation}</p>
          <p class="text-gray-600 text-sm mt-2">${client.description}</p>
        `;
        clientsList.appendChild(clientCard);
      });
    })
    .catch(error => {
      const clientsList = document.getElementById('clients-list');
      if (clientsList) {
        clientsList.innerHTML = '<p class="text-red-500">Failed to load clients.</p>';
      }
      console.error('Error fetching clients:', error);
    });
});
