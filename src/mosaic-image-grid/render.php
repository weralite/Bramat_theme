<?php

// Check if 'images' attribute is set and is an array, otherwise use a default image array
if (!isset($attributes['images']) || !is_array($attributes['images']) || empty($attributes['images'])) {
    $attributes['images'] = [
        [
            'url' => get_theme_file_uri('/images/default-image.jpg'), // Set default image
            'alt' => 'Our beautiful image', // Set default alt text
        ],
    ];
}

?>

<div class="mosaic-image-grid">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <?php foreach ($attributes['images'] as $image) : ?>
            <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" class="w-full h-auto object-cover" />
        <?php endforeach; ?>
    </div>
</div>