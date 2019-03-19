
const printToDom = (divId, textToPrint) => {
    const selectedDiv=document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const toCelsius = () => {
}

const toFahrenheit = () => {
  
}

const tempInput = (document.getElementById('tempInput'));

const buttonEvents = () => {
        document.getElementById('convertBtn').addEventListener('click',determineConverter);
        document.getElementById('clearBtn').addEventListener('click',determineConverter);
     };

const determineConverter = (e) => {
    const buttonId = e.target.id;
      if (buttonId === 'convertBtn'){
    printToDom('tempOutput',(tempInput.value-32/1.8));
  };
  if (buttonId === 'clearBtn'){
    printToDom('tempOutput',' ');
   const tempInput = () => {
    printToDom('tempInput',' ')};
    printToDom('tempOutput',' ')};
 };
  const init = () => {
      buttonEvents();
  }

  init();