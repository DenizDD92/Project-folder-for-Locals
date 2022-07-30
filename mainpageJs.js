//  Start



// DOM Elements
const btnTop= document.querySelector('.btn-top');   

const mainPage=document.querySelector('.main-page');

const loginPage=document.querySelector('.login-page');

const middleContent=document.querySelector('.middle-content');

const newsFeedPage=document.querySelector('.feeds-page');

const loginModal=document.querySelector('.login-modal');

const modalX=document.querySelector('.login-modal i')

const loginFromBtn = document.querySelector('.login-form-btn')

const postBtn= document.querySelector('.post-btn');

const modalWrapper = document.querySelector('.modal-wrapper');

const modal= document.querySelector('.modal');

const postModalX=document.querySelector('.modal-header i');

const modalPostBtn=document.querySelector('.modal-header button');

const modalFooterPlus=document.querySelector('.modal-footer span');

const modalInput=document.querySelector('.modal-input');

// sidebar

// const user = document.querySelector(".user");
// const sidebar = document.querySelector(".sidebar");
// const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const user = document.querySelector('.user');

const sidebarWrapper = document.querySelector('.sidebar-wrapper');

const sidebar = document.querySelector('.sidebar');

const xBtn2= document.querySelector('.exp')
const xBtn= document.querySelector('.sidebar-header i')
const toggle = document.querySelector('.toggle')
const circle= document.querySelector('.circle')
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
    
    console.log(e.target.classList[1]) ;
});





// btnTop.addEventListener('click', e =>
// {
    //    if(e.target.classList[0]==='btn-top')
    //    {
        //     goToLoginPage();
        //    }
    //     console.log(e.target.classList[0]);
    
    // });
    
    btnTop.addEventListener('click', () => {
        const inputUserInfo=document.querySelector('.user-info');
        const inputPassword=document.querySelector('.password');
        
        if (inputUserInfo.value !== "" && inputPassword.value !== "" ) 
        {
            mainPage.style.display='none';
            newsFeedPage.style.display='block';
        } 
        else 
        {
            goToLoginPage();
            loginModal.style.display='block';
        }
        });
    
    
    // e.target gives us elements in the console that are actually clicked
    // while e.target.classList will show Log in or Sign in in console as it is on the moment of click. 
    
    
    // experiment // // DESTINATION
// let my_url="https://www.internet-technologies.ru/articles/perenapravlenie-na-druguyu-stranicu-s-pomoschyu-javascript.html";


// // FUNCTION TO DESTINATE LOL

// document.getElementById('sign-up mainbtn').onclick = function () {
//     window.location.replace(my_url);
// };


// login page 
modalX.addEventListener('click', () => 
{
loginModal.style.display="none"; 

});

loginFromBtn.addEventListener('click', () =>
{
    const loginUserInfo=document.querySelector('.login-user-info');
    const loginPassword=document.querySelector('.login-password');
    if (loginUserInfo.value !==""&&loginPassword.value!=="") 
    {
        loginPage.style.display='none';
        newsFeedPage.style.display='block';
    } 
    else 
    {
        loginModal.style.display='block';
    }
});


// news feed page

// post modal      // here we are doing button to post some stuf, it opens and closes MODAL which is a small window to make a post.

postBtn.addEventListener ('click', () => 
{
    modalWrapper.classList.add('modal-wrapper-display');
    modal.style.display= 'block';
    
});

postModalX.addEventListener ('click', () =>
{
modal.style.display='none';
modalWrapper.classList.remove('modal-wrapper-display')
if (modalInput.value !=="") {
    modalInput.value="";
    change0pacity(0.5);
}

});

// changing opacity here
const change0pacity=(x) => 
{
modalPostBtn.style.opacity=x;
modalFooterPlus.style.opacity=x;
};

modalInput.addEventListener('keypress', (e) => 
{
    if (e.target.value !=="") {
        change0pacity(1)
    }
});
// to remove text when click X
modalInput.addEventListener('blur', (e) => 
{
    if (e.target.value ==='') {
        change0pacity(0.5);
    }
});



// Sidebar
user.addEventListener('click', () => 
{
    sidebar.classList.add('sidebar-display');
    sidebarWrapper.classList.add('sidebar-wrapper-display');
    
});


xBtn.addEventListener ('click', () => {
    sidebar.classList.remove('sidebar-display');
    
    sidebarWrapper.classList.remove('sidebar-wrapper-display');

});

// xBtn2.addEventListener('click', () => {
//     sidebar.classList.remove('sidebar-display');
    
//     sidebarWrapper.classList.remove('sidebar-wrapper-display');

// });
// darkmode
const darkElements1=document.querySelectorAll('.dark-mode-1');
const darkElements2=document.querySelectorAll('.dark-mode-2');
const lightText=document.querySelectorAll('.light-text');
const lightText2=document.querySelectorAll('.light-text2');
const borders=document.querySelectorAll('.border');
// WE SELECTED ALL DARK MODE 1&2 CLASSES

toggle.addEventListener('click', () => {
    circle.classList.toggle('move');
    Array.from(darkElements1).map((darkElements1)=>darkElements1.classList.toggle('dark-1'));
    Array.from(darkElements2).map((darkElements2)=>darkElements2.classList.toggle('dark-2'));
    Array.from(lightText).map((lightText)=>lightText.classList.toggle('light'));
    Array.from(lightText2).map((lightText2)=>lightText2.classList.toggle('light2'));
    Array.from(borders).map((borders)=> borders.classList.toggle('border-color'))
});
// check clg to view results by clicking on the button