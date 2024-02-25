window.addEventListener('scroll', function(){
    let navBard = this.document.getElementById('hero');
    navBard.classList.toggle('scrollNav',this.window.scrollY > 0);
})