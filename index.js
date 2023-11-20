// 웹리디자인 슬라이드
const web = new Swiper('#web', {
    loop:true,
    // autoplay:{delay:3000}, //자동재생
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

// 닫기버튼
const close = document.querySelector('.close')
const browser = document.querySelector('.browser_on')
console.log(close, browser)
close.addEventListener('click',function(){
    browser.style.display = 'none'
    $.fn.fullpage.setAllowScrolling(true) //풀페이지 스크롤 재개
})
const project_slide = document.querySelectorAll('#project .swiper-wrapper .swiper-slide')
const project_mac = document.querySelectorAll('#project_mac .swiper-wrapper .swiper-slide')
const tab = document.querySelectorAll('.gnb li')
console.log(project_slide, project_mac, tab)
project_slide.forEach(function(t,i,a){
    t.addEventListener('click', function(){
        browser.style.display = 'block'
        for(let i of project_mac){i.style.display ='none'}
        project_mac[i].style.display = 'block'
        for(let i of tab){i.classList.remove('on')}
        tab[i].classList.add('on')
        $.fn.fullpage.setAllowScrolling(false) //풀페이지 스크롤 해제
    })
})
tab.forEach(function(t,i,a){
    t.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of project_mac){i.style.display ='none'}
        project_mac[i].style.display = 'block'
        for(let i of tab){i.classList.remove('on')}
        tab[i].classList.add('on')
        $.fn.fullpage.setAllowScrolling(false) //풀페이지 스크롤 해제
    })
})

// 상세페이지 영역
const d_popup= document.querySelector('.detail_popup')
const d_close= document.querySelector('.d_close')
console.log(d_close,d_popup)
d_close.addEventListener('click',function(){
    d_popup.style.display = 'none'
    $.fn.fullpage.setAllowScrolling(true) //풀페이지 스크롤 재개
})
const detail_slide = document.querySelectorAll('#detail .swiper-wrapper .swiper-slide')
const detail_mac = document.querySelectorAll('#detail_mac .swiper-wrapper .swiper-slide')
const d_gnb = document.querySelectorAll('.d_gnb li')
detail_slide.forEach(function(t,i,a){
    t.addEventListener('click', function(){
        d_popup.style.display = 'block'
        for(let i of detail_mac){i.style.display ='none'}
        detail_mac[i].style.display = 'block'
        for(let i of tab){i.classList.remove('on')}
        d_gnb[i].classList.add('on')
        $.fn.fullpage.setAllowScrolling(false) //풀페이지 스크롤 해제
    })
})
d_gnb.forEach(function(t,i,a){
    t.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of detail_mac){i.style.display ='none'}
        detail_mac[i].style.display = 'block'
        for(let i of d_gnb){i.classList.remove('on')}
        d_gnb[i].classList.add('on')
        $.fn.fullpage.setAllowScrolling(false) //풀페이지 스크롤 해제
    })
})