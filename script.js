/**
 * Muskan Oral and Dental Care - Production JavaScript
 * Lead Practitioner: Dr. Zakir Hussain (Hazaribagh, Jharkhand)
 * Features: Mobile Drawer, Before/After Slider, Accordion FAQ, Dynamic WhatsApp Deep-linking
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Configurable Clinic Phone Number (WhatsApp Destination)
  const CLINIC_WHATSAPP_PHONE = '919431336000';

  /* ==========================================================================
     1. Sticky Navbar & Active Navigation Highlighting
     ========================================================================== */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active Section Tracking
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ==========================================================================
     2. Mobile Off-Canvas Drawer Navigation
     ========================================================================== */
  const drawerToggle = document.getElementById('drawer-toggle');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  const openDrawer = () => {
    mobileDrawer.classList.add('active');
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    drawerToggle.setAttribute('aria-expanded', 'true');
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove('active');
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
    drawerToggle.setAttribute('aria-expanded', 'false');
  };

  if (drawerToggle) {
    drawerToggle.addEventListener('click', openDrawer);
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeDrawer);
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', closeDrawer);
  }

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('active')) {
      closeDrawer();
    }
  });

  /* ==========================================================================
     3. Interactive Before / After Comparison Sliders
     ========================================================================== */
  const baContainers = document.querySelectorAll('.ba-slider-container');

  baContainers.forEach(container => {
    const rangeInput = container.querySelector('.ba-range-input');
    const beforeLayer = container.querySelector('.ba-before');
    const handle = container.querySelector('.ba-slider-handle');

    if (!rangeInput || !beforeLayer || !handle) return;

    const updateSliderPosition = (value) => {
      beforeLayer.style.width = `${value}%`;
      handle.style.left = `${value}%`;
    };

    rangeInput.addEventListener('input', (e) => {
      updateSliderPosition(e.target.value);
    });

    // Initial render
    updateSliderPosition(rangeInput.value);
  });

  /* ==========================================================================
     4. Frequently Asked Questions (Accordion FAQ)
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const toggleIcon = item.querySelector('.faq-icon-toggle');

    if (questionBtn && answer) {
      // Set initial open state if class has active
      if (item.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        if (toggleIcon) toggleIcon.textContent = '−';
        questionBtn.setAttribute('aria-expanded', 'true');
      } else {
        answer.style.maxHeight = '0px';
        if (toggleIcon) toggleIcon.textContent = '+';
        questionBtn.setAttribute('aria-expanded', 'false');
      }

      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Optional: close other accordion items for clean single accordion view
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
            const otherAnswer = otherItem.querySelector('.faq-answer');
            const otherIcon = otherItem.querySelector('.faq-icon-toggle');
            const otherBtn = otherItem.querySelector('.faq-question');
            if (otherAnswer) otherAnswer.style.maxHeight = '0px';
            if (otherIcon) otherIcon.textContent = '+';
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        if (isActive) {
          item.classList.remove('active');
          answer.style.maxHeight = '0px';
          if (toggleIcon) toggleIcon.textContent = '+';
          questionBtn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
          if (toggleIcon) toggleIcon.textContent = '−';
          questionBtn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  /* ==========================================================================
     5. Interactive WhatsApp Appointment Form Submission
     ========================================================================== */
  const appointmentForm = document.getElementById('whatsapp-appointment-form');

  if (appointmentForm) {
    // Set default date to today's or tomorrow's date
    const dateInput = document.getElementById('patient-date');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
      dateInput.value = today;
    }

    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('patient-name').value.trim();
      const service = document.getElementById('patient-service').value;
      const date = document.getElementById('patient-date').value;
      const slot = document.getElementById('patient-slot').value;
      const notes = document.getElementById('patient-notes').value.trim();

      if (!name) {
        alert('Please enter your name to proceed with booking.');
        return;
      }

      // Format custom message string for Dr. Zakir Hussain
      let message = `*🦷 Muskan Oral and Dental Care - Appointment Booking*\n\n`;
      message += `Hello *Dr. Zakir Hussain*,\nI would like to schedule a clinic appointment.\n\n`;
      message += `📋 *Patient Name:* ${name}\n`;
      message += `🦷 *Requested Service:* ${service}\n`;
      if (date) {
        message += `📅 *Preferred Date:* ${date}\n`;
      }
      message += `⏰ *Preferred Slot:* ${slot}\n`;
      if (notes) {
        message += `📝 *Notes/Symptoms:* ${notes}\n`;
      }
      message += `\nPlease confirm my appointment slot. Thank you!`;

      // Generate WhatsApp URL
      const encodedMessage = encodeURIComponent(message);
      const waUrl = `https://wa.me/${CLINIC_WHATSAPP_PHONE}?text=${encodedMessage}`;

      // Open WhatsApp chat in new window
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }

  /* ==========================================================================
     6. Smooth Anchor Scrolling for Internal Links
     ========================================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

});
