//FUNCTION TO ADD THE RESPONSIVE MENU TO ALL THE PAGES.

User_logged();

function User_logged() {
    let token = JSON.parse(window.localStorage.getItem('token'));
    if (token === null || token === {}) {
        console.log('Signedout');
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('userId');
        Add_Menu_responsif();
    } else {
        console.log('loggedin');
        Add_Menu_responsif_logged();
    }
}


function Add_Menu_responsif() {
    let menu_responsif = `
<!--Popup Login / Signup or Later -->
    <div class="Popup__background" id="Popup__background" data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1000">
<div class="Popup__background_dark" id="Popup__background_dark" data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1000"></div>
        <div id="Popup__Auth" class="text-center" data-aos="fade-down" data-aos-easing="ease-out" data-aos-duration="1400" data-aos-delay="700">
        <a href="#" onclick="Close_Popup()"><img class="close_icon" src="../../IMAGES/GENERAL/Close_black.png" alt="Close"/></a>
            <div class="row">
                <div class="col-sm-8 offset-sm-2">
                <div id="Explications_general"></div>
                    <div class="d-flex justify-content-around pt-5 pb-1 Menu_Auth">

                        <a href="#Popup__Auth" onclick="Login_content()" id="Popup__Login">Login</a>

                        <h3>|</h3>

                        <a href="#Popup__Auth" onclick="Signup_content()" id="Popup__Signup">Signup</a>

                    </div>
                    <div id="Auth__Form" class="pb-5 pt-4">
                        <h2>Login</h2>
                        <p>Welcome to your account portail</p>
                        <form method="post" id="contact" autocomplete="on">
                            <label for="Email">Email</label>
                            <input type="text" name="Email" id="Email" placeholder="Email" required>

                            <label for="Password">nom</label>
                            <input type="text" name="Password" id="Password" placeholder="Password" required>

                            <div class="mt-5">
                                <a href="#" class="button" id="submitorder" onclick="Login()">Login</a>
                            </div>
                            <div class="mt-5" id="submitorder_div">
                                <a href="#" class="button" id="submitorder" onclick="Close_Popup()">Continue without session</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


<!-- The languages are diplayed in the top -->
    <header class="d-flex d-lg-none justify-content-around hover__background" id="header__language-background">
        <div class="header__language-choice" id="header__english">English</div><div>|</div>
        <div class="header__language-choice" id="header__french">Français</div><div>|</div>
        <div class="header__language-choice" id="header__spanish">Espanol</div><div>|</div>
        <div class="header__language-choice" id="header__german">Deutsch</div>
    </header>

    <header class="d-flex justify-content-between d-lg-none wrapp__large hover__background">

        <!-- Button to drop the main menu -->
        <div class="btn-group">
            <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-bars"></i>
            </button>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="../../HTML/HOME/index.html">Home</a>
                <a class="dropdown-item" href="../../HTML/HOME/about.html">About us</a>
                <a class="dropdown-item" href="../../HTML/LADIES/Ladies.html">Ladies</a>
                <a class="dropdown-item" href="../../HTML/GENTLEMENS/Gentlemens.html">Gentlemens</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="mailto:vivien.noeldev@gmail.com">contact us</a>
            </div>
        </div>

        <!-- Button to sign-in or sign out -->
        <div class="btn-group">
            <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-bars"></i>
            </button>
            <div id="header__identification-button" class="dropdown-menu">
                <a class="dropdown-item Login_Menu" onclick="Login_Menu()" id="Login_Menu_Mobile" href="#">Login</a>
                <a class="dropdown-item Signup_Menu" onclick="Signup_Menu()" id="Signup_Menu_Mobile" href="#">Signup</a>
            </div>
        </div>

    </header>

    <!-- HEADER AND LANGUAGES FOR DESKTOP VIEW -->
    <header class="d-none justify-content-between d-lg-flex hover__background row" id="menu__top-pages" data-aos="fade" data-aos-easing="ease" data-aos-delay="200" data-aos-duration="2100">

        <!-- The menu appears in the Desktop view-->
        <div class="menu d-none col-8 d-lg-flex">
            <div class="menu"><a class="dropdown-item" href="../../HTML/HOME/index.html">Home</a></div>
            <div class="menu"><a class="dropdown-item" href="../../HTML/HOME/about.html">About us</a></div>
            <div class="menu"><a class="dropdown-item" href="../../HTML/LADIES/Ladies.html">Ladies</a></div>
            <div class="menu"><a class="dropdown-item" href="../../HTML/GENTLEMENS/Gentlemens.html">Gentlemens</a></div>
            <div class="menu"><a href="contact.html">contact us</a></div>
        </div>

        <!-- The drop down menu Language & Login appear beside in Desktop-->
        <!-- Button to drop the languages-->
        <div class="col-lg-4 text-right" data-aos="fade" data-aos-easing="ease" data-aos-delay="400" data-aos-duration="1500">
            <div class="btn-group mr-4">
                <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-right header__language-choice">
                    <div id="header__english">English</div>
                    <div id="header__french">Français</div>
                    <div id="header__spanish">Espanol</div>
                    <div id="header__german">Deutsch</div>
                </div>
            </div>

            <!-- Button to sign-in or sign out -->
            <div class="btn-group mr-4">
                <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-bars"></i>
                </button>
                <div id="header__identification-button" class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item Login_Menu" onclick="Login_Menu()" id="Login_Menu_Desktop" href="#">Login</a>
                    <a class="dropdown-item Signup_Menu" onclick="Signup_Menu()" id="Signup_Menu_Desktop" href="#">Signup</a>
                </div>
            </div>
        </div>
    </header>`

    document.getElementById('Menu_top_general_responsive').innerHTML = menu_responsif;
        
}





