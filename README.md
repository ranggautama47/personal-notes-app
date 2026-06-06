# Personal Notes App

Aplikasi catatan pribadi berbasis React. Dibuat sebagai submission akhir kursus **Belajar Membuat Aplikasi Web dengan React untuk Pemula** dari Dicoding.

**Nilai: Advanced / Bintang 5**
**Sertifikat: [Belajar Membuat Aplikasi Web dengan React](https://www.dicoding.com/certificates/JMZVOJV53XN9)**

---

## Fitur

- Tambah catatan baru dengan judul dan isi
- Hapus catatan
- Arsipkan dan unarsipkan catatan
- Pencarian catatan real-time (case-insensitive)
- Highlight keyword pencarian di judul dan isi catatan
- Catatan dikelompokkan per bulan dan tahun
- Validasi judul maksimal 50 karakter (via state)
- Validasi isi catatan minimal 10 karakter
- Dua section terpisah: Catatan Aktif dan Arsip

## Tech Stack

- React 18 (Class Component)
- Vite
- CSS3

## Cara Menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`

## Struktur Project

```
src/
├── components/
│   ├── App.jsx              # State utama, semua handler
│   ├── NoteInput.jsx        # Form tambah catatan
│   ├── NoteItem.jsx         # Tampilan satu catatan + highlightText
│   ├── NotesList.jsx        # Daftar catatan + grouping bulan-tahun
│   ├── NoteSearch.jsx       # Komponen pencarian
│   └── NoteActionButton.jsx # Tombol aksi reusable (hapus/arsip)
├── utils/
│   └── index.js             # getInitialData, showFormattedDate
├── styles/
│   └── style.css
└── index.jsx
```

---

> Branch `phase2-redesign` berisi redesign visual untuk portofolio (MindNote).
