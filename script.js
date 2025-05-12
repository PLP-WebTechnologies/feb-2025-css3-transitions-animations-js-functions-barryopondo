document.addEventListener('DOMContentLoaded', () => {
    const changeTextButton = document.getElementById('change-text-button');
    const introText = document.getElementById('intro-text');
    const dynamicContent = document.getElementById('dynamic-content');
    const addElementButton = document.getElementById('add-element-button');
    const removeElementButton = document.getElementById('remove-element-button');
    let elementCount = 0;

    // 1. Event Handling
    changeTextButton.addEventListener('click', () => {
        introText.textContent = 'The text has been changed dynamically!';
        introText.style.color = '#2196F3';
        introText.style.fontSize = '1.2em';
    });

    // Hover effect
    changeTextButton.addEventListener('mouseenter', () => {
        changeTextButton.style.backgroundColor = '#45a049';
    });
    changeTextButton.addEventListener('mouseleave', () => {
        changeTextButton.style.backgroundColor = '#4CAF50';
    });

    // Keypress detection
    document.addEventListener('keydown', (event) => {
        console.log('Key pressed:', event.key);
        if (event.key === 'Enter') {
            alert('Enter key pressed!');
        }
    });

    // Double click
    changeTextButton.addEventListener('dblclick', () => {
        alert('Double Clicked!');
    });

    // 2. Interactive Elements
    addElementButton.addEventListener('click', () => {
        elementCount++;
        const newElement = document.createElement('p');
        newElement.textContent = `Dynamically added element ${elementCount}`;
        newElement.style.backgroundColor = '#FFEB3B';
        newElement.style.padding = '10px';
        newElement.style.margin = '10px 0';
        newElement.classList.add('dynamic-element');
        dynamicContent.appendChild(newElement);
    });

    removeElementButton.addEventListener('click', () => {
        const dynamicElements = document.querySelectorAll('.dynamic-element');
        if (dynamicElements.length > 0) {
            dynamicElements[dynamicElements.length - 1].remove();
        }
    });

    // Image gallery
    const galleryContainer = document.querySelector('.gallery-container');
    const images = galleryContainer.querySelectorAll('img');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    let currentImageIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    }

    showImage(currentImageIndex);
    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);

    // Tabbed content
    const tabButtons = document.querySelectorAll('.tab-buttons button');
    const tabContents = document.querySelectorAll('.tab-content');

    function showTab(tabId) {
        tabButtons.forEach(button => button.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
        document.getElementById(tabId).classList.add('active');
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            showTab(button.dataset.tab);
        });
    });
    showTab('tab1');

    // Form validation
    const form = document.getElementById('my-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const formResults = document.getElementById('form-results');

    function validateName() {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            return false;
        }
        nameError.textContent = '';
        return true;
    }

    function validateEmail() {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Invalid email format';
            return false;
        }
        emailError.textContent = '';
        return true;
    }

    function validatePassword() {
        if (passwordInput.value.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters';
            return false;
        }
        passwordError.textContent = '';
        return true;
    }

    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateName() && validateEmail() && validatePassword()) {
            formResults.textContent = 'Form submitted successfully!';
            form.reset();
        } else {
            formResults.textContent = 'Form submission failed. Please correct the errors.';
        }
    });

    // 3. Local Storage
    const storageNameInput = document.getElementById('storage-name');
    const storageColorInput = document.getElementById('storage-color');
    const savePreferencesButton = document.getElementById('save-preferences');
    const savedPreferencesDisplay = document.getElementById('saved-preferences');

    function loadPreferences() {
        const storedName = localStorage.getItem('userName');
        const storedColor = localStorage.getItem('userColor');

        if (storedName) {
            storageNameInput.value = storedName;
        }
        if (storedColor) {
            storageColorInput.value = storedColor;
        }
        if (storedName && storedColor) {
            savedPreferencesDisplay.textContent = `Welcome back, ${storedName}! Your favorite color is ${storedColor}.`;
        } else if (storedName) {
             savedPreferencesDisplay.textContent = `Welcome back, ${storedName}!`;
        }
    }

    loadPreferences();

    savePreferencesButton.addEventListener('click', () => {
        const name = storageNameInput.value;
        const color = storageColorInput.value;

        localStorage.setItem('userName', name);
        localStorage.setItem('userColor', color);

        savedPreferencesDisplay.textContent = `Preferences saved!  Name: ${name}, Color: ${color}`;
    });

    // 4. Animation
    const animateButton = document.getElementById('animate-button');
    const animatedBox = document.getElementById('animated-box');

    animateButton.addEventListener('click', () => {
        animatedBox.style.animation = 'pulse 2s infinite';
    });
});