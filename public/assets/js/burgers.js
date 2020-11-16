// Make sure we wait to attach our handlers until the DOM is fully loaded.
// click event for "devour me" button
$(function () {
  $(".change-devour").on("click", function (event) {
    var id = $(this).data("id");
    console.log("id", id);
    var newdevour = $(this).data("newdevour");
    console.log("newdevour", newdevour);

    const newDevourState = {
      devoured: newdevour,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState,
    }).then(function () {
      console.log("changed devour to", newdevour);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  // click event for adding a burger
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    // Grab a burger name from the form
    const newBurger = {
      burger_name: $("#gourmetBurger").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  // Click even to throw away/delete a burger (after it has been devoured)
  $(".delete-burger").on("click", function (event) {
    const id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
