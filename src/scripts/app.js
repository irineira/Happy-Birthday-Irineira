

												// // все подключения кастомных скриптов
												// require('./common/custom');







var audio = document.getElementById("myAudio"); 

// popap

$(".btn_notus").on('click', function() {
	audio.play(); 
	let body_elem = document.querySelector("body").style.overflow = "visible"
	let fon = document.querySelector(".fon_w").style.display = "none";
});

$(".btn_tus").on('click', function() {
	let b = document.querySelector(".popap1").style.display = "block";
	let elem = document.querySelector(".ten").style.display = "block";
	let body_elem = document.querySelector("body").style.overflow = "hidden";
});


$(".close").on('click', function() {
	let b = document.querySelector(".popap1").style.display = "none";
	let elem = document.querySelector(".ten").style.display = "none";
	let body_elem = document.querySelector("body").style.overflow = "visible";
});


// скрипка
$(".scripka1").on('click', function() {
	audio.pause(); 
	this.style.display = "none";
	var s2 = document.querySelector(".scripka2").style.display = "block";
});

$(".scripka2").on('click', function() {
	audio.play(); 
	this.style.display = "none";
	var s1 = document.querySelector(".scripka1").style.display = "block";
});


// япония ГО
$(".jp_btn").on('click', function() {
	var cont = document.querySelector(".jp_content").style.display = "none";
	var vic = document.querySelector(".victorina").style.display = "block";
});



// VICTORINA
$(".btn_ans1").on('click', function() {
	let chec_true = document.querySelector(".true");
	if(chec_true.checked){
		$(".shifr_num").append(`<span>${chec_true.value}</span>`);
		var b1 = document.querySelector(".vkblock_qw1_block").style.display = "none";
		var b2 = document.querySelector(".vkblock_qw1_block2").style.display = "block";
		let n = document.querySelector(".number").textContent = "2";
		let n2 = document.querySelector(".number2").textContent = "2";
	}
	else{
		var pop = document.querySelector(".vkblock .popap1").style.display = "block";
		var t = document.querySelector(".vkblock .ten").style.display = "block";
	}
});

$(".btn_ans2").on('click', function() {
	let chec_true = document.querySelector(".true2");
	if(chec_true.checked){
		$(".shifr_num").append(`<span>${chec_true.value}</span>`);
		var b1 = document.querySelector(".vkblock_qw1_block2").style.display = "none";
		var b2 = document.querySelector(".vkblock_qw1_block3").style.display = "block";
		let n = document.querySelector(".number").textContent = "3";
		let n2 = document.querySelector(".number2").textContent = "3";
	}
	else{
		var pop = document.querySelector(".vkblock .popap1").style.display = "block";
		var t = document.querySelector(".vkblock .ten").style.display = "block";
	}
});

$(".btn_ans3").on('click', function() {
	let chec_true = document.querySelector(".true3");
	if(chec_true.checked){
		$(".shifr_num").append(`<span>${chec_true.value}</span>`);
		var b1 = document.querySelector(".vkblock_qw1_block3").style.display = "none";
		var b2 = document.querySelector(".vkblock_qw1_block4").style.display = "block";
		let n = document.querySelector(".number").textContent = "4";
		let n2 = document.querySelector(".number2").textContent = "4";
	}
	else{
		var pop = document.querySelector(".vkblock .popap1").style.display = "block";
		var t = document.querySelector(".vkblock .ten").style.display = "block";
	}
});

$(".btn_ans4").on('click', function() {
	let chec_true = document.querySelector(".true4");
	if(chec_true.checked){
		$(".shifr_num").append(`<span>${chec_true.value}</span>`);
		var b1 = document.querySelector(".vkblock_qw1_block4").style.display = "none";
		var b2 = document.querySelector(".vkblock_qw1_block5").style.display = "block";
		let n = document.querySelector(".number").textContent = "5";
		let n2 = document.querySelector(".number2").textContent = "5";
	}
	else{
		var pop = document.querySelector(".vkblock .popap1").style.display = "block";
		var t = document.querySelector(".vkblock .ten").style.display = "block";
	}
});

