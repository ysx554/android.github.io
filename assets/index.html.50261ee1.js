import{_ as a,o as n,c as e,e as s}from"./app.2d594a2a.js";const t={},i=s(`<h1 id="music-player-only-android-support" tabindex="-1"><a class="header-anchor" href="#music-player-only-android-support" aria-hidden="true">#</a> Music Player&lt; Only android support &gt;</h1><h2 id="sets-player-state" tabindex="-1"><a class="header-anchor" href="#sets-player-state" aria-hidden="true">#</a> Sets player state</h2><p>Set music player state.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span><span class="token function">setPlayerState</span><span class="token punctuation">(</span><span class="token class-name">PlayerStateType</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Parameter Description :</p><p>PlayerStateType\uFF1A</p><table><thead><tr><th>type</th><th>value</th><th>value description</th></tr></thead><tbody><tr><td>musicPlayerPause</td><td>int</td><td>pause</td></tr><tr><td>musicPlayerPlay</td><td>int</td><td>play</td></tr></tbody></table><h2 id="sets-song-name" tabindex="-1"><a class="header-anchor" href="#sets-song-name" aria-hidden="true">#</a> Sets song name</h2><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span><span class="token function">sendSongTitle</span><span class="token punctuation">(</span><span class="token class-name">String</span> title<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sets-lyrics" tabindex="-1"><a class="header-anchor" href="#sets-lyrics" aria-hidden="true">#</a> Sets lyrics</h2><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span><span class="token function">sendLyrics</span><span class="token punctuation">(</span><span class="token class-name">String</span> lyrics<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="close-music-control" tabindex="-1"><a class="header-anchor" href="#close-music-control" aria-hidden="true">#</a> Close music control</h2><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span>closePlayerControl<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sets-max-volume" tabindex="-1"><a class="header-anchor" href="#sets-max-volume" aria-hidden="true">#</a> Sets max volume</h2><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span><span class="token function">sendMaxVolume</span><span class="token punctuation">(</span>int volume<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sets-current-volumed" tabindex="-1"><a class="header-anchor" href="#sets-current-volumed" aria-hidden="true">#</a> Sets current volumed</h2><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span><span class="token function">sendCurrentVolume</span><span class="token punctuation">(</span>int volume<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,17),l=[i];function d(r,c){return n(),e("div",null,l)}var u=a(t,[["render",d],["__file","index.html.vue"]]);export{u as default};
