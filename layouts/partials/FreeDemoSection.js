"use client";

import { useEffect, useRef, useState } from "react";

const G = "#1D9E75";

/* ═══════════════════════════════════════════
   Shared phone chrome — module scope
═══════════════════════════════════════════ */
function StatusBar() {
  return (
    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"0 12px", height:20, flexShrink:0, background:"#181818" }}>
      <span style={{ fontSize:9, fontWeight:700, color:"#fff", letterSpacing:0.3 }}>9:41</span>
      <div style={{ display:"flex", gap:4, alignItems:"center" }}>
        <svg width="13" height="9" viewBox="0 0 13 9" fill="none">
          <rect x="0" y="5" width="2.5" height="4" rx="0.5" fill="white"/>
          <rect x="3.5" y="3.5" width="2.5" height="5.5" rx="0.5" fill="white"/>
          <rect x="7" y="2" width="2.5" height="7" rx="0.5" fill="white"/>
          <rect x="10.5" y="0" width="2.5" height="9" rx="0.5" fill="white"/>
        </svg>
        <svg width="12" height="9" viewBox="0 0 12 9" fill="white">
          <path d="M6 6.8a1.1 1.1 0 1 0 0 2.2A1.1 1.1 0 0 0 6 6.8z"/>
          <path d="M3.2 4.6a3.9 3.9 0 0 1 5.6 0l1.1-1.1A5.5 5.5 0 0 0 2.1 3.5L3.2 4.6z"/>
          <path d="M.4 1.9A7.8 7.8 0 0 1 11.6 1.9L12.7.8A9.3 9.3 0 0 0-.7.8L.4 1.9z"/>
        </svg>
        <div style={{ width:19, height:10, border:"1.5px solid rgba(255,255,255,.7)", borderRadius:3, padding:"1.5px", display:"flex", position:"relative" }}>
          <div style={{ width:"75%", background:"white", borderRadius:1.5 }}/>
          <div style={{ position:"absolute", right:-3, top:"50%", transform:"translateY(-50%)", width:2, height:5, background:"rgba(255,255,255,.6)", borderRadius:"0 1px 1px 0" }}/>
        </div>
      </div>
    </div>
  );
}

