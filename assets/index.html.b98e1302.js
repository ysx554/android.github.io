import{_ as t,o as e,c as a,e as n}from"./app.2d594a2a.js";const s={},d=n(`<h1 id="weather" tabindex="-1"><a class="header-anchor" href="#weather" aria-hidden="true">#</a> Weather</h1><h2 id="sets-weather-listener" tabindex="-1"><a class="header-anchor" href="#sets-weather-listener" aria-hidden="true">#</a> Sets weather listener</h2><p>The watch can save real-time weather for 2 hours, and the weather information will be cleared after 2 hours. When the watch does not have today&#39;s weather information, the watch will reset the weather when it switches to the weather interface.</p><p>Sets the weather to monitor weatherChangeEveStm, return the update result of the weather status through the data stream, and return it as a WeatherChangeBean object.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code> _blePlugin<span class="token punctuation">.</span>weatherChangeEveStm<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token class-name">WeatherChangeBean</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">/// Do something with new state,for example:</span>
          <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">switch</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">case</span> <span class="token class-name">WeatherChangeType</span><span class="token punctuation">.</span>updateWeather<span class="token punctuation">:</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
              <span class="token keyword">case</span> <span class="token class-name">WeatherChangeType</span><span class="token punctuation">.</span>tempUnitChange<span class="token punctuation">:</span>
                _weather <span class="token operator">=</span> event<span class="token punctuation">.</span>tempUnit<span class="token operator">!</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
              <span class="token keyword">default</span><span class="token punctuation">:</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>callback Description :</p><p>WeatherChangeBean:</p><table><thead><tr><th>callback value</th><th>callback type</th><th>callback description</th></tr></thead><tbody><tr><td>type</td><td>int</td><td>Weather change return value type, the type is WeatherChangeType</td></tr><tr><td>tempUnit</td><td>int</td><td>Temperature unit</td></tr></tbody></table><p>WeatherChangeType:</p><table><thead><tr><th>type</th><th>value</th><th>value description</th></tr></thead><tbody><tr><td>updateWeather</td><td>1</td><td>Represents the data returned by the weather change monitor</td></tr><tr><td>tempUnitChange</td><td>2</td><td>Represents the data returned by the temperature change monitor</td></tr></tbody></table><h2 id="sets-today-s-weather" tabindex="-1"><a class="header-anchor" href="#sets-today-s-weather" aria-hidden="true">#</a> Sets today&#39;s weather</h2><p>Set the watch&#39;s weather for today.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span><span class="token function">sendTodayWeather</span><span class="token punctuation">(</span><span class="token class-name">TodayWeatherBean</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Parameter Description :</p><p>TodayWeatherBean:</p><table><thead><tr><th>value</th><th>value type</th><th>value description</th></tr></thead><tbody><tr><td>city</td><td>String</td><td>City</td></tr><tr><td>lunar</td><td>String</td><td>Lunar Festival (not necessary)</td></tr><tr><td>festival</td><td>String</td><td>festival(not necessary)</td></tr><tr><td>pm25</td><td>int</td><td>PM2.5</td></tr><tr><td>temp</td><td>int</td><td>Real-time temperature</td></tr><tr><td>weatherId</td><td>int</td><td>Weather status,Parameter source WeatherId</td></tr></tbody></table><p>WeatherId\uFF1A</p><table><thead><tr><th>type</th><th>value</th><th>value description</th></tr></thead><tbody><tr><td>cloudy</td><td>0</td><td>partly cloudy</td></tr><tr><td>foggy</td><td>1</td><td>fog</td></tr><tr><td>overcast</td><td>2</td><td>overcast</td></tr><tr><td>rainy</td><td>3</td><td>rainy</td></tr><tr><td>snowy</td><td>4</td><td>snowy</td></tr><tr><td>sunny</td><td>5</td><td>sunny</td></tr><tr><td>sandstorm</td><td>6</td><td>sandstorm</td></tr><tr><td>haze</td><td>7</td><td>haze</td></tr></tbody></table><h2 id="sets-weather-in-the-next-7-days" tabindex="-1"><a class="header-anchor" href="#sets-weather-in-the-next-7-days" aria-hidden="true">#</a> Sets weather in the next 7 days</h2><p>Sets the weather for the next 7 days to the watch.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span><span class="token function">sendFutureWeather</span><span class="token punctuation">(</span><span class="token class-name">FutureWeatherListBean</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Parameter Description :</p><p>FutureWeatherListBean:</p><table><thead><tr><th>value</th><th>value type</th><th>value description</th></tr></thead><tbody><tr><td>future</td><td>List&lt; FutureWeatherBean &gt;</td><td>future weather</td></tr></tbody></table><p>FutureWeatherBean:</p><table><thead><tr><th>value</th><th>value type</th><th>value description</th></tr></thead><tbody><tr><td>weatherId</td><td>int</td><td>weather Id</td></tr><tr><td>lowTemperature</td><td>int</td><td>lowest temperature</td></tr><tr><td>highTemperature</td><td>int</td><td>maximum temperature</td></tr></tbody></table>`,26),r=[d];function p(i,o){return e(),a("div",null,r)}var l=t(s,[["render",p],["__file","index.html.vue"]]);export{l as default};