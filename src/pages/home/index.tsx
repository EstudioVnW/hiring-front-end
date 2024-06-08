import Benefits from '../../components/benefits';
import Container from '../../components/container';
import Banner from './components/banner';
import NewArrival from './components/newArrival';
import OurProducts from './components/ourProducts';

export default function Home() {
    return (
        <Container>
            <Banner />
            <OurProducts />
            <NewArrival />
            <Benefits />
        </Container>
    );
}
