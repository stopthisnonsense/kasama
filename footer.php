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
        <div class="widget">
            <h2 class="widget__header">Github</h2>
            <a class="widget__link" href="https://github.com/stopthisnonsense?tab=repositories">For all my fresh-baked code</a>
        </div>
        <div class="widget">
            <h2 class="widget__header">Email</h2>
            <a class="widget__link" href="mailto:anthony@kasamacreative.com">anthony@kasamacreative.com</a>
        </div>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
