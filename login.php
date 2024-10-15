<?php
// register.php

// include your config.php file here
include 'koneksi.php';

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil nilai dari form
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Query untuk memeriksa email dan password di tabel register
    $sql = "SELECT email, password FROM register WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Data ditemukan, cocokkan password
        $row = $result->fetch_assoc();
        $db_password = $row['password'];

        if ($password === $db_password) {
            // Password cocok, lakukan sesuatu (misalnya redirect ke halaman home.html)
            echo "<script>alert('Login berhasil'); window.location.href = 'home.html';</script>";
            exit(); // Pastikan tidak ada output lain yang terjadi setelah redirect
        } else {
            echo "<script>alert('Password Salah'); window.location.href = 'index.php';</script>";
        }
    } else {
        // Email tidak ditemukan, tampilkan popup
        echo "<script>alert('Email tidak terdaftar'); window.location.href = 'index.php';</script>";
    }
}
?>
