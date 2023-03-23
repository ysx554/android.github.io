import{_ as t,o as e,c as n,e as a}from"./app.2d594a2a.js";const s={},p=a(`<h1 id="sleep" tabindex="-1"><a class="header-anchor" href="#sleep" aria-hidden="true">#</a> Sleep</h1><h2 id="sets-sleep-listener" tabindex="-1"><a class="header-anchor" href="#sets-sleep-listener" aria-hidden="true">#</a> Sets sleep listener</h2><p>Sets up a sleep monitor sleepChangeEveStm, and save the returned value in &quot;event&quot; with the value of the SleepBean object.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>      _blePlugin<span class="token punctuation">.</span>sleepChangeEveStm<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token class-name">SleepBean</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">/// Do something with new state,for example:</span>
          <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">switch</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">case</span> <span class="token class-name">SleepType</span><span class="token punctuation">.</span>sleepChange<span class="token punctuation">:</span>
                _totalTime <span class="token operator">=</span> event<span class="token punctuation">.</span>sleepInfo<span class="token operator">!</span><span class="token punctuation">.</span>totalTime<span class="token operator">!</span><span class="token punctuation">;</span>
                _restfulTime <span class="token operator">=</span> event<span class="token punctuation">.</span>sleepInfo<span class="token operator">!</span><span class="token punctuation">.</span>restfulTime<span class="token operator">!</span><span class="token punctuation">;</span>
                _lightTime <span class="token operator">=</span> event<span class="token punctuation">.</span>sleepInfo<span class="token operator">!</span><span class="token punctuation">.</span>lightTime<span class="token operator">!</span><span class="token punctuation">;</span>
                _soberTime <span class="token operator">=</span> event<span class="token punctuation">.</span>sleepInfo<span class="token operator">!</span><span class="token punctuation">.</span>soberTime<span class="token operator">!</span><span class="token punctuation">;</span>
                _remTime <span class="token operator">=</span> event<span class="token punctuation">.</span>sleepInfo<span class="token operator">!</span><span class="token punctuation">.</span>remTime<span class="token operator">!</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
              <span class="token keyword">case</span> <span class="token class-name">SleepType</span><span class="token punctuation">.</span>historySleepChange<span class="token punctuation">:</span>
                _timeType <span class="token operator">=</span> event<span class="token punctuation">.</span>historySleep<span class="token operator">!</span><span class="token punctuation">.</span>timeType<span class="token operator">!</span><span class="token punctuation">;</span>
                _totalTime <span class="token operator">=</span> event<span class="token punctuation">.</span>historySleep<span class="token operator">!</span><span class="token punctuation">.</span>sleepInfo<span class="token operator">!</span><span class="token punctuation">.</span>totalTime<span class="token operator">!</span><span class="token punctuation">;</span>
                _restfulTime <span class="token operator">=</span> event<span class="token punctuation">.</span>historySleep<span class="token operator">!</span><span class="token punctuation">.</span>sleepInfo<span class="token operator">!</span><span class="token punctuation">.</span>restfulTime<span class="token operator">!</span><span class="token punctuation">;</span>
                _lightTime <span class="token operator">=</span> event<span class="token punctuation">.</span>historySleep<span class="token operator">!</span><span class="token punctuation">.</span>sleepInfo<span class="token operator">!</span><span class="token punctuation">.</span>lightTime<span class="token operator">!</span><span class="token punctuation">;</span>
                _soberTime <span class="token operator">=</span> event<span class="token punctuation">.</span>historySleep<span class="token operator">!</span><span class="token punctuation">.</span>sleepInfo<span class="token operator">!</span><span class="token punctuation">.</span>soberTime<span class="token operator">!</span><span class="token punctuation">;</span>
                _remTime <span class="token operator">=</span> event<span class="token punctuation">.</span>historySleep<span class="token operator">!</span><span class="token punctuation">.</span>sleepInfo<span class="token operator">!</span><span class="token punctuation">.</span>remTime<span class="token operator">!</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
              <span class="token keyword">default</span><span class="token punctuation">:</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Callback Description(event):</p><p>SleepBean\uFF1A</p><table><thead><tr><th>callback value</th><th>callback value type</th><th>callback value description</th></tr></thead><tbody><tr><td>type</td><td>int</td><td>Weather change return value type, the type is SleepType</td></tr><tr><td>sleepInfo</td><td>SleepInfo</td><td>Current sleep information</td></tr><tr><td>historySleep</td><td>HistorySleepBean</td><td>Historical sleep information</td></tr></tbody></table><p>SleepType:</p><table><thead><tr><th>type</th><th>value</th><th>value description</th></tr></thead><tbody><tr><td>sleepChange</td><td>1</td><td>Gets the data returned by the current sleep monitor</td></tr><tr><td>historySleepChange</td><td>2</td><td>Gets the data returned by the historical sleep monitor</td></tr></tbody></table><p>SleepInfo\uFF1A</p><table><thead><tr><th>callback value</th><th>callback value type</th><th>callback value description</th></tr></thead><tbody><tr><td>sleepStateRem</td><td>int</td><td>3</td></tr><tr><td>sleepStateRestful</td><td>int</td><td>2</td></tr><tr><td>sleepStateLight</td><td>int</td><td>1</td></tr><tr><td>sleepStateSober</td><td>int</td><td>0</td></tr><tr><td>totalTime</td><td>int</td><td>Total sleep time</td></tr><tr><td>restfulTime</td><td>int</td><td>restful time</td></tr><tr><td>lightTime</td><td>int</td><td>light time</td></tr><tr><td>soberTime</td><td>int</td><td>awake time</td></tr><tr><td>remTime</td><td>int</td><td>rem time</td></tr></tbody></table><p>HistorySleepBean\uFF1A</p><table><thead><tr><th>callback value</th><th>callback value type</th><th>callback value description</th></tr></thead><tbody><tr><td>timeType</td><td>int</td><td>days,from HistoryTimeType</td></tr><tr><td>sleepInfo</td><td>SleepInfo</td><td>Specifies the user&#39;s historical sleep information for the date type</td></tr></tbody></table><p>Parameter Description :</p><p>HistoryTimeType:</p><p>Use yesterdaySleep and dayBeforeYesterdaySleep parameters.</p><table><thead><tr><th>value</th><th>value type</th><th>value description</th></tr></thead><tbody><tr><td>yesterdaySteps</td><td>int</td><td>1</td></tr><tr><td>dayBeforeYesterdaySteps</td><td>int</td><td>2</td></tr><tr><td>yesterdaySleep</td><td>int</td><td>3</td></tr><tr><td>dayBeforeYesterdaySleep</td><td>int</td><td>4</td></tr></tbody></table><h2 id="gets-today-s-sleep" tabindex="-1"><a class="header-anchor" href="#gets-today-s-sleep" aria-hidden="true">#</a> Gets today&#39;s sleep</h2><p>The sleep clear time of the watch is 8 pm, and the sleep time recorded by the watch is from 8 pm to 10 am the next day.</p><p>Gets detailed data for a training. The query result will be obtained through the sleepChangeEveStm listening stream and saved in the SleepBean.sleepInfo field.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span>querySleep<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="gets-historical-sleep" tabindex="-1"><a class="header-anchor" href="#gets-historical-sleep" aria-hidden="true">#</a> Gets historical sleep</h2><p>The watch can save the sleep data of the past three days, and can query the sleep data of a certain day.</p><p>Gets the sleep data of a certain day. The query result will be obtained through the sleepChangeEveStm listening stream and saved in the SleepBean.past field and the SleepBean.pastSleepInfo field.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span><span class="token function">queryHistorySleep</span><span class="token punctuation">(</span><span class="token class-name">HistoryTimeType</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,25),o=[p];function l(i,r){return e(),n("div",null,o)}var d=t(s,[["render",l],["__file","index.html.vue"]]);export{d as default};