$(".btn_ans5").on('click', function() {
	let chec_true = document.querySelector(".true5");
	if(chec_true.checked){
		$(".shifr_num").append(`<span>${chec_true.value}</span>`);
		var b1 = document.querySelector(".vkblock_qw1_block5").style.display = "none";
		var b2 = document.querySelector(".vkblock_qw1_block6").style.display = "block";
		let n = document.querySelector(".number").textContent = "6";
		let n2 = document.querySelector(".number2").textContent = "6";
	}
	else{
		var pop = document.querySelector(".vkblock .popap1").style.display = "block";
		var t = document.querySelector(".vkblock .ten").style.display = "block";
	}
});

$(".btn_ans6").on('click', function() {
	let chec_true = document.querySelector(".true6");
	if(chec_true.checked){
		$(".shifr_num").append(`<span>${chec_true.value}</span>`);
		var b1 = document.querySelector(".vkblock_qw1_block6").style.display = "none";
		var b2 = document.querySelector(".vkblock_qw1_block7").style.display = "block";
		let n = document.querySelector(".number").textContent = "7";
		let n2 = document.querySelector(".number2").textContent = "7";
	}
	else{
		var pop = document.querySelector(".vkblock .popap1").style.display = "block";
		var t = document.querySelector(".vkblock .ten").style.display = "block";
	}
});


$(".btn_ans7").on('click', function() {
	let chec_true = document.querySelector(".true7");
	if(chec_true.checked){
		$(".shifr_num").append(`<span>${chec_true.value}</span>`);
		var b1 = document.querySelector(".vkblock_qw1_block7").style.display = "none";
		var b2 = document.querySelector(".vkblock_qw1_block8").style.display = "block";
		let n = document.querySelector(".number").textContent = "8";
		let n2 = document.querySelector(".number2").textContent = "8";
	}
	else{
		var pop = document.querySelector(".vkblock .popap1").style.display = "block";
		var t = document.querySelector(".vkblock .ten").style.display = "block";
	}
});

$(".btn_ans8").on('click', function() {
	let chec_true = document.querySelector(".true8");
	if(chec_true.checked){
		$(".shifr_num").append(`<span>${chec_true.value}</span>`);
		var b1 = document.querySelector(".vkblock_qw1_block8").style.display = "none";
		var b2 = document.querySelector(".vkblock_qw1_block9").style.display = "block";
		let n = document.querySelector(".number").textContent = "9";
		let n2 = document.querySelector(".number2").textContent = "9";
	}
	else{
		var pop = document.querySelector(".vkblock .popap1").style.display = "block";
		var t = document.querySelector(".vkblock .ten").style.display = "block";
	}
});

$(".btn_ans9").on('click', function() {
	let chec_true = document.querySelector(".true9");
	if(chec_true.checked){
		$(".shifr_num").append(`<span>${chec_true.value}</span>`);
		var b1 = document.querySelector(".vkblock_qw1_block9").style.display = "none";
		var b2 = document.querySelector(".vkblock_qw1_block10").style.display = "block";
		let n = document.querySelector(".number").textContent = "10";
		let n2 = document.querySelector(".number2").textContent = "10";
	}
	else{
		var pop = document.querySelector(".vkblock .popap1").style.display = "block";
		var t = document.querySelector(".vkblock .ten").style.display = "block";
	}
});

