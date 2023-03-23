import{_ as a,o as n,c as s,e as t}from"./app.2d594a2a.js";const e={},p=t(`<h1 id="firmware" tabindex="-1"><a class="header-anchor" href="#firmware" aria-hidden="true">#</a> Firmware</h1><h2 id="sets-firmware-listener" tabindex="-1"><a class="header-anchor" href="#sets-firmware-listener" aria-hidden="true">#</a> Sets firmware listener</h2><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span>oTAEveStm<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token class-name">OTABean</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token comment">/// Do something with new state,for example:</span>
          <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">switch</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">{</span>
              <span class="token keyword">case</span> <span class="token class-name">OTAProgressType</span><span class="token punctuation">.</span>downloadStart<span class="token punctuation">:</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
              <span class="token keyword">case</span> <span class="token class-name">OTAProgressType</span><span class="token punctuation">.</span>downloadComplete<span class="token punctuation">:</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
              <span class="token keyword">case</span> <span class="token class-name">OTAProgressType</span><span class="token punctuation">.</span>progressStart<span class="token punctuation">:</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
              <span class="token keyword">case</span> <span class="token class-name">OTAProgressType</span><span class="token punctuation">.</span>progressChanged<span class="token punctuation">:</span>
                _upgradeProgress <span class="token operator">=</span> event<span class="token punctuation">.</span>upgradeProgress<span class="token operator">!</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
              <span class="token keyword">case</span> <span class="token class-name">OTAProgressType</span><span class="token punctuation">.</span>upgradeCompleted<span class="token punctuation">:</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
              <span class="token keyword">case</span> <span class="token class-name">OTAProgressType</span><span class="token punctuation">.</span>upgradeAborted<span class="token punctuation">:</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
              <span class="token keyword">case</span> <span class="token class-name">OTAProgressType</span><span class="token punctuation">.</span>error<span class="token punctuation">:</span>
                _upgradeError <span class="token operator">=</span> event<span class="token punctuation">.</span>upgradeError<span class="token operator">!</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
              <span class="token keyword">default</span><span class="token punctuation">:</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>OTABean\uFF1A</p><table><thead><tr><th>callback value</th><th>callback value</th><th>callback value description</th></tr></thead><tbody><tr><td>type</td><td>int</td><td>Gets the type of the callback return value, where Type is the value corresponding to OTAProgressType</td></tr><tr><td>upgradeProgress</td><td>int</td><td>Upgrade progress</td></tr><tr><td>upgradeError</td><td>UpgradeErrorBean</td><td>Firmware upgrade error data is reported</td></tr></tbody></table><p>UpgradeErrorBean:</p><table><thead><tr><th>callback value</th><th>callback value</th><th>callback value description</th></tr></thead><tbody><tr><td>error</td><td>int</td><td>error type</td></tr><tr><td>errorContent</td><td>String</td><td>error content</td></tr></tbody></table><p>OTAProgressType:</p><table><thead><tr><th>type</th><th>value</th><th>value description</th></tr></thead><tbody><tr><td>downloadStart</td><td>1</td><td>Firmware version download starts</td></tr><tr><td>downloadComplete</td><td>2</td><td>Firmware version download complete</td></tr><tr><td>progressStart</td><td>3</td><td>OTA start</td></tr><tr><td>progressChanged</td><td>4</td><td>OTA process changes</td></tr><tr><td>upgradeCompleted</td><td>5</td><td>OTA completed</td></tr><tr><td>upgradeAborted</td><td>6</td><td>OTA abort</td></tr><tr><td>error</td><td>7</td><td>OTA error</td></tr></tbody></table><h2 id="gets-firmware-version" tabindex="-1"><a class="header-anchor" href="#gets-firmware-version" aria-hidden="true">#</a> Gets firmware version</h2><p>Gets the current firmware version of the watch.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token class-name">String</span> firmwareVersion <span class="token operator">=</span> <span class="token keyword">await</span> _blePlugin<span class="token punctuation">.</span>queryFirmwareVersion<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="check-firmware" tabindex="-1"><a class="header-anchor" href="#check-firmware" aria-hidden="true">#</a> Check firmware</h2><p>Gets the latest version information.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token class-name">CheckFirmwareVersionBean</span> bean <span class="token operator">=</span> <span class="token keyword">await</span> _blePlugin<span class="token punctuation">.</span><span class="token function">checkFirmwareVersion</span><span class="token punctuation">(</span><span class="token class-name">FirmwareVersion</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Parameter Description :</p><p>FirmwareVersion:</p><table><thead><tr><th>value</th><th>value type</th><th>value description</th></tr></thead><tbody><tr><td>version</td><td>String</td><td>Get through _blePlugin.queryFirmwareVersion;</td></tr><tr><td>otaType</td><td>int</td><td>Upgrade type, from OTAType</td></tr></tbody></table><p>OTAType\uFF1A</p><table><thead><tr><th>value</th><th>value type</th><th>value description</th></tr></thead><tbody><tr><td>normalUpgeadeType</td><td>int</td><td>normal upgeade</td></tr><tr><td>betaUpgradeType</td><td>int</td><td>beta upgrade</td></tr><tr><td>forcedUpdateType</td><td>int</td><td>forced update</td></tr></tbody></table><p>Callback Description:</p><p>CheckFirmwareVersionBean</p><table><thead><tr><th>callback value</th><th>callback value type</th><th>callback value description</th></tr></thead><tbody><tr><td>firmwareVersionInfo</td><td>FirmwareVersionBean</td><td>The latest version information</td></tr><tr><td>isLatestVersion</td><td>bool</td><td>Check whether the information is the latest version</td></tr></tbody></table><p>FirmwareVersionBean\uFF1A</p><table><thead><tr><th>ack value</th><th>callback value type</th><th>callback value description</th></tr></thead><tbody><tr><td>version</td><td>String</td><td>Current firmware version number of the watch</td></tr><tr><td>changeNotes</td><td>String</td><td>change note</td></tr><tr><td>changeNotesEn</td><td>int</td><td>english change note</td></tr><tr><td>type</td><td>bool</td><td>Upgrade type, same as OTAType</td></tr><tr><td>mcu</td><td>int</td><td>MCU type, used to distinguish upgrade mode</td></tr><tr><td>tpUpgrade</td><td>String</td><td>Whether you need to upgrade tp, the default is false</td></tr></tbody></table><p>OTAType\uFF1A</p><table><thead><tr><th>value</th><th>value type</th><th>value description</th></tr></thead><tbody><tr><td>normalUpgeadeType</td><td>int</td><td>normal upgeade</td></tr><tr><td>betaUpgradeType</td><td>int</td><td>beta upgrade</td></tr><tr><td>forcedUpdateType</td><td>int</td><td>forced update</td></tr></tbody></table><h2 id="satrt-ota" tabindex="-1"><a class="header-anchor" href="#satrt-ota" aria-hidden="true">#</a> Satrt OTA</h2><p><strong>Android partial support.</strong><br> The firmware upgrade is divided into four upgrade methods.The calling method is as follows:</p><p>Note: There is no first and second upgrade methods on the ios side.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span><span class="token function">startOTA</span><span class="token punctuation">(</span><span class="token class-name">OtaBean</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Parameter Description :</p><p>OtaBean:</p><table><thead><tr><th>value</th><th>value type</th><th>value description</th></tr></thead><tbody><tr><td>address</td><td>int</td><td>The mac address of the device</td></tr><tr><td>type</td><td>int</td><td>The type of firmware upgrade method obtained by the mcu obtained according to the firmware version of the device,the value is OTAMcuType</td></tr></tbody></table><p>OTAMcuType:</p><table><thead><tr><th>type</th><th>value</th><th>value description</th></tr></thead><tbody><tr><td>startHsOta</td><td>1</td><td>The first way to upgrade</td></tr><tr><td>startRtkOta</td><td>2</td><td>The second way to upgrade</td></tr><tr><td>startOta</td><td>3</td><td>The third way to upgrade</td></tr><tr><td>startDefaultOta</td><td>4</td><td>The four way to upgrade</td></tr></tbody></table><p>the upgrade method is determined according to the mcu value in the firmware version information of the current watch.</p><p>The mcu value of the firmware version is obtained by the checkFirmwareVersion method.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">switch</span> <span class="token punctuation">(</span>mcu<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token number">4</span><span class="token punctuation">:</span>
  <span class="token keyword">case</span> <span class="token number">8</span><span class="token punctuation">:</span>
  <span class="token keyword">case</span> <span class="token number">9</span><span class="token punctuation">:</span>
    oTAType <span class="token operator">=</span> <span class="token class-name">OTAMcuType</span><span class="token punctuation">.</span>startHsOta<span class="token punctuation">;</span>
        <span class="token comment">///The first way to upgrade,&lt;Only android support&gt;</span>
    <span class="token keyword">await</span> _blePlugin
        <span class="token punctuation">.</span><span class="token function">startOTA</span><span class="token punctuation">(</span><span class="token class-name">OtaBean</span><span class="token punctuation">(</span>address<span class="token punctuation">:</span> address<span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token class-name">OTAMcuType</span><span class="token punctuation">.</span>startHsOta<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token number">7</span><span class="token punctuation">:</span>
  <span class="token keyword">case</span> <span class="token number">11</span><span class="token punctuation">:</span>
  <span class="token keyword">case</span> <span class="token number">71</span><span class="token punctuation">:</span>
  <span class="token keyword">case</span> <span class="token number">72</span><span class="token punctuation">:</span>
    oTAType <span class="token operator">=</span> <span class="token class-name">OTAMcuType</span><span class="token punctuation">.</span>startRtkOta<span class="token punctuation">;</span>
        <span class="token comment">///The second way to upgrade,&lt;Only android support&gt;</span>
    <span class="token keyword">await</span> _blePlugin
        <span class="token punctuation">.</span><span class="token function">startOTA</span><span class="token punctuation">(</span><span class="token class-name">OtaBean</span><span class="token punctuation">(</span>address<span class="token punctuation">:</span> address<span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token class-name">OTAMcuType</span><span class="token punctuation">.</span>startRtkOta<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token number">10</span><span class="token punctuation">:</span>
    oTAType <span class="token operator">=</span> <span class="token class-name">OTAMcuType</span><span class="token punctuation">.</span>startOta<span class="token punctuation">;</span>
        <span class="token comment">///The third way to upgrade</span>
    <span class="token keyword">await</span> _blePlugin
        <span class="token punctuation">.</span><span class="token function">startOTA</span><span class="token punctuation">(</span><span class="token class-name">OtaBean</span><span class="token punctuation">(</span>address<span class="token punctuation">:</span> address<span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token class-name">OTAMcuType</span><span class="token punctuation">.</span>startOta<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">default</span><span class="token punctuation">:</span>
    oTAType <span class="token operator">=</span> <span class="token class-name">OTAMcuType</span><span class="token punctuation">.</span>startDefaultOta<span class="token punctuation">;</span>
        <span class="token comment">///The four way to upgrade</span>
    <span class="token keyword">await</span> _blePlugin
        <span class="token punctuation">.</span><span class="token function">startOTA</span><span class="token punctuation">(</span><span class="token class-name">OtaBean</span><span class="token punctuation">(</span>address<span class="token punctuation">:</span> address<span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token class-name">OTAMcuType</span><span class="token punctuation">.</span>startDefaultOta<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: When it is the first upgrade method, the address uses the mac address in the OTA upgrade mode obtained through _blePlugin.queryDeviceOtaStatus;</p><h2 id="abort-ota" tabindex="-1"><a class="header-anchor" href="#abort-ota" aria-hidden="true">#</a> Abort OTA</h2><p><strong>Android partial support.</strong><br> Firmware abort is divided into three methods. Among them, the third upgrade method and the fourth upgrade method share a suspension method</p><p>Abort the firmware upgrade by the upgrade type obtained when the firmware version was upgraded.</p><p>Note: The ios side does not support the first and second upgrade methods, that is, the OTAMcuType parameter does not support the values of startHsOta and startRtkOta.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span><span class="token function">abortOTA</span><span class="token punctuation">(</span><span class="token class-name">OTAMcuType</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="watch-ota-status" tabindex="-1"><a class="header-anchor" href="#watch-ota-status" aria-hidden="true">#</a> Watch OTA status</h2><p><strong>Only android support</strong><br></p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>int deviceDfuStatus <span class="token operator">=</span> <span class="token keyword">await</span> _blePlugin<span class="token punctuation">.</span>queryDeviceOtaStatus<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="gets-hs-ota-address" tabindex="-1"><a class="header-anchor" href="#gets-hs-ota-address" aria-hidden="true">#</a> Gets HS OTA address</h2><p>Get the mac address in OTA mode.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token class-name">String</span> hsDfuAddress <span class="token operator">=</span> <span class="token keyword">await</span> _blePlugin<span class="token punctuation">.</span>queryHsOtaAddress<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="enable-hs-ota" tabindex="-1"><a class="header-anchor" href="#enable-hs-ota" aria-hidden="true">#</a> Enable HS OTA</h2><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span>enableHsOta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="gets-goodix-ota-type" tabindex="-1"><a class="header-anchor" href="#gets-goodix-ota-type" aria-hidden="true">#</a> Gets goodix OTA type</h2><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>int type <span class="token operator">=</span> <span class="token keyword">await</span> _blePlugin<span class="token punctuation">.</span>queryOtaType<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,55),d=[p];function o(r,i){return n(),s("div",null,d)}var l=a(e,[["render",o],["__file","index.html.vue"]]);export{l as default};
