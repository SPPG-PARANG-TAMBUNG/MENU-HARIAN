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

  /* Menu: tiap sekat = nama kelompok (kategori) + menu hari ini (value) */
  const renderMenu = (items) => {
    const list = $("menu-list");
    if (!list || !Array.isArray(items)) return;
    list.dataset.count = items.length;
    list.replaceChildren(...items.map((it, i) => {
      const li = el("li", "cell");
      li.style.setProperty("--i", i);
      if (it.kategori) li.append(el("span", "cat", it.kategori));
      li.append(el("span", "name", it.value));
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
