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


// const

// const
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
    console.log(123);
});



