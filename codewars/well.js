/*
https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript
*/

function well(x) {
    let count = 0;

    for (const idea of x) {
        if (idea === 'good') {
            count++;
        }
    }

    if (count === 0) {
        return 'Fail!';
    } else if (count < 3) {
        return 'Publish!';
    } else {
        return 'I smell a series!';
    }
}

console.log(well(['bad', 'bad', 'bad']), 'Fail!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');


const well2 = x => {
    const good_count = x.filter(x => x == 'good').length;
    return good_count < 1 ? 'Fail!' :
        good_count < 3 ? 'Publish!' : 'I smell a series!';
}

function well3(x) {
    switch (x.filter(i => i === 'good').length) {
        case 0:
            return 'Fail!'
        case 1:
        case 2:
            return 'Publish!'
        default:
            return 'I smell a series!'
    }
}

function well4(x) {
    let good = 0;

    for (let i = 0; i < x.length; ++i) {
        if (x[i] == 'good' && ++good > 2) {
            return 'I smell a series!';
        }
    }

    return good ? 'Publish!' : 'Fail!';
}

function well5(x) {
    const count = x.reduce((s, v) => s + (v == 'good'), 0);
    return count ? count > 2 ? 'I smell a series!' : 'Publish!' : 'Fail!';
}

const well6 = x => {
    let count = x.filter(el => el == 'good').length
    return count > 2 ? 'I smell a series!' : count > 0 ? 'Publish!' : 'Fail!';
}

function well7(x) {
    let count = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'good') {
            count++;
            if (count == 3)
                break;
        }
    }
    return ['Fail!', 'Publish!', 'Publish!', 'I smell a series!'][count]
}

const well8 = x =>
    (val => val ? val > 2 ? `I smell a series!` : `Publish!` : `Fail!`)
        (x.filter(val => val === `good`).length);

const well9 = x => x.includes('good') ? x.filter(s => s == 'good').length < 3 ? 'Publish!' : 'I smell a series!' : 'Fail!';

const well10 = x => {
    let ideas = x.filter(y => y === 'good').length
    switch (true) {
        case ideas == 0:
            return 'Fail!';

        case ideas < 3:
            return 'Publish!';

        case ideas > 2:
            return 'I smell a series!'
    }
}