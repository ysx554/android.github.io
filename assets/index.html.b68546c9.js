import{_ as t,o as a,c as e,e as n}from"./app.2d594a2a.js";const d={},i=n(`<h1 id="language" tabindex="-1"><a class="header-anchor" href="#language" aria-hidden="true">#</a> Language</h1><h2 id="sets-the-watch-language" tabindex="-1"><a class="header-anchor" href="#sets-the-watch-language" aria-hidden="true">#</a> Sets the watch language</h2><p>Sets the language of the watch. When setting the language, the language version will be set. Simplified Chinese is set to the Chinese version, and non-simplified Chinese is set to the international version.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span><span class="token function">sendDeviceLanguage</span><span class="token punctuation">(</span><span class="token class-name">DeviceLanguageType</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Parameter Description :</p><p>DeviceLanguageType:</p><table><thead><tr><th>value</th><th>value type</th><th>value description</th></tr></thead><tbody><tr><td>languageEnglish</td><td>int</td><td>English</td></tr><tr><td>languageChinese</td><td>int</td><td>Chinese Simplified</td></tr><tr><td>languageJapanese</td><td>int</td><td>Japanese</td></tr><tr><td>languageKorean</td><td>int</td><td>Korean</td></tr><tr><td>languageGerman</td><td>int</td><td>German</td></tr><tr><td>languageFrensh</td><td>int</td><td>French</td></tr><tr><td>languageSpanish</td><td>int</td><td>Spanish</td></tr><tr><td>languageArabic</td><td>int</td><td>Arabic</td></tr><tr><td>languageRussian</td><td>int</td><td>Russian</td></tr><tr><td>languageTraditional</td><td>int</td><td>traditional Chinese</td></tr><tr><td>languageUkrainian</td><td>int</td><td>Ukrainian</td></tr><tr><td>languageItalian</td><td>int</td><td>Italian</td></tr><tr><td>languagePortuguese</td><td>int</td><td>Portuguese</td></tr><tr><td>languageDutch</td><td>int</td><td>Dutch</td></tr><tr><td>languagePolish</td><td>int</td><td>Polish</td></tr><tr><td>languageSwedish</td><td>int</td><td>Swedish</td></tr><tr><td>languageFinnish</td><td>int</td><td>Finnish</td></tr><tr><td>languageDanish</td><td>int</td><td>Danish</td></tr><tr><td>languageNorwegian</td><td>int</td><td>Norwegian</td></tr><tr><td>languageHungarian</td><td>int</td><td>Hungarian</td></tr><tr><td>languageCzech</td><td>int</td><td>Czech</td></tr><tr><td>languageBulgarian</td><td>int</td><td>Bulgarian</td></tr><tr><td>languageRomanian</td><td>int</td><td>Romanian</td></tr><tr><td>languageSlovakLanguage</td><td>int</td><td>Slovak Language</td></tr><tr><td>languageLatvian</td><td>int</td><td>Latvian</td></tr></tbody></table><p>Precautions: Italian and Portuguese only support watch firmware 1.7.1 and above.</p><h2 id="gets-the-watch-language" tabindex="-1"><a class="header-anchor" href="#gets-the-watch-language" aria-hidden="true">#</a> Gets the watch language</h2><p>Gets the language that the watch is using and the list of languages supported by the watch.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token class-name">DeviceLanguageBean</span> info <span class="token operator">=</span> <span class="token keyword">await</span> _blePlugin<span class="token punctuation">.</span>queryDeviceLanguage<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Callback Description:</p><table><thead><tr><th>callback value</th><th>callback value type</th><th>callback value description</th></tr></thead><tbody><tr><td>languageType</td><td>List&lt; int &gt;</td><td>All language types</td></tr><tr><td>type</td><td>int</td><td>current language type</td></tr></tbody></table>`,13),s=[i];function r(l,g){return a(),e("div",null,s)}var h=t(d,[["render",r],["__file","index.html.vue"]]);export{h as default};