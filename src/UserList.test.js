import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

const users = [
    { name: 'John Doe', email: 'johndoe@example.com' },
    { name: 'Sam Smith', email: 'samsmith@example.com' },
];

test('render one row per user', () => {
    // Render the component
    // const { container } = render(<UserList users={users} />);
    render(<UserList users={users} />);

    // // helps to pick the right selector, see link in jest console
    // // screen.logTestingPlaygroundURL();

    // Find all the rows in the table
    // eslint-disable-next-line
    // const rows = container.querySelectorAll('tbody tr');
    const rows = within(screen.getByTestId('users')).getAllByRole('row');
    // example: <tbody data-testid="users">{renderedUsers}</tbody>

    // Assertion: correct number of rows in the table
    expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {
    render(<UserList users={users} />);
    for (const user of users) {
        const name = screen.getByRole('cell', { name: user.name });
        const email = screen.getByRole('cell', { name: user.email });
        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }
});
