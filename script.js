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


// ── Members ────────────────────────────────────────────────────────────────
const DEFAULT_MEMBERS = [
    { name: "Mohammad Srabon Ahmed", designation: "President", email: "email@example.com", phone: "+880 1726-009893", address: "Kajipara, Dhaka", avatar: "./images/president.jpg", status: "Active" },
    { name: "Dipto Chandra Das", designation: "Vice President", email: "email@example.com", phone: "+880 1798-381050", address: "Mirpur 6, Dhaka", avatar: "./images/vp.jpg", status: "Active" },
    { name: "Miftaul Islam Ariyan", designation: "Vice President", email: "email@example.com", phone: "+880 ****-******", address: "Mirpur, Dhaka", avatar: "./images/vp2.jpg", status: "Active" },
    { name: "Nayemur Rahman", designation: "General Secretary", email: "email@example.com", phone: "+880 1837-694527", address: "Mirpur 2, Dhaka", avatar: "./images/gs.jpg", status: "Active" },
    { name: "MD.Sumon Ahmed Apon", designation: "Assistant General Secretary", email: "email@example.com", phone: "+880 1719-435140", address: "Mirpur, Dhaka", avatar: "./images/aponvai.jpg", status: "Active" },
    { name: "Sabikun Nahar Saila", designation: "Treasurer", email: "email@example.com", phone: "+880 1926-952329", address: "Savar, Dhaka", avatar: "./images/dummy.webp", status: "Active" },
    { name: "Maruf Hasan", designation: "Media & Publication Head", email: "email@example.com", phone: "+880 ****-******", address: "Mirpur 6, Dhaka", avatar: "./images/marufvai.jpg", status: "Active" },
    { name: "Turjo Rema", designation: "Media & Publication", email: "email@example.com", phone: "+880 ****-******", address: "Mirpur, Dhaka", avatar: "./images/turjovai.jpg", status: "Active" },
    { name: "Sheikh Rabby", designation: "Volunteer Co-ordinator Head", email: "email@example.com", phone: "+880 1876-563809", address: "Mirpur 6, Dhaka", avatar: "./images/rabbyvai.jpg", status: "Active" },
    { name: "Sakin Ayan", designation: "Volunteer Co-ordinator", email: "adasr0099@gmail.com", phone: "+880 1708-561481", address: "Mirpur 11, Dhaka", avatar: "./images/ayan.jpg", status: "Active" },
    { name: "Mariyam Islam Rimi", designation: "Club Executive", email: "email@example.com", phone: "+880 1616-004954", address: "Mirpur 6, Dhaka", avatar: "./images/rimi.jpeg", status: "Active" },
    { name: "Jakia Sultana", designation: "Club Executive", email: "email@example.com", phone: "+880 *****-******", address: "Mirpur 6, Dhaka", avatar: "./images/jakia.jpeg", status: "Active" },
    { name: "MD Hamza Ratul", designation: "Club Executive", email: "email@example.com", phone: "+880 *****-******", address: "Mirpur, Dhaka", avatar: "./images/hamza.jpg", status: "Active" },
    { name: "MD Mehedi Pramanik", designation: "Club Executive", email: "email@example.com", phone: "+880 *****-******", address: "Mirpur, Dhaka", avatar: "./images/mahadi.jpg", status: "Active" },
    { name: "Tasmiah Tasnim", designation: "Club Executive", email: "email@example.com", phone: "+880 *****-******", address: "Mirpur, Dhaka", avatar: "./images/dummy.webp", status: "Active" },
    { name: "Jannatul Ferdous", designation: "Club Executive", email: "email@example.com", phone: "+880 *****-******", address: "Mirpur, Dhaka", avatar: "./images/dummy.webp", status: "Active" },
    { name: "Fahad Islam", designation: "General Member", email: "axe572152@gmail.com", phone: "+880 1815-736110", address: "Mirpur 6, Dhaka", avatar: "./images/fahad.jpg", status: "Active" },
];

