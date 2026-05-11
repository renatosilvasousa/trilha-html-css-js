// Seleção de Elementos
const qrSrc = document.querySelector('#qr-code-src');
const qrGenerator = document.querySelector('#qr-code-generator');
const button = document.querySelector('#qr-generate');
const qrImgContainer = document.querySelector('#qr-img-container');
const qrCode = document.querySelector('#qr-code');
const qrLink = document.querySelector('#qr-link');
const footer = document.querySelector('#qr-generated');

// Eventos

qrGenerator.addEventListener('submit', (e) => {

    e.preventDefault();

    const qrCodeSrcValue = qrSrc.value;

    if(!qrCodeSrcValue) return;

    qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeSrcValue}`;

    button.innerText = "Gerando código...";

    qrLink.textContent = qrCodeSrcValue;

    console.log(qrCodeSrcValue);

    qrImgContainer.style.display = 'block';

    footer.classList.add('ativo');

});

qrSrc.addEventListener('input', (e) => {

        if(qrSrc.value.trim() === ''){

            button.innerText = 'Gerar QR Code';

            qrImgContainer.style.display = 'none';

            footer.classList.remove('ativo');

        }
        else{

            button.innerText = 'Digitando...';

        };

        

});

qrSrc.addEventListener('blur', (e) => {

    button.innerText = 'Gerar QR Code';

    if(qrSrc.value.trim() === ''){

        qrImgContainer.style.display = 'none';

        footer.classList.remove('ativo');

    };
            
});

qrCode.addEventListener('load', (e) => {

    button.innerText = 'Código Gerado com Sucesso!';

});