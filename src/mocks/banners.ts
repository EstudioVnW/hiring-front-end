import BannerImageTwo from '../assets/banner-2.png';
import BannerImageThree from '../assets/banner-3.png';
import BannerImage from '../assets/banner.png';

interface BannersContent {
    image: string;
    alt: string;
}

const Banners: BannersContent[] = [
    { image: `${BannerImage}`, alt: 'banner' },
    { image: `${BannerImageTwo}`, alt: 'banner' },
    { image: `${BannerImageThree}`, alt: 'banner' },
];

export default Banners;
