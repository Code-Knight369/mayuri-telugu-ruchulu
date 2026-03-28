// menu.js

document.addEventListener('DOMContentLoaded', () => {
    // Menu Data
    const menuData = {
        combo: [
            { name: "Raagi Sangati with Kodi Kura", price: "369", desc: "Combo" },
            { name: "Natu Kodi Pulusu", price: "419", desc: "Combo" },
            { name: "Maamsam Kura", price: "419", desc: "Combo" },
            { name: "Sambar Rice with Chicken Fry", price: "359", desc: "Combo" },
            { name: "Prawns Fry", price: "419", desc: "Combo" },
            { name: "Steamed Rice", price: "99", desc: "Rice Specials" },
            { name: "Curd Rice", price: "129", desc: "Rice Specials" },
            { name: "Raagi Sangati", price: "169", desc: "Rice Specials" },
            { name: "Sambar Rice", price: "179", desc: "Rice Specials" },
            { name: "DSP Curd Rice", price: "199", desc: "Rice Specials" }
        ],
        soups: [
            { name: "Veg Corn Soup", price: "169", desc: "Veg" },
            { name: "Veg Hot & Sour Soup", price: "169", desc: "Veg" },
            { name: "Veg Manchow Soup", price: "169", desc: "Veg" },
            { name: "Veg Cantonese Soup", price: "169", desc: "Veg" },
            { name: "Cream of Mushroom Soup", price: "169", desc: "Veg" },
            { name: "Cream of Tomato Soup", price: "169", desc: "Veg" },
            { name: "Cream of Noodles Soup", price: "169", desc: "Veg" },
            { name: "Veg Lemon Coriander Soup", price: "169", desc: "Veg" },
            { name: "Veg Tomyom Soup", price: "169", desc: "Veg" },
            { name: "Baby Corn Soup", price: "169", desc: "Veg" },
            { name: "Choice of Veg Soup (1/2)", price: "199", desc: "Veg" },
            { name: "French Onion Soup", price: "219", desc: "Veg" },
            { name: "MTR Spl Veg Soup 1/2", price: "219", desc: "Veg" },
            { name: "Chicken Corn Soup", price: "189", desc: "Non-Veg" },
            { name: "Chicken Hot & Sour Soup", price: "189", desc: "Non-Veg" },
            { name: "Chicken Manchow Soup", price: "189", desc: "Non-Veg" },
            { name: "Chicken Cantonese Soup", price: "189", desc: "Non-Veg" },
            { name: "Cream of Chicken Soup", price: "189", desc: "Non-Veg" },
            { name: "Lemon Coriander Soup", price: "189", desc: "Non-Veg" },
            { name: "Non-Veg Tomyom Soup", price: "189", desc: "Non-Veg" },
            { name: "Chicken Clear Soup", price: "189", desc: "Non-Veg" },
            { name: "MTR Lung Fung Soup", price: "219", desc: "Non-Veg" },
            { name: "Choice of Non-Veg Soup (1/2)", price: "229", desc: "Non-Veg" }
        ],
        biryani: [
            { name: "Veg Biryani", price: "349", desc: "Veg" },
            { name: "Spl Veg Biryani", price: "379", desc: "Veg" },
            { name: "Vulavacharu Veg Biryani", price: "399", desc: "Veg" },
            { name: "Paneer Biryani", price: "399", desc: "Veg" },
            { name: "Paneer Tikka Biryani", price: "419", desc: "Veg" },
            { name: "Mushroom Biryani", price: "389", desc: "Veg" },
            { name: "Cashew Paneer Biryani", price: "419", desc: "Veg" },
            { name: "Cashew Mushroom Biryani", price: "419", desc: "Veg" },
            { name: "Cashew Biryani", price: "419", desc: "Veg" },
            { name: "Ghee Mushroom Biryani", price: "419", desc: "Veg" },
            { name: "Ghee Paneer Biryani", price: "419", desc: "Veg" },
            { name: "Egg Biryani (3P)", price: "349", desc: "Non-Veg" },
            { name: "Chicken Dum Biryani (3P)", price: "399", desc: "Non-Veg" },
            { name: "Chicken Wings Biryani (3P)", price: "419", desc: "Non-Veg" },
            { name: "Chicken Fry Biryani", price: "419", desc: "Non-Veg" },
            { name: "Mutton Fry Biryani", price: "529", desc: "Non-Veg" },
            { name: "Mutton Keema Biryani", price: "539", desc: "Non-Veg" },
            { name: "Spl Mutton Biryani", price: "539", desc: "Non-Veg" },
            { name: "MTR Mutton Shahi Gosht Biryani", price: "569", desc: "Non-Veg" },
            { name: "Prawns Biryani", price: "489", desc: "Non-Veg" },
            { name: "Fish Biryani", price: "489", desc: "Non-Veg" },
            { name: "Spl Prawn Biryani", price: "499", desc: "Non-Veg" },
            { name: "Vulavacharu Mutton Biryani", price: "549", desc: "Non-Veg" },
            { name: "Mixed Non-Veg Biryani", price: "499", desc: "Non-Veg" },
            { name: "MTR Palleturi Pulla Biryani", price: "559", desc: "Special Chicken" },
            { name: "MTR Gongura Chicken Biryani", price: "459", desc: "Special Chicken" },
            { name: "Vulavacharu Chicken Biryani", price: "459", desc: "Special Chicken" },
            { name: "Chicken Rambo Biryani", price: "449", desc: "Special Chicken" },
            { name: "Chicken Tikka Biryani", price: "449", desc: "Special Chicken" },
            { name: "Chicken Milav Biryani", price: "449", desc: "Special Chicken" },
            { name: "Chicken Shahjahani Biryani", price: "459", desc: "Special Chicken" },
            { name: "Chicken Mughlai Biryani", price: "459", desc: "Special Chicken" },
            { name: "Chicken Joint Biryani", price: "459", desc: "Special Chicken" },
            { name: "Chicken Kabab Biryani", price: "459", desc: "Special Chicken" },
            { name: "Special Chicken Biryani", price: "519", desc: "Special Chicken" },
            { name: "Natukodi Fry Biryani", price: "519", desc: "Special Chicken" }
        ],
        appetizers: [
            { name: "Veg Manchuria", price: "269", desc: "Veg" },
            { name: "Crispy Corn", price: "279", desc: "Veg" },
            { name: "Chilly Baby Corn", price: "279", desc: "Veg" },
            { name: "Manchurian Baby Corn", price: "279", desc: "Veg" },
            { name: "Golden Fried Baby Corn", price: "279", desc: "Veg" },
            { name: "Chilly Mushroom", price: "319", desc: "Veg" },
            { name: "Manchurian Mushroom", price: "319", desc: "Veg" },
            { name: "Loose Mushroom", price: "319", desc: "Veg" },
            { name: "Crackling Paneer", price: "369", desc: "Veg" },
            { name: "Butter Garlic Paneer", price: "369", desc: "Veg" },
            { name: "Paneer Pepper & Salt", price: "369", desc: "Veg" },
            { name: "Chilli Paneer", price: "369", desc: "Veg" },
            { name: "Paneer Manchuria", price: "369", desc: "Veg" },
            { name: "Cheese Potato Bombs", price: "379", desc: "Veg" },
            { name: "Paneer Cheese Pockets", price: "379", desc: "Veg" },
            { name: "Mushroom Pepper & Salt", price: "389", desc: "Veg" },
            { name: "Chicken Wings", price: "319", desc: "Indo-Chinese Non-Veg" },
            { name: "Apollo Chicken", price: "319", desc: "Indo-Chinese Non-Veg" },
            { name: "Butter Garlic Chicken", price: "399", desc: "Indo-Chinese Non-Veg" },
            { name: "Loose Chicken", price: "399", desc: "Indo-Chinese Non-Veg" },
            { name: "Chilly Chicken Wings", price: "419", desc: "Indo-Chinese Non-Veg" },
            { name: "Crispy Butter Chilly Chicken", price: "419", desc: "Indo-Chinese Non-Veg" },
            { name: "Cashew Chicken", price: "419", desc: "Indo-Chinese Non-Veg" },
            { name: "Apollo Fish", price: "399", desc: "Indo-Chinese Non-Veg" },
            { name: "Butter Garlic Fish", price: "399", desc: "Indo-Chinese Non-Veg" },
            { name: "Chilly Fish", price: "419", desc: "Indo-Chinese Non-Veg" },
            { name: "Butter Garlic Prawns", price: "419", desc: "Indo-Chinese Non-Veg" },
            { name: "Kodi Chips", price: "419", desc: "Indo-Chinese Non-Veg" },
            { name: "Chicken Shangrilla", price: "479", desc: "Indo-Chinese Non-Veg" },
            { name: "Chicken 555", price: "479", desc: "Indo-Chinese Non-Veg" },
            { name: "Chilly Egg", price: "479", desc: "Indo-Chinese Non-Veg" },
            { name: "Egg Manchurian", price: "479", desc: "Indo-Chinese Non-Veg" },
            { name: "Chicken Manchurian", price: "489", desc: "Indo-Chinese Non-Veg" },
            { name: "Green Pepper Chicken", price: "489", desc: "Indo-Chinese Non-Veg" },
            { name: "Chicken Lollypops", price: "469", desc: "Indo-Chinese Non-Veg" },
            { name: "Chilly Chicken", price: "459", desc: "Indo-Chinese Non-Veg" },
            { name: "Chilly Prawns", price: "459", desc: "Indo-Chinese Non-Veg" },
            { name: "Chicken Chilly Strips", price: "419", desc: "Indo-Chinese Non-Veg" },
            { name: "Chicken 65", price: "399", desc: "Indo-Chinese Non-Veg" }
        ],
        tandoori: [
            { name: "Lal Mirchi Ka Tikka (7 pcs)", price: "449", desc: "Tandoori" },
            { name: "Tangdi Kabab (4 pcs)", price: "449", desc: "Tandoori" },
            { name: "Lasoni Murgh Kabab (7 pcs)", price: "469", desc: "Tandoori" },
            { name: "Tandoori Chicken (Full)", price: "649", desc: "Tandoori" },
            { name: "Tandoori Chicken (Half)", price: "449", desc: "Tandoori" },
            { name: "Tandoori Prawns (8 pcs)", price: "469", desc: "Tandoori" },
            { name: "Battika Ka Murgh", price: "449", desc: "Tandoori" },
            { name: "Karivepaku Fish Tikka", price: "479", desc: "Tandoori" },
            { name: "Lizaz Chicken", price: "469", desc: "Tandoori" },
            { name: "Sholey Kabab", price: "479", desc: "Tandoori" },
            { name: "Pahadi Kabab", price: "479", desc: "Tandoori" },
            { name: "Peri Peri Chicken", price: "479", desc: "Tandoori" },
            { name: "Chicken Chatpata", price: "449", desc: "Tandoori" },
            { name: "Kalmi Kabab", price: "459", desc: "Tandoori" },
            { name: "Garlic Chicken Kabab", price: "479", desc: "Tandoori" },
            { name: "Malai Chicken Tikka", price: "479", desc: "Tandoori" }
        ],
        maincourse: [
            { name: "Veg Fried Rice", price: "319", desc: "Indo-Chinese Veg" },
            { name: "Jeera Rice", price: "319", desc: "Indo-Chinese Veg" },
            { name: "Schezwan Veg Fried Rice", price: "349", desc: "Indo-Chinese Veg" },
            { name: "Spl Veg Fried Rice", price: "349", desc: "Indo-Chinese Veg" },
            { name: "Manchurian Fried Rice", price: "359", desc: "Indo-Chinese Veg" },
            { name: "Paneer Fried Rice", price: "349", desc: "Indo-Chinese Veg" },
            { name: "Mushroom Fried Rice", price: "339", desc: "Indo-Chinese Veg" },
            { name: "Avakay Veg Fried Rice", price: "339", desc: "Indo-Chinese Veg" },
            { name: "Veg Hakka Fried Rice", price: "349", desc: "Indo-Chinese Veg" },
            { name: "Cashew Fried Rice", price: "359", desc: "Indo-Chinese Veg" },
            { name: "Corn Fried Rice", price: "399", desc: "Indo-Chinese Veg" },
            { name: "Burnt Garlic Fried Rice", price: "339", desc: "Indo-Chinese Veg" },
            { name: "Egg Fried Rice", price: "329", desc: "Indo-Chinese Non-Veg" },
            { name: "Chicken Fried Rice", price: "369", desc: "Indo-Chinese Non-Veg" },
            { name: "Spl Chicken Fried Rice", price: "399", desc: "Indo-Chinese Non-Veg" },
            { name: "Butter Garlic Chicken Fried Rice", price: "399", desc: "Indo-Chinese Non-Veg" },
            { name: "Chicken Hakka Fried Rice", price: "399", desc: "Indo-Chinese Non-Veg" },
            { name: "MTR Mixed Fried Rice", price: "439", desc: "Indo-Chinese Non-Veg" },
            { name: "Prawn Fried Rice", price: "429", desc: "Indo-Chinese Non-Veg" }
        ],
        breads: [
            { name: "Pulka", price: "22", desc: "Breads" },
            { name: "Butter Pulka", price: "26", desc: "Breads" },
            { name: "Roti", price: "42", desc: "Breads" },
            { name: "Butter Roti", price: "49", desc: "Breads" },
            { name: "Plain Naan", price: "49", desc: "Breads" },
            { name: "Butter Naan", price: "59", desc: "Breads" },
            { name: "Garlic Naan", price: "69", desc: "Breads" },
            { name: "Masala Papad", price: "69", desc: "Breads" },
            { name: "Kashmiri Naan", price: "99", desc: "Breads" },
            { name: "Shahi Malai Paratha", price: "119", desc: "Breads" },
            { name: "Burani Paratha", price: "99", desc: "Breads" },
            { name: "Pudina Paratha", price: "99", desc: "Breads" },
            { name: "Laccha Paratha", price: "99", desc: "Breads" },
            { name: "Aloo Paratha", price: "99", desc: "Breads" },
            { name: "Stuffed Kulcha", price: "99", desc: "Breads" },
            { name: "Masala Kulcha", price: "99", desc: "Breads" },
            { name: "Punjabi Kulcha", price: "99", desc: "Breads" },
            { name: "Paneer Kulcha", price: "99", desc: "Breads" }
        ],
        curries: [
            { name: "Palak Dal", price: "319", desc: "Veg" },
            { name: "Dal Fry / Tadka", price: "329", desc: "Veg" },
            { name: "Mixed Veg", price: "319", desc: "Veg" },
            { name: "Veg Chettinad", price: "349", desc: "Veg" },
            { name: "Kadai Veg", price: "349", desc: "Veg" },
            { name: "Veg Keema", price: "329", desc: "Veg" },
            { name: "Palak Paneer", price: "349", desc: "Veg" },
            { name: "Green Peas Masala", price: "359", desc: "Veg" },
            { name: "Mushroom Curry", price: "359", desc: "Veg" },
            { name: "Paneer Curry", price: "369", desc: "Veg" },
            { name: "Cashew Curry", price: "269", desc: "Veg" },
            { name: "Mutter Paneer", price: "319", desc: "Veg" },
            { name: "Dum Aloo", price: "319", desc: "Veg" },
            { name: "Tomato Cashew Nut", price: "319", desc: "Veg" },
            { name: "Paneer Butter Masala", price: "329", desc: "Veg" },
            { name: "Kadai Paneer", price: "329", desc: "Veg" },
            { name: "Kadai Mushroom", price: "339", desc: "Veg" },
            { name: "Methi Chaman", price: "319", desc: "Veg" },
            { name: "Cashew Mushroom", price: "319", desc: "Veg" },
            { name: "Cashew Paneer", price: "339", desc: "Veg" },
            { name: "Paneer Tikka Masala", price: "359", desc: "Veg" },
            { name: "Butter Chicken", price: "389", desc: "Chicken" },
            { name: "Chicken Tikka Masala", price: "389", desc: "Chicken" },
            { name: "Kadai Chicken", price: "369", desc: "Chicken" },
            { name: "Chicken Chettinad", price: "369", desc: "Chicken" },
            { name: "Chicken Maharani", price: "399", desc: "Chicken" },
            { name: "Spl Chicken Curry", price: "399", desc: "Chicken" },
            { name: "Chicken Afghani", price: "449", desc: "Chicken" },
            { name: "Chicken Patiyala", price: "449", desc: "Chicken" },
            { name: "Cashew Chicken Curry", price: "469", desc: "Chicken" },
            { name: "Chicken Gongura", price: "529", desc: "Chicken" },
            { name: "Mutton Curry", price: "359", desc: "Mutton" },
            { name: "Mutton Fry", price: "419", desc: "Mutton" },
            { name: "Mutton Keema", price: "369", desc: "Mutton" },
            { name: "Mutton Keema Masala", price: "399", desc: "Mutton" },
            { name: "Mutton Gongura", price: "399", desc: "Mutton" },
            { name: "Mutton Ghee Roast", price: "429", desc: "Mutton" },
            { name: "Prawns Fry", price: "499", desc: "Seafood" },
            { name: "Prawns Curry", price: "499", desc: "Seafood" },
            { name: "Prawns Gongura", price: "519", desc: "Seafood" },
            { name: "Fish Curry", price: "549", desc: "Seafood" }
        ],
        desserts: [
            { name: "Apricot Delight", price: "149", desc: "Desserts" },
            { name: "Tres Leches", price: "169", desc: "Desserts" },
            { name: "Lotus Biscoff", price: "199", desc: "Desserts" },
            { name: "Boiled Egg", price: "25", desc: "Egg Specials" },
            { name: "Omelette", price: "99", desc: "Egg Specials" },
            { name: "Egg Burji", price: "299", desc: "Egg Specials" },
            { name: "Egg Curry", price: "269", desc: "Egg Specials" },
            { name: "Anda Palak", price: "299", desc: "Egg Specials" }
        ]
    };

    const menuDisplay = document.getElementById('menu-display');
    const menuTabs = document.querySelectorAll('.menu-tab');

    function renderMenu(category) {
        menuDisplay.innerHTML = '';
        if(!menuData[category]) return;
        
        menuData[category].forEach(item => {
            const div = document.createElement('div');
            div.className = 'menu-item fade-in-up visible';
            div.innerHTML = `
                <div class="menu-item-header">
                    <span class="menu-item-name">${item.name}</span>
                    <span class="menu-item-price">₹ ${item.price}</span>
                </div>
                ${item.desc ? `<div class="menu-item-desc">${item.desc}</div>` : ''}
            `;
            menuDisplay.appendChild(div);
        });
    }

    if (menuDisplay && menuTabs.length > 0) {
        // Initialize Menu
        renderMenu('combo');

        menuTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                menuTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                menuDisplay.style.opacity = '0';
                setTimeout(() => {
                    renderMenu(tab.getAttribute('data-target'));
                    menuDisplay.style.transition = 'opacity 0.3s ease';
                    menuDisplay.style.opacity = '1';
                }, 200);
            });
        });
    }
});
