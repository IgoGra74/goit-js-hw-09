document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');

  form.addEventListener('input', function (event) {
    const formData = {
      email: form.elements.email.value.trim(),
      message: form.elements.message.value.trim(),
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });

  window.addEventListener('load', function () {
    const storedData = localStorage.getItem('feedback-form-state');

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      form.elements.email.value = parsedData.email;
      form.elements.message.value = parsedData.message;
    }
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (email !== '' && message !== '') {
      console.log({
        email: email,
        message: message,
      });

      localStorage.removeItem('feedback-form-state');
      form.reset();
    } else {
      alert('Please fill in both email and message fields before submitting.');
    }
  });
});
