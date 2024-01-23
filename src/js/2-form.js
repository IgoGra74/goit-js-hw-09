document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');
  const storageKey = 'feedback-form-state';

  form.addEventListener('input', function (event) {
    const formData = {
      email: form.elements.email.value.trim(),
      message: form.elements.message.value.trim(),
    };

    localStorage.setItem(storageKey, JSON.stringify(formData));
  });

  const storedData = localStorage.getItem(storageKey);
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    form.elements.email.value = parsedData.email;
    form.elements.message.value = parsedData.message;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailValue = form.elements.email.value.trim();
    const messageValue = form.elements.message.value.trim();

    if (emailValue && messageValue) {
      console.log({
        email: emailValue,
        message: messageValue,
      });

      localStorage.removeItem('feedback-form-state');

      form.reset();
    } else {
      alert('Please fill in both email and message fields before submitting');
    }
  });
});
