
/*task1*/
var divTask1 = document.querySelector('#divTask1');
divTask1.onmousemove = function (event){
   var offSetX = document.querySelector('#offSetX');
   var offSetY = document.querySelector('#offSetY');

   offSetX.innerHTML = `offSetX : ${event.offsetX}`;
   offSetY.innerHTML = `offSetY : ${event.offsetY}`;
 };

 /*task2*/

 var img = document.querySelector('#imgTask2');
 var divTask2 = document.querySelector('.divTask2');

 function openFolder (){
 img.src = 'img/open.png';
 }
 divTask2.addEventListener('dblclick', openFolder);

/*task3*/

var createButton = document.getElementById('createBtn');
var cont = document.getElementById('container');

createButton.addEventListener('click', createBlocks);

function createBlocks() {
	for (var i = 0; i < 300; i++) {
		var el = document.createElement('div');
		el.classList.add('block');
		container.appendChild(el);
	}

	var block = document.querySelectorAll('.block');
	block.forEach(function(el) {
		el.addEventListener('mouseover', makeCircle);
		el.addEventListener('mouseout', makeSquare);
	});

	function makeCircle() {
		this.classList.add('circle');
	}

	function makeSquare() {
		this.classList.remove('circle');
	}
}

/*task4*/

 var divTask4iv = document.querySelector('#divTask4');
 var imgTask4 = document.getElementsByClassName('imgTask4');
 for (let i = 0; i < imgTask4.length; i++) {
   imgTask4[i].onclick = function changeBgd() {
     divTask4iv.style.backgroundImage = 'url(' + this.src + ')';
   };
 }

 /*task5*/
 function animateBox() {
     var pos = 0;
     var box = document.getElementById('divTask5');
     var t = setInterval(move,30);

     function move() {
         if(pos >= 50) {
             clearInterval(t);
         }
         else {
             pos += 1;
             divTask5.style.top = pos+'px';
         }
     }
 }
	divTask5.addEventListener("click",animateBox)

 /*task6*/

 var contTAsk6 = document.querySelector('#conteinerTask6');
 var divTask6 = document.querySelector('#divTask6');
 var count = 0;

   function runTriger() {

     var moveRight = divTask6.style.marginRight;

     if (moveRight === '') {
       divTask6.style.marginRight = '100px';
       divTask6.style.marginLeft = "auto";
       count++;
  	}
      else if (moveRight === '100px') {
      divTask6.style.marginRight = '0';
      count++;

     } else {
     divTask6.style.marginLeft = "0";
     count = 3;
    }

   console.log(count);
  }
   divTask6.addEventListener('click', runTriger);
