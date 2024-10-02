<?php

// Check if 'url' attribute is set, otherwise use a default image
if (!isset($attributes['url']) || empty($attributes['url'])) {
    $attributes['url'] = get_theme_file_uri('/images/default-image.jpg'); // Set default image
}

// Check if 'alt' attribute is set, otherwise use a default alt text
if (!isset($attributes['alt']) || empty($attributes['alt'])) {
    $attributes['alt'] = 'Our beautiful image'; // Set default alt text
}

?>

<div class="mosaic-image-grid">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img src="<?php echo esc_url($attributes['url']); ?>" alt="<?php echo esc_attr($attributes['alt']); ?>" class="w-full h-auto object-cover" />
    </div>
</div>