//app

app.get("/",function(request, result){
    ...databaseRequest().then(function(data){
        result.sendFile("./success.html");
    })
    
})