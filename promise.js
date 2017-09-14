//--------------------------------

function execAsyn() {
    return functionA()
        .then(d => {
            return functionB(d)
                .then(e => {
                    functionC(e)
                })
        })
}

//----------------------------------

function execAsync() {
    let valueA
    return functionA() 
        .then( v => {
            valueA = v
            return functionB()
        })
        .then(vb => {
            return functionC(valueA, vb)
        })
}

//------------------------------------

function execAsync() {
    return functionA()
        .then(valueA => {
            return Promise.all([valueA, functionB(valueA)])
        })
        .then(([valueA, valueB]) => {
            return functionC(valueA, valueB)
        })
}

//---------------------------------------

async function execAsync() {
    const valueA = await functionA();
    const valueB = await functionB(valueA);

    return functionC(valueA, valueB);
}

async function executeParallelAsync() {
    const [valueA, valueB, valueC] = await Promise.all([functionA(), functionB(), functionC()]);
    console.log(valueA, valueB, valueC);    
}

//---------------------------------------





