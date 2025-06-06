document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('productGrid');
    const addProductForm = document.getElementById('addProductForm');
    const productModal = document.getElementById('productModal');
    const cartModal = document.getElementById('cartModal');
    const checkoutModal = document.getElementById('checkoutModal');
    const profileModal = document.getElementById('profileModal');

    const closeProductModalBtn = document.getElementById('closeProductModal');
    const closeCartModalBtn = document.getElementById('closeCartModal');
    const closeCheckoutModalBtn = document.getElementById('closeCheckoutModal');
    const closeProfileModalBtn = document.getElementById('closeProfileModal');

    const cartIcon = document.getElementById('cartIcon');
    const modalProductImage = document.getElementById('modalProductImage');
    const modalProductName = document.getElementById('modalProductName');
    const modalProductDescription = document.getElementById('modalProductDescription');
    const modalProductPrice = document.getElementById('modalProductPrice');
    const modalAddToCartBtn = document.getElementById('modalAddToCartBtn');
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartTotalElement = document.getElementById('cartTotal');
    const cartCountElement = document.getElementById('cartCount');
    const proceedToCheckoutBtn = document.getElementById('proceedToCheckoutBtn');
    const checkoutModalTotalElement = document.getElementById('checkoutModalTotal');
    const checkoutOrderForm = document.getElementById('checkoutOrderForm');
    
    const heroSection = document.getElementById('hero');
    const catalogSection = document.getElementById('catalog');
    const ordersSection = document.getElementById('orders');
    const adminSection = document.getElementById('add-product-admin');
    const aboutSection = document.getElementById('about');
    const contactSection = document.getElementById('contact');
    
    const ordersContainer = document.getElementById('ordersContainer');
    const navLinks = document.querySelectorAll('header nav ul li a');
    const navProfileLink = document.getElementById('navProfileLink'); 
    
    const profileTabsButtons = document.querySelectorAll('.profile-tabs .tab-button');
    const profileTabContents = document.querySelectorAll('.profile-tab-content');
    const profileDisplayInfoDiv = document.getElementById('profileDisplayInfo');
    const profileEditForm = document.getElementById('profileEditForm');
    const editProfileBtn = document.getElementById('editProfileBtn');
    const cancelEditProfileBtn = document.getElementById('cancelEditProfileBtn');
    const displayFullName = document.getElementById('displayFullName');
    const displayBirthDate = document.getElementById('displayBirthDate');
    const displayEmail = document.getElementById('displayEmail');
    const displayPhone = document.getElementById('displayPhone');
    const profileFullNameInput = document.getElementById('profileFullName');
    const profileBirthDateInput = document.getElementById('profileBirthDate');
    const profileEmailInput = document.getElementById('profileEmail');
    const profilePhoneInput = document.getElementById('profilePhone');
    const profileOrdersContainer = document.getElementById('profileOrdersContainer');

    const paymentMethodsListDiv = document.getElementById('paymentMethodsList');
    const showAddPaymentFormBtn = document.getElementById('showAddPaymentFormBtn');
    const addPaymentForm = document.getElementById('addPaymentForm');
    const cancelAddPaymentBtn = document.getElementById('cancelAddPaymentBtn');
    const addressListDiv = document.getElementById('addressList');
    const showAddAddressFormBtn = document.getElementById('showAddAddressFormBtn');
    const addAddressForm = document.getElementById('addAddressForm');
    const cancelAddAddressBtn = document.getElementById('cancelAddAddressBtn');

    // Данные приложения
    let products = [
        { id: 1, name: "Фигурка Ангел 'Счастье'", price: 7000, imageUrl: "Ангел_счастье.jpeg", description: "Фигурка ручной работы, выполненная в технике горячая перегородчатая эмаль станет идеальным подарком или украшением для вашего дома. Размер фигурки: 10х5х2 " },
        { id: 2, name: "Фигурка Ангел 'Весенняя легкость", price: 8500, imageUrl: "Весенний_ангел.jpeg", description: "Фигурка ручной работы, выполненная в технике горячая перегородчатая эмаль станет идеальным подарком или украшением для вашего дома. Размер фигурки: 15х8х5 " },
        { id: 3, name: "Фигурка Ангел 'Бабье лето'", price: 8000, imageUrl: "Осенний_ангел.jpeg", description: "Фигурка ручной работы, выполненная в технике горячая перегородчатая эмаль станет идеальным подарком или украшением для вашего дома. Размер фигурки: 13х6х4 " },
        { id: 4, name: "Панно 'Морозный сон'", price: 9000, imageUrl: "Панно_зимняя_ночь.jpeg", description: "Панно ручной работы, выполненная в технике горячая перегородчатая эмаль станет идеальным подарком или украшением для вашего дома. Размер панно: 7х7х4  " },
        { id: 5, name: "Фигурка Ангел 'Зимняя сказка'", price: 8500, imageUrl: "Ангел_зимняя_сказка.jpeg", description: "Фигурка ручной работы, выполненная в технике горячая перегородчатая эмаль станет идеальным подарком или украшением для вашего дома. Размер фигурки: 10х7х3 " },
        { id: 6, name: "Панно 'Ангел-Хранитель'", price: 8500, imageUrl: "Панно_ангел_хранитель.jpeg", description: "Панно ручной работы, выполненная в технике горячая перегородчатая эмаль станет идеальным подарком или украшением для вашего дома. Размер панно: 7х7х4  " },
        { id: 7, name: "Серьги 'Новогодние Елочки'", price: 3000, imageUrl: "Елочки.jpeg", description: "Ювелирные украшения ручной работы, выполненные в технике горячая перегородчатая эмаль станет идеальным подарком или украшением для любого мероприятия. " },
        { id: 8, name: "Набор 'Льдинка'", price: 4000, imageUrl: "Набор_льдинка.jpeg", description: "Ювелирные украшения ручной работы, выполненные в технике горячая перегородчатая эмаль станет идеальным подарком или украшением для любого мероприятия. " },
        { id: 9, name: "Комплект 3 в 1 'Мезенский'", price: 5000, imageUrl: "3 в 1.jpeg", description: "Ювелирные украшения ручной работы, выполненные в технике горячая перегородчатая эмаль станет идеальным подарком или украшением для любого мероприятия. " }
    ];
    let cart = loadCart();
    let orders = loadOrders();
    let userProfile = loadUserProfile();
    let nextProductId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;

    // Функции для памяти
    function saveCart() { localStorage.setItem('jewelryCart', JSON.stringify(cart)); }
    function loadCart() { const sc = localStorage.getItem('jewelryCart'); return sc ? JSON.parse(sc) : []; }
    function saveOrders() { localStorage.setItem('jewelryShopOrders', JSON.stringify(orders)); }
    function loadOrders() { const so = localStorage.getItem('jewelryShopOrders'); return so ? JSON.parse(so) : []; }
    function saveUserProfile() { localStorage.setItem('jewelryShopUserProfile', JSON.stringify(userProfile)); }
    function loadUserProfile() {
        const sp = localStorage.getItem('jewelryShopUserProfile');
        const defaultProfile = {
            fullName: '', birthDate: '', email: '', phone: '',
            paymentMethods: [], 
            addresses: []       
        };
        if (sp) {
            const parsedProfile = JSON.parse(sp);
            return { ...defaultProfile, ...parsedProfile };
        }
        return defaultProfile;
    }

    // Функции для Способов Оплаты (в ЛК)
    function renderPaymentMethods() {
        if (!paymentMethodsListDiv) return;
        paymentMethodsListDiv.innerHTML = '';
        if (!userProfile.paymentMethods || userProfile.paymentMethods.length === 0) {
            paymentMethodsListDiv.innerHTML = '<p>У вас нет сохраненных способов оплаты.</p>';
            return;
        }
        userProfile.paymentMethods.forEach((method, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'payment-method-item';
            itemDiv.innerHTML = `
                <p><strong>Тип:</strong> ${method.type}</p>
                <p><strong>Карта:</strong> **** **** **** ${method.last4}</p>
                <p><strong>Срок:</strong> ${method.expiry}</p>
                <button class="delete-item-btn" data-type="payment" data-index="${index}" title="Удалить способ оплаты">×</button>
            `;
            paymentMethodsListDiv.appendChild(itemDiv);
        });
    }

    function addPaymentMethod(type, last4, expiry) {
        if (!userProfile.paymentMethods) userProfile.paymentMethods = [];
        userProfile.paymentMethods.push({ type, last4, expiry, id: `pay-${Date.now()}` });
        saveUserProfile();
        renderPaymentMethods();
        showFeedback("Способ оплаты добавлен!");
    }

    // Функции для Адресов (в ЛК)
    function renderAddresses() {
        if (!addressListDiv) return;
        addressListDiv.innerHTML = '';
        if (!userProfile.addresses || userProfile.addresses.length === 0) {
            addressListDiv.innerHTML = '<p>У вас нет сохраненных адресов.</p>';
            return;
        }
        userProfile.addresses.forEach((address, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'address-item';
            itemDiv.innerHTML = `
                <p><strong>${address.label || 'Адрес'}:</strong></p>
                <p>${address.street}</p>
                <p>${address.city}, ${address.zip}</p>
                <button class="delete-item-btn" data-type="address" data-index="${index}" title="Удалить адрес">×</button>
            `;
            addressListDiv.appendChild(itemDiv);
        });
    }

    function addAddress(street, city, zip, label) {
        if (!userProfile.addresses) userProfile.addresses = [];
        userProfile.addresses.push({ street, city, zip, label: label || 'Адрес', id: `addr-${Date.now()}` });
        saveUserProfile();
        renderAddresses();
        showFeedback("Адрес добавлен!");
    }
    
    // Общая функция для удаления элемента из массива в профиле
    function deleteProfileItem(type, index) {
        let itemDeleted = false;
        if (type === 'payment' && userProfile.paymentMethods && userProfile.paymentMethods[index]) {
            userProfile.paymentMethods.splice(index, 1);
            renderPaymentMethods();
            showFeedback("Способ оплаты удален.");
            itemDeleted = true;
        } else if (type === 'address' && userProfile.addresses && userProfile.addresses[index]) {
            userProfile.addresses.splice(index, 1);
            renderAddresses();
            showFeedback("Адрес удален.");
            itemDeleted = true;
        }
        if (itemDeleted) saveUserProfile();
    }

    // Функции для Заказов
    function addOrder(customerName, customerEmail, customerPhone, cartItems, totalAmount) {
        const newOrder = {
            id: `ORD-${Date.now()}`,
            orderTimestamp: new Date().toISOString(),
            customer: { name: customerName, email: customerEmail, phone: customerPhone },
            items: [...cartItems],
            totalAmount: totalAmount,
            status: "Обрабатывается"
        };
        orders.push(newOrder);
        saveOrders();
        return newOrder;
    }

    function renderOrders(containerElement) {
        if (!containerElement) return;
        containerElement.innerHTML = '';
        if (orders.length === 0) {
            containerElement.innerHTML = '<p>У вас пока нет оформленных заказов.</p>';
            return;
        }
        const sortedOrders = [...orders].sort((a, b) => new Date(b.orderTimestamp) - new Date(a.orderTimestamp));
        sortedOrders.forEach(order => {
            const orderCard = document.createElement('div');
            orderCard.className = 'order-card';
            let itemsHTML = '<ul class="order-items-list">';
            order.items.forEach(item => {
                itemsHTML += `<li>${item.name} (x${item.quantity}) - ${(item.price * item.quantity).toLocaleString()} ₽</li>`;
            });
            itemsHTML += '</ul>';
            const orderDate = new Date(order.orderTimestamp);
            const displayId = order.id.length > 13 ? order.id.substring(0,13) + '...' : order.id;

            orderCard.innerHTML = `
                <h3>Заказ № ${displayId}</h3>
                <p><strong>Дата:</strong> ${orderDate.toLocaleDateString('ru-RU')} ${orderDate.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}</p>
                ${containerElement.id === 'ordersContainer' ? 
                `<p><strong>Покупатель:</strong> ${order.customer.name}</p>
                 <p><strong>Email:</strong> ${order.customer.email}</p>
                 <p><strong>Телефон:</strong> ${order.customer.phone}</p>` : 
                 `<p><strong>Итого:</strong> ${order.totalAmount.toLocaleString()} ₽ | <strong>Статус:</strong> ${order.status}</p>`
                }
                <details>
                    <summary>Детали товаров</summary>
                    ${itemsHTML}
                </details>
                ${containerElement.id === 'ordersContainer' ? `<p><strong>Итоговая сумма:</strong> ${order.totalAmount.toLocaleString()} ₽</p><p><strong>Статус:</strong> ${order.status}</p>` : ''}
            `;
            containerElement.appendChild(orderCard);
        });
    }
    
    // Функции для Профиля (ЛК)
    function displayCurrentProfileData() {
        if (!userProfile || !displayFullName) return;
        displayFullName.textContent = userProfile.fullName || '-';
        displayBirthDate.textContent = userProfile.birthDate ? new Date(userProfile.birthDate+'T00:00:00Z').toLocaleDateString('ru-RU') : '-';
        displayEmail.textContent = userProfile.email || '-';
        displayPhone.textContent = userProfile.phone || '-';
        if (profileFullNameInput) profileFullNameInput.value = userProfile.fullName || '';
        if (profileBirthDateInput) profileBirthDateInput.value = userProfile.birthDate || '';
        if (profileEmailInput) profileEmailInput.value = userProfile.email || '';
        if (profilePhoneInput) profilePhoneInput.value = userProfile.phone || '';
    }

    function showProfileEditForm(show) {
        if (profileDisplayInfoDiv && profileEditForm) {
            profileDisplayInfoDiv.style.display = show ? 'none' : 'block';
            profileEditForm.style.display = show ? 'block' : 'none';
        }
    }
    
    function activateProfileTab(tabId) {
        if (!profileTabsButtons || !profileTabContents) return;
        profileTabsButtons.forEach(btn => btn.classList.remove('active'));
        profileTabContents.forEach(content => content.classList.remove('active'));
        const activeTabButton = document.querySelector(`.profile-tabs .tab-button[data-tab="${tabId}"]`);
        const activeTabContent = document.getElementById(tabId);
        if (activeTabButton) activeTabButton.classList.add('active');
        if (activeTabContent) {
            activeTabContent.classList.add('active');
            if (tabId === 'profileOrders') renderOrders(profileOrdersContainer);
            else if (tabId === 'profilePayment') {
                renderPaymentMethods();
                if(addPaymentForm) addPaymentForm.style.display = 'none';
                if(showAddPaymentFormBtn) showAddPaymentFormBtn.style.display = 'inline-block';
            } else if (tabId === 'profileAddress') {
                renderAddresses();
                if(addAddressForm) addAddressForm.style.display = 'none';
                if(showAddAddressFormBtn) showAddAddressFormBtn.style.display = 'inline-block';
            }
        }
    }

    // Навигация и отображение секций
    const mainPageSectionIds = ['hero', 'catalog', 'about', 'contact']; 

    function showSection(targetSectionId) {
        document.querySelectorAll('main > section, #hero').forEach(sec => {
            if (sec) sec.style.display = 'none';
        });

        if (targetSectionId === 'hero') {
            mainPageSectionIds.forEach(id => {
                const sectionElement = document.getElementById(id);
                if (sectionElement) {
                    sectionElement.style.display = (id === 'hero' ? 'flex' : 'block');
                }
            });

            if(aboutSection) aboutSection.style.display = 'about';
            if(contactSection) contactSection.style.display = 'contact';

        } else {
            const sectionElement = document.getElementById(targetSectionId);
            if (sectionElement) {
                sectionElement.style.display = 'block';
                if (targetSectionId === 'orders') {
                    renderOrders(ordersContainer); 
                }
            } else {
                showSection('hero');
            }
        }
    }
    
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    const sectionId = href.substring(1);
                    if (link.id !== 'navProfileLink') { 
                        e.preventDefault();
                        showSection(sectionId);
                    }
                }
            });
        });
    }

    // Функции для Товаров
    function renderProducts() { if (!productGrid) return;
        productGrid.innerHTML = '';
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.name}">
                <div class="product-card-content">
                    <h3>${product.name}</h3>
                    <p class="price">${product.price.toLocaleString()} ₽</p>
                    <p class="description-preview">${product.description.substring(0, 70)}...</p>
                    <div class="actions">
                        <button class="details-btn" data-id="${product.id}">Подробнее</button>
                        <button class="add-to-cart-btn product-list-add-btn" data-id="${product.id}">В корзину</button>
                    </div>
                </div>`;
            productGrid.appendChild(card);
        });
        addEventListenersToProductButtons(); }
    function addEventListenersToProductButtons() { if (productModal) {
        document.querySelectorAll('.details-btn').forEach(button => {
            button.addEventListener('click', (e) => showProductDetails(e.target.dataset.id));
        });
    }
    document.querySelectorAll('.product-list-add-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
            const product = findProductById(productId);
            if (product) showFeedback(`${product.name} добавлен в корзину!`);
        });
    });
}
    function showFeedback(message, type = 'success') { const feedbackEl = document.createElement('div');
        feedbackEl.className = 'feedback-message';
        feedbackEl.textContent = message;
        document.body.appendChild(feedbackEl);
        Object.assign(feedbackEl.style, {
            position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)',
            backgroundColor: type === 'error' ? '#e74c3c' : 'var(--accent-color, #d4af37)',
            color: 'white', padding: '10px 20px', borderRadius: 'var(--border-radius, 8px)',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)', zIndex: '1002', opacity: '0',
            transition: 'opacity 0.3s ease-in-out'
        });
        setTimeout(() => { feedbackEl.style.opacity = '1'; }, 10);
        setTimeout(() => {
            feedbackEl.style.opacity = '0';
            setTimeout(() => { if (document.body.contains(feedbackEl)) document.body.removeChild(feedbackEl); }, 300);
        }, type === 'error' ? 3500 : 2000);
    }
    if (addProductForm) { addProductForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('productName').value;
        const price = parseFloat(document.getElementById('productPrice').value);
        const imageUrl = document.getElementById('productImage').value || "https://via.placeholder.com/300?text=No+Image";
        const description = document.getElementById('productDescription').value;
        if (name && !isNaN(price) && description) {
            products.push({ id: nextProductId++, name, price, imageUrl, description });
            renderProducts();
            addProductForm.reset();
            showFeedback(`${name} успешно добавлен в каталог!`);
        } else {
            showFeedback("Пожалуйста, заполните все обязательные поля корректно.", "error");
        }
    });
}
    function findProductById(id) { return products.find(p => p.id === parseInt(id)); } // Оставляем как есть
    function showProductDetails(productId) { if (!productModal) return;
        const product = findProductById(productId);
        if (product) {
            if(modalProductImage) { modalProductImage.src = product.imageUrl; modalProductImage.alt = product.name; }
            if(modalProductName) modalProductName.textContent = product.name;
            if(modalProductDescription) modalProductDescription.textContent = product.description;
            if(modalProductPrice) modalProductPrice.textContent = `Цена: ${product.price.toLocaleString()} ₽`;
            if(modalAddToCartBtn) modalAddToCartBtn.dataset.id = product.id;
            productModal.style.display = 'flex';
        }
    }
    
    // Функции для Корзины
    function addToCart(productId) { const product = findProductById(productId);
        if (!product) return;
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) cartItem.quantity++;
        else cart.push({ ...product, quantity: 1 });
        updateCart();
    }
    function removeFromCart(productId) { cart = cart.filter(item => item.id !== parseInt(productId));
        updateCart(); 
    }
    function updateCartQuantity(productId, change) { const id = parseInt(productId);
        const cartItem = cart.find(item => item.id === id);
        if (cartItem) {
            cartItem.quantity += change;
            if (cartItem.quantity <= 0) removeFromCart(id);
            else updateCart();
        }
    }
    function renderCart() { if (!cartItemsContainer || !cartTotalElement) return;
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart-message">Ваша корзина пуста.</p>';
            cartTotalElement.textContent = '0';
            if (proceedToCheckoutBtn) proceedToCheckoutBtn.disabled = true;
            return;
        }
        if (proceedToCheckoutBtn) proceedToCheckoutBtn.disabled = false;
        let total = 0;
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.name}">
                <div class="cart-item-details"><h4>${item.name}</h4><p class="cart-item-price">${item.price.toLocaleString()} ₽ x ${item.quantity}</p></div>
                <div class="cart-item-quantity"><button class="quantity-change" data-id="${item.id}" data-change="-1">-</button><span>${item.quantity}</span><button class="quantity-change" data-id="${item.id}" data-change="1">+</button></div>
                <p class="cart-item-subtotal"><strong>${(item.price * item.quantity).toLocaleString()} ₽</strong></p>
                <div class="cart-item-actions"><button class="remove-from-cart-btn" data-id="${item.id}">Удалить</button></div>`;
            cartItemsContainer.appendChild(itemElement);
            total += item.price * item.quantity;
        });
        cartTotalElement.textContent = total.toLocaleString();
        cartItemsContainer.querySelectorAll('.remove-from-cart-btn').forEach(b => b.addEventListener('click', (e) => removeFromCart(e.target.dataset.id)));
        cartItemsContainer.querySelectorAll('.quantity-change').forEach(b => b.addEventListener('click', (e) => updateCartQuantity(e.target.dataset.id, parseInt(e.target.dataset.change))));
    }
    function updateCart() { renderCart(); updateCartIcon(); saveCart(); }
    function updateCartIcon() { if (cartCountElement) cartCountElement.textContent = cart.reduce((s, i) => s + i.quantity, 0); }

    // ОБРАБОТЧИКИ ДЛЯ МОДАЛЬНЫХ ОКОН (кроме ЛК)
    // Товары
    if (closeProductModalBtn && productModal) closeProductModalBtn.onclick = () => productModal.style.display = 'none';
    if (modalAddToCartBtn && productModal) {
        modalAddToCartBtn.addEventListener('click', (e) => {
            const pid = parseInt(e.target.dataset.id); addToCart(pid); productModal.style.display = 'none';
            const p = findProductById(pid); if (p) showFeedback(`${p.name} добавлен в корзину!`);
        });
    }
    // Корзина
    if (cartIcon && cartModal) cartIcon.onclick = () => { renderCart(); cartModal.style.display = 'flex'; };
    if (closeCartModalBtn && cartModal) closeCartModalBtn.onclick = () => cartModal.style.display = 'none';
    if (proceedToCheckoutBtn && checkoutModal && cartModal) {
        proceedToCheckoutBtn.addEventListener('click', () => {
            if (cart.length === 0) { showFeedback("Ваша корзина пуста.", "error"); return; }
            cartModal.style.display = 'none';
            const ct = cart.reduce((t, i) => t + (i.price * i.quantity), 0);
            if (checkoutModalTotalElement) checkoutModalTotalElement.textContent = ct.toLocaleString();
            checkoutModal.style.display = 'flex';
        });
    }
    if (closeCheckoutModalBtn && checkoutModal) closeCheckoutModalBtn.onclick = () => checkoutModal.style.display = 'none';
    
    // Заказ
    if (checkoutOrderForm && checkoutModal) {
        checkoutOrderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('customerName').value;
            const email = document.getElementById('customerEmail').value;
            const phone = document.getElementById('customerPhone').value;
            if (!name || !email || !phone) { showFeedback("Заполните все поля.", "error"); return; }
            const total = cart.reduce((t, i) => t + (i.price * i.quantity), 0);
            const order = addOrder(name, email, phone, cart, total);
            showFeedback(`Спасибо, ${name}! Заказ №${order.id.substring(0,13)}... оформлен.`); // Укороченный ID
            cart = []; updateCart(); checkoutOrderForm.reset(); checkoutModal.style.display = 'none';
        });
    }

    // ОБРАБОТЧИКИ ДЛЯ ЛИЧНОГО КАБИНЕТА
    if (navProfileLink && profileModal) {
        navProfileLink.addEventListener('click', (e) => {
            e.preventDefault(); displayCurrentProfileData(); showProfileEditForm(false);
            activateProfileTab('profileInfo'); profileModal.style.display = 'flex';
        });
    }
    if (closeProfileModalBtn && profileModal) closeProfileModalBtn.onclick = () => profileModal.style.display = 'none';
    
    if (profileTabsButtons.length > 0) {
        profileTabsButtons.forEach(b => b.addEventListener('click', () => activateProfileTab(b.dataset.tab)));
    }
    if (editProfileBtn) editProfileBtn.addEventListener('click', () => { displayCurrentProfileData(); showProfileEditForm(true); });
    if (cancelEditProfileBtn) cancelEditProfileBtn.addEventListener('click', () => { showProfileEditForm(false); displayCurrentProfileData(); });
    
    if (profileEditForm) {
        profileEditForm.addEventListener('submit', (e) => {
            e.preventDefault();
            userProfile.fullName = profileFullNameInput.value.trim();
            userProfile.birthDate = profileBirthDateInput.value;
            userProfile.email = profileEmailInput.value.trim();
            userProfile.phone = profilePhoneInput.value.trim();
            saveUserProfile(); showFeedback("Данные профиля сохранены!");
            displayCurrentProfileData(); showProfileEditForm(false);
        });
    }
    // Обработчики для добавления способов оплаты и адресов
    if (showAddPaymentFormBtn && addPaymentForm) {
        showAddPaymentFormBtn.addEventListener('click', () => {
            addPaymentForm.style.display = 'block'; showAddPaymentFormBtn.style.display = 'none';
        });
    }
    if (cancelAddPaymentBtn && addPaymentForm && showAddPaymentFormBtn) {
        cancelAddPaymentBtn.addEventListener('click', () => {
            addPaymentForm.style.display = 'none'; addPaymentForm.reset(); showAddPaymentFormBtn.style.display = 'inline-block';
        });
    }
    if (addPaymentForm && showAddPaymentFormBtn) {
        addPaymentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const type = document.getElementById('paymentType').value;
            const cnl4 = document.getElementById('cardNumber').value;
            const ce = document.getElementById('cardExpiry').value;
            if (cnl4.length === 4 && ce.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
                addPaymentMethod(type, cnl4, ce); addPaymentForm.reset(); addPaymentForm.style.display = 'none'; showAddPaymentFormBtn.style.display = 'inline-block';
            } else { showFeedback("Введите корректные данные карты.", "error"); }
        });
    }
    if (showAddAddressFormBtn && addAddressForm) {
        showAddAddressFormBtn.addEventListener('click', () => {
            addAddressForm.style.display = 'block'; showAddAddressFormBtn.style.display = 'none';
        });
    }
    if (cancelAddAddressBtn && addAddressForm && showAddAddressFormBtn) {
        cancelAddAddressBtn.addEventListener('click', () => {
            addAddressForm.style.display = 'none'; addAddressForm.reset(); showAddAddressFormBtn.style.display = 'inline-block';
        });
    }
    if (addAddressForm && showAddAddressFormBtn) {
        addAddressForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const street = document.getElementById('addressStreet').value.trim();
            const city = document.getElementById('addressCity').value.trim();
            const zip = document.getElementById('addressZip').value.trim();
            const label = document.getElementById('addressLabel').value.trim();
            if (street && city && zip.match(/^\d{6}$/)) {
                addAddress(street, city, zip, label); addAddressForm.reset(); addAddressForm.style.display = 'none'; showAddAddressFormBtn.style.display = 'inline-block';
            } else { showFeedback("Заполните адрес (индекс - 6 цифр).", "error"); }
        });
    }
    // Делегирование для кнопок удаления в ЛК
    document.body.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-item-btn')) {
            const type = event.target.dataset.type;
            const index = parseInt(event.target.dataset.index);
            if (confirm(`Удалить этот ${type === 'payment' ? 'способ оплаты' : 'адрес'}?`)) {
                deleteProfileItem(type, index);
            }
        }
    });

    // ЕДИНЫЙ ОБРАБОТЧИК ДЛЯ ЗАКРЫТИЯ МОДАЛОК ПО КЛИКУ ВНЕ
    window.onclick = function(event) {
        if (productModal && event.target == productModal) productModal.style.display = "none";
        if (cartModal && event.target == cartModal) cartModal.style.display = "none";
        if (checkoutModal && event.target == checkoutModal) checkoutModal.style.display = "none";
        if (profileModal && event.target == profileModal) profileModal.style.display = "none";
    }

    // ИНИЦИАЛИЗАЦИЯ СТРАНИЦЫ
    function initializePage() {
        renderProducts();
        updateCartIcon();
        showSection('hero'); 
    }
    initializePage();
});
