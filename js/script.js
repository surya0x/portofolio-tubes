
function sapaPengunjung() {
    alert("Halo! Terima kasih sudah mengunjungi portfolio saya.");
}

document.addEventListener('DOMContentLoaded', function () {

    const judul = document.querySelector('.hero-title');
    if (judul) {
        judul.addEventListener('click', function () {
            sapaPengunjung();
            this.style.color = 'red'; 
        });
    }

    // const contactForm = document.getElementById('contactForm');
    // if (contactForm) {
    //     contactForm.addEventListener('submit', function (event) {
    //         event.preventDefault(); 

    //      const nama = document.getElementById('name').value;

    //         alert("Terima kasih " + nama + "! Pesan Anda berhasil dikirim (Simulasi).");

    //         contactForm.reset();
    //     });
    // }
});
