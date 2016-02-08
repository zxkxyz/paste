// Make the editor

var initText = "";
if(window.localStorage.myEditor !== undefined) {
  initText = window.localStorage.myEditor;
}

var editor = CodeMirror(document.getElementById("codeArea"),
  {
    value: initText,
    lineNumbers: true,
    tabSize: 2,
    smartIndent: true
  });

window.localStorage.myEditor = editor.getValue();

// URL for saving/requesting
var API_URL = 'http://localhost:3000/'

function submitCode(title, data, syntax) {
  var url = API_URL + 'upload';

  var obj = {
    title: title,
    codemirror: data,
    syntax: 'plaintext'
  }

  $.ajax({
    type: "POST",
    url: url,
    data: obj,
    success: function(data) {
      console.log("SUCCESS:", data);
    },
    error: function(data, err) {
      if (err) throw err;
    }
  });
}

editor.on('change', function() {
  window.localStorage.myEditor = editor.getValue();
  console.log("stored new state");
  console.log(window.localStorage.myEditor);
});


$('.codeSubmit').click(function() {
  var text = editor.getValue();
  alert(text);
  // submitCode($('.codeInput').val());
});
