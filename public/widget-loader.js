(function () {
    const scriptTag = document.currentScript;
    const hotel = scriptTag.getAttribute('data-hotel') || 'Hotel';
    const theme = scriptTag.getAttribute('data-theme') || '#ffffff';
    const color = scriptTag.getAttribute('data-color') || '#000000';
    const domain = 'http://localhost:3000';
    // const domain = 'https://dip-chat-alpha.vercel.app';

    const chatIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="M2 22V9q0-.825.588-1.413Q3.175 7 4 7h2V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v8q0 .825-.587 1.412Q20.825 14 20 14h-2v3q0 .825-.587 1.413Q16.825 19 16 19H5Zm6-10h8V9H8Zm-4 5h12v-3H8q-.825 0-1.412-.588Q6 12.825 6 12V9H4Zm14-5h2V4H8v3h8q.825 0 1.413.587Q18 8.175 18 9Z"/></svg>';
    const closeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"/></svg>';

    // 2. Buat kontainer untuk widget
    const widgetContainer = document.createElement('div');
    widgetContainer.id = 'dip-chat-widget';
    widgetContainer.style.position = 'fixed';
    widgetContainer.style.bottom = '20px';
    widgetContainer.style.right = '20px';
    widgetContainer.style.zIndex = '999999';
    widgetContainer.style.overflow='hidden';
    widgetContainer.style.maxHeight = '500px';

    // 3. Buat Tombol Buka/Tutup Chat
    const chatButton = document.createElement('button');
    chatButton.innerHTML = chatIcon;
    chatButton.style.width = '50px';
    chatButton.style.height = '50px';
    chatButton.style.borderRadius = '50%';
    chatButton.style.border = 'none';
    chatButton.style.cursor = 'pointer';
    chatButton.style.boxShadow = '0px 4px 6px rgba(0,0,0,0.1)';
    chatButton.style.backgroundColor = theme;
    chatButton.style.color = color;
    chatButton.style.padding = '5px';
    chatButton.style.display = 'flex';
    chatButton.style.alignItems = 'center';
    chatButton.style.justifyContent = 'center';

    // 4. Buat iFrame untuk memuat halaman chat Next.js
    const chatIframe = document.createElement('iframe');
    // Kirim parameter melalui URL query string iFrame
    chatIframe.src = `${domain}/chat?hotel=${hotel}&theme=${encodeURIComponent(theme)}&color=${encodeURIComponent(color)}`;
    chatIframe.style.width = '350px';
    chatIframe.style.height = '500px';
    chatIframe.style.border = '1px solid #ccc';
    chatIframe.style.borderRadius = '10px';
    chatIframe.style.boxShadow = '0px 4px 12px rgba(0,0,0,0.15)';
    chatIframe.style.display = 'none'; // Sembunyikan secara default
    chatIframe.style.zIndex = '999999';
    chatIframe.style.overflow = 'hidden';

    // 5. Logika klik tombol
    chatButton.addEventListener('click', () => {
        if (chatIframe.style.display === 'none') {
            chatIframe.style.display = 'block';
            chatButton.innerHTML = closeIcon;
            chatButton.style.position = 'fixed';
            chatButton.style.bottom = '500px';
            chatButton.style.right = '15px';
            chatButton.style.width = '30px';
            chatButton.style.height = '30px';
          } else {
            chatIframe.style.display = 'none';
            chatButton.innerHTML = chatIcon;
            chatButton.style.position = 'block';
            chatButton.style.bottom = '20px';
            chatButton.style.right = '20px';
            chatButton.style.width = '50px';
            chatButton.style.height = '50px';
        }
    });

    // 6. Rangkai elemen
    widgetContainer.appendChild(chatIframe);
    widgetContainer.appendChild(chatButton);
    document.body.appendChild(widgetContainer);
})();