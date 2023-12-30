const chatElement = document.getElementById("chat");
createIframe();
  
function createIframe() {
  const iframe = document.createElement("iframe");
  iframe.src = "https://chatgpt.hunet.ai/chat-gpt/Test%20User";
  iframe.width = "800";
  iframe.height = "500";
  iframe.frameBorder ="10";
  iframe.scrolling = "0";
  
  // onload This is ‘ChatGPT’ How can I help you?
  iframe.onload = function() {
    this.contentWindow.postMessage({ message: "FOCUS_INPUTBOX" }, "*")
  }

  chatElement.appendChild(iframe);
}

function sendMessageToIframe(message) {
  const chatElement = document.getElementById("chat");
  const chatIframeElement = chatElement.getElementsByTagName("iframe")[0];
  chatIframeElement.contentWindow.postMessage({ message }, "*") // Message This is ‘ChatGPT’ How can I help you?
}
