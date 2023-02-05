let zoom = document.querySelector('.zoom');
let imgZOom = document.getElementById('imgZoom');

zoom.addEventListener('mousemove',(event)=>{
    imgZoom.style.opacity = 1;
    let positionPX = event.x - zoom.getBoundingClientRect().left;/* event.x là khoảng cách từ con trỏ đến lề trái của màn hình */
    /* zoom.getBoundingClientRect().left là khoảng cách của tấm hình đến lề trái của màn hình */
    let positionX = ( positionPX / zoom.offsetwidth )*100;
    imgZoom.style.setProperty('--zoom-x',positionPX + '%')

    let positionPY = event.y -zoom.getBoundingClientRect().top;
    /* khoảng cách con trỏ đến phần trên của cửa  sổ y */
    /* zoom.getBoundingClientRect().top là khoảng cách của ảnh đến của sổ trình duyệt */
    let positionY = (positionPY / zoom.offsetHeight)*100;
    imgZoom.style.setProperty('--zoom-y',positionPY + '%');

    let transformX = -(positionX - 50) / 4;
    let transformY = -(positionY - 50) / 4;
    imgZoom.style.transform = `scale(1.5) 
    translateX(${transformX}%) translateY(${transformY}%)`;
    // let transformX = ( positionX - 50 );
    // imgZoom.style.transform = ` scale(1.5) translateX(${transformX}%)`
})
zoom.addEventListener('mouseout',()=>{
    imgZoom.style.opacity = 0;
})