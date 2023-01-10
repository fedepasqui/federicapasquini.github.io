// var onScrollHandler = function() {
//     var newImageUrl = yourImageElement.src;
//     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//     if (scrollTop > 100) {
//        newImageUrl = "img1.jpg"
//     }
//     if (scrollTop > 200) {
//        newImageUrl = "img2.jpg"
//     }
//     if (scrollTop > 300) {
//        newImageUrl = "img3.jpg"
//     }
//     yourImageElement.src = newImageUrl;
//   };
//   object.addEventListener ("scroll", onScrollHandler);


window.addEventListener("scroll", function(event){
var scroll = window.innerWidth / 2.5
if(this.window.scrollY > scroll) {
    document.getElementById("profile").src="me-2.JPG";
} else {
    document.getElementById("profile").src="me-1.JPG";
    console.log(this.window.scrollY)
}
}
)

// window.addEventListener("scroll", function(event){
//     var scroll = this.window.scrollY;
//     if(scroll > 435) {
//         document.getElementById("profile").src="me-2.JPG";
//     } else {
//         document.getElementById("profile").src="me-1.JPG";
//         console.log(this.window.scrollY)
//     }
//     }
//     )






