function getInputInfo(id){
    const inputInfo = document.getElementById(id).innerText;
    const inputInfoNumber = parseFloat(inputInfo);
    return inputInfoNumber
}

function getInputValue(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue)
    return inputValueNumber;
}

function showSectionById(id){
    document.getElementById('main-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden')
}