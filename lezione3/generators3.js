async function* fetchData(page) {
    let url = `https://reqres.in/api/users?page=${page}`;
  
    while (url) {
      const response = await fetch(url);
  
      const body = await response.json(); 
  
      // (3) the URL of the next page is in the headers, extract it
      let nextPage = page +1;
  
      url = nextPage;
  
      for(let commit of body) { // (4) yield commits one by one, until the page ends
        yield commit;
      }
    }
  }

  async function getData() {
    for await (let commit of fetchCommits(1)) {
        // process commit
        console.log(commit);
      }
  }

  