const langArr = {
//  nav
    "title-about": {
        "ua": "Про мене",
        "en": "About me",
    },
    "title-skills": {
        "ua": "Skills",
        "en": "Skills",
    },
    "title-achievements": {
        "ua": "Досягнення",
        "en": "Achievements",
    },
    "title-education": {
        "ua": "Освіта",
        "en": "Education",
    },
    "title-experience": {
        "ua": "Досвід роботи",
        "en": "Experience",
    },
    "title-contacts": {
        "ua": "Контакти",
        "en": "Contacts",
    },

//    about me
    "main-prof": {
        "ua": "Front-end розробник",
        "en": "Front-end developer",
    },
    "main-name": {
        "ua": "Чикалова Тетяна",
        "en": "Chykalova Tetiana",
    },
    "main-about-text-top": {
        "ua": `Вітаю! Шукаю віддалену вакансію Front-end розробника або HTML-верстальника рівня <span class="bold-text">junior</span>.`,
        "en": `Hi! I am looking for a remote vacancy of a Front-end developer or HTML-developer at the <span class="bold-text">junior</span> level.`,
    },
    "main-about-text-bottom": {
        "ua": "Я маю великий досвід роботи в команді (майже половина життя). Наразі працюю над фріланс-проектом та власним сайтом-портфоліо. І маю величезне бажання вчитися і працювати на перемогу.",
        "en": "I have a lot of experience working in a team (almost half of my life). I am currently working on a freelance project and my own portfolio site. And I have a great desire to learn and work for victory.",
    },
//    skill
    "skills-title": {
        "ua": "Skills",
        "en": "Skills",
    },
    "skills-tech": {
        "ua": "Technical skills",
        "en": "Technical skills",
    },
    "skills-html": {
        "ua": "HTML5",
        "en": "HTML5",
    },
    "skills-css": {
        "ua": "CSS3",
        "en": "CSS3",
    },
    "skills-js": {
        "ua": "Java Script",
        "en": "Java Script",
    },
    "skills-bootstrap": {
        "ua": "Bootstrap4",
        "en": "Bootstrap4",
    },
    "skills-adaptive": {
        "ua": "Адаптивна верстка",
        "en": "Adaptive layout",
    },
    "skills-photoshop": {
        "ua": "Photoshop",
        "en": "Photoshop",
    },
    "skills-figma": {
        "ua": "Figma",
        "en": "Figma",
    },
    "skills-english": {
        "ua": "English - A1",
        "en": "English - A1",
    },
    "skills-soft": {
        "ua": "Soft skills",
        "en": "Soft skills",
    },
    "skills-team": {
        "ua": "Командна робота",
        "en": "Team work",
    },
    "skills-communicat": {
        "ua": "Комунікація",
        "en": "Communication",
    },
    "skills-time": {
        "ua": "Тайм-менеджмент",
        "en": "Time management",
    },
    "skills-creative": {
        "ua": "Креативність",
        "en": "Creativity",
    },
    "skills-detail": {
        "ua": "Увага до деталей",
        "en": "Attention to detail",
    },
    "skills-scrum": {
        "ua": "SCRUM",
        "en": "SCRUM",
    },
    "skills-plan": {
        "ua": "Знайома з методологією BEM та препроцесором SCSS. Наразі вивчаю React та англійську.",
        "en": "Familiar with BEM methodology and SCSS preprocessor. I am currently learning React and English.",
    },
    "skills-certificate": {
        "ua": "Сертифікати",
        "en": "Certificate",
    },
//    achievements
    "achievements-title": {
        "ua": "Досягнення",
        "en": "Achievements",
    },
    "achievements-text": {
        "ua": `Для хостінгу даної веб-сторінки використовується зв'язка <span class=\"bold-text\">S3 Bucket, CloudFront та Route53,</span> що дозволяє захостити сторінку безкоштовно`,
        "en": `This web page is hosted using <span class=\"bold-text\">S3 Bucket, CloudFront and Route53.</span> This allows you to host a page for free.`,
    },
//    education
    "education-title": {
        "ua": "Освіта",
        "en": "Education",
    },
    "education-text": {
        "ua": `Національний педагогічний університет ім. М.П.Драгоманова (м. Київ)<br>
        Інженерно-педагогічний факультет,<br>
        спеціальність “Середня освіта (трудове навчання та технології)<br>
        <br>
        <span class="small-text">*планований рік випуску - 2023</span>`,
        "en": `National Pedagogical University named M.P. Dragomanova (Kyiv) <br>
        Faculty of Engineering and Pedagogy<br>
        specialty ”Secondary education (labor training and technologies)<br>
        <br>
        <span class="small-text">*planned year of graduation - 2023</span>`,
    },
//    work
    "work-title": {
        "ua": "Досвід роботи",
        "en": "Work experience",
    },
    "work1-title": {
        "ua": "ЦДЮТ Шевченківського району м. Запоріжжя, культорганізатор",
        "en": "Shevchenkivskiy District Youth Center of Zaporizhzhia, event-meneger",
    },
    "work1-task1": {
        "ua": "Організація та проведення масових заходів",
        "en": "Organization and holding of mass events",
    },
    "work1-task2": {
        "ua": "Ведення документації",
        "en": "Documentation management",
    },
    "work1-task3": {
        "ua": "Куріювання проектів",
        "en": "Supervision of projects",
    },
    "work2-title": {
        "ua": "Штатний фотограф. Фотограф (фріланс)",
        "en": "Staff photographer/Photographer (freelance)",
    },
    "work2-task1": {
        "ua": "Репортажна зйомка",
        "en": "Reportage photography",
    },
    "work2-task2": {
        "ua": "Дитяча фотосесія",
        "en": "Children's photoshoot",
    },
    "work2-task3": {
        "ua": "Обробка фотографій",
        "en": "Photo processing",
    },
    "work3-title": {
        "ua": "Вчитель малювання (фріланс)",
        "en": "Drawing teacher (freelance)",
    },
    "work3-task1": {
        "ua": "Викладення малюнку для дітей",
        "en": "Drawing lessons for children",
    },
    "work3-task2": {
        "ua": "Навчання дітей з нуля",
        "en": "Training from scratch",
    },
//    contacts
    "contacts-title": {
        "ua": "Контакти",
        "en": "Contacts",
    },
//    footer
    "footer-text": {
        "ua": `<a class="link__github lng-footer-link" target="_blank" href="https://github.com/TetianaChykalova/resume">Посилання</a> на код резюме на GitHub. <br>
                Проект зроблено з використанням HTML5, CSS3, JavaScript.`,
        "en": `<a class="link__github lng-footer-link" target="_blank" href="https://github.com/TetianaChykalova/resume">Link</a> to the summary code on GitHub. <br>
                The project is made using HTML5, CSS3, JavaScript.`,
    },
}



const langTitle = {
    "unit": {
        "ua": "Front-end junior Чикалова Тетяна",
        "en": "Front-end junior Chykalova Tetiana",
    },
}














