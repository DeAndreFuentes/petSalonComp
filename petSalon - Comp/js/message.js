class Messages{
    constructor(
        names,
        emails,
        messages,
    ) {

        this.names=names;
        this.emails=emails;
        this.messages=messages;

    }
}





function messageBox(){
    var inputNames = document.getElementById("names").value
    var inputEmails = document.getElementById("emails").value
    var inputMessages = document.getElementById("messages").value

    var theMessage = new Messages(inputNames, inputEmails, inputMessages)

    console.log(theMessage)
}

