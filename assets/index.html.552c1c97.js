import{_ as t,o as e,c as a,e as n}from"./app.2d594a2a.js";const s={},r=n(`<h1 id="heart-rate" tabindex="-1"><a class="header-anchor" href="#heart-rate" aria-hidden="true">#</a> Heart Rate</h1><h2 id="sets-heart-rate-listener" tabindex="-1"><a class="header-anchor" href="#sets-heart-rate-listener" aria-hidden="true">#</a> Sets heart rate listener</h2><p>All heart rate related data will pass the _blePlugin.heartRateEveStm.listen callback.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span>heartRateEveStm<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token class-name">HeartRateBean</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">/// Do something with new state,for example:</span>
          <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">switch</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">case</span> <span class="token class-name">HeartRateType</span><span class="token punctuation">.</span>measuring<span class="token punctuation">:</span>
                _measuring <span class="token operator">=</span> event<span class="token punctuation">.</span>measuring<span class="token operator">!</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
              <span class="token keyword">case</span> <span class="token class-name">HeartRateType</span><span class="token punctuation">.</span>onceMeasureComplete<span class="token punctuation">:</span>
                _onceMeasureComplete <span class="token operator">=</span> event<span class="token punctuation">.</span>onceMeasureComplete<span class="token operator">!</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
              <span class="token keyword">case</span> <span class="token class-name">HeartRateType</span><span class="token punctuation">.</span>bloodOxygen<span class="token punctuation">:</span>
                _historyHrList <span class="token operator">=</span> event<span class="token punctuation">.</span>historyHrList<span class="token operator">!</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
              <span class="token keyword">case</span> <span class="token class-name">HeartRateType</span><span class="token punctuation">.</span>measureComplete<span class="token punctuation">:</span>
                _measureComplete <span class="token operator">=</span> event<span class="token punctuation">.</span>measureComplete<span class="token operator">!</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
              <span class="token keyword">case</span> <span class="token class-name">HeartRateType</span><span class="token punctuation">.</span>hourMeasureResult<span class="token punctuation">:</span>
                _hour24MeasureResult <span class="token operator">=</span> event<span class="token punctuation">.</span>hour24MeasureResult<span class="token operator">!</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
              <span class="token keyword">case</span> <span class="token class-name">HeartRateType</span><span class="token punctuation">.</span>measureResult<span class="token punctuation">:</span>
                _trainingList <span class="token operator">=</span> event<span class="token punctuation">.</span>trainingList<span class="token operator">!</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
              <span class="token keyword">default</span><span class="token punctuation">:</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Callback Description:</p><p>HeartRateBean\uFF1A</p><table><thead><tr><th>callback value</th><th>callback value type</th><th>callback value description</th></tr></thead><tbody><tr><td>type</td><td>int</td><td>Get the corresponding return value according to type, where type is the value corresponding to HeartRateType</td></tr><tr><td>measuring</td><td>int</td><td>The last dynamic heart rate measurement result</td></tr><tr><td>onceMeasureComplete</td><td>int</td><td>Take a heart rate measurement</td></tr><tr><td>historyHrList</td><td>List&lt; HistoryHeartRateBean &gt;</td><td>Historical heart rate data</td></tr><tr><td>measureComplete</td><td>MeasureCompleteBean</td><td>Heart rate data</td></tr><tr><td>hour24MeasureResult</td><td>HeartRateInfo</td><td>Heart rate measurement data for today or the previous day</td></tr><tr><td>trainingList</td><td>List&lt; TrainingHeartRateBean &gt;</td><td>Dynamic heart rate data</td></tr></tbody></table><p>HistoryHeartRateBean\uFF1A</p><table><thead><tr><th>callback value</th><th>callback value type</th><th>callback value description</th></tr></thead><tbody><tr><td>date</td><td>String</td><td>date</td></tr><tr><td>hr</td><td>int</td><td>heart rate</td></tr></tbody></table><p>MeasureCompleteBean:</p><table><thead><tr><th>callback value</th><th>callback value type</th><th>callback value description</th></tr></thead><tbody><tr><td>historyDynamicRateType</td><td>String</td><td>Heart rate type, exercise heart rate</td></tr><tr><td>heartRate</td><td>HeartRateInfo</td><td>heart rate</td></tr></tbody></table><p>HeartRateInfo:</p><table><thead><tr><th>callback value</th><th>callback value type</th><th>callback value description</th></tr></thead><tbody><tr><td>startTime</td><td>int</td><td>start measure heart rate time</td></tr><tr><td>heartRateList</td><td>List&lt; int &gt;</td><td>heart rate list</td></tr><tr><td>timeInterval</td><td>int</td><td>Heart rate measurement interval</td></tr><tr><td>heartRateType</td><td>String</td><td>Heart rate measurement type</td></tr></tbody></table><p>TrainingHeartRateBean\uFF1A</p><table><thead><tr><th>type</th><th>startTime</th><th>endTime</th><th>validTime</th><th>steps</th><th>distance</th><th>calories</th></tr></thead><tbody><tr><td>SportModeType</td><td>Start time (unit: milliseconds)</td><td>End time (unit: milliseconds)</td><td>Effective duration of exercise(unit: second)</td><td>Number of steps (partial motion mode is</td><td>Active distance (partial motion mode is not supported)</td><td>Calories</td></tr></tbody></table><p>SportModeType\uFF1A</p><table><thead><tr><th>callback value</th><th>callback value type</th><th>callback value description</th></tr></thead><tbody><tr><td>walkType</td><td>int</td><td>Walking</td></tr><tr><td>runType</td><td>int</td><td>Run</td></tr><tr><td>outdoorCyclingType</td><td>int</td><td>outdoor cycling</td></tr><tr><td>ropeType</td><td>int</td><td>rope</td></tr><tr><td>badmintonType</td><td>int</td><td>badminton</td></tr><tr><td>basketballType</td><td>int</td><td>basketball</td></tr><tr><td>footballType</td><td>int</td><td>football</td></tr><tr><td>swimType</td><td>int</td><td>swim</td></tr><tr><td>mountaineeringType</td><td>int</td><td>mountaineering</td></tr><tr><td>tennisType</td><td>int</td><td>tennis</td></tr><tr><td>rugbyType</td><td>int</td><td>rugby</td></tr><tr><td>golfType</td><td>int</td><td>golf</td></tr><tr><td>yogaType</td><td>int</td><td>yoga</td></tr><tr><td>workoutType</td><td>int</td><td>workout</td></tr><tr><td>danceType</td><td>int</td><td>dance</td></tr><tr><td>baseballType</td><td>int</td><td>baseball</td></tr><tr><td>ellipticalType</td><td>int</td><td>elliptical</td></tr><tr><td>indoorCyclingType</td><td>int</td><td>indoor cycling</td></tr><tr><td>freeTrainingType</td><td>int</td><td>free training</td></tr><tr><td>boatingType</td><td>int</td><td>boating</td></tr><tr><td>trailRunningType</td><td>int</td><td>trail running</td></tr><tr><td>skiType</td><td>int</td><td>ski</td></tr><tr><td>bowlingType</td><td>int</td><td>bowling</td></tr><tr><td>dumbbellsType</td><td>int</td><td>dumbbells</td></tr><tr><td>sitUpsType</td><td>int</td><td>sit ups</td></tr><tr><td>onFootType</td><td>int</td><td>on foot</td></tr><tr><td>indoorWalkType</td><td>int</td><td>indoor walk</td></tr><tr><td>indoorRunType</td><td>int</td><td>indoor run</td></tr><tr><td>cricketType</td><td>int</td><td>cricket</td></tr><tr><td>kabAddiType</td><td>int</td><td>kabAddi</td></tr></tbody></table><p>HeartRateType:</p><table><thead><tr><th>type</th><th>value</th><th>value description</th></tr></thead><tbody><tr><td>measuring</td><td>1</td><td>Gets the heart rate measurement</td></tr><tr><td>onceMeasureComplete</td><td>2</td><td>Measuring once heart rate</td></tr><tr><td>heartRate</td><td>3</td><td>Gets history once heart rate</td></tr><tr><td>measureComplete</td><td>4</td><td>Data when heart rate measurement is completed</td></tr><tr><td>hourMeasureResult</td><td>5</td><td>Gets heart rate measurement data</td></tr><tr><td>measureResult</td><td>6</td><td>Gets Action data,Query the saved heart rate measurements in three sports modes</td></tr></tbody></table><h2 id="gets-last-action-heart-rate-measurement" tabindex="-1"><a class="header-anchor" href="#gets-last-action-heart-rate-measurement" aria-hidden="true">#</a> Gets last action heart rate measurement</h2><p>The dynamic heart rate is measured in an unconnected state and the watch can save the last measurement.</p><p>Query the last measured heart rate record saved by the watch. The query result will be obtained through the heartRateEveStm listening stream and saved in the HeartRateBean.measuring field\uFF0Ctype is measuring.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span><span class="token function">queryLastDynamicRate</span><span class="token punctuation">(</span><span class="token class-name">HistoryDynamicRateType</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Parameter Description :</p><p>HistoryDynamicRateType:</p><table><thead><tr><th>value</th><th>value type</th><th>value description</th></tr></thead><tbody><tr><td>firstHeartRate</td><td>String</td><td>first</td></tr><tr><td>secondHeartRate</td><td>String</td><td>second</td></tr><tr><td>thirdHeartRate</td><td>String</td><td>third</td></tr></tbody></table><h2 id="enable-timing-to-measure-heart-rate" tabindex="-1"><a class="header-anchor" href="#enable-timing-to-measure-heart-rate" aria-hidden="true">#</a> Enable timing to measure heart rate</h2><p>The watch supports 24-hour timed measurement of heart rate, starting from 00:00, you can set the measurement interval, the time interval is a multiple of 5 minutes.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span><span class="token function">enableTimingMeasureHeartRate</span><span class="token punctuation">(</span>int interval<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="disable-timing-to-measure-heart-rate" tabindex="-1"><a class="header-anchor" href="#disable-timing-to-measure-heart-rate" aria-hidden="true">#</a> Disable timing to measure heart rate</h2><p>Turn off the timing to measure the heart rate.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span>disableTimingMeasureHeartRate<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="gets-timing-to-measure-heart-rate-status" tabindex="-1"><a class="header-anchor" href="#gets-timing-to-measure-heart-rate-status" aria-hidden="true">#</a> Gets timing to measure heart rate status</h2><p>The query timing measures the heart rate on state.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>int timeHR <span class="token operator">=</span> <span class="token keyword">await</span> _blePlugin<span class="token punctuation">.</span>queryTimingMeasureHeartRate<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="gets-today-s-heart-rate-measurement-data" tabindex="-1"><a class="header-anchor" href="#gets-today-s-heart-rate-measurement-data" aria-hidden="true">#</a> Gets today&#39;s heart rate measurement data</h2><p>Today&#39;s heart rate measurement is divided into two types, which are obtained according to the measurement method supported by the corresponding watch.</p><p>Query today&#39;s measured heart rate value. The query result will be obtained through the heartRateEveStm listening stream and saved in the HeartRateBean.hour24MeasureResult field\uFF0Ctype is hourMeasureResult.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span><span class="token function">queryTodayHeartRate</span><span class="token punctuation">(</span><span class="token class-name">TodayHeartRateType</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>TodayHeartRateType\uFF1A</p><table><thead><tr><th>type</th><th>value</th><th>value description</th></tr></thead><tbody><tr><td>timingMeasureHeartRate</td><td>1</td><td>Timed heart rate measurement</td></tr><tr><td>allDayHeartRate</td><td>2</td><td>24-hour continuous measurement</td></tr></tbody></table><h2 id="gets-historical-heart-rate-data" tabindex="-1"><a class="header-anchor" href="#gets-historical-heart-rate-data" aria-hidden="true">#</a> Gets historical heart rate data</h2><p>Query the heart rate data of the previous day. The query result will be obtained through the heartRateEveStm listening stream and saved in the HeartRateBean.hour24MeasureResult field\uFF0Ctype is hourMeasureResult.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span>queryPastHeartRate<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="gets-action-data" tabindex="-1"><a class="header-anchor" href="#gets-action-data" aria-hidden="true">#</a> Gets action data</h2><p>Some watchs support heart rate measurement in a variety of motion modes. The measurements include other motion-related data such as heart rate and calories. This interface is used to obtain data such as calories. The watch can save the last three sports data. Supporting 24-hour continuous measurement of the watch, the exercise heart rate can be obtained from the 24-hour heart rate data according to the movement up time; other watch exercise heart rate and dynamic heart rate acquisition methods are consistent.</p><p>The query result will be obtained through the heartRateEveStm listening stream and saved in the HeartRateBean.trainingList field\uFF0Ctype is measureResult.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span>queryTrainingHeartRate<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="measuring-once-heart-rate" tabindex="-1"><a class="header-anchor" href="#measuring-once-heart-rate" aria-hidden="true">#</a> Measuring once heart rate</h2><p>Start measuring a single heart rate, the query result will be obtained through the heartRateEveStm listening stream and saved in the HeartRateBean.measureComplete field\uFF0Ctype is onceMeasureComplete.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span>startMeasureOnceHeartRate<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="stop-once-heart-rate" tabindex="-1"><a class="header-anchor" href="#stop-once-heart-rate" aria-hidden="true">#</a> Stop once heart rate</h2><p>End a once measurement. A measurement time that is too short will result in no measurement data.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span>stopMeasureOnceHeartRate<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="gets-history-once-heart-rate" tabindex="-1"><a class="header-anchor" href="#gets-history-once-heart-rate" aria-hidden="true">#</a> Gets history once heart rate</h2><p>To query the historical heart rate, the query result will be obtained through the heartRateEveStm monitoring stream and saved in the HeartRateBean.historyHrList field,type is heartRate.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>_blePlugin<span class="token punctuation">.</span>queryHistoryHeartRate<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,57),d=[r];function i(o,l){return e(),a("div",null,d)}var c=t(s,[["render",i],["__file","index.html.vue"]]);export{c as default};