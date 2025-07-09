
// Datos de productos
const products = [
    {
        id: 1,
        name: "SHEEP CURSED",
        price: 500,
        images: [
            "images/hoodie negro frente.jpg",
            "images/HOODIE BLANCA FRENTE.jpg",
            "images/HOODIE SHEEP ROJO ESPALDA.jpg",
            "images/HOODIE BLANCA SHEEP ROJO.png",
            "images/hoodie sheep morado.jpg",
            "images/HOODIE BLANCA SHEEP MORADO.jpg",
            "images/hoodie sheep gris.jpg",
            "images/HOODIE BLANCA SHEEP GRIS.jpg"
        ],
        category: "Chamarras sin cierre",
        baseColors: ["Negro", "Blanco"],
        designColors: ["Rojo", "Morado", "Gris",]
    },
    {
        id: 2,
        name: "DEATH SKULL",
        price: 500,
        images: [
            "images/hoodie negro frente.jpg",
            "images/HOODIE BLANCA FRENTE.jpg",
            "images/hoodie skull rojo.jpg",
            "images/hoodie blanca skull rojo.png",
            "images/hoodie skull morado.jpg",
            "images/hoodie blanca skull morado.png",
            "images/hoodie skull gris.jpg",
            "images/HOODIE BLANCA skull GRIS.jpg"
        ],
        category: "Chamarras sin cierre",
        baseColors: ["Negro", "Blanco"],
        designColors: ["Rojo", "Morado", "Gris"]
    },
    {
        id: 3,
        name: "SHEEP CURSED",
        price: 350,
        images: [
            "images/tshirt negra frente.jpg",
            "images/tshirt blanca frente.jpg",
            "images/tshirt negra sheep rojo.jpg",
            "images/tshirt blanca sheep rojo.jpg",
            "images/tshirt negra sheep morado.jpg",
            "images/tshirt blanca sheep morado.jpg",
            "images/tshirt negro sheep gris.jpg",
            "images/tshirt blanca sheep gris.jpg"
        ],
        category: "Manga Corta Regular Fit",
        baseColors: ["Blanco", "Negro"],
        designColors: ["Rojo", "Morado", "Gris"]
    },
    {
        id: 4,
        name: "DEATH SKULL",
        price: 350,
        images: [
            "images/tshirt negra frente.jpg",
            "images/tshirt blanca frente.jpg",
            "images/tshirt skull roja reverso.jpg",
            "images/tshirt blanca skull rojo.jpg",
            "images/tshirt skull morada reverso.jpg",
            "images/tshirt blanca skull morado.jpg",
            "images/TSHIRT NEGRA SKULL REVERSO.jpg",
            "images/tshirt blanca skull gris.jpg"
        ],
        category: "Manga Corta Regular Fit",
        baseColors: ["Blanco", "Negro"],
        designColors: ["Rojo", "Morado", "Gris"]
    },
    {
        id: 5,
        name: "SHEEP CURSED",
        price: 380,
        images: [
            "images/longsleeve negro frente.jpg",
            "images/longsleev blanco frente.jpg",
            "images/longsleeve negro sheep rojo.jpg",
            "images/longsleeve blanca sheep rojo.jpg",
            "images/longsleeve negro sheep morado.jpg",
            "images/longsleeve blanca sheep morado.jpg",
            "images/longsleeve negro sheep gris.jpg",
            "images/longsleeve blanco sheep gris.jpg"
        ],
        category: "Manga Larga",
        baseColors: ["Blanco", "Negro"],
        designColors: ["Rojo", "Morado", "Gris"]
    },
    {
        id: 6,
        name: "DEATH SKULL",
        price: 380,
        images: [
            "images/longsleeve negro frente.jpg",
            "images/longsleev blanco frente.jpg",
            "images/longsleeve negro skull rojo.jpg",
            "images/longsleeve blanca skull rojo.jpg",
            "images/longsleeve negro skull morado.jpg",
            "images/longsleeve blanca skull morada.jpg",
            "images/long sleeve negro skull gris.jpg",
            "images/longsleeve blanca skull gris.jpg"
        ],
        category: "Manga Larga",
        baseColors: ["Blanco", "Negro"],
        designColors: ["Rojo", "Morado", "Gris"]
    },
    {
        id: 7,
        name: "ESSENTIALS",
        price: 300,
        images: [
            "images/gorra frente.jpg",
            "images/gorra reverso.jpg"
        ],
        category: "Gorra Curva",
        baseColors: ["Negro"],
        designColors: ["Blanco"]
    },
    {
        id: 11,
        name: "ESSENTIALS",
        price: 300,
        images: [
            "images/GORRA PLANA FRENTE.jpg",
            "images/gorra reverso.jpg"
        ],
        category: "Gorra Plana",
        baseColors: ["Negro"],
        designColors: ["Blanco"]
    },
    {
        id: 8,
        name: "ESSENTIALS",
        price: 380,
        images: [
            "images/OVERSIZE NEGRA ESSENTIALS.jpg",
            "images/OVERSIZE BLANCO ESSENTIALS.jpg"
        ],
        category: "Playera Oversize",
        baseColors: ["Negro", "Blanco"],
        designColors: ["Blanco", "Negro"]
    },
    {
        id: 9,
        name: "SHEEP CURSED",
        price: 600,
        images: [
            "images/hoodie negra con cierre frente.jpg",
            "images/CHAMARRA NEGRA SHHEP ROJO.jpg",
            "images/CHAMARRA NEGRA SHEEP MORADO.jpg",
            "images/CHAMARRA NEGRA SHEEP GRIS.jpg"   
        ],
        category: "Chamarras con cierre",
        baseColors: ["Negro",],
        designColors: ["Rojo", "Morado", "Gris"]
    },
    {
        id: 10,
        name: "DEATH SKULL",
        price: 600,
        images: [
            "images/hoodie negra con cierre frente.jpg",
            "images/CHAMARRA NEGRA SKULL ROJO.jpg",
            "images/CHAMARRA NEGRA SKULL MORADO.jpg",
            "images/CHAMARRA NEGRA SKULL GRIS.jpg"   
        ],
        category: "Chamarras con cierre",
        baseColors: ["Negro",],
        designColors: ["Rojo", "Morado", "Gris"]
    }

];

