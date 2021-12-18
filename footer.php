<footer class="footer">
    <?php wp_nav_menu(
        [
            'menu' => 'secondary',
            'container_class' => 'footer__menu footer__menu--secondary',
            'menu_class' => 'menu menu--secondary',
            'depth' => 1,
        ]
    ); ?>
</footer>
<?php wp_footer(); ?>
</body>
</html>
