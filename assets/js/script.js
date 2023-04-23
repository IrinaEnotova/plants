const burgerBtn = document.querySelector('.burger-icon');
const burgerMenu = document.querySelector('.burger-menu');
const burgerCloseBtn = document.querySelector('.burger-close-btn');
const burgerList = document.querySelector('.burger-list');

function toggleBurgerMenu() {
  burgerMenu.classList.toggle('active-menu');
};

burgerBtn.addEventListener('click', toggleBurgerMenu);
burgerCloseBtn.addEventListener('click', toggleBurgerMenu);
burgerList.addEventListener('click', toggleBurgerMenu);

document.addEventListener('click', function(event) {
  const target = event.target;
  const its_menu = target == burgerMenu || burgerMenu.contains(target);
  const its_btn = target == burgerBtn;
  const menu_is_active = burgerMenu.classList.contains('active-menu');

  if(!its_menu && !its_btn && menu_is_active) {
    toggleBurgerMenu();
  }
});


// SERVICES

const service_btns = document.querySelectorAll('.service-btn');
const service_cards = document.querySelectorAll('.service-card');

service_btns[0].addEventListener('click', makeActiveGardens);

function makeActiveGardens() {
  if(!service_btns[1].classList.contains('service-btn-active') && !service_btns[2].classList.contains('service-btn-active')) {
    for(let i = 0; i < service_cards.length; i++) {
      if(!service_cards[i].classList.contains('Gardens')) {
        service_cards[i].classList.toggle('service-card-blur');
      }
      else {
        service_cards[i].classList.toggle('service-card-active');
      }
    } 
    service_btns[0].classList.toggle('service-btn-active');
  }
  else if(service_btns[1].classList.contains('service-btn-active') && service_btns[2].classList.contains('service-btn-active')) {
    for(let i = 0; i < service_cards.length; i++) {
      service_cards[i].classList.remove('service-card-active');
      service_cards[i].classList.remove('service-card-blur');
    }
      service_btns[0].classList.remove('service-btn-active');
      service_btns[1].classList.remove('service-btn-active');
      service_btns[2].classList.remove('service-btn-active');
  }
  else {
    for(let i = 0; i < service_cards.length; i++) {
      if(service_cards[i].classList.contains('Gardens')) {
        service_cards[i].classList.toggle('service-card-blur');
        service_cards[i].classList.toggle('service-card-active');
      }
    }
    service_btns[0].classList.toggle('service-btn-active');
  }
}

service_btns[1].addEventListener('click', makeActiveLawn);

function makeActiveLawn() {
  if(!service_btns[0].classList.contains('service-btn-active') && !service_btns[2].classList.contains('service-btn-active')) {
    for(let i = 0; i < service_cards.length; i++) {
      if(!service_cards[i].classList.contains('Lawn')) {
        service_cards[i].classList.toggle('service-card-blur');
      }
      else {
        service_cards[i].classList.toggle('service-card-active');
      }
    } 
    service_btns[1].classList.toggle('service-btn-active');
  }
  else if(service_btns[0].classList.contains('service-btn-active') && service_btns[2].classList.contains('service-btn-active')) {
    for(let i = 0; i < service_cards.length; i++) {
      service_cards[i].classList.remove('service-card-active');
      service_cards[i].classList.remove('service-card-blur');
    }
      service_btns[0].classList.remove('service-btn-active');
      service_btns[1].classList.remove('service-btn-active');
      service_btns[2].classList.remove('service-btn-active');
  }
  else {
    for(let i = 0; i < service_cards.length; i++) {
      if(service_cards[i].classList.contains('Lawn')) {
        service_cards[i].classList.toggle('service-card-blur');
        service_cards[i].classList.toggle('service-card-active');
      }
    }
    service_btns[1].classList.toggle('service-btn-active');
  }
}

service_btns[2].addEventListener('click', makeActivePlanting);

function makeActivePlanting() {
  if(!service_btns[0].classList.contains('service-btn-active') && !service_btns[1].classList.contains('service-btn-active')) {
    for(let i = 0; i < service_cards.length; i++) {
      if(!service_cards[i].classList.contains('Planting')) {
        service_cards[i].classList.toggle('service-card-blur');
      }
      else {
        service_cards[i].classList.toggle('service-card-active');
      }
    } 
    service_btns[2].classList.toggle('service-btn-active');
  }
  else if(service_btns[0].classList.contains('service-btn-active') && service_btns[1].classList.contains('service-btn-active')) {
    for(let i = 0; i < service_cards.length; i++) {
      service_cards[i].classList.remove('service-card-active');
      service_cards[i].classList.remove('service-card-blur');
    }
      service_btns[0].classList.remove('service-btn-active');
      service_btns[1].classList.remove('service-btn-active');
      service_btns[2].classList.remove('service-btn-active');
  }
  else {
    for(let i = 0; i < service_cards.length; i++) {
      if(service_cards[i].classList.contains('Planting')) {
        service_cards[i].classList.toggle('service-card-blur');
        service_cards[i].classList.toggle('service-card-active');
      }
    }
    service_btns[2].classList.toggle('service-btn-active');
  }
}

