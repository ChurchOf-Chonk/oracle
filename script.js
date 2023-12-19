setTimeout(() => {
    document.getElementById("dots").style.animation = "dots-final 2.5s ease alternate infinite both";
    
    document.getElementById("search-box").style.opacity = "1";
    document.getElementById("search-box").style.transform = "translateY(0)";

    document.getElementById("navbar").style.opacity = "1";
    document.getElementById("navbar").style.transform = "translateY(0)";

    document.getElementById("hub-button").style.opacity = "1";
    document.getElementById("hub-button").style.transform = "translateX(0)";

    setTimeout(() => {
        document.getElementById("search-box").style.transition = "0.25s ease";

        document.getElementById("navbar").style.transition = "0.25s ease";

        document.getElementById("hub-button").style.transition = "0.25s ease";

        document.body.style.overflow = "initial";
    }, 2500);
}, 5000);