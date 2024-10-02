<?php

// Check if 'images' attribute is set, otherwise use a default image array
if (!isset($attributes['images'])) {
    $attributes['images'] = [get_theme_file_uri('/images/default-image.jpg')]; // Set default image
}

?>

<div class="mosaic-image-grid">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <?php foreach ($attributes['images'] as $url) : ?>
            <img src="<?php echo esc_url($url); ?>" alt="" class="w-full h-auto object-cover" />
        <?php endforeach; ?>
    </div>
</div>
