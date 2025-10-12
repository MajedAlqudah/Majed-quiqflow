//setTimeOut example
/**
 * Simulates fetching data from a server using a callback.
 * @param {function(Error, object): void} callback - The function to call when done.
 */

function waitThreeSeconds(callback) {
    console.log('Starting now...');

    setTimeout(() => {
        const fakeData = { name: 'Majed Alqudah', age: 23, role: 'Software Engineer' };
        const fakeError = null;

        callback(fakeError, fakeData);
    },3000);
    }

/* usage */

waitThreeSeconds((error, data) => {
    if (error) {
        console.error('Error fetching data:', error);
    } else {
        console.log('Data received:', data);
    }});


/*----------------------------------------------------------------------------*/

//Promise example
/**
 * Simulates fetching data from a server using a Promise.
 * @returns {Promise<object>} A promise that resolves with the fetched data.
 */

function waitThreeSecondsPromise() {
    console.log('Starting now promise...');

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (Math.random() < 0.5) { // Simulate a 50% chance of failure
                return reject(new Error('Failed to fetch data'));
            }else{
                const fakeData = { name: 'Majed Alqudah', age: 23, role: 'Software Engineer' };
                return resolve(fakeData);
            }
        },3000);
    });
}

/* usage */
waitThreeSecondsPromise()
    .then((data) => {
        console.log('Data received from promise:', data);
    })
    .catch((error) => {
        console.error('Error fetching data from promise:', error);
    });


/*----------------------------------------------------------------------------*/

//Async/Await example

async function processData() {
    console.log('Starting now async/await...');

    try{
        const data = await waitThreeSecondsPromise();
        console.log('Data received from async/await:', data);
    } catch (error) {
        console.error('Error fetching data from async/await:', error);
    }
};

/* usage */
processData();