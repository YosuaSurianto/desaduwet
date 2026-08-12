[🇮🇩 Versi Indonesia](#versi-indonesia) | [🇬🇧 English Version](#english-version)

---

<a id="versi-indonesia"></a>
# Website Promosi Desa Duwet (Versi Indonesia)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

Sebuah pengalaman web premium, berkinerja tinggi, dan imersif yang dibangun untuk **Desa Duwet, Kecamatan Baki, Kabupaten Sukoharjo, Jawa Tengah**. Proyek ini berfungsi sebagai gerbang digital menuju rumah dan asal muasal asli **Nasi Liwet Sukoharjo** (yang telah diakui sebagai Warisan Budaya Takbenda Indonesia).

## 🚀 Visi

Ini bukan sekadar website profil desa biasa. Website ini dirancang menjadi karya tingkat **Awwwards**, yang menampilkan:
- **Bercerita Sinematik Berbasis Scroll**: Memanfaatkan GSAP ScrollTrigger untuk mengaitkan pemutaran video langsung ke posisi scroll pengguna.
- **Elemen Interaktif 3D**: Menggunakan `@react-three/fiber` untuk menambahkan aset 3D yang melayang dan interaktif yang bereaksi terhadap gestur pengguna, memberikan kesan premium.
- **Glassmorphism & Mikro-animasi**: Didukung oleh Framer Motion untuk kemunculan teks yang sangat mulus dan transisi halaman yang cair.
- **Pendekatan Mobile-First**: Dioptimalkan secara ketat untuk pengguna ponsel tanpa mengorbankan kualitas visual di desktop.

## 🛠️ Stack Teknologi

- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **UI & Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animasi**: [GSAP](https://gsap.com/) & [Framer Motion](https://www.framer.com/motion/)
- **Grafik 3D**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) & Drei *(Direncanakan/Diintegrasikan untuk bagian tertentu)*
- **Peta**: [Leaflet](https://leafletjs.com/) & React Leaflet untuk data lokasi interaktif

## 📖 Akurasi Sejarah & Pengecekan Fakta

Proyek ini sangat mengutamakan penyampaian cerita yang akurat, tidak hanya sekadar estetika belaka. Selama fase riset dan pengembangan, beberapa fakta telah diperiksa ulang:
- **Asal Usul Nasi Liwet**: Terverifikasi. Desa Duwet (bersama Desa Menuran) di Baki secara historis akurat sebagai asal otentik tradisi Nasi Liwet, yang berasal dari era Mataram Islam.
- **Pabrik Gula Kolonial**: *Telah dicek faktanya*. Draf awal berasumsi ada pabrik gula Belanda yang berlokasi *di dalam* wilayah Duwet. Riset mendalam mengungkapkan bahwa pabrik-pabrik kolonial (dan struktur seperti Buklondo) terletak di desa tetangga dalam distrik Baki (misalnya, Desa Bentakan), bukan di dalam Duwet sendiri. Copywriting di file `data/heritage.ts` telah diperbarui secara struktural untuk membingkai hal ini sebagai konteks regional alih-alih klaim yang keliru.

## 📂 Struktur Proyek

```text
src/
├── app/                  # Next.js App Router (Halaman dan Layout)
├── components/           # Komponen UI, Layout, dan Bagian Halaman (Reusable)
│   ├── background/       # Background video berbasis scroll dan grain overlay
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Bagian landing page (Hero, Heritage, Economy, dll)
│   └── ui/               # Komponen interaktif kecil
├── data/                 # SSOT (Single Source of Truth) untuk teks web dan metadata
├── hooks/                # Custom React hooks (misal, untuk integrasi GSAP)
├── lib/                  # Fungsi utilitas
└── styles/               # CSS modules dan style dasar Tailwind
```

## 💻 Memulai (Getting Started)

Pastikan Anda telah menginstal Node.js 20+.

1. **Instal dependensi**:
   ```bash
   npm install
   ```
2. **Jalankan server pengembangan (development)**:
   ```bash
   npm run dev
   ```
3. **Buka di browser**:
   Akses ke [http://localhost:3000](http://localhost:3000)

## 🎨 Prinsip Desain

- **Tanpa Lorem Ipsum**: Semua konten harus bersumber dari riset asli.
- **Background Dinamis**: Background harus terasa "hidup" tetapi tidak mengganggu, memprioritaskan keterbacaan melalui overlay Glassmorphic.
- **Performa**: Animasi kelas atas harus tetap dapat berjalan secara proporsional di perangkat dengan daya rendah. Manfaatkan `prefers-reduced-motion` jika memungkinkan.

## 📄 Lisensi & Hak Cipta

- **Source Code (Dual License)**: Bagian *source code* dari proyek ini (termasuk implementasi Next.js, animasi GSAP, dan *styling*) dirilis di bawah [MIT License](LICENSE) **ATAU** [GNU GPLv3](LICENSE-GPL). Pengembang lain bebas memilih lisensi yang paling sesuai dengan kebutuhan distribusi proyek mereka.
- **Konten & Aset**: Seluruh hak cipta atas teks sejarah, narasi, fotografi, *branding*, dan identitas visual "Desa Duwet" **dilindungi sepenuhnya (All Rights Reserved)**. Penggunaan, penyalinan, atau pendistribusian ulang aset-aset tersebut untuk entitas lain tanpa izin tertulis adalah dilarang keras.

## 👨‍💻 Penulis & Kredit

Dikembangkan oleh **Yosua Surianto (Dracoo)**.

---
*Dikembangkan dengan presisi, pemikiran kritis, dan rasa hormat terhadap warisan budaya.*

---

<br><br>

<a id="english-version"></a>
# Desa Duwet Promotional Website (English Version)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

A premium, high-performance, and immersive web experience built for **Desa Duwet, Kecamatan Baki, Kabupaten Sukoharjo, Jawa Tengah**. This project serves as a digital gateway to the true home and origin of **Nasi Liwet Sukoharjo** (a recognized Indonesian Intangible Cultural Heritage).

## 🚀 The Vision

This is not an ordinary village profile website. It is designed to be an **Awwwards-level** masterpiece, featuring:
- **Scroll-Driven Cinematic Storytelling**: Leveraging GSAP ScrollTrigger to tie video playback directly to user scroll position.
- **3D Interactive Elements**: Using `@react-three/fiber` to add floating, interactive 3D assets that react to user gestures, adding a premium feel.
- **Glassmorphism & Micro-animations**: Driven by Framer Motion for buttery-smooth text reveals and fluid page transitions.
- **Mobile-First Approach**: Optimized strictly for mobile users without compromising the visual fidelity on desktops.

## 🛠️ Technology Stack

- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **UI & Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [GSAP](https://gsap.com/) & [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) & Drei *(Planned/Integrated for specific sections)*
- **Maps**: [Leaflet](https://leafletjs.com/) & React Leaflet for interactive location data

## 📖 Historical Accuracy & Fact-Checking

This project values accurate storytelling over mere aesthetics. During the research and development phase, several facts were cross-checked:
- **Origin of Nasi Liwet**: Verified. Desa Duwet (alongside Desa Menuran) in Baki is historically accurate as the authentic origin of the Nasi Liwet tradition, dating back to the Mataram Islam era.
- **Colonial Sugar Factory (Pabrik Gula)**: *Fact-checked*. Initial drafts assumed a Dutch sugar factory existed *inside* Duwet. Deep research revealed the colonial factories (and structures like Buklondo) were located in neighboring villages within the Baki district (e.g., Desa Bentakan), not in Duwet itself. The copywriting in the `data/heritage.ts` file has been structurally updated to frame this as regional context rather than a false claim.

## 📂 Project Structure

```text
src/
├── app/                  # Next.js App Router pages and layouts
├── components/           # Reusable UI, Layout, and Section components
│   ├── background/       # Scroll-driven video and grain overlays
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Landing page sections (Hero, Heritage, Economy, etc.)
│   └── ui/               # Granular interactive components
├── data/                 # SSOT (Single Source of Truth) for site copy and metadata
├── hooks/                # Custom React hooks (e.g., for GSAP integration)
├── lib/                  # Utility functions
└── styles/               # CSS modules and Tailwind base styles
```

## 💻 Getting Started

Ensure you have Node.js 20+ installed.

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Run the development server**:
   ```bash
   npm run dev
   ```
3. **Open the browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design Principles

- **No Lorem Ipsum**: All content must be sourced from authentic research.
- **Dynamic Backgrounds**: The background must feel "alive" but not intrusive, prioritizing readability through Glassmorphic overlays.
- **Performance**: High-end animations should degrade gracefully on low-power devices. Utilize `prefers-reduced-motion` where applicable.

## 📄 License & Copyright

- **Source Code (Dual License)**: The source code of this project (including the Next.js implementation, GSAP animations, and styling) is released under either the [MIT License](LICENSE) **OR** the [GNU GPLv3](LICENSE-GPL). Developers are free to choose the license that best fits their distribution needs.
- **Content & Assets**: All copyrights regarding historical texts, narratives, photography, branding, and the visual identity of "Desa Duwet" are **strictly protected (All Rights Reserved)**. Unauthorized use, copying, or redistribution of these specific assets for other entities is strictly prohibited.

## 👨‍💻 Author & Credits

Developed by **Yosua Surianto (Dracoo)**.

---
*Developed with precision, critical thinking, and respect for heritage.*
