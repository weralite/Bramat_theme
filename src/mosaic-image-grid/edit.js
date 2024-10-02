import { useBlockProps, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { images } = attributes;

    const onSelectImages = (newImages) => {
        setAttributes({ images: newImages.map(image => image.url) });
    };

    return (
        <div {...blockProps}>
            <MediaUploadCheck>
                <MediaUpload
                    onSelect={onSelectImages}
                    allowedTypes={['image']}
                    multiple
                    gallery
                    value={images}
                    render={({ open }) => (
                        <Button onClick={open} isPrimary>
                            Select Images
                        </Button>
                    )}
                />
            </MediaUploadCheck>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((url, index) => (
                    <img key={index} src={url} alt="" className="w-full h-auto object-cover" />
                ))}
            </div>
        </div>
    );
}