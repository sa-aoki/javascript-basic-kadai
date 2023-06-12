const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click',()=> {
    setInterval(() => {
      console.log(text.innerHTML = 'ボタンをクリックしました')  
    }, 2000);
})
