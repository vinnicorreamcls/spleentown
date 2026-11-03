const drinks = [
  {
    name: "Spleen Sour",
    price: 22,
    category: "Signature sour",
    palette: "green",
    image: "./assets/drinks/refined-transparent/01-spleen-sour-clean.png",
    description: "A dark, brooding twist on the classic sour, capturing existential dread, bitterness, and melancholy.",
    ingredients: ["2 oz Rye Whiskey", "0.5 oz Fernet-Branca", "0.75 oz Fresh Lemon Juice", "0.75 oz Simple Syrup", "1 Egg White or Aquafaba", "1 capsule Activated Charcoal"],
    callouts: ["Rye / charcoal", "Bitter / herbal", "Fresh lemon"],
    footnote: "Black as the hour before sunrise."
  },
  {
    name: "Fleurs du Mal",
    price: 26,
    category: "Forbidden floral",
    palette: "violet",
    image: "./assets/drinks/refined-transparent/02-fleurs-du-mal-clean.png",
    description: "An intoxicating, floral cocktail with a dangerous, forbidden edge.",
    ingredients: ["1.5 oz Hendrick’s Gin", "0.5 oz Crème de Violette", "0.5 oz Fresh Lime Juice", "Top with Champagne", "Absinthe glass rinse"],
    callouts: ["Violet / gin", "Absinthe rinse", "Dry sparkle"],
    footnote: "Pretty enough to be dangerous."
  },
  {
    name: "The Wrecks",
    price: 25,
    category: "Maritime smoke",
    palette: "rust",
    image: "./assets/drinks/refined-transparent/03-the-wrecks-clean.png",
    description: "Smoky, maritime, and chaotic—evoking sea-battered ruins, lost souls, and dark waters.",
    ingredients: ["1.5 oz Dark Overproof Rum", "0.5 oz Peated Islay Scotch", "0.75 oz Fresh Lime Juice", "0.75 oz Black Pepper & Ginger Syrup"],
    callouts: ["Peated / smoky", "Black pepper", "Lime / dark rum"],
    footnote: "A storm in a cut-glass tumbler."
  },
  {
    name: "Accursed Bohemian",
    price: 24,
    category: "Golden bohemian",
    palette: "gold",
    image: "./assets/img/AccursedBohemian.webp",
    description: "An elegant, golden-hued cocktail for the beautifully restless, blending aged spirits and tropical brightness.",
    ingredients: ["1.5 oz Aged Cachaça", "1 oz Pineapple Juice", "0.75 oz Passion Fruit Juice", "0.5 oz Falernum Syrup", "0.5 oz Jambu bitters"],
    callouts: ["Aged cachaça", "Tropical brightness", "Jambu / spice"],
    footnote: "Best enjoyed without a destination."
  },
  {
    name: "The Flâneur",
    price: 24,
    category: "Neon boulevard",
    palette: "coral",
    image: "./assets/drinks/refined-transparent/04-the-flaneur-clean.png",
    description: "An elegant, slow-sipping cocktail designed for wandering through the neon-lit, crowded streets of the modern metropolis.",
    ingredients: ["1.5 oz Cognac", "1 oz Sweet Vermouth", "0.75 oz Campari", "2 dashes Orange Bitters"],
    callouts: ["Cognac / warmth", "Campari / bitter", "Orange peel"],
    footnote: "Best enjoyed without a destination."
  },
  {
    name: "Decadence",
    price: 21,
    category: "Dark luxury",
    palette: "rust",
    image: "./assets/drinks/refined-transparent/05-decadence-clean.png",
    description: "Rich, heavy, and unashamedly indulgent, combining deep luxury with a hint of dark corruption.",
    ingredients: ["2 oz Bourbon", "0.5 oz Dark Coffee Liqueur", "0.25 oz Rich Demerara Syrup", "2 dashes Chocolate Bitters"],
    callouts: ["Bourbon / oak", "Dark coffee", "Chocolate bitters"],
    footnote: "The velvet rope is inside the glass."
  },
  {
    name: "The Dandy",
    price: 20,
    category: "Tailored detachment",
    palette: "coral",
    image: "./assets/drinks/refined-transparent/06-the-dandy-clean.png",
    description: "Sharp, impeccably tailored, and deceptively potent—representing rigid external perfection and internal detachment.",
    ingredients: ["2 oz London Dry Gin", "0.75 oz Lillet Blanc", "0.25 oz Maraschino Liqueur", "1 dash Peychaud’s Bitters"],
    callouts: ["Dry gin / clean", "Lillet blanc", "Cherry / pink"],
    footnote: "Immaculate from a safe distance."
  },
  {
    name: "Artificial Paradise",
    price: 25,
    category: "Surreal green",
    palette: "green",
    image: "./assets/drinks/refined-transparent/07-artificial-paradise-clean.png",
    description: "A vibrant, intensely aromatic potion that evokes an exotic, surreal sensory experience.",
    ingredients: ["1 oz Absinthe", "1 oz Green Chartreuse", "0.75 oz Fresh Lime Juice", "0.5 oz Pineapple Juice", "0.5 oz Orgeat Syrup", "Fresh Mint leaves"],
    callouts: ["Mint / pineapple", "Absinthe / anise", "Green Chartreuse"],
    footnote: "Reality, with the saturation turned up."
  },
  {
    name: "Transient Beauty",
    price: 22,
    category: "Effervescent hush",
    palette: "violet",
    image: "./assets/drinks/refined-transparent/08-transient-beauty-clean.png",
    description: "A delicate, effervescent cocktail where the presentation changes and dissolves as you drink it.",
    ingredients: ["1.5 oz Vodka or Premium Sake", "0.75 oz Elderflower Liqueur", "0.25 oz Fresh Lemon Juice", "2 drops Rose Water", "Top with Dry Prosecco"],
    callouts: ["Rose / elderflower", "Dry prosecco", "Lemon / light"],
    footnote: "Some beautiful things are meant to disappear."
  }
];

