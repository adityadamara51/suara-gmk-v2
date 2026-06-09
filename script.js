document
.getElementById("aspirasiForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const q1 = document.querySelector("[name='q1']").value;
    const q2 = document.querySelector("[name='q2']").value;
    const pesan = document.querySelector("[name='pesan']").value;

    alert(
        "Q1 : " + q1 +
        "\nQ2 : " + q2 +
        "\nPesan : " + pesan
    );

});
