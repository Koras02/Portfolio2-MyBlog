import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';


export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(
        () => {
            window.scrollToTOp(100,10);
        },
        [pathname]
    );

    return null;
}