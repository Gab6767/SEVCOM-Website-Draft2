/* =========================================
   1. HERO BACKGROUND SLIDER (_chg)
   ========================================= */
// document.addEventListener('DOMContentLoaded', function() {
//     // Updated selectors to match _chg suffix
//     const hero = document.querySelector('.hero_chg');
//     const pageCounter = document.querySelector('.page-counter_chg');
//     const nextHeadline = document.querySelector('.next-headline_chg');
//     const arrows = document.querySelectorAll('.arrow_chg');

//     if (!hero || !pageCounter || !nextHeadline) return;

//     const backgrounds = [
//         {
//             image: 'assets/Slide_1.jpg',
//             headline: 'Brokage'
//         },
//         {
//             image: 'assets/Slide_2.jpg',
//             headline: 'Trading'
//         },
//         {
//             image: 'assets/Slide_3.jpg',
//             headline: 'General Services'
//         },
//         {
//             image: 'assets/Slide_4.jpg',
//             headline: 'Manpower'
//         }
//     ];

//     let currentIndex = 0;

// function updateHero(index) {
//     // FORCE reset both classes
//     hero.classList.remove('fade-in', 'fade-out');

//     // Force reflow (this is the missing piece)
//     void hero.offsetWidth;

//     // Start fade out
//     hero.classList.add('fade-out');

//     setTimeout(() => {
//         hero.style.backgroundImage = `url('${backgrounds[index].image}')`;

//         pageCounter.textContent = `${index + 1} / ${backgrounds.length}`;

//         const nextIndex = (index + 1) % backgrounds.length;
//         nextHeadline.textContent = backgrounds[nextIndex].headline;

//         // Switch to fade-in
//         hero.classList.remove('fade-out');
//         hero.classList.add('fade-in');

//     }, 100);
// }

//     arrows.forEach((arrow, index) => {
//         arrow.addEventListener('click', function() {
//             // Prevent double-clicking during transition
//             arrow.style.pointerEvents = 'none';
//             setTimeout(() => { arrow.style.pointerEvents = 'auto'; }, 600);
            
//             if (index === 0) { // Left arrow
//                 currentIndex = currentIndex > 0 ? currentIndex - 1 : backgrounds.length - 1;
//             } else { // Right arrow
//                 currentIndex = currentIndex < backgrounds.length - 1 ? currentIndex + 1 : 0;
//             }
//             updateHero(currentIndex);
//         });
//     });

//     updateHero(currentIndex);
// });

// CHANGED
/* =========================================
   1. HERO BACKGROUND SLIDER (_chg)
   ========================================= */
/* =========================================
   1. HERO BACKGROUND SLIDER (_chg)
   ========================================= */
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.hero-slider-track_chg');
    const pageCounter = document.querySelector('.page-counter_chg');
    const nextHeadline = document.querySelector('.next-headline_chg');
    const arrows = document.querySelectorAll('.arrow_chg');

    const backgrounds = [
        { headline: 'Brokage' },
        { headline: 'Trading' },
        { headline: 'Manufacturing' },
        { headline: 'Manpower' }
    ];

    let currentIndex = 0;
    let autoSlideTimer;

    function updateSlider(index) {
        // Slide the track: 0%, -100%, -200%, etc.
        track.style.transform = `translateX(-${index * (400 / backgrounds.length)}%)`;
        
        // Update UI Text
        pageCounter.textContent = `${index + 1} / ${backgrounds.length}`;
        const nextIndex = (index + 1) % backgrounds.length;
        nextHeadline.textContent = backgrounds[nextIndex].headline;
    }

    function startAutoSlide() {
        autoSlideTimer = setInterval(() => {
            currentIndex = (currentIndex + 1) % backgrounds.length;
            updateSlider(currentIndex);
        }, 5000);
    }

    function resetTimer() {
        clearInterval(autoSlideTimer);
        startAutoSlide();
    }

    arrows.forEach((arrow, i) => {
        arrow.addEventListener('click', () => {
            if (i === 0) { // Left
                currentIndex = currentIndex > 0 ? currentIndex - 1 : backgrounds.length - 1;
            } else { // Right
                currentIndex = (currentIndex + 1) % backgrounds.length;
            }
            updateSlider(currentIndex);
            resetTimer();
        });
    });

    startAutoSlide();
});
// 