function HomeIndicator() {
  return (
    <div style={{ height:16, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
      <div style={{ width:56, height:4, background:"#3a3a3a", borderRadius:3 }}/>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SUBSECTION 1 SCREENS
═══════════════════════════════════════════ */
function ScreenHome() {
  const entries = [
    { icon:"⚡", bg:"#2d2040", text:"Headache — severity 6/10", sub:"Logged 8:30 am · voice" },
    { icon:"💊", bg:"#2d1a0e", text:"Sumatriptan 50mg — taken",  sub:"Logged 8:45 am" },
    { icon:"🥗", bg:"#0e2d1a", text:"Breakfast — oats, banana",  sub:"Logged 9:10 am" },
  ];
  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100%", background:"#181818", color:"#fff", fontFamily:"Lato,sans-serif" }}>
      <StatusBar/>
      <div style={{ flex:1, padding:"8px 10px 0", display:"flex", flexDirection:"column", gap:8, overflow:"hidden" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
          <div>
            <div style={{ fontSize:13, fontWeight:700, lineHeight:1.3 }}>Good morning, Nadia</div>
            <div style={{ fontSize:9, color:"#9ca3af", marginTop:1 }}>Friday, 22 May</div>
          </div>
          <div style={{ width:24, height:24, borderRadius:12, border:"1px solid #2e2e2e", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11 }}>🔔</div>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:6 }}>
          <div style={{ background:"#242424", borderRadius:8, padding:"7px 8px" }}>
            <div style={{ fontSize:8, color:"#9ca3af", marginBottom:2 }}>Sleep</div>
            <div style={{ fontSize:13, fontWeight:700, color:G }}>7h 12m</div>
          </div>
          <div style={{ background:"#242424", borderRadius:8, padding:"7px 8px" }}>
            <div style={{ fontSize:8, color:"#9ca3af", marginBottom:2 }}>Heart rate</div>
            <div style={{ fontSize:12, fontWeight:700 }}>68 bpm</div>
          </div>
        </div>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <span style={{ fontSize:11, fontWeight:700 }}>Today's log</span>
          <span style={{ fontSize:8, background:"#2a2a2a", color:"#9ca3af", borderRadius:10, padding:"2px 7px" }}>3 entries</span>
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          {entries.map((e,i) => (
            <div key={i} style={{ display:"flex", alignItems:"center", gap:7, paddingBottom:6, marginBottom:i<2?6:0, borderBottom:i<2?"1px solid #252525":"none" }}>
              <div style={{ width:26, height:26, borderRadius:13, background:e.bg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, flexShrink:0 }}>{e.icon}</div>
              <div style={{ minWidth:0 }}>
                <div style={{ fontSize:10, color:"#e5e7eb", fontWeight:500, lineHeight:1.2, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{e.text}</div>
                <div style={{ fontSize:8, color:"#6b7280", marginTop:1 }}>{e.sub}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background:G, borderRadius:20, padding:"8px", textAlign:"center", fontSize:11, fontWeight:700, color:"#fff" }}>+ Log something</div>
      </div>
      <div style={{ display:"flex", justifyContent:"space-around", alignItems:"center", padding:"5px 0 2px", borderTop:"1px solid #252525", flexShrink:0 }}>
        {[{l:"Home",a:true},{l:"Track"},{l:"Insights"},{l:"Report"},{l:"Profile"}].map((n,i) => (
          <div key={i}><div style={{ fontSize:7, color:n.a?G:"#6b7280", fontWeight:n.a?700:400 }}>{n.l}</div></div>
        ))}
      </div>
      <HomeIndicator/>
    </div>
  );
}

function ScreenSymptom() {
  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100%", background:"#181818", color:"#fff", fontFamily:"Lato,sans-serif" }}>
      <StatusBar/>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"5px 10px 0", flexShrink:0 }}>
        <div style={{ display:"flex", alignItems:"center", gap:5 }}>
          <span style={{ fontSize:14, color:"#9ca3af", lineHeight:1 }}>←</span>
          <span style={{ fontSize:11, fontWeight:700 }}>Log symptom</span>
        </div>
        <span style={{ fontSize:9, color:"#9ca3af" }}>Step 2 of 6</span>
      </div>
      <div style={{ margin:"5px 10px 0", height:3, background:"#2e2e2e", borderRadius:2, flexShrink:0 }}>
        <div style={{ width:"33%", height:"100%", background:G, borderRadius:2 }}/>
      </div>
      <div style={{ flex:1, padding:"8px 10px 0", display:"flex", flexDirection:"column", gap:8, overflow:"hidden" }}>
        <div>
          <div style={{ fontSize:8, color:"#9ca3af", marginBottom:2, letterSpacing:0.4 }}>Onset</div>
          <div style={{ fontSize:12, fontWeight:700, marginBottom:6 }}>When did it start?</div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:4 }}>
            {["Just now","Today","Yesterday","This week","Gradual"].map((c,i) => (
              <span key={c} style={{ fontSize:9, padding:"3px 8px", borderRadius:12, border:`1px solid ${i===0?G:"#3a3a3a"}`, color:i===0?G:"#b0b0b0", fontWeight:i===0?700:400 }}>{c}</span>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize:9, color:"#9ca3af", marginBottom:5 }}>Character — what does it feel like?</div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:4 }}>
            {["Throbbing","Sharp","Dull","Burning","Pressure"].map((c,i) => (
              <span key={c} style={{ fontSize:9, padding:"3px 8px", borderRadius:12, border:`1px solid ${i===0?G:"#3a3a3a"}`, color:i===0?"#fff":"#b0b0b0", background:i===0?G:"transparent" }}>{c}</span>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize:9, color:"#9ca3af", marginBottom:5 }}>Severity</div>
          <div style={{ display:"flex", gap:2.5, marginBottom:4 }}>
            {Array.from({length:10},(_,i) => <div key={i} style={{ flex:1, height:6, borderRadius:3, background:i<5?G:i<7?"#f59e0b":"#2e2e2e" }}/>)}
          </div>
          <div style={{ display:"flex", justifyContent:"space-between", fontSize:8, color:"#9ca3af" }}>
            <span>1 — mild</span><span style={{ color:"#f59e0b", fontWeight:700 }}>6/10</span><span>10 — severe</span>
          </div>
        </div>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", border:"1px solid #3a3a3a", borderRadius:10, padding:"6px 10px", flexShrink:0 }}>
          <span style={{ fontSize:9, color:"#9ca3af" }}>Or speak your symptom</span>
          <div style={{ display:"flex", alignItems:"center", gap:4, background:"#2a2a2a", padding:"3px 8px", borderRadius:8 }}>
            <span style={{ fontSize:9 }}>🎤</span>
            <span style={{ fontSize:9, fontWeight:700, color:"#e5e7eb" }}>Record</span>
          </div>
        </div>
      </div>
      <div style={{ padding:"6px 10px", flexShrink:0 }}>
        <div style={{ background:G, borderRadius:20, padding:"8px", textAlign:"center", fontSize:11, fontWeight:700, color:"#fff" }}>Continue</div>
      </div>
      <HomeIndicator/>
    </div>
  );
}

function ScreenVoice() {
  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100%", background:"#181818", color:"#fff", fontFamily:"Lato,sans-serif" }}>
      <StatusBar/>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"5px 10px 0", flexShrink:0 }}>
        <div style={{ display:"flex", alignItems:"center", gap:5 }}>
          <span style={{ fontSize:14, color:"#9ca3af", lineHeight:1 }}>←</span>
          <span style={{ fontSize:11, fontWeight:700 }}>Voice log</span>
        </div>
        <span style={{ fontSize:8, border:"1px solid #3a3a3a", color:"#9ca3af", borderRadius:8, padding:"2px 7px" }}>Pro</span>
      </div>
      <div style={{ flex:1, padding:"10px 10px 4px", display:"flex", flexDirection:"column", alignItems:"center", gap:7, overflow:"hidden" }}>
        <div style={{ width:60, height:60, borderRadius:30, background:"#e0e7ff", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
          <span style={{ fontSize:24 }}>🎤</span>
        </div>
        <div style={{ textAlign:"center", flexShrink:0 }}>
          <div style={{ fontSize:12, fontWeight:700, color:"#818cf8" }}>Listening…</div>
          <div style={{ fontSize:9, color:"#9ca3af" }}>Speak naturally</div>
        </div>
        <div style={{ width:"100%", background:"rgba(129,140,248,.07)", border:"1px solid rgba(129,140,248,.14)", borderRadius:10, padding:"7px 9px", flexShrink:0 }}>
          <div style={{ fontSize:8, color:"#818cf8", marginBottom:3 }}>Transcript</div>
          <div style={{ fontSize:9, color:"#c7d2fe", lineHeight:1.45 }}>"Throbbing headache on the left side, started an hour ago, getting worse when I move…"</div>
        </div>
        <div style={{ width:"100%", flexShrink:0 }}>
          <div style={{ fontSize:8, color:"#9ca3af", marginBottom:5 }}>Fields auto-filled from voice</div>
          {[{label:"Site",value:"Left side of head"},{label:"Character",value:"Throbbing"},{label:"Onset",value:"~1 hour ago"}].map((f,i) => (
            <div key={i} style={{ background:"#242424", borderRadius:7, padding:"5px 8px", marginBottom:i<2?4:0 }}>
              <div style={{ fontSize:8, color:"#9ca3af" }}>{f.label}</div>
              <div style={{ fontSize:10, fontWeight:600 }}>{f.value}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding:"0 10px 4px", flexShrink:0, display:"flex", flexDirection:"column", gap:5 }}>
        <div style={{ background:G, borderRadius:20, padding:"7px", textAlign:"center", fontSize:11, fontWeight:700, color:"#fff" }}>Confirm &amp; save</div>
        <div style={{ border:"1px solid #3a3a3a", borderRadius:20, padding:"7px", textAlign:"center", fontSize:10, color:"#b0b0b0" }}>Re-record</div>
      </div>
      <HomeIndicator/>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SUBSECTION 2 SCREENS
═══════════════════════════════════════════ */
function ScreenMeds() {
  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100%", background:"#181818", color:"#fff", fontFamily:"Lato,sans-serif" }}>
      <StatusBar/>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"6px 10px 4px", flexShrink:0 }}>
        <span style={{ fontSize:14, fontWeight:700 }}>Medications</span>
        <span style={{ fontSize:20, color:G, fontWeight:300, lineHeight:1 }}>+</span>
      </div>
      <div style={{ display:"flex", gap:16, padding:"0 10px", borderBottom:"1px solid #252525", flexShrink:0 }}>
        {["Today","Schedule","History"].map((t,i) => (
          <span key={t} style={{ fontSize:10, fontWeight:i===0?700:400, color:i===0?G:"#9ca3af", paddingBottom:6, borderBottom:i===0?`2px solid ${G}`:"2px solid transparent" }}>{t}</span>
        ))}
      </div>
      <div style={{ flex:1, padding:"8px 10px 0", display:"flex", flexDirection:"column", overflow:"hidden" }}>
        <div style={{ fontSize:9, color:"#9ca3af", marginBottom:7 }}>Morning · 8:00 am</div>
        {/* Sumatriptan */}
        <div style={{ display:"flex", alignItems:"center", gap:8, paddingBottom:7, borderBottom:"1px solid #252525", marginBottom:7 }}>
          <div style={{ width:22, height:22, borderRadius:11, background:G, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
            <span style={{ fontSize:10, color:"#fff", fontWeight:700 }}>✓</span>
          </div>
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ fontSize:10, fontWeight:700 }}>Sumatriptan 50mg</div>
            <div style={{ fontSize:8, color:"#9ca3af" }}>Taken at 8:45 am</div>
          </div>
          <span style={{ fontSize:8, border:`1px solid ${G}`, color:G, borderRadius:8, padding:"2px 7px", flexShrink:0 }}>Done</span>
        </div>
        {/* Vitamin D */}
        <div style={{ display:"flex", alignItems:"center", gap:8, paddingBottom:7, borderBottom:"1px solid #252525", marginBottom:10 }}>
          <div style={{ width:22, height:22, borderRadius:11, background:G, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
            <span style={{ fontSize:10, color:"#fff", fontWeight:700 }}>✓</span>
          </div>
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ fontSize:10, fontWeight:700 }}>Vitamin D 1000IU</div>
            <div style={{ fontSize:8, color:"#9ca3af" }}>Taken at 8:45 am</div>
          </div>
          <span style={{ fontSize:8, border:`1px solid ${G}`, color:G, borderRadius:8, padding:"2px 7px", flexShrink:0 }}>Done</span>
        </div>
        <div style={{ fontSize:9, color:"#9ca3af", marginBottom:7 }}>Evening · 9:00 pm</div>
        {/* Magnesium */}
        <div style={{ display:"flex", alignItems:"center", gap:8, paddingBottom:7, borderBottom:"1px solid #252525", marginBottom:10 }}>
          <div style={{ width:22, height:22, borderRadius:4, border:"1.5px solid #444", flexShrink:0 }}/>
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ fontSize:10, fontWeight:700 }}>Magnesium 300mg</div>
            <div style={{ fontSize:8, color:"#9ca3af" }}>Due in 11 hours</div>
          </div>
          <span style={{ fontSize:8, border:"1px solid #555", color:"#9ca3af", borderRadius:8, padding:"2px 7px", flexShrink:0 }}>Pending</span>
        </div>
        {/* Amber warning */}
        <div style={{ background:"rgba(245,158,11,.1)", border:"1px solid rgba(245,158,11,.28)", borderRadius:9, padding:"8px 9px" }}>
          <div style={{ display:"flex", alignItems:"flex-start", gap:6 }}>
            <span style={{ fontSize:11, color:"#f59e0b", flexShrink:0, lineHeight:1.2 }}>⚠</span>
            <div>
              <div style={{ fontSize:9, fontWeight:700, color:"#f59e0b", marginBottom:2 }}>Missed yesterday</div>
              <div style={{ fontSize:8, color:"#fcd34d", lineHeight:1.4 }}>Magnesium was not logged — this will appear in your GP report.</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display:"flex", justifyContent:"space-around", alignItems:"center", padding:"5px 0 2px", borderTop:"1px solid #252525", flexShrink:0 }}>
        {[{l:"Home"},{l:"Meds",a:true},{l:"Insights"},{l:"Report"},{l:"Profile"}].map((n,i) => (
          <div key={i}><div style={{ fontSize:7, color:n.a?G:"#6b7280", fontWeight:n.a?700:400 }}>{n.l}</div></div>
        ))}
      </div>
      <HomeIndicator/>
    </div>
  );
}

