document.getElementById('btn').addEventListener('click', alteraBg);

function alteraBg() {
  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
      chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: applyBackgroundColor,
      });
  });
}
function applyBackgroundColor() {
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const span = document.createElement("span");
  span.style.color = 'black';
  span.style.backgroundColor = "yellow";
  span.appendChild(range.extractContents());
  range.insertNode(span);
}