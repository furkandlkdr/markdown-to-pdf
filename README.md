# Markdown to Dark-PDF Converter / Koyu Temalı PDF Çevirici 🌒

[English](#english) | [Türkçe](#türkçe)

---

## English

A premium, client-side web application designed to convert Markdown text into elegant, highly customizable, and dark-themed PDF documents. The application runs entirely inside the web browser—ensuring complete privacy as no data is ever transmitted to a server.

### ✨ Features
*   **Live Interactive Preview:** Type Markdown code on the left and see it instantly rendered as a simulated A4/Letter page mockup on the right.
*   **Vector-Quality PDF Output:** Utilizes the browser's native print framework to generate high-fidelity vector PDFs with fully selectable text, copyable code snippets, and clickable hyperlinks.
*   **Mobile-First Responsive Layout:** Features a bottom navigation tab bar on smaller viewports, allowing users to seamlessly transition between the *Editor*, *Live Preview*, and *Settings* drawers.
*   **5 Premium Dark Themes:**
    *   **Midnight Dark:** Deep blue-black backgrounds combined with ice-blue highlight accents.
    *   **Dracula:** The classic, beloved soft-purple coding environment aesthetic.
    *   **Nordic Night:** A sleek, slate-gray canvas inspired by the cold hues of arctic environments.
    *   **Cyberpunk Neo:** Deep pitch-black background matched with neon magenta and cyan highlights.
    *   **Monokai Obsidian:** A warm charcoal canvas with high-contrast pastel accents.
*   **Precise Page Breaks:** Simply insert `<div class="page-break"></div>` to enforce custom page breaks in your final PDF.
*   **Typography Controls:** Customize font families (Inter, Merriweather, JetBrains Mono) and text size (from 12px to 22px) in real-time.
*   **Syntax Highlighting:** Integrated with PrismJS to highlight code blocks automatically matching the active dark theme.
*   **Auto-Save:** Saves document contents and configuration settings locally via `localStorage` so your progress is preserved across browser sessions.

### 🤫 Secret Feature: PDF Color Inverter
Convert any standard light-themed PDF document into a high-quality dark mode PDF with fully selectable, copyable, and searchable text!
*   **How to Activate:** **Double-click** the **MD to PDF** brand logo at the top-left of the header.
*   **How it Works:** Select a PDF from the file chooser. The app will render the pages in high resolution with inverted colors, overlaid with a transparent text layer.
*   **How to Save:** Click **Save PDF** in the header, then choose "Save as PDF" in the browser's print dialog (remember to check the "Background graphics" option).
*   **How to Exit:** Click the **Close** button in the header to return to your Markdown editor.

### 🛠️ Built With
- **Structure:** Semantic HTML5
- **Styling:** Custom Vanilla CSS (featuring glassmorphic interfaces and responsive layout blocks)
- **Engine:** Marked.js for fast Markdown parsing, PrismJS for code highlighting, and Lucide Icons for vector symbols

---

## Türkçe

Markdown formatında yazılmış metinleri modern, şık ve koyu temalı (dark mode) PDF belgelerine dönüştüren web tabanlı, mobil uyumlu ve sunucusuz bir araçtır. 

Uygulama tamamen tarayıcı üzerinde (client-side) çalışır; verilerinizin güvenliği ve gizliliği açısından girdiğiniz hiçbir içerik sunucuya gönderilmez.

### ✨ Özellikler
*   **Canlı Önizleme:** Sol panelde Markdown yazarken sağ tarafta çıktıyı A4/Letter sayfa düzeninde ve seçtiğiniz koyu temada anlık olarak simüle edin.
*   **Vektörel PDF Çıktısı:** Tarayıcının yazdırma altyapısını kullanarak çözünürlük kaybı olmadan seçilebilir metinlere, kopyalanabilir kod bloklarına ve tıklanabilir köprülere sahip PDF'ler üretir.
*   **Mobil Uyumlu Arayüz (Responsive):** Mobil ekranlarda alanı verimli kullanmak adına *Editör*, *Önizleme* ve *Ayarlar* arasında tek dokunuşla geçiş sağlayan alt tab bar navigasyonu sunar.
*   **5 Premium Koyu Tema Seçeneği:**
    *   **Midnight Dark:** Derin mavi-siyah tonları ve buz mavisi vurgular.
    *   **Dracula:** Klasik vampir yazılımcı teması.
    *   **Nordic Night:** İskandinav grisi ve sakinleştirici soğuk tonlar.
    *   **Cyberpunk Neo:** Saf siyah arka plan ve parlak neon pembe/turkuaz vurgular.
    *   **Monokai Obsidian:** Sıcak kömür arka planı ve pastel tonlar.
*   **Gelişmiş Sayfa Sonu Desteği:** Belgenizde yeni bir sayfaya geçilmesini istediğiniz yere `<div class="page-break"></div>` eklemeniz yeterlidir.
*   **Tipografi Kontrolleri:** Yazı tiplerini (Inter, Merriweather, JetBrains Mono) ve boyutunu (12px - 22px) canlı olarak özelleştirebilirsiniz.
*   **Kod Renklendirmesi:** PrismJS entegrasyonu sayesinde kod blokları otomatik olarak seçilen temayla uyumlu renklendirilir.
*   **Otomatik Kaydet:** Metniniz ve tüm tercihleriniz tarayıcının `localStorage` alanına kaydedilir, sayfa yenilense de verileriniz kaybolmaz.

### 🤫 Gizli Özellik: PDF Renk Çevirici (PDF Inverter)
Mevcut herhangi bir açık renkli standart PDF belgesini yükleyip renklerini koyu moda (dark mode) çevirebilirsiniz. Üstelik metin seçilebilirliği, kopyalama ve arama (`Ctrl + F`) özellikleri tamamen korunur!
*   **Nasıl Çalıştırılır:** Sol üst köşedeki **MD to PDF** logosuna **çift tıklayın**.
*   **Nasıl Kullanılır:** Dosya seçiciden PDF belgenizi seçin. Belgeniz metin seçilebilirliği korunarak karanlık temada render edilecektir.
*   **Koyu PDF Olarak Kaydetme:** Sağ üstteki **PDF Kaydet** butonuna tıklayıp tarayıcı yazdırma penceresinde "PDF Olarak Kaydet" yapın (lütfen yönlendirmede belirtildiği gibi *Arka plan grafikleri* seçeneğini etkin tutun).
*   **Kapatma:** Normal Markdown editörüne geri dönmek için üst bardaki **Kapat** butonuna basmanız yeterlidir.

### 🛠️ Kullanılan Teknolojiler
- **Yapı:** Semantik HTML5
- **Stil:** Saf CSS3 (Glassmorphism ve duyarlı mobil şablonlar)
- **Kütüphaneler:** Marked.js (Markdown derleme), PrismJS (Kod vurgulama) ve Lucide Icons (Vektörel simgeler)
