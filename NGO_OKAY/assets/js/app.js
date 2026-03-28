const team = [
  { role: "", name: "NYA TANKOUA Guy", photo: "assets/images/president.png", highlight: true },
  { role: "Première Vice-Présidente", name: "MOUKODI Hélène", photo: "" },
  { role: "Deuxième Vice-Présidente", name: "DJEUGA Mireille", photo: "" },
  { role: "Secrétaire", name: "KELBE Serge", photo: "" },
  { role: "Secrétaire adjoint", name: "TCHEUNANG Dieudonné", photo: "" },
  { role: "Trésorière", name: "MBOUWE Jacqueline", photo: "" },
  { role: "Chargée de la Communication", name: "NGO NDJOCK Angèle", photo: "" },
  { role: "Chargé des relations et des affaires estudiantines", name: "EMAHA Bernard", photo: "" },
  { role: "Commissaire aux comptes", name: "DIN DOUALA David", photo: "" },
  { role: "Commissaire aux comptes", name: "EYANGO Berthier", photo: "" },
  { role: "Censeur", name: "KAMTE Pierre", photo: "" },
  { role: "Censeur", name: "DJOMO Alain", photo: "" }
];

const gallery = [
  ["Assemblée générale annuelle", "Gouvernance", true],
  ["Séminaire d’orientation", "Éducation", false],
  ["Action solidaire", "Solidarité", false],
  ["Rencontre intergénérationnelle", "Fraternité", false],
  ["Journée culturelle", "Culture", false]
];

const reports = [
  ["Rapport financier annuel", "Transparence • PDF"],
  ["Procès-verbal d’Assemblée Générale", "Gouvernance • PDF"],
  ["Bilan d’activités", "Impact • PDF"]
];

const news = [
  ["Assemblée générale et perspectives 2026", "Publication officielle sur les objectifs, les organes, les projets et la mobilisation des anciens élèves.", "Mars 2026"],
  ["Renforcement des actions de solidarité", "Mise en avant des mécanismes d’entraide et d’accompagnement entre membres et envers les élèves.", "Février 2026"],
  ["Orientation, stages et insertion", "Préparation d’initiatives pour rapprocher les élèves du monde professionnel et des opportunités concrètes.", "Janvier 2026"]
];

const slides = [
  {
    title: "Assemblée générale annuelle",
    text: "Un espace de gouvernance, de reddition des comptes et de mobilisation autour de la vision de l’association.",
    image: "assets/images/slider-1.jpg"
  },
  {
    title: "Actions solidaires",
    text: "Des initiatives visibles pour soutenir les membres et les élèves dans les moments de besoin.",
    image: "assets/images/slider-2.jpg"
  },
  {
    title: "Séminaires d’orientation",
    text: "Des rencontres utiles pour guider les élèves, favoriser les stages et préparer l’insertion professionnelle.",
    image: "assets/images/slider-3.jpg"
  }
];

/* =========================
   ACCÈS MEMBRES PDF
   ========================= */

