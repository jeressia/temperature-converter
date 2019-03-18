
const temp = [
    {
    temperature:"1000deg"
    },
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv=document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const buttonEvents = () => {
    document.getElementById('convertBtn').addEventListener('click',determineConverter);
    document.getElementById('clearBtn').addEventListener('click',determineConverter);
 };

 const tempInput = () => {
    document.getElementById("tempInput").value;
 }

 const showTemp= () => {
    if (celsiusRadio.checked === true) {
    let domString='';
        domString +=    `<h1>tempInput(); degrees Celsius</h1>`;
    printToDom('tempOutput',domString);
    }
    if (fahrenheitRadio.checked === true) {
    let domString='';
    domString +=    `<h1>${temp.temperature} degrees Fahrenheit</h1>`;
printToDom('tempOutput',domString);
    };
}

    showTemp();

const determineConverter = (e) => {
    const buttonId = e.target.id;
      if (buttonId === 'convertBtn' ){
        console.log('You clicked convert');
  };
 }
  const init = () => {
      determineConverter();
  }

  init();