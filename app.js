$(function(){function roll20(){
  var d20Result = Math.floor(Math.random()*20+1);
}
function roll12(){
  var d12Result = Math.floor(Math.random()*12+1);
}
function roll10(){
  var d10Result = Math.floor(Math.random()*10+1);
}
function roll8(){
  var d8Result = Math.floor(Math.random()*8+1);
}
function roll6(){
  var d6Result = Math.floor(Math.random()*6+1);
}
function roll6(){
  var d4Result = Math.floor(Math.random()*4+1);
}
var statTest = /^[8-9]$|^1[0-9]$|^20$/

var User = {
  playerName: ""
  characterName: ""
  charClass: {}
  charRace: {}
  alignment: ""
  maxHitPoints: ""
  hitDice: ""
  speed: ""
  currentHitPoints:""
  stats: []
}
$(".statSet").on('click',function(){
  User.prototype.stats = [$(".str").val(),$(".dex").val(),$(".con").val(),$(".int").val(),$(".wis").val(),$(".car").val()]
  $('#strStat').append("<p>User.stats[0]</p>");
  $(".str").remove();
  $('#dexStat').append("<p>User.stats[1]</p>");
  $(".dex").remove();
  $('#conStat').append("<p>User.stats[2]</p>");
  $(".con").remove();
  $('#intStat').append("<p>User.stats[3]</p>");
  $(".int").remove();
  $('#wisStat').append("<p>User.stats[4]</p>");
  $(".wis").remove();
  $('#carStat').append("<p>User.stats[5]</p>");
  $(".car").remove();
  function(){
    if(User.stats[0]===8||User.stats[0]===9){
      $('.strMod').text('-1');
    }
    if(User.stats[0]===10||User.stats[0]===11){
      $('.strMod').text('+0');
    }
    if(User.stats[0]===12||User.stats[0]===13){
      $('.strMod').text('+1');
    }
    if(User.stats[0]===14||User.stats[0]===15){
      $('.strMod').text('+2');
    }
    if(User.stats[0]===16||User.stats[0]===17){
      $('.strMod').text('+3');
    }
    if(User.stats[0]===18||User.stats[0]===19){
      $('.strMod').text('+4');
    }
    if(User.stats[0]===20){
      $('.strMod').text('+5');
    }
  }
  function(){
    if(User.stats[0]===8||User.stats[0]===9){
      $('.dexMod').text('-1');
    }
    if(User.stats[0]===10||User.stats[0]===11){
      $('.dexMod').text('+0');
    }
    if(User.stats[0]===12||User.stats[0]===13){
      $('.dexMod').text('+1');
    }
    if(User.stats[0]===14||User.stats[0]===15){
      $('.dexMod').text('+2');
    }
    if(User.stats[0]===16||User.stats[0]===17){
      $('.dexMod').text('+3');
    }
    if(User.stats[0]===18||User.stats[0]===19){
      $('.dexMod').text('+4');
    }
    if(User.stats[0]===20){
      $('.dexMod').text('+5');
    }
  }
  function(){
    if(User.stats[0]===8||User.stats[0]===9){
      $('.conMod').text('-1');
    }
    if(User.stats[0]===10||User.stats[0]===11){
      $('.conMod').text('+0');
    }
    if(User.stats[0]===12||User.stats[0]===13){
      $('.conMod').text('+1');
    }
    if(User.stats[0]===14||User.stats[0]===15){
      $('.conMod').text('+2');
    }
    if(User.stats[0]===16||User.stats[0]===17){
      $('.conMod').text('+3');
    }
    if(User.stats[0]===18||User.stats[0]===19){
      $('.conMod').text('+4');
    }
    if(User.stats[0]===20){
      $('.conMod').text('+5');
    }
  }
  function(){
    if(User.stats[0]===8||User.stats[0]===9){
      $('.intMod').text('-1');
    }
    if(User.stats[0]===10||User.stats[0]===11){
      $('.intMod').text('+0');
    }
    if(User.stats[0]===12||User.stats[0]===13){
      $('.intMod').text('+1');
    }
    if(User.stats[0]===14||User.stats[0]===15){
      $('.intMod').text('+2');
    }
    if(User.stats[0]===16||User.stats[0]===17){
      $('.intMod').text('+3');
    }
    if(User.stats[0]===18||User.stats[0]===19){
      $('.intMod').text('+4');
    }
    if(User.stats[0]===20){
      $('.intMod').text('+5');
    }
  }
  function(){
    if(User.stats[0]===8||User.stats[0]===9){
      $('.wisMod').text('-1');
    }
    if(User.stats[0]===10||User.stats[0]===11){
      $('.wisMod').text('+0');
    }
    if(User.stats[0]===12||User.stats[0]===13){
      $('.wisMod').text('+1');
    }
    if(User.stats[0]===14||User.stats[0]===15){
      $('.wisMod').text('+2');
    }
    if(User.stats[0]===16||User.stats[0]===17){
      $('.wisMod').text('+3');
    }
    if(User.stats[0]===18||User.stats[0]===19){
      $('.wisMod').text('+4');
    }
    if(User.stats[0]===20){
      $('.wisMod').text('+5');
    }
  }
  function(){
    if(User.stats[0]===8||User.stats[0]===9){
      $('.carMod').text('-1');
    }
    if(User.stats[0]===10||User.stats[0]===11){
      $('.carMod').text('+0');
    }
    if(User.stats[0]===12||User.stats[0]===13){
      $('.carMod').text('+1');
    }
    if(User.stats[0]===14||User.stats[0]===15){
      $('.carMod').text('+2');
    }
    if(User.stats[0]===16||User.stats[0]===17){
      $('.carMod').text('+3');
    }
    if(User.stats[0]===18||User.stats[0]===19){
      $('.carMod').text('+4');
    }
    if(User.stats[0]===20){
      $('.carMod').text('+5');
    }
  }
});
$(".setClass").on("click",function(){
  if($(".bar").selected){
    User.prototype.class.bard: {
      one:{}
      two:{}
      three:{}
      four:{}
      five:{}
      six:{}
      seven:{}
      eight:{}
      nine:{}
      ten:{}
      eleven:{}
      twelve:{}
      thurteen:{}
      fourteen:{}
      fifteen:{}
      sixteen:{}
      seventeen:{}
      eighteen:{}
      nineteen:{}
      twenty:{}
  }
  }

})

});