const memberAccess = {
  "MEMB1001": { password: "ANEC2026", access: ["all"] },
  "MEMB1002": { password: "ANEC2026", access: ["all"] },
  "MEMB1003": { password: "ANEC2026", access: ["all"] },
  "MEMB1004": { password: "ANEC2026", access: ["all"] },
  "MEMB1005": { password: "ANEC2026", access: ["all"] },
  "MEMB1006": { password: "ANEC2026", access: ["all"] },
  "MEMB1007": { password: "ANEC2026", access: ["all"] },
  "MEMB1008": { password: "ANEC2026", access: ["all"] },
  "MEMB1009": { password: "ANEC2026", access: ["all"] },
  "MEMB1010": { password: "ANEC2026", access: ["all"] },
  "MEMB1011": { password: "ANEC2026", access: ["all"] },
  "MEMB1012": { password: "ANEC2026", access: ["all"] },
  "MEMB1013": { password: "ANEC2026", access: ["all"] },
  "MEMB1014": { password: "ANEC2026", access: ["all"] },
  "MEMB1015": { password: "ANEC2026", access: ["all"] },
  "MEMB1016": { password: "ANEC2026", access: ["all"] },
  "MEMB1017": { password: "ANEC2026", access: ["all"] },
  "MEMB1018": { password: "ANEC2026", access: ["all"] },
  "MEMB1019": { password: "ANEC2026", access: ["all"] },
  "MEMB1020": { password: "ANEC2026", access: ["all"] },
  "MEMB1021": { password: "ANEC2026", access: ["all"] },
  "MEMB1022": { password: "ANEC2026", access: ["all"] },
  "MEMB1023": { password: "ANEC2026", access: ["all"] },
  "MEMB1024": { password: "ANEC2026", access: ["all"] },
  "MEMB1025": { password: "ANEC2026", access: ["all"] },
  "MEMB1026": { password: "ANEC2026", access: ["all"] },
  "MEMB1027": { password: "ANEC2026", access: ["all"] },
  "MEMB1028": { password: "ANEC2026", access: ["all"] },
  "MEMB1029": { password: "ANEC2026", access: ["all"] },
  "MEMB1030": { password: "ANEC2026", access: ["all"] },
  "MEMB1031": { password: "ANEC2026", access: ["all"] },
  "MEMB1032": { password: "ANEC2026", access: ["all"] },
  "MEMB1033": { password: "ANEC2026", access: ["all"] },
  "MEMB1034": { password: "ANEC2026", access: ["all"] },
  "MEMB1035": { password: "ANEC2026", access: ["all"] },
  "MEMB1036": { password: "ANEC2026", access: ["all"] },
  "MEMB1037": { password: "ANEC2026", access: ["all"] },
  "MEMB1038": { password: "ANEC2026", access: ["all"] },
  "MEMB1039": { password: "ANEC2026", access: ["all"] },
  "MEMB1040": { password: "ANEC2026", access: ["all"] },
  "MEMB1041": { password: "ANEC2026", access: ["all"] },
  "MEMB1042": { password: "ANEC2026", access: ["all"] },
  "MEMB1043": { password: "ANEC2026", access: ["all"] },
  "MEMB1044": { password: "ANEC2026", access: ["all"] },
  "MEMB1045": { password: "ANEC2026", access: ["all"] },
  "MEMB1046": { password: "ANEC2026", access: ["all"] },
  "MEMB1047": { password: "ANEC2026", access: ["all"] },
  "MEMB1048": { password: "ANEC2026", access: ["all"] },
  "MEMB1049": { password: "ANEC2026", access: ["all"] },
  "MEMB1050": { password: "ANEC2026", access: ["all"] },
  "MEMB1051": { password: "ANEC2026", access: ["all"] },
  "MEMB1052": { password: "ANEC2026", access: ["all"] },
  "MEMB1053": { password: "ANEC2026", access: ["all"] },
  "MEMB1054": { password: "ANEC2026", access: ["all"] },
  "MEMB1055": { password: "ANEC2026", access: ["all"] },
  "MEMB1056": { password: "ANEC2026", access: ["all"] },
  "MEMB1057": { password: "ANEC2026", access: ["all"] },
  "MEMB1058": { password: "ANEC2026", access: ["all"] },
  "MEMB1059": { password: "ANEC2026", access: ["all"] },
  "MEMB1060": { password: "ANEC2026", access: ["all"] },
  "MEMB1061": { password: "ANEC2026", access: ["all"] },
  "MEMB1062": { password: "ANEC2026", access: ["all"] },
  "MEMB1063": { password: "ANEC2026", access: ["all"] },
  "MEMB1064": { password: "ANEC2026", access: ["all"] },
  "MEMB1065": { password: "ANEC2026", access: ["all"] },
  "MEMB1066": { password: "ANEC2026", access: ["all"] },
  "MEMB1067": { password: "ANEC2026", access: ["all"] },
  "MEMB1068": { password: "ANEC2026", access: ["all"] },
  "MEMB1069": { password: "ANEC2026", access: ["all"] },
  "MEMB1070": { password: "ANEC2026", access: ["all"] },
  "MEMB1071": { password: "ANEC2026", access: ["all"] },
  "MEMB1072": { password: "ANEC2026", access: ["all"] },
  "MEMB1073": { password: "ANEC2026", access: ["all"] },
  "MEMB1074": { password: "ANEC2026", access: ["all"] },
  "MEMB1075": { password: "ANEC2026", access: ["all"] }
};

const fileMap = {
  "Rapport financier annuel": "assets/pdf/rapport-financier-annuel.pdf",
  "Procès-verbal d’Assemblée Générale": "assets/pdf/proces-verbal-ag.pdf",
  "Bilan d’activités": "assets/pdf/bilan-activites.pdf"
};

/* =========================
   RENDU DES BLOCS
   ========================= */

document.getElementById('teamGrid').innerHTML = team.map((member, i) => `
  <article class="team-card reveal ${member.highlight ? 'president-card' : ''}">
    <div class="team-photo ${member.photo ? 'has-photo' : ''}">
      ${member.photo ? `<img src="${member.photo}" alt="${member.name}" class="team-photo-img">` : ``}
    </div>
    <div class="team-body">
      ${member.highlight ? '<span class="badge-president">Président</span>' : `<small>Membre ${i + 1}</small>`}
      <h3>${member.name}</h3>
      <p>${member.role}</p>
    </div>
  </article>
`).join('');

