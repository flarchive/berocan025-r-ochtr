/*!
 * Flarum Türkiye — Türkçe dil paketi imzası
 * Bu betik, dil paketinin yüklü olduğu sitenin alt bilgisine görünür bir
 * "Türkçe çeviri · Flarum Türkiye" kredisi ekler ve flarumturkiye.com'a bağlar.
 * Kaldırmak isterseniz bu eklentiyi yönetim panelinden devre dışı bırakmanız yeterlidir.
 */
(function () {
  if (window.__ftCeviriImza) return;
  window.__ftCeviriImza = true;

  var ADRES = 'https://flarumturkiye.com/?utm_source=dil-paketi&utm_medium=footer&utm_campaign=imza';

  // Kendi içinde animasyonlu SVG imza (dış dosya/font gerektirmez). SVG çalışmazsa yazı görünür.
  var SVG =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 64" width="188" height="40" role="img" aria-label="Türkçe çeviri: Flarum Türkiye" focusable="false">' +
    '<defs>' +
    '<linearGradient id="ftiz-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F2914F"/><stop offset="1" stop-color="#E35D22"/></linearGradient>' +
    '<linearGradient id="ftiz-t" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#F6A064"/><stop offset=".5" stop-color="#E7672E"/><stop offset="1" stop-color="#F6A064"/></linearGradient>' +
    '<path id="ftiz-b" d="M14 8h36a8 8 0 0 1 8 8v22a8 8 0 0 1-8 8H30l-12 10v-10h-4a8 8 0 0 1-8-8V16a8 8 0 0 1 8-8z"/>' +
    '<clipPath id="ftiz-c"><use href="#ftiz-b"/></clipPath>' +
    '<style>.ftiz-balon{transform-origin:34px 34px;animation:ftiz-yuz 5s ease-in-out infinite}.ftiz-par{animation:ftiz-kay 3.6s ease-in-out infinite}.ftiz-c1{animation:ftiz-n 1.8s ease-in-out infinite}.ftiz-c2{animation:ftiz-n 1.8s ease-in-out infinite .3s}.ftiz-ad{font:700 20px Poppins,\'Segoe UI\',system-ui,-apple-system,Arial,sans-serif;letter-spacing:-.4px}.ftiz-ust{font:600 10px Poppins,\'Segoe UI\',system-ui,-apple-system,Arial,sans-serif;letter-spacing:2.4px}.ftiz-l{animation:ftiz-l 3.6s ease-in-out infinite;transform-origin:74px 54px}@keyframes ftiz-yuz{0%,100%{transform:scale(1)}50%{transform:scale(1.06) rotate(-3deg)}}@keyframes ftiz-kay{0%,55%{transform:translateX(0);opacity:0}70%{opacity:.85}100%{transform:translateX(74px);opacity:0}}@keyframes ftiz-n{0%,60%,100%{opacity:.5}30%{opacity:1}}@keyframes ftiz-l{0%,100%{transform:scaleX(.35);opacity:.5}50%{transform:scaleX(1);opacity:1}}@media (prefers-reduced-motion:reduce){.ftiz-balon,.ftiz-par,.ftiz-c1,.ftiz-c2,.ftiz-l{animation:none}.ftiz-par{opacity:0}}</style>' +
    '</defs>' +
    '<g class="ftiz-balon"><use href="#ftiz-b" fill="#000" opacity=".16" transform="translate(1 2)"/><use href="#ftiz-b" fill="url(#ftiz-g)"/><g clip-path="url(#ftiz-c)"><rect class="ftiz-par" x="-16" y="-6" width="12" height="76" fill="#fff" opacity="0"/></g><rect class="ftiz-c1" x="17" y="20" width="30" height="5" rx="2.5" fill="#fff"/><rect class="ftiz-c2" x="17" y="30" width="20" height="5" rx="2.5" fill="#fff"/></g>' +
    '<text class="ftiz-ust" x="74" y="24" fill="#9aa0ab">TÜRKÇE ÇEVİRİ</text>' +
    '<text class="ftiz-ad" x="73" y="47" fill="url(#ftiz-t)">Flarum Türkiye</text>' +
    '<rect class="ftiz-l" x="74" y="53" width="150" height="2" rx="1" fill="url(#ftiz-t)"/>' +
    '</svg>';

  function olustur() {
    var sar = document.createElement('div');
    sar.className = 'ft-ceviri-imza';
    sar.setAttribute('style', 'display:flex;justify-content:center;align-items:center;gap:8px;padding:16px 12px calc(16px + env(safe-area-inset-bottom));text-align:center;');
    var a = document.createElement('a');
    a.href = ADRES;
    a.target = '_blank';
    a.rel = 'noopener';
    a.setAttribute('aria-label', 'Türkçe çeviri: Flarum Türkiye — flarumturkiye.com');
    a.setAttribute('style', 'display:inline-flex;align-items:center;gap:9px;text-decoration:none;opacity:.85;transition:opacity .2s,transform .2s;line-height:1;');
    a.onmouseenter = function () { a.style.opacity = '1'; a.style.transform = 'translateY(-1px)'; };
    a.onmouseleave = function () { a.style.opacity = '.85'; a.style.transform = 'none'; };
    // Animasyonlu SVG imza + görsel çalışmazsa görünecek yazı yedeği
    a.innerHTML = SVG + '<span class="ft-ceviri-yedek" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);">Türkçe çeviri · Flarum Türkiye</span>';
    sar.appendChild(a);
    return sar;
  }

  function yerlestir() {
    if (document.querySelector('.ft-ceviri-imza')) return true;
    var hedef = document.querySelector('#app .App-footer, #footer, .App-footer, #app');
    if (!hedef) return false;
    var imza = olustur();
    if (hedef.id === 'app') hedef.appendChild(imza);
    else hedef.appendChild(imza);
    return true;
  }

  function baslat() {
    if (!yerlestir()) return;
    // SPA geçişlerinde (footer yeniden çizilirse) tekrar ekle
    setInterval(function () { if (!document.querySelector('.ft-ceviri-imza')) yerlestir(); }, 1500);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', baslat);
  else baslat();
})();
