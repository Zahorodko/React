let lang = document.querySelector('.lang');
let array = [
    'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.', 
    'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.',
    'JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).',
    'jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax. It is free, open-source software using the permissive MIT License. As of Aug 2022, jQuery is used by 77% of the 10 million most popular websites. Web analysis indicates that it is the most widely deployed JavaScript library by a large margin, having at least 3 to 4 times more usage than any other JavaScript library.',
    'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.',
    'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
    'GitHub, Inc., is an Internet hosting service for software development and version control using Git. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project. It is commonly used to host open source software development projects.',
    'Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).'
];
function About(el){
    if(el==0){document.querySelector('.lang').innerHTML = array[el]}
    else if(el==1){document.querySelector('.lang').innerHTML = array[el]}
    else if(el==2){document.querySelector('.lang').innerHTML = array[el]}
    else if(el==3){document.querySelector('.lang').innerHTML = array[el]}
    else if(el==4){document.querySelector('.lang').innerHTML = array[el]}
    else if(el==5){document.querySelector('.lang').innerHTML = array[el]}
    else if(el==6){document.querySelector('.lang').innerHTML = array[el]}
    else if(el==7){document.querySelector('.lang').innerHTML = array[el]}
}
AOS.init({
    duration : 1000,
    offset: 150,
});
    setTimeout(hoverJ, 1500)
  function hoverJ(){
    $(document).ready(function(){
            $(".name").css({"textShadow": '5px 5px #0235d1, 10px 10px #10329e, 15px 15px #1c2c6f, 20px 20px #021d72, 25px 25px #181b24'});
            $(".button_1").css({"textShadow": ' rgb(2, 53, 209) -5px 5px, rgb(16, 50, 158) -10px 10px, rgb(28, 44, 111) -15px 15px, rgb(2, 29, 114) -20px 20px, rgb(24, 27, 36) -24px 25px'});
            $(".button_2").css({"textShadow": ' rgb(2, 53, 209) -5px 5px, rgb(16, 50, 158) -10px 10px, rgb(28, 44, 111) -15px 15px, rgb(2, 29, 114) -20px 20px, rgb(24, 27, 36) -24px 25px'});
        })  
}
let button_1 = document.querySelector(".button_1");
let button_2 = document.querySelector(".button_2");
let help_1 = document.querySelector(".help_1");
let help_2 = document.querySelector(".help_2");
button_1.onclick = function(){
    window.scroll({
        left: 0, // до какого количества пикселей прокрутить вправо
        top: 800, // до какого количество пикселей прокрутить вниз
        behavior: 'smooth' // определяет плавность прокрутки: 'auto' - мгновенно (по умолчанию), 'smooth' - плавно
      });
}
button_2.onclick = function(){
    window.scroll({
        left: 0, // до какого количества пикселей прокрутить вправо
        top: 3300, // до какого количество пикселей прокрутить вниз
        behavior: 'smooth' // определяет плавность прокрутки: 'auto' - мгновенно (по умолчанию), 'smooth' - плавно
      });
}
setTimeout(help_0, 1000);

function help_0(){
    help_1.style.opacity = "1";
    setTimeout(myGreeting, 1000);
    setTimeout(help_01, 1500);
}
function myGreeting(){
    help_1.style.opacity = "0";
}
function help_01(){
    help_2.style.opacity = "1";
    setTimeout(myGreeting_2, 1000);
}
function myGreeting_2(){
    help_2.style.opacity = "0";
}