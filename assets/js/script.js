const texts = {
  en: {
    navmenu_home: "Home",
    navmenu_about:"About",
    navmenu_resume:"Resume",
    navmenu_skills:"Skills",
    navmenu_contact:"Contact",
    pre_description_job: "I have always believed that learning is a continuous and exciting process. That's why I keep myself in constant training to develop new skills and perfect the existing ones. Currently, I am pursuing a master's degree in Computer Engineering, specializing in IoT and training in high-demand areas such as SAP.",
    specialization: "Developer",
    about_description: "Hi! I'm a computer engineer passionate about transforming complex ideas into simple and effective solutions. My focus is on software development and cloud technology integration, areas where I not only find a constant challenge, but also an endless source of inspiration. \n\nSince I started my career, every project has been an opportunity to expand my knowledge and sharpen my skills. My approach is clear: I don't stop at obstacles, I face them with a curious and proactive mindset. \n\nMy experience, while still growing, is backed by an unwavering motivation to keep learning and a strong desire to contribute to teams where collaboration and innovation are key. I am constantly on the lookout for challenging environments where I can contribute my technical skills and, at the same time, absorb new knowledge.\n\nSIf there is one thing that defines me, it is my passion for technology and my commitment to creating solutions that not only work, but that surprise and excite. I'm ready for the next challenge, and I can't wait to see what opportunities the future will bring.",
    title_about:"About",
    title_resume:"Resume",
    title_skills:"Skills",
    description_skills: "Some of the languages I have worked with",
    title_contact:"Contact",
    month:"14 Jan 2000",
    birthday:"Birthday:",
    website: "Wesite:",
    phone: "Phone:",
    city: "City:",
    age: "Age:",
    degree: "Degree:",
    degree_description: "Computer Engineer",
    resume_education: "Education",
    resume_experience: "Professional Experience",
    resume_education_degree: "Computer Engineering IT",
    resume_education_location: "Almería, Spain",
    contact_description: "Thanks for visiting my website! \n I am always interested in new opportunities where I can apply my skills, as well as learn and grow in new challenges. \n If you wish to contact me, feel free to do so through the following means. \n I look forward to hearing from you!",
    call_me:"Call me",
    contact_me: "Contact with me"
  },
  es: {
    navmenu_home:"Inicio",
    navmenu_about:"Sobre mí",
    navmenu_resume:"Currículum",
    navmenu_skills:"Habilidades",
    navmenu_contact:"Contacto",
    specialization: "Desarrollador",
    pre_description_job: "Siempre he creído que el aprendizaje es un proceso continuo y emocionante.\n Por ello, me mantengo en constante formación para desarrollar nuevas habilidades y perfeccionar las existentes.\n Actualmente, estoy cursando un máster en Ingeniería Informática, especializándome en IoT y formándome en áreas de alta demanda, como SAP.",
    title_about:"Sobre mí",
    title_resume:"Currículum",
    title_skills:"Habilidades",
    description_skills:"Algunos de los lenguajes con los que he trabajado",
    title_contact:"Contacto",
    month:"14 Enero 2000",
    birthday:"Fecha de nacimiento:",
    website: "Sitio web:",
    phone: "Teléfono:",
    city: "Ciudad:",
    age: "Edad:",
    degree: "Grado:",
    degree_description: "Ingeniero en Informática",
    resume_education: "Formación",
    resume_experience: "Experiencia de trabajo",
    resume_education_degree: "Ingeniería Informática TI",
    resume_education_location: "Almería, España",
    contact_description: "¡Gracias por visitar mi página web! \n Estoy siempre interesado en nuevas oportunidades donde pueda aplicar mis habilidades, así como aprender y crecer en nuevos desafíos. \n\nSi deseas ponerte en contacto conmigo, no dudes en hacerlo a través de los siguientes medios.  \n¡Espero tu mensaje!",
    call_me:"Llámame",
    contact_me: "Contacta conmigo"
  }
};

