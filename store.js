// Camada de dados da loja. Hoje guarda no navegador (localStorage); na versão publicada
// este arquivo é trocado pelo Supabase, sem mexer na loja nem no painel.
(function(){
  const KEY='sep_produtos_v1';
  const VZ='https://cdn.vendizap.com/';
  const isUrl=s=>/^(data:|https?:)/.test(s);
  window.Store={
    load(){
      try{const s=localStorage.getItem(KEY); if(s) return JSON.parse(s)}catch(e){}
      return JSON.parse(JSON.stringify(window.SEED_PRODUCTS));
    },
    save(list){
      try{localStorage.setItem(KEY,JSON.stringify(list));return true}
      catch(e){return false}
    },
    reset(){try{localStorage.removeItem(KEY)}catch(e){}},
    key:KEY,
    thumb:h=>h?(isUrl(h)?h:VZ+'vendizap-produtos-thumbs/'+h):'',
    full:h=>h?(isUrl(h)?h:VZ+'vendizap-produtos/'+h):''
  };
})();
