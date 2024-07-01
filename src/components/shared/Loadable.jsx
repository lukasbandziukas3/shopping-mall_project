import { Suspense } from 'react';
import {CustomProgress} from './CustomProgress';

export const Loadable = (Component) => (props) => {
    return (
        <Suspense fallback={<CustomProgress />}>
            <Component {...props} />
        </Suspense>
    );
};

