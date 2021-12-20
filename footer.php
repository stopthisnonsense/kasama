<footer class="footer">
    <?php wp_nav_menu(
        [
            'menu' => 'secondary',
            'container_class' => 'footer__menu footer__menu--secondary',
            'menu_class' => 'menu menu--secondary',
            'depth' => 1,
        ]
    ); ?>
    <div class="widgets widgets--footer">
        <div class="widget__content">
            <h2>Github</h2>
            <a href="https://github.com/stopthisnonsense?tab=repositories">For all my fresh-baked code</a>
            <h2>Email</h2>
            <a href="mailto:anthony@kasamacreative.com">anthony@kasamacreative.com</a>
        </div>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
