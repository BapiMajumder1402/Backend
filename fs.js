const fs = require('fs');


// Copy file
// Rename file
// Unlink file

// Write file
fs.writeFile("text.txt", "Hi bapi" , function(error){
    if(error)console.log(error);
    else console.log('done');
})

// Append file
fs.appendFile("text.txt", ",How r u?" , function(error){
    if(error)console.log(error);
    else console.log('done');
})

// Rename file
fs.rename("text.txt", "newText.txt" , function(error){
    if(error)console.log(error);
    else console.log('done');
})

// Copy file
fs.copyFile("text.txt", "./copy.txt" , function(error){
    if(error)console.log(error);
    else console.log('done');
})

// Unlink file
fs.unlink("text.txt" , function(error){
    if(error)console.log(error);
    else console.log('done');
})