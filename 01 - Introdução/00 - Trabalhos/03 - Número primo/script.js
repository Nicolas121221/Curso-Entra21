let primeNumber = [2, 3, 4, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
    101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
    211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293,
    307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397,
    401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499,
    503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599,
    601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691,
    701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797,
    809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887,
    907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]

button.addEventListener("click", function () {
    const numInput = document.getElementById("primo")
    let num = parseFloat(numInput.value);
    let isPrime = true;

    if (!Number.isInteger(num)) {
        alert('Números com casas decimais não são primos');
        isPrime = false;
    }
    else if (parseInt(num) < 2) {
        alert(`Dependendo da interpretação o número ${num} pode ser considerado primo`);
        isPrime = false;
    }
    else {
        num = parseInt(num);
        let limite = Math.sqrt(num);
        for (i = 0; i < primeNumber.length && primeNumber[i] <= limite; i++) {
            if (num % primeNumber[i] === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        alert(`${num} é um número primo`);
    }
    else {
        alert(`${num} não é um número primo`);
    }

    if (Math.sqrt(num) > primeNumber[primeNumber.length - 1]) {
        alert('*O cálculo tende a ser impreciso conforme o número for maior que 994009 !!!');
    }
})