// PRICES

const tariff_btns = document.querySelectorAll('.tariff-btn');
const tariff_containers = document.querySelectorAll('.tariff-container');
const tariff_arrows = document.querySelectorAll('.accordion-btn');
const accordion_open = document.querySelectorAll('.accordion-open');
const order_btns = document.querySelectorAll('.tariff-order-btn');

tariff_containers[0].addEventListener('click', seeBasicsTariff);
tariff_containers[1].addEventListener('click', seeStandardTariff);
tariff_containers[2].addEventListener('click', seeCareTariff);


function seeBasicsTariff() {
  if(tariff_btns[1].classList.contains('tariff-active') || tariff_btns[2].classList.contains('tariff-active')) {
    tariff_arrows[1].src = 'assets/icons/accordion_btn_notopen.svg'
    tariff_btns[1].classList.remove('tariff-active');
    accordion_open[1].classList.remove('accordion-open-active');
    tariff_arrows[2].src = 'assets/icons/accordion_btn_notopen.svg'
    tariff_btns[2].classList.remove('tariff-active');
    accordion_open[2].classList.remove('accordion-open-active');
    tariff_arrows[0].src = 'assets/icons/accordion_btn_open.svg';
    tariff_btns[0].classList.add('tariff-active');
    accordion_open[0].classList.add('accordion-open-active');
  }
  else {
    if(!tariff_btns[0].classList.contains('tariff-active')) {
      tariff_arrows[0].src = 'assets/icons/accordion_btn_open.svg';
      tariff_btns[0].classList.add('tariff-active');
      accordion_open[0].classList.add('accordion-open-active');
    }
    else {
      tariff_arrows[0].src = 'assets/icons/accordion_btn_notopen.svg'
      tariff_btns[0].classList.remove('tariff-active');
      accordion_open[0].classList.remove('accordion-open-active');
    }
  }
}

function seeStandardTariff() {
  if(tariff_btns[0].classList.contains('tariff-active') || tariff_btns[2].classList.contains('tariff-active')) {
    tariff_arrows[0].src = 'assets/icons/accordion_btn_notopen.svg'
    tariff_btns[0].classList.remove('tariff-active');
    accordion_open[0].classList.remove('accordion-open-active');
    tariff_arrows[2].src = 'assets/icons/accordion_btn_notopen.svg'
    tariff_btns[2].classList.remove('tariff-active');
    accordion_open[2].classList.remove('accordion-open-active');
    tariff_arrows[1].src = 'assets/icons/accordion_btn_open.svg';
    tariff_btns[1].classList.add('tariff-active');
    accordion_open[1].classList.add('accordion-open-active');
  }
  else {
    if(!tariff_btns[1].classList.contains('tariff-active')) {
      tariff_arrows[1].src = 'assets/icons/accordion_btn_open.svg';
      tariff_btns[1].classList.add('tariff-active');
      accordion_open[1].classList.add('accordion-open-active');
    }
    else {
      tariff_arrows[1].src = 'assets/icons/accordion_btn_notopen.svg'
      tariff_btns[1].classList.remove('tariff-active');
      accordion_open[1].classList.remove('accordion-open-active');
    }
  }
}

function seeCareTariff() {
  if(tariff_btns[0].classList.contains('tariff-active') || tariff_btns[1].classList.contains('tariff-active')) {
    tariff_arrows[0].src = 'assets/icons/accordion_btn_notopen.svg'
    tariff_btns[0].classList.remove('tariff-active');
    accordion_open[0].classList.remove('accordion-open-active');
    tariff_arrows[1].src = 'assets/icons/accordion_btn_notopen.svg'
    tariff_btns[1].classList.remove('tariff-active');
    accordion_open[1].classList.remove('accordion-open-active');
    tariff_arrows[2].src = 'assets/icons/accordion_btn_open.svg';
    tariff_btns[2].classList.add('tariff-active');
    accordion_open[2].classList.add('accordion-open-active');
  }
  else {
    if(!tariff_btns[2].classList.contains('tariff-active')) {
      tariff_arrows[2].src = 'assets/icons/accordion_btn_open.svg';
      tariff_btns[2].classList.add('tariff-active');
      accordion_open[2].classList.add('accordion-open-active');
    }
    else {
      tariff_arrows[2].src = 'assets/icons/accordion_btn_notopen.svg'
      tariff_btns[2].classList.remove('tariff-active');
      accordion_open[2].classList.remove('accordion-open-active');
    }
  }
}

