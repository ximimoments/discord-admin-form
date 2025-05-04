const translations = {
  en: {
    title: "Join as Admin - Discord Server",
    heading: "We are looking for you!",
    p1: "Do you want to be part of our server's admin/mod team?",
    p2: "Fill out the form and apply now.",
    username_label: "Discord Username:",
    experience_label: "Do you have moderation experience?",
    motivation_label: "Why do you want to be an admin?",
    emergencies_label: "Available for emergencies?",
    languages_label: "Which official server languages do you speak?",
    select_option: "Select",
    yes_option: "Yes",
    no_option: "No",
    submit_btn: "Submit Application",
    join_server: "Join our official server:",
    official_server: "Official Server",
    admin_server: "If you're an admin, access the admin-only server:",
    admin_only: "Admin-Only Server",
  },
  es: {
    title: "Únete como Admin - Servidor de Discord",
    heading: "¡Te estamos buscando!",
    p1: "¿Quieres formar parte del equipo de admins/mods del servidor?",
    p2: "Rellena el formulario y postúlate ahora.",
    username_label: "Nombre de usuario de Discord:",
    experience_label: "¿Tienes experiencia moderando?",
    motivation_label: "¿Por qué quieres ser admin?",
    emergencies_label: "¿Disponible para emergencias?",
    languages_label: "¿Qué idiomas oficiales del servidor hablas?",
    select_option: "Selecciona",
    yes_option: "Sí",
    no_option: "No",
    submit_btn: "Enviar Solicitud",
    join_server: "Únete a nuestro servidor oficial:",
    official_server: "Servidor Oficial",
    admin_server: "Si eres admin, accede al servidor solo para admins:",
    admin_only: "Servidor Solo para Admins",
  },
  it: {
    title: "Unisciti come Admin - Server Discord",
    heading: "Ti stiamo cercando!",
    p1: "Vuoi far parte del team di admin/mod del server?",
    p2: "Compila il modulo e candidati ora.",
    username_label: "Nome utente Discord:",
    experience_label: "Hai esperienza come moderatore?",
    motivation_label: "Perché vuoi diventare admin?",
    emergencies_label: "Disponibile per emergenze?",
    languages_label: "Quali lingue ufficiali del server parli?",
    select_option: "Seleziona",
    yes_option: "Sì",
    no_option: "No",
    submit_btn: "Invia la candidatura",
    join_server: "Unisciti al nostro server ufficiale:",
    official_server: "Server Ufficiale",
    admin_server: "Se sei admin, accedi al server solo per admin:",
    admin_only: "Server Solo per Admin",
  },
  pt: {
    title: "Junte-se como Admin - Servidor do Discord",
    heading: "Estamos te procurando!",
    p1: "Você quer fazer parte da equipe de admins/mods do servidor?",
    p2: "Preencha o formulário e se inscreva agora.",
    username_label: "Nome de usuário do Discord:",
    experience_label: "Você tem experiência como moderador?",
    motivation_label: "Por que você quer ser admin?",
    emergencies_label: "Disponível para emergências?",
    languages_label: "Quais idiomas oficiais do servidor você fala?",
    select_option: "Selecione",
    yes_option: "Sim",
    no_option: "Não",
    submit_btn: "Enviar Candidatura",
    join_server: "Junte-se ao nosso servidor oficial:",
    official_server: "Servidor Oficial",
    admin_server: "Se você for admin, acesse o servidor apenas para admins:",
    admin_only: "Servidor Somente para Admins",
  },
  ru: {
    title: "Присоединяйтесь как админ - Discord сервер",
    heading: "Мы вас ищем!",
    p1: "Хотите стать частью команды админов/модераторов сервера?",
    p2: "Заполните форму и подайте заявку прямо сейчас.",
    username_label: "Имя пользователя Discord:",
    experience_label: "Есть ли у вас опыт модерации?",
    motivation_label: "Почему вы хотите стать админом?",
    emergencies_label: "Готовы ли вы к экстренным ситуациям?",
    languages_label: "Какие официальные языки сервера вы говорите?",
    select_option: "Выберите",
    yes_option: "Да",
    no_option: "Нет",
    submit_btn: "Отправить заявку",
    join_server: "Присоединяйтесь к нашему официальному серверу:",
    official_server: "Официальный сервер",
    admin_server: "Если вы админ, заходите на сервер только для админов:",
    admin_only: "Сервер только для админов",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const languageSelector = document.getElementById("language");

  // Función para aplicar traducciones
  const translatePage = (language) => {
    const elementsToTranslate = document.querySelectorAll("[data-i18n]");
    elementsToTranslate.forEach((el) => {
      const translationKey = el.getAttribute("data-i18n");
      if (translations[language] && translations[language][translationKey]) {
        el.textContent = translations[language][translationKey];
      }
    });
  };

  // Cambio de idioma al seleccionar un idioma diferente
  languageSelector.addEventListener("change", (event) => {
    translatePage(event.target.value);
  });

  // Establecer el idioma por defecto (en este caso inglés)
  translatePage(languageSelector.value);
});
