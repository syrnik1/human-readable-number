module.exports = function toReadable (number) {
    let x = '';
    let razrad = 0;
    let number1 = 0;
    const str = String(number);                          // перевод числа в строку
    const arr1 = Array.from(String(str), Number);    // перевод строки в числовой массив
    for (let i = 0; i < arr1.length; i++) {          // расчет количества разрядов у числа
        razrad = razrad + 1;
    }
    number1 = razrad;
    console.log('razrad=',razrad);   
  
    if (razrad === 3 && arr1[number1-razrad] === 0 && arr1[number1-1] === 0) {
        switch(arr1[number1-razrad]) {
            case 0:
                x = x + '';
                break;
            case 1:
                x = x + 'one hundred';
                break;
            case 2:
                x = x + 'two hundred';
                break;
            case 3:
                x = x + 'three hundred';
                break;
            case 4:
                x = x + 'four hundred';
                break;
            case 5:
                x = x + 'five hundred';
                break;
            case 6:
                x = x + 'six hundred';
                break;
            case 7:
                x = x + 'seven hundred';
                break;
            case 8:
                x = x + 'eight hundred';
                break;
            case 9:
                x = x + 'nine hundred';
                break;
        }
    }   

    if (razrad === 3 && arr1[number1-razrad] != 0) {
        switch(arr1[number1-razrad]) {
            case 0:
                x = x + '';
                break;
            case 1:
                x = x + 'one hundred';
                break;
            case 2:
                x = x + 'two hundred';
                break;
            case 3:
                x = x + 'three hundred';
                break;
            case 4:
                x = x + 'four hundred';
                break;
            case 5:
                x = x + 'five hundred';
                break;
            case 6:
                x = x + 'six hundred';
                break;
            case 7:
                x = x + 'seven hundred';
                break;
            case 8:
                x = x + 'eight hundred';
                break;
            case 9:
                x = x + 'nine hundred';
                break;
        }
    }
  
    if (x != ''){
        razrad = razrad - 1;
    } 
       
    if (razrad === 2 && arr1[number1-razrad] === 1) {
        switch(10 *arr1[number1-razrad] + arr1[number1-1]) {   //созд. двузначного числа из 2-х последних эл массива
            case 10:
                x = x + 'ten';
                break;
            case 11:
                x = x + 'eleven';
                break;
            case 12:
                x = x + 'twelve';
                break;
            case 13:
                x = x + 'thirteen';
                break;
            case 14:
                x = x + 'fourteen';
                break;
            case 15:
                x = x +'fifteen';
                break;
            case 16:
                x = x + 'sixteen';
                break;
            case 17:
                x = x + 'seventeen';
                break;
            case 18:
                x = x + 'eighteen';
                break;
            case 19:
                x = x + 'nineteen';
                break;
        }
    } 
    

    if (razrad === 2 && arr1[number1-razrad] != 1 && arr1[number1-1] === 0) {
        switch(arr1[number1-razrad]) {
            case 0:
                x = x + '';
                break;
            case 2:
                x = x + 'twenty';
                break;
            case 3:
                x = x + 'thirty';
                break;
            case 4:
                x = x + 'forty';
                break;
            case 5:
                x = x + 'fifty';
                break;
            case 6:
                x = x + 'sixty';
                break;
            case 7:
                x = x + 'seventy';
                break;
            case 8:
                x = x + 'eighty';
                break;
            case 9:
                x = x + 'ninety';
                break;
        }
    }

    


    if (razrad === 2 && arr1[number1-razrad] != 1 && arr1[number1-1] != 0) {
        switch(arr1[number1-razrad]) {
            case 0:
                x = x + '';
                break;
            case 2:
                x = x + 'twenty ';
                break;
            case 3:
                x = x + 'thirty ';
                break;
            case 4:
                x = x + 'forty ';
                break;
            case 5:
                x = x + 'fifty ';
                break;
            case 6:
                x = x + 'sixty ';
                break;
            case 7:
                x = x + 'seventy ';
                break;
            case 8:
                x = x + 'eighty ';
                break;
            case 9:
                x = x + 'ninety ';
                break;
        }

        if (x != ''){
            razrad = razrad-1;
        } 
    
        if(razrad === 1 ) {
            switch(arr1[number1-razrad]) {
                case 0:
                    x = x + 'zero';
                    break;
                case 1:
                    x = x + 'one';
                    break;
                case 2:
                    x = x + 'two';
                    break;
                case 3:
                    x = x + 'three';
                    break;
                case 4:
                    x = x + 'four';
                    break;
                case 5:
                    x = x + 'five';
                    break;
                case 6:
                    x = x + 'six';
                    break;
                case 7:
                    x = x + 'seven';
                    break;
                case 8:
                    x = x + 'eight';
                    break;
                case 9:
                    x = x + 'nine';
                    break;
            }
        } if (x != ''){
            razrad = razrad-1;
        } 
    } 

    if(razrad === 1 ) {
            switch(arr1[number1-razrad]) {
                case 0:
                    x = x + 'zero';
                    break;
                case 1:
                    x = x + 'one';
                    break;
                case 2:
                    x = x + 'two';
                    break;
                case 3:
                    x = x + 'three';
                    break;
                case 4:
                    x = x + 'four';
                    break;
                case 5:
                    x = x + 'five';
                    break;
                case 6:
                    x = x + 'six';
                    break;
                case 7:
                    x = x + 'seven';
                    break;
                case 8:
                    x = x + 'eight';
                    break;
                case 9:
                    x = x + 'nine';
                    break;
            }
    } 

return x;
} 












