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
      ...items.map((item, index) => {
        const row = document.createElement("div");
        const number = document.createElement("dt");
        const value = document.createElement("dd");

        row.className = "menu-item";
        number.textContent = String(index + 1).padStart(2, "0");
        value.textContent = item.value;
        row.append(number, value);
        return row;
      }),
    );
  };

  const renderNutritionItems = (items) => {
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

  const renderNutritionGroups = (groups) => {
    const selector = document.getElementById("portion-selector");
    if (!selector || !Array.isArray(groups) || !groups.length) return;

    const buttons = groups.map((group, index) => {
      const button = document.createElement("button");
      button.className = `portion-button${index === 0 ? " is-active" : ""}`;
      button.type = "button";
      button.textContent = group.name;
      button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
      return button;
    });

    const activateGroup = (activeIndex) => {
      buttons.forEach((button, index) => {
        const isActive = index === activeIndex;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
      setText("active-portion", groups[activeIndex].name);
      renderNutritionItems(groups[activeIndex].items);
    };

    buttons.forEach((button, index) => {
      button.addEventListener("click", () => activateGroup(index));
    });
    selector.replaceChildren(...buttons);
    activateGroup(0);
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

  renderMenu(data.menu);
  renderNutritionGroups(data.nutrition.groups);
  setText("safe-consumption-message", data.safety.consumption);
  setText("allergy-message", data.safety.allergy);

  setText("brand-name", data.sppg.name);
  setText("brand-unit", data.sppg.unit);
  setText("identity-title", data.sppg.name);
  setText("identity-unit", data.sppg.unit);
  setText("identity-address", data.sppg.address);
  setText("identity-contact", data.sppg.contact);
  setText("last-updated", data.sppg.lastUpdated);
  setText("footer-name", data.sppg.name);
})();
