import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

/*
For Intellisense types support run:
npm install @types/jest --save-dev
*/

/*
Step 1 - Render the component
Step 2 - Manipulate the component or find an element in it
Step 3 - Assertion - make sure that the component is doing what we expect
*/

test('UserForm shows two inputs and a button', () => {
    // Step 1
    render(<UserForm />);

    // Step 2
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    // Step 3
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
});
