const modals = document.querySelector('.modal');
const btnsOpen = document.querySelector('#btn-get');
const btnsClose = document.querySelector('.modal_close');


const openModal = () => {
    modals.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

btnsOpen.onclick = () => openModal();

const closeModal = () => {
    modals.style.display = 'none';
    document.body.style.overflow = '';
};

btnsClose.onclick = () => closeModal();

modals.onclick = (event) => {
    if (event.target === modals) {
        closeModal();
    }
};

const delayInMilliseconds = 10000;

let timeoutId;

const resetTimer = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(openModal, delayInMilliseconds);
};

document.addEventListener('mousemove', resetTimer);
document.addEventListener('keypress', resetTimer);
document.addEventListener('click', resetTimer);

body.addEventListener('load', () => {
    timeoutId = setTimeout(openModal, delayInMilliseconds);
});



