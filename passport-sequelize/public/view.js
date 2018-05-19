  // This function deletes a todo when the user clicks the delete button
//   function deleteTodo(event) {
//     event.stopPropagation();
//     var id = $(this).data("id");
//     $.ajax({
//       method: "DELETE",
//       url: "/api/todos/" + id
//     }).then(getTodos);
//   }