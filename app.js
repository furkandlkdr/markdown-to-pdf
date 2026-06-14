document.addEventListener('DOMContentLoaded', () => {
  // Lucide Icons initialization
  lucide.createIcons();

  // DOM Elements
  const markdownInput = document.getElementById('markdown-input');
  const previewOutput = document.getElementById('preview-output');
  const previewWrapper = document.getElementById('preview-wrapper');
  
  const selectTheme = document.getElementById('select-theme');
  const selectPageSize = document.getElementById('select-page-size');
  const selectMargins = document.getElementById('select-margins');
  const selectFont = document.getElementById('select-font');
  const inputFontSize = document.getElementById('input-font-size');
  const fontSizeVal = document.getElementById('font-size-val');
  
  const checkSyncScroll = document.getElementById('check-sync-scroll');
  const checkPageBreaks = document.getElementById('check-page-breaks');
  
  const btnHeaderPrint = document.getElementById('btn-header-print');
  const btnClear = document.getElementById('btn-clear');
  const btnPrintBrowser = document.getElementById('btn-print-browser');
  
  // Mobile Tabs Elements
  const tabEdit = document.getElementById('tab-edit');
  const tabPreview = document.getElementById('tab-preview');
  const tabSettings = document.getElementById('tab-settings');
  const appMain = document.querySelector('.app-main');
  
  // Modals
  const printInstruction = document.getElementById('print-instruction');
  const btnStartPrint = document.getElementById('btn-start-print');
  const btnCloseInstruction = document.getElementById('btn-close-instruction');
  
  // Counters
  const wordCount = document.getElementById('word-count');
  const charCount = document.getElementById('char-count');

  // Default Markdown Template
  const demoMarkdown = `# Markdown'dan Dark PDF'e Çevirici 🌒

Bu araç, Markdown formatındaki metinlerinizi anında şık, modern ve koyu temalı PDF belgelerine dönüştürmenizi sağlar. **md.furkan.software** üzerinde tamamen tarayıcı tabanlı çalışır, verileriniz sunucuya gönderilmez.

---

## ⚡ Özellikler
*   **Canlı Önizleme:** Yazdığınız anda A4/Letter sayfa düzeninde çıktıyı görün.
*   **5 Premium Koyu Tema:** Midnight, Dracula, Nord, Cyberpunk ve Obsidian.
*   **Vektör PDF Çıktısı (Önerilen):** Seçilebilir yazılar, tıklanabilir linkler ve sıfır kalite kaybı.
*   **Özelleştirilebilir Tipografi:** Yazı tiplerini ve boyutlarını canlı olarak ayarlayın.
*   **Kod Vurgulama (PrismJS):** Tüm programlama dilleri için koyu temalı sözdizimi renklendirmesi.
*   **Sayfa Sonu Desteği:** Belirli bir yerde sayfanın bölünmesini istiyorsanız aşağıdaki sayfa sonu etiketini eklemeniz yeterlidir.

---

## 💻 Kod Bloğu Örneği
Aşağıda PrismJS ile renklendirilmiş bir JavaScript kodu görebilirsiniz:

\`\`\`javascript
// Markdown'dan HTML'e çeviri ve renklendirme işlemi
function updatePreview() {
  const markdownText = markdownInput.value;
  
  // MarkedJS derlemesi
  previewOutput.innerHTML = marked.parse(markdownText);
  
  // Kod renklendirmesini tetikle
  Prism.highlightAllUnder(previewOutput);
  
  // İstatistikleri güncelle
  updateStats(markdownText);
}
\`\`\`

---

## 📊 Tablo Örneği

| Tema Adı | Arka Plan Rengi | Vurgu Rengi | Karakteristik |
| :--- | :---: | :---: | :--- |
| **Midnight** | \`#080b11\` | Ice Blue | Sakin ve Derin Mavi |
| **Dracula** | \`#282a36\` | Pink | Klasik Yazılımcı Teması |
| **Nord** | \`#2e3440\` | Frost Slate | İskandinav Grisi ve Soğuk |
| **Cyberpunk** | \`#030303\` | Neon Magenta | Retro-Fütüristik Parlaklık |

<div class="page-break"></div>

## 📌 Sayfa Sonu (Page Break) Kullanımı
Üstteki \`<div class="page-break"></div>\` etiketi sayesinde bu başlık otomatik olarak **yeni bir sayfada** başlayacaktır. 

> **Önemli İpucu:** PDF alırken tarayıcı ayarlarında "Arka plan grafiklerini yazdır" (Print backgrounds) seçeneğinin **etkin** olduğundan emin olun, aksi takdirde sayfalar koyu renk yerine beyaz basılacaktır.

### 📝 Yapılacaklar Listesi (Task List)
- [x] HTML yapısını oluştur
- [x] Koyu temaları CSS ile tasarla
- [x] Canlı markdown derlemesini tamamla
- [x] Yazdırma stil şablonlarını optimize et
- [ ] Kendi markdown içeriklerinizi yazmaya başlayın!

### ✍️ Blok Alıntı (Blockquote)
> "Sadelik, mükemmelliğe giden en sofistike yoldur." 
> — *Steve Jobs*

Belgenizi hazırladıktan sonra sol menüdeki **Tarayıcı ile Yazdır / Kaydet** butonuna basarak PDF olarak kaydedebilirsiniz. Keyifli yazımlar!
`;

  // Init variables for scroll synchronization
  let isScrollingEditor = false;
  let isScrollingPreview = false;

  /* ==========================================================================
     CORE FUNCTIONS
     ========================================================================== */

  // Load user settings from localStorage or use defaults
  function loadSettings() {
    const settings = JSON.parse(localStorage.getItem('md-to-pdf-settings')) || {
      theme: 'theme-midnight',
      pageSize: 'a4',
      margin: 'margin-normal',
      font: 'font-sans',
      fontSize: 16,
      syncScroll: true,
      pageBreaks: true,
      content: demoMarkdown
    };

    // Apply settings to elements
    selectTheme.value = settings.theme;
    selectPageSize.value = settings.pageSize;
    selectMargins.value = settings.margin;
    selectFont.value = settings.font;
    inputFontSize.value = settings.fontSize;
    fontSizeVal.textContent = `${settings.fontSize}px`;
    checkSyncScroll.checked = settings.syncScroll;
    checkPageBreaks.checked = settings.pageBreaks;
    
    // Apply body classes
    document.body.className = settings.theme;
    
    // Set markdown content
    markdownInput.value = settings.content;
    
    updatePreviewClass();
    updatePrintPageSettings();
  }

  // Save settings to localStorage
  function saveSettings() {
    const settings = {
      theme: selectTheme.value,
      pageSize: selectPageSize.value,
      margin: selectMargins.value,
      font: selectFont.value,
      fontSize: inputFontSize.value,
      syncScroll: checkSyncScroll.checked,
      pageBreaks: checkPageBreaks.checked,
      content: markdownInput.value
    };
    localStorage.setItem('md-to-pdf-settings', JSON.stringify(settings));
  }

  // Markdown live rendering
  function renderMarkdown() {
    const content = markdownInput.value;
    
    if (typeof marked !== 'undefined') {
      // Configure marked for line breaks and auto links
      marked.use({
        breaks: true,
        gfm: true
      });
      previewOutput.innerHTML = marked.parse(content);
      
      // Prism highlight triggers
      if (typeof Prism !== 'undefined') {
        Prism.highlightAllUnder(previewOutput);
      }
    }
    
    updateStats(content);
    saveSettings();
  }

  // Update counters
  function updateStats(text) {
    const chars = text.length;
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    
    charCount.textContent = `${chars} karakter`;
    wordCount.textContent = `${words} kelime`;
  }

  // Apply Preview styles dynamically
  function updatePreviewClass() {
    // Reset classes
    previewOutput.className = 'markdown-body';
    
    // Add selected attributes
    previewOutput.classList.add(selectFont.value);
    previewOutput.classList.add(selectMargins.value);
    previewOutput.classList.add(selectPageSize.value);
    
    if (!checkPageBreaks.checked) {
      previewOutput.classList.add('hide-breaks');
    }
    
    // Recalculate size display info
    const sizeTexts = {
      a4: 'A4 Dikey (210mm x 297mm)',
      letter: 'Letter Dikey (215.9mm x 279.4mm)',
      a5: 'A5 Dikey (148mm x 210mm)'
    };
    document.querySelector('.preview-info span').textContent = sizeTexts[selectPageSize.value];
    
    // Inline Font Size
    previewOutput.style.fontSize = `${inputFontSize.value}px`;
    fontSizeVal.textContent = `${inputFontSize.value}px`;
  }

  // Inject dynamic print css configuration
  function updatePrintPageSettings() {
    const pageSize = selectPageSize.value;
    const marginType = selectMargins.value;
    
    let marginValue = '20mm';
    if (marginType === 'margin-narrow') marginValue = '10mm';
    else if (marginType === 'margin-wide') marginValue = '30mm';
    else if (marginType === 'margin-none') marginValue = '0mm';
    
    const pageStyle = `
      @media print {
        @page {
          size: ${pageSize} portrait;
          margin: ${marginValue};
        }
      }
    `;
    
    let styleTag = document.getElementById('dynamic-print-style');
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = 'dynamic-print-style';
      document.head.appendChild(styleTag);
    }
    styleTag.textContent = pageStyle;
  }

  // Intercept Tab Key inside editor
  function handleTabKey(e) {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = markdownInput.selectionStart;
      const end = markdownInput.selectionEnd;
      
      // Insert 4 spaces
      markdownInput.value = markdownInput.value.substring(0, start) + "    " + markdownInput.value.substring(end);
      
      // Reposition cursor
      markdownInput.selectionStart = markdownInput.selectionEnd = start + 4;
      
      renderMarkdown();
    }
  }

  // Mobile Tabs Switching
  function setActiveTab(tabName) {
    if (!tabEdit || !tabPreview || !tabSettings || !appMain) return;
    
    tabEdit.classList.remove('active');
    tabPreview.classList.remove('active');
    tabSettings.classList.remove('active');
    
    appMain.classList.remove('show-editor', 'show-preview', 'show-settings');
    
    if (tabName === 'editor') {
      tabEdit.classList.add('active');
      appMain.classList.add('show-editor');
    } else if (tabName === 'preview') {
      tabPreview.classList.add('active');
      appMain.classList.add('show-preview');
      renderMarkdown(); // Trigger re-render to make sure size measurements are correct
    } else if (tabName === 'settings') {
      tabSettings.classList.add('active');
      appMain.classList.add('show-settings');
    }
  }

  /* ==========================================================================
     EVENT LISTENERS & BINDINGS
     ========================================================================== */

  // Settings modification events
  selectTheme.addEventListener('change', () => {
    document.body.className = selectTheme.value;
    saveSettings();
  });

  selectPageSize.addEventListener('change', () => {
    updatePreviewClass();
    updatePrintPageSettings();
    saveSettings();
  });

  selectMargins.addEventListener('change', () => {
    updatePreviewClass();
    updatePrintPageSettings();
    saveSettings();
  });

  selectFont.addEventListener('change', () => {
    updatePreviewClass();
    saveSettings();
  });

  inputFontSize.addEventListener('input', () => {
    updatePreviewClass();
    saveSettings();
  });

  checkPageBreaks.addEventListener('change', () => {
    updatePreviewClass();
    saveSettings();
  });

  checkSyncScroll.addEventListener('change', () => {
    saveSettings();
  });

  // Editor typing event
  markdownInput.addEventListener('input', renderMarkdown);
  markdownInput.addEventListener('keydown', handleTabKey);

  // Mobile tabs events
  if (tabEdit && tabPreview && tabSettings) {
    tabEdit.addEventListener('click', () => setActiveTab('editor'));
    tabPreview.addEventListener('click', () => setActiveTab('preview'));
    tabSettings.addEventListener('click', () => setActiveTab('settings'));
  }

  // Scroll Sync Logic
  markdownInput.addEventListener('scroll', () => {
    if (!checkSyncScroll.checked) return;
    if (isScrollingPreview) {
      isScrollingPreview = false;
      return;
    }
    isScrollingEditor = true;
    const scrollPercentage = markdownInput.scrollTop / (markdownInput.scrollHeight - markdownInput.clientHeight);
    previewWrapper.scrollTop = scrollPercentage * (previewWrapper.scrollHeight - previewWrapper.clientHeight);
  });

  previewWrapper.addEventListener('scroll', () => {
    if (!checkSyncScroll.checked) return;
    if (isScrollingEditor) {
      isScrollingEditor = false;
      return;
    }
    isScrollingPreview = true;
    const scrollPercentage = previewWrapper.scrollTop / (previewWrapper.scrollHeight - previewWrapper.clientHeight);
    markdownInput.scrollTop = scrollPercentage * (markdownInput.scrollHeight - markdownInput.clientHeight);
  });

  // Clear Editor
  btnClear.addEventListener('click', () => {
    if (confirm('Tüm metni temizlemek istediğinize emin misiniz?')) {
      markdownInput.value = '';
      renderMarkdown();
      setActiveTab('editor');
    }
  });

  // High Quality Browser Print
  const handlePrintTrigger = () => {
    if (typeof window.print !== 'function') {
      alert("Tarayıcınız doğrudan yazdırma/kaydetme komutunu desteklemiyor.\n\nAlternatif Çözüm:\n1. Tarayıcınızın sağ üstündeki üç noktaya (menü) dokunun.\n2. 'Paylaş' seçeneğini seçin.\n3. Açılan listeden 'Yazdır'ı seçerek PDF olarak kaydedebilirsiniz.");
      return;
    }
    printInstruction.classList.add('active');
  };

  if (btnPrintBrowser) {
    btnPrintBrowser.addEventListener('click', handlePrintTrigger);
  }
  if (btnHeaderPrint) {
    btnHeaderPrint.addEventListener('click', handlePrintTrigger);
  }

  btnStartPrint.addEventListener('click', () => {
    printInstruction.classList.remove('active');
    if (typeof window.print === 'function') {
      window.print();
    } else {
      alert("Yazdırma desteği bulunamadı.");
    }
  });

  btnCloseInstruction.addEventListener('click', () => {
    printInstruction.classList.remove('active');
  });

  // Close modal when clicking outside content
  printInstruction.addEventListener('click', (e) => {
    if (e.target === printInstruction) {
      printInstruction.classList.remove('active');
    }
  });

  // Initial Load Trigger
  loadSettings();
  // Only set to demoMarkdown if there are no settings in localStorage at all (first visit)
  const hasSavedSettings = localStorage.getItem('md-to-pdf-settings') !== null;
  if (!hasSavedSettings && markdownInput.value === '') {
    markdownInput.value = demoMarkdown;
    saveSettings();
  }
  renderMarkdown();
  
  // Set default view on load
  setActiveTab('editor');
});
