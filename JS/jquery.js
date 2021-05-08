

alert($("#testalert").on("click", function(){
  swal({
    title: "test alert is generated",
    text: "Can you see this?",
    confirmButtonText: "Yep.",
    ConfirmButtonColor: "#DD6B55",
    icon: "success"
  });
});

$("testalert").click(function(){
  alert("Can you see this?");
})
