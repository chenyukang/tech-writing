import{d as p,z as m,o as i,b as f,e as r,f as _,h as v,c as g,k,aa as h,q as y,s as $,B as c}from"../modules/vue-D507KtQs.js";import{u,f as x}from"./context-k5F1BgeW.js";import"../index-DmeITFkk.js";import"../modules/shiki-YfOtFC9C.js";function l(e){return e.startsWith("/")?"/"+e.slice(1):e}function C(e,s=!1){const o=e&&["#","rgb","hsl"].some(a=>e.indexOf(a)===0),t={background:o?e:void 0,color:e&&!o?"white":void 0,backgroundImage:o?void 0:e?s?`linear-gradient(#0005, #0008), url(${l(e)})`:`url("${l(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const B={class:"my-auto w-full"},b=p({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){u();const s=e,o=m(()=>C(s.background,!0));return(t,a)=>(i(),f("div",{class:"slidev-layout cover text-center",style:v(o.value)},[r("div",B,[_(t.$slots,"default")])],4))}}),R={__name:"slides.md__slidev_1",setup(e){const{$slidev:s,$nav:o,$clicksContext:t,$clicks:a,$page:P,$renderContext:z,$frontmatter:d}=u();return t.setup(),(S,n)=>(i(),g(b,y($(c(x)(c(d),0))),{default:k(()=>n[0]||(n[0]=[r("h1",null,"Key Upgrades to the CKB Transaction Pool",-1),r("p",null,[r("a",{href:"mailto:yukang@cryptape.com",target:"_blank"},"yukang@cryptape.com"),h(" CKCon 2024.11")],-1)])),_:1},16))}};export{R as default};
