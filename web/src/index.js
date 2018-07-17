$.ajax({
    url: '/products',
    success: function (data) {
        const dataProdcuto = data.products

        var idorder = dataProdcuto.sort(function(a,b){
            return a.ID > b.ID ? 1 : -1;
        })
        for(var i in idorder) {
            $('#tblProducts').append(
                "<li class='list-group-item list--products__item'>" +    
                "<p>" + data.products[i].ID + "</p>" +
                "<p>" + data.products[i].Nombre + "</p>" +
                "<p>" + data.products[i].Apellido + "</p>" +
                "<p>" + data.products[i].DNI + "</p>" +
                "</li>"
            );
        };        
    },
    error: function () {
        console.log('error');
    }

});

