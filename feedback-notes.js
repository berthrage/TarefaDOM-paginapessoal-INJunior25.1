
let submitButton = document.querySelector("#feedback-submit-button");

function CreateFeedbackNote() {
    let feedbackNotesSection = document.querySelector(".feedback-notes");
    let feedbackDiv = document.createElement("div");
    feedbackDiv.className = "note";
    let feedbackH1 = document.createElement("h1");
    let feedbackP = document.createElement("p");

    let feedbackName = document.querySelector("#feedback-name").value;
    let feedbackText = document.querySelector("#feedback-text").value;

    feedbackP.innerText = feedbackText;
    feedbackH1.innerText = feedbackName;

    feedbackDiv.append(feedbackH1);
    feedbackDiv.append(feedbackP);

    feedbackNotesSection.append(feedbackDiv);

    console.log(`Nome: ${feedbackName}`);

    //alert("Feedback enviado com sucesso!!");
}

submitButton.addEventListener("click", ()=>CreateFeedbackNote());
