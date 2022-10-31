// Page loading animation
$(window).on('load', function () {
    if ($('.cover').length) {
        $('.cover').parallax({
            imageSrc: $('.cover').data('image'),
            zIndex: '1'
        });
    }

    $(".pre-loader").animate({
        'opacity': '0'
    }, 3000, function () {
        setTimeout(function () {
            $(".pre-loader").css("visibility", "hidden").fadeOut();
        }, 1000);
    });
});


// let dest = new Date("Nov 1, 2022 10:00:00").getTime();

// let x = setInterval(() => {
//     let now = new Date().getTime();

//     let diff = dest - now;

//     let days = Math.floor(diff / (1000 * 60 * 60 * 24));

//     let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let minuites = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((diff % (1000 * 60)) / 1000);


//     (days >= 0 && days < 10) ? $('.days').html(`0${days}`) : $('.days').html(`${days}`);

//     (hours >= 0 && hours < 10) ? $('.hours').html(`0${hours}`) : $('.hours').html(`${hours}`);

//     (minuites >= 0 && minuites < 10) ? $('.min').html(`0${minuites}`) : $('.min').html(`${minuites}`);

//     (seconds >= 0 && seconds < 10) ? $('.sec').html(`0${seconds}`) : $('.sec').html(`${seconds}`);
// }, 1000);


// let op1 = $('#op1');
// let op2 = $('#op2');

// $(document).ready(() => {
//     op1.on('click', () => {
//         if($('#op1').is('checked')) {
//             $('.students_resume').toggleClass('active');
//         }
//     });
//     op2.on('click', () => {
//         if($('#op2').is('checked')) {
//             $('.professional_resume').toggleClass('active');
//         }
//     });
// });

let op1 = document.getElementById('op1');
let op2 = document.getElementById('op2');

let students_resume = document.querySelector('.students_resume');
let professional_resume = document.querySelector('.professional_resume');

op1.addEventListener('click', () => {
    if (op1.checked == true) {
        if (professional_resume.classList.contains('active')) {
            professional_resume.classList.remove('active');
        }
        students_resume.classList.add('active');
    }
});

op2.addEventListener('click', () => {
    if (op2.checked == true) {
        if (students_resume.classList.contains('active')) {
            students_resume.classList.remove("active");
        }
        professional_resume.classList.add('active')
    }
});

