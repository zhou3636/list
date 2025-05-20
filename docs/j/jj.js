// 选择所有播放按钮
const playBtns = document.querySelectorAll('.playBtn');
const modal = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('closeBtn');
const video = document.getElementById('popupVideo');

// 打开弹窗并自动播放
playBtns.forEach(btn => {
  btn.onclick = function () {
    modal.classList.add('active');
    video.currentTime = 0; // 从头播放
    video.play();
  };
});

// 关闭弹窗并停止播放
closeBtn.onclick = function () {
  modal.classList.remove('active');
  video.pause();
  video.currentTime = 0; // 可选：回到视频开头
};

// 点击遮罩关闭弹窗
// modal.onclick = function (e) {
//   if (e.target === modal) {
//     modal.classList.remove('active');
//     video.pause();
//     video.currentTime = 0;
//   }
// };