# Sanal Köşe Blog

Sanal Köşe, modern web teknolojileri kullanılarak oluşturulmuş, kullanıcı dostu ve dinamik bir blog platformudur. Bu proje, temel HTML, CSS ve JavaScript (Vanilla JS) ile geliştirilmiştir, herhangi bir framework veya kütüphane bağımlılığı bulunmamaktadır.

Bu proje, bir blogun temel fonksiyonlarını (yazı okuma, listeleme, yazar paneli, tema değiştirme) içerir ve hem son kullanıcılar hem de içerik yöneticileri için sade bir deneyim sunar.

## Özellikler

- **Dinamik İçerik Yönetimi:** Basit bir JSON dosyasını veritabanı gibi kullanarak blog yazılarını yönetir. Yönetim paneli üzerinden yeni yazı ekleme, düzenleme ve silme işlemleri yapılabilir.
- **Yönetim Paneli (Admin Paneli):Mevcut blog sayfasının temelleri bu projeyle atılmıştır.
- **Duyarlı Tasarım:** Tüm sayfalar farklı ekran boyutlarına uyum sağlayacak şekilde tasarlanmıştır.
- **Koyu & Açık Tema:** Kullanıcıların tercihine göre tema değiştirme özelliği bulunur. Bu özellik, CSS değişkenleri (`CSS Variables`) ile kolayca yönetilir.
- **URL Yönetimi:** Blog yazılarına, slug yapısı sayesinde okunabilir ve SEO dostu URL'ler atanır.
- **Yorum Sistemi:** Her yazıya yorum eklenebilir, bu yorumlar `comments.json` dosyasında saklanır.
- **Modüler JavaScript:** Proje, farklı görevler için ayrı JavaScript dosyalarına (örneğin: `admin.js`, `main.js`, `theme.js`) bölünmüştür.

## Kullanılan Teknolojiler

- **HTML5:** Sayfa yapısını oluşturmak için.
- **CSS3:** Sayfa stili ve düzeni için.
- **JavaScript (Vanilla JS):** Dinamik işlevsellik ve sayfa mantığı için.
- **Quill JS:** Yönetim panelindeki zengin metin editörü için.
- **GitHub Pages:** Projeyi canlıya almak için kullanılabilir.

## Kurulum ve Çalıştırma

1.  Bu depoyu yerel makinenize klonlayın:
    ```bash
    git clone [https://github.com/muhammetjan625/blogsayfam.git](https://github.com/muhammetjan625/blogsayfam.git)
    ```
2.  Proje dizinine gidin:
    ```bash
    cd blogsayfam
    ```
3.  Dosyaları bir web sunucusu üzerinde açın veya tarayıcınızda doğrudan `index.html` dosyasını çalıştırın. JSON verilerini yerel olarak okuyabilmesi için bir Live Server (VS Code uzantısı) kullanmanız önerilir.

---

<p align="center">
    <a href="https://github.com/muhammetjan625/blogsayfam/blob/main/LICENSE">MIT License</a> | &copy; 2024 Sanal Köşe
</p>
