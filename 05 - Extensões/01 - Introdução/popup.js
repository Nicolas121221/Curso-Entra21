document.getElementById('colorPicker').addEventListener('input', e => {
    const color = e.target.value;
    changeBackgroundColor(color);
});

function changeBackgroundColor(color) {
    chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: applyBackgroundColor,
            args: [color]
        });
    });
}

function applyBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}