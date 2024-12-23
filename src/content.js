const id = "";
const token = "";

const envs = {
  CHATBOT_ID: `${id}`,
  Token: `${token}`,
  Chat_Height: "500px",
  Chat_Width: "350px",
  Chat_Right: "8px",
  Chat_Bottom: "8px",
};

// Icons Import
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
document.head.appendChild(link);

// Chat Icon
const icon = document.createElement("div");
icon.id = "jet-x-chat-icon";
icon.style.position = "fixed";
icon.style.bottom = `${envs.Chat_Bottom}`;
icon.style.right = `${envs.Chat_Right}`;
icon.style.width = "65px";
icon.style.height = "65px";
icon.style.borderRadius = "50%";
icon.style.color = "white";
icon.style.lineHeight = "65px";
icon.style.textAlign = "center";
icon.style.fontSize = "30px";
icon.style.zIndex = "9999";
icon.style.boxShadow = "0 10px 25px -5px #59FFFF";
icon.style.cursor = "pointer";
icon.style.transition = "all 0.3s";
icon.style.background = "#58FF0F";
icon.style.backgroundSize = "400% 200%";

icon.innerHTML = '<span class="material-icons">chat</span>';
document.body.appendChild(icon);

// Chat Iframe
icon.addEventListener("click", () => {
  icon.style.display = "none";
  
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.chatbase.co/chatbot-iframe/${envs.CHATBOT_ID}`;
  iframe.style.position = "fixed";
  iframe.style.bottom = `${envs.Chat_Bottom}`;
  iframe.style.right = `${envs.Chat_Right}`;
  iframe.style.width = `${envs.Chat_Width}`;
  iframe.style.height = `${envs.Chat_Height}`;
  iframe.style.border = "none";
  iframe.style.zIndex = "999";

  document.body.appendChild(iframe);

  const closeButton = document.createElement("div");
  closeButton.style.position = "fixed";
  closeButton.style.bottom = `${envs.Chat_Height}`;
  closeButton.style.right = `${envs.Chat_Width}`;
  closeButton.style.width = "30px";
  closeButton.style.height = "30px";
  closeButton.style.borderRadius = "50%";
  closeButton.style.background = "#ff0000";
  closeButton.style.color = "white";
  closeButton.style.display = "flex";
  closeButton.style.alignItems = "center";
  closeButton.style.justifyContent = "center";
  closeButton.style.cursor = "pointer";
  closeButton.style.zIndex = "10000";

  closeButton.innerHTML = '<span class="material-icons">close</span>';

  document.body.appendChild(closeButton);

  closeButton.addEventListener("click", () => {
    document.body.removeChild(iframe);
    document.body.removeChild(closeButton);
    icon.style.display = "block";
  });
});
