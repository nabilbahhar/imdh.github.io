// IMDH Trilingual Translation System
const translations = {
  // Navigation
  "nav.home": { fr: "Accueil", ar: "الرئيسية", en: "Home" },
  "nav.about": { fr: "À propos", ar: "من نحن", en: "About" },
  "nav.sections": { fr: "Nos Sections", ar: "فروعنا", en: "Our Sections" },
  "nav.projects": { fr: "Nos Projets", ar: "مشاريعنا", en: "Our Projects" },
  "nav.publications": { fr: "Publications", ar: "المنشورات", en: "Publications" },
  "nav.news": { fr: "Actualités", ar: "الأخبار", en: "News" },
  "nav.contact": { fr: "Contact", ar: "اتصل بنا", en: "Contact" },
  "nav.login": { fr: "Se connecter", ar: "تسجيل الدخول", en: "Log in" },
  "nav.register": { fr: "Créer un compte", ar: "إنشاء حساب", en: "Sign up" },

  // Hero
  "hero.slogan": {
    fr: "Défendre les droits, Construire la citoyenneté",
    ar: "الدفاع عن الحقوق، بناء المواطنة",
    en: "Defending Rights, Building Citizenship"
  },
  "hero.subtitle": {
    fr: "Instance Marocaine des Droits Humains — Depuis 2011",
    ar: "الهيئة المغربية لحقوق الإنسان — منذ 2011",
    en: "Moroccan Human Rights Body — Since 2011"
  },
  "hero.cta": { fr: "Rejoignez-nous", ar: "انضموا إلينا", en: "Join us" },
  "hero.learn": { fr: "En savoir plus", ar: "اعرف المزيد", en: "Learn more" },

  // Stats
  "stats.projects": { fr: "+10 projets réalisés", ar: "+10 مشاريع منجزة", en: "+10 projects completed" },
  "stats.years": { fr: "+15 ans d'engagement", ar: "+15 سنة من الالتزام", en: "+15 years of engagement" },
  "stats.partners": { fr: "+5 partenaires internationaux", ar: "+5 شركاء دوليين", en: "+5 international partners" },
  "stats.projects.num": { fr: "10+", ar: "+10", en: "10+" },
  "stats.years.num": { fr: "15+", ar: "+15", en: "15+" },
  "stats.partners.num": { fr: "5+", ar: "+5", en: "5+" },
  "stats.projects.label": { fr: "Projets réalisés", ar: "مشاريع منجزة", en: "Projects completed" },
  "stats.years.label": { fr: "Ans d'engagement", ar: "سنة من الالتزام", en: "Years of engagement" },
  "stats.partners.label": { fr: "Partenaires internationaux", ar: "شركاء دوليين", en: "International partners" },

  // Domains
  "domains.title": { fr: "Nos domaines d'action", ar: "مجالات عملنا", en: "Our areas of action" },
  "domains.women": { fr: "Droits des femmes", ar: "حقوق المرأة", en: "Women's rights" },
  "domains.women.desc": {
    fr: "Lutte contre les violences, promotion de l'égalité et autonomisation des femmes.",
    ar: "مكافحة العنف، تعزيز المساواة وتمكين المرأة.",
    en: "Fighting violence, promoting equality and women's empowerment."
  },
  "domains.youth": { fr: "Jeunesse & citoyenneté", ar: "الشباب والمواطنة", en: "Youth & citizenship" },
  "domains.youth.desc": {
    fr: "Formation des jeunes aux droits humains et à la participation citoyenne.",
    ar: "تكوين الشباب في مجال حقوق الإنسان والمشاركة المواطنة.",
    en: "Training youth in human rights and civic participation."
  },
  "domains.civic": { fr: "Espace civique", ar: "الفضاء المدني", en: "Civic space" },
  "domains.civic.desc": {
    fr: "Protection et élargissement de l'espace civique au Maroc.",
    ar: "حماية وتوسيع الفضاء المدني في المغرب.",
    en: "Protecting and expanding civic space in Morocco."
  },
  "domains.migration": { fr: "Migration & droits", ar: "الهجرة والحقوق", en: "Migration & rights" },
  "domains.migration.desc": {
    fr: "Défense des droits des migrants et sensibilisation aux enjeux migratoires.",
    ar: "الدفاع عن حقوق المهاجرين والتوعية بقضايا الهجرة.",
    en: "Defending migrant rights and raising awareness on migration issues."
  },

  // News section
  "news.title": { fr: "Dernières actualités", ar: "آخر الأخبار", en: "Latest news" },
  "news.readmore": { fr: "Lire la suite", ar: "اقرأ المزيد", en: "Read more" },
  "news.all": { fr: "Toutes les actualités", ar: "جميع الأخبار", en: "All news" },

  // CTA section
  "cta.title": { fr: "Engagez-vous pour les droits humains", ar: "التزموا بحقوق الإنسان", en: "Commit to human rights" },
  "cta.desc": {
    fr: "Rejoignez l'IMDH et contribuez à la défense des droits et libertés au Maroc.",
    ar: "انضموا إلى الهيئة المغربية لحقوق الإنسان وساهموا في الدفاع عن الحقوق والحريات بالمغرب.",
    en: "Join the IMDH and contribute to defending rights and freedoms in Morocco."
  },
  "cta.join": { fr: "Créer un compte", ar: "إنشاء حساب", en: "Create an account" },
  "cta.contact": { fr: "Nous contacter", ar: "اتصل بنا", en: "Contact us" },

  // About page
  "about.title": { fr: "À propos de l'IMDH", ar: "من نحن", en: "About IMDH" },
  "about.history.title": { fr: "Notre histoire", ar: "تاريخنا", en: "Our history" },
  "about.history.text": {
    fr: "L'Instance Marocaine des Droits Humains (IMDH) a été fondée en 2011, dans le contexte du Printemps arabe et des réformes constitutionnelles au Maroc. Depuis sa création, l'IMDH s'est engagée dans la défense des droits humains, la promotion de la citoyenneté et le renforcement de l'espace civique au Maroc. L'association a développé des partenariats avec des organisations internationales de renom et a mené de nombreux projets dans différentes régions du pays.",
    ar: "تأسست الهيئة المغربية لحقوق الإنسان عام 2011، في سياق الربيع العربي والإصلاحات الدستورية بالمغرب. منذ تأسيسها، التزمت الهيئة بالدفاع عن حقوق الإنسان وتعزيز المواطنة وتقوية الفضاء المدني في المغرب. طورت الجمعية شراكات مع منظمات دولية مرموقة ونفذت العديد من المشاريع في مختلف جهات البلاد.",
    en: "The Moroccan Human Rights Body (IMDH) was founded in 2011, in the context of the Arab Spring and constitutional reforms in Morocco. Since its creation, the IMDH has been committed to defending human rights, promoting citizenship, and strengthening civic space in Morocco. The association has developed partnerships with renowned international organizations and has carried out numerous projects in different regions of the country."
  },
  "about.mission.title": { fr: "Mission & Vision", ar: "المهمة والرؤية", en: "Mission & Vision" },
  "about.mission.text": {
    fr: "Notre mission est de promouvoir et protéger les droits humains au Maroc à travers le plaidoyer, la formation, la recherche et la documentation. Notre vision est celle d'un Maroc où les droits et libertés de chaque citoyen sont respectés et garantis.",
    ar: "مهمتنا هي تعزيز وحماية حقوق الإنسان في المغرب من خلال المناصرة والتكوين والبحث والتوثيق. رؤيتنا هي مغرب تُحترم فيه حقوق وحريات كل مواطن وتُضمن.",
    en: "Our mission is to promote and protect human rights in Morocco through advocacy, training, research and documentation. Our vision is of a Morocco where the rights and freedoms of every citizen are respected and guaranteed."
  },
  "about.values.title": { fr: "Nos valeurs", ar: "قيمنا", en: "Our values" },
  "about.values.universality": { fr: "Universalité des droits", ar: "عالمية الحقوق", en: "Universality of rights" },
  "about.values.equality": { fr: "Égalité", ar: "المساواة", en: "Equality" },
  "about.values.nondiscrimination": { fr: "Non-discrimination", ar: "عدم التمييز", en: "Non-discrimination" },
  "about.values.transparency": { fr: "Transparence", ar: "الشفافية", en: "Transparency" },
  "about.structure.title": { fr: "Structure organisationnelle", ar: "الهيكل التنظيمي", en: "Organizational structure" },
  "about.structure.text": {
    fr: "L'IMDH est organisée autour d'un bureau exécutif national et de sections locales réparties dans plusieurs régions du Maroc. Cette structure décentralisée permet une action de proximité et une meilleure compréhension des réalités locales.",
    ar: "تنتظم الهيئة حول مكتب تنفيذي وطني وفروع محلية موزعة في عدة جهات بالمغرب. يتيح هذا الهيكل اللامركزي عملاً قريباً من المواطنين وفهماً أفضل للواقع المحلي.",
    en: "The IMDH is organized around a national executive board and local sections distributed across several regions of Morocco. This decentralized structure enables grassroots action and a better understanding of local realities."
  },
  "about.partners.title": { fr: "Nos partenaires", ar: "شركاؤنا", en: "Our partners" },

  // Sections page
  "sections.title": { fr: "Nos Sections", ar: "فروعنا", en: "Our Sections" },
  "sections.subtitle": {
    fr: "L'IMDH est présente dans plusieurs régions du Maroc à travers ses sections locales.",
    ar: "الهيئة حاضرة في عدة جهات بالمغرب من خلال فروعها المحلية.",
    en: "The IMDH is present in several regions of Morocco through its local sections."
  },
  "sections.ouedlaou": { fr: "Section Oued Laou", ar: "فرع واد لاو", en: "Oued Laou Section" },
  "sections.ouedlaou.detail": { fr: "Voir les détails", ar: "عرض التفاصيل", en: "View details" },

  // Oued Laou sub-page
  "ouedlaou.title": { fr: "Section Oued Laou", ar: "فرع واد لاو", en: "Oued Laou Section" },
  "ouedlaou.president": { fr: "Président: Ismail ELKHARRAZ", ar: "الرئيس: إسماعيل الخراز", en: "President: Ismail ELKHARRAZ" },
  "ouedlaou.context.title": { fr: "Contexte local", ar: "السياق المحلي", en: "Local context" },
  "ouedlaou.context.text": {
    fr: "Oued Laou est une commune côtière de la province de Tétouan, dans la région de Tanger-Tétouan-Al Hoceima. Avec une population de 11 690 habitants, la ville fait face à des défis socio-économiques importants.",
    ar: "واد لاو هي جماعة ساحلية تابعة لإقليم تطوان، في جهة طنجة-تطوان-الحسيمة. يبلغ عدد سكانها 11,690 نسمة، وتواجه المدينة تحديات اجتماعية واقتصادية كبيرة.",
    en: "Oued Laou is a coastal municipality in the province of Tetouan, in the Tangier-Tetouan-Al Hoceima region. With a population of 11,690 inhabitants, the city faces significant socio-economic challenges."
  },
  "ouedlaou.pop": { fr: "11 690 habitants", ar: "11,690 نسمة", en: "11,690 inhabitants" },
  "ouedlaou.violence": { fr: "49% taux de violence envers les femmes", ar: "49% معدل العنف ضد النساء", en: "49% rate of violence against women" },
  "ouedlaou.unemployment": { fr: "23,3% taux de chômage", ar: "23.3% معدل البطالة", en: "23.3% unemployment rate" },
  "ouedlaou.problems.title": { fr: "Problématiques identifiées", ar: "الإشكاليات المرصودة", en: "Identified issues" },
  "ouedlaou.problems.text": {
    fr: "La section d'Oued Laou a identifié plusieurs problématiques majeures : un taux de violence envers les femmes de 49%, un taux de chômage de 23,3%, et des flux migratoires importants. Ces défis nécessitent une approche intégrée associant sensibilisation, formation et accompagnement juridique.",
    ar: "حدد فرع واد لاو عدة إشكاليات رئيسية: معدل عنف ضد النساء يبلغ 49%، ومعدل بطالة يصل إلى 23.3%، وتدفقات هجرة كبيرة. تتطلب هذه التحديات مقاربة مندمجة تجمع بين التوعية والتكوين والمواكبة القانونية.",
    en: "The Oued Laou section has identified several major issues: a 49% rate of violence against women, 23.3% unemployment, and significant migration flows. These challenges require an integrated approach combining awareness, training and legal support."
  },
  "ouedlaou.projects.title": { fr: "Projets en cours et à venir", ar: "المشاريع الجارية والمستقبلية", en: "Current and upcoming projects" },
  "ouedlaou.projects.text": {
    fr: "Un projet majeur est en préparation avec la Coopération Espagnole (AECID) pour le renforcement de l'accès aux droits des femmes et des jeunes à Oued Laou. Ce projet, prévu pour 2026, vise à créer des espaces d'écoute, des programmes de formation et des mécanismes d'accompagnement.",
    ar: "يجري التحضير لمشروع كبير مع التعاون الإسباني (AECID) لتعزيز وصول النساء والشباب إلى حقوقهم في واد لاو. يهدف هذا المشروع المقرر لعام 2026 إلى إنشاء فضاءات للإنصات وبرامج تكوينية وآليات مواكبة.",
    en: "A major project is being prepared with Spanish Cooperation (AECID) to strengthen access to rights for women and youth in Oued Laou. This project, planned for 2026, aims to create listening spaces, training programs and support mechanisms."
  },
  "ouedlaou.back": { fr: "← Retour aux sections", ar: "→ العودة إلى الفروع", en: "← Back to sections" },

  // Projects page
  "projects.title": { fr: "Nos Projets", ar: "مشاريعنا", en: "Our Projects" },
  "projects.subtitle": {
    fr: "Découvrez les projets menés par l'IMDH depuis sa création.",
    ar: "اكتشفوا المشاريع التي نفذتها الهيئة منذ تأسيسها.",
    en: "Discover the projects carried out by IMDH since its creation."
  },
  "projects.all": { fr: "Tous", ar: "الكل", en: "All" },
  "projects.active": { fr: "En cours", ar: "جاري", en: "Active" },
  "projects.completed": { fr: "Clôturé", ar: "مكتمل", en: "Completed" },
  "projects.preparation": { fr: "En préparation", ar: "قيد التحضير", en: "In preparation" },
  "projects.funder": { fr: "Bailleur", ar: "الممول", en: "Funder" },
  "projects.partner": { fr: "Partenaire", ar: "الشريك", en: "Partner" },
  "projects.period": { fr: "Période", ar: "الفترة", en: "Period" },
  "projects.status": { fr: "Statut", ar: "الحالة", en: "Status" },

  // Publications page
  "publications.title": { fr: "Publications & Rapports", ar: "المنشورات والتقارير", en: "Publications & Reports" },
  "publications.subtitle": {
    fr: "Retrouvez nos rapports, études et productions médiatiques.",
    ar: "اطلعوا على تقاريرنا ودراساتنا وإنتاجاتنا الإعلامية.",
    en: "Find our reports, studies and media productions."
  },
  "publications.reports": { fr: "Rapports", ar: "التقارير", en: "Reports" },
  "publications.videos": { fr: "Vidéos", ar: "فيديوهات", en: "Videos" },
  "publications.strategies": { fr: "Stratégies", ar: "استراتيجيات", en: "Strategies" },
  "publications.download": { fr: "Télécharger", ar: "تحميل", en: "Download" },
  "publications.watch": { fr: "Regarder", ar: "مشاهدة", en: "Watch" },

  // News page
  "newspage.title": { fr: "Actualités", ar: "الأخبار", en: "News" },
  "newspage.subtitle": {
    fr: "Suivez les dernières nouvelles et activités de l'IMDH.",
    ar: "تابعوا آخر أخبار وأنشطة الهيئة.",
    en: "Follow the latest news and activities of IMDH."
  },

  // Contact page
  "contact.title": { fr: "Contactez-nous", ar: "اتصل بنا", en: "Contact us" },
  "contact.subtitle": {
    fr: "N'hésitez pas à nous contacter pour toute question ou demande d'information.",
    ar: "لا تترددوا في الاتصال بنا لأي سؤال أو طلب معلومات.",
    en: "Don't hesitate to contact us for any question or information request."
  },
  "contact.name": { fr: "Nom complet", ar: "الاسم الكامل", en: "Full name" },
  "contact.email": { fr: "Adresse email", ar: "البريد الإلكتروني", en: "Email address" },
  "contact.subject": { fr: "Sujet", ar: "الموضوع", en: "Subject" },
  "contact.message": { fr: "Message", ar: "الرسالة", en: "Message" },
  "contact.send": { fr: "Envoyer le message", ar: "إرسال الرسالة", en: "Send message" },
  "contact.info": { fr: "Informations de contact", ar: "معلومات الاتصال", en: "Contact information" },
  "contact.address": { fr: "Adresse", ar: "العنوان", en: "Address" },
  "contact.phone": { fr: "Téléphone", ar: "الهاتف", en: "Phone" },
  "contact.social": { fr: "Réseaux sociaux", ar: "وسائل التواصل الاجتماعي", en: "Social media" },
  "contact.morocco": { fr: "Maroc", ar: "المغرب", en: "Morocco" },

  // Auth
  "auth.login.title": { fr: "Se connecter", ar: "تسجيل الدخول", en: "Log in" },
  "auth.register.title": { fr: "Créer un compte", ar: "إنشاء حساب", en: "Create an account" },
  "auth.email": { fr: "Adresse email", ar: "البريد الإلكتروني", en: "Email address" },
  "auth.password": { fr: "Mot de passe", ar: "كلمة المرور", en: "Password" },
  "auth.confirm": { fr: "Confirmer le mot de passe", ar: "تأكيد كلمة المرور", en: "Confirm password" },
  "auth.fullname": { fr: "Nom complet", ar: "الاسم الكامل", en: "Full name" },
  "auth.section": { fr: "Section locale", ar: "الفرع المحلي", en: "Local section" },
  "auth.login.btn": { fr: "Se connecter", ar: "تسجيل الدخول", en: "Log in" },
  "auth.register.btn": { fr: "S'inscrire", ar: "التسجيل", en: "Sign up" },
  "auth.no.account": { fr: "Pas encore de compte ?", ar: "ليس لديك حساب؟", en: "Don't have an account?" },
  "auth.has.account": { fr: "Déjà un compte ?", ar: "لديك حساب بالفعل؟", en: "Already have an account?" },
  "auth.forgot": { fr: "Mot de passe oublié ?", ar: "نسيت كلمة المرور؟", en: "Forgot password?" },
  "auth.note": {
    fr: "Note: Cette fonctionnalité est une démonstration UI uniquement.",
    ar: "ملاحظة: هذه الوظيفة هي عرض توضيحي للواجهة فقط.",
    en: "Note: This feature is a UI demonstration only."
  },

  // Footer
  "footer.quicklinks": { fr: "Liens rapides", ar: "روابط سريعة", en: "Quick links" },
  "footer.social": { fr: "Réseaux sociaux", ar: "وسائل التواصل", en: "Social media" },
  "footer.rights": { fr: "© 2011-2026 Instance Marocaine des Droits Humains. Tous droits réservés.", ar: "© 2011-2026 الهيئة المغربية لحقوق الإنسان. جميع الحقوق محفوظة.", en: "© 2011-2026 Moroccan Human Rights Body. All rights reserved." },
  "footer.founded": { fr: "Fondée en 2011", ar: "تأسست عام 2011", en: "Founded in 2011" },

  // General
  "org.name": { fr: "Instance Marocaine des Droits Humains", ar: "الهيئة المغربية لحقوق الإنسان", en: "Moroccan Human Rights Body" },
  "org.abbr": { fr: "IMDH", ar: "هـ.م.ح.إ", en: "IMDH" },
};

// Language management
let currentLang = 'fr';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  if (lang === 'ar') {
    document.documentElement.dir = 'rtl';
    document.body.classList.add('rtl');
  } else {
    document.documentElement.dir = 'ltr';
    document.body.classList.remove('rtl');
  }
  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key] && translations[key][lang]) {
      el.textContent = translations[key][lang];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[key] && translations[key][lang]) {
      el.placeholder = translations[key][lang];
    }
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[key] && translations[key][lang]) {
      el.innerHTML = translations[key][lang];
    }
  });
  // Update active language button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  // Update font for Arabic
  if (lang === 'ar') {
    document.body.style.fontFamily = "'Noto Sans Arabic', 'Inter', sans-serif";
  } else {
    document.body.style.fontFamily = "'Inter', 'Noto Sans Arabic', sans-serif";
  }
}

function t(key) {
  return translations[key] && translations[key][currentLang] || key;
}
