const team=[
  {role:"Président",name:"NYA TANKOUA Guy",photo:"assets/images/president.png",highlight:true},
  {role:"Première Vice-Présidente",name:"MOUKODI Hélène",photo:""},
  {role:"Deuxième Vice-Présidente",name:"DJEUGA Mireille",photo:""},
  {role:"Secrétaire",name:"KELBE Serge",photo:""},
  {role:"Secrétaire adjoint",name:"TCHEUNANG Dieudonné",photo:""},
  {role:"Trésorière",name:"MBOUWE Jacqueline",photo:""},
  {role:"Chargée de la Communication",name:"NGO NDJOCK Angèle",photo:""},
  {role:"Chargé des relations et des affaires estudiantines",name:"EMAHA Bernard",photo:""},
  {role:"Commissaire aux comptes",name:"DIN DOUALA David",photo:""},
  {role:"Commissaire aux comptes",name:"EYANGO Berthier",photo:""},
  {role:"Censeur",name:"KAMTE Pierre",photo:""},
  {role:"Censeur",name:"DJOMO Alain",photo:""}
];

const gallery=[
  ["Assemblée générale annuelle","Gouvernance",true],
  ["Séminaire d’orientation","Éducation",false],
  ["Action solidaire","Solidarité",false],
  ["Rencontre intergénérationnelle","Fraternité",false],
  ["Journée culturelle","Culture",false]
];

const reports=[
  ["Rapport financier annuel","Transparence • PDF"],
  ["Procès-verbal d’Assemblée Générale","Gouvernance • PDF"],
  ["Bilan d’activités","Impact • PDF"]
];

const news=[
  ["Assemblée générale et perspectives 2026","Publication officielle...","Mars 2026"],
  ["Renforcement des actions de solidarité","Mise en avant...","Février 2026"],
  ["Orientation, stages et insertion","Préparation...","Janvier 2026"]
];

const slides=[
  {title:"Assemblée générale annuelle",text:"Un espace de gouvernance...",image:"assets/images/slider-1.jpg"},
  {title:"Actions solidaires",text:"Des initiatives visibles...",image:"assets/images/slider-2.jpg"},
  {title:"Séminaires d’orientation",text:"Des rencontres utiles...",image:"assets/images/slider-3.jpg"}
];

document.getElementById('teamGrid').innerHTML=team.map((member,i)=>`
  <article class="team-card reveal ${member.highlight ? 'president-card' : ''}">
    
    <div class="team-photo ${member.photo ? 'has-photo' : ''}">
      ${member.photo ? `<img src="${member.photo}" alt="${member.name}" class="team-photo-img">` : ``}
    </div>

    <div class="team-body">
      ${member.highlight ? '<span class="badge-president">Président</span>' : `<small>Membre ${i+1}</small>`}
      <h3>${member.name}</h3>
      <p>${member.role}</p>
    </div>

  </article>
`).join('');

document.getElementById('galleryGrid').innerHTML=gallery.map(item=>`
  <article class="gallery-card reveal ${item[2]?'big':''}">
    <div class="gallery-photo"></div>
    <div class="content">
      <div class="news-meta">${item[1]}</div>
      <h3>${item[0]}</h3>
    </div>
  </article>
`).join('');

document.getElementById('reportsGrid').innerHTML=reports.map(item=>`
  <article class="report-card reveal">
    <div class="report-body">
      <div class="report-meta">${item[1]}</div>
      <h3>${item[0]}</h3>
      <button class="btn">Télécharger</button>
    </div>
  </article>
`).join('');

document.getElementById('newsGrid').innerHTML=news.map(item=>`
  <article class="news-card reveal">
    <div class="team-photo" style="aspect-ratio:16/10"></div>
    <div class="news-body">
      <div class="news-meta">${item[2]}</div>
      <h3>${item[0]}</h3>
      <p>${item[1]}</p>
    </div>
  </article>
`).join('');

const thumbs=document.getElementById('thumbs'),
      sliderImage=document.getElementById('sliderImage'),
      sliderTitle=document.getElementById('sliderTitle'),
      sliderText=document.getElementById('sliderText');

let current=0;

function renderThumbs(){
  thumbs.innerHTML=slides.map((slide,i)=>`
    <div class="thumb ${i===current?'active':''}" data-i="${i}">
      <div class="mini"></div>
      <div>
        <strong>${slide.title}</strong>
        <p>${slide.text}</p>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.thumb').forEach(el=>{
    el.onclick=()=>{
      current=+el.dataset.i;
      renderSlider();
    };
  });
}

function renderSlider(){
  const slide=slides[current];
  sliderImage.style.backgroundImage=`url('${slide.image}')`;
  sliderTitle.textContent=slide.title;
  sliderText.textContent=slide.text;
  renderThumbs();
}

renderSlider();
setInterval(()=>{
  current=(current+1)%slides.length;
  renderSlider();
},5000);
