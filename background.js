  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "popup") {
      chrome.tabs.create({ url: chrome.runtime.getURL("index.html") });
    }
  });