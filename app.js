(() => {
  "use strict";

  const root = document.documentElement;
  const data = window.LABEL_DATA;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (!data) {
    console.warn("LABEL_DATA tidak ditemukan. Konten contoh dari index.html tetap ditampilkan.");
    root.classList.add("is-ready");
    return;
  }
  if (!reduceMotion) root.classList.add("motion-ok");

  /* ---------------------------------------------------------
     Utilitas
     --------------------------------------------------------- */
  const $ = (id) => document.getElementById(id);
  const setText = (id, v) => {
    const el = $(id);
    if (el && v != null) el.textContent = String(v);
  };
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };
  const parseIdNum = (str) => {
    if (typeof str === "number") return str;
    if (!str) return 0;
    const num = parseFloat(String(str).replace(/\./g, "").replace(",", "."));
    return Number.isFinite(num) ? num : 0;
  };
  const formatIdNum = (num, d = 2) => num.toFixed(d).replace(".", ",");
  const buzz = (ms = 8) => {
    try {
      if (navigator.vibrate) navigator.vibrate(ms);
    } catch {
      /* abaikan */
    }
  };
  const spawnRipple = (host, evt) => {
    if (!host || reduceMotion) return;
    const r = host.getBoundingClientRect();
    const x = evt && evt.clientX ? evt.clientX - r.left : r.width / 2;
    const y = evt && evt.clientY ? evt.clientY - r.top : r.height / 2;
    const s = el("span", "tap-ripple");
    s.style.left = `${x}px`;
    s.style.top = `${y}px`;
    host.appendChild(s);
    setTimeout(() => s.remove(), 700);
  };
  const animateValue = (node, from, to, unit = "", duration = 700) => {
    if (!node) return;
    const fmt = (v) => (unit ? `${formatIdNum(v)} ${unit}` : formatIdNum(v));
    if (reduceMotion || Math.abs(to - from) < 0.005) {
      node.textContent = fmt(to);
      return;
    }
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const e = 1 - Math.pow(1 - p, 4);
      node.textContent = fmt(from + (to - from) * e);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const splitWords = (node) => {
    if (!node) return;
    const words = node.textContent.trim().split(/\s+/);
    node.setAttribute("aria-label", node.textContent.trim());
    node.replaceChildren(
      ...words.flatMap((w, i) => {
        const outer = el("span", "w");
        outer.setAttribute("aria-hidden", "true");
        outer.style.setProperty("--wi", String(i));
        outer.appendChild(el("span", "", w));
        return i < words.length - 1 ? [outer, document.createTextNode(" ")] : [outer];
      })
    );
  };

  /* ---------------------------------------------------------
     Motion graphic abstrak per kategori (bukan ikon makanan)
     --------------------------------------------------------- */
  const MARKS = {
    // energi: gelombang cincin memancar
    karbo: `<svg viewBox="0 0 84 84"><g fill="none" stroke="#fff" stroke-width="3">
      <circle cx="42" cy="42" r="12"><animate attributeName="r" values="10;36" dur="2.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="2.4s" repeatCount="indefinite"/></circle>
      <circle cx="42" cy="42" r="12"><animate attributeName="r" values="10;36" dur="2.4s" begin="1.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="2.4s" begin="1.2s" repeatCount="indefinite"/></circle>
      </g><circle cx="42" cy="42" r="8" fill="#fff"/></svg>`,
    // struktur: kisi heksagon berputar
    hewani: `<svg viewBox="0 0 84 84"><g transform="translate(42 42)" fill="none" stroke="#fff" stroke-width="2.6" stroke-linejoin="round">
      <g><animateTransform attributeName="transform" type="rotate" values="0;60" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines=".6 0 .3 1"/>
      <path d="M-1 -9.5 l8.66 -5 l8.66 5 v10 l-8.66 5 l-8.66 -5z"/>
      <path d="M-18.3 -9.5 l8.66 -5 l8.66 5 v10 l-8.66 5 l-8.66 -5z" opacity=".55"/>
      <path d="M-9.66 5.5 l8.66 -5 l8.66 5 v10 l-8.66 5 l-8.66 -5z"/></g>
      <circle r="3.2" fill="#fff" stroke="none"><animate attributeName="r" values="2.4;4.2;2.4" dur="1.8s" repeatCount="indefinite"/></circle></g></svg>`,
    // lapisan: tiga lempeng bergeser
    nabati: `<svg viewBox="0 0 84 84"><g fill="#fff">
      <rect y="24" width="40" height="9" rx="4.5"><animate attributeName="x" values="18;26;18" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines=".5 0 .5 1;.5 0 .5 1"/></rect>
      <rect y="37.5" width="40" height="9" rx="4.5" opacity=".6"><animate attributeName="x" values="26;18;26" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines=".5 0 .5 1;.5 0 .5 1"/></rect>
      <rect y="51" width="40" height="9" rx="4.5"><animate attributeName="x" values="18;26;18" dur="2.2s" begin=".35s" repeatCount="indefinite" calcMode="spline" keySplines=".5 0 .5 1;.5 0 .5 1"/></rect></g></svg>`,
    // serat: untaian gelombang yang mengalir
    sayur: `<svg viewBox="0 0 84 84"><defs><clipPath id="mk-clip"><rect x="10" y="10" width="64" height="64" rx="14"/></clipPath></defs>
      <g clip-path="url(#mk-clip)" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round">
      <path d="M-80 30 q10 -9 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0"><animateTransform attributeName="transform" type="translate" values="0 0;40 0" dur="2.2s" repeatCount="indefinite"/></path>
      <path d="M-80 42 q10 -9 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" opacity=".55"><animateTransform attributeName="transform" type="translate" values="40 0;0 0" dur="3s" repeatCount="indefinite"/></path>
      <path d="M-80 54 q10 -9 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0"><animateTransform attributeName="transform" type="translate" values="0 0;40 0" dur="2.6s" repeatCount="indefinite"/></path></g></svg>`,
    // vitamin: partikel mengorbit inti
    buah: `<svg viewBox="0 0 84 84"><circle cx="42" cy="42" r="24" fill="none" stroke="#fff" stroke-opacity=".3" stroke-width="2" stroke-dasharray="3 5"/>
      <circle cx="42" cy="42" r="9" fill="#fff"/>
      <g><animateTransform attributeName="transform" type="rotate" values="0 42 42;360 42 42" dur="3.2s" repeatCount="indefinite"/><circle cx="66" cy="42" r="4.5" fill="#fff"/></g>
      <g><animateTransform attributeName="transform" type="rotate" values="120 42 42;480 42 42" dur="4.4s" repeatCount="indefinite"/><circle cx="66" cy="42" r="3.4" fill="#fff" opacity=".75"/></g>
      <g><animateTransform attributeName="transform" type="rotate" values="240 42 42;600 42 42" dur="5.6s" repeatCount="indefinite"/><circle cx="66" cy="42" r="2.6" fill="#fff" opacity=".55"/></g></svg>`,
  };

  /* ---------------------------------------------------------
     Template sekat ompreng (urutan tampil kiri-atas → kanan-bawah)
     --------------------------------------------------------- */
  const has = (name, s) => name.toLowerCase().includes(s);
  const TRAY_SLOTS = [
    {
      key: "sayur",
      sourceIndex: 3,
      tag: "Sayur",
      kicker: "Sayuran & serat",
      getDesc: (n) =>
        has(n, "tumis sawi putih jagung kembang kol")
          ? `${n} memadukan sawi putih, jagung, dan kembang kol yang menyumbang serat, vitamin, serta mineral untuk melengkapi sajian harian.`
          : has(n, "tumis wortel pakcoy")
            ? `${n} memadukan wortel dan pakcoy yang menyumbang serat, vitamin, serta mineral untuk melengkapi sajian harian.`
            : `${n} sebagai sumber serat pangan, vitamin, dan mineral untuk mendukung pencernaan serta menjaga daya tahan tubuh.`,
    },
    {
      key: "buah",
      sourceIndex: 4,
      tag: "Buah",
      kicker: "Buah & vitamin",
      getDesc: (n) =>
        has(n, "jeruk siam madu")
          ? `${n} melengkapi asupan buah harian dengan vitamin C, serat, dan cairan.`
          : has(n, "semangka")
            ? `${n} melengkapi asupan buah harian dan memiliki kandungan air yang tinggi untuk mendukung hidrasi.`
            : has(n, "anggur")
              ? `${n} melengkapi asupan buah harian dengan serat, vitamin, dan senyawa antioksidan alami.`
              : has(n, "pisang emas")
                ? `${n} melengkapi asupan buah harian dengan karbohidrat, serat, dan kalium.`
                : `${n} sebagai sumber vitamin alami dan antioksidan untuk melengkapi asupan gizi harian.`,
    },
    {
      key: "nabati",
      sourceIndex: 2,
      tag: "Nabati",
      kicker: "Lauk protein nabati",
      getDesc: (n) =>
        has(n, "tempe balado")
          ? `${n} menggunakan tempe sebagai sumber protein nabati, dengan bumbu balado sebagai pelengkap cita rasa.`
          : has(n, "bola bola tahu")
            ? `${n} menggunakan tahu sebagai sumber protein nabati yang membantu melengkapi kebutuhan protein harian.`
            : has(n, "tahu crispy")
            ? `${n} menggunakan tahu sebagai sumber protein nabati, dengan tekstur crispy sebagai pelengkap sajian.`
            : has(n, "tahu sambal tomat")
              ? `${n} menggunakan tahu sebagai sumber protein nabati, dengan sambal tomat sebagai pelengkap cita rasa.`
              : has(n, "tempe mendoan")
                ? `${n} berbahan dasar tempe yang menyumbang protein nabati; balutan tepung dan cara penyajiannya memberi tekstur khas mendoan.`
                : `${n} melengkapi kebutuhan protein nabati dan zat gizi mikro untuk mendukung pertumbuhan serta pemeliharaan tubuh.`,
    },
    {
      key: "karbo",
      sourceIndex: 0,
      tag: "Makanan pokok",
      kicker: "Makanan pokok · Karbohidrat",
      getDesc: (n) =>
        `${n} sebagai sumber karbohidrat utama untuk menyediakan energi bagi aktivitas dan konsentrasi sepanjang hari.`,
    },
    {
      key: "hewani",
      sourceIndex: 1,
      tag: "Lauk utama",
      kicker: "Lauk utama · Protein hewani",
      getDesc: (n) =>
        has(n, "udang tumis bawang putih")
          ? `${n} menyediakan protein hewani dari udang, dengan tumisan bawang putih sebagai pelengkap cita rasa.`
          : has(n, "bakso ayam pedas manis")
            ? `${n} menyediakan protein hewani dari ayam, dengan bumbu pedas manis sebagai pelengkap cita rasa.`
            : has(n, "ayam bistik mentega")
              ? `${n} menyediakan protein hewani dari ayam, dengan saus bistik mentega sebagai pelengkap cita rasa.`
              : has(n, "ayam bakar padang")
                ? `${n} menyediakan protein hewani dari ayam, dengan sambal tomat hijau sebagai pelengkap cita rasa.`
                : has(n, "telur bulat kecap")
                  ? `${n} menyediakan protein hewani dari telur, dengan kecap sebagai pelengkap cita rasa.`
                  : has(n, "telur")
                    ? `${n} menyediakan protein hewani untuk mendukung pertumbuhan dan pemeliharaan jaringan tubuh.`
                  : `${n} sebagai sumber protein hewani untuk membantu mendukung pertumbuhan dan pemeliharaan jaringan tubuh.`,
    },
  ];

  const WAVE = `<svg viewBox="0 0 200 12" preserveAspectRatio="none"><path d="M0 6 Q12.5 0 25 6 T50 6 T75 6 T100 6 T125 6 T150 6 T175 6 T200 6 V12 H0Z"/></svg>`;

  /* ---------------------------------------------------------
     Ompreng + detail
     --------------------------------------------------------- */
  let slots = [];
  let activeSlot = 0;
  let userTouchedTray = false;

  const renderMenu = (items) => {
    const list = $("menu-list");
    if (!list || !Array.isArray(items)) return;
    const values = items.map((x) => x.value);
    const isFour = values.length === 4;

    const defs = isFour
      ? TRAY_SLOTS.filter((s) => s.sourceIndex !== 2).map((s) => {
          if (s.sourceIndex === 3)
            return {
              ...s,
              sourceIndex: 2,
              tag: "Nabati & sayur",
              kicker: "Lauk nabati & sayuran",
              getDesc: (n) =>
                `${n} memadukan tahu sebagai sumber protein nabati dengan kacang panjang dan wortel yang menyumbang serat, vitamin, serta mineral.`,
            };
          if (s.sourceIndex === 4) return { ...s, sourceIndex: 3 };
          return s;
        })
      : TRAY_SLOTS;

    slots = defs.map((s, i) => ({ ...s, dish: values[s.sourceIndex] || values[i] || s.tag }));
    list.classList.toggle("is-four", isFour);

    const nodes = slots.map((s, i) => {
      const li = el("li", `cell cell-${s.key}`);
      li.style.setProperty("--i", String(i));
      li.tabIndex = 0;
      li.setAttribute("role", "button");
      li.setAttribute("aria-pressed", "false");
      li.setAttribute("aria-label", `${s.tag}: ${s.dish}`);
      const liquid = el("span", "liquid");
      liquid.setAttribute("aria-hidden", "true");
      liquid.innerHTML = WAVE + WAVE;
      li.append(liquid, el("span", "cell-tag", s.tag), el("span", "cell-name", s.dish));
      li.addEventListener("click", (e) => {
        spawnRipple(li, e);
        selectSlot(i, { user: true });
      });
      li.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectSlot(i, { user: true });
        }
      });
      li.addEventListener("animationend", () => li.classList.add("is-settled"), { once: true });
      return li;
    });
    list.replaceChildren(...nodes);

    // langkah (indikator) di panel detail
    const steps = $("detail-steps");
    if (steps) {
      steps.replaceChildren(
        ...slots.map((s, i) => {
          const b = el("button", "step");
          b.type = "button";
          b.setAttribute("role", "tab");
          b.setAttribute("aria-label", `${s.tag}: ${s.dish}`);
          b.appendChild(el("i"));
          b.addEventListener("click", () => selectSlot(i, { user: true }));
          return b;
        })
      );
    }

    const start = slots.findIndex((s) => s.key === "karbo");
    selectSlot(start >= 0 ? start : 0, { initial: true });
  };

  const selectSlot = (idx, opts = {}) => {
    const n = slots.length;
    if (!n) return;
    idx = ((idx % n) + n) % n;
    const dir = idx >= activeSlot ? 1 : -1;
    const changed = idx !== activeSlot || opts.initial;
    activeSlot = idx;
    const s = slots[idx];

    document.querySelectorAll("#menu-list .cell").forEach((c, i) => {
      c.classList.toggle("is-active", i === idx);
      c.setAttribute("aria-pressed", String(i === idx));
    });
    document.querySelectorAll("#detail-steps .step").forEach((b, i) => {
      b.setAttribute("aria-selected", String(i === idx));
    });

    const detail = $("cell-detail");
    if (detail && changed) {
      detail.style.setProperty("--cat", `var(--c-${s.key})`);
      detail.style.setProperty("--dir", String(dir));
      detail.classList.remove("is-switching");
      void detail.offsetWidth;
      detail.classList.add("is-switching");
      const mark = $("detail-mark");
      if (mark) mark.innerHTML = MARKS[s.key] || "";
      setText("detail-kicker", s.kicker);
      setText("detail-title", s.dish);
      setText("detail-desc", s.getDesc(s.dish));
    }

    if (opts.user) {
      buzz(8);
      if (!userTouchedTray) {
        userTouchedTray = true;
        $("tray-hint")?.classList.add("is-done");
      }
      const shine = document.querySelector(".tray-shine");
      if (shine && !reduceMotion) {
        shine.classList.remove("glint");
        void shine.offsetWidth;
        shine.classList.add("glint");
      }
    }
  };

  const initDetailControls = () => {
    $("detail-prev")?.addEventListener("click", () => selectSlot(activeSlot - 1, { user: true }));
    $("detail-next")?.addEventListener("click", () => selectSlot(activeSlot + 1, { user: true }));

    const detail = $("cell-detail");
    if (!detail) return;
    let sx = 0;
    let sy = 0;
    let tracking = false;
    detail.addEventListener("pointerdown", (e) => {
      if (e.target.closest("button")) return;
      tracking = true;
      sx = e.clientX;
      sy = e.clientY;
    });
    detail.addEventListener("pointerup", (e) => {
      if (!tracking) return;
      tracking = false;
      const dx = e.clientX - sx;
      const dy = e.clientY - sy;
      if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.4) {
        selectSlot(activeSlot + (dx < 0 ? 1 : -1), { user: true });
      }
    });
    detail.addEventListener("pointercancel", () => (tracking = false));
  };

  /* ---------------------------------------------------------
     Tilt 3D ompreng: mouse, sentuh, dan giroskop (Android)
     --------------------------------------------------------- */
  const initTrayTilt = () => {
    const stage = $("tray-stage");
    const tray = $("tray");
    const shadow = stage?.querySelector(".tray-shadow");
    if (!stage || !tray || reduceMotion) return;

    let settled = false;
    const settle = () => {
      settled = true;
      tray.classList.add("is-settled");
    };
    tray.addEventListener("animationend", (e) => {
      if (e.animationName === "trayIn") settle();
    });
    setTimeout(settle, 2600);

    const apply = (nx, ny, max = 9) => {
      // nx, ny dalam rentang -1..1
      if (!settled) return;
      tray.style.setProperty("--rx", `${(-ny * max).toFixed(2)}deg`);
      tray.style.setProperty("--ry", `${(nx * max).toFixed(2)}deg`);
      tray.style.setProperty("--lx", `${(50 + nx * 45).toFixed(1)}%`);
      tray.style.setProperty("--ly", `${(40 + ny * 45).toFixed(1)}%`);
      if (shadow) shadow.style.setProperty("--sx", String((-nx * 18).toFixed(1)));
    };
    const reset = () => {
      tray.classList.remove("is-tracking");
      apply(0, 0);
      tray.style.setProperty("--lx", "30%");
      tray.style.setProperty("--ly", "18%");
    };

    stage.addEventListener("pointermove", (e) => {
      if (e.pointerType === "touch" && !e.pressure) return;
      const r = stage.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
      const ny = ((e.clientY - r.top) / r.height) * 2 - 1;
      tray.classList.add("is-tracking");
      apply(Math.max(-1, Math.min(1, nx)), Math.max(-1, Math.min(1, ny)), e.pointerType === "touch" ? 6 : 9);
    });
    stage.addEventListener("pointerleave", reset);
    stage.addEventListener("pointerup", (e) => {
      if (e.pointerType === "touch") setTimeout(reset, 250);
    });

    // giroskop: ponsel dimiringkan → ompreng ikut miring
    if (!finePointer && "DeviceOrientationEvent" in window) {
      let base = null;
      let raf = 0;
      let last = { x: 0, y: 0 };
      window.addEventListener(
        "deviceorientation",
        (e) => {
          if (e.gamma == null || e.beta == null) return;
          if (!base) base = { b: e.beta, g: e.gamma };
          const x = Math.max(-1, Math.min(1, (e.gamma - base.g) / 25));
          const y = Math.max(-1, Math.min(1, (e.beta - base.b) / 25));
          last = { x, y };
          if (!raf)
            raf = requestAnimationFrame(() => {
              raf = 0;
              tray.classList.add("is-tracking");
              apply(last.x, last.y, 7);
            });
        },
        { passive: true }
      );
    }
  };

  /* ---------------------------------------------------------
     Uap generatif yang naik dari ompreng (canvas)
     --------------------------------------------------------- */
  const initSteam = () => {
    const canvas = $("steam-canvas");
    const hero = $("menu");
    const tray = $("tray");
    if (!canvas || !hero || !tray || reduceMotion) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let emit = { x0: 0, x1: 0, y: 0 };
    const pointer = { x: 0, tx: 0 };

    const measure = () => {
      const hr = hero.getBoundingClientRect();
      const tr = tray.getBoundingClientRect();
      W = canvas.width = Math.round(hr.width);
      H = canvas.height = Math.round(hr.height);
      emit = {
        x0: tr.left - hr.left + tr.width * 0.12,
        x1: tr.right - hr.left - tr.width * 0.12,
        y: tr.top - hr.top + 26,
      };
    };

    const count = window.innerWidth < 640 ? 6 : 9;
    const spawn = (w, fresh) => {
      w.x = emit.x0 + Math.random() * (emit.x1 - emit.x0);
      w.life = fresh ? Math.random() : 0;
      w.speed = 0.0018 + Math.random() * 0.0022;
      w.amp = 14 + Math.random() * 22;
      w.len = 180 + Math.random() * 220;
      w.width = 16 + Math.random() * 22;
      w.phase = Math.random() * Math.PI * 2;
      w.freq = 0.012 + Math.random() * 0.01;
      return w;
    };
    const wisps = Array.from({ length: count }, () => spawn({}, true));

    let running = false;
    let raf = 0;
    let t = 0;
    const frame = () => {
      raf = requestAnimationFrame(frame);
      t += 0.016;
      pointer.x += (pointer.tx - pointer.x) * 0.04;
      ctx.clearRect(0, 0, W, H);
      ctx.lineCap = "round";
      for (const w of wisps) {
        w.life += w.speed;
        if (w.life >= 1) spawn(w, false);
        const fade = Math.sin(Math.PI * w.life);
        const rise = w.life * 120;
        const baseY = emit.y - rise;
        const g = ctx.createLinearGradient(0, baseY, 0, baseY - w.len);
        g.addColorStop(0, "rgba(255,255,255,0)");
        g.addColorStop(0.25, `rgba(255,255,255,${0.16 * fade})`);
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.strokeStyle = g;
        ctx.lineWidth = w.width;
        ctx.beginPath();
        for (let k = 0; k <= 22; k++) {
          const p = k / 22;
          const y = baseY - p * w.len;
          const x = w.x + Math.sin(y * w.freq + t * 1.3 + w.phase) * w.amp * p + pointer.x * p * 40;
          if (k === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    };
    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    measure();
    window.addEventListener("resize", () => measure(), { passive: true });
    setTimeout(measure, 1800);
    window.addEventListener(
      "pointermove",
      (e) => {
        pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
      },
      { passive: true }
    );
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([en]) => (en.isIntersecting ? start() : stop())).observe(hero);
    } else start();
    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
  };

  /* ---------------------------------------------------------
     Hitung mundur batas aman konsumsi
     --------------------------------------------------------- */
  const initTimer = () => {
    const box = $("timer");
    const arc = $("timer-arc");
    const head = $("timer-head");
    const ticksG = $("timer-ticks");
    const btnStart = $("timer-start");
    const btnReset = $("timer-reset");
    const chip = $("status-chip");
    if (!box || !arc || !btnStart) return;

    const m = String(data.safety?.consumption || "").match(/(\d+(?:[.,]\d+)?)\s*jam/i);
    const hours = m ? parseFloat(m[1].replace(",", ".")) : 2;
    const TOTAL = hours * 3600 * 1000;
    const WARN = Math.min(20 * 60 * 1000, TOTAL * 0.2);
    const KEY = `sppg-diterima-${data.serving?.machineDate || "hari-ini"}`;
    const C = 2 * Math.PI * 96;
    arc.style.strokeDasharray = `${C} ${C}`;

    // jarum menit di sekeliling cincin
    const ticks = [];
    if (ticksG) {
      const NS = "http://www.w3.org/2000/svg";
      for (let i = 0; i < 60; i++) {
        const a = (i / 60) * Math.PI * 2 - Math.PI / 2;
        const major = i % 5 === 0;
        const r1 = major ? 107 : 109;
        const r2 = 115;
        const ln = document.createElementNS(NS, "line");
        ln.setAttribute("x1", (120 + Math.cos(a) * r1).toFixed(2));
        ln.setAttribute("y1", (120 + Math.sin(a) * r1).toFixed(2));
        ln.setAttribute("x2", (120 + Math.cos(a) * r2).toFixed(2));
        ln.setAttribute("y2", (120 + Math.sin(a) * r2).toFixed(2));
        if (major) ln.classList.add("major");
        ticksG.appendChild(ln);
        ticks.push(ln);
      }
    }

    const read = () => {
      try {
        const v = parseInt(localStorage.getItem(KEY) || "", 10);
        return Number.isFinite(v) ? v : null;
      } catch {
        return null;
      }
    };
    const write = (v) => {
      try {
        if (v == null) localStorage.removeItem(KEY);
        else localStorage.setItem(KEY, String(v));
      } catch {
        /* penyimpanan tidak tersedia */
      }
    };
    let startAt = read();
    if (startAt && Date.now() - startAt > TOTAL + 8 * 3600 * 1000) {
      startAt = null;
      write(null);
    }

    const pad = (n) => String(n).padStart(2, "0");
    const fmt = (ms) => {
      const s = Math.max(0, Math.ceil(ms / 1000));
      return `${Math.floor(s / 3600)}:${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}`;
    };
    const clock = (d) => `${pad(d.getHours())}.${pad(d.getMinutes())}`;

    let timerId = 0;
    const paint = (frac) => {
      arc.style.strokeDashoffset = String(C * (1 - frac));
      if (head) head.style.transform = `rotate(${frac * 360}deg)`;
      const lit = Math.round(frac * 60);
      ticks.forEach((t, i) => t.classList.toggle("lit", i < lit && box.dataset.state !== "idle"));
    };
    const setChip = (state, text) => {
      if (!chip) return;
      chip.dataset.state = state;
      setText("status-text", text);
    };

    const render = () => {
      if (!startAt) {
        box.dataset.state = "idle";
        box.classList.remove("is-live");
        setText("timer-time", fmt(TOTAL));
        setText("timer-label", "belum dihitung");
        setText("timer-note", "Ketuk saat ompreng sampai di tangan. Hitungan tersimpan di ponsel ini.");
        btnStart.hidden = false;
        if (btnReset) btnReset.hidden = true;
        paint(1);
        setChip("idle", `Batas aman konsumsi ${String(hours).replace(".", ",")} jam setelah diterima`);
        return;
      }
      const left = TOTAL - (Date.now() - startAt);
      const until = new Date(startAt + TOTAL);
      btnStart.hidden = true;
      if (btnReset) btnReset.hidden = false;
      if (left <= 0) {
        if (box.dataset.state !== "expired") buzz([30, 60, 30]);
        box.dataset.state = "expired";
        box.classList.remove("is-live");
        setText("timer-time", "0:00:00");
        setText("timer-label", "lewat batas aman");
        setText("timer-note", `Batas aman berakhir pukul ${clock(until)}. Makanan sebaiknya tidak dikonsumsi lagi.`);
        paint(0);
        setChip("expired", "Lewat batas aman konsumsi");
        clearInterval(timerId);
        return;
      }
      box.dataset.state = left <= WARN ? "warn" : "running";
      setText("timer-time", fmt(left));
      setText("timer-label", left <= WARN ? "segera habiskan" : "sisa waktu aman");
      setText("timer-note", `Diterima pukul ${clock(new Date(startAt))} · aman hingga pukul ${clock(until)}.`);
      paint(left / TOTAL);
      setChip(left <= WARN ? "warn" : "running", `${left <= WARN ? "Segera habiskan" : "Sisa waktu aman"} ${fmt(left)}`);
    };

    const run = () => {
      clearInterval(timerId);
      render();
      if (startAt) {
        requestAnimationFrame(() => box.classList.add("is-live"));
        timerId = setInterval(render, 1000);
      }
    };

    btnStart.addEventListener("click", (e) => {
      spawnRipple(btnStart, e);
      buzz(14);
      startAt = Date.now();
      write(startAt);
      // animasi "mengisi" cincin sebelum menghitung mundur
      clearInterval(timerId);
      box.classList.remove("is-live");
      arc.style.transition = "none";
      arc.style.strokeDashoffset = String(C);
      if (head) {
        head.style.transition = "none";
        head.style.transform = "rotate(0deg)";
      }
      void arc.getBoundingClientRect();
      arc.style.transition = "";
      if (head) head.style.transition = "";
      requestAnimationFrame(() => {
        render();
        setTimeout(run, 950);
      });
    });
    btnReset?.addEventListener("click", () => {
      buzz(8);
      startAt = null;
      write(null);
      clearInterval(timerId);
      render();
    });
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) run();
    });
    run();
  };

  /* ---------------------------------------------------------
     Kandungan gizi
     --------------------------------------------------------- */
  const NUTRI_COLOR = (label) => {
    const l = label.toLowerCase();
    if (l.includes("protein")) return "var(--n-prot)";
    if (l.includes("karbo")) return "var(--n-carb)";
    if (l.includes("lemak")) return "var(--n-fat)";
    if (l.includes("serat")) return "var(--n-fiber)";
    return "var(--navy-3)";
  };
  const NUTRI_REF = (label) => {
    const l = label.toLowerCase();
    if (l.includes("protein")) return 35;
    if (l.includes("karbo")) return 125;
    if (l.includes("lemak")) return 35;
    if (l.includes("serat")) return 6;
    return 100;
  };
  const shortName = (n) => n.replace(/^porsi\s+/i, "");

  const odo = {
    node: null,
    visible: false,
    pending: null,
    build(str) {
      const n = this.node;
      n.replaceChildren();
      n.dataset.shape = str.replace(/\d/g, "0");
      [...str].forEach((ch, i) => {
        if (/\d/.test(ch)) {
          const reel = el("span", "reel");
          const strip = el("span", "strip");
          for (let d = 0; d <= 9; d++) strip.appendChild(el("span", "", String(d)));
          strip.style.transitionDelay = `${i * 70}ms`;
          strip.style.transform = `translateY(${-Number(ch)}em)`;
          reel.appendChild(strip);
          n.appendChild(reel);
        } else n.appendChild(el("span", "odo-sep", ch));
      });
    },
    set(str) {
      if (!this.node) return;
      this.node.setAttribute("aria-label", str);
      this.pending = str;
      if (this.node.dataset.shape !== str.replace(/\d/g, "0")) {
        this.build(str);
        if (!this.visible && !reduceMotion) return;
        void this.node.offsetWidth;
      }
      const strips = this.node.querySelectorAll(".strip");
      let k = 0;
      [...str].forEach((ch) => {
        if (/\d/.test(ch)) {
          strips[k].style.transform = `translateY(${-Number(ch)}em)`;
          k++;
        }
      });
    },
    reveal() {
      this.visible = true;
      const p = this.pending;
      if (!p || !this.node) return;
      this.pending = null;
      const strips = this.node.querySelectorAll(".strip");
      strips.forEach((s) => {
        s.style.transition = "none";
        s.style.transform = "translateY(0em)";
      });
      void this.node.offsetWidth;
      strips.forEach((s) => {
        s.style.transition = "";
      });
      requestAnimationFrame(() => this.set(p));
    },
  };

  const donut = {
    C: 2 * Math.PI * 54,
    visible: false,
    pending: null,
    focus: null,
    pcts: { carb: 0, fat: 0, prot: 0 },
    names: { carb: "karbohidrat", fat: "lemak", prot: "protein" },
    draw(p) {
      this.pending = p;
      const gap = 2.5;
      let acc = 0;
      ["carb", "fat", "prot"].forEach((k) => {
        const seg = $(`seg-${k}`);
        const len = Math.max(0, (p[k] / 100) * this.C - gap);
        if (seg) {
          seg.style.strokeDasharray = `${len} ${this.C}`;
          seg.style.strokeDashoffset = String(-acc);
        }
        acc += (p[k] / 100) * this.C;
      });
    },
    setFocus(k) {
      this.focus = k;
      const macro = $("macro");
      if (macro) macro.dataset.focus = k;
      document.querySelectorAll(".legend-item").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.key === k)));
      setText("donut-pct", `${this.pcts[k]}%`);
      setText("donut-name", this.names[k]);
    },
    reveal() {
      this.visible = true;
      const p = this.pending;
      if (!p) return;
      this.pending = null;
      const segs = ["carb", "fat", "prot"].map((k) => $(`seg-${k}`)).filter(Boolean);
      segs.forEach((seg) => {
        seg.style.transition = "none";
        seg.style.strokeDasharray = `0 ${this.C}`;
      });
      if (segs[0]) void segs[0].getBoundingClientRect();
      segs.forEach((seg) => {
        seg.style.transition = "";
      });
      requestAnimationFrame(() => this.draw(p));
    },
  };

  const initNutrition = (groups) => {
    const seg = $("portion-selector");
    const thumb = $("seg-thumb");
    const grid = $("nutrition-grid");
    if (!seg || !Array.isArray(groups) || !groups.length) return;
    odo.node = $("energy-odo");

    const mainOf = (g) => g.items.find((x) => x.highlight) || g.items[0];
    const restOf = (g) => g.items.filter((x) => x !== mainOf(g));
    const labels = restOf(groups[0]).map((x) => x.label);
    const valueOf = (g, label) => {
      const it = g.items.find((x) => x.label === label);
      return it ? parseIdNum(it.value) : 0;
    };

    // tombol porsi
    const buttons = groups.map((g, i) => {
      const b = el("button", "", shortName(g.name));
      b.type = "button";
      b.setAttribute("aria-label", g.name);
      b.addEventListener("click", () => {
        buzz(6);
        select(i);
      });
      return b;
    });
    seg.append(...buttons);

    const moveThumb = () => {
      const b = buttons[activeGroup];
      if (!b || !thumb) return;
      thumb.style.width = `${b.offsetWidth}px`;
      thumb.style.transform = `translateX(${b.offsetLeft}px)`;
    };

    // baris zat gizi (dibangun sekali, nilai diperbarui)
    const rows = labels.map((label) => {
      const wrap = el("div", "nrow");
      wrap.style.setProperty("--nc", NUTRI_COLOR(label));
      const btn = el("button", "nrow-btn");
      btn.type = "button";
      btn.setAttribute("aria-expanded", "false");
      const val = el("span", "nrow-val", "0");
      const chev = el("span", "nrow-chev");
      chev.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>`;
      const bar = el("span", "nrow-bar");
      const fill = el("span", "nrow-fill");
      bar.appendChild(fill);
      btn.append(el("span", "nrow-label", label), val, chev, bar);

      const more = el("div", "nrow-more");
      const inner = el("div");
      const cmp = el("div", "cmp");
      const maxAcross = Math.max(...groups.map((g) => valueOf(g, label)), 0.0001);
      const unit = (groups[0].items.find((x) => x.label === label) || {}).unit || "";
      const cmpItems = groups.map((g, k) => {
        const v = valueOf(g, label);
        const item = el("div", "cmp-item");
        item.style.setProperty("--k", String(k));
        const barc = el("span", "cmp-bar");
        const i = el("i");
        i.style.setProperty("--r", (v / maxAcross).toFixed(3));
        barc.appendChild(i);
        item.append(el("span", "", shortName(g.name)), barc, el("span", "", `${formatIdNum(v)} ${unit}`));
        return item;
      });
      cmp.append(...cmpItems);
      inner.appendChild(cmp);
      more.appendChild(inner);
      wrap.append(btn, more);

      btn.addEventListener("click", () => {
        const open = !wrap.classList.contains("is-open");
        wrap.classList.toggle("is-open", open);
        btn.setAttribute("aria-expanded", String(open));
        buzz(6);
      });
      return { label, unit, val, fill, cmpItems, prev: 0 };
    });
    if (grid) grid.replaceChildren(...rows.map((r) => r.val.closest(".nrow")));

    let activeGroup = 0;
    let firstPaint = true;
    const select = (idx) => {
      idx = (idx + groups.length) % groups.length;
      activeGroup = idx;
      const g = groups[idx];
      buttons.forEach((b, i) => b.setAttribute("aria-pressed", String(i === idx)));
      moveThumb();

      const main = mainOf(g);
      setText("active-group-label", g.name);
      odo.set(formatIdNum(parseIdNum(main.value)));
      setText("energy-unit", `${main.unit} ${main.label.toLowerCase()}`);

      // komposisi energi makro
      const rest = restOf(g);
      const find = (s) => rest.find((x) => x.label.toLowerCase().includes(s));
      const pc = (find("protein") ? parseIdNum(find("protein").value) : 0) * 4;
      const cc = (find("karbo") ? parseIdNum(find("karbo").value) : 0) * 4;
      const fc = (find("lemak") ? parseIdNum(find("lemak").value) : 0) * 9;
      const tot = pc + cc + fc || 1;
      const carb = Math.round((cc / tot) * 100);
      const fat = Math.round((fc / tot) * 100);
      const prot = Math.max(0, 100 - carb - fat);
      donut.pcts = { carb, fat, prot };
      donut.draw(donut.pcts);
      setText("lg-carb", `${carb}%`);
      setText("lg-fat", `${fat}%`);
      setText("lg-prot", `${prot}%`);
      setText("macro-summary-text", `Karbohidrat ${carb}% · Lemak ${fat}% · Protein ${prot}%`);
      if (!donut.focus) {
        const top = Object.entries(donut.pcts).sort((a, b) => b[1] - a[1])[0][0];
        donut.setFocus(top);
      } else donut.setFocus(donut.focus);

      // baris
      rows.forEach((r) => {
        const v = valueOf(g, r.label);
        animateValue(r.val, firstPaint ? 0 : r.prev, v, r.unit, firstPaint ? 1100 : 600);
        r.prev = v;
        r.fill.style.setProperty("--ratio", Math.min(Math.max(v / NUTRI_REF(r.label), 0.04), 1).toFixed(3));
        r.cmpItems.forEach((it, k) => it.classList.toggle("is-current", k === idx));
      });
      firstPaint = false;
    };

    // legenda & segmen donat
    document.querySelectorAll(".legend-item, .donut-seg").forEach((n) =>
      n.addEventListener("click", () => {
        buzz(5);
        donut.setFocus(n.dataset.key);
      })
    );

    // panah kiri/kanan pada pemilih porsi
    seg.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        select(activeGroup + (e.key === "ArrowRight" ? 1 : -1));
        buttons[activeGroup].focus();
      }
    });

    // geser kiri/kanan di area gizi untuk ganti porsi
    const area = $("nutri-swipe");
    if (area) {
      let sx = 0;
      let sy = 0;
      let on = false;
      area.addEventListener("pointerdown", (e) => {
        if (e.pointerType !== "touch") return;
        on = true;
        sx = e.clientX;
        sy = e.clientY;
      });
      area.addEventListener("pointerup", (e) => {
        if (!on) return;
        on = false;
        const dx = e.clientX - sx;
        const dy = e.clientY - sy;
        if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
          buzz(6);
          select(activeGroup + (dx < 0 ? 1 : -1));
        }
      });
      area.addEventListener("pointercancel", () => (on = false));
    }

    window.addEventListener("resize", moveThumb, { passive: true });
    if (document.fonts?.ready) document.fonts.ready.then(moveThumb);

    // angka & donat baru bergerak saat bagian terlihat
    const energyBlock = document.querySelector(".energy-block");
    if (energyBlock && "IntersectionObserver" in window && !reduceMotion) {
      const io = new IntersectionObserver(
        ([en]) => {
          if (en.isIntersecting) {
            odo.reveal();
            donut.reveal();
            io.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      io.observe(energyBlock);
    } else {
      odo.visible = true;
      donut.visible = true;
    }

    select(0);
    return { get active() { return activeGroup; } };
  };

  /* ---------------------------------------------------------
     Bagikan / salin ringkasan menu
     --------------------------------------------------------- */
  let nutriState = null;
  const toast = (msg) => {
    const t = $("copy-toast");
    if (!t) return;
    setText("toast-text", msg);
    t.classList.add("is-on");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => t.classList.remove("is-on"), 2600);
  };
  const initShare = () => {
    const btn = $("copy-menu-btn");
    if (!btn) return;
    btn.addEventListener("click", async () => {
      buzz(8);
      const menuLines = (data.menu || []).map((m, i) => `${i + 1}. ${m.value}`).join("\n");
      const groups = data.nutrition?.groups || [];
      const g = groups[nutriState ? nutriState.active : 0] || groups[0];
      const nutriLines = g ? g.items.map((it) => `- ${it.label}: ${it.value} ${it.unit}`).join("\n") : "";
      const text = [
        `*${data.sppg.name}*`,
        `${data.page.programName} — ${data.serving.date}`,
        "",
        "*Isi Ompreng Hari Ini:*",
        menuLines,
        "",
        `*Kandungan Gizi (${g ? g.name : "Per Porsi"}):*`,
        nutriLines,
        "",
        `⚠️ ${data.safety.consumption}`,
        "",
        location.href.split("#")[0],
      ].join("\n");

      if (navigator.share && !finePointer) {
        try {
          await navigator.share({ title: data.page.title, text });
          return;
        } catch (err) {
          if (err && err.name === "AbortError") return;
        }
      }
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
      }
      toast("Ringkasan menu hari ini sudah disalin");
    });
  };

  /* ---------------------------------------------------------
     Navigasi: bar, dock, penanda bagian aktif
     --------------------------------------------------------- */
  const initNav = () => {
    const bar = $("bar");
    const onScroll = () => bar?.classList.toggle("is-scrolled", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const ids = ["menu", "aman", "nutrisi", "identitas"];
    const pill = $("dock-pill");
    const setActive = (id) => {
      document.querySelectorAll("[data-spy]").forEach((a) => a.classList.toggle("is-active", a.dataset.spy === id));
      if (pill) pill.style.setProperty("--i", String(Math.max(0, ids.indexOf(id))));
    };
    setActive("menu");
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((en) => en.isIntersecting && setActive(en.target.id)),
        { rootMargin: "-45% 0px -50% 0px" }
      );
      ids.forEach((id) => $(id) && io.observe($(id)));
    }
    document.querySelectorAll(".dock a").forEach((a) => a.addEventListener("click", () => buzz(5)));
  };

  /* ---------------------------------------------------------
     Reveal saat scroll
     --------------------------------------------------------- */
  const initReveal = () => {
    const blocks = [...document.querySelectorAll("[data-reveal]")];
    blocks.forEach((b) => [...b.children].forEach((c, i) => c.style.setProperty("--k", String(i))));
    const footName = $("identity-title");
    splitWords(footName);
    const targets = [...blocks, footName].filter(Boolean);
    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
            io.unobserve(en.target);
          }
        }),
      { threshold: 0.18, rootMargin: "0px 0px -6% 0px" }
    );
    targets.forEach((t) => io.observe(t));
  };

  /* ---------------------------------------------------------
     Isi konten & SEO
     --------------------------------------------------------- */
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
      provider: { "@type": "GovernmentOrganization", name: data.sppg.name, address: data.sppg.address },
      hasMenuItem: (data.menu || []).map((m) => ({ "@type": "MenuItem", name: m.value })),
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

  splitWords($("page-title"));
  renderMenu(data.menu);
  initDetailControls();
  initTimer();
  nutriState = initNutrition(data.nutrition?.groups);
  initShare();
  initNav();
  initReveal();

  requestAnimationFrame(() => {
    root.classList.add("is-ready");
    initTrayTilt();
    initSteam();
    // jaring pengaman: semua sekat dianggap selesai masuk
    setTimeout(() => document.querySelectorAll("#menu-list .cell").forEach((c) => c.classList.add("is-settled")), 2800);
  });
})();
