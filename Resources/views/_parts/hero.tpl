<div class="main-banner header-text" id="top">
    <div class="Modern-Slider">
        <div class="item">
            <div class="img-fill">
                {% set default_bg_desktop = asset('/assets/theme/templatemo/breezed/theme/images/slide-01.jpg') %}
                {% set static_bg_desktop = image_url(customizer_get('hero.static.background'), { size: 'original', default: default_bg_desktop }) %}

                <img src="{{ default_bg_desktop }}" alt="" {{ customizer_live_control('hero.static.background', { type: 'image-source', image_size: 'original', default: default_bg_desktop }) }}>
                <div class="text-content">
                    <h3{{ customizer_live_control('hero.static.headline') }}>{{ customizer_get('hero.static.headline') }}</h3>
                    <h5{{ customizer_live_control('hero.static.title') }}>{{ customizer_get('hero.static.title') }}</h5>
                    {% if customizer_get('hero.static.btn1.label') is not empty %}
                        <a href="{{ customizer_get('hero.static.btn1.link') }}" class="main-stroked-button"{{ customizer_live_control('hero.static.btn1.label') }}>{{ customizer_get('hero.static.btn1.label') }}</a>
                    {% endif %}
                    {% if customizer_get('hero.static.btn2.label') is not empty %}
                        <a href="{{ customizer_get('hero.static.btn2.link') }}" class="main-filled-button"{{ customizer_live_control('hero.static.btn2.label') }}>{{ customizer_get('hero.static.btn2.label') }}</a>
                    {% endif %}
                </div>
            </div>
        </div>
    </div>
</div>
<div class="scroll-down scroll-to-section"><a href="#scroll-down"><i class="fas fa-arrow-down"></i></a></div>
