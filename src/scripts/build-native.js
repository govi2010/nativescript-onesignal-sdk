const {exec} = require('child_process');
const semver = require('semver');


exec('tns plugin build', (err, stdout, stderr) => {
    if (err) {
        // node couldn't execute the command
        console.log(`${err}`);
        return;
    }
});
