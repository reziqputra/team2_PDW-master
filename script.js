function showAlert(event) {
    event.preventDefault(); // Menghentikan submit form agar pesan alert dapat ditampilkan
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var partySize = document.getElementById("party-size").value;
    var specialRequests = document.getElementById("special-requests").value;

    var message = "Reservation Details:\n\n";
    message += "Name: " + name + "\n";
    message += "Email: " + email + "\n";
    message += "Date: " + date + "\n";
    message += "Time: " + time + "\n";
    message += "Party Size: " + partySize + "\n";
    message += "Special Requests: " + specialRequests + "\n";

    alert(message); // Menampilkan pesan alert dengan data yang diisi pengguna

    // Di sini Anda dapat menambahkan kode untuk mengirim data formulir ke server atau melakukan tindakan lainnya setelah submit
}