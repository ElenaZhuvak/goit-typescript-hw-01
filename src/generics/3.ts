interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
};
const userProfile = {
    name: 'Petro',
    surname: 'Galych',
    email: 'petro@mail.com',
    password: 'qwerty123'
}
console.log(userProfile)

function createOrUpdateUser(initialValues: User, updates: Partial <User>) {
    return {
        ...initialValues, ...updates
    }
}

console.log(createOrUpdateUser(userProfile, {
  email: 'user@mail.com',
  password: 'password123',
}));