// Estado global para manejar las cards de productos
let productStates = {};

// Variable global para controlar si las compras están habilitadas
let purchasesEnabled = false;

// Funciones de utilidad
function getColorClass(color) {
    const colorMap = {
        'Blanco': 'color-blanco',
        'Negro': 'color-negro',
        'Rojo': 'color-rojo',
        'Morado': 'color-morado',
        'Gris': 'color-Gris'
    };
    return colorMap[color] || 'color-negro';
}


// Función para abrir WhatsApp
function openWhatsApp(message) {
    const whatsappUrl = `https://wa.me/+5215564473361?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Función para comprar producto
function buyProduct(productId) {
    // Verificar si las compras están habilitadas
    if (!purchasesEnabled) {
        // Mostrar mensaje de que el lanzamiento aún no está disponible
        alert('🔮 ¡El nuevo drop aún no está disponible! Espera a que termine la cuenta regresiva para realizar tu pedido.');
        return;
    }
    const state = productStates[productId];
    const product = products.find(p => p.id === productId);
    
    const message = `¡Hola! Me interesa el producto: *${product.name}* - $${product.price}
    
📋 *Detalles del pedido:*
• Color base: ${state.selectedBaseColor}
• Color de diseño: ${state.selectedDesignColor}
• Categoría: ${product.category}

¿Podrías confirmarme la disponibilidad de esta combinación de colores?`;
    
    openWhatsApp(message);
}

// Función para cambiar imagen del carousel
function changeImage(productId, direction) {
    const state = productStates[productId];
    const product = products.find(p => p.id === productId);
    
    if (direction === 'prev') {
        state.currentImageIndex = state.currentImageIndex === 0 ? product.images.length - 1 : state.currentImageIndex - 1;
    } else {
        state.currentImageIndex = state.currentImageIndex === product.images.length - 1 ? 0 : state.currentImageIndex + 1;
    }
    
    updateProductCard(productId);
}

// Función para ir a imagen específica
function goToImage(productId, index) {
    productStates[productId].currentImageIndex = index;
    updateProductCard(productId);
}

// Función para cambiar color
function changeColor(productId, colorType, color) {
    const state = productStates[productId];
    
    if (colorType === 'base') {
        state.selectedBaseColor = color;
    } else {
        state.selectedDesignColor = color;
    }
    
    updateProductCard(productId);
}

// Función para actualizar la card del producto
function updateProductCard(productId) {
    const state = productStates[productId];
    const product = products.find(p => p.id === productId);
    
    // Actualizar imagen
    const img = document.querySelector(`#product-${productId} .product-image`);
    if (img) {
        img.src = product.images[state.currentImageIndex];
    }
    
    
    
    // Actualizar indicadores de carousel
    const indicators = document.querySelectorAll(`#product-${productId} .carousel-indicator`);
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === state.currentImageIndex);
    });
    
    // Actualizar colores seleccionados en el texto
    const baseColorText = document.querySelector(`#product-${productId} .base-color-selected`);
    const designColorText = document.querySelector(`#product-${productId} .design-color-selected`);
    if (baseColorText) baseColorText.textContent = state.selectedBaseColor;
    if (designColorText) designColorText.textContent = state.selectedDesignColor;
    
    // Actualizar botones de color
    const baseColorButtons = document.querySelectorAll(`#product-${productId} .base-color-option`);
    baseColorButtons.forEach(btn => {
        btn.classList.toggle('selected', btn.dataset.color === state.selectedBaseColor);
    });
    
    const designColorButtons = document.querySelectorAll(`#product-${productId} .design-color-option`);
    designColorButtons.forEach(btn => {
        btn.classList.toggle('selected', btn.dataset.color === state.selectedDesignColor);
    });
    
    // Actualizar botón de compra
    const buyButton = document.querySelector(`#product-${productId} .buy-button`);
    if (buyButton) {
        buyButton.innerHTML = `
            <i class="fas fa-shopping-cart"></i>
            Comprar (${state.selectedBaseColor} + ${state.selectedDesignColor})
        `;
    }
    
    // Actualizar indicadores de color en la imagen
    const colorIndicators = document.querySelector(`#product-${productId} .color-indicators`);
    if (colorIndicators) {
        colorIndicators.innerHTML = `
            <div class="color-indicator ${getColorClass(state.selectedBaseColor)}" title="Base: ${state.selectedBaseColor}"></div>
            <div class="color-indicator ${getColorClass(state.selectedDesignColor)}" title="Diseño: ${state.selectedDesignColor}"></div>
        `;
    }
}

