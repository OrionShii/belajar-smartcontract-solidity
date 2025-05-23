# 🔨 Proyek Contoh Hardhat

Proyek ini menunjukkan penggunaan dasar Hardhat dengan satu smart contract sederhana, pengujian untuk kontrak tersebut, dan modul deployment menggunakan **Hardhat Ignition**.

---

## 📁 Struktur Proyek

- `contracts/Lock.sol` : Smart contract sederhana.
- `test/Lock.js` : Berisi pengujian untuk kontrak `Lock`.
- `ignition/modules/Lock.js` : Skrip deployment menggunakan Hardhat Ignition.

---

## 🚀 Memulai Proyek

### 📦 Instalasi Dependensi

Jalankan perintah berikut untuk menginstal semua dependensi yang dibutuhkan:

```bash
npm install
```

---

## 🔍 Perintah Hardhat yang Berguna

Berikut adalah beberapa perintah yang sering digunakan dalam pengembangan menggunakan Hardhat:

```bash
npx hardhat help
# Menampilkan semua task Hardhat yang tersedia

npx hardhat compile
# Melakukan kompilasi smart contract

npx hardhat test
# Menjalankan pengujian smart contract

REPORT_GAS=true npx hardhat test
# Menjalankan pengujian dengan laporan penggunaan gas

npx hardhat node
# Menjalankan jaringan lokal Hardhat (local blockchain)

npx hardhat ignition deploy ./ignition/modules/Lock.js
# Melakukan deployment kontrak menggunakan Hardhat Ignition
```

---

## 🧪 Menjalankan Pengujian

Untuk menjalankan pengujian kontrak secara sederhana:

```bash
npx hardhat test
```

Jika kamu ingin melihat penggunaan gas selama proses pengujian:

```bash
REPORT_GAS=true npx hardhat test
```

---

## 📡 Deployment Kontrak

Untuk melakukan deployment kontrak `Lock` menggunakan Hardhat Ignition:

```bash
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

Pastikan jaringan lokal (Hardhat Node) telah dijalankan sebelumnya.

