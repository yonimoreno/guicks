/* ═══════════════════════════════════════════════════════
   guicks-i18n.js  — Lazy language loader for Guicks
   Language files live in ./lang/guicks-lang-XX.js
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

  load(cb){
    const code=this.lang();
    if(window.__GI_CACHE__[code]){
      this._t=window.__GI_CACHE__[code]; if(cb)cb(); return;
    }
    const s=document.createElement('script');
    s.src=this._base()+'lang/guicks-lang-'+code+'.js';
    s.onload=()=>{
      if(window.__GI_LANG__){
        window.__GI_CACHE__[code]=window.__GI_LANG__;
        this._t=window.__GI_LANG__;
        window.__GI_LANG__=null;
      }
      if(cb)cb();
    };
    s.onerror=()=>{
      if(code!=='en'){
        const fb=document.createElement('script');
        fb.src=this._base()+'lang/guicks-lang-en.js';
        fb.onload=()=>{ if(window.__GI_LANG__){this._t=window.__GI_LANG__;window.__GI_LANG__=null;} if(cb)cb(); };
        document.head.appendChild(fb);
      } else if(cb)cb();
    };
    document.head.appendChild(s);
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
