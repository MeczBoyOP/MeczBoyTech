$('.project-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    navText: [
        '<i class="fa-solid fa-arrow-left"></i>',
        '<i class="fa-solid fa-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    }
})
$('.testimony-slider') .owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    navText: [
        '<i class="fa-solid fa-arrow-left"></i>',
        '<i class="fa-solid fa-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 3,
        }
    }
})

$(document).ready(function ($) {
    //If your <ul> has the id "glasscase"
    $('.glasscase-slider').glassCase({
        'thumbsPosition': 'bottom',
        'widthDisplayPerc': 100,
        isDownloadEnabled: false,
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get form data
    const formData = new FormData(this);
  
    // Prepare data for EmailJS
    const data = {
      service_id: 'dipnayak99@gmail.com',
      template_id: 'dipnayak99@gmail.com',
      user_id: 'dipnayak99@gmail.com',
      template_params: {
        'name': formData.get('name'),
        'email': formData.get('email'),
        'message': formData.get('message')
      }
    };
  
    // Send email using EmailJS
    emailjs.send('dipnayak99@gmail.com', 'dipnayak99@gmail.com', data)
      .then(function(response) {
        alert('Your message has been sent. We will get back to you soon.');
        // Clear the form after successful submission
        document.getElementById('contact-form').reset();
      }, function(error) {
        alert('There was a problem sending your message. Please try again later.');
        console.error('Error:', error);
      });
  });
  