// /* =========================================
//    2. INTERACTIVE PIE CHART (About Page)
//    ========================================= */
// document.addEventListener('DOMContentLoaded', function() {
//     const pieContainer = document.getElementById('pie-container');
//     if (!pieContainer) return;

//     const sections = [
//         { id: 'content-history', label: 'Our History', color: '#003d82' },
//         { id: 'content-mission', label: 'Mission & Vision', color: '#e74c3c' },
//         { id: 'content-values', label: 'Core Values', color: '#f39c12' },
//         { id: 'content-awards', label: 'Awards', color: '#27ae60' },
//         { id: 'content-stories', label: 'Success Stories', color: '#9b59b6' },
//         { id: 'content-why', label: 'Why Choose Us', color: '#1abc9c' }
//     ];

//     const svgNS = 'http://www.w3.org/2000/svg';
//     const svg = document.createElementNS(svgNS, 'svg');
//     svg.setAttribute('width', '100%');
//     svg.setAttribute('height', '100%');
//     svg.setAttribute('viewBox', '0 0 500 500');
//     pieContainer.appendChild(svg);

//     const centerX = 250;
//     const centerY = 250;
//     const radius = 200;

//     let hoveredIndex = -1;
//     const normalAngle = 360 / sections.length;
//     const expandedAngle = 100; // Slightly reduced for better fit
//     const compressedAngle = (360 - expandedAngle) / (sections.length - 1);

//     function createPath(startAngle, endAngle, color) {
//         const startAngleRad = ((startAngle - 90) * Math.PI) / 180;
//         const endAngleRad = ((endAngle - 90) * Math.PI) / 180;
//         const x1 = centerX + radius * Math.cos(startAngleRad);
//         const y1 = centerY + radius * Math.sin(startAngleRad);
//         const x2 = centerX + radius * Math.cos(endAngleRad);
//         const y2 = centerY + radius * Math.sin(endAngleRad);
//         const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
//         return `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
//     }

//     function updatePie() {
//         svg.innerHTML = '';
//         let currentAngle = 0;

//         sections.forEach((section, index) => {
//             const angle = hoveredIndex === index ? expandedAngle : (hoveredIndex === -1 ? normalAngle : compressedAngle);
            
//             const path = document.createElementNS(svgNS, 'path');
//             path.setAttribute('d', createPath(currentAngle, currentAngle + angle, section.color));
//             path.setAttribute('fill', section.color);
//             path.setAttribute('stroke', 'white');
//             path.setAttribute('stroke-width', '2');
//             path.style.cursor = 'pointer';
//             path.style.transition = 'all 0.3s ease';

//             path.addEventListener('mouseenter', () => { hoveredIndex = index; updatePie(); });
//             path.addEventListener('mouseleave', () => { hoveredIndex = -1; updatePie(); });
            
//             path.addEventListener('click', () => {
//                 const allSections = document.querySelectorAll('.hidden-content');
//                 allSections.forEach(el => el.classList.remove('active'));

//                 const sectionEl = document.getElementById(section.id);
//                 if (sectionEl) {
//                     sectionEl.classList.add('active');
//                     window.scrollTo({ top: sectionEl.offsetTop - 100, behavior: 'smooth' });
//                 }
//             });

//             svg.appendChild(path);

//             // Labels
//             const textAngle = currentAngle + angle / 2;
//             const textAngleRad = ((textAngle - 90) * Math.PI) / 180;
//             const textX = centerX + (radius * 0.65) * Math.cos(textAngleRad);
//             const textY = centerY + (radius * 0.65) * Math.sin(textAngleRad);

