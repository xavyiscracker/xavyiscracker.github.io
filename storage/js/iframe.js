document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById('myIframe');
    const urlParam = getQueryParam('url');
    const storedUrl = localStorage.getItem('iframeSrc');

    if (urlParam) {
        const decodedUrl = decodeURIComponent(urlParam);
        iframe.src = decodedUrl;
        localStorage.setItem('iframeSrc', decodedUrl); 
        history.replaceState(null, '', window.location.pathname); 
        console.log('Iframe URL set from query param:', decodedUrl);
    } 
    else if (storedUrl) {
        iframe.src = storedUrl;
        console.log('Iframe URL set from localStorage:', storedUrl);
    } 
    else {
        iframe.src = 'https://example.com'; 
        console.log('Iframe URL set to default');
    }
});

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function toggleFullscreen() {
    const iframe = document.getElementById('myIframe');
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { 
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { 
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { 
        iframe.msRequestFullscreen();
    }
}

function refreshIframe() {
    const iframe = document.getElementById('myIframe');
    iframe.src = iframe.src;  
    console.log('Iframe refreshed');
}

function openInNewTab() {
    const iframe = document.getElementById('myIframe');
    
    // Show the warning message before opening the link
    showWarningMessage(iframe.src);
}

function showWarningMessage(url) {
    // Create a modal or popup message
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '9999';

    const messageBox = document.createElement('div');
    messageBox.style.backgroundColor = '#0d0d0d';  // Updated background color for the popup
    messageBox.style.padding = '20px';
    messageBox.style.borderRadius = '8px';
    messageBox.style.textAlign = 'center';
    messageBox.style.width = '300px';

    const message = document.createElement('p');
    message.innerText = 'YOU ARE OPENING AN EXTERNAL LINK ON BRUNYSIXLWORK. NONE OF YOUR SETTINGS WILL APPLY (SAVE) TO WHAT YOU\'RE OPENING.';
    message.style.color = 'white'; // Updated text color to white
    messageBox.appendChild(message);

    const okButton = document.createElement('button');
    okButton.innerText = 'OK';
    okButton.style.marginTop = '10px';
    okButton.style.padding = '10px';
    okButton.style.backgroundColor = '#141414'; // Updated button color
    okButton.style.color = 'white'; // Button text color white
    okButton.style.border = 'none';
    okButton.style.cursor = 'pointer';

    okButton.addEventListener('click', function() {
        window.open(url, '_blank'); // Open the external link
        document.body.removeChild(modal); // Close the modal
        console.log('Iframe source opened in new tab');
    });

    messageBox.appendChild(okButton);
    modal.appendChild(messageBox);
    document.body.appendChild(modal);
}

function activateScript() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3';
    script.async = true;
    script.defer = true;
    script.onload = () => {
        new Crate({
            server: '1271606448878780478',
            channel: '1297604471307763762' 
        });
    };
    document.body.appendChild(script);
    console.log('Script activated');
}

function goToAnotherPage() {
    window.location.href = "/leaderboards.html";
    console.log('Navigated to leaderboards page');
}
