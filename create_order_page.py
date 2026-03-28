import os, re

if not os.path.exists('about.html'):
    print("about.html not found!")
    exit(1)

with open('about.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Make sure no nav item is strictly active if we don't want it, or just leave it.
# The user wants "Order Now" to redirect to the new page, but it's not a top nav link, it's a call-to-action button.
# Let's clean the active class anyway from main links
html = re.sub(r'class="active"', '', html)

new_section = """
    <!-- Page Header -->
    <header class="hero" style="height: 40vh; min-height: 300px;">
        <div class="hero-bg" style="background-image: url('assets/images/bg_traditional.png'); opacity: 0.3; animation: none;"></div>
        <div class="hero-overlay" style="background: linear-gradient(rgba(0,0,0,0.7), rgba(90,15,28,0.9));"></div>
        <div class="hero-content" style="padding-top: 80px;">
            <h1 class="hero-title fade-in-up" style="font-size: 3rem;">Order Now</h1>
            <p class="hero-subtitle fade-in-up delay-1">Choose how you would like to enjoy our authentic Telugu flavours.</p>
        </div>
    </header>

    <!-- Options Section -->
    <section class="section order-options-section" style="background-color: var(--bg-light); min-height: 50vh;">
        <div class="container">
            <div class="order-grid fade-in-up delay-2" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 0px;">
                
                <a href="https://www.swiggy.com/" target="_blank" class="order-card" style="background: #fff; padding: 40px 30px; border-radius: 12px; text-align: center; text-decoration: none; color: inherit; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s ease; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                    <div class="order-icon" style="width: 80px; height: 80px; border-radius: 50%; background-color: #fc8019; color: white; display: flex; justify-content: center; align-items: center; font-size: 2.5rem; margin-bottom: 20px;">
                        <i class="fas fa-motorcycle"></i>
                    </div>
                    <h3 style="margin-bottom: 15px; font-size: 1.5rem;">Order on Swiggy</h3>
                    <p style="color: #666; margin-bottom: 25px;">Fast delivery right to your doorstep</p>
                    <span class="btn btn-primary" style="background-color: #fc8019; border-color: #fc8019; display: inline-block; width: 100%;">Order Now</span>
                </a>
                
                <a href="https://www.zomato.com/" target="_blank" class="order-card" style="background: #fff; padding: 40px 30px; border-radius: 12px; text-align: center; text-decoration: none; color: inherit; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s ease; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                    <div class="order-icon" style="width: 80px; height: 80px; border-radius: 50%; background-color: #E23744; color: white; display: flex; justify-content: center; align-items: center; font-size: 2.5rem; margin-bottom: 20px;">
                        <i class="fas fa-utensils"></i>
                    </div>
                    <h3 style="margin-bottom: 15px; font-size: 1.5rem;">Order on Zomato</h3>
                    <p style="color: #666; margin-bottom: 25px;">Live tracking & quick delivery</p>
                    <span class="btn btn-primary" style="background-color: #E23744; border-color: #E23744; display: inline-block; width: 100%;">Order Now</span>
                </a>

                <a href="contact.html" class="order-card" style="background: #fff; padding: 40px 30px; border-radius: 12px; text-align: center; text-decoration: none; color: inherit; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s ease; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                    <div class="order-icon" style="width: 80px; height: 80px; border-radius: 50%; background-color: var(--primary-color); color: white; display: flex; justify-content: center; align-items: center; font-size: 2.5rem; margin-bottom: 20px;">
                        <i class="fas fa-chair"></i>
                    </div>
                    <h3 style="margin-bottom: 15px; font-size: 1.5rem;">Reserve a Table</h3>
                    <p style="color: #666; margin-bottom: 25px;">Experience our authentic dining</p>
                    <span class="btn btn-primary" style="display: inline-block; width: 100%;">Book Now</span>
                </a>

            </div>
        </div>
    </section>
"""

# Replace everything from </nav> to <!-- Footer -->
# Note: In about.html, after </nav> it's <header class="hero ...
# Using regex to match from </nav> to <!-- Footer -->
pattern = r'</nav>.*?<!-- Footer -->'
# We need to make sure we append <!-- Footer --> back
new_html = re.sub(pattern, '</nav>\n' + new_section + '\n    <!-- Footer -->', html, flags=re.DOTALL)

with open('order.html', 'w', encoding='utf-8') as f:
    f.write(new_html)

print("order.html created successfully!")
