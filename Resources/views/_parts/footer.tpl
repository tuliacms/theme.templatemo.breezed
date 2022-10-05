<footer>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-xs-12">
                <div class="left-text-content">
                    <p>Copyright &copy; {{ 'now'|date('Y') }} <span{{ customizer_live_control('footer.copyrights') }}>{{ customizer_get('footer.copyrights') }}</span> - Design: <a rel="nofollow noopener" href="https://templatemo.com">TemplateMo</a></p>
                </div>
            </div>
            <div class="col-lg-6 col-xs-12">
                <div class="right-text-content">
                    <ul class="social-icons">
                        {% set facebook = customizer_get('footer.socials.facebook') %}
                        {% set twitter  = customizer_get('footer.socials.twitter') %}
                        {% set youtube  = customizer_get('footer.socials.youtube') %}
                        {% set linkedin = customizer_get('footer.socials.linkedin') %}

                        {% if facebook or twitter or youtube or linkedin %}
                            <li><p>Follow Us</p></li>
                        {% endif %}
                        {% if facebook %}
                            <li><a rel="nofollow" href="{{ facebook }}"><i class="fab fa-facebook"></i></a></li>
                        {% endif %}
                        {% if twitter %}
                            <li><a rel="nofollow" href="{{ twitter }}"><i class="fab fa-twitter"></i></a></li>
                        {% endif %}
                        {% if youtube %}
                            <li><a rel="nofollow" href="{{ youtube }}"><i class="fab fa-youtube"></i></a></li>
                        {% endif %}
                        {% if linkedin %}
                            <li><a rel="nofollow" href="{{ linkedin }}"><i class="fab fa-linkedin"></i></a></li>
                        {% endif %}
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>
