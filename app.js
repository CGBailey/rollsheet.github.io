$(function(){

  for(var i in localStorage){
    $(".bgList").append("<button class='chooseImage'>" +i+ "</button>");
    console.log('hi', i);
  }

  $('.chooseImage').on('click', function(){
    // console.log($(this).html());
    $('body').css('background-image', "url('" + localStorage.getItem($(this).html()) + "')");
  });

$("#backgroundButton").on("click", function(){

  $.ajax({
          url: 'http://api.pixplorer.co.uk/image?word=' + $("#backgroundInput").val() + '&amount=1&size=l',
          type: 'GET',
          dataType: 'json', // added data type
          success: function(res) {
             $('body').css('background-image', "url('" + res.images[0].imageurl + "')");
          }
      });

})

$("#likeBackground").on('click', function(){
  var url = $('body').css("background-image");
  url = url.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');

  localStorage.setItem($("#backgroundSaveInput").val(), url);


})




  // button test
  $('.muffinButton').on("click", function() {
    console.log('muffin button')
  })
// various dice rollers
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
  this.playerName = "";
  this.characterName = "";
  this.alignment = "";
  this.maxHitPoints = "";
  this.currentHitPoints = "";
  this.proficency = {'message':'','value':0}
  this.originalStrength = 0;
  this.modifiedStrength = 0;
  this.modifierStrength = 0;
  this.originalDexterity = 0;
  this.modifiedDexterity = 0;
  this.modifierDexterity = 0;
  this.originalConstitution = 0;
  this.modifiedConstitution = 0;
  this.modifierConstitution = 0;
  this.originalIntelligence = 0;
  this.modifiedIntelligence = 0;
  this.modifierIntelligence = 0;
  this.originalWisdom = 0;
  this.modifiedWisdom = 0;
  this.modifierWisdom = 0;
  this.originalCharisma = 0;
  this.modifiedCharisma = 0;
  this.modifierCharisma = 0;
};

var player = new User();

function displayUser() {
  $(".str").val(player.originalStrength);
  $(".strModified").text("(" + player.modifiedStrength + ")");
  $(".dex").val(player.originalDexterity);
  $(".dexModified").text("(" + player.modifiedDexterity + ")");
  $(".con").val(player.originalConstitution);
  $(".conModified").text("(" + player.modifiedConstitution + ")");
  $(".int").val(player.originalIntelligence);
  $(".intModified").text("(" + player.modifiedIntelligence + ")");
  $(".wis").val(player.originalWisdom);
  $(".wisModified").text("(" + player.modifiedWisdom + ")");
  $(".car").val(player.originalCharisma);
  $(".carModified").text("(" + player.modifiedCharisma + ")");
  $(".profBo").text(player.proficency.message);
}

$(".statAtt").on("change", function() {
  player[$(this).attr('name')] = Number($(this).val());
})


displayUser(player);

$("#level").on("change", function() {
  if (level > 20) {
    //ToDO: Yell at the user.
  }
  var level = $("#level option:selected").text();
  if (level >= 1 && level <= 4) {
    player.proficency.message = "+2 Proficency Bonus";
    player.proficency.value = 2;
  } else if (level >= 5 && level <= 8){
    player.proficency.message = "+3 Proficency Bonus";
    player.proficency.value = 3;
  }
  else if (level >= 9 && level <= 12){
    player.proficency.message = "+4 Proficency Bonus";
    player.proficency.value = 4;
  }
  else if (level >= 13 && level <= 16){
    player.proficency.message = "+5 Proficency Bonus";
    player.proficency.value = 5;
  }
  else {
    player.proficency.message = "+6 Proficency Bonus";
    player.proficency.value = 6;
  }

    displayUser(player);
    console.log(player);
});
// sets the character class attributes such as hit dice and proficency dice
$(".setClass").on("click",function(){
  if($(".bar").selected){
    console.log("working")
    User.prototype.class=
      User.prototype.hitDice = roll12()+parseInt($('.conMod').val());

  }
  if($(".bard").selected){
    console.log('working')
    User.prototype.class=
      this.hitDice = roll8()+parseInt($('.conMod').val());

  }
  if($(".cle").selected){
    console.log('working');
    User.prototype.class=
      this.hitDice = roll8()+parseInt($('.conMod').val());

  }
  if($(".dru").selected){
    console.log('working');
    User.prototype.druid=
      this.hitDice = roll8()+parseInt($('.conMod').val());
  }
  if($(".fig").selected){
    console.log('working');
    User.prototype.figther=
      this.hitDice = roll10()+parseInt($('.conMod').val());
  }
  if($(".mon").selected){
    console.log('working');
    User.prototype.monk=
      this.hitDice = roll8()+parseInt($('.conMod').val());
  }
  if($(".pal").selected){
    console.log('working');
    User.prototype.paladin=
      this.hitDice = roll10()+parseInt($('.conMod').val());
  }
  if($(".ran").selected){
    console.log('working');
    User.prototype.ranger=
      this.hitDice = roll10()+parseInt($('.conMod').val());
  }
  if($(".rou").selected){
    console.log('working');
    User.prototype.rouge =
      this.hitDice = roll8()+parseInt($('.conMod').val());
  }
  if($(".soc").selected){
    console.log('working');
    User.prototype.sorceror =
      this.hitDice = roll6()+parseInt($('.conMod').val());
  }
  if($(".war").selected){
    console.log('working');
    User.prototype.warlock =
      this.hitDice = roll8()+parseInt($('.conMod').val());
  }
  if($(".wiz").selected){
    console.log('working');
    User.prototype.wizard=
      this.hitDice = roll6()+parseInt($('.conMod').val());

  }
})

// sets the racial modifiers for each character
$("#race").on('change',function() {
  var selected = $("#race option:selected").attr("class");
  console.log(selected);
  switch (selected) {
    case "hu":
      player.modifiedStrength = player.originalStrength + 1;
      player.modifiedDexterity = player.originalDexterity + 1;
      player.modifiedConstitution = player.originalConstitution + 1;
      player.modifiedIntelligence = player.originalIntelligence + 1;
      player.modifiedWisdom = player.originalWisdom + 1;
      player.modifiedCharisma = player.originalCharisma + 1;
      break;
    case "dr":
      player.modifiedStrength = player.originalStrength + 2;
      player.modifiedDexterity = player.originalDexterity;
      player.modifiedConstitution = player.originalConstitution;
      player.modifiedIntelligence = player.originalIntelligence;
      player.modifiedWisdom = player.originalWisdom;
      player.modifiedCharisma = player.originalCharisma + 1;
      break;
    case "el":
      player.modifiedStrength = player.originalStrength;
      player.modifiedDexterity = player.originalDexterity + 2;
      player.modifiedConstitution = player.originalConstitution;
      player.modifiedIntelligence = player.originalIntelligence;
      player.modifiedWisdom = player.originalWisdom;
      player.modifiedCharisma = player.originalCharisma;
      break;
    case "dw":
      player.modifiedStrength = player.originalStrength;
      player.modifiedDexterity = player.originalDexterity;
      player.modifiedConstitution = player.originalConstitution + 2;
      player.modifiedIntelligence = player.originalIntelligence;
      player.modifiedWisdom = player.originalWisdom;
      player.modifiedCharisma = player.originalCharisma;
      break;
    case "gn":
      player.modifiedStrength = player.originalStrength;
      player.modifiedDexterity = player.originalDexterity;
      player.modifiedConstitution = player.originalConstitution;
      player.modifiedIntelligence = player.originalIntelligence + 2;
      player.modifiedWisdom = player.originalWisdom;
      player.modifiedCharisma = player.originalCharisma;
    break;
    case "ha":
      player.modifiedStrength = player.originalStrength;
      player.modifiedDexterity = player.originalDexterity + 2;
      player.modifiedConstitution = player.originalConstitution;
      player.modifiedIntelligence = player.originalIntelligence;
      player.modifiedWisdom = player.originalWisdom;
      player.modifiedCharisma = player.originalCharisma;
      break;
    case "ti":
      player.modifiedStrength = player.originalStrength;
      player.modifiedDexterity = player.originalDexterity;
      player.modifiedConstitution = player.originalConstitution;
      player.modifiedWisdom = player.originalWisdom;
      player.modifiedCharisma = player.originalCharisma + 2;
      player.modifiedIntelligence = player.originalIntelligence + 1;
      break;
    case "he":
      player.modifiedStrength = player.originalStrength;
      player.modifiedDexterity = player.originalDexterity;
      player.modifiedConstitution = player.originalConstitution;
      player.modifiedWisdom = player.originalWisdom;
      player.modifiedCharisma = player.originalCharisma + 2;
      player.modifiedIntelligence = player.originalIntelligence + 1;
      break;
    case "ho":
      player.modifiedStrength = player.originalStrength + 2;
      player.modifiedConstitution = player.originalConstitution + 1;
      player.modifiedIntelligence = player.originalIntelligence;
      player.modifiedWisdom = player.originalWisdom;
      player.modifiedCharisma = player.originalCharisma;
      player.modifiedDexterity = player.originalDexterity;
      break;
    default:

  }

  function mods() {
    if(player.modifiedStrength === 8 || player.modifiedStrength === 9){
      $('.strMod').text('- 1');
      player.modifierStrength = -1
      console.log("marp");
    }
    if(player.modifiedStrength === 10 || player.modifiedStrength === 11){
      $('.strMod').text('+ 0');
      player.modifierStrength = 0
      console.log("marp");
    }
    if(player.modifiedStrength === 12 || player.modifiedStrength === 13){
      $('.strMod').text('+ 1');
      player.modifierStrength = 1
      console.log("marp");
    }
    if(player.modifiedStrength === 14 || player.modifiedStrength === 15){
      $('.strMod').text('+2');
      player.modifierStrength = 2
      console.log("marp");
    }
    if(player.modifiedStrength === 16 || player.modifiedStrength === 17){
      $('.strMod').text('+ 3');
      player.modifierStrength = 3
      console.log("marp");
    }
    if(player.modifiedStrength === 18|| player.modifiedStrength === 19){
      $('.strMod').text('+ 4');
      player.modifierStrength = 4
      console.log("marp");
    }
    if(player.modifiedStrength === 20){
      $('.strMod').text('+ 5');
      player.modifierStrength = 5
      console.log("marp");
    }
    if(player.modifiedDexterity === 8 || player.modifiedDexterity === 9){
      $('.dexMod').text('- 1');
      player.modifierDexterity = -1
      console.log("marp");
    }
    if(player.modifiedDexterity === 10 || player.modifiedDexterity === 11){
      $('.dexMod').text('+ 0');
      player.modifierDexterity = 0
      console.log("marp");
    }
    if(player.modifiedDexterity === 12 || player.modifiedDexterity === 13){
      $('.dexMod').text('+ 1');
      player.modifierDexterity = 1
      console.log("marp");
    }
    if(player.modifiedDexterity === 14 || player.modifiedDexterity === 15){
      $('.dexMod').text('+2');
      player.modifierDexterity = 2
      console.log("marp");
    }
    if(player.modifiedDexterity === 16 || player.modifiedDexterity === 17){
      $('.dexMod').text('+ 3');
      player.modifierDexterity = 3
      console.log("marp");
    }
    if(player.modifiedDexterity === 18|| player.modifiedDexterity === 19){
      $('.dexMod').text('+ 4');
      player.modifierDexterity = 4
      console.log("marp");
    }
    if(player.modifiedDexterity === 20){
      $('.dexMod').text('+ 5');
      player.modifierDexterity = 5
      console.log("marp");
    }
    if(player.modifiedConstitution === 8 || player.modifiedConstitution === 9){
      $('.conMod').text('- 1');
      player.modifierConstitution = -1
      console.log("marp");
    }
    if(player.modifiedConstitution === 10 || player.modifiedConstitution === 11){
      $('.conMod').text('+ 0');
      player.modifierConstitution = 0
      console.log("marp");
    }
    if(player.modifiedConstitution === 12 || player.modifiedConstitution === 13){
      $('.conMod').text('+ 1');
      player.modifierConstitution = 1
      console.log("marp");
    }
    if(player.modifiedConstitution === 14 || player.modifiedConstitution === 15){
      $('.conMod').text('+2');
      player.modifierConstitution = 2
      console.log("marp");
    }
    if(player.modifiedConstitution === 16 || player.modifiedConstitution === 17){
      $('.conMod').text('+ 3');
      player.modifierConstitution = 3
      console.log("marp");
    }
    if(player.modifiedConstitution === 18|| player.modifiedConstitution === 19){
      $('.conMod').text('+ 4');
      player.modifierConstitution = 4
      console.log("marp");
    }
    if(player.modifiedConstitution === 20){
      $('.conMod').text('+ 5');
      player.modifierConstitution = 5
      console.log("marp");
    }
    if(player.modifiedIntelligence === 8 || player.modifiedIntelligence === 9){
      $('.intMod').text('- 1');
      player.modifierIntelligence = -1
      console.log("marp");
    }
    if(player.modifiedIntelligence === 10 || player.modifiedIntelligence === 11){
      $('.intMod').text('+ 0');
      player.modifierIntelligence = 0
      console.log("marp");
    }
    if(player.modifiedIntelligence === 12 || player.modifiedIntelligence === 13){
      $('.intMod').text('+ 1');
      player.modifierIntelligence = 1
      console.log("marp");
    }
    if(player.modifiedIntelligence === 14 || player.modifiedIntelligence === 15){
      $('.intMod').text('+2');
      player.modifierIntelligence = 2
      console.log("marp");
    }
    if(player.modifiedIntelligence === 16 || player.modifiedIntelligence === 17){
      $('.intMod').text('+ 3');
      player.modifierIntelligence = 3
      console.log("marp");
    }
    if(player.modifiedIntelligence === 18|| player.modifiedIntelligence === 19){
      $('.intMod').text('+ 4');
      player.modifierIntelligence = 4
      console.log("marp");
    }
    if(player.modifiedIntelligence === 20){
      $('.intMod').text('+ 5');
      player.modifierIntelligence = 5
      console.log("marp");
    }
    if(player.modifiedWisdom === 8 || player.modifiedWisdom === 9){
      $('.wisMod').text('- 1');
      player.modifierWisdom = -1
      console.log("marp");
    }
    if(player.modifiedWisdom === 10 || player.modifiedWisdom === 11){
      $('.wisMod').text('+ 0');
      player.modifierWisdom = 0
      console.log("marp");
    }
    if(player.modifiedWisdom === 12 || player.modifiedWisdom === 13){
      $('.wisMod').text('+ 1');
      player.modifierWisdom = 1
      console.log("marp");
    }
    if(player.modifiedWisdom === 14 || player.modifiedWisdom === 15){
      $('.wisMod').text('+2');
      player.modifierWisdom = 2
      console.log("marp");
    }
    if(player.modifiedWisdom === 16 || player.modifiedWisdom === 17){
      $('.wisMod').text('+ 3');
      player.modifierWisdom = 3
      console.log("marp");
    }
    if(player.modifiedWisdom === 18|| player.modifiedWisdom === 19){
      $('.wisMod').text('+ 4');
      player.modifierWisdom = 4
      console.log("marp");
    }
    if(player.modifiedWisdom === 20){
      $('.wisMod').text('+ 5');
      player.modifierWisdom = 5
      console.log("marp");
    }
    if(player.modifiedCharisma === 8 || player.modifiedCharisma === 9){
      $('.carMod').text('- 1');
      player.modifierCharisma = -1
      console.log("marp");
    }
    if(player.modifiedCharisma === 10 || player.modifiedCharisma === 11){
      $('.carMod').text('+ 0');
      player.modifierCharisma = 0
      console.log("marp");
    }
    if(player.modifiedCharisma === 12 || player.modifiedCharisma === 13){
      $('.carMod').text('+ 1');
      player.modifierCharisma = 1
      console.log("marp");
    }
    if(player.modifiedCharisma === 14 || player.modifiedCharisma === 15){
      $('.carMod').text('+2');
      player.modifierCharisma = 2
      console.log("marp");
    }
    if(player.modifiedCharisma === 16 || player.modifiedCharisma === 17){
      $('.carMod').text('+ 3');
      player.modifierCharisma = 3
      console.log("marp");
    }
    if(player.modifiedCharisma === 18|| player.modifiedCharisma === 19){
      $('.carMod').text('+ 4');
      player.modifierCharisma = 4
      console.log("marp");
    }
    if(player.modifiedCharisma === 20){
      $('.carMod').text('+ 5');
      player.modifierCharisma = 5
      console.log("marp");
    }
    console.log(player);
  };
  mods();

  displayUser(player);

  if($(".hu").selected) {
    // User.prototype.race = function() {
    //     $(".str").val()= parseInt($(".str").text()) + 1
    //
    //     $(".dex").val()= parseInt($(".dex").text()) + 1
    //
    //     $(".con").val()= parseInt($(".con").text()) + 1
    //
    //     $(".int").val()= parseInt($(".int").text()) + 1
    //
    //     $(".wis").val()= parseInt($(".wis").text()) + 1
    //
    //     $(".car").val()= parseInt($(".car").text()) + 1
    // }
    console.log('varp');
  }
  if($(".el").selected){
    // User.prototype.race = function () {
    //   $(".dex").text()= parseInt($(".dex").data()) + 2
    // }
    console.log('varp');
  }
  if($(".dw").selected){
    // User.prototype.race = function () {
    //   $(".con").text()= parseInt($(".con").data()) + 2
    // }
    console.log('varp');
  }
  if($(".gn").selected){
    // User.prototype.gnome = function () {
    //   $(".int").text()= parseInt($(".int").data()) + 2
    // }
    console.log('varp');
  }
  if($(".ha").selected){
    // User.prototype.gnome = function () {
    //   $(".dex").text()= parseInt($(".dex").data()) + 2
    // }
    console.log('varp');
  }
  if($(".ti").selected){
    // User.prototype.tiefling = function () {
    //   $(".car").text()= parseInt($(".car").data()) + 2;
    //   $(".int").text()= parseInt($(".int").data()) + 1;
    // }
    console.log('varp');
  }
  if($(".dr").selected){
    // User.prototype.dragonborn = function () {
    //   $(".car").text()= parseInt($(".car").data()) + 1;
    //   $(".str").text()= parseInt($(".str").data()) + 2;
    // }
    console.log('varp');
  }
  if($(".he").selected){
    // User.prototype.halfELf = function () {
    //   $(".int").text()= parseInt($(".int").data()) + 1;
    //     $(".car").text()= parseInt($(".car").data()) + 2;
    // }
    console.log('varp');
  }
  if($(".ho").selected){
    // User.prototype.halfOrc = function () {
    //   $(".str").text()= parseInt($(".str").data()) + 2;
    //   $(".con").text()= parseInt($(".con").data()) + 1
    // }
    console.log('varp');
  }
  else {
    console.log("I'm broken :(");
  }
})

});
