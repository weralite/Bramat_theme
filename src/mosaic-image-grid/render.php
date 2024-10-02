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

// Define the mosaic pattern
$mosaicPattern = [
    ['gridColumn' => '1 / span 3', 'gridRow' => '1 / span 5'],
    ['gridColumn' => '3 / span 7', 'gridRow' => '1 / span 3'],
    ['gridColumn' => '3 / span 5', 'gridRow' => '3 / span 5'],
    ['gridColumn' => '5 / span 7', 'gridRow' => '3 / span 7'],
    ['gridColumn' => '1 / span 5', 'gridRow' => '5 / span 7'],
    // Add more patterns as needed
];

// Get layout attributes
$mosaicLayout = isset($attributes['mosaicLayout']) ? $attributes['mosaicLayout'] : 'grid';
$columns = isset($attributes['columns']) ? $attributes['columns'] : 3;
$gap = isset($attributes['gap']) ? $attributes['gap'] : 10;

?>

<div class="mosaic-image-grid" style="
    display: <?php echo $mosaicLayout === 'grid' ? 'grid' : ($mosaicLayout === 'mosaic' ? 'grid' : 'block'); ?>;
    grid-template-columns: <?php echo $mosaicLayout === 'mosaic' ? 'repeat(6, 1fr)' : 'repeat(' . esc_attr($columns) . ', 1fr)'; ?>;
    grid-auto-rows: <?php echo $mosaicLayout === 'mosaic' ? 'minmax(150px, auto)' : 'auto'; ?>;
    max-width: <?php echo $mosaicLayout === 'mosaic' ? '960px' : 'none'; ?>;
    margin: <?php echo $mosaicLayout === 'mosaic' ? '0 auto' : '0'; ?>;
    gap: <?php echo $mosaicLayout === 'mosaic' ? '10px' : esc_attr($gap) . 'px'; ?>;
">
    <?php foreach ($attributes['images'] as $index => $image) : 
        $pattern = $mosaicPattern[$index % count($mosaicPattern)];
    ?>
        <div style="
            grid-column: <?php echo $mosaicLayout === 'mosaic' ? esc_attr($pattern['gridColumn']) : 'span 1'; ?>;
            grid-row: <?php echo $mosaicLayout === 'mosaic' ? esc_attr($pattern['gridRow']) : 'span 1'; ?>;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            height: 100%;
        ">
            <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" class="w-full h-full object-fill" />
        </div>
    <?php endforeach; ?>
</div>