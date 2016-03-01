$(function(){
  $('.muffinButton').on("click", function() {
    console.log('muffin button')
  })
  function roll20(){
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

function User () {
  this.playerName = ""
  this.characterName = ""
  this.alignment = ""
  this.maxHitPoints = ""
  this.currentHitPoints = ""
  this.proficency = ""
};
var player = new User();

$(".statSet").on('click',function(){
  User.prototype.stats = [$(".str").val(),$(".dex").val(),$(".con").val(),$(".int").val(),$(".wis").val(),$(".car").val()]
  $('#strStat').append("<p>player.stats[0]</p>");
  $(".str").remove();
  $('#dexStat').append("<p>player.stats[1]</p>");
  $(".dex").remove();
  $('#conStat').append("<p>player.stats[2]</p>");
  $(".con").remove();
  $('#intStat').append("<p>player.stats[3]</p>");
  $(".int").remove();
  $('#wisStat').append("<p>player.stats[4]</p>");
  $(".wis").remove();
  $('#carStat').append("<p>player.stats[5]</p>");
  $(".car").remove();
    if(parseInt(player.stats[0]) === 8||parseInt(player.stats[0]) === 9){
      $('.strMod').text('- 1');
      console.log("marp");
    }
    if(parseInt(player.stats[0]) === 10||parseInt(player.stats[0]) === 11){
      $('.strMod').text('+ 0');
      console.log("marp");
    }
    if(parseInt(player.stats[0]) === 12||parseInt(player.stats[0]) === 13){
      $('.strMod').text('+ 1');
      console.log("marp");
    }
    if(parseInt(player.stats[0]) === 14||parseInt(player.stats[0]) === 15){
      $('.strMod').text('+2');
      console.log("marp");
    }
    if(parseInt(player.stats[0]) === 16||parseInt(player.stats[0]) === 17){
      $('.strMod').text('+ 3');
      console.log("marp");
    }
    if(parseInt(player.stats[0]) === 18||parseInt(player.stats[0]) === 19){
      $('.strMod').text('+ 4');
      console.log("marp");
    }
    if(parseInt(player.stats[0]) === 20){
      $('.strMod').text('+ 5');
      console.log("marp");
    }
    if(parseInt(player.stats[1]) === 8||parseInt(player.stats[1]) === 9){
      $('.dexMod').text('- 1');
      console.log("marp");
    }
    if(parseInt(player.stats[1]) === 10||parseInt(player.stats[1]) === 11){
      $('.dexMod').text('+ 0');
      console.log("marp");
    }
    if(parseInt(player.stats[1]) === 12||parseInt(player.stats[1]) === 13){
      $('.dexMod').text('+ 1');
      console.log("marp");
    }
    if(parseInt(player.stats[1]) === 14||parseInt(player.stats[1]) === 15){
      $('.dexMod').text('+ 2');
      console.log("marp");
    }
    if(parseInt(player.stats[1]) === 16||parseInt(player.stats[1]) === 17){
      $('.dexMod').text('+ 3');
      console.log("marp");
    }
    if(parseInt(player.stats[1]) === 18||parseInt(player.stats[1]) === 19){
      $('.dexMod').text('+ 4');
      console.log("marp");
    }
    if(parseInt(player.stats[1]) === 20){
      $('.dexMod').text('+ 5');
      console.log("marp");
    }
    if(parseInt(player.stats[2]) === 8||parseInt(player.stats[2]) === 9){
      $('.conMod').text('- 1');
      console.log("marp");
    }
    if(parseInt(player.stats[2]) === 10||parseInt(player.stats[2]) === 11){
      $('.conMod').text('+ 0');
      console.log("marp");
    }
    if(parseInt(player.stats[2]) === 12||parseInt(player.stats[2]) === 13){
      $('.conMod').text('+ 1');
      console.log("marp");
    }
    if(parseInt(player.stats[2]) === 14||parseInt(player.stats[2]) === 15){
      $('.conMod').text('+ 2');
      console.log("marp");
    }
    if(parseInt(player.stats[2]) === 16||parseInt(player.stats[2]) === 17){
      $('.conMod').text('+ 3');
      console.log("marp");
    }
    if(parseInt(player.stats[2]) === 18||parseInt(player.stats[2]) === 19){
      $('.conMod').text('+ 4');
      console.log("marp");
    }
    if(parseInt(player.stats[2]) === 20){
      $('.conMod').text('+ 5');
      console.log("marp");
    }
    if(parseInt(player.stats[3]) === 8||parseInt(player.stats[3]) === 9){
      $('.intMod').text('- 1');
      console.log("marp");
    }
    if(parseInt(player.stats[3]) === 10||parseInt(player.stats[3]) === 11){
      $('.intMod').text('+ 0');
      console.log("marp");
    }
    if(parseInt(player.stats[3]) === 12||parseInt(player.stats[3]) === 13){
      $('.intMod').text('+ 1');
      console.log("marp");
    }
    if(parseInt(player.stats[3]) === 14||parseInt(player.stats[3]) === 15){
      $('.intMod').text('+ 2');
      console.log("marp");
    }
    if(parseInt(player.stats[3]) === 16||parseInt(player.stats[3]) === 17){
      $('.intMod').text('+ 3');
      console.log("marp");
    }
    if(parseInt(player.stats[3]) === 18||parseInt(player.stats[3]) === 19){
      $('.intMod').text('+ 4');
      console.log("marp");
    }
    if(parseInt(player.stats[3]) === 20){
      $('.intMod').text('+ 5');
      console.log("marp");
    }
    if(parseInt(player.stats[4]) === 8||parseInt(player.stats[4]) === 9){
      $('.wisMod').text('- 1');
      console.log("marp");
    }
    if(parseInt(player.stats[4]) === 10||parseInt(player.stats[4]) === 11){
      $('.wisMod').text('+ 0');
      console.log("marp");
    }
    if(parseInt(player.stats[4]) === 12||parseInt(player.stats[4]) === 13){
      $('.wisMod').text('+ 1');
      console.log("marp");
    }
    if(parseInt(player.stats[4]) ===14||parseInt(player.stats[4]) === 15){
      $('.wisMod').text('+ 2');
      console.log("marp");
    }
    if(parseInt(player.stats[4]) === 16||parseInt(player.stats[4]) === 17){
      $('.wisMod').text('+ 3');
      console.log("marp");
    }
    if(parseInt(player.stats[4]) === 18||parseInt(player.stats[4]) === 19){
      $('.wisMod').text('+ 4');
      console.log("marp");
    }
    if(parseInt(player.stats[4])===20){
      $('.wisMod').text('+ 5');
      console.log("marp");
    }
    if(parseInt(player.stats[5]) === 8||parseInt(player.stats[5]) === 9){
      $('.carMod').text('- 1');
      console.log("marp");
    }
    if(parseInt(player.stats[5]) === 10||parseInt(player.stats[5]) === 11){
      $('.carMod').text('+ 0');
      console.log("marp");
    }
    if(parseInt(player.stats[5]) === 12||parseInt(player.stats[5]) === 13){
      $('.carMod').text('+ 1');
      console.log("marp");
    }
    if(parseInt(player.stats[5]) === 14||parseInt(player.stats[5]) === 15){
      $('.carMod').text('+ 2');
      console.log("marp");
    }
    if(parseInt(player.stats[5]) === 16||parseInt(player.stats[5]) === 17){
      $('.carMod').text('+ 3');
      console.log("marp");
    }
    if(parseInt(player.stats[5]) === 18||parseInt(player.stats[5]) === 19){
      $('.carMod').text('+ 4');
      console.log("marp");
    }
    if(parseInt(player.stats[5]) === 20){
      $('.carMod').text('+ 5');
      console.log("marp");
    }
    console.log(player.stats);
});

// $(".setClass").on("click",function(){
//   if($(".bar").selected){
//     User.prototype.barbarian= {
//       hitDice = roll12()+parseInt($('.conMod').val())
//       one = function () {
//
//       }
//       two:{}
//       three:{}
//       four:{}
//       five:{}
//       six:{}
//       seven:{}
//       eight:{}
//       nine:{}
//       ten:{}
//       eleven:{}
//       twelve:{}
//       thurteen:{}
//       fourteen:{}
//       fifteen:{}
//       sixteen:{}
//       seventeen:{}
//       eighteen:{}
//       nineteen:{}
//       twenty:{}
//     }
//   }
//   if($(".bard").selected){
//     User.prototype.bard= {
//       hitDice = roll8()+parseInt($('.conMod').val());
//       one:{}
//       two:{}
//       three:{}
//       four:{}
//       five:{}
//       six:{}
//       seven:{}
//       eight:{}
//       nine:{}
//       ten:{}
//       eleven:{}
//       twelve:{}
//       thurteen:{}
//       fourteen:{}
//       fifteen:{}
//       sixteen:{}
//       seventeen:{}
//       eighteen:{}
//       nineteen:{}
//       twenty:{}
//     }
//   }
//   if($(".cle").selected){
//     User.prototype.cleric= {
//       hitDice = roll8()+parseInt($('.conMod').val());
//       one:{}
//       two:{}
//       three:{}
//       four:{}
//       five:{}
//       six:{}
//       seven:{}
//       eight:{}
//       nine:{}
//       ten:{}
//       eleven:{}
//       twelve:{}
//       thurteen:{}
//       fourteen:{}
//       fifteen:{}
//       sixteen:{}
//       seventeen:{}
//       eighteen:{}
//       nineteen:{}
//       twenty:{}
//     }
//   }
//   if($(".dru").selected){
//     User.prototype.druid= {
//       hitDice = roll8()+parseInt($('.conMod').val());
//       one:{}
//       two:{}
//       three:{}
//       four:{}
//       five:{}
//       six:{}
//       seven:{}
//       eight:{}
//       nine:{}
//       ten:{}
//       eleven:{}
//       twelve:{}
//       thurteen:{}
//       fourteen:{}
//       fifteen:{}
//       sixteen:{}
//       seventeen:{}
//       eighteen:{}
//       nineteen:{}
//       twenty:{}
//     }
//   }
//   if($(".fig").selected){
//     User.prototype.figther= {
//       hitDice = roll10()+parseInt($('.conMod').val());
//       one:{}
//       two:{}
//       three:{}
//       four:{}
//       five:{}
//       six:{}
//       seven:{}
//       eight:{}
//       nine:{}
//       ten:{}
//       eleven:{}
//       twelve:{}
//       thurteen:{}
//       fourteen:{}
//       fifteen:{}
//       sixteen:{}
//       seventeen:{}
//       eighteen:{}
//       nineteen:{}
//       twenty:{}
//     }
//   }
//   if($(".mon").selected){
//     User.prototype.monk= {
//       hitDice = roll8()+parseInt($('.conMod').val());
//       one:{}
//       two:{}
//       three:{}
//       four:{}
//       five:{}
//       six:{}
//       seven:{}
//       eight:{}
//       nine:{}
//       ten:{}
//       eleven:{}
//       twelve:{}
//       thurteen:{}
//       fourteen:{}
//       fifteen:{}
//       sixteen:{}
//       seventeen:{}
//       eighteen:{}
//       nineteen:{}
//       twenty:{}
//     }
//   }
//   if($(".pal").selected){
//     User.prototype.paladin= {
//       hitDice = roll10()+parseInt($('.conMod').val());
//       one:{}
//       two:{}
//       three:{}
//       four:{}
//       five:{}
//       six:{}
//       seven:{}
//       eight:{}
//       nine:{}
//       ten:{}
//       eleven:{}
//       twelve:{}
//       thurteen:{}
//       fourteen:{}
//       fifteen:{}
//       sixteen:{}
//       seventeen:{}
//       eighteen:{}
//       nineteen:{}
//       twenty:{}
//     }
//   }
//   if($(".ran").selected){
//     User.prototype.ranger= {
//       hitDice = roll10()+parseInt($('.conMod').val());
//       one:{}
//       two:{}
//       three:{}
//       four:{}
//       five:{}
//       six:{}
//       seven:{}
//       eight:{}
//       nine:{}
//       ten:{}
//       eleven:{}
//       twelve:{}
//       thurteen:{}
//       fourteen:{}
//       fifteen:{}
//       sixteen:{}
//       seventeen:{}
//       eighteen:{}
//       nineteen:{}
//       twenty:{}
//     }
//   }
//   if($(".rou").selected){
//     User.prototype.rouge = {
//       hitDice = roll8()+parseInt($('.conMod').val());
//       one:{}
//       two:{}
//       three:{}
//       four:{}
//       five:{}
//       six:{}
//       seven:{}
//       eight:{}
//       nine:{}
//       ten:{}
//       eleven:{}
//       twelve:{}
//       thurteen:{}
//       fourteen:{}
//       fifteen:{}
//       sixteen:{}
//       seventeen:{}
//       eighteen:{}
//       nineteen:{}
//       twenty:{}
//     }
//   }
//   if($(".soc").selected){
//     User.prototype.sorceror = {
//       hitDice = roll6()+parseInt($('.conMod').val());
//       one:{}
//       two:{}
//       three:{}
//       four:{}
//       five:{}
//       six:{}
//       seven:{}
//       eight:{}
//       nine:{}
//       ten:{}
//       eleven:{}
//       twelve:{}
//       thurteen:{}
//       fourteen:{}
//       fifteen:{}
//       sixteen:{}
//       seventeen:{}
//       eighteen:{}
//       nineteen:{}
//       twenty:{}
//     }
//   }
//   if($(".war").selected){
//     User.prototype.warlock = {
//       hitDice = roll8()+parseInt($('.conMod').val());
//       one={}
//       two={}
//       three={}
//       four={}
//       five={}
//       six:{}
//       seven:{}
//       eight:{}
//       nine:{}
//       ten:{}
//       eleven:{}
//       twelve:{}
//       thurteen:{}
//       fourteen:{}
//       fifteen:{}
//       sixteen:{}
//       seventeen:{}
//       eighteen:{}
//       nineteen:{}
//       twenty:{}
//     }
//   }
//   if($(".wiz").selected){
//     User.prototype.wizard= {
//       hitDice = roll6()+parseInt($('.conMod').val());
//       one:{}
//       two:{}
//       three:{}
//       four:{}
//       five:{}
//       six:{}
//       seven:{}
//       eight:{}
//       nine:{}
//       ten:{}
//       eleven:{}
//       twelve:{}
//       thurteen:{}
//       fourteen:{}
//       fifteen:{}
//       sixteen:{}
//       seventeen:{}
//       eighteen:{}
//       nineteen:{}
//       twenty:{}
//     }
//   }
// })
// $(".setRace").on('click',function(){
//   if($(".hu").selected){
//     User.prototype.human() = function(){
//         $(".str").text()= parseInt($(".str").data()) + 1
//
//         $(".dex").text()= parseInt($(".dex").data()) + 1
//
//         $(".con").text()= parseInt($(".con").data()) + 1
//
//         $(".int").text()= parseInt($(".int").data()) + 1
//
//         $(".wis").text()= parseInt($(".wis").data()) + 1
//
//         $(".car").text()= parseInt($(".car").data()) + 1
//     }
//   }
//   if($(".el").selected){
//     User.prototype.elf = function () {
//       $(".dex").text()= parseInt($(".dex").data()) + 2
//     }
//   }
//   if($(".dw").selected){
//     User.prototype.dwarf = function () {
//       $(".con").text()= parseInt($(".con").data()) + 2
//     }
//   }
//   if($(".gn").selected){
//     User.prototype.gnome = function () {
//       $(".int").text()= parseInt($(".int").data()) + 2
//     }
//   if($(".ha").selected){
//     User.prototype.gnome = function () {
//       $(".dex").text()= parseInt($(".dex").data()) + 2
//     }
//   }
//   if($(".ti").selected){
//     User.prototype.tiefling = function () {
//       $(".car").text()= parseInt($(".car").data()) + 2;
//       $(".int").text()= parseInt($(".int").data()) + 1;
//     }
//   }
//   if($(".dr").selected){
//     User.prototype.dragonborn = function () {
//       $(".car").text()= parseInt($(".car").data()) + 1;
//       $(".str").text()= parseInt($(".str").data()) + 2;
//     }
//   }
//   if($(".he").selected){
//     User.prototype.halfELf = function () {
//       $(".int").text()= parseInt($(".int").data()) + 1;
//         $(".car").text()= parseInt($(".car").data()) + 2;
//     }
//   }
//   if($(".ho").selected){
//     User.prototype.halfOrc = function () {
//       $(".str").text()= parseInt($(".str").data()) + 2;
//       $(".con").text()= parseInt($(".con").data()) + 1
//     }
//   }
// })


});
