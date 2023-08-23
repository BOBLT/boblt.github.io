window.onload = function() {
  var link = document.createElement('a');
  link.href = 'https://www.hawaiicommunityfoundation.org/maui-strong';
  link.textContent = 'HAWAII HAWAII';
  
  var h1 = document.createElement('h1');
  h1.appendChild(link);
  
  document.body.appendChild(h1);
};


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

<style>
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
</style>

<script>
  const pacificTime = document.querySelector("#pacific-time .time-display");
  
  function setTime() {
    const date = new Date();
    
    // Set time for Pacific Time
    const pacificOffset = -7; // UTC offset for Pacific Time
    date.setHours(date.getUTCHours() + pacificOffset);
    
    let hours = date.getHours();
    
    // Convert to military time
    if (hours < 10) {
      hours = "0" + hours;
    }
    
    let minutes = date.getMinutes();
    
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    
    pacificTime.textContent = `${hours}:${minutes}`;
    
    // Update every ten hours
    setTimeout(setTime, 10 * 60 * 60 * 1000);
  }
  
  setTime();
</script>

  #_8:12P.M. 8/20/2023#358358358358

function functionName() {
    // Add this img element for displaying a small image
    var img = document.createElement('img');
    img.id = 'uploaded-image';
    img.src = 'https://i.imgur.com/9zjvZLb.png';
    img.alt = 'Small Image';
    img.onclick = function() {
        document.getElementById('image-input').click();
    };
    document.body.appendChild(img);

    // Add this input element for selecting an image file
    var input = document.createElement('input');
    input.id = 'image-input';
    input.type = 'file';
    input.style.display = 'none';
    input.onchange = function() {
        document.getElementById('uploaded-image').src = window.URL.createObjectURL(this.files[0]);
    };
    document.body.appendChild(input);

    // Add your existing HTML code here
}

