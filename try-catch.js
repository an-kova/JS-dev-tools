let json = '{"id":2}';

try {
    console.log('Start working...');

    let user = JSON.parse(json);
    console.log(user);

    if(!user.name){
        throw new Error('Data from the server has no such name!');
    }
    
    let test = JSON.parse(something);
    console.log(test);

    console.log('Result:...');
} catch (error) {
    console.log('** Error features:');
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    console.log(`We got an error: ${error.name}`);
} finally {
    console.log('And I will be always running!');
}

console.log('...and I\'ll keep working anyways');