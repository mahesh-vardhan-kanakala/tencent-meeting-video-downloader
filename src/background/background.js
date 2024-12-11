let videoUrls = new Set();


chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    const url = details.url;
    if (url.includes('myqcloud.com') && 
        url.includes('.mp4') && 
        url.includes('recording')) {
      videoUrls.add(url);
      chrome.storage.local.set({ videoUrls: Array.from(videoUrls) });
    }
  },
  { 
    urls: ["*://*.myqcloud.com/*recording*.mp4*"],
    types: ["media", "xmlhttprequest"]
  }
);


chrome.webRequest.onBeforeSendHeaders.addListener(
  (details) => {
    let headers = details.requestHeaders.filter(header => 
      !['range', 'if-range'].includes(header.name.toLowerCase())
    );
    return { requestHeaders: headers };
  },
  {
    urls: ["*://*.myqcloud.com/*recording*.mp4*"]
  },
  ["blocking", "requestHeaders"]
);


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getVideoUrls') {
    chrome.storage.local.get(['videoUrls'], (result) => {
      sendResponse({ videoUrls: result.videoUrls || [] });
    });
    return true;
  }
});