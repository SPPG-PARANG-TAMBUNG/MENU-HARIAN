(() => {
  "use strict";
  const data = window.LABEL_DATA;
  if (!data) return console.warn("LABEL_DATA tidak ditemukan. Konten contoh dari index.html tetap ditampilkan.");

  const $ = (id) => document.getElementById(id);
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const setText = (id, v) => { const n = $(id); if (n && v != null) n.textContent = String(v); };
  const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; };
  const num = (s) => parseFloat(String(s).replace(/\./g, "").replace(",", "."));
  const decimals = (s) => (String(s).split(",")[1] || "").length;
  const fmt = (n, d) => n.toLocaleString("id-ID", { minimumFractionDigits: d, maximumFractionDigits: d });

  /* Menu: urutan 1 nasi, 2 lauk hewani, 3 lauk nabati, 4 sayur, 5 buah */
  const ROLES = ["Karbohidrat", "Lauk hewani", "Lauk nabati", "Sayur", "Buah"];
  /* Ilustrasi makanan per sekat (mengikuti urutan menu) */
  const svg = (body) => `<svg class="food" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><ellipse cx="50" cy="82" rx="36" ry="7" fill="rgba(10,33,71,.18)"/>${body}</svg>`;
  const STEAM = `<g class="steam"><path d="M38 20c-5-6 5-10 0-17"/><path d="M52 16c-5-6 5-10 0-17"/><path d="M66 20c-5-6 5-10 0-17"/></g>`;
  const FOOD = [
    svg(`<path d="M12 78C12 46 30 30 50 30s38 16 38 48z" fill="#fff" stroke="#c7d0d7" stroke-width="2"/><g fill="#e6ecf0"><ellipse cx="34" cy="54" rx="5" ry="2.4" transform="rotate(-25 34 54)"/><ellipse cx="52" cy="44" rx="5" ry="2.4" transform="rotate(15 52 44)"/><ellipse cx="62" cy="60" rx="5" ry="2.4" transform="rotate(-10 62 60)"/><ellipse cx="44" cy="66" rx="5" ry="2.4" transform="rotate(20 44 66)"/><ellipse cx="73" cy="69" rx="5" ry="2.4"/></g>${STEAM}`),
    svg(`<path d="M18 64C14 42 34 28 56 32c22 4 30 22 24 38-6 14-34 14-46 8-8-4-14-8-16-14z" fill="#d98a2f"/><path d="M26 58C26 44 40 36 56 38" fill="none" stroke="#f0b25a" stroke-width="5" stroke-linecap="round"/><g fill="#b86a1c"><circle cx="62" cy="60" r="3"/><circle cx="46" cy="66" r="2.5"/><circle cx="70" cy="48" r="2"/></g>${STEAM}`),
    svg(`<rect x="14" y="42" width="36" height="36" rx="8" fill="#e6b93a" transform="rotate(-8 32 60)"/><rect x="50" y="36" width="36" height="36" rx="8" fill="#f0cb55" transform="rotate(10 68 54)"/><path d="M22 54h16M58 48h16" stroke="#c99a1e" stroke-width="3" stroke-linecap="round"/>${STEAM}`),
    svg(`<path d="M50 78C26 70 20 46 30 28c22 4 28 26 20 50z" fill="#5fae3a"/><path d="M50 78C74 70 80 46 70 28c-22 4-28 26-20 50z" fill="#7cc653"/><path d="M50 78C40 60 44 40 50 26c8 14 10 36 0 52z" fill="#4a9a2e"/><circle cx="76" cy="74" r="6" fill="#f08a2c"/>${STEAM}`),
    svg(`<path d="M50 36C30 24 14 42 20 64c5 16 20 20 30 14 10 6 25 2 30-14 6-22-10-40-30-28z" fill="#e0485f"/><path d="M50 36c0-10 4-16 12-20" stroke="#6b4a2b" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M54 26c8-8 18-6 20-4-2 8-12 12-20 4z" fill="#5fae3a"/><path d="M30 52c0-8 6-12 10-12" stroke="#f08a98" stroke-width="4" fill="none" stroke-linecap="round"/>`),
  ];

  const renderMenu = (items) => {
    const list = $("menu-list");
    if (!list || !Array.isArray(items)) return;
    const known = items.length === 5;
    list.dataset.count = items.length;
    if ($("tray-hint")) $("tray-hint").hidden = !known;
    list.replaceChildren(...items.map((it, i) => {
      const li = el("li", "cell");
      const btn = el("button", "cell-in", it.value);
      btn.type = "button";
      if (known) {
        btn.setAttribute("aria-pressed", "false");
        btn.append(el("span", "tag", ROLES[i]));
        btn.addEventListener("click", () => btn.setAttribute("aria-pressed", String(li.classList.toggle("on"))));
      }
      li.style.setProperty("--i", i);
      if (known) li.insertAdjacentHTML("afterbegin", FOOD[i]);
      li.append(btn);
      return li;
    }));
    const glow = (e) => {
      const c = e.target.closest(".cell");
      if (!c) return;
      const r = c.getBoundingClientRect();
      c.style.setProperty("--mx", `${e.clientX - r.left}px`);
      c.style.setProperty("--my", `${e.clientY - r.top}px`);
      if (e.type === "pointerdown") { c.classList.add("lit"); setTimeout(() => c.classList.remove("lit"), 700); }
    };
    list.addEventListener("pointermove", glow);
    list.addEventListener("pointerdown", glow);
  };

  /* Gizi: angka berhitung naik, batang membandingkan antar porsi */
  const countTo = (node, to, d) => {
    const from = parseFloat(node.dataset.v || "0");
    node.dataset.v = to;
    cancelAnimationFrame(node._r);
    if (reduce) { node.textContent = fmt(to, d); return; }
    const t0 = performance.now();
    const step = (t) => {
      const k = Math.min((t - t0) / 700, 1);
      node.textContent = fmt(from + (to - from) * (1 - Math.pow(1 - k, 3)), d);
      if (k < 1) node._r = requestAnimationFrame(step);
    };
    node._r = requestAnimationFrame(step);
  };

  const renderGroups = (groups) => {
    const box = $("portion-selector");
    if (!box || !Array.isArray(groups) || !groups.length) return;
    const max = {};
    groups.forEach((g) => g.items.forEach((x) => { max[x.label] = Math.max(max[x.label] || 0, num(x.value)); }));
    const buttons = groups.map((g, i) => {
      const b = el("button", "tab", g.name);
      b.type = "button";
      b.addEventListener("click", () => select(i));
      return b;
    });
    const select = (idx) => {
      buttons.forEach((b, i) => b.setAttribute("aria-pressed", String(i === idx)));
      const items = groups[idx].items;
      const main = items.find((x) => x.highlight) || items[0];
      countTo($("energy-num"), num(main.value), decimals(main.value));
      setText("energy-unit", `${main.unit} ${main.label.toLowerCase()}`);
      const rows = items.filter((x) => x !== main).map((x, i) => {
        const row = el("div", "row");
        const track = el("span", "track");
        const fill = el("i");
        row.style.setProperty("--i", i);
        track.append(fill);
        row.append(el("dt", "", x.label), el("dd", "", `${x.value} ${x.unit}`), track);
        const w = `${Math.round((num(x.value) / (max[x.label] || 1)) * 100)}%`;
        requestAnimationFrame(() => requestAnimationFrame(() => { fill.style.width = w; }));
        return row;
      });
      $("nutrition-grid").replaceChildren(...rows);
    };
    box.replaceChildren(...buttons);
    select(0);
  };

  document.title = data.page.title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta && data.page.description) meta.setAttribute("content", data.page.description);
  setText("program-name", data.page.programName);
  setText("page-title", data.page.heading);
  setText("hero-intro", data.page.intro);
  const date = $("serving-date");
  if (date) { date.textContent = data.serving.date; date.setAttribute("datetime", data.serving.machineDate); }

  renderMenu(data.menu);
  renderGroups(data.nutrition.groups);
  setText("safe-consumption-message", data.safety.consumption);
  setText("allergy-message", data.safety.allergy);

  setText("brand-name", data.sppg.name);
  setText("identity-title", data.sppg.name);
  setText("identity-unit", data.sppg.unit);
  setText("identity-address", data.sppg.address);
  setText("instagram-handle", data.sppg.instagramLabel);
  const ig = $("instagram-link");
  if (ig && data.sppg.instagramUrl) ig.href = data.sppg.instagramUrl;
  setText("last-updated", data.sppg.lastUpdated);
})();
