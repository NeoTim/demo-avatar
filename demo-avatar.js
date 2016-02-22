(function() {
  "use strict";

  var str = '<a id="avatar" class="avatar" href="http://forsigner.com/" target="_blank" style="position: absolute;top: 20px;display: inline-block;left: 50%;margin-left:-30px;">' +
    '<img src="http://forsigner.com/images/avatar.jpg" alt="forsigner" title="go home" style="width: 60px; height: 60px;border-radius: 50%;">' +
    '</a>';

  var $div = document.createElement('div');
  $div.innerHTML = str;
  document.body.appendChild($div);


}());
