const id = "";
const token = "";

const envs = {
  CHATBOT_ID: `${id}`,
  Token: `${token}`
};

// Chat Icon

const icon = document.createElement("div");
icon.id = "jet-x-chat-icon";
icon.style.position = "fixed";
icon.style.bottom = "10px";
icon.style.right = "10px";
icon.style.width = "80px";
icon.style.height = "50px";
icon.style.backgroundColor = "#007bff";
icon.style.borderRadius = "8px";
icon.style.display = "flex";
icon.style.justifyContent = "center";
icon.style.alignItems = "center";
icon.style.cursor = "pointer";
icon.style.zIndex = "9999";
icon.style.color = "white";
icon.style.fontSize = "16px";
icon.style.fontWeight = "bold";

icon.innerHTML = "Jet-X";
document.body.appendChild(icon);

// Chat Iframe

icon.addEventListener("click", () => {
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.chatbase.co/chatbot-iframe/${envs.CHATBOT_ID}`;
  iframe.style.position = "fixed";
  iframe.style.bottom = "0";
  iframe.style.right = "0";
  iframe.style.width = "350px";
  iframe.style.height = "500px";
  iframe.style.border = "none";
  iframe.style.zIndex = "9999";
  
  document.body.appendChild(iframe);
});