function changeLanguage(flagId) {
  let selectedLanguage;
  if (flagId === 'englishFlag') {
    selectedLanguage = 'en';
  } else if (flagId === 'spanishFlag') {
    selectedLanguage = 'es';
  }
  const navmenu_home = texts[selectedLanguage].navmenu_home;
  const navmenu_about = texts[selectedLanguage].navmenu_about;
  const navmenu_resume = texts[selectedLanguage].navmenu_resume;
  const navmenu_skills = texts[selectedLanguage].navmenu_skills;
  const navmenu_contact = texts[selectedLanguage].navmenu_contact;

  const pre_description_job = texts[selectedLanguage].pre_description_job;
  const specialization = texts[selectedLanguage].specialization;
  const about_description = texts[selectedLanguage].about_description;

  const title_about = texts[selectedLanguage].title_about;
  const title_resume = texts[selectedLanguage].title_resume;
  const title_skills = texts[selectedLanguage].title_skills;
  const description_skills = texts[selectedLanguage].description_skills;
  const title_contact = texts[selectedLanguage].title_contact;

  const month = texts[selectedLanguage].month;
  const birthday = texts[selectedLanguage].birthday;
  const website = texts[selectedLanguage].website;
  const phone = texts[selectedLanguage].phone;
  const city = texts[selectedLanguage].city;
  const age = texts[selectedLanguage].age;
  const degree = texts[selectedLanguage].degree;
  const degree_description = texts[selectedLanguage].degree_description

  const resume_education = texts[selectedLanguage].resume_education;
  const resume_experience = texts[selectedLanguage].resume_experience;
  const resume_education_degree = texts[selectedLanguage].resume_education_degree;
  const resume_education_location = texts[selectedLanguage].resume_education_location;

  const contact_description = texts[selectedLanguage].contact_description;
  const call_me = texts[selectedLanguage].call_me;
  const contact_me = texts[selectedLanguage].contact_me;


  
  document.body.setAttribute('data-lang', selectedLanguage);
  document.getElementById('navmenu_home').innerHTML = '<a href="#home" class="active" ><i class="bi bi-house navicon"></i>'+navmenu_home+'</a>';
  document.getElementById('navmenu_about').innerHTML = '<a href="#about"><i class="bi bi-person navicon" ></i>'+navmenu_about+'</a></li>';
  document.getElementById('navmenu_resume').innerHTML = '<a href="#resume"><i class="bi bi-file-earmark-text navicon" ></i>'+navmenu_resume+'</a></li>';
  document.getElementById('navmenu_skills').innerHTML = '<a href="#skills"><i class="bi bi-gear navicon" ></i>'+navmenu_skills+'</a></li>';
  document.getElementById('navmenu_contact').innerHTML = '<a href="#contact"><i class="bi bi-envelope navicon" ></i>'+navmenu_contact+'</a></li>';

  document.getElementById('pre_description_job').innerText = texts[selectedLanguage].pre_description_job = pre_description_job;
  document.getElementById('specialization').innerText = texts[selectedLanguage].specialization = specialization;
  document.getElementById('about_description').innerText = texts[selectedLanguage].about_description = about_description;

  document.getElementById('title_about').innerText = texts[selectedLanguage].title_home = title_about;
  document.getElementById('title_resume').innerText = texts[selectedLanguage].title_resume = title_resume;
  document.getElementById('title_skills').innerText = texts[selectedLanguage].title_skills = title_skills;
  document.getElementById('description_skills').innerText = texts[selectedLanguage].description_skills = description_skills;
  document.getElementById('title_contact').innerText = texts[selectedLanguage].title_contact = title_contact;

  document.getElementById('month').innerText = texts[selectedLanguage].month = month;
  document.getElementById('birthday').innerText = texts[selectedLanguage].birthday = birthday;
  document.getElementById('website').innerText = texts[selectedLanguage].website = website;
  document.getElementById('phone').innerText = texts[selectedLanguage].phone = phone;
  document.getElementById('city').innerText = texts[selectedLanguage].city = city;
  document.getElementById('age').innerText = texts[selectedLanguage].age = age;
  document.getElementById('degree').innerText = texts[selectedLanguage].degree = degree;
  document.getElementById('degree_description').innerText = texts[selectedLanguage].degree_description = degree_description;

  document.getElementById('resume_education').innerText = texts[selectedLanguage].resume_education = resume_education;
  document.getElementById('resume_experience').innerText = texts[selectedLanguage].resume_experience = resume_experience;
  document.getElementById('resume_education_location').innerText = texts[selectedLanguage].resume_education_location = resume_education_location;
  document.getElementById('resume_education_degree').innerText = texts[selectedLanguage].resume_education_degree = resume_education_degree;

  
  document.getElementById('contact_description').innerText = texts[selectedLanguage].contact_description = contact_description;
  document.getElementById('call_me').innerText = texts[selectedLanguage].call_me = call_me;
  document.getElementById('contact_me').innerText = texts[selectedLanguage].contact_me = contact_me;
}
function downloadbutton(flagId){
  let selectedLanguage;
  if (flagId === 'englishFlag') {
    selectedLanguage = 'en';
  } else if (flagId === 'spanishFlag') {
    selectedLanguage = 'es';
  }
  const html = '<a href="cv/Lisardo-' + selectedLanguage + '.pdf" id="download-btn" class="btn btn-primary btn-lg" download="Mi-CV.pdf">Descargar mi CV</a>';
  document.getElementById('download_button').innerHTML = html;
}