// Función para crear una card de producto
function createProductCard(product) {
    // Inicializar estado del producto
    productStates[product.id] = {
        currentImageIndex: 0,
        selectedBaseColor: product.baseColors[0],
        selectedDesignColor: product.designColors[0]
    };
    
    const state = productStates[product.id];
    
    return `
        <div class="product-card" id="product-${product.id}">
            <div class="product-image-container">
                <img src="${product.images[0]}" alt="${product.name}" class="product-image">
                
    
                
                <div class="category-badge">${product.category}</div>
                
                <div class="color-indicators">
                    <div class="color-indicator ${getColorClass(state.selectedBaseColor)}" title="Base: ${state.selectedBaseColor}"></div>
                    <div class="color-indicator ${getColorClass(state.selectedDesignColor)}" title="Diseño: ${state.selectedDesignColor}"></div>
                </div>
                
                ${product.images.length > 1 ? `
                    <div class="carousel-controls">
                        <button class="carousel-btn prev" onclick="changeImage(${product.id}, 'prev')">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <button class="carousel-btn next" onclick="changeImage(${product.id}, 'next')">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                        <div class="carousel-indicators">
                            ${product.images.map((_, index) => `
                                <button class="carousel-indicator ${index === 0 ? 'active' : ''}" 
                                        onclick="goToImage(${product.id}, ${index})"></button>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
            
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                
                <div class="product-price-section">
                    <span class="product-price">$${product.price}</span>
                    <div class="selected-colors">
                        <span class="base-color-selected">${state.selectedBaseColor}</span> + 
                        <span class="design-color-selected">${state.selectedDesignColor}</span>
                    </div>
                </div>
                
                <div class="color-selectors">
                    <div class="color-selector">
                        <label class="color-label">
                            Color base: <span class="selected-color base-color-selected">${state.selectedBaseColor}</span>
                        </label>
                        <div class="color-options">
                            ${product.baseColors.map(color => `
                                <button class="color-option base-color-option ${getColorClass(color)} ${color === state.selectedBaseColor ? 'selected' : ''}" 
                                        data-color="${color}"
                                        onclick="changeColor(${product.id}, 'base', '${color}')"
                                        title="${color}"></button>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="color-selector">
                        <label class="color-label">
                            Color diseño: <span class="selected-color design-color-selected">${state.selectedDesignColor}</span>
                        </label>
                        <div class="color-options">
                            ${product.designColors.map(color => `
                                <button class="color-option design-color-option ${getColorClass(color)} ${color === state.selectedDesignColor ? 'selected' : ''}" 
                                        data-color="${color}"
                                        onclick="changeColor(${product.id}, 'design', '${color}')"
                                        title="${color}"></button>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <button class="btn btn-success buy-button" onclick="buyProduct(${product.id})">
                    <i class="fas fa-shopping-cart"></i>
                    Comprar (${state.selectedBaseColor} + ${state.selectedDesignColor})
                </button>
            </div>
        </div>
    `;
}

// Función para toggle del menú móvil
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuToggle = document.querySelector('.menu-toggle i');
    
    if (mobileNav && menuToggle) {
        mobileNav.classList.toggle('active');
        
        if (mobileNav.classList.contains('active')) {
            menuToggle.className = 'fas fa-times';
        } else {
            menuToggle.className = 'fas fa-bars';
        }
    }
}

function closeMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuToggle = document.querySelector('.menu-toggle i');
    
    if (mobileNav && menuToggle) {
        mobileNav.classList.remove('active');
        menuToggle.className = 'fas fa-bars';
    }
}
function initCountdown() {
    // Establecer la fecha de lanzamiento (cambiar por la fecha real)
    const launchDate = new Date('2025-07-14T23:59:59').getTime();
    
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const messageEl = document.getElementById('countdownMessage');
    
    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = launchDate - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
            if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
            if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
            if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
        } else {
            clearInterval(countdown);
            // HABILITAR COMPRAS CUANDO TERMINE EL COUNTDOWN
            purchasesEnabled = true;
            updateAllPurchaseButtons();
            if (messageEl) {
                messageEl.textContent = '¡El nuevo drop ya está disponible!';
                messageEl.classList.add('show');
            }
            // Ocultar los números cuando termine
            if (daysEl) daysEl.textContent = '00';
            if (hoursEl) hoursEl.textContent = '00';
            if (minutesEl) minutesEl.textContent = '00';
            if (secondsEl) secondsEl.textContent = '00';
        }
    }, 1000);
}

// Smooth scroll para navegación
document.addEventListener('DOMContentLoaded', function() {
       // Inicializar cuenta regresiva
    initCountdown();
    
    // Generar productos
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
    }
    
    // Agregar event listeners para navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Cerrar menú móvil al hacer scroll
    window.addEventListener('scroll', function() {
        if (window.innerWidth <= 768) {
            closeMobileMenu();
        }
    });
});
