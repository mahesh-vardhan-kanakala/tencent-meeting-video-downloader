import './popup.css';
import { generateCurlCommand } from '../utils/download';

document.addEventListener('DOMContentLoaded', () => {
  const status = document.getElementById('status');
  const videoList = document.getElementById('videoList');
  const generateBtn = document.getElementById('generateBtn');
  const savePath = document.getElementById('savePath');
  const commandBox = document.getElementById('commandBox');
  const curlCommand = document.getElementById('curlCommand');
  const copyBtn = document.getElementById('copyBtn');

  function updateStatus(message, type = '') {
    status.textContent = message;
    status.className = `status ${type}`;
  }

  chrome.runtime.sendMessage({ action: 'getVideoUrls' }, (response) => {
    const urls = response.videoUrls || [];
    
    if (urls.length > 0) {
      updateStatus('Detected the following videos:', 'success');
      generateBtn.disabled = false;
      
      urls.forEach((url, index) => {
        const div = document.createElement('div');
        div.className = 'video-item';
        div.textContent = `Video ${index + 1}`;
        div.title = url;
        videoList.appendChild(div);
      });

      generateBtn.addEventListener('click', () => {
        const path = savePath.value.trim();
        if (!path) {
          updateStatus('Please enter a save path!', 'error');
          return;
        }

        try {
          const url = urls[urls.length - 1];
          const command = generateCurlCommand(url, path);
          curlCommand.textContent = command;
          commandBox.style.display = 'block';
          updateStatus('Command generated, please copy and run it in Git Bash', 'success');
        } catch (error) {
          updateStatus(`Failed to generate command: ${error.message}`, 'error');
        }
      });

      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(curlCommand.textContent)
          .then(() => {
            copyBtn.textContent = 'Copied';
            setTimeout(() => {
              copyBtn.textContent = 'Copy Command';
            }, 2000);
          })
          .catch(err => {
            updateStatus('Failed to copy, please copy manually', 'error');
          });
      });
    } else {
      updateStatus('No videos detected, please open the Tencent Meeting recording page and play a video');
    }
  });
});