$(".btn_ans10").on('click', function() {
	let chec_true = document.querySelector(".true10");
	if(chec_true.checked){
		$(".shifr_num").append(`<span>${chec_true.value}</span>`);
		var b1 = document.querySelector(".vkblock_qw1_block10").style.display = "none";
		var b2 = document.querySelector(".vkblock_qw1_block11").style.display = "block";
		let n = document.querySelector(".number").textContent = "11";
		let n2 = document.querySelector(".number2").textContent = "11";
	}
	else{
		var pop = document.querySelector(".vkblock .popap1").style.display = "block";
		var t = document.querySelector(".vkblock .ten").style.display = "block";
	}
});

$(".btn_ans11").on('click', function() {
	let chec_true = document.querySelector(".true11");
	if(chec_true.checked){
		$(".shifr_num").append(`<span>${chec_true.value}</span>`);
		var b1 = document.querySelector(".vkblock_qw1_block11").style.display = "none";
		var b2 = document.querySelector(".vkblock_qw1_block12").style.display = "block";
		let n = document.querySelector(".number").textContent = "12";
		let n2 = document.querySelector(".number2").textContent = "12";
	}
	else{
		var pop = document.querySelector(".vkblock .popap1").style.display = "block";
		var t = document.querySelector(".vkblock .ten").style.display = "block";
	}
});

$(".btn_ans12").on('click', function() {
	let chec_true = document.querySelector(".true12");
	if(chec_true.checked){
		$(".shifr_num").append(`<span>${chec_true.value}</span>`);
		var b1 = document.querySelector(".vkblock_qw1_block12").style.display = "none";
		var b2 = document.querySelector(".vkblock_qw1_block13").style.display = "block";
		let n = document.querySelector(".number").textContent = "13";
		let n2 = document.querySelector(".number2").textContent = "13";
	}
	else{
		var pop = document.querySelector(".vkblock .popap1").style.display = "block";
		var t = document.querySelector(".vkblock .ten").style.display = "block";
	}
});

$(".btn_ans13").on('click', function() {
	let chec_true = document.querySelector(".true13");
	if(chec_true.checked){
		$(".shifr_num").append(`<span>${chec_true.value}</span>`);
		var b1 = document.querySelector(".vkblock_qw1_block13").style.display = "none";
		var b2 = document.querySelector(".vkblock_qw1_block14").style.display = "block";
	}
	else{
		var pop = document.querySelector(".vkblock .popap1").style.display = "block";
		var t = document.querySelector(".vkblock .ten").style.display = "block";
	}
});


$(".btn_ans14").on('click', function() {
	let inp = document.querySelector(".inp");
	
	if(inp.value == "2312331232121"){
		var v = document.querySelector(".victorina").style.display = "none"; 
		var p = document.querySelector(".palki").style.display = "block";
	}
	else{
		var pop = document.querySelector(".vkblock .popap1").style.display = "block";
		var t = document.querySelector(".vkblock .ten").style.display = "block";
	}
});




// Переход в третий пункт
$(".palki_btn").on('click', function() {
	let inp = document.querySelector(".palki_inp");
	
	if(inp.value == "sushiki"){
		var v = document.querySelector(".palki").style.display = "none"; 
		var p = document.querySelector(".otlichi").style.display = "block";
	}
	else{
		var pop = document.querySelector(".palki .popap1").style.display = "block";
		var t = document.querySelector(".palki .ten").style.display = "block";
	}
});

$(".close").on('click', function() {
	let b = document.querySelector(".palki .popap1").style.display = "none";
	let elem = document.querySelector(".palki .ten").style.display = "none";
	let body_elem = document.querySelector("body").style.overflow = "visible";
});




// Переход в 4 пункт
$(".otlichibtninp__btn").on('click', function() {
	let inp = document.querySelector(".otlichibtninp__inp");
	
	if(inp.value == "рис"){
		var v = document.querySelector(".otlichi").style.display = "none"; 
		var p = document.querySelector(".sootnesi").style.display = "block";
	}
	else{
		var pop = document.querySelector(".otlichi .popap1").style.display = "block";
		let in_t = inp.value;
		console.log(in_t);
		let otvet = document.querySelector(".otvet");
		otvet.textContent = in_t;
		var t = document.querySelector(".otlichi .ten").style.display = "block";
	}
});