(function deduplicateStorage() {
    const stored = JSON.parse(localStorage.getItem('ict_members') || '[]');
    const seen = new Set();
    DEFAULT_MEMBERS.forEach(m => seen.add(m.email.toLowerCase()));
    const clean = stored.filter(m => {
        const key = (m.email + '|' + m.name).toLowerCase();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
    localStorage.setItem('ict_members', JSON.stringify(clean));
})();

function getNewMembers() {
    return JSON.parse(localStorage.getItem('ict_members') || '[]');
}

function getAllMembers() {
    return [...DEFAULT_MEMBERS, ...getNewMembers()];
}

function avatarFallback(img, name) {
    img.onerror = () => {
        img.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=2563eb&color=fff&size=80&rounded=true`;
        img.onerror = null;
    };
}

function buildRow(member, index) {
    const isNew = index >= DEFAULT_MEMBERS.length;
    const tr = document.createElement('tr');
    tr.className = 'hover:bg-blue-50/30 transition-colors duration-150';
    tr.dataset.name = member.name.toLowerCase();
    tr.dataset.designation = (member.designation || '').toLowerCase();

    tr.innerHTML = `
        <td class="py-4 px-6 text-xs text-gray-400 font-500">${index + 1}</td>
        <td class="py-4 px-6">
            <div class="flex items-center gap-3">
                <div class="relative shrink-0">
                    <img src="${member.avatar || ''}" alt="${member.name}"
                        class="w-9 h-9 rounded-full border-2 border-blue-200 object-cover"
                        id="avatar-${index}" />
                    ${isNew ? '<span class="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-white"></span>' : ''}
                </div>
                <div>
                    <span class="text-sm font-700 text-gray-900">${member.name}</span>
                    ${isNew ? '<span class="ml-2 text-[10px] font-700 bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full uppercase">New</span>' : ''}
                </div>
            </div>
        </td>
        <td class="py-4 px-6 text-sm font-500 text-gray-700">${member.designation || '—'}</td>
        <td class="py-4 px-6 text-sm text-gray-500">${member.email || '—'}</td>
        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">${member.phone || '—'}</td>
        <td class="py-4 px-6 text-sm text-gray-500 max-w-[160px] truncate">${member.address || '—'}</td>
        <td class="py-4 px-6 text-center">
            <span class="px-3 py-1 text-[10px] font-700 bg-green-100 text-green-700 rounded-full uppercase">${member.status || 'Active'}</span>
        </td>
    `;

    setTimeout(() => {
        const img = document.getElementById(`avatar-${index}`);
        if (img) avatarFallback(img, member.name);
    }, 0);

    return tr;
}

function renderTable(filter = '') {
    const tbody = document.getElementById('memberTableBody');
    if (!tbody) return;
    const empty = document.getElementById('emptyState');
    const all = getAllMembers();
    tbody.innerHTML = '';

    let count = 0;
    all.forEach((m, i) => {
        const haystack = (m.name + ' ' + (m.designation || '')).toLowerCase();
        if (filter && !haystack.includes(filter.toLowerCase())) return;
        tbody.appendChild(buildRow(m, i));
        count++;
    });

    if (empty) empty.classList.toggle('hidden', count > 0);

    const memberCountEl = document.getElementById('memberCount');
    if (memberCountEl) memberCountEl.textContent = `${all.length} members`;
}

if (document.getElementById('memberTableBody')) {
    renderTable();

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            renderTable(this.value.trim());
        });
    }
}


const membershipForm = document.getElementById('membershipForm');
if (membershipForm) {
    membershipForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('floating_fullname')?.value.trim();
        const address = document.getElementById('floating_address')?.value.trim();
        const phone = document.getElementById('floating_number')?.value.trim();
        const email = document.getElementById('floating_email')?.value.trim();

        if (!name || !email || !phone || !address) {
            alert('Please fill in all required fields.');
            return;
        }

        const newMember = {
            name,
            designation: 'General Member',
            email,
            phone,
            address,
            avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=2563eb&color=fff&size=80&rounded=true`,
            status: 'Active'
        };

        const existing = getNewMembers();
        const allEmails = getAllMembers().map(m => m.email.toLowerCase());
        if (allEmails.includes(email.toLowerCase())) {
            alert('A member with this email already exists.');
            return;
        }

        existing.push(newMember);
        localStorage.setItem('ict_members', JSON.stringify(existing));

        alert(`Thank you, ${name}! Your membership form has been submitted successfully.`);
        membershipForm.reset();

        window.location.href = ' members.html';
    });
}
