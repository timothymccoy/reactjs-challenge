const members = {
    fetchMembers:()=>{
        return fetch("https://api.github.com/orgs/reactjs/members")
        .then((resp)=>{
            return resp.json();
        })
        .then((responseData)=>{
            //map urls from response
            console.log(responseData);
            let uris = responseData.map(function(x) {return x.url;});

            //fetch resource at urls
            return Promise.all(uris.map(uri =>
                fetch(uri).then(resp =>{
                    return resp.json();
                })
                )).then(result => {
                    //return member object
                    return result;
                })
        })
        .catch((error)=>{
        console.log('error', error)
        })
    }
}

export default members;