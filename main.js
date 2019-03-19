
const printToDom = (divId, textToPrint) => {
    const selectedDiv=document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

 const tempInput = (document.getElementById('tempInput'));
 

//  const showTemp= () => {
//     if (celsiusRadio.checked === true) {
//     let domString='';
//         domString +=    `<h1 class="answer">Jeressia</h1>`;
//     printToDom('tempOutput',domString);
//     }
//     if (fahrenheitRadio.checked === true) {
   
//     };
// }

    // showTemp();
    const buttonEvents = () => {
        document.getElementById('convertBtn').addEventListener('click',determineConverter);
        document.getElementById('clearBtn').addEventListener('click',determineConverter);
     };

const determineConverter = (e) => {
    const buttonId = e.target.id;
      if (buttonId === 'convertBtn' ){
    printToDom('tempOutput',tempInput.value);
  };
 };
  const init = () => {
      buttonEvents();
  }

  init();