const image = document.querySelector("#drink-image");
const drinkStage = document.querySelector("#drink-stage");
const drinkName = document.querySelector("#drink-name");
const drinkPrice = document.querySelector("#drink-price");
const drinkDescription = document.querySelector("#drink-description");
const ingredientList = document.querySelector("#ingredients-list");
const ingredientCount = document.querySelector("#ingredient-count");
const footnote = document.querySelector("#drink-footnote");
const liveRegion = document.querySelector("#live-region");
const calloutEls = [
  document.querySelector("#callout-one"),
  document.querySelector("#callout-two"),
  document.querySelector("#callout-three"),
  document.querySelector("#callout-four"),
  document.querySelector("#callout-five"),
  document.querySelector("#callout-six")
];
const indexNav = document.querySelector("#drink-index");
const previousButton = document.querySelector("#previous-drink");
const nextButton = document.querySelector("#next-drink");
const heroVideo = document.querySelector(".hero__video");
const heroPending = document.querySelector(".hero__pending");
const privateEventsVideo = document.querySelector(".private-events__video");
const whatsOn = document.querySelector("#whats-on");
const whatsOnFixedBg = document.querySelector(".whats-on-fixed-bg");
const startsOnHome = !window.location.hash || window.location.hash === "#top";
if (startsOnHome) {
  if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
  const restoreHomePosition = () => {
    if (!window.location.hash || window.location.hash === "#top") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  };
  restoreHomePosition();
  window.addEventListener("load", () => window.requestAnimationFrame(restoreHomePosition), { once: true });
  window.addEventListener("pageshow", () => window.requestAnimationFrame(restoreHomePosition), { once: true });
}

if (heroVideo && heroPending) {
  heroVideo.addEventListener("canplay", () => { heroPending.hidden = true; });
  heroVideo.addEventListener("error", () => { heroPending.hidden = false; });
}
if (privateEventsVideo) {
  privateEventsVideo.muted = true;
  privateEventsVideo.defaultMuted = true;
  privateEventsVideo.setAttribute("muted", "");
}

