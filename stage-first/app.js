const panel=p=>`<a class="panel" href="#/project/${p.id}">${media(p.h,p.name)}<div class="cap"><h3>${p.name}</h3><span>${p.artist}, ${p.type}</span></div></a>`;
const sec=(t,x)=>`<h2>${t}</h2><p>${x}</p>`;
const R={
home:()=>`<section class="hero">${media(270,'Showreel','tall')}<div class="hc"><h1>Beauty in Motion</h1><p>Motion design for music and live entertainment</p></div><button id="pp" aria-pressed="false">Pause video</button></section><h2 class="lab">Featured projects</h2>${D.projects.slice(0,3).map(panel).join('')}<a class="cta" href="#/start">Let's create something</a>`,
work:id=>{const c=C(id),l=c?D.projects.filter(p=>p.cat===id):D.projects,i=D.cats.indexOf(c),n=D.cats.length;
 return c?`<section class="cathead">${media(c.id=='viz'?160:c.id=='tours'?270:30,'','mid')}<div class="hc"><h1>${c.name}</h1><p>${c.intro}</p></div></section>${l.map(panel).join('')}<div class="cats" style="justify-content:space-between;padding:48px 24px"><a href="#/work/${D.cats[(i+n-1)%n].id}">← ${D.cats[(i+n-1)%n].short}</a><a href="#/work/${D.cats[(i+1)%n].id}">${D.cats[(i+1)%n].short} →</a></div>`
 :`<div class="pg"><h1 style="padding:0 24px 24px;font-size:3rem">Work</h1><nav class="cats" aria-label="Categories">${D.cats.map(k=>`<a href="#/work/${k.id}">${k.short}</a>`).join('')}</nav>${l.map(panel).join('')}</div>`},
project:id=>{const p=P(id)||D.projects[0],[b,c,r]=D.copy[p.cat],n=D.projects[(D.projects.indexOf(p)+1)%D.projects.length];
 return `${media(p.h,p.name,'tall')}<div class="wrap"><h1 style="font-size:3rem">${p.name}</h1><p class="mut">${p.artist}, ${p.type}</p>${sec('The brief',b)}</div>${media(p.h+40,'','mid')}<div class="wrap">${sec('The concept',c)}</div>${media(p.h+80,'','mid')}<div class="wrap">${sec('The result',r)}</div><a class="cta" href="#/project/${n.id}">Next project: ${n.name}</a>`},
services:id=>{const s=S(id);if(s)return `${media(D.cats.indexOf(C(s.cat))*60+200,s.name,'mid')}<div class="wrap"><h1 style="font-size:3rem">${s.name}</h1><p>${s.desc}</p><p class="mut">${s.price} · ${s.time}</p><ul>${s.inc.map(i=>`<li>${i}</li>`).join('')}</ul></div><h2 class="lab">Featured projects</h2>${D.projects.filter(p=>p.cat===s.cat).map(panel).join('')}<a class="cta" href="#/start">Start a project</a>`;
 return `<div class="pg"><h1 style="padding:0 24px 24px;font-size:3rem">Services &amp; Pricing</h1>${D.services.map((s,i)=>`<section class="svc">${media(200+i*40,s.name)}<div class="sc"><h2>${s.name}</h2><p>${s.desc}</p><p class="mut">${s.price}</p><a href="#/services/${s.id}">See details</a></div></section>`).join('')}</div>`},
about:()=>`${media(250,'Team photo','tall')}<div class="wrap"><h1 style="font-size:3rem">About</h1><p>Beauty in Motion is a motion design studio. We make visual content for music and live entertainment, from tour visuals to lyric videos and visualizers.</p><div class="team">${D.team.map(t=>`<span>${t}</span>`).join('')}</div><h2 style="margin-top:64px">Our process</h2><ol class="tl">${D.steps.map((s,i)=>`<li class="st" style="--i:${i}">${s}</li>`).join('')}</ol></div>`,
start:()=>`<div class="wrap pg"><h1>Let's create something</h1><form><input aria-label="Name" placeholder="Name" required><input aria-label="Email" type="email" placeholder="Email" required><textarea aria-label="Project details" rows="6" placeholder="Project details"></textarea><button class="go">Send request</button></form><p class="mut">hello@beautyinmotion.example<br>Instagram · YouTube · Vimeo</p></div>`,
thanks:()=>`<section class="full">${media(280,'','tall')}<div><h1>Thank you</h1><p>We got your request and will reply soon.</p><div class="btns"><a href="#/work">Back to work</a><a href="#/services">Services</a></div></div></section>`};
start((pg,id)=>(R[pg]||R.home)(id));
const m=$('#menu'),mb=$('#mb');
const tog=o=>{m.hidden=!o;mb.setAttribute('aria-expanded',o);(o?$('#mc'):mb).focus()};
mb.onclick=()=>tog(true);$('#mc').onclick=()=>tog(false);
m.onclick=e=>{if(e.target.closest('a')){m.hidden=true;mb.setAttribute('aria-expanded',false)}};
addEventListener('keydown',e=>e.key==='Escape'&&!m.hidden&&tog(false));
addEventListener('hashchange',()=>document.body.classList.remove('paused'));
document.addEventListener('click',e=>{const b=e.target.closest('#pp');if(!b)return;const p=document.body.classList.toggle('paused');b.textContent=p?'Play video':'Pause video';b.setAttribute('aria-pressed',p)});
document.addEventListener('submit',e=>{e.preventDefault();location.hash='#/thanks'});
