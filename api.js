$(function(){
    $.ajax({
        url:'https://jsonplaceholder.typicode.com/posts',
        type:'GET',
        dataType:'json',
        success: function(response, text){
            console.log(response);
            console.log(text);
        },
        error: function(status){
            console.log('status = ' + status);
        }
    })

    $.ajax({
        url:'https://jsonplaceholder.typicode.com/posts',
        type:'GET',
        dataType:'json',
        success: function(response){
            $(response).each(function(index, post){
                console.log(post)
                $('#cover-post').append($('<div class="post">').
                append($('<h1 class="post-title">').text(post.title).
                append($('<p class="post-body">').text(post.body))

               ))
            })
        }
    })

})