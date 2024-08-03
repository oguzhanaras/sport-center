// elements
let navigation = document.getElementById("navigation");
let nav = document.getElementById("nav");
let btnDiv = document.getElementById("btn-group");
let yoga = document.getElementById("yoga");
let group = document.getElementById("group");
let solo = document.getElementById("solo");
let stretch = document.getElementById("stretch");
let ourClassImg = document.getElementById("our-image");
let title1 = document.getElementById("our-class-title-1");
let title2 = document.getElementById("our-class-title-2");
let ourP1 = document.getElementById("our-class-p-1");
let ourP2 = document.getElementById("our-class-p-2");
let ourP3 = document.getElementById("our-class-p-3");
let ourP4 = document.getElementById("our-class-p-4");
let text = [
    {
        id: "yoga",
        img: "images/yoga.jpg",
        title1: "Why are your Yoga?",
        title2: "When comes Yoga Your Time.",
        text1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magni nobis ullam tempora aliquam ratione tempore non commodi praesentium voluptatem! Cumque voluptas repellendus dolores corporis dicta autem libero et similique cupiditate?",
        text2: "Saturday - Sunday: 8:00am - 10:00am",
        text3: "Monday - Tuesday: 10:00am - 12:00am",
        text4: "Wednesday - Friday: 3:00pm - 6:00pm",
        
    },
    {
        id: "group",
        img: "images/group.webp",
        title1: "Group Classes",
        title2: "When comes Group Classes Your Time.",
        text1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum expedita assumenda doloribus autem labore. Inventore, perferendis, quidem delectus voluptas eum ullam voluptatum quia aut quos dicta? Quo, quia.",
        text2: "Saturday - Sunday: 9:00am - 11:00am",
        text3: "Monday - Tuesday: 11:00am - 1:00pm",
        text4: "Wednesday - Friday: 4:00pm - 7:00pm",
    },
    {
        id: "solo",
        img: "images/solo.jpg",
        title1: "Solo Classes",
        title2: "When comes Solo Classes Your Time.",
        text1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, repellendus, iusto quo excepturi voluptatum nemo vitae quia veniam ea aspernatur. Cumque, aperiam! Autem, consequuntur?",
        text2: "Saturday - Sunday: 7:00am - 9:00am",
        text3: "Monday - Tuesday: 11:00am - 1:00pm",
        text4: "Wednesday - Friday: 4:00pm - 7:00pm",
    },
    {
        id: "stretch",
        img: "images/stret.webp",
        title1: "Stretch Classes",
        title2: "When comes Stretch Classes Your Time.",
        text1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quidem, voluptas nemo neque voluptatibus cumque excepturi quae veniam? Officiis, error? Autem, quod?",
        text2: "Saturday - Sunday: 7:00am - 9:00am",
        text3: "Monday - Tuesday: 11:00am - 1:00pm",
        text4: "Wednesday - Friday: 4:00pm - 7:00pm",
    }
];

// mobile toggle menu 
function toggleMenu() {
    
    if (nav.className === "nav") {
        nav.className += " responsive";
        navigation.className += " bg-blue";
    } else {
        nav.className = "nav";
        if (document.documentElement.scrollTop < 50) {
            navigation.className = "";
        }
    }
}
// scroll and mobile toggle menu navbar background color
function navBG() {
    if (document.documentElement.scrollTop > 50) {
        navigation.className = "bg-blue";
    } else {
        if (nav.className !== "nav responsive") {
            navigation.className = "";
        }
    }
}

//show text for click btns
function showText(id) {
    ourClassImg.src = text[id].img;
    title1.textContent = text[id].title1;
    title2.textContent = text[id].title2;
    ourP1.textContent = text[id].text1;
    ourP2.textContent = text[id].text2;
    ourP3.textContent = text[id].text3;
    ourP4.textContent = text[id].text4;
}

function toggleActive(key) {
    let btns = [yoga, group, solo, stretch];
    btns.forEach(btn => {
        if (btn.id === key) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}

window.onscroll = function() {navBG()};

btnDiv.addEventListener("click", (e) => {

    let id = e.target.id;

    if (id === "yoga") {
        showText(0);
        toggleActive("yoga");
    } else if (id === "group") {
        showText(1);
        toggleActive("group");
    } else if (id === "solo") {
        showText(2);
        toggleActive("solo");
    } else if (id === "stretch") {
        showText(3);
        toggleActive("stretch");
    }
});
