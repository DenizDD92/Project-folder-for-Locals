//  Start



// DOM Elements


const mainPage=document.querySelector('.main-page');

const loginPage=document.querySelector('.login-page');

const middleContent=document.querySelector('.middle-content')

// here we are created 2 variables main page and login page. we have to connect them now
// /*************************************************************************** */



// Main page      REDIRECT ON SIGN IN CLICK COURSE VERSION (ALL IN 1 DOC)

const goToLoginPage = () =>     //this is a function
{
    mainPage.style.display='none';
    loginPage.style.display='grid';
};


middleContent.addEventListener('click', e => 
{           // here e means event
    
    
    if (e.target.classList[1]=== 'mainbtn') 
    {
        goToLoginPage();
    }
    
});
    console.log(e.target.classList[1]) ;

// e.target gives us elements in the console that are actually clicked
// while e.target.classList will show Log in or Sign in in console as it is on the moment of click. 


// experiment // // DESTINATION
// let my_url="https://www.internet-technologies.ru/articles/perenapravlenie-na-druguyu-stranicu-s-pomoschyu-javascript.html";


// // FUNCTION TO DESTINATE LOL

// document.getElementById('sign-up mainbtn').onclick = function () {
//     window.location.replace(my_url);
// };
