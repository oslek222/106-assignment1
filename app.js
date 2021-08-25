
function createTodo(){
    let text = $("#txtTodo").val();//read text/val from controls
   
    let syntax = `
    <div class= 'todo-item>
        <h5>${text}</h5>
        <button class='btn btn-sm btn-danger'>Remove</button>
    </div>  `;
    
    $("#todoContainer").append(syntax);

    $("#txtTodo").val('');
    $("#txtTodo").focus();
}

function deleteTodo(){
    console.log("delete press");
    $(this).parent().remove();
}


function init(){
console.log("to do app");

//load previous data


//hook events
$("#btnSave").click(createTodo);

$("#todocontainer").on('click', ".btn-danger", deleteTodo)

$("#txtTodo").keypress(function (args) {
    if(args.key === "Enter"){
        createTodo();
    }
} );
}

window.onload = init;