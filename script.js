const responses = {
  game: ['Helal sana!', 'Hadi başarılar!', 'Standoff 2 oynayalım mı?'],
  study: ['Hadi başarılar!', 'Bence akıllısın.', 'Aferin, doğru yoldasın!'],
  break: [
    'Çay kahve iç.',
    'Arkadaşınla oyun oyna.',
    'Biraz spora ne dersin?',
    'Harika bir çalışma temposuydu! Dinlenmeyi fazlasıyla hak ettin. Ben buradayım, hazır olduğunda devam ederiz.',
    'Dinlenme zamanı! Sen biraz soluklan, zihnini topla. Geldiğinde kaldığımız yerden tam gaz devam ederiz.'
  ]
};

const buttons = document.querySelectorAll('.mode-card');
const responseText = document.querySelector('#response-text');

function chooseResponse(mode) {
  const messages = responses[mode];
  return messages[Math.floor(Math.random() * messages.length)];
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    responseText.classList.remove('response-pop');
    void responseText.offsetWidth;
    responseText.textContent = chooseResponse(button.dataset.mode);
    responseText.classList.add('response-pop');
  });
});
