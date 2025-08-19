# Statik Blog (HTML/CSS/JS + localStorage)
Bu proje, **sadece HTML/CSS/JS kullanarak** çalışan basit bir blog ve istemci tarafı "admin" paneli örneğidir.
> Not: Güvenlik açısından gerçek bir admin sistemi için backend gerekir. Bu proje DEMO amaçlıdır.

## Özellikler
- Yazıları listele, tekil yazıyı görüntüle
- Admin girişi (demo) ve yazı ekle/düzenle/sil
- İçerikler `localStorage`'da tutulur
- GitHub Pages üzerinde çalışır

## Kurulum
1. Bu projeyi ZIP olarak indirin ve GitHub reposuna yükleyin.
2. GitHub Pages'ı etkinleştirin (root veya `/docs` klasörü).
3. Varsayılan yönetici: kullanıcı adı **admin**, şifre **admin123** (değiştirin!).
   - `config.js` içinden `ADMIN_DEFAULT_PASSWORD_HASH` değerini kendi şifrenizin SHA-256 hash'iyle değiştirin.
   - Hash üretmek için tarayıcı konsolunda: `await crypto.subtle.digest("SHA-256", new TextEncoder().encode("yeniSifre"))`

## Sayfalar
- `index.html` → Anasayfa, yazı listesi
- `post.html?slug=...` → Tekil yazı
- `admin.html` → Giriş
- `dashboard.html` → Yazı yönetimi

## Uyarı
- Sadece istemci tarafı olduğu için gerçek güvenlik sağlamaz.
