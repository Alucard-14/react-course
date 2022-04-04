const button = document.querySelector('button');

let modal;
let backdrop;

const handleButtonClick = () => {
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'modal';

    const modalText = document.createElement('p');
    modalText.textContent = 'Holiwis.';

    const handleClick = () => {
      modal.remove();
      modal = null;

      backdrop.remove();
      backdrop = null;
    };

    const modalCancelAction = document.createElement('button');
    modalCancelAction.textContent = 'Cancelar';
    modalCancelAction.className = 'btn--alt';
    modalCancelAction.addEventListener('click', handleClick);

    const modalConfirmAction = document.createElement('button');
    modalConfirmAction.textContent = 'Confirmar';
    modalConfirmAction.className = 'btn';
    modalConfirmAction.addEventListener('click', handleClick);

    modal.append(modalText);
    modal.append(modalCancelAction);
    modal.append(modalConfirmAction);

    document.body.append(modal);

    backdrop = document.createElement('div');
    backdrop.className = 'backdrop';

    backdrop.addEventListener('click', handleClick);

    document.body.append(backdrop);
  }
};

button.addEventListener('click', handleButtonClick);
