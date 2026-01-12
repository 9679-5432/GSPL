// --- Hero Image Slider Logic ---

// 1. Array of Image URLs (Add your own image links here)
const sliderImages = [
    // Image 1 (Current Default)
    'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    
    // Image 2 (Cricket Ball on Pitch)
    'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    
    // Image 3 (Stadium/Crowd)
    'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',

    // Image 4 (Batsman ready)
    'Images/pic/1.jpg',
    'Images/pic/2.jpg',
    'Images/pic/3.jpg',
    'Images/pic/4.jpg',
];

let currentSlide = 0;
const heroSection = document.getElementById('hero-slider');

function changeSlide() {
    // Increment slide index
    currentSlide++;
    
    // Reset to 0 if we reach the end of the array
    if (currentSlide >= sliderImages.length) {
        currentSlide = 0;
    }

    // Apply the new background image
    if(heroSection) {
        heroSection.style.backgroundImage = `url('${sliderImages[currentSlide]}')`;
    }
}

// 2. Set the timer (3000ms = 3 seconds)
setInterval(changeSlide, 3000);


// Mobile Menu Toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Team Squad Data (Mock Data for 8 Teams)
const teamData = {
    team1: { name: "Wicket Warriors", squad: ["Rohit (C)", "Virat", "Gill", "Bumrah", "Shami", "Jadeja", "Pant (WK)", "Hardik", "Surya", "Axar", "Siraj"] },
    team2: { name: "Young Fighter XI", squad: ["Warner (C)", "Smith", "Head", "Cummins", "Starc", "Marsh", "Inglis (WK)", "Maxwell", "Stoinis", "Zampa", "Hazlewood"] },
    team3: { name: "Royal Rangers", squad: ["Buttler (C)", "Stokes", "Root", "Archer", "Wood", "Bairstow", "Ali", "Woakes", "Rashid", "Curran", "Brook"] },
    team4: { name: "Thunder XI", squad: ["Williamson (C)", "Boult", "Southee", "Conway", "Mitchell", "Santner", "Latham (WK)", "Phillips", "Ferguson", "Henry", "Ravindra"] },
    team5: { name: "Kingsford 07", squad: ["Babar (C)", "Rizwan", "Shaheen", "Naseem", "Haris", "Shadab", "Iftikhar", "Fakhar", "Imam", "Nawaz", "Wasim"] },
    team6: { name: "Athletics Angel", squad: ["Pooran (C)", "Russell", "Narine", "Holder", "Hetmyer", "Joseph", "Mayers", "King", "Powell", "Hosein", "Shepherd"] },
    team7: { name: "Ghanarampur Riders", squad: ["Rashid (C)", "Nabi", "Gurbaz", "Mujeeb", "Noor", "Farooqi", "Zadran", "Shahidi", "Naib", "Omarzai", "Hassan"] },
    team8: { name: "M.T.I.H.M XI", squad: ["Shakib (C)", "Mustafizur", "Litton", "Tamim", "Mahmudullah", "Taskin", "Mehidy", "Shoriful", "Hridoy", "Shanto", "Hasan"] }
};

// Modal Logic for Teams
function openSquad(teamId) {
    const modal = document.getElementById('squad-modal');
    const title = document.getElementById('modal-title');
    const list = document.getElementById('modal-list');
    
    // Populate Data
    const team = teamData[teamId];
    title.innerText = team.name;
    list.innerHTML = team.squad.map(player => `<li class="py-2 border-b border-gray-100 last:border-0">${player}</li>`).join('');
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeSquad() {
    const modal = document.getElementById('squad-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// Gallery Tab Logic
function switchGallery(season) {
    // Hide all grids
    document.querySelectorAll('.gallery-grid').forEach(grid => grid.classList.add('hidden'));
    // Show selected
    document.getElementById(season).classList.remove('hidden');
    
    // Update Button Styles
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('bg-yellow-500', 'text-blue-900');
        btn.classList.add('bg-blue-900', 'text-white');
    });
    
    // Highlight Active Button
    const activeBtn = document.querySelector(`button[onclick="switchGallery('${season}')"]`);
    if(activeBtn) {
        activeBtn.classList.remove('bg-blue-900', 'text-white');
        activeBtn.classList.add('bg-yellow-500', 'text-blue-900');
    }
}


// --- NEW FEATURES START HERE ---

// 1. COUNTDOWN TIMER LOGIC
function startCountdown() {
    // Set the date we're counting down to (Jan 10, 2026, 10:00 AM)
    const countDownDate = new Date("Oct 25, 2026 10:00:00").getTime();

    // Update the count down every 1 second
    const x = setInterval(function() {

        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the elements with corresponding IDs
        const dayEl = document.getElementById("days");
        if(dayEl) {
            document.getElementById("days").innerText = days < 10 ? "0" + days : days;
            document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
            document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
            document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
        }

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            const timerContainer = document.getElementById("countdown-timer");
            if(timerContainer) {
                timerContainer.innerHTML = '<div class="text-4xl font-bold text-yellow-500 animate-bounce">TOURNAMENT IS LIVE!</div>';
            }
        }
    }, 1000);
}

