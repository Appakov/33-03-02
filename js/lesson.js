// PHONE CHECKER

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}

// let count = 0

// const increment = () => {
//     count++
//     console.log(count);
//     if (count < 500) {
//         increment()
//     }
// }
// increment()

const tabContents = document.querySelectorAll('.tab_content_block');
const tabItems = document.querySelectorAll('.tab_content_item');
const tabParents = document.querySelector('.tab_content_items');

let currentTabIndex = 0; 

const hideTabContent = () => {
    tabContents.forEach((tabBlock) => {
        tabBlock.style.display = 'none';
    });
    tabItems.forEach((tab) => {
        tab.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (index) => {
    hideTabContent();
    tabContents[index].style.display = "block";
    tabItems[index].classList.add('tab_content_item_active');
};

const switchTabAutomatically = () => {
    currentTabIndex = (currentTabIndex + 1) % tabItems.length;
    showTabContent(currentTabIndex);
    setTimeout(switchTabAutomatically, 3000);
};

hideTabContent();
showTabContent(currentTabIndex);
switchTabAutomatically();

tabParents.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabItems.forEach((tabItem, tabIndex) => {
            if (event.target === tabItem) {
                currentTabIndex = tabIndex; 
                hideTabContent();
                showTabContent(currentTabIndex);
            }
        });
    }
};