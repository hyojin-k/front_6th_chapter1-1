import { router } from "./router.js";

const enableMocking = () =>
  import("./mocks/browser.js").then(({ worker, workerOptions }) => worker.start(workerOptions));

async function main() {
  window.addEventListener("popstate", () => router());

  // 초기 라우팅
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", router);
  } else {
    router();
  }
}

// 애플리케이션 시작
if (import.meta.env.MODE !== "test") {
  enableMocking().then(main);
} else {
  main();
}
