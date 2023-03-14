//CSS
$("h1").css("background-color", "red") //Não é uma boa prática

//ADD

$("h1").addClass("big-title margin-50") //Boa prática

//HTML
$("h1").text("Goodbye") //Edita texto

$("button").html("<em>Hey</em>")  //innerHTML

//ATTRIBUTIES
$("img").attr("src", "drum2.png")

//EVENT LISTENERS
$("h1").click(function() {
    $("h1").css("color", "purple")
})

$("button").click(function() {
    $("h1").css("background-color", "blue")
})

$(document).keypress(function(event) { 
    $("h1").html(event.key)
})

$(document).on("mouseover", function() { //Event Listener mais flexivel
    $("h1").css("color", "green")
})

//ELEMENTS
$("h1").before("<button>New</button>")

$("h1").after("<button>New</button>")

$("h1").prepend("<button>New</button>")

$("h1").append("<button>New</button>")

//ANIMATIONS
$("button").on("click", function() {
    $("h1").hide()
})

$("button.show").on("click", function() {
    $("h1").show()
})

$("button.toggle").on("click", function() { //funciona como os dois de cima
    $("h1").toggle()
})

$("button.fadeOut").on("click", function() { //Desaparece progressivamente
    $("h1").fadeOut()
})

$("button.fadeIn").on("click", function() { //Aparece progressivamente
    $("h1").fadeIn()
})

$("button.fadeToggle").on("click", function() { //Toggle progressivamente
    $("h1").fadeToggle()
})

$("button.slideUp").on("click", function() { //sobe ao inves de esconder
    $("h1").slideUp()
})

$("button.slideDown").on("click", function() { //desce ao inves de mostrar
    $("h1").slideDown()
})

$("button").on("click", function() { //Utiliza funçoes númericas do css  
    $("h1").animate({opacity: 0.5})
})

$("button").on("click", function() { //Varios ao mesmo tempo
    $("h1").slideUp().slideDown().animate({opacity: 0.5})
})