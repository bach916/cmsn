// 🎈 Tạo bóng bay
function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
  
    // màu ngẫu nhiên
    const colors = ["#ff4b2b", "#ffcc00", "#4bff2b", "#2b9eff", "#ff2bb5"];
    balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
  
    // vị trí ngang ngẫu nhiên
    balloon.style.left = Math.random() * window.innerWidth + "px";
  
    // thời gian bay nhanh hơn
    balloon.style.animationDuration = 5 + Math.random() * 3 + "s";
  
    document.body.appendChild(balloon);
  
    setTimeout(() => {
      balloon.remove();
    }, 8000);
  }
  
  setInterval(createBalloon, 500);
  