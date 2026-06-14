# Markdown to Dark-PDF Converter 🌒

Bu proje, Markdown formatında yazılmış metinlerinizi anında modern, şık ve koyu temalı (dark mode) PDF belgelerine dönüştüren web tabanlı, **mobil uyumlu (responsive)** ve sunucusuz (serverless) bir araçtır.

Uygulama tamamen tarayıcı üzerinde çalışır ve girdiğiniz verileri hiçbir sunucuya göndermez. Siteniz **md.furkan.software** gibi özel bir alt alan adı üzerinden GitHub Pages üzerinde barındırılmak üzere optimize edilmiştir.

---

## ✨ Özellikler

- **Canlı Önizleme:** Yazdığınız Markdown belgelerini anında A4/Letter sayfa düzeninde ve seçtiğiniz koyu temada görüntüleyin.
- **Yüksek Kaliteli Vektör PDF Çıktısı:** Tarayıcının yazdırma altyapısını kullanarak çözünürlük kaybı olmadan seçilebilir metin, kopyalanabilir kodlar ve tıklanabilir köprü bağlantıları içeren PDF'ler üretir.
- **Mobil Desteği (Responsive):** Mobil cihazlarda ekranı verimli kullanabilmek için *Editör*, *Önizleme* ve *Ayarlar* arasında geçiş sağlayan alt tab bar navigasyonu sunar.
- **5 Premium Koyu Tema:**
  - **Midnight Dark:** Derin mavi-siyah tonları ve buz mavisi vurgular.
  - **Dracula:** Klasik vampir yazılımcı teması.
  - **Nordic Night:** İskandinav grisi ve sakinleştirici soğuk tonlar.
  - **Cyberpunk Neo:** Saf siyah arka plan ve parlak neon renkler.
  - **Monokai Obsidian:** Sıcak kömür arka planı ve pastel tonlar.
- **Sayfa Sonu (Page Break) Desteği:** Belgenizin belirli bir noktadan sonra yeni bir sayfaya geçmesini sağlamak için `<div class="page-break"></div>` eklemeniz yeterlidir.
- **Tipografi Ayarları:** Yazı tipi (Inter, Merriweather, JetBrains Mono) ve boyutunu (12px - 22px) canlı olarak özelleştirebilirsiniz.
- **Kod Renklendirmesi:** PrismJS entegrasyonu sayesinde kod blokları otomatik olarak seçilen temayla uyumlu sözdizimi renklendirmesine kavuşur.
- **Yerel Depolama (Auto-Save):** Yazdığınız metinler ve tüm görünüm tercihleriniz tarayıcının `localStorage` alanına kaydedilir, böylece sayfa yenilendiğinde verileriniz kaybolmaz.
- **Dahili Favicon:** Emoji tabanlı hafif SVG favicon kullanılmıştır, harici dosya yükü oluşturmaz.

---

## 📂 Dosya Yapısı

```
md-to-pdf/
├── CNAME          # GitHub Pages için alan adı tanımlama (md.furkan.software)
├── index.html     # Uygulamanın HTML yapısı ve CDN bağlantıları
├── style.css      # Modern arayüz tasarımı, koyu temalar ve mobil uyumluluk stilleri
├── app.js         # Markdown derleme, senkronize kaydırma ve yazdırma yönetimi
└── README.md      # Proje tanıtım ve kurulum dökümanı
```

---

## 🛠️ Kurulum ve Yayına Alma (GitHub Pages)

Projeyi kendi GitHub hesabınızda yayınlamak için şu adımları izleyin:

1. **GitHub Üzerinde Yeni Bir Depo (Repository) Oluşturun:**
   - Depo adını girin (örn: `md-to-pdf`).
   - Depoyu **Public** (Açık) olarak işaretleyin.

2. **Kodu Depoya Gönderin:**
   Proje dizininde bir terminal açıp aşağıdaki komutları uygulayın:
   ```bash
   git init
   git add .
   git commit -m "feat: mobil uyumlu dark md-to-pdf ilk sürüm"
   git branch -M main
   git remote add origin https://github.com/KULLANICI_ADINIZ/md-to-pdf.git
   git push -u origin main
   ```

3. **GitHub Pages Ayarını Aktifleştirin:**
   - GitHub deponuzun sayfasında **Settings** > **Pages** sekmesine gidin.
   - **Build and deployment** > **Source** alanını *Deploy from a branch* yapın.
   - **Branch** alanını *main* (veya `/root`) olarak seçip **Save** butonuna basın.

---

## 🌐 Özel Alan Adı (Custom Domain) Kurulumu: `md.furkan.software`

Projede bulunan `CNAME` dosyası otomatik olarak GitHub sunucularına sitenin `md.furkan.software` üzerinden çalışacağını söyler. Sitenizin açılması için alan adı yöneticinizde (örn. Cloudflare, GoDaddy) bir DNS kaydı oluşturmalısınız.

### DNS Kaydı Ekleme (CNAME)

DNS panelinizde aşağıdaki değerlerle yeni bir kayıt oluşturun:

| Tip (Type) | İsim / Host (Name) | Hedef / Değer (Value) | TTL |
| :---: | :--- | :--- | :---: |
| **CNAME** | `md` | `KULLANICI_ADINIZ.github.io` | Otomatik (Auto) |

> **Not:** `KULLANICI_ADINIZ` kısmını kendi GitHub kullanıcı adınızla değiştirmeyi unutmayın (Örn: `furkan.github.io`). DNS kayıtlarının güncellenmesi servis sağlayıcınıza bağlı olarak birkaç dakika sürebilir.
