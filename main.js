let a = prompt('Please enter a: '),
    b = prompt('Please enter b: '),
    c = prompt('Please enter c: '),
    arr = kvur(a, b, c),
    d = arr[0];
console.log("Discriminant: " + d);
console.log(
    d < 0 ?
    "No roots" :
    d === 0 ?
    "One roots:" + arr[1] :
    'Two roots:' + arr[1] + ' ' + 'and' + ' ' + arr[2]
);

/**
 * Вычисление корней квадратного уравнения.
 * Если корни есть, возвращает массив из дискриминанта и двух чисел-корней.
 * Если корней нет - возвращает массив из одного элемента - отрицательного дискриминанта
 */
function kvur(a, b, c) {
    let discr = (a, b, c) => b * b - 4 * a * c;
    // Если значение дискриминанта квадратного уравнения < 0, то  корней на множестве действительных чисел нет. 
    let d = discr(a, b, c);
    if (d < 0) return [d];

    let x1 = (-b + Math.sqrt(d)) / (2 * a),
        x2 = (-b - Math.sqrt(d)) / (2 * a);

    return [d, x1, x2];
}