function ScreenWearable() {
  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100%", background:"#181818", color:"#fff", fontFamily:"Lato,sans-serif" }}>
      <StatusBar/>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"5px 10px 0", flexShrink:0 }}>
        <span style={{ fontSize:13, fontWeight:700 }}>Health data</span>
        <span style={{ fontSize:13, color:"#9ca3af" }}>⌚</span>
      </div>
      <div style={{ display:"flex", gap:14, padding:"5px 10px 0", borderBottom:"1px solid #252525", flexShrink:0 }}>
        {["Overview","Sleep","Heart","Activity"].map((t,i) => (
          <span key={t} style={{ fontSize:9, fontWeight:i===0?700:400, color:i===0?G:"#9ca3af", paddingBottom:5, borderBottom:i===0?`2px solid ${G}`:"2px solid transparent" }}>{t}</span>
        ))}
      </div>
      {/* Apple Watch badge */}
      <div style={{ margin:"7px 10px 0", background:"rgba(29,158,117,.1)", border:`1px solid rgba(29,158,117,.25)`, borderRadius:8, padding:"5px 8px", display:"flex", alignItems:"center", gap:6, flexShrink:0 }}>
        <span style={{ fontSize:9 }}>⌚</span>
        <span style={{ fontSize:9, color:G, fontWeight:700 }}>Apple Watch connected</span>
      </div>
      <div style={{ flex:1, padding:"8px 10px 0", display:"flex", flexDirection:"column", gap:6, overflow:"hidden" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <span style={{ fontSize:10, fontWeight:700 }}>Sleep · last night</span>
          <span style={{ fontSize:7, border:"1px solid #3a3a3a", color:"#9ca3af", borderRadius:6, padding:"1px 5px" }}>⌚ Auto</span>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:5 }}>
          <div style={{ background:"#242424", borderRadius:7, padding:"6px 8px" }}>
            <div style={{ fontSize:8, color:"#9ca3af", marginBottom:2 }}>Total sleep</div>
            <div style={{ fontSize:13, fontWeight:700, color:G }}>7h 12m</div>
          </div>
          <div style={{ background:"#242424", borderRadius:7, padding:"6px 8px" }}>
            <div style={{ fontSize:8, color:"#9ca3af", marginBottom:2 }}>Quality</div>
            <div style={{ fontSize:12, fontWeight:700 }}>Good</div>
          </div>
        </div>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <span style={{ fontSize:10, fontWeight:700 }}>Heart rate</span>
          <span style={{ fontSize:7, border:"1px solid #3a3a3a", color:"#9ca3af", borderRadius:6, padding:"1px 5px" }}>⌚ Auto</span>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:5 }}>
          <div style={{ background:"#242424", borderRadius:7, padding:"6px 8px" }}>
            <div style={{ fontSize:8, color:"#9ca3af", marginBottom:2 }}>Resting HR</div>
            <div style={{ fontSize:13, fontWeight:700, color:G }}>68 bpm</div>
          </div>
          <div style={{ background:"#242424", borderRadius:7, padding:"6px 8px" }}>
            <div style={{ fontSize:8, color:"#9ca3af", marginBottom:2 }}>HRV</div>
            <div style={{ fontSize:12, fontWeight:700 }}>42 ms</div>
          </div>
        </div>
        {/* 3-nights warning */}
        <div style={{ background:"rgba(245,158,11,.1)", border:"1px solid rgba(245,158,11,.28)", borderRadius:9, padding:"7px 9px" }}>
          <div style={{ display:"flex", alignItems:"flex-start", gap:6 }}>
            <span style={{ fontSize:10, color:"#f59e0b", flexShrink:0, lineHeight:1.2 }}>⚠</span>
            <div style={{ fontSize:8, color:"#fcd34d", lineHeight:1.45 }}>3 nights under 6h flagged in report</div>
          </div>
        </div>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:2 }}>
          <span style={{ fontSize:10, fontWeight:700 }}>Manual entries</span>
          <span style={{ fontSize:8, color:"#6b7280" }}>Not from wearable</span>
        </div>
        <div style={{ background:"#242424", borderRadius:8, padding:"6px 8px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:4 }}>
            <span style={{ fontSize:9, fontWeight:700 }}>Stress level</span>
            <span style={{ fontSize:7, background:"#2a2a2a", color:"#9ca3af", borderRadius:5, padding:"1px 5px" }}>Manual</span>
          </div>
          <div style={{ display:"flex", gap:2, marginBottom:3 }}>
            {Array.from({length:10},(_,i) => <div key={i} style={{ flex:1, height:4, borderRadius:2, background:i<6?G:"#333" }}/>)}
          </div>
          <div style={{ display:"flex", justifyContent:"space-between", fontSize:7, color:"#9ca3af" }}>
            <span>Low</span><span style={{ color:"#f59e0b" }}>6/10</span><span>High</span>
          </div>
        </div>
      </div>
      <HomeIndicator/>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SUBSECTION 3 SCREENS
═══════════════════════════════════════════ */
function ScreenFood() {
  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100%", background:"#181818", color:"#fff", fontFamily:"Lato,sans-serif" }}>
      <StatusBar/>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"5px 10px 0", flexShrink:0 }}>
        <span style={{ fontSize:13, fontWeight:700 }}>Nutrition log</span>
        <span style={{ fontSize:13 }}>🥗</span>
      </div>
      <div style={{ display:"flex", gap:16, padding:"5px 10px 0", borderBottom:"1px solid #252525", flexShrink:0 }}>
        {["Today","History","Goals"].map((t,i) => (
          <span key={t} style={{ fontSize:10, fontWeight:i===0?700:400, color:i===0?G:"#9ca3af", paddingBottom:5, borderBottom:i===0?`2px solid ${G}`:"2px solid transparent" }}>{t}</span>
        ))}
      </div>
      <div style={{ flex:1, padding:"8px 10px 0", display:"flex", flexDirection:"column", gap:6, overflow:"hidden" }}>
        {/* Calorie summary */}
        <div style={{ background:"#242424", borderRadius:8, padding:"7px 9px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", fontSize:8, color:"#9ca3af", marginBottom:5 }}>
            <span>Calories today</span><span style={{ color:G, fontWeight:700 }}>1,240 / 2,000 kcal</span>
          </div>
          <div style={{ height:5, background:"#333", borderRadius:3 }}>
            <div style={{ width:"62%", height:"100%", background:G, borderRadius:3 }}/>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:4, marginTop:6 }}>
            {[["Protein","48g"],["Carbs","142g"],["Fat","38g"]].map(([k,v]) => (
              <div key={k} style={{ background:"#2a2a2a", borderRadius:5, padding:"3px 5px", textAlign:"center" }}>
                <div style={{ fontSize:7, color:"#9ca3af" }}>{k}</div>
                <div style={{ fontSize:9, fontWeight:700 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Breakfast */}
        <div style={{ fontSize:8, color:"#9ca3af" }}>Breakfast · 8:15 am</div>
        <div style={{ display:"flex", alignItems:"center", gap:7, paddingBottom:6, borderBottom:"1px solid #252525" }}>
          <div style={{ width:22, height:22, borderRadius:11, background:G, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
            <span style={{ fontSize:9, color:"#fff", fontWeight:700 }}>✓</span>
          </div>
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ fontSize:9, fontWeight:600 }}>Oats with banana &amp; honey</div>
            <div style={{ fontSize:8, color:"#9ca3af" }}>380 kcal</div>
          </div>
        </div>
        {/* Lunch */}
        <div style={{ fontSize:8, color:"#9ca3af" }}>Lunch · 12:30 pm</div>
        <div style={{ display:"flex", alignItems:"center", gap:7, paddingBottom:6, borderBottom:"1px solid #252525" }}>
          <div style={{ width:22, height:22, borderRadius:11, background:G, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
            <span style={{ fontSize:9, color:"#fff", fontWeight:700 }}>✓</span>
          </div>
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ fontSize:9, fontWeight:600 }}>Grilled chicken salad</div>
            <div style={{ fontSize:8, color:"#9ca3af" }}>520 kcal</div>
          </div>
        </div>
        {/* Dinner pending */}
        <div style={{ fontSize:8, color:"#9ca3af" }}>Dinner · due 7:00 pm</div>
        <div style={{ display:"flex", alignItems:"center", gap:7, paddingBottom:6, borderBottom:"1px solid #252525" }}>
          <div style={{ width:22, height:22, borderRadius:4, border:"1.5px solid #444", flexShrink:0 }}/>
          <div style={{ flex:1 }}><div style={{ fontSize:9, color:"#6b7280" }}>Not logged yet</div></div>
          <span style={{ fontSize:8, border:"1px solid #555", color:"#9ca3af", borderRadius:8, padding:"2px 6px", flexShrink:0 }}>Pending</span>
        </div>
        <div style={{ background:G, borderRadius:20, padding:"7px", textAlign:"center", fontSize:10, fontWeight:700, color:"#fff" }}>+ Log meal</div>
      </div>
      <div style={{ display:"flex", justifyContent:"space-around", alignItems:"center", padding:"5px 0 2px", borderTop:"1px solid #252525", flexShrink:0 }}>
        {[{l:"Home"},{l:"Track",a:true},{l:"Insights"},{l:"Report"},{l:"Profile"}].map((n,i) => (
          <div key={i}><div style={{ fontSize:7, color:n.a?G:"#6b7280", fontWeight:n.a?700:400 }}>{n.l}</div></div>
        ))}
      </div>
      <HomeIndicator/>
    </div>
  );
}

function ScreenWorkout() {
  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100%", background:"#181818", color:"#fff", fontFamily:"Lato,sans-serif" }}>
      <StatusBar/>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"5px 10px 0", flexShrink:0 }}>
        <span style={{ fontSize:13, fontWeight:700 }}>Activity</span>
        <span style={{ fontSize:13 }}>🏃</span>
      </div>
      <div style={{ display:"flex", gap:16, padding:"5px 10px 0", borderBottom:"1px solid #252525", flexShrink:0 }}>
        {["Today","Week","History"].map((t,i) => (
          <span key={t} style={{ fontSize:10, fontWeight:i===0?700:400, color:i===0?G:"#9ca3af", paddingBottom:5, borderBottom:i===0?`2px solid ${G}`:"2px solid transparent" }}>{t}</span>
        ))}
      </div>
      <div style={{ flex:1, padding:"8px 10px 0", display:"flex", flexDirection:"column", gap:7, overflow:"hidden" }}>
        {/* Summary stats */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:5 }}>
          <div style={{ background:"#242424", borderRadius:8, padding:"7px 8px" }}>
            <div style={{ fontSize:7, color:"#9ca3af", marginBottom:2 }}>Active calories</div>
            <div style={{ fontSize:13, fontWeight:700, color:G }}>342 kcal</div>
          </div>
          <div style={{ background:"#242424", borderRadius:8, padding:"7px 8px" }}>
            <div style={{ fontSize:7, color:"#9ca3af", marginBottom:2 }}>Steps</div>
            <div style={{ display:"flex", alignItems:"center", gap:4 }}>
              <span style={{ fontSize:12, fontWeight:700 }}>7,420</span>
              <span style={{ fontSize:7, border:"1px solid #3a3a3a", color:"#9ca3af", borderRadius:5, padding:"1px 4px" }}>⌚</span>
            </div>
          </div>
        </div>
        {/* Workout entry */}
        <div style={{ fontSize:9, color:"#9ca3af" }}>This morning</div>
        <div style={{ background:"#242424", borderRadius:9, padding:"9px 10px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:6 }}>
            <div>
              <div style={{ fontSize:10, fontWeight:700 }}>Morning run</div>
              <div style={{ fontSize:8, color:"#9ca3af", marginTop:1 }}>Outdoor · Moderate</div>
            </div>
            <span style={{ fontSize:7, border:`1px solid ${G}`, color:G, borderRadius:6, padding:"2px 6px" }}>⌚ Auto</span>
          </div>
          <div style={{ display:"flex", gap:12, fontSize:9 }}>
            <div><span style={{ color:G, fontWeight:700 }}>5.2 km</span><span style={{ color:"#9ca3af" }}> dist.</span></div>
            <div><span style={{ color:G, fontWeight:700 }}>28 min</span><span style={{ color:"#9ca3af" }}> time</span></div>
            <div><span style={{ color:G, fontWeight:700 }}>158</span><span style={{ color:"#9ca3af" }}> avg HR</span></div>
          </div>
        </div>
        {/* GP note */}
        <div style={{ background:"rgba(29,158,117,.08)", border:"1px solid rgba(29,158,117,.2)", borderRadius:8, padding:"6px 9px", display:"flex", alignItems:"center", gap:6 }}>
          <span style={{ fontSize:10, color:G }}>✓</span>
          <span style={{ fontSize:8, color:"#6ee7b7", lineHeight:1.4 }}>Activity added to your GP report automatically</span>
        </div>
        {/* Log workout CTA */}
        <div style={{ border:`1px solid ${G}`, borderRadius:20, padding:"7px", textAlign:"center", fontSize:10, fontWeight:700, color:G }}>+ Log workout</div>
      </div>
      <div style={{ display:"flex", justifyContent:"space-around", alignItems:"center", padding:"5px 0 2px", borderTop:"1px solid #252525", flexShrink:0 }}>
        {[{l:"Home"},{l:"Track",a:true},{l:"Insights"},{l:"Report"},{l:"Profile"}].map((n,i) => (
          <div key={i}><div style={{ fontSize:7, color:n.a?G:"#6b7280", fontWeight:n.a?700:400 }}>{n.l}</div></div>
        ))}
      </div>
      <HomeIndicator/>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SUBSECTION 4 SCREENS
═══════════════════════════════════════════ */
function ScreenGPReport() {
  const TABLE = [
    ["Pelvic discomfort","17/48 days","1–5 hrs","3–6/10"],
    ["Heavier bleeding","2 cycles","3–4 days","Moderate"],
    ["Bloating","19 days","½–full day","2–5/10"],
    ["Fatigue","22 days","Most of day","3–6/10"],
    ["Lower back pain","11 days","2–6 hrs","3–5/10"],
  ];
  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100%", background:"#181818", color:"#fff", fontFamily:"Lato,sans-serif", overflow:"hidden" }}>
      <StatusBar/>
      {/* Fixed header — stays visible while content scrolls */}
      <div style={{ padding:"5px 10px 5px", flexShrink:0, borderBottom:"1px solid #252525" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <span style={{ fontSize:13, fontWeight:700 }}>GP report</span>
          <span style={{ fontSize:8, border:"1px solid #555", color:"#9ca3af", borderRadius:5, padding:"2px 8px", letterSpacing:0.3 }}>PDF</span>
        </div>
        <div style={{ fontSize:8, color:"#9ca3af", marginTop:1 }}>19 May 2026 · 48 days tracked</div>
      </div>
      {/* Scrolling body */}
      <div style={{ flex:1, overflow:"hidden", position:"relative" }}>
        <div className="jv-gp-scroll" style={{ padding:"7px 10px 10px" }}>
          {/* Patient */}
          <div style={{ background:"#242424", borderRadius:7, padding:"6px 8px", marginBottom:6 }}>
            <div style={{ fontSize:8, color:G, fontWeight:700, marginBottom:1 }}>Patient · JV-UK-GYN-DEMO-001</div>
            <div style={{ fontSize:8, color:"#9ca3af" }}>Age 43 · Tracking: 01 Apr – 18 May 2026</div>
          </div>
          {/* No urgent */}
          <div style={{ background:"rgba(29,158,117,.1)", border:"1px solid rgba(29,158,117,.25)", borderRadius:7, padding:"6px 8px", marginBottom:6 }}>
            <div style={{ fontSize:9, fontWeight:700, color:G, marginBottom:2 }}>✓ No urgent symptoms</div>
            <div style={{ fontSize:7.5, color:"#86efac", lineHeight:1.45 }}>No fainting, sudden severe pain, heavy bleeding, chest pain, breathlessness, or fever recorded.</div>
          </div>
          {/* Main concern */}
          <div style={{ marginBottom:6 }}>
            <div style={{ fontSize:9, fontWeight:700, borderBottom:"1px solid #2e2e2e", paddingBottom:3, marginBottom:4 }}>Main concern</div>
            <div style={{ fontSize:7.5, color:"#d1d5db", lineHeight:1.5 }}>Recurring pelvic discomfort, heavier and irregular bleeding, bloating, and fatigue tracked over 6–7 weeks. Presented for GP review and discussion of next steps.</div>
          </div>
          {/* Timeline */}
          <div style={{ marginBottom:6 }}>
            <div style={{ fontSize:9, fontWeight:700, borderBottom:"1px solid #2e2e2e", paddingBottom:3, marginBottom:4 }}>Symptom timeline</div>
            <div style={{ fontSize:7.5, color:"#d1d5db", lineHeight:1.5 }}>Symptoms started gradually in early April 2026. Pelvic discomfort became more frequent from late April. Bloating and fatigue logged more often in past 3 weeks. Lower back pain mainly on heavier bleeding days.</div>
          </div>
          {/* Table */}
          <div style={{ marginBottom:6 }}>
            <div style={{ fontSize:9, fontWeight:700, borderBottom:"1px solid #2e2e2e", paddingBottom:3, marginBottom:4 }}>Key symptom pattern</div>
            <div style={{ display:"grid", gridTemplateColumns:"2fr 1.4fr 1.1fr 1.1fr", gap:2, marginBottom:3 }}>
              {["Symptom","Freq.","Duration","Severity"].map(h=>(
                <div key={h} style={{ fontSize:7, color:"#6b7280", fontWeight:700 }}>{h}</div>
              ))}
            </div>
            {TABLE.map((row,i)=>(
              <div key={i} style={{ display:"grid", gridTemplateColumns:"2fr 1.4fr 1.1fr 1.1fr", gap:2, borderTop:"1px solid #252525", padding:"3px 0" }}>
                {row.map((cell,j)=>(
                  <div key={j} style={{ fontSize:7, color:j===0?"#e5e7eb":"#9ca3af", lineHeight:1.35 }}>{cell}</div>
                ))}
              </div>
            ))}
          </div>
          {/* Associated */}
          <div style={{ marginBottom:6 }}>
            <div style={{ fontSize:9, fontWeight:700, borderBottom:"1px solid #2e2e2e", paddingBottom:3, marginBottom:4 }}>Associated symptoms</div>
            <div style={{ fontSize:7.5, color:"#d1d5db", lineHeight:1.5 }}>Disturbed sleep, headaches, mood changes / irritability, mild nausea on heavier bleeding days, urinary frequency on 6 days, reduced appetite during some episodes.</div>
          </div>
          {/* Better/worse */}
          <div style={{ marginBottom:6 }}>
            <div style={{ fontSize:9, fontWeight:700, borderBottom:"1px solid #2e2e2e", paddingBottom:3, marginBottom:4 }}>Better / worse factors</div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
              <div>
                <div style={{ fontSize:7.5, color:"#f87171", fontWeight:700, marginBottom:3 }}>Worse with</div>
                {["Prolonged standing","Poor sleep / high stress","Heavier bleeding days"].map((t,i)=>(
                  <div key={i} style={{ fontSize:7, color:"#d1d5db", lineHeight:1.45 }}>· {t}</div>
                ))}
              </div>
              <div>
                <div style={{ fontSize:7.5, color:G, fontWeight:700, marginBottom:3 }}>Better with</div>
                {["Rest breaks","Heat pack","Hydration & light activity"].map((t,i)=>(
                  <div key={i} style={{ fontSize:7, color:"#d1d5db", lineHeight:1.45 }}>· {t}</div>
                ))}
              </div>
            </div>
          </div>
          {/* Medication */}
          <div style={{ marginBottom:6 }}>
            <div style={{ fontSize:9, fontWeight:700, borderBottom:"1px solid #2e2e2e", paddingBottom:3, marginBottom:4 }}>Medication &amp; relevant history</div>
            <div style={{ fontSize:7.5, color:"#d1d5db", lineHeight:1.5 }}>Occasional paracetamol for discomfort. Iron supplement started 02 May 2026. No known medication allergies. Previous irregular cycle noted in 2024. No surgery on record.</div>
          </div>
          {/* Impact */}
          <div style={{ marginBottom:6 }}>
            <div style={{ fontSize:9, fontWeight:700, borderBottom:"1px solid #2e2e2e", paddingBottom:3, marginBottom:4 }}>Impact on daily life</div>
            {[["Sleep affected","9 nights"],["Work affected","6 days"],["Exercise","Reduced on heavier days"]].map(([k,v],i)=>(
              <div key={i} style={{ display:"flex", justifyContent:"space-between", fontSize:7.5, marginBottom:3 }}>
                <span style={{ color:"#9ca3af" }}>{k}</span>
                <span style={{ color:"#e5e7eb", fontWeight:600 }}>{v}</span>
              </div>
            ))}
          </div>
          {/* Questions */}
          <div style={{ marginBottom:6 }}>
            <div style={{ fontSize:9, fontWeight:700, borderBottom:"1px solid #2e2e2e", paddingBottom:3, marginBottom:4 }}>Patient questions for GP</div>
            {[
              "Could these symptoms need blood tests, examination, or further review?",
              "Should the bleeding and pelvic discomfort be discussed with a gynaecology specialist?",
              "What should I track before a follow-up appointment?",
            ].map((q,i)=>(
              <div key={i} style={{ display:"flex", gap:5, marginBottom:4 }}>
                <span style={{ fontSize:8, color:G, fontWeight:700, flexShrink:0 }}>{i+1}</span>
                <span style={{ fontSize:7.5, color:"#d1d5db", lineHeight:1.45 }}>{q}</span>
              </div>
            ))}
          </div>
          {/* Uploaded records */}
          <div style={{ marginBottom:6 }}>
            <div style={{ fontSize:9, fontWeight:700, borderBottom:"1px solid #2e2e2e", paddingBottom:3, marginBottom:4 }}>Uploaded records linked</div>
            {[
              "Symptom tracking summary · 01 Apr – 18 May 2026",
              "Pharmacy receipt · pain relief · 29 Apr 2026",
              "Blood test report · 15 Jan 2026",
            ].map((r,i)=>(
              <div key={i} style={{ fontSize:7.5, color:"#9ca3af", lineHeight:1.4, marginBottom:3 }}>📎 {r}</div>
            ))}
          </div>
          {/* Disclaimer */}
          <div style={{ fontSize:7, color:"#4b5563", lineHeight:1.5, marginBottom:8 }}>
            Jeevora does not diagnose, recommend treatment, or replace medical advice. This report is a patient context tool only.
          </div>
          {/* Download CTA */}
          <div style={{ background:G, borderRadius:20, padding:"9px", textAlign:"center", fontSize:10, fontWeight:700, color:"#fff" }}>Download PDF for GP</div>
        </div>
      </div>
      <HomeIndicator/>
    </div>
  );
}

function ScreenAppointmentPrep() {
  const questions = [
    "Ask about migraine prevention options",
    "Review Magnesium — still needed?",
    "Discuss sleep quality concerns",
  ];
  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100%", background:"#181818", color:"#fff", fontFamily:"Lato,sans-serif" }}>
      <StatusBar/>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"5px 10px 0", flexShrink:0 }}>
        <span style={{ fontSize:12, fontWeight:700 }}>Appointment prep</span>
        <span style={{ fontSize:11 }}>📋</span>
      </div>
      <div style={{ margin:"5px 10px 0", background:"#242424", borderRadius:8, padding:"6px 9px", display:"flex", alignItems:"center", gap:7, flexShrink:0 }}>
        <span style={{ fontSize:11 }}>🗓</span>
        <div>
          <div style={{ fontSize:9, fontWeight:700 }}>Dr. Sarah Chen</div>
          <div style={{ fontSize:8, color:"#9ca3af" }}>Tue 27 May · 10:00 am</div>
        </div>
      </div>
      <div style={{ flex:1, padding:"8px 10px 0", display:"flex", flexDirection:"column", gap:8, overflow:"hidden" }}>
        <div>
          <div style={{ fontSize:9, fontWeight:700, marginBottom:6 }}>My questions (3)</div>
          {questions.map((q,i) => (
            <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:7, marginBottom:i<2?7:0 }}>
              <div style={{ width:14, height:14, borderRadius:3, border:"1.5px solid #444", flexShrink:0, marginTop:1 }}/>
              <span style={{ fontSize:9, color:"#e5e7eb", lineHeight:1.4 }}>{q}</span>
            </div>
          ))}
        </div>
        <div style={{ height:1, background:"#252525" }}/>
        <div>
          <div style={{ fontSize:9, fontWeight:700, marginBottom:6 }}>Key symptoms to mention</div>
          {[{icon:"⚡",text:"Migraines increased this month"},{icon:"😴",text:"Sleep avg below 7h — 3 weeks"}].map((s,i) => (
            <div key={i} style={{ display:"flex", alignItems:"center", gap:7, marginBottom:i<1?5:0, background:"#242424", borderRadius:7, padding:"5px 8px" }}>
              <span style={{ fontSize:11 }}>{s.icon}</span>
              <span style={{ fontSize:9, color:"#e5e7eb", lineHeight:1.3 }}>{s.text}</span>
            </div>
          ))}
        </div>
        <div style={{ background:"rgba(29,158,117,.08)", border:"1px solid rgba(29,158,117,.2)", borderRadius:8, padding:"7px 9px", display:"flex", alignItems:"center", gap:7 }}>
          <span style={{ fontSize:11, color:G }}>✓</span>
          <div>
            <div style={{ fontSize:9, fontWeight:700, color:G }}>Report ready to share</div>
            <div style={{ fontSize:8, color:"#6ee7b7", lineHeight:1.3 }}>47 logs compiled for Dr. Chen</div>
          </div>
        </div>
      </div>
      <div style={{ display:"flex", justifyContent:"space-around", alignItems:"center", padding:"5px 0 2px", borderTop:"1px solid #252525", flexShrink:0 }}>
        {[{l:"Home"},{l:"Track"},{l:"Insights"},{l:"Report",a:true},{l:"Profile"}].map((n,i) => (
          <div key={i}><div style={{ fontSize:7, color:n.a?G:"#6b7280", fontWeight:n.a?700:400 }}>{n.l}</div></div>
        ))}
      </div>
      <HomeIndicator/>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SUBSECTION 5 SCREENS
