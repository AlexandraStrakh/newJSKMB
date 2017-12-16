//инстанс instance - объект/сущность на базе функции
function Calculator () {
    // firstNumber: null,
    // operation: null,
    // operationButtons: null,
    // numberButtons: null,
    resultButton = document.querySelector('button.result-Button');
    delButton = document.querySelector('button.del-button');
    
    this.init = function () {
        this.operationButtons = document.getElementsByClassName('operation-button');
        this.numberButtons = document.getElementsByClassName('number-button');
        var that = this;
        for (var i = 0; i < this.operationButtons.length; i++) {
            var operationButton = this.operationButtons[i];
            // var that = this;
            operationButton.addEventListener('click', function (event) {
                that.onOperationByClick(event);
            });
        }

        for (var i = 0; i < this.numberButtons.length; i++) {
            var numberButton = this.numberButtons[i];
            // var that = this;
            numberButton.addEventListener('click', function (event) {
                that.onNumberByClick(event);
            });
        }
        this.resultButton.addEventListener('click', function (event) {
            that.onCountButtonClick(event);
        });
        this.delButton.addEventListener('click', function (event) {
            that.onDelButtonClick(event);
        });
    };

    this.onOperationByClick = function (eventObject) {
        var clickedElement = eventObject.currentTarget;
        this.operation = clickedElement.value;
        this.firstNumber = this.getElementByID('number').value;
        this.getElementByID('number').value = '';
    };

    this.onDelButtonClick = function () {
        this.firstNumber = '';
        this.getElementByID('number').value = '0';
    };

    this.onNumberByClick = function (eventObject) {
        var clickedElement = eventObject.currentTarget;
        // var elementValue = getElementValueByID('number');//'Yo'
        // elementValue='Yo2';
        var currentValue = this.getElementByID('number').value;
        var indexOfPoint = currentValue.indexOf('.');
        if (indexOfPoint > -1 && clickedElement.value === '.') {
            return;
        }
        if (this.getElementByID('number').value === '0' && clickedElement.value != '.') {
            this.getElementByID('number').value = clickedElement.value;
        } else {
            this.getElementByID('number').value = this.getElementValueByID('number') + clickedElement.value;
        }
    };

    this.getElementByID = function (elementId) {
        var elementEl = document.getElementById(elementId);
        return elementEl;
    };

    this.getElementValueByID = function (elementId) {
        var elementEl = document.getElementById(elementId);
        return elementEl.value;//'Yo'
    };

    this.onCountButtonClick = function () {
        var secondNumber = this.getElementByID('number').value;
        this.getElementByID('number').value = this.getResult(this.firstNumber, secondNumber, this.operation);
    };

    this.getResult = function (one, two, option) {
        switch (option) {
            case 'add':
                var result = +one + +two;
                break;
            case 'diff':
                var result = +one - +two;
                break;
            case 'multi':
                var result = +one * +two;
                break;
            case 'divide':
                var result = +one / +two;
                break;
            default:
                break;
        }
        return result;
    };
};




// var firstNumber;
// var operation;
// var operationButtons=document.getElementsByClassName('operation-button');
// var numberButtons=document.getElementsByClassName('number-button');

// resultButton.addEventListener('click', onCountButtonClick);
// delButton.addEventListener('click', onDelButtonClick);

// for (var i = 0; i < operationButtons.length; i++) {
//     var operationButton = operationButtons[i];
//     operationButton.addEventListener('click', onOperationByClick);
// }

// for (var i = 0; i < numberButtons.length; i++) {
//     var numberButton = numberButtons[i];
//     numberButton.addEventListener('click', onNumberByClick);
// }

// function onOperationByClick(eventObject) {
//     var clickedElement = eventObject.currentTarget;
//     operation = clickedElement.value;
//     firstNumber = getElementByID('number').value;
//     getElementByID('number').value = '';
// }
// function onDelButtonClick() {
//     firstNumber = '';
//     getElementByID('number').value = '0';
//     // getElementByID('result').value=''
// }
// function onNumberByClick(eventObject) {
//     var clickedElement = eventObject.currentTarget;
//     // var elementValue = getElementValueByID('number');//'Yo'
//     // elementValue='Yo2';
//     var currentValue = getElementByID('number').value;
//     var indexOfPoint = currentValue.indexOf('.');
//     if (indexOfPoint > -1 && clickedElement.value === '.') {
//         return;
//     }
//     if (getElementByID('number').value === '0' && clickedElement.value != '.') {
//         getElementByID('number').value = clickedElement.value;
//     } else {
//         getElementByID('number').value = getElementValueByID('number') + clickedElement.value;
//     }

// }
// function getElementByID(elementId) {
//     var elementEl = document.getElementById(elementId);
//     return elementEl;
// }
// function getElementValueByID(elementId) {
//     var elementEl = document.getElementById(elementId);
//     return elementEl.value;//'Yo'
// }

// function onCountButtonClick() {
//     var secondNumber = getElementByID('number').value;
//     getElementByID('number').value = getResult(firstNumber, secondNumber, operation);
// }

// function getResult(one, two, option) {
//     switch (option) {
//         case 'add':
//             var result = +one + +two;
//             break;
//         case 'diff':
//             var result = +one - +two;
//             break;
//         case 'multi':
//             var result = +one * +two;
//             break;
//         case 'divide':
//             var result = +one / +two;
//             break;
//         default:
//             break;
//     }
//     return result;
// }