class SmartMailButton {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.providers = {
            'gmail.com': { nombre: 'Gmail', url: 'https://mail.google.com/', color: '#EA4335', logo: '✉️' },
            'outlook.com': { nombre: 'Outlook', url: 'https://outlook.live.com/', color: '#0078D4', logo: '✉️' },
            'hotmail.com': { nombre: 'Outlook/Hotmail', url: 'https://outlook.live.com/', color: '#0078D4', logo: '✉️' },
            'yahoo.com': { nombre: 'Yahoo Mail', url: 'https://mail.yahoo.com/', color: '#6001d2', logo: '✉️' },
            'icloud.com': { nombre: 'iCloud Mail', url: 'https://www.icloud.com/mail', color: '#1C9CEA', logo: '✉️' }
        };
    }

    init(emailUsuario) {
        if (!this.container) return;
        this.container.innerHTML = '';

        const dominio = emailUsuario.split('@')[1]?.toLowerCase();

        const proveedor = this.providers[dominio] || {
            nombre: 'tu Buzón',
            url: 'https://www.google.com',
            color: '#24292e',
            logo: '✉️'
        };


        const botonCard = document.createElement('div');
        botonCard.className = 'smart-mail-card';

        botonCard.innerHTML = `
            <div class="smart-mail-icon">${proveedor.logo}</div>
            <p class="smart-mail-text">Confirmación enviada a: <strong>${emailUsuario}</strong></p>
            <button class="smart-mail-btn">Ir a ${proveedor.nombre}</button>
        `;

        const botonHTML = botonCard.querySelector('.smart-mail-btn');
        botonHTML.style.backgroundColor = proveedor.color;

        botonHTML.addEventListener('click', () => {
            window.open(proveedor.url, '_blank');
        });

        this.container.appendChild(botonCard);
    }
}