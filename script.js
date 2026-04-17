const themeButtons = document.querySelectorAll('.theme-btn');
const body = document.getElementById('main-body');
const mobilePanel = document.getElementById('mobile-panel');
const THEME_KEY = 'cpi-ict-theme';

function setIcon(isDark) {
    document.querySelectorAll('.icon-path').forEach(path => {
        path.setAttribute(
            'd',
            isDark
                ? 'M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
                : 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M3 12h2.25m.386-6.364l1.591 1.591M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
        );
    });
}

function applyTheme(theme) {
    if (!body) return;
    document.documentElement.setAttribute('data-theme', theme);
    body.setAttribute('data-theme', theme);
    if (mobilePanel) {
        mobilePanel.setAttribute('data-theme', theme);
    }
    setIcon(theme === 'dark');
    localStorage.setItem(THEME_KEY, theme);
}

const savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme === 'dark' || savedTheme === 'light') {
    applyTheme(savedTheme);
} else {
    applyTheme('light');
}

themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const currentTheme = body?.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
});