$(".close").on('click', function() {
	let b = document.querySelector(".otlichi .popap1").style.display = "none";
	let elem = document.querySelector(".otlichi .ten").style.display = "none";
	let body_elem = document.querySelector("body").style.overflow = "visible";
});



// Переход в США
$(".go_usa").on('click', function() {
	let inp = document.querySelector(".inp_usa");
	console.log("da");
	
	if(inp.value == "USA"){
		document.location.href = "./USA.html";
		console.log("тне1");
	}
	else{
		var pop = document.querySelector(".sootnesi .popap1").style.display = "block";
		var t = document.querySelector(".sootnesi .ten").style.display = "block";
		console.log("ne2");
	}
});


$(".close_so").on('click', function() {
	let b = document.querySelector(".ten_so").style.display = "none";
	let elem = document.querySelector(".pop_so").style.display = "none";
	let body_elem = document.querySelector("body").style.overflow = "visible";
});




// USA


function searche() {
	var soo = document.querySelector('#msg');
	console.log("1");
	if(soo){
		clearInterval(intervalID);
		console.log("div");
		soo.textContent = "Молодец, ты побила этого злодея)";

		setTimeout(function (){
			let p_0 = document.querySelector(".block1 .popap1").style.display = "block";
		}, 2000)

	}       
	  
}
var intervalID = setInterval(searche, 250);





// США  НА 2 ПУНКТ
$(".go_block2").on('click', function() {
	
	// var v = document.querySelector(".block1").style.display = "none"; 
	// var p = document.querySelector(".block2").style.display = "block";
	document.location.href = "./USA1.html";
	
});





// США НА 3 пункт
$(".foto_btn1").on('click', function() {
	clearInterval(intervalID);
	let inp = document.querySelector(".foto_inp1");
	
	if(inp.value == "язык"){
		let tr = document.querySelector(".pp").textContent = "55%";
		let inn = document.querySelector(".block2 .progress__inner").style.width = "55%"; 
		let ft = document.querySelector(".block2 .progress__fotoblock div:nth-child(3)").style.width = "80px";
		var v = document.querySelector(".block2__otl1").style.display = "none"; 
		var p = document.querySelector(".block2__otl2").style.display = "block";
	}
	else{
		var pop = document.querySelector(".block2 .popap1").style.display = "block";
		var t = document.querySelector(".block2 .ten").style.display = "block";
	}
});

$(".foto_btn2").on('click', function() {
	clearInterval(intervalID);
	let inp = document.querySelector(".foto_inp2");
	
	if(inp.value == "парус"){
		let tr = document.querySelector(".pp").textContent = "60%";
		let inn = document.querySelector(".block2 .progress__inner").style.width = "60%"; 
		let ft = document.querySelector(".block2 .progress__fotoblock div:nth-child(3)").style.width = "100px";   
		var v = document.querySelector(".block2__otl2").style.display = "none"; 
		var p = document.querySelector(".block2__otl3").style.display = "block";
	}
	else{
		var pop = document.querySelector(".block2 .popap1").style.display = "block";
		var t = document.querySelector(".block2 .ten").style.display = "block";
	}
});



$(".foto_btn3").on('click', function() {
	clearInterval(intervalID);
	let inp = document.querySelector(".foto_inp3");
	
	if(inp.value == "родинка"){  
		var v = document.querySelector(".block2").style.display = "none"; 
		var p = document.querySelector(".block3").style.display = "block";
	}
	else{
		var pop = document.querySelector(".block2 .popap1").style.display = "block";
		var t = document.querySelector(".block2 .ten").style.display = "block";
	}
});


$(".close_usa1").on('click', function() {
	let b = document.querySelector(".block2 .popap1").style.display = "none";
	let elem = document.querySelector(".block2 .ten").style.display = "none";
	let body_elem = document.querySelector("body").style.overflow = "visible";
});



