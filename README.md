# Türkçe · Flarum Türkiye

[flarumturkiye.com](https://flarumturkiye.com) tarafından hazırlanan, Flarum 2.0
için **eksiksiz ve gözden geçirilmiş Türkçe dil paketi**.

Çekirdek Flarum'un yanı sıra en yaygın eklentilerin çevirilerini de içerir;
Türkçe'ye özgü ifadeler, tarih biçimleri ve kibar dil kullanımı elden geçirilmiştir.

## Kurulum

**Composer ile (önerilen):**

```bash
composer require flarumturkiye/turkce
php flarum cache:clear
```

**Elle kurulum:**

1. Bu klasörü sitenizdeki `packages/flarumturkiye-turkce` dizinine kopyalayın.
2. `composer.json` dosyanıza yol deposu ekleyip paketi isteyin ya da
   Flarum'un `extend.php` yapılandırmasına dahil edin.
3. Yönetim panelinden **Türkçe · Flarum Türkiye** eklentisini etkinleştirin.
4. Ayarlar → Görünüm'den varsayılan dili **Türkçe** seçin.

## Çeviri imzası

Bu paket, kurulduğu sitenin alt bilgisine görünür bir çeviri kredisi ekler:

> **Türkçe çeviri · Flarum Türkiye** → flarumturkiye.com

Bu, emeğin kaynağını göstermek içindir ve bağlantı yeni sekmede açılır.
İmzayı kaldırmak isterseniz eklentiyi yönetim panelinden devre dışı bırakmanız
yeterlidir; gizli ya da kaldırılamaz bir öğe yoktur.

## Katkı ve destek

Eksik ya da hatalı bir çeviri gördüyseniz
[Flarum Türkiye](https://flarumturkiye.com) üzerinden bize bildirin.

## Lisans

MIT — çeviri metinleri dahil serbestçe kullanılabilir. Kaynak gösterimi
(alt bilgi imzası) paketin bir parçasıdır; dilerseniz eklentiyi kapatabilirsiniz.

© Flarum Türkiye · Flarum Vakfı'nın resmi projesi değildir.
