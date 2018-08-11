$(document).ready(function () {

    // Focus on input bar when page loads
    $('#burgerName').focus();

    // Event listeners
    $(document).on('click', '#create-burger', createBurger);
    $(document).on('click', '.devour', devourBurger);
    $(document).on('click', '.delete', deleteBurger);

    // Create Burger
    function createBurger(e) {

        // Prevent form from submitting
        e.preventDefault();

        //Creat new burger object
        let newBurger = {
            burger_name: $('#burgerName').val().trim(),
            devoured: false
        };
      
        //Post newBurger Object to databse
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function () {

            swal({
                title: "Yummy!",
                text: "Da Burger was Created!",
                icon: "success",
                button: "Aww yiss!"
              }).then(function(){
                // Reload page cuasing datbase to refresh
                location.reload();
              });         
        });

    }

    // Devour burger. updates db and sets devour column to true
    function devourBurger(e){

        // Prevent form from submitting
        e.preventDefault();
        
        // create param for id selected into object
        const updateBurger = {
            id: $(this).attr('data')
        };

        // call ajax call to update db then reload page
        $.ajax('/api/burgers/:id', {
            type: 'PUT',
            data: updateBurger
        }).then(function(){
            swal({
                title: "Delicous!",
                text: "Da Burger was Devoured!",
                icon: "success",
                button: "Im Still Hungry!"
              }).then(function(){
                // Reload page cuasing datbase to refresh
                location.reload();
              });  
        });
    };

    // Delete function that will remove selected item from db
    function deleteBurger(e){

        // Prevent form from submitting
        e.preventDefault();

        // create param for id selected into object
        const deleteBurger = {
            id: $(this).attr('data-target')
        };

        // Call ajax call to delete item from db then reload page
        $.ajax('/api/burgers/:id', {
            type: 'DELETE',
            data: deleteBurger
        }).then(function(){
            swal({
                title: "Deleted!",
                text: "Da Burger was Deleted!",
                icon: "success",
                button: "Im Still Hungry!"
              }).then(function(){
                // Reload page cuasing datbase to refresh
                location.reload();
              });  
        });

    }




});