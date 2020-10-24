const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Soon... https://www.npmjs.com/package/cli-progress

async function main() {
    console.log('\nWelcome to the Study Sesh Timer!')
    await ask('\nPress any button to continue.')

    const numCycles = process.argv[2] || 10 ;
    const unit = 60 * 1000;

    console.log('\nStudy session starting!');
    for (let i = numCycles; i > 0; i -= 1) {
		i === 1 ? console.log(`\n${i} cycle left.`) : console.log(`\n${i} cycles left.`);
        

        console.log('\nMeditate.')
        await sleep(5 * unit); // Five minutes
        console.log('\nEdit.')
        await sleep(5 * unit);
        console.log('\nRead.')
        await sleep(5 * unit);
        console.log('\nAgora.')
        await sleep(10 * unit);
        console.log('\nDraft.')
        await sleep(5 * unit);
        console.log('\nPhysiorecovery.')
        await sleep(10 * unit);
    }

    console.log('\n Congratulations! You\'ve completed ten study sessions!');
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
