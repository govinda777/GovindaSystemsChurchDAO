// Govinda Systems Church DAO - Interactive functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }

    // Smooth Scrolling for Navigation Links
    const navigationLinks = document.querySelectorAll('a[href^="#"]');
    navigationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header Background on Scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(19, 52, 59, 0.98)';
        } else {
            header.style.background = 'rgba(19, 52, 59, 0.95)';
        }
    });

    // Tab Switching for Ceremonies
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Modal Functionality
    const modals = document.querySelectorAll('.modal');
    const modalTriggers = {
        'connect-wallet': 'wallet-modal',
        'participate-btn': 'wallet-modal'
    };

    // Open modals
    Object.keys(modalTriggers).forEach(triggerId => {
        const trigger = document.getElementById(triggerId);
        if (trigger) {
            trigger.addEventListener('click', function() {
                const modalId = modalTriggers[triggerId];
                openModal(modalId);
            });
        }
    });

    // Schedule buttons - open schedule modal
    const scheduleButtons = document.querySelectorAll('.ceremony-card .btn, .event-card .btn');
    scheduleButtons.forEach(button => {
        button.addEventListener('click', function() {
            openModal('schedule-modal');
        });
    });

    // Close modal functionality
    const modalCloses = document.querySelectorAll('.modal-close');
    modalCloses.forEach(close => {
        close.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal.id);
        });
    });

    // Close modal when clicking outside
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal(this.id);
            }
        });
    });

    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    }

    // Wallet Connection Simulation
    const walletButtons = document.querySelectorAll('.wallet-btn');
    walletButtons.forEach(button => {
        button.addEventListener('click', function() {
            const walletType = this.getAttribute('data-wallet');
            simulateWalletConnection(walletType);
        });
    });

    function simulateWalletConnection(walletType) {
        const connectButton = document.getElementById('connect-wallet');
        
        // Show loading state
        connectButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Conectando...';
        connectButton.disabled = true;
        
        // Simulate connection delay
        setTimeout(() => {
            connectButton.innerHTML = '<i class="fas fa-check"></i> 0x1234...5678';
            connectButton.disabled = false;
            connectButton.classList.add('connected');
            
            closeModal('wallet-modal');
            showNotification('Carteira conectada com sucesso!', 'success');
            
            // Update donation button state
            const donateBtn = document.getElementById('donate-btn');
            if (donateBtn) {
                donateBtn.disabled = false;
                donateBtn.innerHTML = '<i class="fas fa-heart"></i> Doar com Base';
            }
        }, 2000);
    }

    // Donation Form Handling
    const donationForm = document.getElementById('donation-form');
    if (donationForm) {
        donationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const connectBtn = document.getElementById('connect-wallet');
            if (!connectBtn.classList.contains('connected')) {
                showNotification('Por favor, conecte sua carteira primeiro', 'error');
                openModal('wallet-modal');
                return;
            }
            
            const ethAmount = this.querySelector('input[type="number"]').value;
            const message = this.querySelector('textarea').value;
            
            if (!ethAmount || ethAmount <= 0) {
                showNotification('Por favor, insira um valor válido', 'error');
                return;
            }
            
            simulateDonation(ethAmount, message);
        });
    }

    function simulateDonation(amount, message) {
        const donateBtn = document.getElementById('donate-btn');
        const originalText = donateBtn.innerHTML;
        
        donateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processando...';
        donateBtn.disabled = true;
        
        setTimeout(() => {
            // Update total donations
            const totalDonationsEl = document.getElementById('total-donations');
            const currentTotal = parseFloat(totalDonationsEl.textContent.replace(' ETH', ''));
            const newTotal = (currentTotal + parseFloat(amount)).toFixed(3);
            totalDonationsEl.textContent = newTotal + ' ETH';
            
            donateBtn.innerHTML = originalText;
            donateBtn.disabled = false;
            
            showNotification(`Doação de ${amount} ETH realizada com sucesso!`, 'success');
            
            // Reset form
            document.getElementById('donation-form').reset();
        }, 3000);
    }

    // Schedule Form Handling
    const scheduleForm = document.getElementById('schedule-form');
    if (scheduleForm) {
        scheduleForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('nome') || this.querySelector('input[type="text"]').value;
            const email = formData.get('email') || this.querySelector('input[type="email"]').value;
            const ceremony = formData.get('cerimonia') || this.querySelector('select').value;
            
            if (!name || !email || !ceremony) {
                showNotification('Por favor, preencha todos os campos', 'error');
                return;
            }
            
            simulateScheduling(name, email, ceremony);
        });
    }

    function simulateScheduling(name, email, ceremony) {
        const submitBtn = scheduleForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Agendando...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            closeModal('schedule-modal');
            showNotification(`Agendamento confirmado para ${ceremony}!`, 'success');
            
            scheduleForm.reset();
        }, 2000);
    }

    // Notification System
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${getNotificationIcon(type)}"></i>
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add styles for notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: '3000',
            padding: '16px',
            backgroundColor: getNotificationColor(type),
            color: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease-in-out',
            maxWidth: '350px'
        });
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);
        
        // Close functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => removeNotification(notification));
        
        // Auto remove after 5 seconds
        setTimeout(() => removeNotification(notification), 5000);
    }

    function getNotificationIcon(type) {
        switch(type) {
            case 'success': return 'check-circle';
            case 'error': return 'exclamation-circle';
            case 'warning': return 'exclamation-triangle';
            default: return 'info-circle';
        }
    }

    function getNotificationColor(type) {
        switch(type) {
            case 'success': return '#10B981';
            case 'error': return '#EF4444';
            case 'warning': return '#F59E0B';
            default: return '#3B82F6';
        }
    }

    function removeNotification(notification) {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }

    // Create Church Button
    const createChurchBtn = document.getElementById('create-church-btn');
    if (createChurchBtn) {
        createChurchBtn.addEventListener('click', function() {
            showNotification('Funcionalidade em desenvolvimento. Entre em contato conosco!', 'info');
        });
    }

    // Statistics Animation
    function animateStats() {
        const statValues = document.querySelectorAll('.stat-value');
        
        statValues.forEach(stat => {
            const text = stat.textContent;
            const numMatch = text.match(/[\d.]+/);
            if (numMatch) {
                const finalValue = parseFloat(numMatch[0]);
                const suffix = text.replace(/[\d.]+/, '');
                let currentValue = 0;
                const increment = finalValue / 50;
                const timer = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        currentValue = finalValue;
                        clearInterval(timer);
                    }
                    stat.textContent = currentValue.toFixed(1) + suffix;
                }, 50);
            }
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('stats')) {
                    animateStats();
                }
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.value-card, .ceremony-card, .tool-item, .stats');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Keyboard Navigation
    document.addEventListener('keydown', function(e) {
        // Close modal with Escape key
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.modal:not(.hidden)');
            if (openModal) {
                closeModal(openModal.id);
            }
        }
        
        // Toggle mobile menu with Space when nav toggle is focused
        if (e.key === ' ' && document.activeElement === navToggle) {
            e.preventDefault();
            navMenu.classList.toggle('active');
        }
    });

    // Form Validation Enhancement
    const formInputs = document.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateInput(this);
        });
        
        input.addEventListener('input', function() {
            clearValidationError(this);
        });
    });

    function validateInput(input) {
        const isValid = input.checkValidity();
        if (!isValid) {
            showInputError(input, input.validationMessage);
        } else {
            clearValidationError(input);
        }
        return isValid;
    }

    function showInputError(input, message) {
        clearValidationError(input);
        
        const errorElement = document.createElement('div');
        errorElement.className = 'input-error';
        errorElement.textContent = message;
        errorElement.style.cssText = `
            color: var(--color-error);
            font-size: var(--font-size-sm);
            margin-top: var(--space-4);
        `;
        
        input.style.borderColor = 'var(--color-error)';
        input.parentNode.appendChild(errorElement);
    }

    function clearValidationError(input) {
        const errorElement = input.parentNode.querySelector('.input-error');
        if (errorElement) {
            errorElement.remove();
        }
        input.style.borderColor = '';
    }

    // Theme Detection and Adaptation
    function detectTheme() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }

    // Listen for theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', detectTheme);
    detectTheme();

    // Initialize tooltips for better UX
    function initTooltips() {
        const tooltipElements = document.querySelectorAll('[title]');
        tooltipElements.forEach(element => {
            element.addEventListener('mouseenter', showTooltip);
            element.addEventListener('mouseleave', hideTooltip);
        });
    }

    function showTooltip(e) {
        const text = e.target.getAttribute('title');
        e.target.setAttribute('data-original-title', text);
        e.target.removeAttribute('title');
        
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = text;
        tooltip.style.cssText = `
            position: absolute;
            background: var(--color-charcoal-800);
            color: var(--color-cream-50);
            padding: var(--space-8) var(--space-12);
            border-radius: var(--radius-sm);
            font-size: var(--font-size-sm);
            z-index: 1000;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.2s ease;
        `;
        
        document.body.appendChild(tooltip);
        
        const rect = e.target.getBoundingClientRect();
        tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
        tooltip.style.top = (rect.top - tooltip.offsetHeight - 8) + 'px';
        
        setTimeout(() => tooltip.style.opacity = '1', 10);
        e.target._tooltip = tooltip;
    }

    function hideTooltip(e) {
        const tooltip = e.target._tooltip;
        if (tooltip) {
            tooltip.remove();
            delete e.target._tooltip;
        }
        
        const originalTitle = e.target.getAttribute('data-original-title');
        if (originalTitle) {
            e.target.setAttribute('title', originalTitle);
            e.target.removeAttribute('data-original-title');
        }
    }

    initTooltips();

    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Debounced scroll handler for performance
    const debouncedScrollHandler = debounce(function() {
        const scrolled = window.scrollY;
        const rate = scrolled * -0.5;
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground) {
            heroBackground.style.transform = `translate3d(0, ${rate}px, 0)`;
        }
    }, 10);

    window.addEventListener('scroll', debouncedScrollHandler);

    console.log('Govinda Systems Church DAO - Sistema inicializado com sucesso! 🙏');
});