const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
  const getTemperature = getMarsTemperature();
  console.log(`Mars Temperature is: ${getTemperature} degree Celsius`);
}


setTimeout(sendMarsTemperature, messageDelay()); // imprime "Mars temperature is: 20 degree Celsius", por exemplo