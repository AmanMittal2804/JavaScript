function one(){
    const username = "hitesh"
    function two(){
        const website = "yourube"
        console.log(username)
    }
    // console.log(website); website is being defined in child and used by parent
    two();
}
one();

//Ice cream example between a child and parent 