// USA STEP 3 Переход в КУБУ
$(".nap_btn").on('click', function() {
	clearInterval(intervalID);
	let inp = document.querySelector(".nap_inp");
	
	if(inp.value == "Куба"){  
		document.location.href = "./Cuba.html";
	}
	else{
		var pop = document.querySelector(".block3 .popap1").style.display = "block";
		var t = document.querySelector(".block3 .ten").style.display = "block";
	}
});


$(".close_usa2").on('click', function() {
	let b = document.querySelector(".block3 .popap1").style.display = "none";
	let elem = document.querySelector(".block3 .ten").style.display = "none";
	let body_elem = document.querySelector("body").style.overflow = "visible";
});







// КУба
$(".privet_btn").on('click', function() {
	 
		var v = document.querySelector(".privet").style.display = "none"; 
		var p = document.querySelector(".concurs1").style.display = "block";
	
});


// CUBA 1 CONCURS
$(".concurs1_btn1").on('click', function() {
	clearInterval(intervalID);
	let inp = document.querySelector(".concurs1_inp1");
	
	if(inp.value == "мята"){  
		var v = document.querySelector(".concurs1__moch").style.display = "none"; 
		var p = document.querySelector(".concurs1__libre").style.display = "block";
	}
	else{
		var pop = document.querySelector(".custom_popap").style.display = "block";
		var t = document.querySelector(".custom_ten").style.display = "block";
	}
});


$(".concurs1_btn2").on('click', function() {
	clearInterval(intervalID);
	let inp = document.querySelector(".concurs1_inp2");
	
	if(inp.value == "Куба либре"){  
		var v = document.querySelector(".concurs1").style.display = "none"; 
		var p = document.querySelector(".tanci").style.display = "block";
		setTimeout(function(){
			let kn = document.querySelector(".tanci_btn1").style.display = "block";
		}, 3000);
	}
	else{
		let txt = document.querySelector(".custom_text").textContent = "Ты не могла ошибиться, наверное неправильно написала)";
		let c_i = document.querySelector(".custom_img").setAttribute("src", "");
		var pop = document.querySelector(".custom_popap").style.display = "block";
		var t = document.querySelector(".custom_ten").style.display = "block";
	}
});


$(".custom_close").on('click', function() {
	let b = document.querySelector(".custom_popap").style.display = "none";
	let elem = document.querySelector(".custom_ten").style.display = "none";
	let body_elem = document.querySelector("body").style.overflow = "visible";
});



// КУБА "2Й КОНКУРС"
$(".tanci_btn1").on('click', function() {
	
	var v = document.querySelector(".tanci__blockvid1").style.display = "none"; 
	var p = document.querySelector(".tanci__blockvid2").style.display = "block";
	setTimeout(function(){
		let kn = document.querySelector(".tanci_btn2").style.display = "block";
	}, 3000);
	
});


$(".tanci_btn2").on('click', function() {
	
	var v = document.querySelector(".tanci__blockvid2").style.display = "none"; 
	var p = document.querySelector(".tanci__blockvid3").style.display = "block";
	setTimeout(function(){
		let kn = document.querySelector(".tanci_btn3").style.display = "block";
	}, 3000);
	
});


$(".tanci_btn3").on('click', function() {
	
	

	let txt = document.querySelector(".custom_text").textContent = "Ес, и с этим ты справилась. Ну не зря же ты все это делала, ты натанцевала себе билет на следующую тусу)";
	$(".custom_text").append(`<img style="display: block; margin: 0 auto;" src="http://qrcoder.ru/code/?http%3A%2F%2Flocalhost%3A3000%2Fprize.html&4&0" width="148" height="148" border="0" title="QR код">`)
	let c_i = document.querySelector(".custom_img").setAttribute("src", "./images/tnc.png");
	var pop = document.querySelector(".custom_popap").style.display = "block";
	var popa = document.querySelector(".custom_popap").style.width = "50%";
	var t = document.querySelector(".custom_ten").style.display = "block";

	var ti = document.querySelector(".inp_danet").style.display = "block";
	var tb = document.querySelector(".go_danet").style.display = "block";
	
});




