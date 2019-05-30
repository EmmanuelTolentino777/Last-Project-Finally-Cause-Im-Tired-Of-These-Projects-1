var happyImages = [
    "https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Face_Emoji_large.png?v=1480481056", 
    "https://www.dictionary.com/e/wp-content/uploads/2018/11/smiling-face-sweat.png",
    "https://i.dailymail.co.uk/i/pix/2017/07/18/14/427394C200000578-4707164-Happy_people_are_healthier_Some_65_percent_of_relevant_studies_f-m-21_1500384450707.jpg"
];

var sadImages = ["https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Sad_Emoji_large.png?v=1542436016","https://cdn.shopify.com/s/files/1/1061/1924/products/5_large.png?v=1544200554","https://media.tenor.com/images/2cb406e7619b591b7f7ca89b51989f57/tenor.gif"];

var codenationImages = ["https://www.peoplehr.com/blog/wp-content/uploads/2017/02/featuredsmalla.png","https://www.cheatsheet.com/wp-content/uploads/2015/08/Young-man-cant-wake-up.jpg?x26256","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJGOP0kQZrmy8KsH0kjLax_EvLPHVTOvhb1QJeU1cxLA6utp-J"];

var hungryImages = ["","https://images.cdn4.stockunlimited.net/preview1300/cartoon-character-hungry_1957190.jpg","http://clipart-library.com/img/419107.jpg","https://i.ytimg.com/vi/DB2k5nwqhbI/maxresdefault.jpg" ];

$("button").click(function(){
    var mood = $("input").val();
    if(mood === "happy"){
        clearImages();
        happy();
    }else if(mood === "sad"){
        clearImages();
        sad();
    }else if(mood === "hungry"){
        clearImages();
        hungry();
    }else if(mood === "codenation"){
        clearImages();
        codenation();
        
    }else{
        alert("place in either of these inputs; happy, sad, hungry, codenation");
    }
    
});

function clearImages(){
    $(".images").html("");
}

function happy(){
    backgroundColor("yellow");
    textColor("grey");
    images(happyImages);
}

function sad(){
    backgroundColor("blue");
    textColor("red");
    images(sadImages);
}

function hungry(){
    backgroundColor("orange");
    textColor("black");
    images(hungryImages);
}
function codenation(){
    backgroundColor("#b34d4d");
    textColor("#cc6600");
    images(codenationImages);
}


function backgroundColor(Bcolor){
    $("body").css("background-color",Bcolor);
}

function textColor(color){
    $("body").css("color", color);
}

function images(images){
    images.forEach(function(img){
    $(".images").append("<img src="+ img +">");
    });
}
