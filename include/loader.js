(async () => {
  try {
    // 1) ヘッダ
    const headerBox = document.querySelector("#header");
    if (headerBox) {
      const html = await fetch("/tachibanaura-site/include/header.html", {cache:"no-store"}).then(r=>r.text());
      headerBox.innerHTML = html;
    }

    // 2) フッタ（A/Bどちらの方式かでターゲットIDを変えて）
    const footerBox = document.querySelector("#footer, #footer-inner");
    if (footerBox) {
      const url = footerBox.id === "footer" 
        ? "/tachibanaura-site/include/footer.html"        // パターンB
        : "/tachibanaura-site/include/footer-inner.html"; // パターンA
      const html = await fetch(url, {cache:"no-store"}).then(r=>r.text());
      footerBox.innerHTML = html;
      footerBox.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
    }

    // 3) スタイル（<style id="style"> が <head> にある前提）
    const styleEl = document.querySelector("#style");
    if (styleEl) {
      styleEl.innerHTML = await fetch("/tachibanaura-site/include/style.html", {cache:"no-store"}).then(r=>r.text());
    }

    // 4) 背景
    const bgBox = document.querySelector("#backimage");
    if (bgBox) {
      bgBox.innerHTML = await fetch("/tachibanaura-site/include/backimage.html", {cache:"no-store"}).then(r=>r.text());
    }
  } catch(e) {
    console.warn("include load failed:", e);
  }
})();
