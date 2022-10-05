<header class="header-area header-sticky">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="main-nav">
                    {% if customizer_get('header.logo.image') %}
                        <a href="{{ path('frontend.homepage') }}" class="logo logo-image">
                            <img src="{{ image_url(customizer_get('header.logo.image')) }}" alt="" />
                        </a>
                    {% else %}
                        <a href="{{ path('frontend.homepage') }}" class="logo"{{ customizer_live_control('header.logo.text') }}>
                            {{ customizer_get('header.logo.text') }}
                        </a>
                    {% endif %}
                    {% if customizer_get('header.show_language_switcher') == 'yes' and current_website().locales|length > 1 %}
                        <div class="dropdown language-switcher">
                            <a href="#" class="text-white dropdown-toggle text-uppercase" data-toggle="dropdown" aria-expanded="false">
                                {{ current_website().locale.language }}
                            </a>
                            <ul class="dropdown-menu">
                                {% for locale in current_website().locales %}
                                    <li><a href="{{ path('homepage', { _locale: locale.code }) }}" class="dropdown-item">{{ locale.code|trans_locale }}</a></li>
                                {% endfor %}
                            </ul>
                        </div>
                    {% endif %}
                    <div class="nav">
                        {{ widgets_space('mainmenu') }}
                    </div>
                    <a class="menu-trigger">
                        <span>Menu</span>
                    </a>
                </nav>
            </div>
        </div>
    </div>
</header>
