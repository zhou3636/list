var iframe = document.getElementById('Iframe');
iframe.onload = function() {
  // 获取iframe内容的高度
  var iframeHeight = iframe.contentWindow.document.body.scrollHeight;
  // 设置iframe和div高度
  iframe.style.height = iframeHeight + 'px';
  document.getElementById('container').style.height = iframeHeight + 'px';
}