document.getElementById('galleryGrid').innerHTML = gallery.map(item => `
  <article class="gallery-card reveal ${item[2] ? 'big' : ''}">
    <div class="gallery-photo"></div>
    <div class="content">
      <div class="news-meta">${item[1]}</div>
      <h3 style="margin:6px 0 0">${item[0]}</h3>
    </div>
  </article>
`).join('');

document.getElementById('reportsGrid').innerHTML = reports.map(item => `
  <article class="report-card reveal">
    <div class="report-body">
      <div class="report-meta">${item[1]}</div>
      <h3 style="margin:8px 0 0">${item[0]}</h3>
      <div class="report-actions">
        <button class="btn download-member" type="button" data-file="${item[0]}">Télécharger</button>
      </div>
    </div>
  </article>
`).join('');

document.getElementById('newsGrid').innerHTML = news.map(item => `
  <article class="news-card reveal">
    <div class="team-photo" style="aspect-ratio:16/10"></div>
    <div class="news-body">
      <div class="news-meta">${item[2]}</div>
      <h3 style="margin:8px 0 10px">${item[0]}</h3>
      <p style="margin:0;color:var(--muted)">${item[1]}</p>
    </div>
  </article>
`).join('');

/* =========================
   TÉLÉCHARGEMENT MEMBRE
   ========================= */

function promptMemberDownload(fileTitle) {
  const memberNumber = window.prompt(
    `Téléchargement réservé aux membres.\nVeuillez renseigner votre numéro de membre pour télécharger : ${fileTitle}`
  );

  if (!memberNumber) return;

  const cleanedMember = memberNumber.trim().toUpperCase();

  if (!memberAccess[cleanedMember]) {
    alert("Numéro de membre invalide.");
    return;
  }

  const password = window.prompt(
    "Veuillez maintenant renseigner votre mot de passe membre."
  );

  if (!password) return;

  const cleanedPassword = password.trim();

  if (cleanedPassword !== memberAccess[cleanedMember].password) {
    alert("Mot de passe invalide.");
    return;
  }

  const requestedFile = fileMap[fileTitle];

  if (!requestedFile) {
    alert("Fichier non disponible.");
    return;
  }

  const accessRule = memberAccess[cleanedMember].access;

  const isAllowed =
    accessRule === "all" ||
    (Array.isArray(accessRule) && (accessRule.includes("all") || accessRule.includes(fileTitle)));

  if (!isAllowed) {
    alert("Vous n'êtes pas autorisé à télécharger ce document.");
    return;
  }

  window.open(requestedFile, "_blank");
}

document.addEventListener('click', (e) => {
  const d = e.target.closest('.download-member');
  if (d) {
    promptMemberDownload(d.dataset.file || 'Document');
    return;
  }

  const p = e.target.closest('.pay-button');
  if (!p) return;

  if (p.dataset.bank) {
    navigator.clipboard?.writeText(p.dataset.bank)
      .then(() => alert(p.dataset.bankLabel || 'Compte bancaire copié.'))
      .catch(() => alert('Compte bancaire prêt à être utilisé.'));
    return;
  }

  const fb = p.dataset.fallback;
  if (fb) {
    setTimeout(() => window.open(`https://wa.me/${fb}`, '_blank'), 500);
  }
});

/* =========================
   SLIDER
   ========================= */

const thumbs = document.getElementById('thumbs');
const sliderImage = document.getElementById('sliderImage');
const sliderTitle = document.getElementById('sliderTitle');
const sliderText = document.getElementById('sliderText');

let current = 0;

function renderThumbs() {
  thumbs.innerHTML = slides.map((slide, i) => `
    <div class="thumb${i === current ? ' active' : ''}" data-i="${i}">
      <div class="mini"></div>
      <div>
        <strong>${slide.title}</strong>
        <p style="margin:6px 0 0;color:var(--muted)">${slide.text}</p>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.thumb').forEach(el => {
    el.onclick = () => {
      current = +el.dataset.i;
      renderSlider();
    };
  });
}

function renderSlider() {
  const slide = slides[current];
  sliderImage.style.backgroundImage = `linear-gradient(180deg,rgba(255,255,255,.06),rgba(0,0,0,.15)), url('${slide.image}')`;
  sliderTitle.textContent = slide.title;
  sliderText.textContent = slide.text;
  renderThumbs();
}

renderSlider();

setInterval(() => {
  current = (current + 1) % slides.length;
  renderSlider();
}, 5000);

/* =========================
   ANIMATIONS REVEAL
   ========================= */

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
