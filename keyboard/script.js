let lang;
let arr;
let arr_ruB;
let arr_ru;
let arr_2 = [];
lang_F(2);
function lang_F(p1){
  if (p1 == 1){
    arr = ['',1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,'Backspace','Tab', 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92,'CapsLock', 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 13,'LeftShift', 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46,'RightShift'];
    arr_ruB = ['', 1025, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 'Backspace','Tab', 1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065, 1047, 1061, 1066, 92,'CapsLock', 1060, 1067, 1042, 1040, 1055, 1056, 1054, 1051, 1044, 1046, 1069,'Enter','LeftShift', 1071, 1063, 1057, 1052, 1048, 1058, 1068, 1041, 1070, 46,'RightShift'];
    arr_ru =['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=','Backspace','Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\','CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э','Enter','LeftShift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.','RightShift','Ctrl','win','Alt','Space','alt','Fn','note','Ctrl'];
  }
  else if (p1 == 2){
    arr=['',96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,'Backspace','Tab', 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92,'CapsLock', 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39,'Enter','LeftShift', 122, 120, 99, 118, 98, 110, 109, 44, 46, 47,'RightShift'];
    arr_ru = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=','Backspace','Tab',  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\','CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'",'Enter','LeftShift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/','RightShift','Ctrl','win','Alt','Space','alt','Fn','note','Ctrl'];
    arr_ruB=[96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,'Backspace','Tab', 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 91, 93, 92,'CapsLock', 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 39,'Enter','LeftShift', 90, 88, 67, 86, 66, 78, 77, 44, 46, 47,'RightShift'];
  }
  const list = document.getElementById('keyboard');
  //РИСУЕМ клавиатуру
  arr_ru.forEach(item=>{
  let li = document.createElement('li');
  li.innerText = item;
  list.append(li);
})
//-----------------------COLORS------------------------------
let color_style_one = {
  //standard
  "border-bottom":".2em solid rgb(77, 76, 58)",
  "color":"white",
  "box-shadow":"none",
};
let red_1 = "16, 255, 0";
let color_style_two = {
  //green onmouseup
  "color":"rgb("+red_1+")",
  "border-top":"0 solid black",
  "border-bottom":".2em solid rgb(77, 76, 58)",
  "left":"0px",
  "top":"0px",
  "box-shadow":" 0px 3px 23px 5px rgba("+red_1+", 0.7)"
};
let blue_1 = "0, 238, 255";
let color_style_three = {
  //blue:hover
  "box-shadow":"1px 0px 10px 4px rgba("+blue_1+", 0.7)",
  "border-bottom":".2em solid rgb("+blue_1+")",
  "color":"rgb("+blue_1+")"
};
let red_2 = "none";
let color_style_four = {
  //green onmousedown
  "color":"rgb("+red_2+")",
  "border-top":".15em solid rgb(77, 76, 58)",
  "border-bottom":".1em",
  "top":"2px",
  "box-shadow":"0px 4px 49px 0px rgba("+red_2+", 0.7)"
};
//----------------------- обработка нажатия клавиш----------------------
document.onkeypress = function(event){
    let klaw = event.key;
    let r2;
    let kode = event.keyCode;
    // arr_3.push(kode);
    // console.log(arr_3);
    myFunction();
    function checkAge(age) {
      return age == kode;
    }
    function myFunction() {
      let r; 
      if (toggl == 0){
         r = arr.find(checkAge);
         r2 = arr.indexOf(kode);
      }
      else if (toggl == 1){
         r = arr_ruB.find(checkAge);
         r2 = arr_ruB.indexOf(kode);
      }
      if(kode == r){  
          $(document).ready(function(){
            $("#keyboard li").css(color_style_one);
            $("#keyboard li:nth-child("+r2+")").css(color_style_two);
          })
        }
    }
    if (kode!=13){
      arr_2.push(klaw);
      document.querySelector('#display p').innerHTML = arr_2.join('');
      }
      else if(kode==13){
      }
}
//-----------------mouse control----------------------------
let klaw;
let RightShift_M=0;
let arr_block_button = [13,14,28,40,41,52,53,54,55,56,57,58,59]
document.querySelectorAll("#keyboard li").forEach(function(element){
  element.onmousedown= function(event){
      klaw = event.target.textContent;
      myFunction();
      function checkAge(age) {
        return age == klaw;
      }
      function myFunction() {
        let r;
        let r2;
        if (toggl == 0){
           r = arr_ru.find(checkAge);
           r2 = arr_ru.indexOf(r);
           let r3 = arr_block_button.includes(r2);
           console.log(r3,r2);
           if (r3 == false){
            arr_2.push(klaw);
            document.querySelector('#display p').innerHTML = arr_2.join('');
           }         
           else if (r2 == 13){
            Backspace_K();
           }
           else if (r2 == 14){
            Tab_K();
           }
           else if (r2 == 28){
            CapsLock_K();
           }
           else if (r2 == 40){
            Enter_K();
           }
           else if (r2 == 41){
            RightShift_k();
           }
           else if (r2 == 56){
            Space_K();
           }
        }
        else if (toggl == 1){
          if (RightShift_M == 0){
            klaw1 = klaw.toUpperCase();
            r = arr_ruB.find(checkAge);
            r2 = arr_ru.indexOf(klaw);
            let r3 = arr_block_button.includes(r2);
             if (r3 == false){
               $(document).ready(function(){
                 $("#keyboard li").css(color_style_one);
                 $(event.target).css(color_style_two);          
                 arr_2.push(klaw1);
                 document.querySelector('#display p').innerHTML = arr_2.join('');
               })
             }
             else if (r2 == 13){
               Backspace_K();
              }
              else if (r2 == 14){
               Tab_K();
              }
              else if (r2 == 28){
               CapsLock_K();
              }
              else if (r2 == 40){
               Enter_K();
              }
              else if (r2 == 41){
               RightShift_k();
              }
              else if (r2 == 56){
               Space_K();
              }
          }
          if (RightShift_M == 1){
            klaw1 = klaw.toUpperCase();
            r = arr_ruB.find(checkAge);
            r2 = arr_ru.indexOf(klaw);
            let r3 = arr_block_button.includes(r2);
             if (r3 == false){
               $(document).ready(function(){
                 $("#keyboard li").css(color_style_one);
                 $(event.target).css(color_style_two);          
                 arr_2.push(klaw1);
                 document.querySelector('#display p').innerHTML = arr_2.join('');
                 toggle();
               })
             }
             else if (r2 == 13){
               Backspace_K();
              }
              else if (r2 == 14){
               Tab_K();
              }
              else if (r2 == 28){
               CapsLock_K();
              }
              else if (r2 == 40){
               Enter_K();
              }
              else if (r2 == 41){
               RightShift_k();
              }
              else if (r2 == 56){
               Space_K();
              }
             console.log(klaw, r2)
             RightShift_M = 0;
             toggl = 1;
             return {toggl,RightShift_M};
          }          
        }
        if(klaw == r){
          $(document).ready(function(){
            $("#keyboard li").css(color_style_one);
             $(event.target).css(color_style_four);
          })
      }
  }
  }
  element.onmouseup= function(event){
    $(document).ready(function(){
      $(event.target).css(color_style_two);
    })
  };
})
$(document).ready(function(){
  $("li").hover(function(){
    $(this).css(color_style_three);
    }, function(){
    $(this).css(color_style_one);
  });
});
//------------------keys not standart----------------
var input = document.querySelector('body');
let toggl = 0;
let toggl_2 = 0;
input.onkeydown = function(event) {
  let key = event.keyCode || event.charCode;
  // console.log(key);
  button_K(key);
};
function button_K(key){
  if(key == 8){
    Backspace_K();
  }
  else if(key == 9){
    Tab_K();
  }
  else if(key == 20){
    CapsLock_K();
  }
  else if(key == 13){
    Enter_K();
  }
  else if(key == 16){
    RightShift_k();
  }
  else if(key == 32){
    Space_K();
  };
}
// -----------------------------FUNCTION -----------------------
function Backspace_K(){
  arr_2.pop();
  document.querySelector('#display p').innerHTML = arr_2.join('');
  $(document).ready(function(){
      $("#keyboard li").css(color_style_one);
      $("#keyboard li:nth-child(14)").css(color_style_two);
  });
};
function Tab_K(){
  $(document).ready(function(){
      $("#keyboard li").css(color_style_one);
      $("#keyboard li:nth-child(15)").css(color_style_two);
  });
};
function CapsLock_K(){
    toggle();
};
function Enter_K(){
  arr_2.push('<br>');
  $(document).ready(function(){
      $("#keyboard li").css(color_style_one);
      $("#keyboard li:nth-child(41)").css(color_style_two);
  });
};
function LeftShift_k(){
  $(document).ready(function(){
      $("#keyboard li").css(color_style_one);
      $("#keyboard li:nth-child(42)").css(color_style_two);
  });
};
function RightShift_k(){
  toggle();
  $(document).ready(function(){
      $("#keyboard li").css(color_style_one);
      $("#keyboard li:nth-child(53)").css(color_style_two);
  });
  return RightShift_M = 1
};
function Space_K(){
  arr_2.push(' ');
document.querySelector('#display p').innerHTML = arr_2.join('');
  $(document).ready(function(){
      $("#keyboard li").css(color_style_one);
      $("#keyboard li:nth-child(57)").css(color_style_two);
  });
};
//-------------------TOGGLE-------------------------
function toggle(){
  if(toggl == 0){
    $(document).ready(function(){
      $("#keyboard li").css(color_style_one);
      $("#keyboard li").css("text-transform", "uppercase"); 
      $("#keyboard li:nth-child(14)").css("text-transform", "none");
      $("#keyboard li:nth-child(15)").css("text-transform", "none");
      $("#keyboard li:nth-child(29)").css("text-transform", "none");
      $("#keyboard li:nth-child(41)").css("text-transform", "none");
      $("#keyboard li:nth-child(42)").css("text-transform", "none");
      $("#keyboard li:nth-child(53)").css("text-transform", "none");
      $("#keyboard li:nth-child(54)").css("text-transform", "none");
      $("#keyboard li:nth-child(55)").css("text-transform", "none");
      $("#keyboard li:nth-child(56)").css("text-transform", "none");
      $("#keyboard li:nth-child(57)").css("text-transform", "none");
      $("#keyboard li:nth-child(58)").css("text-transform", "none");
      $("#keyboard li:nth-child(59)").css("text-transform", "none");
      $("#keyboard li:nth-child(60)").css("text-transform", "none");
      $("#keyboard li:nth-child(61)").css("text-transform", "none");
      $("#keyboard li:nth-child(29)").css("background", "#5d1010");
    });
      return toggl = 1
  }
  else if(toggl == 1){
    $(document).ready(function(){
      $("#keyboard li").css(color_style_one);
      $("#keyboard li").css("text-transform", "lowercase");
      $("#keyboard li:nth-child(14)").css("text-transform", "capitalize");
      $("#keyboard li:nth-child(15)").css("text-transform", "capitalize");
      $("#keyboard li:nth-child(29)").css("text-transform", "capitalize");
      $("#keyboard li:nth-child(41)").css("text-transform", "capitalize");
      $("#keyboard li:nth-child(42)").css("text-transform", "capitalize");
      $("#keyboard li:nth-child(53)").css("text-transform", "capitalize");
      $("#keyboard li:nth-child(54)").css("text-transform", "capitalize");
      $("#keyboard li:nth-child(55)").css("text-transform", "capitalize");
      $("#keyboard li:nth-child(56)").css("text-transform", "capitalize");
      $("#keyboard li:nth-child(57)").css("text-transform", "capitalize");
      $("#keyboard li:nth-child(58)").css("text-transform", "capitalize");
      $("#keyboard li:nth-child(59)").css("text-transform", "capitalize");
      $("#keyboard li:nth-child(60)").css("text-transform", "capitalize");
      $("#keyboard li:nth-child(61)").css("text-transform", "capitalize");
      $("#keyboard li:nth-child(29)").css("background", "black");
      });
       return toggl = 0
  };
};
// -------------------language================
let p_1 = document.querySelector('.RUS');
let p_2 = document.querySelector('.ENG');
p_1.onclick = function(){
  ti();
  lang_F(1);
};
p_2.onclick = function(){
  ti();
  lang_F(2);
};
function ti (){
 let t = document.querySelectorAll("#keyboard li");
 for(let i=0; i<t.length; i++)
 t[i].remove();
}
document.querySelectorAll("#keyboardDop li").forEach(function(element){
  element.onclick= function(event){
    let klaw;
    klaw = event.target.textContent;
    arr_2.push(klaw);
    document.querySelector('#display p').innerHTML = arr_2.join('');
    $("#keyboardDop li").css(color_style_one);
    $(event.target).css(color_style_two);   
  }
  element.onmousedown = function(event){
    $("#keyboardDop li").css(color_style_one);
    $(event.target).css(color_style_four);
  }
});
};
let konsole_1 = document.querySelector("#display p");
let blick=1;
  setInterval(function konsol(){  
    if (blick == 0){
      $(document).ready(function(){
        $(konsole_1).css("border-right","9px solid black");
      })
       blick = 1;
    }
    else if(blick == 1){
      $(document).ready(function(){
        $(konsole_1).css("border-right","0px solid black");
      })
      return blick = 0;
    }
  },700);