var google_script = ("https://script.google.com/macros/s/AKfycbylrH1TI85TLFIoGBLa6-yjbCEM24Tt7JT3YKE2DRHwdWqGAdlukdGvOrIdYHDSMwlQ/exec?action=addTask");
function serializeForm(formNode) {
    a = new FormData(formNode);

    document.getElementById("tablo").style.visibility = "visible";

    var usr_name = (Array.from(a.entries())[0][1]);
    var phone = (Array.from(a.entries())[1][1]);
    var email = (Array.from(a.entries())[2][1]);


    var usr_data = ('&usr_name=' + usr_name + '&phone=' + phone + '&email=' + email);

    var the_send = (google_script + usr_data);


    const XHR = new XMLHttpRequest();
    XHR.open('POST', the_send);
    XHR.send();
    return (a);
}

function handleFormSubmit(event) {
    event.preventDefault();
    serializeForm(applicantForm);
}

const applicantForm = document.getElementById('send_form');
applicantForm.addEventListener('submit', handleFormSubmit);