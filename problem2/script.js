fetch("http://jsonplaceholder.typicode.com/posts%22).then((response) => 
{
    return response.json();
}).then((json) =>
{
    let postTWMT6Words = json.filter((post) => 
    {
        return post.title.split(" ").length > 6;
    }).map((post) => 
    {
        console.log(post.title)
    });

    let wFMap = json.map((post) => 
    {
        return post.body;
    }).join(" ").split(" ")
    .reduce((map, letter) => 
    {
        if (map[letter]) 
        {
            map[letter]++;
        } 
        else 
        {
            map[letter] = 1;
        }

        return map;
    }, {});

    console.log(wFMap);
});