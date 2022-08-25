const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
    e.preventDefault();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;


    if (url == '') {
        alert("Please enter a URL")
    } else {
        
    }
    console.log(url, size);
}
const showSpinner = ()
form.addEventListener('submit',onGenerateSubmit)