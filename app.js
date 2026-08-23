(() => {
  "use strict";

  const data = window.LABEL_DATA;
  if (!data) {
    console.warn("LABEL_DATA tidak ditemukan. Konten contoh dari index.html tetap ditampilkan.");
    return;
  }

  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element && value !== undefined && value !== null) {
      element.textContent = String(value);
    }
  };

  const setMeta = (name, content) => {
    const element = document.querySelector(`meta[name="${name}"]`);
    if (element && content) {
      element.setAttribute("content", content);
    }
  };

  const renderMenu = (items) => {
    const list = document.getElementById("menu-list");
    if (!list || !Array.isArray(items)) return;

    list.replaceChildren(
      ...items.map((item) => {
        const row = document.createElement("div");
        const label = document.createElement("dt");
        const value = document.createElement("dd");

        row.className = "menu-item";
        label.textContent = item.label;
        value.textContent = item.value;
        row.append(label, value);
        return row;
      }),
    );
  };

  const renderNutrition = (items) => {
    const grid = document.getElementById("nutrition-grid");
    if (!grid || !Array.isArray(items)) return;

    grid.replaceChildren(
      ...items.map((item) => {
        const card = document.createElement("div");
        const value = document.createElement("strong");
        const unit = document.createElement("span");
        const label = document.createElement("small");

        card.className = `nutrition-item${item.highlight ? " nutrition-main" : ""}`;
        value.textContent = item.value;
        unit.textContent = item.unit;
        label.textContent = item.label;
        card.append(value, unit, label);
        return card;
      }),
    );
  };

  const renderTags = (id, items) => {
    const list = document.getElementById(id);
    if (!list || !Array.isArray(items)) return;

    const values = items.length ? items : ["Tidak dicantumkan"];
    list.replaceChildren(
      ...values.map((item) => {
        const tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = item;
        return tag;
      }),
    );
  };

  document.title = data.page.title;
  setMeta("description", data.page.description);
  setText("program-name", data.page.programName);
  setText("hero-eyebrow", data.page.eyebrow);
  setText("page-title", data.page.heading);
  setText("hero-intro", data.page.intro);

  const servingDate = document.getElementById("serving-date");
  if (servingDate) {
    servingDate.textContent = data.serving.date;
    servingDate.setAttribute("datetime", data.serving.machineDate);
  }
  setText("batch-code", data.serving.batchCode);
  setText("distribution-time", data.serving.distributionTime);
  setText("timeline-distribution", data.serving.distributionTime);
  setText("consume-by", data.serving.consumeBy);
  setText("timeline-consume-by", data.serving.consumeBy);
  setText("consumption-guidance", data.serving.consumptionGuidance);
  setText("storage-guidance", data.serving.storageGuidance);

  renderMenu(data.menu);
  setText("nutrition-note", data.nutrition.note);
  renderNutrition(data.nutrition.items);
  renderTags("contains-allergens", data.allergens.contains);
  renderTags("may-contain-allergens", data.allergens.mayContain);
  setText("allergen-note", data.allergens.note);

  setText("brand-name", data.sppg.name);
  setText("brand-unit", data.sppg.unit);
  setText("short-location", data.sppg.shortLocation);
  setText("identity-title", data.sppg.name);
  setText("identity-unit", data.sppg.unit);
  setText("identity-address", data.sppg.address);
  setText("identity-contact", data.sppg.contact);
  setText("last-updated", data.sppg.lastUpdated);
  setText("footer-name", data.sppg.name);
})();
