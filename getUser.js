const URL = 'https://randomuser.me/api/';

const getUser = async () => {
  const response = await (await fetch(URL)).json();
  // destructure
  const data = response.results[0];
  const { phone, email } = data;
  const { first: firstName, last: lastName } = data.name;
  const { large: picture } = data.picture;
  const { age } = data.dob;
  const { number: streetNumber, name: streetName } = data.location.street;
  const { password } = data.login;
  return {
    phone,
    email,
    name: `${firstName} ${lastName}`,
    picture,
    age,
    street: `${streetNumber} ${streetName}`,
    password,
  };
};

export default getUser;