═══════════════════════════════════════════ */
function ScreenFoodLog() {
  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100%", background:"#181818", color:"#fff", fontFamily:"Lato,sans-serif" }}>
      <StatusBar/>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"5px 10px 0", flexShrink:0 }}>
        <div style={{ display:"flex", alignItems:"center", gap:5 }}>
          <span style={{ fontSize:14, color:"#9ca3af", lineHeight:1 }}>←</span>
          <span style={{ fontSize:12, fontWeight:700 }}>Food log</span>
        </div>
        <span style={{ fontSize:8, border:"1px solid #555", color:"#9ca3af", borderRadius:8, padding:"2px 8px" }}>Free</span>
      </div>
      {/* Tabs */}
      <div style={{ display:"flex", margin:"6px 10px 0", background:"#242424", borderRadius:10, padding:"3px", flexShrink:0 }}>
        {["Breakfast","Lunch","Dinner"].map((t,i) => (
          <div key={t} style={{ flex:1, textAlign:"center", fontSize:9, fontWeight:i===1?700:400, color:i===1?G:"#9ca3af", background:i===1?"#181818":"transparent", borderRadius:8, padding:"4px 0" }}>{t}</div>
        ))}
      </div>
      <div style={{ flex:1, padding:"7px 10px 0", display:"flex", flexDirection:"column", gap:5, overflow:"hidden" }}>
        <div style={{ fontSize:8, color:"#9ca3af" }}>Quick pick</div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:5 }}>
          {[["🍚","Rice"],["🍗","Chicken"],["🥗","Salad"],["🫓","Roti"]].map(([icon,name]) => (
            <div key={name} style={{ background:"#242424", borderRadius:8, padding:"6px 8px", display:"flex", alignItems:"center", gap:6 }}>
              <span style={{ fontSize:12 }}>{icon}</span>
              <span style={{ fontSize:9, fontWeight:600 }}>{name}</span>
            </div>
          ))}
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:6 }}>
          <div style={{ flex:1, height:1, background:"#2e2e2e" }}/>
          <span style={{ fontSize:8, color:"#6b7280" }}>or add manually</span>
          <div style={{ flex:1, height:1, background:"#2e2e2e" }}/>
        </div>
        <div style={{ background:"#242424", borderRadius:8, padding:"7px 10px", fontSize:9, color:"#6b7280" }}>Food name...</div>
        <div style={{ display:"flex", gap:5 }}>
          <div style={{ flex:1, background:"#242424", borderRadius:8, padding:"7px 10px", fontSize:9, fontWeight:700 }}>1</div>
          <div style={{ width:36, background:"#242424", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", fontSize:10, color:"#9ca3af" }}>▾</div>
        </div>
        <div style={{ background:"rgba(29,158,117,.08)", border:"1px solid rgba(29,158,117,.2)", borderRadius:8, padding:"7px 10px", display:"flex", justifyContent:"space-between" }}>
          <span style={{ fontSize:9, color:G }}>🔥 Estimated calories</span>
          <span style={{ fontSize:9, color:"#9ca3af" }}>— kcal</span>
        </div>
        <div style={{ background:"#2a2a2a", border:"1px solid #3a3a3a", borderRadius:10, padding:"8px", textAlign:"center", fontSize:10, fontWeight:700, color:"#e5e7eb" }}>+ Add to log</div>
        <div style={{ fontSize:8, color:"#9ca3af" }}>Today's lunch</div>
        {[["Brown rice","1 cup","216"],["Grilled chicken","3.5 oz","165"]].map(([name,portion,kcal],i) => (
          <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", paddingBottom:i===0?5:0, borderBottom:i===0?"1px solid #252525":"none" }}>
            <div>
              <div style={{ fontSize:9, fontWeight:600 }}>{name}</div>
              <div style={{ fontSize:8, color:"#9ca3af" }}>{portion}</div>
            </div>
            <span style={{ fontSize:9, color:G, fontWeight:700 }}>{kcal} kcal</span>
          </div>
        ))}
        <div>
          <div style={{ display:"flex", justifyContent:"space-between", fontSize:8, marginBottom:4 }}>
            <span style={{ color:"#9ca3af" }}>Daily calories</span>
            <span style={{ fontWeight:700 }}>381 / 2000 kcal</span>
          </div>
          <div style={{ height:5, background:"#2e2e2e", borderRadius:3 }}>
            <div style={{ width:"19%", height:"100%", background:G, borderRadius:3 }}/>
          </div>
        </div>
      </div>
      <HomeIndicator/>
    </div>
  );
}

