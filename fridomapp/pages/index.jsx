import { userService } from '../services/user.service';
import { Link } from '../components/Link';

function Home() {
    return (
        <div className="p-4">
            <div className="container">
                <h1>Hola {userService.userValue?.firstName}!</h1>
                <p>You&apos;re logged in </p>
                <p><Link href="/users">Manage Users</Link></p>
            </div>
        </div>
    );
}
export default Home;