<?php

/*
 * Flarum Türkiye — Türkçe dil paketi
 * https://flarumturkiye.com
 *
 * Bu paket Flarum'un tamamını Türkçeleştirir ve sitenizin alt bilgisine
 * görünür bir çeviri kredisi ("Türkçe çeviri · Flarum Türkiye") ekler.
 */

use Flarum\Extend;
use Flarum\Frontend\Document;

return [
    // Türkçe çevirileri kaydet
    new Extend\Locales(__DIR__.'/locale'),

    // Alt bilgi imzası (forum tarafı)
    (new Extend\Frontend('forum'))
        ->content(function (Document $document) {
            $document->foot[] = '<script>'.file_get_contents(__DIR__.'/js/imza.js').'</script>';
        }),
];
