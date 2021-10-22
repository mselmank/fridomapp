import { Layout } from 'components/users/Layout';
import { AddEdit } from 'components/users/AddEdit';

export default Add;

function Add() {
    return (
        <Layout>
            <h1>Add User</h1>
            <AddEdit />
        </Layout>
    );
}