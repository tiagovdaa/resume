document.addEventListener('DOMContentLoaded', () => {
  const terminal = document.getElementById('cv-terminal');
  const trigger = document.getElementById('start-download');

  const lines = [
    { text: "ATZ", prompt: true },
    { text: "OK", prompt: false },
    { text: "AT&F", prompt: true },
    { text: "OK", prompt: false },
    { text: "ATDT666-BBS", prompt: true },
    { text: "CONNECT 33600/ARQ", prompt: false },
    { text: "Logging in as: guest", prompt: true },
    { text: "Authenticating...", prompt: false },
    { text: "Login successful.", prompt: false },
    { text: "Initializing transfer protocol...", prompt: false },
    { text: "Setting BAUD rate: 38400", prompt: false },
    { text: "Negotiating connection...", prompt: false },
    { text: "Checking CRC...", prompt: false },
    { text: "Preparing file: 'cv_tiago_almeida.pdf'", prompt: false },
    { text: "Transferring data...", prompt: false },
    { text: "Estimated time: 00:00:28", prompt: false },
    { text: "Downloading via ZMODEM...", prompt: false },
    { text: "..............", prompt: false },
    { text: "Transfer complete.", prompt: false },
    { text: "Verifying integrity...", prompt: false },
    { text: "Checksum: OK", prompt: false },
    { text: "Finalizing session...", prompt: false },
    { text: "Logging out...", prompt: false },
    { text: "Connection closed.", prompt: false },
    { text: "READY TO OPEN FILE", prompt: false }
  ];

  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    trigger.remove();

    // play sound
    const audio = new Audio('assets/modem.mp3');
    audio.play().catch(() => {
      console.log("⚠️ Browser blocked autoplay");
    });

    let i = 0;
    const totalDuration = 28000; // ms
    const delay = Math.floor(totalDuration / lines.length); // average spacing

    function typeLine() {
      if (i < lines.length) {
        const p = document.createElement('p');
        p.textContent = lines[i].prompt ? "> " + lines[i].text : lines[i].text;
        terminal.appendChild(p);
        i++;
        setTimeout(typeLine, delay);
      } else {
        const p = document.createElement('p');
        p.className = 'ansi-blink';
        p.textContent = "> Opening document...";
        terminal.appendChild(p);
        setTimeout(() => {
          window.open('assets/tiago-almeida-cv.pdf', '_blank');
        }, 1000);
      }
    }

    setTimeout(typeLine, 500);
  });
});
