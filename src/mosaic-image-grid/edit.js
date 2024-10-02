import { useBlockProps, MediaUpload, MediaPlaceholder, BlockControls, InspectorControls } from '@wordpress/block-editor';
import { Button, ToolbarGroup, ToolbarButton, PanelBody, PanelRow } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { images = [] } = attributes; // Ensure images is initialized as an empty array

    const addImage = (media) => {
        setAttributes({
            images: [...images, {
                url: media.url,
                id: media.id,
                alt: media.alt || 'Our beautiful image',
            }],
        });
    };

    const removeImage = (index) => {
        const newImages = images.filter((_, i) => i !== index);
        setAttributes({ images: newImages });
    };

    const updateImage = (index, media) => {
        const newImages = images.map((img, i) => i === index ? {
            url: media.url,
            id: media.id,
            alt: media.alt || 'Our beautiful image',
        } : img);
        setAttributes({ images: newImages });
    };

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
                            <div style={{ display: 'flex', flexDirection: 'column'}}>
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
                                            style={{  width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                        >
                                            Edit Image
                                        </Button>
                                        <Button
                                          
                                            onClick={() => removeImage(index)}
                                            style={{  width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', color: 'white' }}
                                        >
                                            Remove Image
                                        </Button>
                                    </div>
                                )}
                            />
                          </div>  
                        </PanelRow>
                    ))}
                </PanelBody>
            </InspectorControls>
            {images.length > 0 ? (
                images.map((image, index) => (
                    <img key={index} src={image.url} alt={image.alt} style={{ width: '100%', height: 'auto', objectFit: 'cover', marginBottom: '10px' }} />
                ))
            ) : (
                <MediaPlaceholder
                    onSelect={addImage}
                    allowedTypes={['image']}
                    labels={{ title: 'Select Images' }}
                />
            )}
        </div>
    );
}