const heroKeyhole = document.querySelector(".hero-keyhole");
const accessOverlay = document.querySelector("#access-overlay");
const accessScene = document.querySelector(".access-scene");
function setFlashlightPosition(event) {
  if (!accessOverlay) return;
  accessOverlay.style.setProperty("--flash-x", `${event.clientX}px`);
  accessOverlay.style.setProperty("--flash-y", `${event.clientY}px`);
}
function closeAccess(event) {
  if (event.key === "Escape" && accessOverlay?.classList.contains("is-open")) {
    accessOverlay.classList.remove("is-open");
    accessOverlay.setAttribute("aria-hidden", "true");
    heroKeyhole?.setAttribute("aria-pressed", "false");
  }
}
if (heroKeyhole && accessOverlay) {
  heroKeyhole.addEventListener("click", (event) => {
    accessOverlay.classList.add("is-open");
    accessOverlay.setAttribute("aria-hidden", "false");
    heroKeyhole.setAttribute("aria-pressed", "true");
    setFlashlightPosition(event);
  });
  accessOverlay.addEventListener("pointermove", setFlashlightPosition, { passive: true });
  accessOverlay.addEventListener("click", (event) => {
    if (event.target === accessOverlay) {
      accessOverlay.classList.remove("is-open");
      accessOverlay.setAttribute("aria-hidden", "true");
      heroKeyhole.setAttribute("aria-pressed", "false");
    }
  });
  document.addEventListener("keydown", closeAccess);
}

let whatsOnFrame;
function syncWhatsOnBackground() {
  if (!whatsOn || !whatsOnFixedBg) return;
  const bounds = whatsOn.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const visibleTop = Math.max(0, Math.min(viewportHeight, bounds.top));
  const visibleBottom = Math.max(0, Math.min(viewportHeight, bounds.bottom));
  const visible = visibleBottom > visibleTop;
  whatsOnFixedBg.classList.toggle("is-visible", visible);
  if (visible) {
    whatsOnFixedBg.style.clipPath = `inset(${visibleTop}px 0 ${viewportHeight - visibleBottom}px 0)`;
  }
}
function scheduleWhatsOnBackgroundSync() {
  cancelAnimationFrame(whatsOnFrame);
  whatsOnFrame = requestAnimationFrame(syncWhatsOnBackground);
}
if (whatsOn && whatsOnFixedBg) {
  window.addEventListener("scroll", scheduleWhatsOnBackgroundSync, { passive: true });
  window.addEventListener("resize", scheduleWhatsOnBackgroundSync);
  syncWhatsOnBackground();
}

let activeIndex = 0;
let transitionTimer;
let wheelLocked = false;
let touchStartY = null;

const pad = (value) => String(value).padStart(2, "0");
const ingredientLabel = (ingredient) => ingredient
  .replace(/^\d+(?:\.\d+)?\s*(?:oz|dashes?|drops?)\s*/i, "")
  .replace(/\s*\([^)]*\)/g, "")
  .replace(/^Top with\s+/i, "")
  .trim();

function buildMenuIndex() {
  indexNav.innerHTML = drinks.map((drink, index) => `
    <button class="drink-index__item${index === activeIndex ? " is-active" : ""}" type="button" data-index="${index}" aria-label="View ${drink.name}" aria-current="${index === activeIndex ? "true" : "false"}">
      <span class="drink-index__number">${pad(index + 1)}</span>
      <span class="drink-index__name">${drink.name}</span>
      <span class="drink-index__price">$${drink.price}</span>
    </button>
  `).join("");
}

