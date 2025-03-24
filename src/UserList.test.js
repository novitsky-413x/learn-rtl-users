import { render, screen } from '@testing-library/react';
import UserList from './UserList';

test('render one row per user', () => {
    // Render the component
    const users = [
        { name: 'John Doe', email: 'johndoe@example.com' },
        { name: 'Sam Smith', email: 'samsmith@example.com' },
    ];
    render(<UserList users={users} />);

    // Find all the rows in the table
    // // helps to pick the right selector, see link in jest console
    // // screen.logTestingPlaygroundURL();
    const rows = screen.getAllByRole('row');

    // Assertion: correct number of rows in the table
    expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {});
