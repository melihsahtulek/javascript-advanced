const shareBtn = document.getElementById("shareBtn");

if (navigator.share) {
  shareBtn.addEventListener("click", async () => {
    try {
      await navigator.share({
        title: "GOOGLE",
        text: "this is google link...",
        url: "https://www.google.com.tr",
      });
      console.log("ok");
    } catch (error) {
      console.log(error);
    }
  });
}
