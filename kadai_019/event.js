const clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click',() => {
  const Changetext = document.getElementById('text');
  Changetext.innerHTML = 'ボタンをクリックしました';
});