//             const text = document.createElementNS(svgNS, 'text');
//             text.setAttribute('x', textX);
//             text.setAttribute('y', textY);
//             text.setAttribute('text-anchor', 'middle');
//             text.setAttribute('fill', 'white');
//             text.setAttribute('font-size', '12px');
//             text.setAttribute('font-weight', 'bold');
//             text.setAttribute('pointer-events', 'none');
//             text.textContent = section.label;
//             svg.appendChild(text);

//             currentAngle += angle;
//         });
//     }

//     updatePie();

//     // Set initial view
//     const firstSection = document.getElementById(sections[0].id);
//     if (firstSection) firstSection.classList.add('active');
// });

/* =========================================
   3. MOBILE NAVIGATION
   ========================================= */
// const menuBtn = document.getElementById('menuBtn');
// const navMenu = document.getElementById('navMenu');

// if (menuBtn && navMenu) {
//     menuBtn.addEventListener('click', (e) => {
//         navMenu.classList.toggle('active');
//         e.stopPropagation();
//     });

//     document.addEventListener('click', (e) => {
//         if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
//             navMenu.classList.remove('active');
//         }
//     });
// }

// prev
        // let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // function updateCartCount() {
        //     const count = cart.reduce((total, item) => total + item.quantity, 0);
        //     document.getElementById('cartCount').textContent = count;
        //     document.getElementById('cartItemCount').textContent = count;
        // }

        // function updateCartDisplay() {
        //     const cartItems = document.getElementById('cartItems');
        //     const cartFooter = document.getElementById('cartFooter');
        //     const cartTotal = document.getElementById('cartTotal');

        //     cartItems.innerHTML = '';
        //     let total = 0;

        //     if (cart.length === 0) {
        //         cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        //         cartFooter.style.display = 'none';
        //         return;
        //     }

        //     cart.forEach((item, index) => {
        //         const itemTotal = item.price * item.quantity;
        //         total += itemTotal;
        //         const itemElement = document.createElement('div');
        //         itemElement.className = 'cart-item';
        //         itemElement.innerHTML = `
        //             <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        //             <div class="cart-item-info">
        //                 <h4 class="cart-item-name">${item.name}</h4>
        //                 <div class="cart-item-price">₱${item.price}</div>
        //                 <div class="cart-item-quantity">
        //                     <button class="quantity-btn" onclick="changeQuantity(${index}, -1)">-</button>
        //                     <span>${item.quantity}</span>
        //                     <button class="quantity-btn" onclick="changeQuantity(${index}, 1)">+</button>
        //                 </div>
        //             </div>
        //             <button class="remove-btn" onclick="removeFromCart(${index})">×</button>
        //         `;
        //         cartItems.appendChild(itemElement);
        //     });

        //     cartTotal.textContent = `₱${total}`;
        //     cartFooter.style.display = 'block';
        // }

        // function changeQuantity(index, change) {
        //     cart[index].quantity += change;
        //     if (cart[index].quantity <= 0) {
        //         cart.splice(index, 1);
        //     }
        //     localStorage.setItem('cart', JSON.stringify(cart));
        //     updateCartCount();
        //     updateCartDisplay();
        // }

        // function removeFromCart(index) {
        //     cart.splice(index, 1);
        //     localStorage.setItem('cart', JSON.stringify(cart));
        //     updateCartCount();
        //     updateCartDisplay();
        // }

        // function showCart() {
        //     document.getElementById('cartOverlay').style.display = 'block';
        //     document.getElementById('cartSidebar').classList.add('active');
        // }

        // function hideCart() {
        //     document.getElementById('cartOverlay').style.display = 'none';
        //     document.getElementById('cartSidebar').classList.remove('active');
        // }

        // document.addEventListener('DOMContentLoaded', function() {
        //     updateCartCount();
        //     updateCartDisplay();

        //     document.querySelector('.cart-btn').addEventListener('click', showCart);

        //     document.getElementById('closeCart').addEventListener('click', hideCart);
        //     document.getElementById('cartOverlay').addEventListener('click', hideCart);
        //     document.getElementById('continueShopping').addEventListener('click', hideCart);
        // });