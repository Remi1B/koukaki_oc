<?php

get_header();
?>

    <main id="primary" class="site-main">
        <section class="banner fade-in-section-down">
            <div class="logo floating">
                <img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
            </div>
            <video autoplay muted loop playsinline disablePictureInPicture class="video-background">
                <source src="<?php echo get_stylesheet_directory_uri() . '/assets/video/video-header.mp4' ; ?>" type="video/mp4">
            </video>
        </section>
        <section id="#story" class="story fade-in-section">
            <h2><span class="fade-in-title">L'histoire</span></h2>
            <article id="" class="story__article">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>
            <?php get_template_part( 'parts/slider' ); ?>
            <article id="place">
                <div>
                    <h3><span class="fade-in-title">Le Lieu</span></h3>
                    <p><?php echo get_theme_mod('place'); ?></p>
                    <img class="big_cloud" src="<?php echo get_theme_file_uri() . '/assets/images/big_cloud.png'; ?>" alt="big cloud">
                    <img class="little_cloud" src="<?php echo get_theme_file_uri() . '/assets/images/little_cloud.png'; ?>" alt="little cloud">
                </div>
            </article>
        </section>
        <section id="studio" class="fade-in-section">
            <h2><span class="fade-in-title">Studio Koukaki</span></h2>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
            </section>
        <!-- template part évenementiel -->
        <?php get_template_part( 'parts/oscars' ); ?>
    </main><!-- #main -->
<?php
get_footer();