// Initialize Countdown
startCountdown();


// 2. BACK TO TOP TOGGLE LOGIC
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    // Show button when scrolling down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.remove('hidden');
            backToTopBtn.classList.add('flex'); // Use flex to center the icon
        } else {
            backToTopBtn.classList.add('hidden');
            backToTopBtn.classList.remove('flex');
        }
    });

    // Scroll to top functionality
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// let url = 'https://script.google.com/macros/s/AKfycbxY5YoQRd1fuZAPneDR37Y7Vszng5aiq32tGSsEWtKiNZuKliBWnB1Zucj7spIajTiw/exec'
// let form=document.querySelector('#form');
// form.addEventListener("submit",(e)=>{
//     let d = new FormData(form);
//     fetch(url,{
//         method:"POST",
//         body:d
//     }).then((res)=>res.text())
//     .then((finalRes)=>console.log(finalRes))
//     e.preventDefault();
// })

// 1. PASTE YOUR GOOGLE SCRIPT URL INSIDE THE QUOTES BELOW
        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbySZH6WNj9cXVLHhy3HZli7GcsMPDuA7W1O98Sy96slccnAHwYybsZSftuY8WUq90LH/exec'; 

        document.getElementById('gsplForm').addEventListener('submit', function(e) {
            e.preventDefault(); // Stop page from reloading
            
            // Debugging Check: If the script crashes here, look at Console
            console.log("Form Submit Clicked");

            const btn = document.getElementById('submitBtn');
            const loader = document.getElementById('loader');
            const msg = document.getElementById('message');

            // Show Loader
            btn.classList.add('hidden');
            loader.classList.remove('hidden');

            // --- CRITICAL SECTION: READING INPUTS ---
            // If any ID is wrong, the code stops here
            try {
                var nameVal = document.getElementById('name').value;
                var dobVal = document.getElementById('dob').value;
                var mobileVal = document.getElementById('mobile').value;
                var categoryVal = document.getElementById('category').value;
                var roleVal = document.getElementById('role').value;
            } catch (err) {
                console.error("ERROR FINDING INPUTS:", err);
                alert("Error: One of the input fields is missing. Check the IDs.");
                return;
            }

            const formData = {
                name: nameVal,
                dob: dobVal,
                mobile: mobileVal,
                category: categoryVal,
                role: roleVal,
            };

            // Helper to read file as Base64
            const getBase64 = (file) => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = error => reject(error);
                });
            };

            // Get File Elements
            const playerFile = document.getElementById('playerImage').files[0];
            const aadharFile = document.getElementById('aadharImage').files[0];
            const paymentFile = document.getElementById('paymentImage').files[0];

            // Convert Files and Send
            Promise.all([
                playerFile ? getBase64(playerFile) : Promise.resolve(null),
                aadharFile ? getBase64(aadharFile) : Promise.resolve(null),
                paymentFile ? getBase64(paymentFile) : Promise.resolve(null)
            ]).then(base64Files => {
                formData.playerImage = base64Files[0];
                formData.aadharImage = base64Files[1];
                formData.paymentImage = base64Files[2];

                console.log("Sending Data to Google...", formData);

                // Send to Google Script
                fetch(SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                })
                .then(() => {
                    // Success Handling
                    loader.classList.add('hidden');
                    msg.classList.remove('hidden');
                    msg.innerHTML = '<i class="fas fa-check-circle"></i> Registration Successful!';
                    msg.classList.add('bg-green-100', 'text-green-700');
                    
                    document.getElementById('gsplForm').reset();
                    
                    setTimeout(() => {
                        btn.classList.remove('hidden');
                        msg.classList.add('hidden');
                        msg.classList.remove('bg-green-100', 'text-green-700');
                    }, 4000);
                })
                .catch(error => {
                    // Error Handling
                    console.error("Fetch Error:", error);
                    loader.classList.add('hidden');
                    msg.classList.remove('hidden');
                    msg.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Network Error. Try Again.';
                    msg.classList.add('bg-red-100', 'text-red-700');
                    btn.classList.remove('hidden');
                });
            });
        });