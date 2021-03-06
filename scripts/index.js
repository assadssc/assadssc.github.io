// The faq question and answer array items are strings. You can use html tags to format them. 
// Answer is an array. Each new element in that array should represent new paragraph.
const faq = [
    {
        question: "Who can participate?",
        answer: 
            ["Only one team representing their school/institute can participate. A team should consist with no more than 4 members. All team members must be 15-19 years old."]
    },
    {
        question: "How can I participate?",
        answer: 
            ["Interested school teams can send the duly filled application form attached in here. The teams will be selected on the first come first served basis."]
    },
    {
        question: "Can I participate without a team?",
        answer: 
            ["No, you will need to have a team with at least 3 members, in order to participate in the campaign."]
    },
    {
        question: "I do not have any previous experience/ I don’t know how to use Astrometrica/ I don’t know how to analyze image sets. Can I still participate?",
        answer: 
            ["Yes. You don’t need any knowledge about asteroids, asteroid searching or image analysis to take part in this campaign. We will guide you."]
    },
    {
        question: "What is the selection criteria for teams?",
        answer: 
            ["Teams will be selected on a first come first served basis."]
    },
    {
        question: "What can I do to prepare for the campaign?",
        answer: 
            ["Once selected, we will conduct a webinar to introduce you to the Astrometrica software and other key concepts that are required to succeed in discovering asteroids. We will also provide you with sample image sets to practice using Astrometrica."]
    },
    {
        question: "Are there any due dates to submit the reports of image sets?",
        answer: [
            "No. There are no specific due dates to submit the reports of image sets. But there are few key things to remember.",
            "<ol><li>You won't receive any image sets until you submit the report of the practice image set.</li><li>You must submit all the reports before the campaign ends.</li></ol>"
        ]
    },
    {
        question: "What is the source of the images?",
        answer: ["IASC receives and uses data from their collaborator Pan-STARRS (University of Hawaii). Images sent to the participating teams are usually taken on the previous night."]
    },
    {
        question: "What kind of asteroids will I be able to find?",
        answer: ["Since starting in October 2006 participants in IASC have discovered more than 1500 asteroids including many Main Belt Asteroids (MBAs), some Near Earth Objects (NEOs) and occasionally Trans-Neptunian Objects (TNOs) . To date 67 have been numbered and placed into the world’s official minor bodies catalog maintained by the International Astronomical Union (IAU, Paris).  Numbered asteroids can be named by their discoverers."]
    },
    {
        question: "What happens if I discover an asteroid?",
        answer: ["New object is measured and confirmed by IASC as a preliminary detection. Preliminary detections are followed by the observations made by big sky surveys such as Pan-STAARS and Catalina. If a follow-up confirms your discovery it will receive provisional status by the Minor Planet Center.  Provisional objects are measured again and again by sky surveys / amateurs until the orbit is defined.After 3-10 years of observations the asteroid is numbered and placed into the world’s official minor planets catalog by the International Astronomical Union. The discoverers will get the chance to name the numbered asteroid. "]
    },
    {
        question: "What are the hardware & software requirements?",
        answer: [
            "Participants must have access to a PC with 2 GHz CPU, 4 GB memory (RAM), running Windows Vista or Windows 7, 8, 8.1 or 10",
            "*Most of the modern PCs will have these requirements."
        ]
    },
    {
        question: "Can I use a smartphone or a Mac?",
        answer: [
            "No.",
            "The software can only be installed on a computer/ laptop with windows Vista/7/8/8.1/ or 10"
        ]
    },
    {
        question: "Is this free of charge?",
        answer: ["Yes, this is offered at no cost."]
    },
];

function verticalTimelineLabel() {
    const timeline_label = document.getElementById("timeline_label");
    timeline_label.innerHTML = timeline_label.innerText.replace(/\S/g, `<span>$&</span>`);
}

function collapseAnswer(e) {
    const parentFaqItem = e.target.parentElement.parentElement;
    const faqAnswer = parentFaqItem.getElementsByClassName("answer")[0];
    const collapseBtn = parentFaqItem.getElementsByClassName("question")[0].children[0];

    const isCollapsed = faqAnswer.getAttribute("data-isCollapsed") === "true";

    if (isCollapsed) {
        faqAnswer.classList.add("answer--visible");
        collapseBtn.innerText = "-";
        faqAnswer.setAttribute("data-isCollapsed", "false");
    } else {
        faqAnswer.classList.remove("answer--visible");
        collapseBtn.innerText = "+";
        faqAnswer.setAttribute("data-isCollapsed", "true");
    }
}

function setFAQ() {
    const faqElement = document.getElementById("faq")

    faq.forEach(faqItem => {
        const faqItem_container = document.createElement("div");
        const question_container = document.createElement("div");
        const answer_container = document.createElement("div");
        const collapse_btn = document.createElement("button");

        faqItem_container.className = "faq-item";
        question_container.className = "question";
        answer_container.className = "answer";
        collapse_btn.className = "collapse flex-center";

        collapse_btn.innerText = "+";
        question_container.appendChild(collapse_btn);

        question_container.innerHTML += `<h3>${faqItem.question}</h3>`;
        faqItem.answer.forEach(answerParagraph => {
            answer_container.innerHTML += `<p>${answerParagraph}</p>`;
        });

        answer_container.setAttribute("data-isCollapsed", "true");

        faqItem_container.appendChild(question_container);
        faqItem_container.appendChild(answer_container);

        faqElement.appendChild(faqItem_container);
    });

    const collapseButtons = document.getElementsByClassName("collapse");
    for (let i = 0; i < collapseButtons.length; i++) {
        const collapseBtn = collapseButtons[i];
        collapseBtn.addEventListener("click", collapseAnswer);
    }
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView(true);
}

function initializeContent() {
    verticalTimelineLabel();
    setFAQ();
}

window.addEventListener("load", initializeContent)