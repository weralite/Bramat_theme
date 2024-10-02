import { useBlockProps, MediaUpload, MediaPlaceholder, BlockControls, InspectorControls } from '@wordpress/block-editor';
import { Button, ToolbarGroup, ToolbarButton, PanelBody, PanelRow } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { url, id, alt } = attributes;

    const removeImage = () => {
        setAttributes({
            url: '',
            id: '',
            alt: '',
        });
    };

    return (
        <div {...blockProps}>
            <BlockControls>
                <ToolbarGroup>
                    <MediaUpload
                        onSelect={(media) => setAttributes({
                            url: media.url,
                            id: media.id,
                            alt: media.alt || 'Our beautiful image',
                        })}
                        allowedTypes={['image']}
                        value={id}
                        render={({ open }) => (
                            <ToolbarButton
                                icon="edit"
                                label="Edit Image"
                                onClick={open}
                            />
                        )}
                    />
                    <ToolbarButton
                        icon="trash"
                        label="Remove Image"
                        onClick={removeImage}
                    />
                </ToolbarGroup>
            </BlockControls>
            <InspectorControls>
                <PanelBody title="Image Settings" initialOpen={true}>
                    <PanelRow>
                        <MediaUpload
                            onSelect={(media) => setAttributes({
                                url: media.url,
                                id: media.id,
                                alt: media.alt || 'Our beautiful image',
                            })}
                            allowedTypes={['image']}
                            value={id}
                            render={({ open }) => (
                                <Button
                                    isPrimary
                                    onClick={open}
                                >
                                    {url ? 'Replace Image' : 'Upload Image'}
                                </Button>
                            )}
                        />
                    </PanelRow>
                    {url && (
                        <PanelRow>
                            <Button
                                isDestructive
                                onClick={removeImage}
                            >
                                Remove Image
                            </Button>
                        </PanelRow>
                    )}
                </PanelBody>
            </InspectorControls>
            {url ? (
                <img src={url} alt={alt} />
            ) : (
                <MediaPlaceholder
                    onSelect={(media) => setAttributes({
                        url: media.url,
                        id: media.id,
                        alt: media.alt || 'Our beautiful image',
                    })}
                    allowedTypes={['image']}
                    labels={{ title: 'Select Image' }}
                />
            )}
        </div>
    );
}