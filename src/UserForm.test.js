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

test('UserForm calls onUserAdd when the form is submitted', async () => {
    // Create a mock function
    const mock = jest.fn();

    // Try to render my component
    render(<UserForm onUserAdd={mock} />);

    // Find the two inputs
    const nameInput = screen.getByRole('textbox', { name: /name/i }); // i = ignore case
    const emailInput = screen.getByRole('textbox', { name: /enter email/i });

    // Simulate typing in a name
    await user.click(nameInput);
    await user.keyboard('John Doe');

    // Simulate typing in an email
    await user.click(emailInput);
    await user.keyboard('johndoe@example.com');

    // Find the button
    const button = screen.getByRole('button');

    // Simulate clicking the button
    await user.click(button);

    // Assertion to make sure 'onUserAdd' was called with email/name
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({ name: 'John Doe', email: 'johndoe@example.com' });
});

// test('UserForm calls onUserAdd when the form is submitted', async () => {
//     // NOT THE BEST IMPLEMENTATION
//     const argList = [];
//     const callback = (...args) => {
//         argList.push(args);
//     };
//     // Try to render my component
//     render(<UserForm onUserAdd={callback} />);

//     // Find the two inputs
//     const [nameInput, emailInput] = screen.getAllByRole('textbox');

//     // Simulate typing in a name
//     await user.click(nameInput);
//     await user.keyboard('John Doe');

//     // Simulate typing in an email
//     await user.click(emailInput);
//     await user.keyboard('johndoe@example.com');

//     // Find the button
//     const button = screen.getByRole('button');

//     // Simulate clicking the button
//     await user.click(button);

//     // Assertion to make sure 'onUserAdd' was called with email/name
//     expect(argList).toHaveLength(1);
//     expect(argList).toEqual([[{ name: 'John Doe', email: 'johndoe@example.com' }]]);
//     // expect(argList[0][0]).toEqual({ name: 'John Doe', email: 'johndoe@example.com' });
// });
