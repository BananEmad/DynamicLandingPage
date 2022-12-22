/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const nav=document.getElementById('navbar__list');
const sec=document.getElementsByTagName('section');
const sections=Array.prototype.slice.call(sec);

const frag=document.createDocumentFragment();
const links=document.getElementsByClassName('menu__link');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildNAvBar()
{
    //loop over section
    for(section of sections) {

       const sectionData=[section.getAttribute("id"),section.getAttribute("data-nav")];
       //create new list Item with needed Data
       const newLi=document.createElement('li');
       newLi.innerHTML=`<a class="menu__link" href="#${sectionData[0]}">${sectionData[1]}</a>`;
       const newA =newLi.getElementsByTagName('a')[0];
      
       newA.addEventListener("click",function(){

    
         addClassActive( newA);
        //  addClassToSection(sectionData[1])
    
        });
       
       frag.appendChild(newLi);
            
    };
    //add li to navBar
    nav.appendChild(frag);
}

// add class active-link in nav 
function addClassActive( linktag)
{
   for( section of sections){
    
    if(linktag.textContent===section.getAttribute('data-nav'))
        {
           for(link of links)
           {
           
            link.classList.remove("active-link");
           }
            linktag.classList.add("active-link");
         
    }
       
};
}// Add class 'active' to section when near top of viewport



// function  addClassToSection(num){

//     for(section of sections)
//      {  const sectionDetail=section.getAttribute('data-nav')
//         if (section.classList.contains("your-active-class"))
// {
//                 section.classList.remove('your-active-class');
//                 }        

//     };
//     for(section of sections)
//     {
//         const sectionDetail=section.getAttribute('data-nav')
//         if(sectionDetail===num )
                    
//         {
//            if (!section.classList.contains('your-active-class'))

//             {
//                 console.log("trying to add class");
//                 section.classList.add('your-active-class');}

//         }
      
//     }
// }

function scrollActiveClass(){
   
    for(section of sections)
    {
        const sectionTop=section.getBoundingClientRect().top
      
        if(sectionTop>=0 &&sectionTop<300)
        {
            if (!section.classList.contains('your-active-class'))
           { section.classList.add('your-active-class');}
        }
        else if(section.classList.contains('your-active-class'))
        {
            section.classList.remove('your-active-class');
        }

    }
}

// Scroll to anchor ID using scrollTO event
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

window.addEventListener("load",buildNAvBar());

// Scroll to section on link click
document.addEventListener('scroll',scrollActiveClass);
// Set sections as active


