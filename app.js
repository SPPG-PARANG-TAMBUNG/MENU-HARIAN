(() => {
  "use strict";
  const data = window.LABEL_DATA;
  if (!data) return console.warn("LABEL_DATA tidak ditemukan. Konten contoh dari index.html tetap ditampilkan.");

  const $ = (id) => document.getElementById(id);
  const setText = (id, v) => { const el = $(id); if (el && v != null) el.textContent = String(v); };
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  const renderMenu = (items) => {
    const list = $("menu-list");
    if (!list || !Array.isArray(items)) return;
    list.replaceChildren(...items.map((it, i) => {
      const li = el("li", "cell", it.value);
      li.style.setProperty("--i", i);
      return li;
    }));
  };

  const renderGroup = (group) => {
    const main = group.items.find((x) => x.highlight) || group.items[0];
    const rest = group.items.filter((x) => x !== main);
    const energy = $("nutrition-energy");
    energy.replaceChildren(el("b", "", main.value), el("span", "", `${main.unit} ${main.label.toLowerCase()}`));
    $("nutrition-grid").replaceChildren(...rest.map((x) => {
      const row = el("div");
      row.append(el("dt", "", x.label), el("dd", "", `${x.value} ${x.unit}`));
      return row;
    }));
  };

  const renderGroups = (groups) => {
    const box = $("portion-selector");
    if (!box || !Array.isArray(groups) || !groups.length) return;
    const buttons = groups.map((g, i) => {
      const b = el("button", "tab", g.name);
      b.type = "button";
      b.addEventListener("click", () => select(i));
      return b;
    });
    const select = (idx) => {
      buttons.forEach((b, i) => b.setAttribute("aria-pressed", String(i === idx)));
      renderGroup(groups[idx]);
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
