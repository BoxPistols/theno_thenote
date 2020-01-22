'use strict';

new Vue({
  el: '#editor',
  data: {
    input: '# MarkDownEditor'

  },
  computed: {
    compiledMarkdown: function compiledMarkdown() {
      return marked(this.input, {
        sanitize: true
      });
    }
  },
  methods: {
    update: _.debounce(function(e) {
      this.input = e.target.value;
    }, 10)
  }
});

function init() {
  document.querySelector("#editor").addEventListener("input", function() {
    function setItems(data) {
      var data = {
        name: document.querySelector("#name").value
      };
      return data;
    }
    localStorage.setItem("mkedotor", JSON.stringify(data));
  }, false);
}

function init() {
  var oldData = localStorage.getItem("mkedotor");
  if (oldData) {
    var realData = JSON.parse(oldData);
    document.querySelector("#name").value = realData.name;
  }
  document.querySelector("#editor").addEventListener("input", function() {
    var data = {
      name: document.querySelector("#name").value
    };
    localStorage.setItem("mkedotor", JSON.stringify(data));
  }, false);

  $("#clear").click(function() {
    var retVal = confirm("削除してよろしいでございますです?");
    if (retVal == true) {
      alert("削除しました!");
      localStorage.removeItem("mkedotor");
      $("this").attr("disabled", true);
      document.querySelector("#name").value = "";
      location.reload();
      return true;
    } else {
      console.log('削除のキャンセル')
      return false;
    }
  });
}

//
$(function() {
  if (typeof Blob !== "undefined") {
    console.log('このブラウザに対応しています');
  } else {
    alert('このブラウザには対応していません');
  }
  $("#content").keyup(function() {
    setBlobUrl("download", $("#content").val());
  });
  $("#content").keyup();
});

function setBlobUrl(id, content) {
  var blob = new Blob([content], {
    "type": "application/x-msdownload"
  });
  window.URL = window.URL || window.webkitURL;
  $("#" + id).attr("href", window.URL.createObjectURL(blob));
  $("#" + id).attr("download", "tmp.txt");
}
$(function() {
  $('textarea').on('change input', function() {}).change();
});
