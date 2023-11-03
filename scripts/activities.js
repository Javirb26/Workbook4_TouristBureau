"use strict";

// initializing form input elements
const eTicketEl = document.getElementById("eTicket");
const creditCardEl = document.getElementById("creditCard");
const emailEl = document.getElementById("email");
const submitBtnEl = document.getElementById("submitBtn");
const resetEl = document.getElementById("reset");
const formEl = document.getElementById("form-choose");
const formIfPriceEl = document.getElementById("formIfPrice");
const descriptionEl = document.getElementById("description");
const messageEl = document.getElementById("message");




window.onload = function categories() {
    // initializing both category / activity drop down list
    const categoryEl = document.getElementById("categories");
    const activityEl = document.getElementById("activities");
    // End INITIALIZATION

    // category array
    let categories = [
        "Adventures",
        "Arts & Crafts",
        "Museums",
        "Wine Tastings",
        "Other",
    ];
    // End category array

    // activities array
    let activities = [
        {
            category: "Adventures",
            id: "A101",
            name: "Valley Hot Air Balloons",
            description:
                "Enjoy a lovely hot air balloon ride over the valley at sunrise.  Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
            location: "121 S. Main Street",
            price: 265.0,
        },
        {
            category: "Adventures",
            id: "A102",
            name: "River Runners: Float Trip",
            description:
                "A mellow float trip with lovely scenery, great fishing, just a few riffles, and it finishes back at our base. It is a perfect trip for those wishing to take their time, or those on a limited schedule.",
            location: "145 FM 103",
            price: 65.0,
        },
        {
            category: "Adventures",
            id: "A103",
            name: "River Runners: Ride the Rapids",
            description:
                "Experience 3-4 hours of Class II and III whitewater rafting with breathtaking scenery. It is a fun, thrilling, and memorable adventure that everyone from ages 8 and up can enjoy – no experience necessary!",
            location: "145 FM 103",
            price: 145.0,
        },
        {
            category: "Arts & Crafts",
            id: "AC101",
            name: "Painting with a Twist : Oils",
            description:
                "Enjoy 2 hours of creating an oil painting by following along with an experienced artist.  Drinks and snacks are included.",
            location: "1991 Paint Drive",
            price: 40.0,
        },
        {
            category: "Arts & Crafts",
            id: "AC102",
            name: "Painting with a Twist : Watercolor",
            description:
                "Enjoy 2 hours of creating a watercolor painting by following along with an experienced artist.  Drinks and snacks are included.",
            location: "1991 Paint Drive",
            price: 40.0,
        },
        {
            category: "Museums",
            id: "M101",
            name: "Bravings Airship Museum",
            description:
                "Enjoy climbing on and in our collection of small airplanes.  You will find bi-planes, experimental planes and small jets.",
            location: "101 Airfield Drive",
            price: 10.0,
        },
        {
            category: "Museums",
            id: "M102",
            name: "Forks and Spoons Museum",
            description:
                "Enjoy touring our qwerky Forks and Spoons Museum.  It houses the worlds largest collection of, you guessed it, forks and spoons!",
            location: "1056 Lost Knives Court",
            price: 3.0,
        },
        {
            category: "Museums",
            id: "M103",
            name: "Steenges Computing Museum",
            description:
                "Enjoy our the Stengees Computing Museum that illustrates how computing has changed over the last 60 years.",
            location: "103 Technology Way",
            price: 0.0,
        },
        {
            category: "Wine Tastings",
            id: "WT-101",
            name: "Hastings Winery Tours and Tastings",
            description:
                "Hastings Winery is a small, family owned winery in the heart of San Jose, CA. We pride ourselves on producing single vineyard, small-batch, handcrafted premium wines sourced from the finest grapes in our valley.",
            location: "10987 FM 1187",
            price: 12.0,
        },
        {
            category: "Wine Tastings",
            id: "WT-102",
            name: "Lone Oak Winery",
            description:
                "We are a family and friend centered winery that thrives to make each of our guests feel right at home. With a growing wine list of the finest local wines, we offer tours and an incredible experience. We are open for to-go, curbside, and delivery.",
            location: "121 Burleson Court",
            price: 0.0,
        },
        {
            category: "Other",
            id: "OTH101",
            name: "Fire Department: Ride Along",
            description:
                "Spend the day hanging out at one of our local fire stations, visiting with the staff and learning about their jobs.  If they receive a call, you can ride along with them!",
            location: "10 Redline Drive",
            price: 25.0,
        },
        {
            category: "Other",
            id: "OTH102",
            name: "Homes For Our Neighbors",
            description:
                "Yes, you are a visitor!  But what better way to learn about a community than volunteer with the locals to build affordable housing.  Whether it be for an hour or a week, we would love to have you with us!",
            location: "Call (555) 555-5555",
            price: 0.0,
        },
    ];

    // End activities array


    //CATEGORY: FOR LOOP
    for (let i = 0; i < categories.length; i++) {
        let optionData = categories[i];
        let optionEl = new Option(optionData, optionData);
        // appending the value of option element to category select element
        categoryEl.appendChild(optionEl);
    }
    // End CATEGORY: FOR LOOP

    // FUNCTION onchange for activies select element
    categoryEl.onchange = function () {
        messageEl.innerHTML = "";
        descriptionEl.innerHTML = "";
        // value of category select element
        const selectedCategory = categoryEl.value;
        
        // const selectedActivity1 = activityEl.options[activityEl.selectedIndex].text;
        // Clears existing options
        activityEl.length = 0;
        // auto populates activities select element with "Select One"
        activityEl.innerHTML = "<option value= Select One>Select One</option>";
        // ACTIVITY: FOR LOOP
        for (let i = 0; i < activities.length; i++) {
            const activity = activities[i];
            // if the categories are === then populate activity select element with name of same category activies
            if (activity.category === selectedCategory) {
                const optionEl2 = new Option(activity.name, activity.id);
                // appends value of optionEl2 to select element
                activityEl.appendChild(optionEl2);

                
            }
            // if(totalPrice > 0){
            //     formIfPriceEl.style.display = "block"
            // } else {
            //     formIfPriceEl.style.display = "none";
            // }
        }
    };
    let selectedActivityPrice = 0;

        activityEl.onchange = function() {
            messageEl.innerHTML = "";
            const selectedActivityId = activityEl.value;
            let theSelectedActivity = null;
                for (let i = 0; i < activities.length; i++){
                    if(activities[i].id === selectedActivityId){
                        theSelectedActivity = activities[i];
                        selectedActivityPrice = activities[i].price;
                        break;
                    }
                }
                if(theSelectedActivity){
                    let descriptionText = `${theSelectedActivity.description}`;
                    descriptionEl.innerHTML = descriptionText;
                } else {
                    descriptionEl.innerHTML = "";
                };
                resetEl.onclick = function () {
                    descriptionEl.innerHTML = "";
                };
            };
        
        
        
        
        
        
        // End ACTIVITY: FOR LOOP
    
    
    // onsubmit form function  
    formEl.onsubmit = function () {
        // initializing needed variables
        const selectedActivity = activityEl.options[activityEl.selectedIndex].text;
        const eTicketCount = parseInt(eTicketEl.value);
        const totalPrice = selectedActivityPrice * eTicketCount;
        
        // const selectedActivity = activityEl.options[activityEl.selectedIndex].text;
        const creditCard = creditCardEl.value;
        const email = emailEl.value;
        

        // if true 
        if (eTicketCount && selectedActivityPrice && creditCard && email) {
            // get total price
            
            // if 2+ etickets then: "ticket(S)" plural
            if (eTicketCount > 1) {
                messageEl.innerHTML = `Your credit card has been charged $${totalPrice.toFixed(
                    2
                )} for ${eTicketCount} tickets to ${selectedActivity}. A confirmation email has been sent out to ${email}`;
            } else {
                // 1 ticket then: "ticket" singular
                messageEl.innerHTML = `Your credit card has been charged $${totalPrice.toFixed(
                    2
                )} for ${eTicketCount} ticket to ${selectedActivity}. A confirmation email has been sent out to ${email}`;
            }

            // reset anon function to reset messageEl when clicked
            resetEl.onclick = function () {
                messageEl.innerHTML = "";
            };
        }
        // allows form to submit without auto refresh
        return false;
    };
};

// if(totalPrice > 0){
                    
// } else {
//     formIfPriceEl.hidden = true;
// }

// id.toggle.class <-- for d-none selector for bootstrap