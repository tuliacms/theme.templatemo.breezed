<!doctype html>
<html lang="{{ page_locale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>{% block title %}{{ title() }}{% endblock %}</title>
        {{ do_action('theme.head') }}
        {% block head %}{% endblock %}
    </head>
    <body class="{{ body_class(app.request) }}">
        {% block beforebody %}{% endblock %}

        <div id="preloader">
            <div class="jumper">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

        {% include relative(_self, '_parts/header.tpl') %}
        {% include relative(_self, '_parts/hero.tpl') %}
        <div id="scroll-down"></div>

        {#<section class="section" id="projects">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="section-heading">
                            <h6>Our Projects</h6>
                            <h2>Some of our latest projects</h2>
                        </div>
                        <div class="filters">
                            <ul>
                                <li class="active" data-filter="*">All</li>
                                <li data-filter=".des">Web Design</li>
                                <li data-filter=".dev">Web Development</li>
                                <li data-filter=".gra">Graphics</li>
                                <li data-filter=".tsh">Artworks</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="filters-content">
                            <div class="row grid">
                                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all des">
                                    <div class="item">
                                        <a href="{{ asset('assets/theme/templatemo/breezed/theme/images/project-big-item-01.jpg') }}" data-lightbox="image-1" data-title="Our Projects"><img src="{{ asset('assets/theme/templatemo/breezed/theme/images/project-item-01.jpg') }}" alt=""></a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all dev">
                                    <div class="item">
                                        <a href="{{ asset('assets/theme/templatemo/breezed/theme/images/project-big-item-02.jpg') }}" data-lightbox="image-1" data-title="Our Projects"><img src="{{ asset('assets/theme/templatemo/breezed/theme/images/project-item-02.jpg') }}" alt=""></a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all gra">
                                    <div class="item">
                                        <a href="{{ asset('assets/theme/templatemo/breezed/theme/images/project-big-item-03.jpg') }}" data-lightbox="image-1" data-title="Our Projects"><img src="{{ asset('assets/theme/templatemo/breezed/theme/images/project-item-03.jpg') }}" alt=""></a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all tsh">
                                    <div class="item">
                                        <a href="{{ asset('assets/theme/templatemo/breezed/theme/images/project-big-item-04.jpg') }}" data-lightbox="image-1" data-title="Our Projects"><img src="{{ asset('assets/theme/templatemo/breezed/theme/images/project-item-04.jpg') }}" alt=""></a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all dev">
                                    <div class="item">
                                        <a href="{{ asset('assets/theme/templatemo/breezed/theme/images/project-big-item-05.jpg') }}" data-lightbox="image-1" data-title="Our Projects"><img src="{{ asset('assets/theme/templatemo/breezed/theme/images/project-item-05.jpg') }}" alt=""></a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 all des">
                                    <div class="item">
                                        <a href="{{ asset('assets/theme/templatemo/breezed/theme/images/project-big-item-06.jpg') }}" data-lightbox="image-1" data-title="Our Projects"><img src="{{ asset('assets/theme/templatemo/breezed/theme/images/project-item-06.jpg') }}" alt=""></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>#}

        {#<section class="section" id="testimonials">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-heading">
                            <h6>Digital Team</h6>
                            <h2>young and talented members</h2>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 mobile-bottom-fix-big" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                        <div class="owl-carousel owl-theme">
                            <div class="item author-item">
                                <div class="member-thumb">
                                    <img src="{{ asset('assets/theme/templatemo/breezed/theme/images/member-item-01.jpg') }}" alt="">
                                    <div class="hover-effect">
                                        <div class="hover-content">
                                            <ul>
                                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                                <li><a href="#"><i class="fab fa-rss"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <h4>.01 White Cheese</h4>
                                <span>Digital Marketer</span>
                            </div>
                            <div class="item author-item">
                                <div class="member-thumb">
                                    <img src="{{ asset('assets/theme/templatemo/breezed/theme/images/member-item-04.jpg') }}" alt="">
                                    <div class="hover-effect">
                                        <div class="hover-content">
                                            <ul>
                                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                                <li><a href="#"><i class="fab fa-rss"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <h4>.02 Snow Mary</h4>
                                <span>Site Analyst</span>
                            </div>
                            <div class="item author-item">
                                <div class="member-thumb">
                                    <img src="{{ asset('assets/theme/templatemo/breezed/theme/images/member-item-02.jpg') }}" alt="">
                                    <div class="hover-effect">
                                        <div class="hover-content">
                                            <ul>
                                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                                <li><a href="#"><i class="fab fa-rss"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <h4>.03 Johnny Egg</h4>
                                <span>Digital Influencer</span>
                            </div>
                            <div class="item author-item">
                                <div class="member-thumb">
                                    <img src="{{ asset('assets/theme/templatemo/breezed/theme/images/member-item-05.jpg') }}" alt="">
                                    <div class="hover-effect">
                                        <div class="hover-content">
                                            <ul>
                                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                                <li><a href="#"><i class="fab fa-rss"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <h4>.04 Catherine Phyu</h4>
                                <span>Co Founder</span>
                            </div>
                            <div class="item author-item">
                                <div class="member-thumb">
                                    <img src="{{ asset('assets/theme/templatemo/breezed/theme/images/member-item-03.jpg') }}" alt="">
                                    <div class="hover-effect">
                                        <div class="hover-content">
                                            <ul>
                                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                                <li><a href="#"><i class="fab fa-rss"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <h4>.05 Shao Lynn</h4>
                                <span>Chief Marketing</span>
                            </div>

                            <div class="item author-item">
                                <div class="member-thumb">
                                    <img src="{{ asset('assets/theme/templatemo/breezed/theme/images/member-item-04.jpg') }}" alt="">
                                    <div class="hover-effect">
                                        <div class="hover-content">
                                            <ul>
                                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                                <li><a href="#"><i class="fab fa-rss"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <h4>.06 Emma Honey</h4>
                                <span>Digital Influencer</span>
                            </div>

                            <div class="item author-item">
                                <div class="member-thumb">
                                    <img src="{{ asset('assets/theme/templatemo/breezed/theme/images/member-item-06.jpg') }}" alt="">
                                    <div class="hover-effect">
                                        <div class="hover-content">
                                            <ul>
                                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                                <li><a href="#"><i class="fab fa-rss"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <h4>.07 Oliva Sofie</h4>
                                <span>Website Analyst</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>#}

        {% block content %}{% endblock %}
        {% include relative(_self, '_parts/footer.tpl') %}
        {{ do_action('theme.body') }}
        {% block afterbody %}{% endblock %}
    </body>
</html>
