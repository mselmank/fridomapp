import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { userService } from '../../services/user.service';

export { Layout };

function Layout({ children }) {
    const router = useRouter();

    useEffect(() => {
        // redirect to home if already logged in (Para mantener el estado en el caso de que ya este loggeado anteriormente el usuario)
        if (userService.userValue) {
            router.push('/');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="col-md-6 offset-md-3 mt-5">
            {children}
        </div>
    );
}