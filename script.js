document
.getElementById("aspirasiForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const data = {
        q1: document.querySelector("[name='q1']").value,
        q2: document.querySelector("[name='q2']").value,
        pesan: document.querySelector("[name='pesan']").value
    };

    console.log(data);

    alert("Data berhasil dikumpulkan!");

});