// CONTACT US

const city_choose_btn = document.querySelector('.contacts-choose-btn');
const drop_arrow = document.querySelector('.drop-arrow')
const city_list = document.querySelector('.choose-city-list');

city_choose_btn.addEventListener('click', chooseCity);

function chooseCity() {
  if(!city_choose_btn.classList.contains('choose-btn-active')) {
    city_choose_btn.style.backgroundColor = '#C1E698';
    city_choose_btn.style.boxShadow = 'none';
    city_choose_btn.classList.add('choose-btn-active');
    drop_arrow.src = 'assets/icons/drop_btn_active.svg';
    city_list.classList.add('choose-city-list-active');
  }
  else {
    city_choose_btn.style.backgroundColor = '#D6E7D2';
    city_choose_btn.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)'
    city_choose_btn.classList.remove('choose-btn-active');
    drop_arrow.src = 'assets/icons/drop_btn.svg';
    city_list.classList.remove('choose-city-list-active');
  }
}

const city_items = document.querySelectorAll('.choose-city-item');
const Yonkers = document.querySelector('.Yonkers');
const Canandaigua = document.querySelector('.Canandaigua');
const Sherrill = document.querySelector('.Sherrill');
const NewYork = document.querySelector('.NewYork');
const cityName = document.querySelector('.contacts-city');
const sectionContacts = document.querySelector('.contacts');


city_items[0].addEventListener('click', showCanandaigua);

function showCanandaigua() {
  if (document.documentElement.clientWidth <= 380) {
    sectionContacts.style.backgroundImage = 'none';
  }
  city_list.classList.remove('choose-city-list-active');
  city_choose_btn.classList.remove('choose-btn-active');
  drop_arrow.src = 'assets/icons/drop_btn.svg';
  cityName.innerHTML = 'Canandaigua, NY';
  Canandaigua.classList.add('city-card-active');
  NewYork.classList.remove('city-card-active');
  Yonkers.classList.remove('city-card-active');
  Sherrill.classList.remove('city-card-active');
}

city_items[1].addEventListener('click', showNewYork);

function showNewYork() {
  if (document.documentElement.clientWidth <= 380) {
    sectionContacts.style.backgroundImage = 'none';
  }
  city_list.classList.remove('choose-city-list-active');
  city_choose_btn.classList.remove('choose-btn-active');
  drop_arrow.src = 'assets/icons/drop_btn.svg';
  cityName.innerHTML = 'New York City';
  NewYork.classList.add('city-card-active');
  Canandaigua.classList.remove('city-card-active');
  Yonkers.classList.remove('city-card-active');
  Sherrill.classList.remove('city-card-active');
}

city_items[2].addEventListener('click', showYonkers);

function showYonkers() {
  if (document.documentElement.clientWidth <= 380) {
    sectionContacts.style.backgroundImage = 'none';
  }
  city_list.classList.remove('choose-city-list-active');
  city_choose_btn.classList.remove('choose-btn-active');
  drop_arrow.src = 'assets/icons/drop_btn.svg';
  cityName.innerHTML = 'Yonkers, NY';
  Yonkers.classList.add('city-card-active');
  Canandaigua.classList.remove('city-card-active');
  NewYork.classList.remove('city-card-active');
  Sherrill.classList.remove('city-card-active');
}

city_items[3].addEventListener('click', showSherrill);

function showSherrill() {
  if (document.documentElement.clientWidth <= 380) {
    sectionContacts.style.backgroundImage = 'none';
  }
  city_list.classList.remove('choose-city-list-active');
  city_choose_btn.classList.remove('choose-btn-active');
  drop_arrow.src = 'assets/icons/drop_btn.svg';
  cityName.innerHTML = 'Sherrill, NY';
  Sherrill.classList.add('city-card-active');
  NewYork.classList.remove('city-card-active');
  Canandaigua.classList.remove('city-card-active');
  Yonkers.classList.remove('city-card-active');
}