function renderDrink(nextIndex, direction = 1, immediate = false) {
  activeIndex = (nextIndex + drinks.length) % drinks.length;
  const drink = drinks[activeIndex];
  const indexLabel = pad(activeIndex + 1);

  document.body.dataset.palette = drink.palette;
  document.body.dataset.drink = drink.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  document.title = `${drink.name} — Spleen Town`;
  image.src = drink.image;
  image.alt = `${drink.name} cocktail`;
  drinkName.textContent = drink.name;
  drinkPrice.textContent = `$${drink.price}`;
  drinkDescription.textContent = drink.description;
  if (ingredientCount) ingredientCount.textContent = `01—${pad(drink.ingredients.length)}`;
  footnote.textContent = drink.footnote;
  ingredientList.innerHTML = drink.ingredients.map((ingredient, index) => `
    <li><span class="ingredient-index">${pad(index + 1)}</span><span>${ingredient}</span></li>
  `).join("");
  const calloutValues = drink.ingredients
    .map(ingredientLabel)
    .slice(0, calloutEls.length);
  calloutEls.forEach((element, index) => {
    const value = calloutValues[index] || "";
    element.textContent = value;
    element.closest(".callout").hidden = !value;
  });

  document.querySelectorAll(".drink-index__item").forEach((button, index) => {
    const isActive = index === activeIndex;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-current", String(isActive));
  });

  drinkStage.classList.remove("direction-forward", "direction-back", "is-transitioning");
  if (!immediate) {
    document.body.classList.add("is-changing");
    void drinkStage.offsetWidth;
    drinkStage.classList.add(direction > 0 ? "direction-forward" : "direction-back", "is-transitioning");
    clearTimeout(transitionTimer);
    transitionTimer = window.setTimeout(() => {
      drinkStage.classList.remove("is-transitioning", "direction-forward", "direction-back");
      document.body.classList.remove("is-changing");
    }, 720);
  } else {
    document.body.classList.remove("is-changing");
  }
  liveRegion.textContent = `${drink.name}, ${drink.price} dollars. ${drink.description}`;
}

function go(step) {
  renderDrink(activeIndex + step, step, false);
}

indexNav.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-index]");
  if (!button) return;
  const targetIndex = Number(button.dataset.index);
  const direction = targetIndex >= activeIndex ? 1 : -1;
  renderDrink(targetIndex, direction, false);
});
previousButton.addEventListener("click", () => go(-1));
nextButton.addEventListener("click", () => go(1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "ArrowDown") { event.preventDefault(); go(1); }
  if (event.key === "ArrowLeft" || event.key === "ArrowUp") { event.preventDefault(); go(-1); }
});

window.addEventListener("wheel", (event) => {
  if (Math.abs(event.deltaY) < 8 || wheelLocked) return;
  event.preventDefault();
  wheelLocked = true;
  go(event.deltaY > 0 ? 1 : -1);
  window.setTimeout(() => { wheelLocked = false; }, 720);
}, { passive: false });

document.querySelectorAll(".site-nav a[href^='#']").forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    const isHome = link.getAttribute("href") === "#top";
    const isWhatsOn = link.getAttribute("href") === "#whats-on";
    if (isHome) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: isWhatsOn ? "start" : "center" });
    }
    window.history.replaceState(null, "", link.getAttribute("href"));
  });
});

document.querySelectorAll("[data-scroll-target]").forEach((control) => {
  control.addEventListener("click", () => {
    const target = document.querySelector(control.dataset.scrollTarget);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", control.dataset.scrollTarget);
  });
});

drinkStage.addEventListener("mouseenter", () => document.body.classList.add("stage-hovered"));
drinkStage.addEventListener("mouseleave", () => document.body.classList.remove("stage-hovered"));
drinkStage.addEventListener("touchstart", (event) => { touchStartY = event.changedTouches[0].clientY; }, { passive: true });
drinkStage.addEventListener("touchend", (event) => {
  if (touchStartY === null) return;
  const delta = touchStartY - event.changedTouches[0].clientY;
  if (Math.abs(delta) > 36) go(delta > 0 ? 1 : -1);
  touchStartY = null;
}, { passive: true });

buildMenuIndex();
renderDrink(0, 1, true);
