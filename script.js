const themeButtons = document.querySelectorAll('.theme-btn');
const body = document.getElementById('main-body');
const mobilePanel = document.getElementById('mobile-panel');

themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Check if current theme is light
        const isLight = body.style.backgroundColor === "white" ||
            body.style.backgroundColor === "" ||
            body.style.backgroundColor === "rgb(255, 255, 255)";

        // Selecting all elements that need color change
        const allElements = document.querySelectorAll('.nav-link, .member-btn, .close-btn, .home-text, .about-text, .member-text');
        const allIconPaths = document.querySelectorAll('.icon-path');
        const tables = document.querySelectorAll('.table-color');
        const tableHeaderRows = document.querySelectorAll('thead tr');
        const tableTexts = document.querySelectorAll('table th, table td, table span.t');

        if (isLight) {
            // === DARK MODE ===
            body.style.backgroundColor = "#0f172a";

            // Mobile Panel Blur & Dark Effect
            if (mobilePanel) {
                mobilePanel.style.backgroundColor = "rgba(30, 41, 59, 0.7)"; // Transparent dark
                mobilePanel.style.backdropFilter = "blur(12px)"; // Blur effect
                mobilePanel.style.webkitBackdropFilter = "blur(12px)"; // Safari support
                mobilePanel.style.borderLeft = "1px solid rgba(255, 255, 255, 0.1)";
            }

            allElements.forEach(el => el.style.setProperty('color', 'white', 'important'));
            
            tables.forEach(t => {
                t.style.backgroundColor = "#1e293b";
                t.style.borderColor = "#334155";
            });

            tableHeaderRows.forEach(tr => tr.style.backgroundColor = "#334155");
            tableTexts.forEach(txt => txt.style.setProperty('color', 'white', 'important'));

            // Switch to Moon Icon
            allIconPaths.forEach(path => {
                path.setAttribute('d', 'M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z');
            });

            themeButtons.forEach(b => {
                b.style.backgroundColor = "#334155";
                b.style.color = "#fbbf24";
            });

        } else {
            // === LIGHT MODE ===
            body.style.backgroundColor = "white";

            // Mobile Panel Blur & Light Effect
            if (mobilePanel) {
                mobilePanel.style.backgroundColor = "rgba(255, 255, 255, 0.7)"; // Transparent white
                mobilePanel.style.backdropFilter = "blur(12px)";
                mobilePanel.style.webkitBackdropFilter = "blur(12px)";
                mobilePanel.style.borderLeft = "1px solid rgba(0, 0, 0, 0.05)";
            }

            allElements.forEach(el => el.style.setProperty('color', 'black', 'important'));

            tables.forEach(t => {
                t.style.backgroundColor = "white";
                t.style.borderColor = "#f1f5f9";
            });

            tableHeaderRows.forEach(tr => tr.style.backgroundColor = "transparent");
            tableTexts.forEach(txt => txt.style.setProperty('color', 'black', 'important'));

            // Switch to Sun Icon
            allIconPaths.forEach(path => {
                path.setAttribute('d', 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M3 12h2.25m.386-6.364l1.591 1.591M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z');
            });

            themeButtons.forEach(b => {
                b.style.backgroundColor = "#f1f5f9";
                b.style.color = "#334155";
            });
        }
    });
});
