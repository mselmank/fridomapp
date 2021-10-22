import { apiHandler } from 'helpers/api/api-handler';
import { usersRepo } from 'helpers/api/users-repo';
import { omit } from 'helpers/api/omit';

export default apiHandler({
    get: getUsers
});

function getUsers(req, res) {
    // return users without hashed passwords in the response
    const response = usersRepo.getAll().map(x => omit(x, 'hash'));
    return res.status(200).json(response);
}