const contactCodePoints = [
  110, 101, 119, 117, 115, 115, 101, 114, 50, 48, 48, 55, 64, 103, 109, 97, 105, 108,
  46, 99, 111, 109,
];

const getEmailAddress = () => String.fromCharCode(...contactCodePoints);

export const openProtectedEmail = () => {
  window.location.assign(`mailto:${getEmailAddress()}`);
};