function Add_Menu_responsif_logged() {
    let menu_responsif = `
<!--Popup Explications -->
    <div class="Popup__background" id="Popup__background" data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1000">
        <div id="Popup__Auth" class="text-center" data-aos="fade-down" data-aos-easing="ease-out" data-aos-duration="1400" data-aos-delay="700">
        <a href="#" onclick="Close_Popup()"><img class="close_icon" src="../../IMAGES/GENERAL/Close_black.png" alt="Close"/></a>
            <div class="row">
                <div class="col-sm-8 offset-sm-2" id="Explications_general">
                    
                </div>
            </div>


        </div>
    </div>


<!-- The languages are diplayed in the top -->
    <header class="d-flex d-lg-none justify-content-around hover__background" id="header__language-background">
        <a href="#" class="header__language-choice" id="header__english">English</a><div>|</div>
        <a href="#" class="header__language-choice" id="header__french">Français</a><div>|</div>
        <a href="#" class="header__language-choice" id="header__spanish">Espanol</a><div>|</div>
        <a href="#" class="header__language-choice" id="header__german">Deutsch</a>
    </header>

    <header class="d-flex justify-content-between d-lg-none wrapp__large hover__background">

        <!-- Button to drop the main menu -->
        <div class="btn-group">
            <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-bars"></i>
            </button>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="../../HTML/HOME/index.html">Home</a>
                <a class="dropdown-item" href="../../HTML/HOME/about.html">About us</a>
                <a class="dropdown-item" href="../../HTML/LADIES/Ladies.html">Ladies</a>
                <a class="dropdown-item" href="../../HTML/GENTLEMENS/Gentlemens.html">Gentlemens</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="mailto:vivien.noeldev@gmail.com">contact us</a>
            </div>
        </div>


        <!-- Button to sign-in or sign out -->
        <div class="btn-group">

        <div class="menu_Dashboard mr-5">
            <a id="Menu_Link_My_Dashboard" href="../../HTML/DASHBOARD/Dashboard.html">My Dashboard</a>
        </div>
            <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-bars"></i>
            </button>
            <div id="header__identification-button" class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item Signout_Menu" onclick="Signout_Menu()" id="Signout_Menu_Mobile" href="#">Signout</a>
            </div>
        </div>

    </header>

    <!-- HEADER AND LANGUAGES FOR DESKTOP VIEW -->
    <header class="d-none justify-content-between d-lg-flex hover__background row" id="menu__top-pages" data-aos="fade" data-aos-easing="ease" data-aos-delay="200" data-aos-duration="2100">

        <!-- The menu appears in the Desktop view-->
        <div class="menu d-none col-7 d-lg-flex">
            <div class="menu"><a class="dropdown-item" href="../../HTML/HOME/index.html">Home</a></div>
            <div class="menu"><a class="dropdown-item" href="../../HTML/HOME/about.html">About us</a></div>
            <div class="menu"><a class="dropdown-item" href="../../HTML/LADIES/Ladies.html">Ladies</a></div>
            <div class="menu"><a class="dropdown-item" href="../../HTML/GENTLEMENS/Gentlemens.html">Gentlemens</a></div>
            <div class="menu"><a href="contact.html">contact us</a></div>
        </div>

        <!-- The drop down menu Language & Login appear beside in Desktop-->
        <!-- Button to drop the languages-->
        <div class="col-lg-5 m-auto text-right" data-aos="fade" data-aos-easing="ease" data-aos-delay="400" data-aos-duration="1500">
            <div class="menu d-none d-lg-flex">
                <div class="menu_Dashboard"><a href="../../HTML/DASHBOARD/Dashboard.html">My Dashboard</a></div>
            
            <div class="btn-group mr-4">
                <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-right header__language-choice">
                <ul>
                    <li><a href="#" id="header__english">English</a></li>
                    <li><a href="#" id="header__french">Français</a></li>
                    <li><a href="#" id="header__spanish">Espanol</a></li>
                    <li><a href="#" id="header__german">Deutsch</a></li>
                </ul>
                </div>
            </div>

            <!-- Button to sign-in or sign out -->
            <div class="btn-group mr-5">
                <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-bars"></i>
                </button>
                <div id="header__identification-button" class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item Signout_Menu" onclick="Signout_Menu()" id="Signout_Menu_Desktop" href="#">Signout</a>
                </div>
            </div>
        </div>

        </div>
    </header>`

    document.getElementById('Menu_top_general_responsive').innerHTML = menu_responsif;

}