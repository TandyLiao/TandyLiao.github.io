document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("bgVideo");
    const btnPower = document.getElementById("btnPower");
    const btnTriangle = document.getElementById("btnTriangle");
    const infoPanel = document.getElementById("infoPanel");
  
    let videoStarted = false;
  
    // 第一次按開關 → 播放影片並循環
    btnPower.addEventListener("click", async () => {
      try {
        if (!videoStarted) {
          video.loop = true;
          await video.play();
          videoStarted = true;
          console.log("影片開始循環播放");
        } else {
          console.log("開關再次被按，目前不改變影片，只當一般按鈕用");
        }
      } catch (e) {
        console.error("影片播放失敗：", e);
      }
    });
  
    // 三角形 → 顯示資訊面板（不碰影片）
    btnTriangle.addEventListener("click", () => {
      infoPanel.classList.remove("show");
      void infoPanel.offsetWidth; // 讓動畫可以重播
      infoPanel.classList.add("show");
    });
  });
  