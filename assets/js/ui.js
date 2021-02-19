scrollNews = (index) => {
    let divWidth = document.querySelector('.news-wrapper-outer').offsetWidth;
    if(index == 1){
        document.querySelector('.news-wrapper').style.transform = `translateX(0px)`;
    }
    if(index == 2){
        document.querySelector('.news-wrapper').style.transform = `translateX(${-divWidth}px)`;
    }
    if(index == 3){
        document.querySelector('.news-wrapper').style.transform = `translateX(${-2*divWidth}px)`;
    }
    if(index == 4){
        document.querySelector('.news-wrapper').style.transform = `translateX(${-3*divWidth}px)`;
    }
    markSelected(index);
}

markSelected = (index) => {
    document.querySelector('.blog-circle-1').style.background = '#99edff';
    document.querySelector('.blog-circle-2').style.background = '#99edff';
    document.querySelector('.blog-circle-3').style.background = '#99edff';
    document.querySelector('.blog-circle-4').style.background = '#99edff';
    document.querySelector(`.blog-circle-${index}`).style.background = '#00d2ff';
}