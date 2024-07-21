// URL del PDF del menú
const menuPDFUrl = 'https://crotoconlaptop.github.io/menu/';

// Crear una nueva instancia de QRCodeStyling
const qrCode = new QRCodeStyling({
    width: 256,
    height: 256,
    type: 'canvas',
    data: menuPDFUrl,
    image: '', // Puedes agregar una imagen de logo si deseas
    dotsOptions: {
        color: '#D4AF37',
        type: 'rounded'
    },
    backgroundOptions: {
        color: 'black',
    }
});

// Renderizar el código QR en el div con id 'qr-code'
qrCode.append(document.getElementById('qr-code'));