$(".go_danet").on('click', function() {
	let inp = document.querySelector(".inp_danet");
	
	if(inp.value == "1313"){  
		var v = document.querySelector(".tanci").style.display = "none"; 
		var p = document.querySelector(".predfinal").style.display = "block";
		var t = document.querySelector(".custom_ten").style.display = "none";
		var pop = document.querySelector(".custom_popap").style.display = "none";
		
	}
});




// КОНКУРС ДАНЕТ

$(".button_ver1").on('click', function() {
	var v = document.querySelector(".predfinal__block1").style.display = "none"; 
	var p = document.querySelector(".predfinal__block2").style.display = "block";

	let tr = document.querySelector(".wp").textContent = "88%";
	let inn = document.querySelector(".progress__inner").style.width = "88%"; 
	let ft = document.querySelector(".predfinal .progress__fotoblock div:nth-child(5)").style.width = "110px";
		
});

$(".button_never1").on('click', function() {
	


	let txt = document.querySelector(".custom_text").textContent = "На самом деле, это правда)";
	let cl = document.querySelector(".custom_close").remove();
	let c_i = document.querySelector(".custom_img").remove();
	var pop = document.querySelector(".custom_popap").style.display = "block";
	var popi = document.querySelector(".custom_popap").style.padding = "20px";
	var t = document.querySelector(".custom_ten").style.display = "block";

	setTimeout(function() {
		var pops = document.querySelector(".custom_popap").style.display = "none";
		var te = document.querySelector(".custom_ten").style.display = "none";
		var v = document.querySelector(".predfinal__block1").style.display = "none"; 
		var p = document.querySelector(".predfinal__block2").style.display = "block";

		let tr = document.querySelector(".wp").textContent = "88%";
		let inn = document.querySelector(".progress__inner").style.width = "88%"; 
		let ft = document.querySelector(".predfinal .progress__fotoblock div:nth-child(5)").style.width = "110px";
	}, 2000)
	
		
});


$(".button_ver2").on('click', function() {
	var v = document.querySelector(".predfinal__block2").style.display = "none"; 
	var p = document.querySelector(".predfinal__block3").style.display = "block";

	let tr = document.querySelector(".wp").textContent = "91%";
	let inn = document.querySelector(".progress__inner").style.width = "91%"; 
	let ft = document.querySelector(".predfinal .progress__fotoblock div:nth-child(5)").style.width = "120px";
		
});

$(".button_never2").on('click', function() {
	


	let txt = document.querySelector(".custom_text").textContent = "На самом деле, это правда)";
	let cl = document.querySelector(".custom_close").remove();
	let c_i = document.querySelector(".custom_img").remove();
	var pop = document.querySelector(".custom_popap").style.display = "block";
	var popi = document.querySelector(".custom_popap").style.padding = "20px";
	var t = document.querySelector(".custom_ten").style.display = "block";

	setTimeout(function() {
		var pops = document.querySelector(".custom_popap").style.display = "none";
		var te = document.querySelector(".custom_ten").style.display = "none";
		var v = document.querySelector(".predfinal__block2").style.display = "none"; 
		var p = document.querySelector(".predfinal__block3").style.display = "block";

		let tr = document.querySelector(".wp").textContent = "91%";
		let inn = document.querySelector(".progress__inner").style.width = "91%"; 
		let ft = document.querySelector(".predfinal .progress__fotoblock div:nth-child(5)").style.width = "120px";
	}, 2000)
	
		
});


