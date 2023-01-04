<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
    <style>
      .outer1,
      .outer2,
      .outer3 {
      background-color: powderblue;
      width: 500px;
      height: 100px;
      border: 2px thick black;
      margin-bottom: 100px;
      align-items: center;
      }
      .inner {
      float: left;
      width: 50px;
      height: 50px;
      padding: 20px;
      }
    </style>
  </head>
  <body>
    <div class="outer1">
      <div class="inner">
        <button>Click me 0</button>
      </div>
      <div class="inner">
        <button>Click me 0</button>
      </div>
      <div class="inner">
        <button>Click me 0</button>
      </div>
    </div>
    <div class="outer2">
      <div class="inner">
        <button>Click me 0</button>
      </div>
      <div class="inner">
        <button>Click me 0</button>
      </div>
      <div class="inner">
        <button>Click me 0</button>
      </div>
    </div>
    <div class="outer3">
      <div class="inner">
        <button>Click me 0</button>
      </div>
      <div class="inner">
        <button>Click me 0</button>
      </div>
      <div class="inner">
        <button>Click me 0</button>
      </div>
    </div>
    <script>
      let count_o1i = {};
      let o1i = document.querySelectorAll(".outer1 .inner > button");
      o1i.forEach((btn, index) => count_o1i[index] = 1);
      o1i.forEach((btn, index) => {
          btn.addEventListener("click", function(e) {
              e.target.innerHTML = `Click me ${count_o1i[index]}`;
              count_o1i[index]++;
              console.log(count_o1i);
          });
      });
      
      let count_o2i = 1;
      let o2i = document.querySelectorAll(".outer2 .inner > button")
      o2i.forEach((btn) => {
          btn.addEventListener("click", function(e) {
              e.target.innerHTML = `Click me ${count_o2i}`;
              count_o2i++;
          });
      });
      
      let o3i = document.querySelectorAll(".outer3 .inner > button")
      o3i.forEach((btn, index) => {
          btn.addEventListener("click", function(e) {
              alert(count_o1i[index] - 1);
          });
      });
    </script>
  </body>
</html>
