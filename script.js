document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

const style = document.createElement('style');
style.textContent = `
  .dark-theme {
    background-color: #121212;
    color: #f0f0f0;
  }

  .dark-theme header,
  .dark-theme footer {
    background-color: #000;
  }

  .dark-theme a {
    color: #f44336;
  }
`;
document.head.appendChild(style);
