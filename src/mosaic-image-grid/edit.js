import { useBlockProps, MediaUpload, MediaPlaceholder, BlockControls, InspectorControls } from '@wordpress/block-editor';
import { Button, ToolbarGroup, ToolbarButton, PanelBody, PanelRow, SelectControl, RangeControl, TextControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { images = [], mosaicLayout, columns, gap } = attributes;

    const addImage = (media) => {
        setAttributes({
            images: [...images, {
                url: media.url,
                id: media.id,
                alt: media.alt || 'Our beautiful image',
                caption: '', // Initialize caption as an empty string
            }],
        });
    };

    const removeImage = (index) => {
        const newImages = images.filter((_, i) => i !== index);
        setAttributes({ images: newImages });
    };

    const updateImage = (index, media) => {
        const newImages = images.map((img, i) => i === index ? {
            ...img,
            url: media.url,
            id: media.id,
            alt: media.alt || 'Our beautiful image',
        } : img);
        setAttributes({ images: newImages });
    };

    const updateCaption = (index, caption) => {
        const newImages = images.map((img, i) => i === index ? {
            ...img,
            caption: caption,
        } : img);
        setAttributes({ images: newImages });
    };

    const mosaicPattern = [
        { gridColumn: '1 / span 3', gridRow: '1 / span 5' },
        { gridColumn: '3 / span 7', gridRow: '1 / span 3' },
        { gridColumn: '3 / span 5', gridRow: '3 / span 5' },
        { gridColumn: '5 / span 7', gridRow: '3 / span 7' },
        { gridColumn: '1 / span 5', gridRow: '5 / span 7' },

        // Add more patterns as needed
    ];

    return (
        <div {...blockProps}>
            <BlockControls>
                <ToolbarGroup>
                    <MediaUpload
                        onSelect={addImage}
                        allowedTypes={['image']}
                        render={({ open }) => (
                            <ToolbarButton
                                icon="plus"
                                label="Add Image"
                                onClick={open}
                            />
                        )}
                    />
                </ToolbarGroup>
            </BlockControls>
            <InspectorControls>
                <PanelBody title="Image Settings" initialOpen={true}>
                    <PanelRow>
                        <MediaUpload
                            onSelect={addImage}
                            allowedTypes={['image']}
                            render={({ open }) => (
                                <Button
                                    style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                    isPrimary
                                    onClick={open}
                                >
                                    Add Image
                                </Button>
                            )}
                        />
                    </PanelRow>

                    {images.map((image, index) => (
                        <PanelRow key={index}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <img src={image.url} alt={image.alt} style={{ width: '100%', height: 'auto', objectFit: 'cover', marginBottom: '10px' }} />
                                <MediaUpload
                                    onSelect={(media) => updateImage(index, media)}
                                    allowedTypes={['image']}
                                    value={image.id}
                                    render={({ open }) => (
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, width: '100%' }}>
                                            <Button
                                                isPrimary
                                                onClick={open}
                                                style={{ width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                            >
                                                Edit Image
                                            </Button>
                                            <Button
                                                onClick={() => removeImage(index)}
                                                style={{ width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', color: 'white' }}
                                            >
                                                Remove Image
                                            </Button>
                                        </div>
                                    )}
                                />
                                <TextControl
                                    label="Caption"
                                    value={image.caption}
                                    onChange={(value) => updateCaption(index, value)}
                                />
                            </div>
                        </PanelRow>
                    ))}
                </PanelBody>
                <PanelBody title="Mosaic Settings" initialOpen={true}>
                    <SelectControl
                        label="Layout"
                        value={mosaicLayout}
                        options={[
                            { label: 'Grid', value: 'grid' },
                            { label: 'Masonry', value: 'masonry' },
                            { label: 'Mosaic', value: 'mosaic' }, // Add mosaic option
                        ]}
                        onChange={(value) => setAttributes({ mosaicLayout: value })}
                    />
                    <RangeControl
                        label="Columns"
                        value={columns}
                        onChange={(value) => setAttributes({ columns: value })}
                        min={1}
                        max={6}
                    />
                    <RangeControl
                        label="Gap (px)"
                        value={gap}
                        onChange={(value) => setAttributes({ gap: value })}
                        min={0}
                        max={50}
                    />
                </PanelBody>
            </InspectorControls>
            <div style={{
                display: mosaicLayout === 'grid' ? 'grid' : mosaicLayout === 'mosaic' ? 'grid' : 'block',
                gridTemplateColumns: mosaicLayout === 'mosaic' ? 'repeat(6, 1fr)' : `repeat(${columns}, 1fr)`,
                gridAutoRows: mosaicLayout === 'mosaic' ? 'minmax(150px, auto)' : 'auto',
                maxWidth: mosaicLayout === 'mosaic' ? '960px' : 'none',
                margin: mosaicLayout === 'mosaic' ? '0 auto' : '0',
                gap: `${gap}px`
            }}>
                {images.map((image, index) => {
                    const pattern = mosaicPattern[index % mosaicPattern.length];
                    return (
                        <div
                            key={index}
                            style={{
                                gridColumn: mosaicLayout === 'mosaic' ? pattern.gridColumn : 'span 1',
                                gridRow: mosaicLayout === 'mosaic' ? pattern.gridRow : 'span 1',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            <img src={image.url} alt={image.alt} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                            {image.caption && <p style={{ textAlign: 'center', marginTop: '5px' }}>{image.caption}</p>}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}