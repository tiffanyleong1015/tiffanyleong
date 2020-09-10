const btn = document.querySelector('btn');
const result = document.querySelector('.result');

btn.addEventListener('click', function(){
    const blah = document.getElementById('blah')
    const url = URL.createObjectURL(blah)
    const shareData = {
        url: url,
        text: '相片',
        title: '發現中小企'
      };
    async () => {
  try {
    await navigator.share(shareData);
    result.textContent = '感謝你的的分享';
  } catch (err) {
    const { name, message } = err;
    if (name === 'AbortError') {
      result.textContent = '您已取消分享此訊息';
    } else {
      result.textContent = err;
      console.log('發生錯誤', err);}
    }
  }
});
