import React from 'react';
import {
    Outlet,
    useLocation,
    useParams,
    useNavigation,
} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Overlay from './Overlay';
import Loader from './Loader';
import BestGearSection from './BestGearSection';

interface AppLayoutProps {
    categoryName?: string;
}

const AppLayout: React.FC<AppLayoutProps> = ({ categoryName }) => {
    const { categoryName: paramsCategoryName } = useParams();
    const location = useLocation();
    const isCategoryPage = location.pathname === `/category/${categoryName || paramsCategoryName}`;
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    return (
        <div className="flex flex-col">
            <Overlay />
            {isLoading && <Loader />}
            {isCategoryPage && <Header category={categoryName || paramsCategoryName} />}
            {!isCategoryPage && <Header />}
            <main id="main" className="relative flex-grow">
                <Outlet />
                <BestGearSection className="container" />
            </main>
            <Footer />
        </div>
    );
}

export default AppLayout;
