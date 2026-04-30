(function(){

/* ======================================================
   CPI ICT CLUB — OFFLINE AI CHATBOT (No API, No Internet)
   Just copy chatbot.js + chatbot.css into your project
   Then add to index.html:
     <link rel="stylesheet" href="chatbot.css">   (in <head>)
     <script src="chatbot.js"></script>            (before </body>)
====================================================== */

/* ---------- KNOWLEDGE BASE ---------- */
const KB = [

  /* --- Greetings --- */
  { k:['হ্যালো','হেই','সালাম','আস্সালামু','হাই'], lang:'bn',
    a:`হ্যালো! 👋 আমি CPI ICT Club-এর AI সহকারী।\nসদস্য, কোর্স, কার্যক্রম বা যোগদান সম্পর্কে যেকোনো প্রশ্ন করুন!` },

  { k:['hello','hi','hey','good morning','good afternoon','good evening','salam','assalamu'],
    a:`Hello! 👋 Welcome to CPI ICT Club.\nI can answer questions about our members, courses, activities, events, and how to join. What would you like to know?` },

  /* --- About Club --- */
  { k:['what is cpi ict club','about club','about cpi','about ict club','ict club কী','club সম্পর্কে'],
    a:`CPI ICT Club is the official technology club of Computer Polytechnic Institute (CPI), Bangladesh.\n\nFounded in 2022, our mission is to empower students to connect, collaborate, and create in the digital era. We run free tech courses, workshops, and events for CPI students.` },

  { k:['founded','establish','শুরু','প্রতিষ্ঠা','কখন শুরু','when start','history','ইতিহাস'],
    a:`CPI ICT Club was established in 2022 🎉\n\nFounded under the leadership of Mafuza Konica Ma'am. His vision was to empower students to explore technology, innovate boldly, and succeed in the digital era.` },

  /* --- Members / Team --- */
  { k:['advisor','উপদেষ্টা','abdur rahman'],
    a:`Club Advisor:\n👤 Abdur Rahman\nRole: Advisor of CPI Management & Technology & ICT Club` },

  { k:['moderator','মডারেটর','sayeda','farzana','zakia','tanzil','shahriyar'],
    a:`Club Moderators (3):\n\n1. Sayeda Farzana Yasmin\n   Chief Instructor & Head of CST Department, CPI\n\n2. Zakia Sultana Tanzil\n   Instructor, CST Department, CPI\n\n3. Muhammad Shahriyar Hossen\n   Instructor, CST Department, CPI` },

  { k:['president','সভাপতি','srabon','mohammad srabon'],
    a:`Club President:\n👤 Mohammad Srabon Ahmed\nDepartment: Computer Science & Technology, 7th Semester, CPI\n\nYou can find him on the Members page of our website.` },

  { k:['vice president','vp','ভাইস প্রেসিডেন্ট','dipto','ariyan','miftaul'],
    a:`Club Vice Presidents (2):\n\n1. Dipto Chandra Das\n   CST, 7th Semester, CPI\n\n2. Miftaul Islam Ariyan\n   CST, 7th Semester, CPI` },

  { k:['secretary','সম্পাদক','nayemur','nayeem'],
    a:`Club General Secretary:\n👤 Nayemur Rahman\nDepartment: Computer Science & Technology, 5th Semester, CPI\n\nHe also serves as a trainer for Graphics Design courses!` },

  { k:['team','committee','কমিটি','all member','সব সদস্য','member list','who are'],
    a:`CPI ICT Club Team:\n\n🔷 Advisor: Abdur Rahman\n\n🔷 Moderators:\n   • Sayeda Farzana Yasmin (Head of CST Dept)\n   • Zakia Sultana Tanzil (Instructor)\n   • Muhammad Shahriyar Hossen (Instructor)\n\n🔷 President: Mohammad Srabon Ahmed\n🔷 Vice President: Dipto Chandra Das\n🔷 Vice President: Miftaul Islam Ariyan\n🔷 General Secretary: Nayemur Rahman\n\nVisit the Members page to see the full list!` },

  { k:['trainer','trainer কে','who teach','mostafa','mahmudul','shabbir'],
    a:`Club Trainers:\n\n• Mostafa Islam — Lead Trainer (Web Development & MS Office Batch 1)\n• MD. Mahmudul Hasan — MS Office Batch 1 Trainer\n• Shabbir Mahmud — MS Office Batch 1 Trainer\n• Dipto Chandra Das — MS Office Batch 2 Trainer\n• Nayemur Rahman — Graphics Design Trainer (Batch 1 & 2)` },

  /* --- Activities / Courses --- */
  { k:['activity','activities','course','courses','কার্যক্রম','কোর্স','training','ট্রেনিং','program','programme'],
    a:`CPI ICT Club Courses & Activities:\n\n1. 📋 MS Office Application — Nov 2024 (Batch 1)\n2. 🌐 Web Development — March 2025\n3. 🎨 Graphics Design — May 2025 (Batch 1)\n4. 📋 MS Office Application — Nov 2025 (Batch 2)\n5. 🎨 Graphics Design — Nov 2025 (Batch 2)\n6. 💻 Programming Batch — Coming in 2026!\n\nAll courses are FREE for CPI students!` },

  { k:['ms office','microsoft office','office application','অফিস'],
    a:`MS Office Application Course:\n\n📋 Batch 1 — November 2024\nTrainers: Mostafa Islam, Mahmudul Hasan & Shabbir Mahmud\n\n📋 Batch 2 — November 2025\nTrainer: Dipto Chandra Das (Vice President)\n\nThis is our foundation course covering Word, Excel, PowerPoint and more. Due to high demand, we launched a 2nd batch!` },

  { k:['web development','web dev','web design','website','html','css','javascript','ওয়েব'],
    a:`Web Development Course:\n\n🌐 Launched: March 2025\nTrainer: Mostafa Islam (Lead Trainer)\n\nThis specialized course covers web development fundamentals to help students build real websites. It's one of our most popular offerings!` },

  { k:['graphics','design','graphic design','গ্রাফিক্স','ডিজাইন'],
    a:`Graphics Design Course:\n\n🎨 Batch 1 — May 2025\nTrainer: Nayemur Rahman (Club Secretary)\n\n🎨 Batch 2 — November 2025\nTrainer: Nayemur Rahman\n\nDue to incredible demand, this course returned for a second batch! One of our most celebrated offerings.` },

  { k:['programming','coding','code','প্রোগ্রামিং','কোডিং','2026','আসছে','upcoming','coming soon'],
    a:`Programming Batch — Coming in 2026! 💻\n\nThis is our most awaited upcoming course. The trainer hasn't been announced yet.\n\nStay tuned and keep following our website and Facebook page for updates!` },

  /* --- Membership --- */
  { k:['join','member','membership','register','registration','enroll','signup','যোগ','সদস্য হ','কিভাবে'],
    a:`How to Become a Member:\n\n✅ Step 1: Click the "Become a Member" button in the top navigation bar on our website\n\n✅ Step 2: Fill in the registration form on the login/register page\n\n✅ Step 3: Done! You'll get access to free courses, events, and club resources.\n\nMembership is FREE for all CPI students! 🎓` },

  { k:['free','cost','fee','charge','টাকা','খরচ','ফ্রি'],
    a:`Yes! All CPI ICT Club courses and membership are completely FREE 🆓\n\nWe believe every student deserves access to quality tech education. No fees, no charges — just learning and growing together!` },

  /* --- Events & Resources --- */
  { k:['event','events','ইভেন্ট','workshop','seminar'],
    a:`Events & Workshops:\n\nCPI ICT Club regularly organizes tech events, workshops, and seminars for students.\n\n📅 Visit our Events page (events.html) for the latest upcoming events.\n\nMake sure to check back often — exciting events are always being planned!` },

  { k:['resource','resources','রিসোর্স','material','study','পড়াশোনা','লার্নিং'],
    a:`Learning Resources:\n\nWe have a dedicated Resources page with study materials, course notes, and learning content for club members.\n\n📚 Visit resource.html on our website to explore all available resources.\n\nMore content is added regularly!` },

  /* --- Website Navigation --- */
  { k:['website','ওয়েবসাইট','navigate','page','section','home'],
    a:`CPI ICT Club Website Sections:\n\n🏠 Home — Main page & about us\n👥 Members — Full team & member list\n📌 Activities — All courses & activities\n📅 Events — Upcoming events\n📚 Resources — Study materials\n🔐 Login/Register — Join the club\n\nAll sections are in the top navigation menu!` },

  /* --- Social / Contact --- */
  { k:['facebook','contact','social','যোগাযোগ','ফেসবুক','reach','connect'],
    a:`Connect with CPI ICT Club:\n\n📘 Facebook profiles of all members are available on the Members page of our website.\n\nModerator links:\n• facebook.com/Syedafarzu\n• facebook.com/zakia.sultana.tanzil\n• facebook.com/Mohammad.1632\n\nFor general queries, reach out to any club member through our website!` },

  { k:['developer','ayan','sakin','who made','website developer','built','created'],
    a:`Website Developer:\n\n💻 Sakin Ayan built the CPI ICT Club website.\n\n• GitHub: github.com/ayan1906\n• LinkedIn: linkedin.com/in/ayan1906\n• Instagram: instagram.com/i_am_ayan19` },

  /* --- Thanks / Bye --- */
  { k:['thank','thanks','ধন্যবাদ','shukriya','শুকরিয়া'],
    a:`You're most welcome! 😊\n\nFeel free to ask anything else about CPI ICT Club. We're always here to help!` },

  { k:['bye','goodbye','বিদায়','see you','আল্লাহ হাফেজ','খোদা হাফেজ'],
    a:`Goodbye! 👋\n\nStay connected with CPI ICT Club and keep exploring technology. We look forward to seeing you at our next course or event! 🚀` },
];

/* ---------- SMART MATCH ---------- */
function getAnswer(q) {
  const lq = q.toLowerCase().trim();

  for (const entry of KB) {
    for (const kw of entry.k) {
      if (lq.includes(kw.toLowerCase())) return entry.a;
    }
  }

  /* Fuzzy: any word overlap */
  const words = lq.split(/\s+/).filter(w => w.length > 2);
  for (const entry of KB) {
    for (const kw of entry.k) {
      const kwWords = kw.toLowerCase().split(/\s+/);
      if (words.some(w => kwWords.some(k => k.includes(w) || w.includes(k)))) {
        return entry.a;
      }
    }
  }

  return `I'm not sure about that yet! 🤔\n\nFor detailed queries, you can:\n• Visit our website sections (Members, Events, Resources)\n• Contact any club member via Facebook\n• Reach out to our moderators directly\n\nTry asking about: members, courses, activities, joining, events, or resources!`;
}

/* ---------- BUILD HTML ---------- */
document.body.insertAdjacentHTML('beforeend', `
<button id="cpi-chat-fab" title="Chat with CPI ICT Club">
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
  </svg>
  <div id="cpi-chat-badge">1</div>
</button>

<div id="cpi-chat-window" class="cpi-hidden">
  <div id="cpi-chat-header">
    <div class="cpi-av">🤖</div>
    <div class="cpi-hinfo">
      <p>CPI ICT Club Assistant</p>
      <span><span class="cpi-online"></span>Offline AI · Always Available</span>
    </div>
    <button class="cpi-close-btn" id="cpi-close">✕</button>
  </div>

  <div id="cpi-chat-msgs"></div>

  <div id="cpi-suggs">
    <button class="cpi-s" onclick="cpiQ('Who are the club members?')">Members</button>
    <button class="cpi-s" onclick="cpiQ('What courses does the club offer?')">Courses</button>
    <button class="cpi-s" onclick="cpiQ('How can I join the club?')">How to join</button>
    <button class="cpi-s" onclick="cpiQ('What is coming in 2026?')">2026 plans</button>
    <button class="cpi-s" onclick="cpiQ('Who founded the club?')">History</button>
    <button class="cpi-s" onclick="cpiQ('Tell me about Graphics Design course')">Graphics Design</button>
    <button class="cpi-s" onclick="cpiQ('Tell me about Web Development course')">Web Dev</button>
    <button class="cpi-s" onclick="cpiQ('How to contact the club?')">Contact</button>
  </div>

  <div id="cpi-footer">
    <input id="cpi-inp" placeholder="Ask anything about CPI ICT Club..." autocomplete="off" />
    <button id="cpi-sbtn" title="Send">
      <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
    </button>
  </div>
  <div id="cpi-pw">🔒 100% Offline · No Internet Needed · CPI ICT Club</div>
</div>
`);

/* ---------- DOM REFS ---------- */
const fab   = document.getElementById('cpi-chat-fab');
const win   = document.getElementById('cpi-chat-window');
const msgs  = document.getElementById('cpi-chat-msgs');
const inp   = document.getElementById('cpi-inp');
const sbtn  = document.getElementById('cpi-sbtn');
const close = document.getElementById('cpi-close');
const badge = document.getElementById('cpi-chat-badge');
const suggs = document.getElementById('cpi-suggs');
let open    = false;

/* ---------- HELPERS ---------- */
function scroll(){ msgs.scrollTop = msgs.scrollHeight; }

function addMsg(text, role) {
  const row = document.createElement('div');
  row.className = 'cpi-row' + (role === 'user' ? ' cpi-u' : '');

  const av = document.createElement('div');
  av.className = 'cpi-mav' + (role === 'user' ? ' u' : '');
  av.textContent = role === 'user' ? 'You' : 'AI';

  const bub = document.createElement('div');
  bub.className = 'cpi-bub' + (role === 'user' ? ' u' : '');
  bub.innerHTML = text.replace(/\n/g,'<br>');

  if (role === 'user') { row.appendChild(bub); row.appendChild(av); }
  else { row.appendChild(av); row.appendChild(bub); }

  msgs.appendChild(row);
  scroll();
}

function showTyping() {
  const row = document.createElement('div');
  row.className = 'cpi-row'; row.id = 'cpi-typing';
  const av = document.createElement('div');
  av.className = 'cpi-mav'; av.textContent = 'AI';
  const bub = document.createElement('div');
  bub.className = 'cpi-bub';
  bub.innerHTML = '<div class="cpi-dots"><span></span><span></span><span></span></div>';
  row.appendChild(av); row.appendChild(bub);
  msgs.appendChild(row); scroll();
}

function removeTyping() {
  const t = document.getElementById('cpi-typing');
  if(t) t.remove();
}

/* ---------- SEND ---------- */
window.cpiQ = function(text) {
  text = (text || inp.value).trim();
  if (!text) return;
  inp.value = '';
  suggs.style.display = 'none';
  addMsg(text, 'user');
  sbtn.disabled = true;
  showTyping();

  /* Simulate natural thinking delay (400–900ms) */
  const delay = 400 + Math.floor(Math.random() * 500);
  setTimeout(function() {
    removeTyping();
    addMsg(getAnswer(text), 'assistant');
    sbtn.disabled = false;
    inp.focus();
  }, delay);
};

/* ---------- EVENTS ---------- */
fab.addEventListener('click', function() {
  open = !open;
  if (open) {
    win.classList.remove('cpi-hidden');
    badge.style.display = 'none';
    if (msgs.children.length === 0) {
      addMsg("👋 <strong>Hello! Welcome to CPI ICT Club.</strong><br><br>I'm your  AI assistant. I can answer questions about our members, courses, activities, events, and how to join.<br><br>Pick a topic below or type your question!", 'assistant');
    }
    setTimeout(function(){ inp.focus(); }, 300);
  } else {
    win.classList.add('cpi-hidden');
  }
});

close.addEventListener('click', function() {
  open = false;
  win.classList.add('cpi-hidden');
});

sbtn.addEventListener('click', function() { cpiQ(inp.value); });

inp.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); cpiQ(inp.value); }
});

/* Badge appears after 3s to attract attention */
setTimeout(function() {
  if (!open) { badge.style.display = 'flex'; }
}, 3000);

})();