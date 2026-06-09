document
.getElementById("aspirasiForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const data = {
        q1: document.querySelector("[name='q1']").value,
        q2: document.querySelector("[name='q2']").value,
        pesan: document.querySelector("[name='pesan']").value
    };

    try {

        const response = await fetch(
            "URL_WEB_APP_KAMU_DISINI",
            {
                method: "POST",
                body: JSON.stringify(data)
            }
        );

        alert("✅ Aspirasi berhasil dikirim!");

        document
        .getElementById("aspirasiForm")
        .reset();

    } catch(error){

        alert("❌ Gagal mengirim data");

        console.error(error);

    }

});
