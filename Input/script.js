var a=0;

function addRow() {
    a++;
    var row=document.createElement("div");
    row.innerHTML = `<div id="lecture">
        <input type="time" class="cm-input">
        <input type="time" class="cm-input">
        <input type="text" class="cm-input" placeholder="Teacher's Name">
        <input type="text" class="cm-input" placeholder="Subject's Name">
        <input type="text" class="cm-input" placeholder="Room Number">
        <input type="button" class="btn-login gr-bg lgn-btn btn-remove" value="Remove Lecture" onclick="removeRow(this)">
    </div>`;
    
    document.getElementById("lecture_list").appendChild(row);
    document.getElementById("lecture").setAttribute("id","lecture"+a);
}

function removeRow(input) {
   console.log(input.parentNode);
   console.log(input.parentNode.id)
   var obj=document.getElementById(input.parentNode.id);
   obj.remove();
}

function resetForm() {
    document.getElementById("myform").reset();
}

