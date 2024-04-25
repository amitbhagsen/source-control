document.addEventListener('DOMContentLoaded', function() {
 
  const cardNumberInput = document.getElementById('card-number');
  const customerNameInput = document.getElementById('customer-name');
  const monthInput = document.getElementById('month');
  const yearInput = document.getElementById('year');
  const cvcInput = document.getElementById('cvc');
  const form = document.getElementById('card-form');
  const successSection = document.querySelector('.success');

  function updateCardDisplay() {
    const cardNumber = cardNumberInput.value || '0000 0000 0000 0000';
    const customerName = customerNameInput.value || 'Jane Appleseed';
    const expiryDate = `${monthInput.value || '00'}/${yearInput.value || '00'}`;
    const cvc = cvcInput.value || '000';

    document.querySelector('.number').textContent = cardNumber;
    document.querySelector('.customer').textContent = customerName;
    document.querySelector('.date').textContent = expiryDate;
    document.querySelector('.eg-cvc').textContent = cvc;
  }

  cardNumberInput.addEventListener('input', updateCardDisplay);
  customerNameInput.addEventListener('input', updateCardDisplay);
  monthInput.addEventListener('input', updateCardDisplay);
  yearInput.addEventListener('input', updateCardDisplay);
  cvcInput.addEventListener('input', updateCardDisplay);

 
  function validateForm(event) {
    let isValid = true;

    if (!/^\d{16}$/.test(cardNumberInput.value)) {
      document.querySelector('.card-number-error').textContent = 'Invalid card number';
      isValid = false;
    } else {
      document.querySelector('.card-number-error').textContent = '';
    }

    if (!isValid) {
      event.preventDefault();
    } else {
      successSection.classList.remove('hidden');
    }
  }

  form.addEventListener('submit', validateForm);
});
