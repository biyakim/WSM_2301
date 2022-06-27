// show/hide menu: toggle menu
const  toggleMenu = (toggleId, navListId) =>  {
    //html -> js
    const toggle = document.getElementById(toggleId);
    const navList = document.getElementById(navListId);
    const toggleIcon=toggle.getElementsByTagName("i")[0];
      
    if (toggle && navList) {
         //toggle click]
        toggle.addEventListener('click',() => {
            //show/hide menu: .show-menu
            navList.classList.toggle('show-menu');
            //change toggle icon: bx-menu <-> bx-x
            toggleIcon.classList.toggle("bx-menu");
            toggleIcon.classList.toggle("bxs-x-square");
        });
         
    }
    
};
toggleMenu('nav-toggle','nav-list');

// const say = () => console.log("hello world4");

// const say = () => {
//     console.log("hello world3");
// }

// const say = function () {
//     console.log("hello world");
// }

// function say(){
//     console.log("hello world");
// }
// say();

const addNow =(mainCardId) => {
    //html -> js
    const mainCard = document.getElementById(mainCardId);

    //지금 몇시?
    //다음 식사 -> 몇번째 카드인지
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    console.log(`${hour}시 ${minute}분`);
    //지금 시각 -> index
    //조식 끝: 7:30 -> 1
    hour = 14;
    minute = 40;
    if(hour<7&&minute<30){
        index=1;
    }else if(hour<13&&minute<10){
        index=2;
    }else if(hour<18&&minute<10){
        index=0;
    }
        
    console.log(index);
    //중식 끝: 13:10 ->2
    //석식 끝: 18:10 ->0
    // index =2;
    let selectedCard = mainCard.getElementsByClassName('card')[index];
    //.now 클래스 추가
    selectedCard.classList.add('now');
}

addNow('main-card');