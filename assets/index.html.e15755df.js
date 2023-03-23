import{_ as n,o as e,c as t,e as a}from"./app.2d594a2a.js";const s={},c=a(`<h1 id="connect" tabindex="-1"><a class="header-anchor" href="#connect" aria-hidden="true">#</a> Connect</h1><h2 id="sets-connect-state-listener" tabindex="-1"><a class="header-anchor" href="#sets-connect-state-listener" aria-hidden="true">#</a> Sets connect state listener</h2><p>Gets the watch&#39;s Mac address by scanning the received bleScanEveStm. When the device is connected to Bluetooth, it will trigger Bluetooth connection monitoring. The connection and callback state is monitored through the stateEveStm data stream, and the results are saved in &quot;event&quot;.</p><p>Add event stream listener.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span>connStateEveStm<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span>int event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">/// Do something with new state</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ConnectionState:</p><table><thead><tr><th>name</th><th>value type</th><th>value description</th></tr></thead><tbody><tr><td>stateDisconnected</td><td>int</td><td>disconnected</td></tr><tr><td>stateConnecting</td><td>int</td><td>connecting</td></tr><tr><td>stateConnected</td><td>int</td><td>connected</td></tr><tr><td>stateDisconnecting</td><td>int</td><td>disconnecting</td></tr></tbody></table><h2 id="connect-1" tabindex="-1"><a class="header-anchor" href="#connect-1" aria-hidden="true">#</a> Connect</h2><p>Make a Bluetooth connection to the device by passing in the device&#39;s Mac address.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token class-name">String</span> address<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="connected-state" tabindex="-1"><a class="header-anchor" href="#connected-state" aria-hidden="true">#</a> Connected state</h2><p>Establish a Bluetooth connection with the device by passing in the device&#39;s Mac address.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>bool connectedState <span class="token operator">=</span> <span class="token keyword">await</span> _blePlugin<span class="token punctuation">.</span><span class="token function">isConnected</span><span class="token punctuation">(</span><span class="token class-name">String</span> address<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="disconnect" tabindex="-1"><a class="header-anchor" href="#disconnect" aria-hidden="true">#</a> Disconnect</h2><p>Disconnected watch,disconnect returns true. It is recommended to add an appropriate delay when disconnecting and reconnecting, so that the system can recover resources and guarantee the connection success rate.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>bool disconnect <span class="token operator">=</span> <span class="token keyword">await</span> _blePlugin<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="connect-device" tabindex="-1"><a class="header-anchor" href="#connect-device" aria-hidden="true">#</a> Connect device</h2><p>Reconnect the last connected device.(ios Only Method)</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">await</span> _blePlugin<span class="token punctuation">.</span><span class="token function">connectDevice</span><span class="token punctuation">(</span><span class="token class-name">ConnectDeviceBean</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ConnectDeviceBean :</p><table><thead><tr><th>value</th><th>value type</th><th>value description</th></tr></thead><tbody><tr><td>mac</td><td>String</td><td>device address</td></tr><tr><td>peripheral</td><td>dynamic</td><td>peripheral equipment</td></tr></tbody></table><h2 id="reconnect" tabindex="-1"><a class="header-anchor" href="#reconnect" aria-hidden="true">#</a> Reconnect</h2><p>Reconnect the last connected device.(ios Only Method)</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">await</span> _blePlugin<span class="token punctuation">.</span><span class="token function">reconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,24),d=[c];function i(o,r){return e(),t("div",null,d)}var p=n(s,[["render",i],["__file","index.html.vue"]]);export{p as default};
