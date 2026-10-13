const D={
cats:[
{id:'tours',name:'Tours & Live Shows',short:'Tours & Live',intro:'Stage visuals and LED content built to move with the show.'},
{id:'lyrics',name:'Lyric Videos & Promos',short:'Lyrics & Promos',intro:'Type-led videos and promos for releases and tours.'},
{id:'viz',name:'Visualizers & Social',short:'Visualizers',intro:'Looping visuals and canvas packs for streaming and social.'}],
copy:{
tours:['The artist needed a visual world for a full tour, from the opening seconds to the final encore.','We built a set of scenes timed to the setlist, designed for large LED walls.','The visuals ran every night of the tour and gave each show a consistent look.'],
lyrics:['The release needed a video that put the words first and worked on small screens.','We paired hand-built typography with slow, textured motion to match the mood of the track.','The video launched alongside the single and became the main asset for the campaign.'],
viz:['The artist needed short looping visuals for streaming platforms and social posts.','We designed one visual language, then adapted it to each track and format.','The loops shipped in every required size and kept the release looking cohesive.']},
projects:[
{id:'nova',cat:'tours',name:'Nova Reign: Afterglow Tour',artist:'Nova Reign',type:'Tour visuals',h:270,svc:'live'},
{id:'solstice',cat:'tours',name:'Solstice Festival Stage Idents',artist:'Solstice Festival',type:'Stage idents',h:200,svc:'live'},
{id:'hollow',cat:'lyrics',name:'The Hollow Pines Lyric Video',artist:'The Hollow Pines',type:'Lyric video',h:30,svc:'lyric'},
{id:'mira',cat:'lyrics',name:'Mira Vale Tour Promo',artist:'Mira Vale',type:'Tour promo',h:330,svc:'promo'},
{id:'kairo',cat:'viz',name:'Kairo Album Visualizers',artist:'Kairo',type:'Visualizers',h:160,svc:'viz'},
{id:'neon',cat:'viz',name:'Neon Parade Canvas Pack',artist:'Neon Parade',type:'Canvas loops',h:300,svc:'viz'}],
services:[
{id:'live',name:'Live Show & LED Content',price:'Custom quote',time:'4–8 weeks',cat:'tours',desc:'Full visual content for tours, festivals and one-off shows.',inc:['Concept and storyboards','LED-ready content files','Show-file support']},
{id:'lyric',name:'Lyric Videos',price:'from $1,500',time:'2–3 weeks',cat:'lyrics',desc:'Type-led videos that carry a song and its words.',inc:['Custom typography','Two revision rounds','Delivery in all formats']},
{id:'promo',name:'Tour Promo Packs',price:'from $2,000',time:'2–3 weeks',cat:'lyrics',desc:'Announcement and ticketing assets for a tour.',inc:['Hero promo video','Social cut-downs','Story and feed sizes']},
{id:'viz',name:'Visualizers & Canvas Loops',price:'from $800',time:'1–2 weeks',cat:'viz',desc:'Short loops for streaming platforms and social.',inc:['Up to 3 loops','Square and vertical sizes','Looping source files']}],
faq:[['How long does a project take?','Most projects take 1–8 weeks depending on scope. Your quote includes a timeline.'],['What do I need to send?','Your track or show details, references, and any logos or brand assets.'],['How many revisions are included?','Two rounds of revisions are included in every package.']],
team:['Matvii Revych','Shahrez Fateh','Dmytro Poliak'],
steps:['Brief','Concept','Production','Delivery']};
const $=(s,r=document)=>r.querySelector(s);
const P=id=>D.projects.find(p=>p.id===id),C=id=>D.cats.find(c=>c.id===id),S=id=>D.services.find(s=>s.id===id);
const media=(h,label='',cls='')=>`<div class="media ${cls}" style="--h:${h}" role="img" aria-label="${label||'Video'} (placeholder)"></div>`;
function start(render){
 const go=()=>{const[h,q]=location.hash.slice(2).split('?'),a=h.split('/'),pg=a[0]||'home';
  document.body.dataset.page=pg;$('#app').innerHTML=render(pg,a[1],new URLSearchParams(q));
  const t=$('#app h1');document.title=(t?t.textContent+' – ':'')+'Beauty in Motion';scrollTo(0,0)};
 addEventListener('hashchange',go);go()}
