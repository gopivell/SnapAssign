
async function getGLSL(shadername) {
    const response =  await fetch(
        shadername,
        {
            method: 'GET'
        }
    );
   let fileText =  await response.text();
     return fileText;
}
