// const miaRichiesta = fetch('http://jsonplaceholder.typicode.com/posts')
//     .then( response => response.json())
//     .then( dati => console.log(dati));

// console.log(miaRichiesta);

// export {miaRichiesta};
   

const getPosts = async () => fetch('http://jsonplaceholder.typicode.com/posts')
                .then( response => response.json());

const getPhotos = async () => fetch('http://jsonplaceholder.typicode.com/photos')
                .then( response => response.json());

const getAll = async () => {

    const [rispostaPosts, rispostaPhotos] = await 
    Promise.all([
       fetch('http://jsonplaceholder.typicode.com/posts'),
       fetch('http://jsonplaceholder.typicode.com/photos'),
    ]); 
    const posts = await rispostaPosts.json();
    const photos = await rispostaPhotos.json();
    return [posts, photos];
};

const creaPost = async () => {
   const response =  await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    return await response.json();

    // .then(async (response) => {
    //     const x = await response.json();
    //     return x;});
};

export {getPosts, getPhotos, getAll, creaPost};