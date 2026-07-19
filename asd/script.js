// ===== Mobile nav toggle =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => navLinks.classList.remove("open"))
  );
}

// ===== Quick menu (3-line box) dropdown =====
const menuBox = document.getElementById("menuBox");
const menuDropdown = document.getElementById("menuDropdown");

if (menuBox && menuDropdown) {
  menuBox.addEventListener("click", (e) => {
    e.stopPropagation();
    menuDropdown.hidden = !menuDropdown.hidden;
    menuBox.setAttribute("aria-expanded", String(!menuDropdown.hidden));
  });
  document.addEventListener("click", (e) => {
    if (!menuDropdown.hidden && !menuDropdown.contains(e.target)) {
      menuDropdown.hidden = true;
      menuBox.setAttribute("aria-expanded", "false");
    }
  });
}

// ===== Shared helpers =====
function initials(name) {
  return name.split(" ").map((w) => w[0]).join("").toUpperCase();
}

function avatarStyle(t) {
  return `background: linear-gradient(135deg, ${t.gradient[0]}, ${t.gradient[1]})`;
}

function stars(rating) {
  return `<span class="rating">★ ${rating.toFixed(1)}</span>`;
}

function priceRange(t) {
  const prices = t.courses.map((c) => c.price).concat(t.discord ? [t.discord.price] : []);
  const min = Math.min(...prices);
  return `From $${min}`;
}

// ===== Homepage: stats + trader grid =====
const traderGrid = document.getElementById("traderGrid");

if (traderGrid) {
  // Hero stats
  const totalCourses = TRADERS.reduce((n, t) => n + t.courses.length, 0);
  const totalClips = TRADERS.reduce((n, t) => n + t.clips.length, 0);
  document.getElementById("statTraders").textContent = TRADERS.length;
  document.getElementById("statCourses").textContent = totalCourses;
  document.getElementById("statClips").textContent = totalClips;

  function traderCard(t) {
    return `
      <a class="trader-card" href="trader.html?id=${t.id}" data-market="${t.market}">
        <div class="trader-card-top">
          <div class="avatar" style="${avatarStyle(t)}">${initials(t.name)}</div>
          <div>
            <h3>${t.name}</h3>
            <p class="handle">${t.handle}</p>
          </div>
          ${stars(t.rating)}
        </div>
        <p class="trader-tagline">${t.tagline}</p>
        <div class="trader-tags">
          <span class="tag">${t.market}</span>
          <span class="tag tag-dim">${t.style}</span>
        </div>
        <div class="trader-card-footer">
          <span class="clips-count">▶ ${t.clips.length} free clips</span>
          <span class="from-price">${priceRange(t)}</span>
        </div>
      </a>`;
  }

  function renderGrid(market) {
    const list = market === "all" ? TRADERS : TRADERS.filter((t) => t.market === market);
    traderGrid.innerHTML = list.map(traderCard).join("");
  }

  renderGrid("all");

  // Filter chips
  document.querySelectorAll("#filters .chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll("#filters .chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      renderGrid(chip.dataset.market);
    });
  });
}

// ===== Trader profile page =====
const traderPage = document.getElementById("traderPage");

if (traderPage) {
  const id = new URLSearchParams(location.search).get("id");
  const t = TRADERS.find((x) => x.id === id) || TRADERS[0];

  document.title = `${t.name} — TradersZone`;

  const clipCards = t.clips
    .map(
      (c, i) => `
      <div class="clip" style="${avatarStyle(t)}">
        <div class="clip-overlay">
          <button class="play-btn" data-clip="${i}" aria-label="Play clip">▶</button>
          <span class="clip-length">${c.length}</span>
        </div>
        <p class="clip-title">${c.title}</p>
      </div>`
    )
    .join("");

  const courseCards = t.courses
    .map(
      (c) => `
      <article class="card">
        <div class="card-tag">Course</div>
        <h3>${c.name}</h3>
        <p class="card-desc">${c.desc}</p>
        <div class="card-footer">
          <span class="price">$${c.price}</span>
          <a href="#" class="btn btn-primary buy-btn">Get access</a>
        </div>
      </article>`
    )
    .join("");

  const discordCard = t.discord
    ? `
      <article class="card card-featured">
        <div class="card-tag tag-accent">Discord community</div>
        <h3>${t.discord.name}</h3>
        <ul class="card-list">
          ${t.discord.perks.map((p) => `<li>${p}</li>`).join("")}
        </ul>
        <div class="card-footer">
          <span class="price">$${t.discord.price}<span class="price-period">/mo</span></span>
          <a href="#" class="btn btn-primary buy-btn">Join community</a>
        </div>
      </article>`
    : "";

  traderPage.innerHTML = `
    <section class="profile-hero">
      <div class="hero-glow"></div>
      <div class="container profile-inner">
        <div class="avatar avatar-lg" style="${avatarStyle(t)}">${initials(t.name)}</div>
        <div class="profile-info">
          <h1>${t.name} <span class="handle">${t.handle}</span></h1>
          <p class="trader-tagline">${t.tagline}</p>
          <div class="trader-tags">
            <span class="tag">${t.market}</span>
            <span class="tag tag-dim">${t.style}</span>
            ${stars(t.rating)}
          </div>
        </div>
        <div class="profile-stats">
          <div class="stat"><strong>${t.years} yrs</strong><span>Trading</span></div>
          <div class="stat"><strong>${t.members.toLocaleString()}</strong><span>Members</span></div>
          <div class="stat"><strong>${t.clips.length}</strong><span>Free clips</span></div>
        </div>
      </div>
    </section>

    <section class="section" id="clips">
      <div class="container">
        <p class="section-kicker">Free previews</p>
        <h2>Watch how ${t.name.split(" ")[0]} trades.</h2>
        <p class="section-sub">Real clips from the course and community — judge the style before you join.</p>
        <div class="cards-3 clip-grid">${clipCards}</div>
      </div>
    </section>

    <section class="section section-alt" id="offerings">
      <div class="container">
        <p class="section-kicker">Offerings</p>
        <h2>Join ${t.name.split(" ")[0]}'s world.</h2>
        <p class="section-sub">All purchases go through TradersZone — one trusted checkout, and we're here if anything goes wrong.</p>
        <div class="cards-3">
          ${courseCards}
          ${discordCard}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container container-narrow">
        <p class="section-kicker">About</p>
        <h2>Who is ${t.name}?</h2>
        <p class="bio">${t.bio}</p>
      </div>
    </section>
  `;

  // Clip play buttons — placeholder until real videos are hooked up
  traderPage.querySelectorAll(".play-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Preview clips are placeholders for now — real videos get embedded here.");
    });
  });

  // Buy buttons — placeholder until checkout exists
  traderPage.querySelectorAll(".buy-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Checkout isn't connected yet — this is where the TradersZone purchase flow will go.");
    });
  });
}
