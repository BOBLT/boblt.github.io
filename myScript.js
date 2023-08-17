window.onload = function() {
  var link = document.createElement('a');
  link.href = 'https://www.hawaiicommunityfoundation.org/maui-strong';
  link.textContent = 'HAWAII HAWAII';
  
  var h1 = document.createElement('h1');
  h1.appendChild(link);
  
  document.body.appendChild(h1);
};

<script>
 <div id="clocks">
  <div id="pacific-time" class="clock">
    <div class="half-circle"></div>
    <div class="time-display">12:00</div>
  </div>
  <div id="atlantic-time" class="clock">
    <div class="half-circle"></div>
    <div class="time-display">12:00</div>
  </div>
</div>
 #clocks {
  display: flex;
}

.clock {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 50%;
  position: relative;
}

.half-circle {
  width: 50px;
  height: 50px;
  border-radius: 50px 50px 0 0;
  background-color: lightblue;
  position: absolute;
  top: -1px;
  left: calc(50% - 25px);
}

.time-display {
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
}
</script>
