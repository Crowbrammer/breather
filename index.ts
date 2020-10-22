const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Soon... https://www.npmjs.com/package/cli-progress

async function main() {
    console.log('\nWelcome to the Breather app!')
    await ask('\nPress any button to continue.')

    const numCycles = 10;
    const inhale = 7;
    const hold = 4 * inhale;
    const exhale = 2 * inhale; 
    const unit = 1000;

    console.log('\nAutobreather starting!');
    for (let i = numCycles; i > 0; i -= 1) {
        console.log(`\n${i} cycles left.`);


        console.log('\nInhale.')
        for (let j = inhale; j > 0; j--) {
            console.log(j);
            await sleep(unit);
        }
        
        console.log('Hold.')
        for (let k = hold; k > 0; k--) {
            console.log(k);
            await sleep(unit);
        }
        
        console.log('Exhale.')
        for (let l = exhale; l > 0; l--) {
            console.log(l);
            await sleep(unit);
        }
    }

    console.log('\n Congratulations! You\'ve completed ten breathing cycles!');
    process.exit(0);
    
}

if (require.main === module) {
    main().catch(err => console.error(err));
}

function ask(question: string) {
    return new Promise((res, _) => {
        rl.question(question, function(answer) {
            res(answer);
        });
    });
}

function sleep(duration) {
    return new Promise((res, _) => {
        setTimeout(() => {
            res();
        }, duration);
    });
}