const submit = document.querySelector('.submit');
const thanks = document.querySelector('#thank-you');
const content = document.querySelector('.content');
const rate = document.querySelectorAll('#rating button');
const result = document.querySelector('#result');


submit.addEventListener('click', function my(){
    thanks.style.display = 'block';
    content.style.display = 'none';
    
})


for (const i of rate) {
    i.addEventListener('click', () =>{
        result.innerText = i.innerText;
    })
}

