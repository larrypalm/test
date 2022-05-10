import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

type LightBox = {
    url: string
};

function LightBoxComponent({ url } : LightBox) {
    return (
        <LightGallery>
            <img alt="img1" src={url} />
        </LightGallery>
    );
}

export default LightBoxComponent;