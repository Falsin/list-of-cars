let input = document.querySelector('input');
let resaults = document.getElementById('resaults');

let cars = {
    599: {
        1: 8515,
        2: 8565,
        isOur: true
    },
    536: {
        1: 8465,
        2: 8585,
        isOur: true
    },
    754: {
        1: 8480,
        2: 8580,
        isOur: true
    },
    '061': {
        1: 8327,
        2: 8769,
        isOur: true
    },
    529: {
        1: 7462,
        2: 7060,
        3: 7363,
        isOur: true
    },
    449: {
        1: 8450,
        2: 8745,
        isOur: true
    },
    411: {
        1: 5810,
        2: 5630,
        3: 5665,
        isOur: true
    },
    382: {
        1: 5862,
        2: 5729,
        3: 5473,
        isOur: true
    },
    737: {
        1: 10080,
        2: 7020,
        isOur: true
    },
    794: {
        1: 9855,
        2: 10159,
        3: 10398,
        isOur: true
    },
    467: {
        1: 7580,
        2: 4900,
        3: 6600,
        4: 4880,
        5: 6720,
        isOur: true
    },
    270: {
        1: 7280,
        2: 11960,
        3: 9145,
        4: 11860,
        isOur: true
    },
    561: {
        1: 13285,
        2: 13318,
        3: 13318,
        isOur: true
    },
    377: {
        1: 20000,
        2: 900,
        3: 900,
        isOur: true
    },
    388: {
        1: 7385,
        2: 11720,
        3: 9205,
        4: 11885,
        isOur: true
    },
    379: {
        1: 7330,
        2: 11930,
        3: 9040,
        4: 11945,
        isOur: true
    },
    634: {
        1: 7730,
        2: 4900,
        3: 6700,
        4: 4930,
        5: 6770,
        isOur: true
    },
    827: {
        1: 32000,
        isOur: true
    },
    456: {
        1: 28859,
        isOur: true
    },
    923: {
        1: 28012,
        isOur: true
    },
    964: {
        1: 4900,
        2: 6485,
        3: 5815,
        isOur: true
    },
    '024': {
        1: 5015,
        2: 5020,
        3: '4980*',
        "прицеп": "5870 + 4930 *",  
        isOur: true
    },
} 

input.addEventListener('input', updateValue);

function updateValue(e) {
    if (e.target.value.length == 3) {
        createDiv(e.target.value);
    } else {
        removeDiv();
    }
}

function createDiv(value) {
    if (value in cars) {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = value;
        resaults.append(newDiv);
        newDiv.style.paddingLeft = '2vmin';
        newDiv.style.paddingTop = '2vmin';
        newDiv.style.paddingBottom = '2vmin';

        createList(value, newDiv);
    }
}

function createList(value, parentElement) {
    let list = document.createElement('ol');
    parentElement.append(list);
    list.style.paddingLeft = '2vmin';
    let keys = Object.keys(cars[value]);
    for (const item of keys) {
        if (item == 'isOur') {
            let newStyle = (cars[value][item]) ? '#62d44d' : 'red';
            parentElement.style.background = newStyle;
            continue;
        }
        let li = document.createElement('li'); 
        list.append(li);
        li.innerHTML = item + ': ' + cars[value][item];
        li.style.listStyleType = 'none';
        li.style.marginTop = '2vmin';
    }
}

function removeDiv() {
    let div = resaults.querySelector('div');
    let list = resaults.querySelector('ol');
    if (div) {
        div.remove();
        list.remove();
    }
}
