const body = document.querySelector("body");

// Add P to Body
const para = document.createElement("p");
para.textContent = "Hey I am red";
para.style.color = "red";
body.appendChild(para);

// Add H3 to Body
const h3 = document.createElement("h3");
h3.textContent = "Hey I am blue h3";
h3.style.color = "blue";
body.appendChild(h3);


// Add Div to Body
const div = document.createElement("div");
div.setAttribute("style", "border: 1px solid black; background-color: pink;")
body.appendChild(div);

// Add h1 to inner div
const div_h1 = document.createElement("h1");
div.textContent = "Im a div"
div.appendChild(div_h1)

// Add p to inner div
const div_p = document.createElement("p");
div_p.textContent = "Me too"
div.appendChild(div_p)

function alertFunction() {
    alert("YAY! YOU DID IT!");
}

// METHOD 3
btn.addEventListener("click", (e) => {
    e.target.style.background = "blue";
});


// Dropdown
document.querySelector('button.dropdown').addEventListener('click', () => {
    const dropdownList = document.querySelector('ul.dropdown-list')
    if (dropdownList.hidden){
        dropdownList.hidden = false;
    }
    else {
        dropdownList.hidden = true;
    }
})


// Image Carousal
const imageCarousal = (() => {
    const images = [
        'https://media.istockphoto.com/id/1807779771/vector/abstract-dark-blue-vector-background.jpg?s=1024x1024&w=is&k=20&c=sIyE-H5uj2xOfrBZ-dPUNYJMbq8NWMJAtN2zf21b5jw=',
        'https://images.freeimages.com/image/previews/7c5/dark-abstract-background-design-5690815.jpg',
        'https://media.istockphoto.com/id/1277204170/vector/3d-abstract-digital-technology-background-futuristic-sci-fi-user-interface-concept-with.jpg?s=1024x1024&w=is&k=20&c=R9NtMfAnBOE-GbEk83rqzR6rLOheapMEOq3rhhlkcic=',
    ]

    const chooseSlide = (index) => {
        document.querySelector('.image-carousal').style.backgroundImage = `url("${images[index]}")`
        refreshSliders(index);
    }

    // Carousal after 5 secs
    setInterval(() => {
        chooseSlide(currentIndex);
        currentIndex = (currentIndex+1) % images.length;
    }, 5000)

    // Prev/Next Buttons
    document.querySelector('.image-carousal button.next').addEventListener('click', (e) => {
        currentIndex = (currentIndex+1) % images.length;
        chooseSlide(currentIndex);
    })
    document.querySelector('.image-carousal button.previous').addEventListener('click', (e) => {
        if (currentIndex === 0) {
            currentIndex = images.length - 1;
        }
        else {
            currentIndex = (currentIndex-1);
        }
        chooseSlide(currentIndex);
    })

    // Display slide circles
    const refreshSliders = (slideIndex) => {
        const slideCount = document.querySelector('div.slides');

        while (slideCount.firstChild) {
            slideCount.removeChild(slideCount.firstChild);
        }

        for (let index = 0; index < images.length; index++) {
            const slideButton = document.createElement('button');
            slideButton.classList.add('dot');
            slideButton.dataset.index = index;
            slideCount.appendChild(slideButton);
        }
        // slideCount.children[slideIndex].classList.add('current-slide');
        slideCount.children[slideIndex].disabled = true;
    }

    document.querySelector('.slides').addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        if (index) {
            currentIndex = index;
            chooseSlide(currentIndex);
        }
    })

    let currentIndex = 0;
    chooseSlide(currentIndex);
})()


// Form Custom Validation
const checkEmail = () => {
    const email = document.querySelector('.custom-validation input[type="email"]');
    const emailError = document.querySelector('.custom-validation span.email-error')

    if (email.validity.valid) {
        emailError.textContent = "";
        email.classList.remove('error');
        return true;
    }
    else {
        emailError.textContent = "Enter valid email address";
        email.classList.add('error');
        return false;
    }
}

const checkCountry = () => {
    const country = document.querySelector('.custom-validation select[name="country"]');
    const countryError = document.querySelector('.custom-validation span.country-error');

    if(country.value) {
        countryError.textContent = "";
        countryError.classList.remove('error');
        document.querySelector('.custom-validation input#zip-code').disabled = false;
        return true;
    }
    else {
        countryError.textContent = "Please choose a country";
        countryError.classList.add('error');
        document.querySelector('.custom-validation input#zip-code').disabled = true;
        return false;
    }
}

const checkPassword = () => {
    const password = document.querySelector('.custom-validation input[type="password"]#password');
    const passwordError = document.querySelector('.custom-validation span.password-error');

    if (password.validity.tooShort) {
        passwordError.textContent = "Password should be minimum 8 characters length";
        password.classList.add('error');
    }
    else if(!new RegExp("[A-Z]", "").test(password.value)) {
        passwordError.textContent = "Password should include Cap case";
        password.classList.add('error');
    }
    else if(!new RegExp("[a-z]", "").test(password.value)) {
        passwordError.textContent = "Password should include small case";
        password.classList.add('error');
    }
    else if(!new RegExp("[@#$%^&*]", "").test(password.value)) {
        passwordError.textContent = "Password should include Speacial Character";
        password.classList.add('error');
    }
    else {
        passwordError.textContent = "";
        password.classList.remove('error');
        return true;
    }
    return false;
}

const checkConfirmPassword = () => {
    const password = document.querySelector('.custom-validation input[type="password"]#password');
    const confirmPassword = document.querySelector('.custom-validation input[type="password"]#confirm-password');
    const confirmPasswordError = document.querySelector('.custom-validation span.confirm-password-error');

    if (password.value != confirmPassword.value) {
        confirmPasswordError.textContent = 'Password and Confirm password should match';
        confirmPassword.classList.add('error');
        return false;
    }
    else {
        confirmPasswordError.textContent = '';
        confirmPassword.classList.remove('error');
        return true;
    }
}

document.querySelector('.custom-validation form').addEventListener('submit', (e) => {
    e.preventDefault();

    if (checkEmail() && checkCountry() && checkPassword() && checkConfirmPassword() && e.target.checkValidity()) {
        document.querySelector('.custom-validation span.success').textContent = 'Sucess, All OK'
    }

})

document.querySelector('.custom-validation input[type="email"]').addEventListener('input', () => {
    checkEmail();
})

document.querySelector('.custom-validation select[name="country"]').addEventListener('input', () => {
    checkCountry();
})

document.querySelector('.custom-validation input[type="password"]#password').addEventListener('input', () => {
    checkPassword();
})

document.querySelector('.custom-validation input[type="password"]#confirm-password').addEventListener('input', () => {
    checkConfirmPassword();
})