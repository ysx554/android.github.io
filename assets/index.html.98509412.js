import{_ as e,o as t,c as a,e as s}from"./app.2d594a2a.js";const n={},i=s(`<h1 id="time" tabindex="-1"><a class="header-anchor" href="#time" aria-hidden="true">#</a> Time</h1><h2 id="gets-time" tabindex="-1"><a class="header-anchor" href="#gets-time" aria-hidden="true">#</a> Gets Time</h2><p>Synchronize the time of your phone and watch.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span>queryTime<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sets-time-system" tabindex="-1"><a class="header-anchor" href="#sets-time-system" aria-hidden="true">#</a> Sets Time System</h2><p>Sets the system time of the watch.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span><span class="token function">sendTimeSystem</span><span class="token punctuation">(</span><span class="token class-name">TimeSystemType</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>TimeSystemType:</p><table><thead><tr><th>value</th><th>value type</th><th>value description</th></tr></thead><tbody><tr><td>timeSystem12</td><td>int</td><td>12-Hour Time</td></tr><tr><td>timeSystem24</td><td>int</td><td>24-Hour Time</td></tr></tbody></table><h2 id="gets-time-system" tabindex="-1"><a class="header-anchor" href="#gets-time-system" aria-hidden="true">#</a> Gets Time System</h2><p>Gets the time system of the watch.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>int timeSystemType <span class="token operator">=</span> <span class="token keyword">await</span> _blePlugin<span class="token punctuation">.</span>queryTimeSystem<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),d=[i];function r(c,l){return t(),a("div",null,d)}var m=e(n,[["render",r],["__file","index.html.vue"]]);export{m as default};