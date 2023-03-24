export default function validate(inputs) {
  const regexUserName = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPassword =
    /^(?=[A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]{6,10}$/gm;

  let errors = {};

  if (
    !inputs.username ||
    !regexUserName.test(inputs.username) ||
    !inputs.username.length >= 35
  )
    errors.username = "Necesita ingresar un mail.";

  if (!inputs.password || !regexPassword.test(inputs.password))
    errors.password = "Dame alegria Macarena y pone el pass correcto.";

  return errors;
}