$(".button_ver3").on('click', function() {
	var v = document.querySelector(".predfinal__block3").style.display = "none"; 
	var p = document.querySelector(".predfinal__block4").style.display = "block";

	let tr = document.querySelector(".wp").textContent = "94%";
	let inn = document.querySelector(".progress__inner").style.width = "94%"; 
	let ft = document.querySelector(".predfinal .progress__fotoblock div:nth-child(5)").style.width = "130px";
		
});

$(".button_never3").on('click', function() {
	


	let txt = document.querySelector(".custom_text").textContent = "На самом деле, это правда)";
	let cl = document.querySelector(".custom_close").remove();
	let c_i = document.querySelector(".custom_img").remove();
	var pop = document.querySelector(".custom_popap").style.display = "block";
	var popi = document.querySelector(".custom_popap").style.padding = "20px";
	var t = document.querySelector(".custom_ten").style.display = "block";

	setTimeout(function() {
		var pops = document.querySelector(".custom_popap").style.display = "none";
		var te = document.querySelector(".custom_ten").style.display = "none";
		var v = document.querySelector(".predfinal__block3").style.display = "none"; 
		var p = document.querySelector(".predfinal__block4").style.display = "block";

		let tr = document.querySelector(".wp").textContent = "94%";
		let inn = document.querySelector(".progress__inner").style.width = "94%"; 
		let ft = document.querySelector(".predfinal .progress__fotoblock div:nth-child(5)").style.width = "130px";
	}, 2000)
	
		
});


$(".button_never4").on('click', function() {
	var v = document.querySelector(".predfinal__block4").style.display = "none"; 
	var p = document.querySelector(".predfinal__block5").style.display = "block";

	let tr = document.querySelector(".wp").textContent = "97%";
	let inn = document.querySelector(".progress__inner").style.width = "97%"; 
	let ft = document.querySelector(".predfinal .progress__fotoblock div:nth-child(5)").style.width = "140px";
		
});

$(".button_ver4").on('click', function() {
	


	let txt = document.querySelector(".custom_text").textContent = "Нет, автостоп на кубе даже приветствуется)";
	let cl = document.querySelector(".custom_close").remove();
	let c_i = document.querySelector(".custom_img").remove();
	var pop = document.querySelector(".custom_popap").style.display = "block";
	var popi = document.querySelector(".custom_popap").style.padding = "20px";
	var t = document.querySelector(".custom_ten").style.display = "block";

	setTimeout(function() {
		var pops = document.querySelector(".custom_popap").style.display = "none";
		var te = document.querySelector(".custom_ten").style.display = "none";
		var v = document.querySelector(".predfinal__block4").style.display = "none"; 
		var p = document.querySelector(".predfinal__block5").style.display = "block";

		let tr = document.querySelector(".wp").textContent = "97%";
		let inn = document.querySelector(".progress__inner").style.width = "97%"; 
		let ft = document.querySelector(".predfinal .progress__fotoblock div:nth-child(5)").style.width = "140px";
	}, 2000)
	
		
});



$(".button_ver5").on('click', function() {
	var v = document.querySelector(".predfinal").style.display = "none"; 
	var p = document.querySelector(".final").style.display = "block";

	let tr = document.querySelector(".final .wp").textContent = "100%";
	let inn = document.querySelector(".progress__inner").style.width = "100%"; 
	let ft = document.querySelector(".final .progress__fotoblock div:nth-child(5)").style.width = "200px";
		
});

$(".button_never5").on('click', function() {
	
	var v = document.querySelector(".predfinal").style.display = "none"; 
	var p = document.querySelector(".final").style.display = "block";

	let tr = document.querySelector(".final .wp").textContent = "100%";
	let inn = document.querySelector(".progress__inner").style.width = "100%"; 
	let ft = document.querySelector(".final .progress__fotoblock div:nth-child(5)").style.width = "200px";
	
		
});

// console.log("da");

// Поменять время задержки появления кнопок 495