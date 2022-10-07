import{_ as T,o as a,a as o,b as r,d as v,F as C,f as y,w as h,t as f,g as n,h as I,A as s,i,P as _,j as p,l as m,k as b,S as N,C as V,D as j,m as q,n as R,p as M,q as L,s as z,v as G,x as H,r as u,u as J,e as K,y as O}from"./index.30657527.js";const x={setup(){J(),K();function l(){try{O.getAccount}catch(e){m.error(e),_.toast(e.message,"error")}}async function d(){try{await b.getAccountCards()}catch(e){m.log("[getting all cards]",e),_.error(e)}}return I(()=>{s.activeDeck={},l(),d()}),{cards:i(()=>s.collection),decks:i(()=>s.decks),activeDeck:i(()=>s.activeDeck),deckCards:i(()=>s.deckCards),cover:i(()=>{var e;return`url(${(e=s.activeDeck)==null?void 0:e.picture})`}),activeCards:i(()=>s.activeProfile),displayCards:i(()=>{let e=[...s.deckCards];for(let t=0;t<e.length;t++){const g=e[t];g.quantity=1;for(let k=t+1;k<e.length;k++){const D=e[k];g.cardId==D.cardId&&(g.quantity++,e.splice(k,1),k--)}}return e}),setEditable(){s.activeDeck={}},noActive(){s.activeDeck={}},async deleteDeck(){try{if(!await _.confirm("Remove Deck?"))return;const t=s.activeDeck.id;await p.deleteDeck(t),s.activeDeck={}}catch(e){m.error("[Deleting Deck]",e),_.toast(e.message,"error")}},async getAccountCards(){try{await b.getAccountCards()}catch(e){m.log("[getting all cards]",e),_.error(e)}},async getDecks(){try{const e=s.account.id;await p.getAccountDecks(e)}catch(e){m.error("[Getting Decks]",e),_.toast(e.message,"error")}}}},components:{SearchedCards:N,CollectionCard:V,DeckForm:j,Deck:q,DeckCard:R,DeckCardCanvas:M,CollectionPageNavbar:L,CollectionFilter:z}},w=()=>{G(l=>({"4123ad8e":l.cover}))},A=x.setup;x.setup=A?(l,d)=>(w(),A(l,d)):w;const Q=x,U={class:"row collectionPageBg collectionPageViewHeight"},W={class:"col-2 d-flex flex-column"},X={class:"col-8 px-0"},Y={class:"row align-items-center"},Z={class:"col-12 mx-auto"},$=H('<div class="row" data-v-aa59794a><div class="myCollectionsBanner mx-auto col-12 col-lg-10 mt-4" data-v-aa59794a><div class="row mx-auto" data-v-aa59794a><div class="col-12" data-v-aa59794a><h1 class="bannerFontSize text-center deckText" data-v-aa59794a>My Collection</h1></div></div></div></div>',1),ee={class:"row mb-5"},te={class:"col-12"},ce={class:"row justify-content-center"},ae={key:0,class:"d-none d-md-block col-md-2 myDecksSideBar px-0"},oe={class:"row mx-auto"},se={class:"row"},re={class:"deckText mb-0 col-12"},de={key:0,class:"col-12 deckText"},ne={key:2,class:"row mx-auto"},ie={class:"row fixed-bottom mx-auto justify-content-end px-0"},le={key:2,"data-bs-toggle":"modal","data-bs-target":"#deck-form",class:"deckText col-1 editButton"};function ke(l,d,e,t,g,k){const D=u("CollectionPageNavbar"),S=u("CollectionFilter"),E=u("CollectionCard"),P=u("DeckCardCanvas"),B=u("Deck"),F=u("DeckForm");return a(),o(C,null,[r("div",U,[r("div",W,[v(D)]),r("div",X,[r("div",Y,[r("div",Z,[$,r("div",ee,[r("div",te,[r("div",ce,[v(S)])]),(a(!0),o(C,null,y(t.cards,c=>(a(),o("div",{key:c.id,class:"col-4 col-md-2"},[v(E,{card:c},null,8,["card"])]))),128))])])])]),t.decks?(a(),o("div",ae,[r("div",oe,[t.activeDeck.id?(a(),o("div",{key:0,onClick:d[0]||(d[0]=h((...c)=>t.noActive&&t.noActive(...c),["prevent"])),class:"deckImg col-11 mx-auto mt-1 selectable"},[r("div",se,[r("h5",re,f(t.activeDeck.name),1),t.activeDeck.id?(a(),o("p",de,"Cards:"+f(" "+t.deckCards.length),1)):n("",!0)])])):n("",!0),t.activeDeck.id?(a(!0),o(C,{key:1},y(t.displayCards,c=>(a(),o("div",{key:c.id,class:"col-12 mx-auto position-relative"},[v(P,{card:c},null,8,["card"])]))),128)):n("",!0),t.decks.length&&!t.activeDeck.id?(a(),o("div",ne,[(a(!0),o(C,null,y(t.decks,c=>(a(),o("div",{key:c.id,class:"col-12 col-md-12 mx-auto my-2"},[v(B,{deck:c},null,8,["deck"])]))),128))])):n("",!0)])])):n("",!0),r("div",ie,[t.activeDeck.id?n("",!0):(a(),o("button",{key:0,"data-bs-toggle":"modal","data-bs-target":"#deck-form",class:"deckText col-2 createButton",onClick:d[1]||(d[1]=h((...c)=>t.setEditable&&t.setEditable(...c),["prevent"]))},"CREATE")),t.activeDeck.id?(a(),o("button",{key:1,class:"deckText square col-1 deleteButton",onClick:d[2]||(d[2]=h((...c)=>t.deleteDeck&&t.deleteDeck(...c),["prevent"]))},"DELETE ")):n("",!0),t.activeDeck.id?(a(),o("button",le,"EDIT")):n("",!0)])]),v(F)],64)}const _e=T(Q,[["render",ke],["__scopeId","data-v-aa59794a"]]);export{_e as default};