function ScreenPeriodLog() {
  const PK = "#e879aa";
  const pkBg = "rgba(232,121,170,.15)";
  const pkBd = "rgba(232,121,170,.4)";
  const chip = (label, active) => (
    <span key={label} style={{ fontSize:8, padding:"3px 8px", borderRadius:12, border:`1px solid ${active?pkBd:"#3a3a3a"}`, color:active?PK:"#9ca3af", background:active?pkBg:"transparent" }}>{label}</span>
  );
  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100%", background:"#181818", color:"#fff", fontFamily:"Lato,sans-serif" }}>
      <StatusBar/>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"5px 10px 0", flexShrink:0 }}>
        <div style={{ display:"flex", alignItems:"center", gap:5 }}>
          <span style={{ fontSize:14, color:"#9ca3af", lineHeight:1 }}>←</span>
          <span style={{ fontSize:12, fontWeight:700 }}>Log · 22 May</span>
        </div>
        <span style={{ fontSize:8, border:"1px solid #555", color:"#9ca3af", borderRadius:8, padding:"2px 8px" }}>Free</span>
      </div>
      <div style={{ flex:1, padding:"7px 10px 0", display:"flex", flexDirection:"column", gap:5, overflow:"hidden" }}>
        {/* Period today */}
        <div>
          <div style={{ fontSize:9, color:"#9ca3af", marginBottom:4 }}>Period today?</div>
          <div style={{ display:"flex", gap:5 }}>
            {[["Yes",true],["No",false],["Spotting",false]].map(([l,a]) => (
              <div key={l} style={{ flex:1, textAlign:"center", fontSize:9, fontWeight:a?700:400, padding:"5px 0", borderRadius:8, background:a?pkBg:"#242424", border:`1px solid ${a?pkBd:"#333"}`, color:a?PK:"#9ca3af" }}>{l}</div>
            ))}
          </div>
        </div>
        {/* Flow */}
        <div>
          <div style={{ fontSize:9, color:"#9ca3af", marginBottom:4 }}>Flow</div>
          <div style={{ display:"flex", gap:4 }}>
            {[["Light",false],["Medium",true],["Heavy",false],["Very heavy",false]].map(([l,a]) => (
              <div key={l} style={{ flex:1, textAlign:"center", fontSize:8, fontWeight:a?700:400, padding:"4px 2px", borderRadius:7, background:a?pkBg:"#242424", border:`1px solid ${a?pkBd:"#333"}`, color:a?PK:"#9ca3af" }}>{l}</div>
            ))}
          </div>
        </div>
        {/* Symptoms */}
        <div>
          <div style={{ fontSize:9, color:"#9ca3af", marginBottom:4 }}>Symptoms</div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:4 }}>
            {[["Cramps",true],["Bloating",false],["Headache",true],["Back pain",false],["Fatigue",false],["Nausea",false],["Breast tenderness",false],["Mood changes",false]].map(([l,a])=>chip(l,a))}
          </div>
        </div>
        {/* Mood */}
        <div>
          <div style={{ fontSize:9, color:"#9ca3af", marginBottom:4 }}>Mood</div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:4 }}>
            {[["Low",true],["Irritable",false],["Anxious",false],["Calm",false],["Happy",false]].map(([l,a])=>chip(l,a))}
          </div>
        </div>
        {/* Notes */}
        <div>
          <div style={{ fontSize:9, color:"#9ca3af", marginBottom:4 }}>Notes (optional)</div>
          <div style={{ background:"#242424", borderRadius:8, padding:"7px 9px", height:38, fontSize:9, color:"#6b7280" }}>Anything else to add...</div>
        </div>
        {/* Locked */}
        <div style={{ background:"rgba(99,102,241,.08)", border:"1px solid rgba(99,102,241,.2)", borderRadius:9, padding:"7px 9px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div style={{ display:"flex", alignItems:"center", gap:6 }}>
            <span style={{ fontSize:12 }}>🔒</span>
            <span style={{ fontSize:8, color:"#c7d2fe", lineHeight:1.35 }}>Voice log symptoms &amp; link to your GP report</span>
          </div>
          <span style={{ fontSize:8, color:"#818cf8", fontWeight:700, flexShrink:0, marginLeft:5 }}>Upgrade Pro</span>
        </div>
        {/* Save */}
        <div style={{ background:"#e5e7eb", borderRadius:12, padding:"9px", textAlign:"center", fontSize:11, fontWeight:700, color:"#181818" }}>Save log</div>
      </div>
      <HomeIndicator/>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Reusable phone chrome — module scope
═══════════════════════════════════════════ */
function Dots({ count, active, onDotClick }) {
  return (
    <div style={{ display:"flex", justifyContent:"center", gap:7, marginBottom:16 }}>
      {Array.from({length:count},(_,i) => (
        <div
          key={i}
          onClick={() => onDotClick(i)}
          style={{
            width:i===active?18:7,
            height:7,
            borderRadius:4,
            background:i===active?G:"#cbd5e1",
            transition:"all 0.35s ease",
            cursor: typeof window !== "undefined" && window.innerWidth <= 767 ? "pointer" : "default",
            WebkitTapHighlightColor:"transparent",
          }}
        />
      ))}
    </div>
  );
}

function PhoneFrame({ screens, active }) {
  return (
    <div style={{ width:260, height:540, background:"#1a1a1a", borderRadius:38, padding:"12px 10px 10px", margin:"0 auto", border:"2px solid #2a2a2a", boxSizing:"border-box" }}>
      <div style={{ width:"100%", height:"100%", borderRadius:28, overflow:"hidden", position:"relative", background:"#181818" }}>
        {screens.map((s,i) => (
          <div key={i} style={{ position:"absolute", top:0, left:0, right:0, bottom:0, opacity:i===active?1:0, transition:"opacity 0.4s ease", pointerEvents:i===active?"auto":"none" }}>
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Feature data
═══════════════════════════════════════════ */
const SCREENS_1 = [<ScreenHome/>, <ScreenSymptom/>, <ScreenVoice/>];
const SCREENS_2 = [<ScreenMeds/>, <ScreenWearable/>];

const FEATURES_1 = [
  { label:"Home dashboard",  heading:"Your unified daily view",     desc:"Wearable stats, today's entries, and a one-tap log button — all on one screen. Sleep quality and heart rate surface automatically from your connected device every morning." },
  { label:"Symptom logging", heading:"SOCRATES, step by step",      desc:"Jeevora guides you through the clinical SOCRATES framework — onset, character, severity, and more. Chip selectors keep it quick; the voice fallback means you never have to type." },
  { label:"Voice logging",   heading:"Just speak, we'll listen",    desc:"Tap record, describe your symptom naturally, and watch the fields populate in real time. Jeevora parses your words so nothing gets lost on the way to your GP report." },
];

const FEATURES_2 = [
  { label:"Medication tracking", heading:"Morning done. Evening pending.",         desc:"See your full medication schedule at a glance. Green ticks confirm what's taken; amber alerts flag anything missed. Forgotten doses are automatically noted in your next GP report." },
  { label:"Wearable linkage",    heading:"Your wrist knows things your GP doesn't — yet.",   desc:"Sleep, heart rate, HRV, steps — pulled automatically from Apple Watch, Fitbit, Garmin, and more. Jeevora reads the patterns hiding in your data and surfaces them to your doctor before they become problems." },
];

const SCREENS_3 = [<ScreenFood/>, <ScreenWorkout/>];
const SCREENS_4 = [<ScreenGPReport/>, <ScreenAppointmentPrep/>];

const FEATURES_3 = [
  { label:"Nutrition tracking", heading:"Log meals in seconds",    desc:"Tap to add what you ate — breakfast, lunch, dinner, snacks. Macros and calorie totals build automatically, and unusual dietary patterns surface in your GP report without you having to think about it." },
  { label:"Exercise logging",   heading:"Move more, know more",    desc:"Log workouts manually or let your wearable sync them automatically. Jeevora connects exercise patterns to symptoms — so your GP sees exactly how your activity affects your health." },
];

const FEATURES_4 = [
  { label:"GP-ready reports",    heading:"Your health story, told clearly",        desc:"Jeevora compiles every log into a structured, non-diagnostic summary — symptoms, medications, lifestyle patterns, missed doses — formatted for your GP to read in under two minutes." },
  { label:"Appointment prep",    heading:"Never forget what is on your mind",          desc:"Note your questions and key concerns before you walk in. Jeevora surfaces the most important things to raise so nothing gets lost in a 10-minute appointment." },
];

const SCREENS_5 = [<ScreenFoodLog/>, <ScreenPeriodLog/>];

const FEATURES_5 = [
  { label:"Cycle nutrition",      heading:"Log what you eat, when it matters",         desc:"Track meals through your cycle — from iron-rich foods on heavier days to lighter options that ease symptoms. Dietary patterns feed directly into your GP report without extra effort." },
  { label:"Menstrual tracking",   heading:"Your cycle, your data, your GP's context",  desc:"Log period days, flow, physical symptoms, and mood with a single tap. Everything from cramping to headaches is captured and ready for your appointment — no more trying to recall dates in the room." },
];

/* ═══════════════════════════════════════════
   Reusable section building blocks — module scope
═══════════════════════════════════════════ */
function FeatureBlocks({ features, rowClass }) {
  return (
    <>
      {features.map((f,i) => (
        <div
          key={i}
          data-idx={String(i)}
          data-row={rowClass}
          className="jv-feat-block"
          style={{ minHeight:"72vh", display:"flex", flexDirection:"column", justifyContent:"center" }}
        >
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
            <div style={{ width:3, height:36, borderRadius:2, background:G }}/>
            <span style={{ fontSize:11, fontWeight:700, color:G, letterSpacing:"0.1em", textTransform:"uppercase" }}>{f.label}</span>
          </div>
          <h3 style={{ fontSize:"clamp(19px,2.4vw,27px)", fontWeight:700, color:"#0F172A", marginBottom:14, lineHeight:1.25 }}>{f.heading}</h3>
          <p style={{ fontSize:15, color:"#64748b", lineHeight:1.75, marginBottom:28, maxWidth:420 }}>{f.desc}</p>
          {i < features.length - 1 && (
            <div style={{ display:"flex", alignItems:"center", gap:6, color:"#94a3b8", fontSize:13 }}>
              <span>Scroll to continue</span>
              <span className="jv-bounce">↓</span>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

function StickyPhone({ screens, active, onSwipe }) {
  const touchStartX = useRef(null);
  const isMobile = () => typeof window !== "undefined" && window.innerWidth <= 767;

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(deltaX) > 40) {
      if (deltaX > 0) {
        onSwipe(Math.min(active + 1, screens.length - 1));
      } else {
        onSwipe(Math.max(active - 1, 0));
      }
    }
    touchStartX.current = null;
  };

  const handleDotClick = (i) => {
    if (isMobile()) onSwipe(i);
  };

  return (
    <div className="jv-phone-col" style={{ width:290, flexShrink:0 }}>
      <div
        className="jv-phone-sticky"
        style={{ position:"sticky", top:"calc(50vh - 295px)" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Dots count={screens.length} active={active} onDotClick={handleDotClick}/>
        <PhoneFrame screens={screens} active={active}/>
        <div style={{ textAlign:"center", marginTop:14, fontSize:12, color:"#94a3b8" }}>{active + 1} of {screens.length} features</div>
        <div className="jv-swipe-hint">← swipe to explore →</div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Main component
═══════════════════════════════════════════ */
export default function FreeDemoSection() {
  const [active1, setActive1] = useState(0);
  const [active2, setActive2] = useState(0);
  const [active3, setActive3] = useState(0);
  const [active4, setActive4] = useState(0);
  const [active5, setActive5] = useState(0);

  /* Inject CSS once */
  useEffect(() => {
    const id = "jv-demo-styles";
    /* Always overwrite — never bail early — so changes take effect on hot reload */
    let el = document.getElementById(id);
    if (!el) { el = document.createElement("style"); el.id = id; document.head.appendChild(el); }
    el.textContent = `
      @keyframes jvBounce {
        0%,100% { transform:translateY(0); opacity:.5; }
        50%      { transform:translateY(5px); opacity:1; }
      }
      @keyframes jvGpScroll {
        0%, 10%  { transform:translateY(0); }
        100%     { transform:translateY(-420px); }
      }
      .jv-bounce { display:inline-block; animation:jvBounce 1.8s ease-in-out infinite; }
      .jv-gp-scroll {
        animation-name: jvGpScroll;
        animation-duration: 7s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
      }
      .jv-swipe-hint { display:none; }
      @media (max-width:767px) {
        .jv-s1-row  { flex-direction:column-reverse !important; }
        .jv-s2-row  { flex-direction:column !important; }
        .jv-s3-row  { flex-direction:column-reverse !important; }
        .jv-s4-row  { flex-direction:column !important; }
        .jv-s5-row  { flex-direction:column-reverse !important; }
        .jv-phone-col    { width:100% !important; margin-bottom:32px; }
        .jv-phone-sticky { position:relative !important; top:auto !important; touch-action:pan-y; }
        .jv-feat-block   { min-height:auto !important; padding:40px 0 !important; }
        .jv-swipe-hint   { display:block; text-align:center; font-size:11px; color:#94a3b8; margin-top:8px; letter-spacing:0.06em; }
      }
    `;
  }, []);

  /* Single observer for all subsections — runs once after mount */
  useEffect(() => {
    const OPT = { threshold: 0.5, rootMargin: "-15% 0px -15% 0px" };
    const setters = { "jv-s1-row": setActive1, "jv-s2-row": setActive2, "jv-s3-row": setActive3, "jv-s4-row": setActive4, "jv-s5-row": setActive5 };

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const setter = setters[e.target.dataset.row];
        if (setter) setter(Number(e.target.dataset.idx));
      });
    }, OPT);

    document.querySelectorAll(".jv-feat-block").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const sectionHeader = (label, heading, desc) => (
    <div style={{ textAlign:"center", marginBottom:60 }}>
      <span style={{ display:"inline-block", fontSize:11, fontWeight:700, letterSpacing:"0.12em", color:G, textTransform:"uppercase", marginBottom:10 }}>Free Demo</span>
      <h2 style={{ fontSize:"clamp(22px,3.5vw,34px)", fontWeight:700, color:"#0F172A", margin:"0 0 14px", lineHeight:1.2 }}>{heading}</h2>
      <p style={{ fontSize:16, color:"#64748b", maxWidth:480, margin:"0 auto", lineHeight:1.65 }}>{desc}</p>
    </div>
  );

  return (
    <>
      {/* ── Subsection 1: white bg · text LEFT · phone RIGHT ── */}
      <div style={{ background:"#fff", padding:"70px 0", borderTop:"1px solid #f1f5f9" }}>
        <div style={{ maxWidth:1140, margin:"0 auto", padding:"0 1.5rem" }}>
          {sectionHeader("1","Log your health, your way","From a quick voice note to a structured SOCRATES symptom log — Jeevora works the way you think.")}
          <div className="jv-s1-row" style={{ display:"flex", alignItems:"stretch", gap:48, justifyContent:"center" }}>
            <div style={{ flex:"1 1 0", maxWidth:520 }}>
              <FeatureBlocks features={FEATURES_1} rowClass="jv-s1-row"/>
            </div>
            <StickyPhone screens={SCREENS_1} active={active1} onSwipe={setActive1}/>
          </div>
        </div>
      </div>

      {/* ── Subsection 2: grey bg · phone LEFT · text RIGHT ── */}
      <div style={{ background:"#f7f7f7", padding:"70px 0", borderTop:"1px solid #ebebeb" }}>
        <div style={{ maxWidth:1140, margin:"0 auto", padding:"0 1.5rem" }}>
          {sectionHeader("2","Never miss a thing","Medications, wearable data, and missed-dose alerts — all tracked automatically so nothing slips before your appointment.")}
          <div className="jv-s2-row" style={{ display:"flex", alignItems:"stretch", gap:48, justifyContent:"center" }}>
            <StickyPhone screens={SCREENS_2} active={active2} onSwipe={setActive2}/>
            <div style={{ flex:"1 1 0", maxWidth:520 }}>
              <FeatureBlocks features={FEATURES_2} rowClass="jv-s2-row"/>
            </div>
          </div>
        </div>
      </div>

      {/* ── Subsection 3: white bg · text LEFT · phone RIGHT ── */}
      <div style={{ background:"#fff", padding:"70px 0", borderTop:"1px solid #f1f5f9" }}>
        <div style={{ maxWidth:1140, margin:"0 auto", padding:"0 1.5rem" }}>
          {sectionHeader("3","Track how you fuel and move","Meals, macros, and workouts logged in seconds. Jeevora connects your lifestyle to your symptoms so your GP sees the complete picture.")}
          <div className="jv-s3-row" style={{ display:"flex", alignItems:"stretch", gap:48, justifyContent:"center" }}>
            <div style={{ flex:"1 1 0", maxWidth:520 }}>
              <FeatureBlocks features={FEATURES_3} rowClass="jv-s3-row"/>
            </div>
            <StickyPhone screens={SCREENS_3} active={active3} onSwipe={setActive3}/>
          </div>
        </div>
      </div>

      {/* ── Subsection 4: grey bg · phone LEFT · text RIGHT ── */}
      <div style={{ background:"#f7f7f7", padding:"70px 0", borderTop:"1px solid #ebebeb" }}>
        <div style={{ maxWidth:1140, margin:"0 auto", padding:"0 1.5rem" }}>
          {sectionHeader("4","Walk into every appointment prepared","Your GP report is compiled and ready before you even think to ask. Every log, pattern, and question — waiting for you in one place.")}
          <div className="jv-s4-row" style={{ display:"flex", alignItems:"stretch", gap:48, justifyContent:"center" }}>
            <StickyPhone screens={SCREENS_4} active={active4} onSwipe={setActive4}/>
            <div style={{ flex:"1 1 0", maxWidth:520 }}>
              <FeatureBlocks features={FEATURES_4} rowClass="jv-s4-row"/>
            </div>
          </div>
        </div>
      </div>

      {/* ── Subsection 5: white bg · text LEFT · phone RIGHT ── */}
      <div style={{ background:"#fff", padding:"70px 0", borderTop:"1px solid #f1f5f9" }}>
        <div style={{ maxWidth:1140, margin:"0 auto", padding:"0 1.5rem" }}>
          {sectionHeader("5","Track your cycle, understand your body","Log meals, symptoms, flow, and mood through your cycle. Jeevora connects the patterns so your GP has the full picture before you even walk in.")}
          <div className="jv-s5-row" style={{ display:"flex", alignItems:"stretch", gap:48, justifyContent:"center" }}>
            <div style={{ flex:"1 1 0", maxWidth:520 }}>
              <FeatureBlocks features={FEATURES_5} rowClass="jv-s5-row"/>
            </div>
            <StickyPhone screens={SCREENS_5} active={active5} onSwipe={setActive5}/>
          </div>
        </div>
      </div>
    </>
  );
}
