import{J as D,A as n,_ as R,o as r,a as l,b as e,d as y,X as C,g as b,t as _,F as x,f as N,R as j,h as B,i as p,j as P,N as V,v as A,r as I,z as h,u as L,e as F,P as f,Q as G,H as T,I as q}from"./index.10909437.js";class E{constructor(o){this.id=o.id,this.email=o.email,this.name=o.name,this.picture=o.picture,this.coverImg=o.coverImg,this.bio=o.bio,this.location=o.location}}class H{async getProfileById(o){const a=await D.get(`api/profiles/${o}`);n.activeProfile=new E(a.data)}}const z=new H;const m={setup(){const s=j(0),o=L(),a=F();async function i(){try{await z.getProfileById(a.params.profileId)}catch(c){f.error("[Getting profile by Id]",c),o.push({name:"Home"})}}async function g(){try{await P.getProfileDecks(a.params.profileId),console.log(a.params.profileId)}catch(c){f.error("[getting profile decks]",c)}}async function v(){try{await G.getGuildProfile(a.params.profileId)}catch(c){f.error(c)}}return B(()=>{i(),g(),v()}),{route:a,account:p(()=>n.account),profile:p(()=>n.activeProfile),decks:p(()=>n.profileDecks),cover:p(()=>{var c;return`url(${((c=n.activeProfile)==null?void 0:c.coverImg)||"https://cdn.pixabay.com/photo/2017/07/16/17/33/background-2509983_1280.jpg"})`}),scrollLeft(){let c=document.querySelector(".deck-cards-container");s.value>100&&(s.value-=1e3),c.scrollTo({left:s.value,behavior:"smooth"})},scrollRight(){let c=document.querySelector(".deck-cards-container");s.value<=2e3&&(s.value+=1e3),c.scrollTo({left:s.value,behavior:"smooth"})},async deckDetails(c){var u;try{await P.setActiveDeck(c),o.push({name:"DeckDetails",params:{deckId:(u=n.activeDeck)==null?void 0:u.id}})}catch(t){console.log(t)}}}},components:{Navbar:V}},w=()=>{A(s=>({"1013f879":s.cover}))},S=m.setup;m.setup=S?(s,o)=>(w(),S(s,o)):w;const J=m,d=s=>(T("data-v-3343602a"),s=s(),q(),s),M={class:"fixed-top"},Q={class:"row cover-img"},X={class:"col-4 profile-details anchor-point"},K={key:0,title:"Edit Account",class:"edit-btn"},O=d(()=>e("i",{class:"mdi mdi-pen p-1"},null,-1)),U=["src"],W={class:"glass-card rounded p-3 my-3"},Y={class:"col-8 profile-decks"},Z={class:"row align-items-center"},$=d(()=>e("i",{class:"button-style mdi mdi-chevron-left"},null,-1)),ee=[$],te={class:"col-10 deck-container-bg rounded"},oe={class:"row deck-cards-container"},se={class:"px-3 pt-3"},ce=["src"],ie={key:1,src:"https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757712",class:"img-fluid",alt:"..."},re={class:"card-title text-center text-dark"},le={key:0,class:"card-img-top"},ae=d(()=>e("img",{src:"https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757712",class:"",alt:"..."},null,-1)),ne=[ae],de={class:"card-body text-dark fs-5"},_e={class:"d-flex justify-content-between"},ue={key:0,class:"text-center"},pe=h(" Rating:"),he=d(()=>e("br",null,null,-1)),fe={key:1,class:"text-center"},me=h(" Rating:"),ge=d(()=>e("br",null,null,-1)),ve=h("Not Rated "),ke=[me,ge,ve],ye=["onClick"],be=d(()=>e("i",{class:"button-style mdi mdi-chevron-right"},null,-1)),xe=[be];function Pe(s,o,a,i,g,v){const c=I("Navbar"),u=I("router-link");return r(),l(x,null,[e("header",M,[y(c)]),e("div",Q,[e("div",X,[i.profile.id==i.account.id?(r(),l("div",K,[y(u,{class:"bg-warning rounded-circle",to:{name:"Account"}},{default:C(()=>[O]),_:1})])):b("",!0),e("img",{class:"img-fluid profile-img",src:i.profile.picture,alt:""},null,8,U),e("div",W,[e("h3",null,_(i.profile.name),1),e("p",null,_(i.profile.email),1),e("p",null,_(i.profile.bio),1)])]),e("div",Y,[e("div",Z,[e("div",{class:"col-1 text-center",onClick:o[0]||(o[0]=(...t)=>i.scrollLeft&&i.scrollLeft(...t))},ee),e("div",te,[e("div",oe,[(r(!0),l(x,null,N(i.decks,t=>{var k;return r(),l("div",{key:t.id,class:"card hero-img col-3 px-4 mx-2"},[e("div",se,[t?(r(),l("img",{key:0,src:t==null?void 0:t.picture,class:"card-img-top img-max"},null,8,ce)):(r(),l("img",ie))]),e("h5",re,[e("b",null,_(t==null?void 0:t.name),1)]),t!=null&&t.picture?b("",!0):(r(),l("div",le,ne)),e("div",de,[e("span",_e,[t.avgRating?(r(),l("p",ue,[pe,he,h(_(((t==null?void 0:t.avgRating)/((k=t.rating)==null?void 0:k.length)).toFixed(1))+"/5 ",1)])):(r(),l("p",fe,ke)),e("button",{onClick:Ie=>i.deckDetails(t.id),class:"btn btn-outline-dark"}," Deck Details ",8,ye)])])])}),128))])]),e("div",{class:"col-1 text-center",onClick:o[1]||(o[1]=(...t)=>i.scrollRight&&i.scrollRight(...t))},xe)])])])],64)}const Se=R(J,[["render",Pe],["__scopeId","data-v-3343602a"]]);export{Se as default};