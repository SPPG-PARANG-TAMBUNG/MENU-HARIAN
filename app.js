(() => {
  "use strict";
  const data = window.LABEL_DATA;
  if (!data) {
    console.warn("LABEL_DATA tidak ditemukan. Konten contoh dari index.html tetap ditampilkan.");
    return;
  }

  const $ = (id) => document.getElementById(id);
  const setText = (id, v) => {
    const el = $(id);
    if (el && v != null) el.textContent = String(v);
  };

  const parseIdNum = (str) => {
    if (typeof str === "number") return str;
    if (!str) return 0;
    const cleaned = String(str).replace(/\./g, "").replace(",", ".");
    const num = parseFloat(cleaned);
    return Number.isFinite(num) ? num : 0;
  };

  const formatIdNum = (num, decimals = 2) => {
    return num.toFixed(decimals).replace(".", ",");
  };

  // Tactile Ripple Generator on Click/Tap
  const spawnRipple = (container, evt) => {
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = evt && evt.clientX ? evt.clientX - rect.left : rect.width / 2;
    const y = evt && evt.clientY ? evt.clientY - rect.top : rect.height / 2;
    const ripple = document.createElement("span");
    ripple.className = "tap-ripple";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    container.appendChild(ripple);
    setTimeout(() => ripple.remove(), 560);
  };

  // Template Sekat Universal beserta Palet Aura Background Dinamis
  const TRAY_SLOTS = [
    {
      sourceIndex: 3, // Baris ke-4 di content.js: Sayuran
      className: "cell-top-left",
      tag: "Sayuran",
      kicker: "Sayuran & Serat",
      aura1: "rgba(59, 135, 40, 0.25)",
      aura2: "rgba(10, 33, 71, 0.14)",
      aura3: "rgba(184, 137, 47, 0.18)",
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
      getDesc: (name) =>
        name.toLowerCase().includes("labu siam") || name.toLowerCase().includes("jagung")
          ? `${name} memadukan labu siam dan jagung sebagai sumber serat, vitamin, mineral, serta karbohidrat untuk melengkapi sajian harian.`
          : `${name} sebagai sumber serat pangan, vitamin, dan mineral untuk mendukung pencernaan serta menjaga daya tahan tubuh.`,
    },
    {
      sourceIndex: 4, // Baris ke-5 di content.js: Buah
      className: "cell-top-center",
      tag: "Buah Segar",
      kicker: "Buah & Vitamin",
      aura1: "rgba(220, 38, 38, 0.2)",
      aura2: "rgba(184, 137, 47, 0.22)",
      aura3: "rgba(59, 135, 40, 0.16)",
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>`,
      getDesc: (name) =>
        name.toLowerCase().includes("semangka")
          ? `${name} mengandung banyak air dan memberikan kesegaran untuk membantu melengkapi kebutuhan cairan serta asupan buah harian.`
          : `${name} sebagai sumber vitamin alami dan antioksidan untuk melengkapi asupan gizi harian.`,
    },
    {
      sourceIndex: 2, // Baris ke-3 di content.js: Protein Nabati
      className: "cell-top-right",
      tag: "Protein Nabati",
      kicker: "Lauk Nabati",
      aura1: "rgba(212, 155, 39, 0.26)",
      aura2: "rgba(59, 135, 40, 0.18)",
      aura3: "rgba(10, 33, 71, 0.14)",
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>`,
      getDesc: (name) =>
        name.toLowerCase().includes("martabak tahu")
          ? `${name} berbahan dasar tahu yang menyediakan protein nabati untuk membantu mendukung pertumbuhan dan pemeliharaan jaringan tubuh.`
          : `${name} melengkapi kebutuhan protein nabati dan zat gizi mikro untuk mendukung pertumbuhan serta pemeliharaan tubuh.`,
    },
    {
      sourceIndex: 0, // Baris ke-1 di content.js: Karbohidrat / Makanan Pokok
      className: "cell-bottom-left",
      tag: "Karbohidrat",
      kicker: "Makanan Pokok",
      aura1: "rgba(184, 137, 47, 0.26)",
      aura2: "rgba(10, 33, 71, 0.18)",
      aura3: "rgba(59, 135, 40, 0.16)",
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16a8 8 0 0 1-8 8 8 8 0 0 1-8-8Z"/><path d="M6 9c1.5-2 4-3 6-3s4.5 1 6 3"/></svg>`,
      getDesc: (name) =>
        `${name} sebagai sumber karbohidrat utama untuk menyediakan energi bagi aktivitas dan konsentrasi sepanjang hari.`,
    },
    {
      sourceIndex: 1, // Baris ke-2 di content.js: Protein Hewani
      className: "cell-bottom-right",
      tag: "Protein Hewani",
      kicker: "Lauk Utama",
      aura1: "rgba(217, 119, 6, 0.24)",
      aura2: "rgba(10, 33, 71, 0.2)",
      aura3: "rgba(59, 135, 40, 0.2)",
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17h18"/><path d="M5 17a7 7 0 0 1 14 0"/><path d="M12 7v3"/><circle cx="12" cy="6" r="1"/></svg>`,
      getDesc: (name) =>
        name.toLowerCase().includes("ayam bumbu rendang")
          ? `${name} menjadi sumber protein hewani untuk membantu mendukung pertumbuhan dan pemeliharaan jaringan tubuh, dengan bumbu rendang yang kaya rempah.`
          : name.toLowerCase().includes("telur")
            ? `${name} menyediakan protein hewani untuk mendukung pertumbuhan dan pemeliharaan jaringan tubuh.`
            : `${name} sebagai sumber protein hewani untuk membantu mendukung pertumbuhan dan pemeliharaan jaringan tubuh.`,
    },
  ];

  const getNutrientMax = (label) => {
    const l = String(label).toLowerCase();
    if (l.includes("protein")) return 35;
    if (l.includes("karbo")) return 125;
    if (l.includes("lemak")) return 35;
    if (l.includes("serat")) return 6;
    return 100;
  };

  let currentEnergy = 0;
  const previousRowValues = {};
  let activeSlotIndex = 3;
  let activeGroupIndex = 0;

  const animateValue = (el, fromVal, toVal, unitSuffix = "", duration = 420) => {
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || Math.abs(toVal - fromVal) < 0.01) {
      el.textContent = unitSuffix
        ? `${formatIdNum(toVal, 2)} ${unitSuffix}`
        : formatIdNum(toVal, 2);
      return;
    }
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = fromVal + (toVal - fromVal) * eased;
      el.textContent = unitSuffix
        ? `${formatIdNum(current, 2)} ${unitSuffix}`
        : formatIdNum(current, 2);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const renderMenu = (items) => {
    const list = $("menu-list");
    if (!list || !Array.isArray(items)) return;

    const rawValues = items.map((x) => x.value);

    const renderedSlots = TRAY_SLOTS.map((slot, i) => {
      const dishName = rawValues[slot.sourceIndex] || rawValues[i] || slot.tag;
      return { ...slot, dishName, index: i };
    });

    const selectSlot = (idx, evt) => {
      activeSlotIndex = idx;
      const chosen = renderedSlots[idx];
      Array.from(list.children).forEach((li, i) => {
        li.classList.toggle("is-active", i === idx);
        if (i === idx && evt) spawnRipple(li, evt);
      });

      // Shift Background Aurora Colors to match the selected compartment
      document.documentElement.style.setProperty("--aura-1", chosen.aura1);
      document.documentElement.style.setProperty("--aura-2", chosen.aura2);
      document.documentElement.style.setProperty("--aura-3", chosen.aura3);

      const detailCard = $("cell-detail");
      if (detailCard) {
        detailCard.classList.remove("is-switching");
        void detailCard.offsetWidth;
        detailCard.classList.add("is-switching");
      }

      const iconBox = $("detail-icon");
      if (iconBox) iconBox.innerHTML = chosen.icon;
      setText("detail-kicker", chosen.kicker);
      setText("detail-title", chosen.dishName);
      setText("detail-desc", chosen.getDesc(chosen.dishName));
    };

    const nodes = renderedSlots.map((slot, i) => {
      const li = document.createElement("li");
      li.className = `cell ${slot.className}${i === activeSlotIndex ? " is-active" : ""}`;
      li.style.setProperty("--i", String(i));
      li.tabIndex = 0;
      li.setAttribute("role", "button");
      li.setAttribute("aria-label", `${slot.tag}: ${slot.dishName}`);

      li.innerHTML = `
        <div class="cell-head">
          <span class="cell-tag">${slot.tag}</span>
          <span class="cell-icon" aria-hidden="true">${slot.icon}</span>
        </div>
        <div class="cell-name">${slot.dishName}</div>
      `;

      li.addEventListener("click", (e) => selectSlot(i, e));
      li.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectSlot(i);
        }
      });
      return li;
    });

    list.replaceChildren(...nodes);
    selectSlot(activeSlotIndex);
  };

  // Interactive 3D Tilt & Specular Shine on the Ompreng Tray Frame
  const initTrayTilt = () => {
    const frame = document.querySelector(".tray-frame");
    if (!frame) return;

    frame.addEventListener("pointermove", (e) => {
      const rect = frame.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      frame.style.setProperty("--mx", `${x}px`);
      frame.style.setProperty("--my", `${y}px`);

      if (window.innerWidth >= 640) {
        const rx = ((0.5 - y / rect.height) * 5).toFixed(2);
        const ry = ((x / rect.width - 0.5) * 5).toFixed(2);
        frame.style.setProperty("--rx", `${rx}deg`);
        frame.style.setProperty("--ry", `${ry}deg`);
      }
    });

    frame.addEventListener("pointerleave", () => {
      frame.style.setProperty("--rx", "0deg");
      frame.style.setProperty("--ry", "0deg");
    });
  };

  // Interactive 60fps Floating Nutrition Particles Background Canvas
  const initLivingBackground = () => {
    window.addEventListener(
      "pointermove",
      (e) => {
        document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
        document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
      },
      { passive: true }
    );

    const canvas = $("bg-canvas");
    if (!canvas) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener(
      "resize",
      () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      },
      { passive: true }
    );

    const pointer = { x: -9999, y: -9999 };
    window.addEventListener(
      "pointermove",
      (e) => {
        pointer.x = e.clientX;
        pointer.y = e.clientY;
      },
      { passive: true }
    );
    window.addEventListener(
      "pointerleave",
      () => {
        pointer.x = -9999;
        pointer.y = -9999;
      },
      { passive: true }
    );

    const colors = [
      "rgba(184, 137, 47, 0.26)",
      "rgba(10, 33, 71, 0.16)",
      "rgba(59, 135, 40, 0.22)",
    ];

    const count = Math.min(Math.max(Math.floor(width / 38), 18), 36);
    const particles = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 2 + Math.random() * 4.5,
      vx: (Math.random() - 0.5) * 0.35,
      vy: -0.18 - Math.random() * 0.35,
      color: colors[i % colors.length],
      phase: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.phase += 0.015;
        p.x += p.vx + Math.sin(p.phase) * 0.18;
        p.y += p.vy;

        // Gentle interactive repulsion from pointer
        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const distSq = dx * dx + dy * dy;
        if (distSq < 16000 && distSq > 1) {
          const dist = Math.sqrt(distSq);
          const force = (126 - dist) / 126;
          p.x += (dx / dist) * force * 1.6;
          p.y += (dy / dist) * force * 1.6;
        }

        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
      requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);
  };

  const renderGroup = (group) => {
    const main = group.items.find((x) => x.highlight) || group.items[0];
    const rest = group.items.filter((x) => x !== main);

    setText("active-group-label", group.name);

    const energy = $("nutrition-energy");
    if (energy && main) {
      let b = energy.querySelector("b");
      let s = energy.querySelector("span");
      if (!b || !s) {
        b = document.createElement("b");
        s = document.createElement("span");
        energy.replaceChildren(b, s);
      }
      const nextVal = parseIdNum(main.value);
      energy.classList.add("is-counting");
      setTimeout(() => energy.classList.remove("is-counting"), 280);
      animateValue(b, currentEnergy || nextVal, nextVal, "", 420);
      currentEnergy = nextVal;
      s.textContent = `${main.unit} ${main.label.toLowerCase()}`;
    }

    // Update Segmented Macro Caloric Bar
    const protItem = rest.find((x) => x.label.toLowerCase().includes("protein"));
    const carbItem = rest.find((x) => x.label.toLowerCase().includes("karbo"));
    const fatItem = rest.find((x) => x.label.toLowerCase().includes("lemak"));

    const protCal = (protItem ? parseIdNum(protItem.value) : 0) * 4;
    const carbCal = (carbItem ? parseIdNum(carbItem.value) : 0) * 4;
    const fatCal = (fatItem ? parseIdNum(fatItem.value) : 0) * 9;
    const totalCal = protCal + carbCal + fatCal || 1;

    const cPct = Math.round((carbCal / totalCal) * 100);
    const fPct = Math.round((fatCal / totalCal) * 100);
    const pPct = Math.max(0, 100 - cPct - fPct);

    const pCarb = $("piece-carb");
    const pFat = $("piece-fat");
    const pProt = $("piece-prot");
    if (pCarb) pCarb.style.flexGrow = String(cPct);
    if (pFat) pFat.style.flexGrow = String(fPct);
    if (pProt) pProt.style.flexGrow = String(pPct);
    setText("macro-summary-text", `Karbohidrat ${cPct}% · Lemak ${fPct}% · Protein ${pPct}%`);

    const grid = $("nutrition-grid");
    if (grid) {
      const rowNodes = rest.map((x, idx) => {
        const val = parseIdNum(x.value);
        const prevVal = previousRowValues[x.label] ?? val;
        previousRowValues[x.label] = val;

        const max = getNutrientMax(x.label);
        const ratio = Math.min(Math.max(val / max, 0.1), 1);

        const row = document.createElement("div");
        row.style.setProperty("--row-i", String(idx));

        const line = document.createElement("div");
        line.className = "row-line";
        const dt = document.createElement("dt");
        dt.textContent = x.label;
        const dd = document.createElement("dd");
        line.append(dt, dd);

        const bar = document.createElement("div");
        bar.className = "row-bar";
        bar.setAttribute("aria-hidden", "true");
        const fill = document.createElement("div");
        fill.className = "row-bar-fill";
        fill.style.setProperty("--ratio", "0.05");
        bar.appendChild(fill);

        row.append(line, bar);

        animateValue(dd, prevVal, val, x.unit, 420);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            fill.style.setProperty("--ratio", ratio.toFixed(3));
          });
        });

        return row;
      });

      grid.replaceChildren(...rowNodes);
    }
  };

  const renderGroups = (groups) => {
    const box = $("portion-selector");
    if (!box || !Array.isArray(groups) || !groups.length) return;
    const buttons = groups.map((g, i) => {
      const b = document.createElement("button");
      b.className = "tab";
      b.type = "button";
      b.textContent = g.name;
      b.addEventListener("click", (e) => {
        spawnRipple(b, e);
        select(i);
      });
      return b;
    });
    const select = (idx) => {
      activeGroupIndex = idx;
      buttons.forEach((b, i) => b.setAttribute("aria-pressed", String(i === idx)));
      renderGroup(groups[idx]);
    };
    box.replaceChildren(...buttons);
    select(0);
  };

  // Share / Copy Menu Summary Action
  const initCopyMenu = () => {
    const btn = $("copy-menu-btn");
    const toast = $("copy-toast");
    if (!btn) return;

    btn.addEventListener("click", async () => {
      const menuLines = (data.menu || []).map((m, i) => `${i + 1}. ${m.value}`).join("\n");
      const g =
        data.nutrition &&
        data.nutrition.groups &&
        (data.nutrition.groups[activeGroupIndex] || data.nutrition.groups[0]);
      const nutriLines = g
        ? g.items.map((it) => `- ${it.label}: ${it.value} ${it.unit}`).join("\n")
        : "";

      const text = [
        `*${data.sppg.name}*`,
        `${data.page.programName} — ${data.serving.date}`,
        "",
        `*Isi Ompreng Hari Ini:*`,
        menuLines,
        "",
        `*Kandungan Gizi (${g ? g.name : "Per Porsi"}):*`,
        nutriLines,
        "",
        `⚠️ ${data.safety.consumption}`,
      ].join("\n");

      try {
        await navigator.clipboard.writeText(text);
      } catch {
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }

      if (toast) {
        toast.hidden = false;
        setTimeout(() => {
          toast.hidden = true;
        }, 2500);
      }
    });
  };

  // Update SEO & Structured Data (Schema.org JSON-LD)
  document.title = data.page.title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta && data.page.description) meta.setAttribute("content", data.page.description);

  const schemaEl = $("schema-jsonld");
  if (schemaEl) {
    schemaEl.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Menu",
      name: `${data.page.heading} — ${data.serving.date}`,
      description: data.page.description,
      provider: {
        "@type": "GovernmentOrganization",
        name: data.sppg.name,
        address: data.sppg.address,
      },
      hasMenuItem: (data.menu || []).map((m) => ({
        "@type": "MenuItem",
        name: m.value,
      })),
    });
  }

  setText("program-name", data.page.programName);
  setText("page-title", data.page.heading);
  setText("hero-intro", data.page.intro);
  const date = $("serving-date");
  if (date) {
    date.textContent = data.serving.date;
    date.setAttribute("datetime", data.serving.machineDate);
  }

  renderMenu(data.menu);
  initTrayTilt();
  initLivingBackground();
  initCopyMenu();
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
