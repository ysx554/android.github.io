import{_ as a,o as e,c as n,e as t}from"./app.2d594a2a.js";const s={},i=t(`<h1 id="_45-battery-saving" tabindex="-1"><a class="header-anchor" href="#_45-battery-saving" aria-hidden="true">#</a> 45 Battery Saving</h1><h2 id="sets-battery-saing-listener" tabindex="-1"><a class="header-anchor" href="#sets-battery-saing-listener" aria-hidden="true">#</a> Sets battery saing listener</h2><p>Set the battery storage listener, the result is returned through the data stream, and the Batter saving state saved in &quot;event&quot;.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span>batterySavingEveStm<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>
         <span class="token punctuation">(</span>bool event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token comment">/// Do something with new state</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sets-battery-saving-state" tabindex="-1"><a class="header-anchor" href="#sets-battery-saving-state" aria-hidden="true">#</a> Sets battery saving state</h2><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span><span class="token function">sendBatterySaving</span><span class="token punctuation">(</span>bool enable<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="gets-battery-saving-state" tabindex="-1"><a class="header-anchor" href="#gets-battery-saving-state" aria-hidden="true">#</a> Gets battery saving state</h2><p>The result of Batter saving state will be obtained through the batterySavingEveStm monitoring stream.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code> _blePlugin<span class="token punctuation">.</span>queryBatterySaving<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),r=[i];function d(l,c){return e(),n("div",null,r)}var u=a(s,[["render",d],["__file","index.html.vue"]]);export{u as default};