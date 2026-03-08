/* ═══════════════════════════════════════════════════════
   guicks-i18n.js  — Lazy language loader for Guicks
   Language files live in ./lang/APPSLUG/XX.js (merged core + app keys)
   Each file sets window.__GI_LANG__ = { ... }
═══════════════════════════════════════════════════════ */
const LANG_KEY = 'guicks_lang_v1';
const RTL_LANGS = ['he','ar'];

const LANG_META = {
  en:{name:'English',    flag:'🇬🇧'},
  es:{name:'Español',    flag:'🇪🇸'},
  fr:{name:'Français',   flag:'🇫🇷'},
  de:{name:'Deutsch',    flag:'🇩🇪'},
  it:{name:'Italiano',   flag:'🇮🇹'},
  pt:{name:'Português',  flag:'🇵🇹'},
  nl:{name:'Nederlands', flag:'🇳🇱'},
  pl:{name:'Polski',     flag:'🇵🇱'},
  ru:{name:'Русский',    flag:'🇷🇺'},
  uk:{name:'Українська', flag:'🇺🇦'},
  sv:{name:'Svenska',    flag:'🇸🇪'},
  da:{name:'Dansk',      flag:'🇩🇰'},
  fi:{name:'Suomi',      flag:'🇫🇮'},
  cs:{name:'Čeština',    flag:'🇨🇿'},
  sk:{name:'Slovenčina', flag:'🇸🇰'},
  hu:{name:'Magyar',     flag:'🇭🇺'},
  ro:{name:'Română',     flag:'🇷🇴'},
  bg:{name:'Български',  flag:'🇧🇬'},
  hr:{name:'Hrvatski',   flag:'🇭🇷'},
  sl:{name:'Slovenščina',flag:'🇸🇮'},
  el:{name:'Ελληνικά',   flag:'🇬🇷'},
  et:{name:'Eesti',      flag:'🇪🇪'},
  lv:{name:'Latviešu',   flag:'🇱🇻'},
  lt:{name:'Lietuvių',   flag:'🇱🇹'},
  ga:{name:'Gaeilge',    flag:'🇮🇪'},
  mt:{name:'Malti',      flag:'🇲🇹'},
  he:{name:'עברית',      flag:'🇮🇱',rtl:true},
  ar:{name:'العربية',    flag:'🇸🇦',rtl:true},
  zh:{name:'中文',        flag:'🇨🇳'},
  ja:{name:'日本語',      flag:'🇯🇵'},
  ko:{name:'한국어',      flag:'🇰🇷'},
};

window.__GI_CACHE__ = window.__GI_CACHE__ || {};

window.GI = {
  _t: null,

  lang(){ return localStorage.getItem(LANG_KEY)||'en'; },
  isRtl(){ return RTL_LANGS.includes(this.lang()); },
  set(code){ localStorage.setItem(LANG_KEY,code); location.reload(); },

  get(key,vars){
    const parts=key.split('.');
    let val=this._t;
    for(const p of parts) val=val?.[p];
    if(!val||typeof val!=='string') val=key;
    if(vars) Object.entries(vars).forEach(([k,v])=>{ val=val.replace('{{'+k+'}}',v); });
    return val;
  },

  getObj(key){ return this._t?.[key]||null; },

  apply(){
    if(!this._t) return;
    this._applyDir();
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const v=this.get(el.getAttribute('data-i18n'));
      if(v&&v!==el.getAttribute('data-i18n')) el.textContent=v;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
      const v=this.get(el.getAttribute('data-i18n-ph'));
      if(v&&v!==el.getAttribute('data-i18n-ph')) el.placeholder=v;
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el=>{
      const v=this.get(el.getAttribute('data-i18n-title'));
      if(v&&v!==el.getAttribute('data-i18n-title')) el.title=v;
    });
  },

  _applyDir(){
    const rtl=this.isRtl();
    document.documentElement.setAttribute('dir',rtl?'rtl':'ltr');
    document.documentElement.setAttribute('lang',this.lang());
  },

  _base(){
    const s=document.querySelector('script[src*="guicks-i18n"]');
    return s?s.src.replace('guicks-i18n.js',''):'./';
  },

  // Detect app slug from page URL: "guicks-clock.html" → "clock", "index.html" → "home"
  _appSlug(){
    if(/index\.html$|\/\s*$/.test(location.pathname)) return 'home';
    const m=location.pathname.match(/guicks-([a-z]+)\.html/);
    return m?m[1]:null;
  },

  // Load a script, returns a Promise<boolean>
  _loadScript(src){
    return new Promise(resolve=>{
      const s=document.createElement('script');
      s.src=src;
      s.onload=()=>resolve(true);
      s.onerror=()=>resolve(false);
      document.head.appendChild(s);
    });
  },

  // Pull window.__GI_CHUNK__ into target object
  _flush(obj){
    if(window.__GI_CHUNK__){ Object.assign(obj,window.__GI_CHUNK__); window.__GI_CHUNK__=null; }
  },

  async load(cb){
    const code=this.lang();
    const base=this._base();
    const slug=this._appSlug();
    const cacheKey=code+(slug?':'+slug:'');

    // Return from cache if available
    if(window.__GI_CACHE__[cacheKey]){
      this._t=window.__GI_CACHE__[cacheKey]; if(cb)cb(); return;
    }

    const merged={};

    // ── Per-app merged file: lang/slug/XX.js ──────────────────────
    console.log('[GI] load slug='+slug+' code='+code+' base='+base);
    if(slug){
      const url=base+'lang/'+slug+'/'+code+'.js';
      console.log('[GI] loading '+url);
      const appOk=await this._loadScript(url);
      console.log('[GI] appOk='+appOk+' chunk='+(!!window.__GI_CHUNK__));
      if(appOk){ this._flush(merged); window.__GI_CACHE__[cacheKey]=merged; this._t=merged; if(cb)cb(); return; }
      // Fallback to English if requested language file missing
      if(code!=='en'){
        const enOk=await this._loadScript(base+'lang/'+slug+'/en.js');
        if(enOk){ this._flush(merged); window.__GI_CACHE__[cacheKey]=merged; this._t=merged; if(cb)cb(); return; }
      }
    }
    if(cb)cb();
  },

  init(extraFn){
    this.load(()=>{
      this.apply();
      if(typeof extraFn==='function') extraFn(this._t||{});
    });
  },

  meta:LANG_META, rtlLangs:RTL_LANGS,
};

/* RTL layout styles */
(()=>{
  const s=document.createElement('style');
  s.textContent=`
[dir=rtl] .back-btn,[dir=rtl] .editor-back-btn{flex-direction:row-reverse}
[dir=rtl] .back-btn svg,[dir=rtl] .editor-back-btn svg{transform:scaleX(-1)}
[dir=rtl] .settings-row,[dir=rtl] .topnav,[dir=rtl] .app-header,[dir=rtl] .summary-bar,[dir=rtl] .input-wrap,[dir=rtl] .item-row{flex-direction:row-reverse}
[dir=rtl] .filter-scroll{direction:rtl}
[dir=rtl] .note-card,[dir=rtl] .item-info,[dir=rtl] .app-header-text{text-align:right}
[dir=rtl] .item-input,[dir=rtl] .search-input,[dir=rtl] .form-input,[dir=rtl] .editor-title,[dir=rtl] .editor-body,[dir=rtl] textarea,[dir=rtl] input{text-align:right;direction:rtl}
[dir=rtl] .settings-row-chevron{transform:scaleX(-1)}
[dir=rtl] .tag-picker-row{direction:rtl}
  `;
  document.head.appendChild(s);
})();
