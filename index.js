const  QUESTION = "question",
       ANSWERS  = "answers",
       ANSWER   = "answer",
       NEXT     = "next",
       NOTE     = "note",
       RESULT   = "result",
       SHOWDISC = "showDefaultDisclaimer"

let NodeWorkSpaseCounter = 0;

class NodeWorkSpase { 
    constructor({name = "none", showDisc = false, result , note, answer, answers = [] }) {

        this.wrokSpase = [{}];

        let obj = { 
            id: NodeWorkSpaseCounter+1,
            SHOWDISC: showDisc,
            NOTE: note,
            ANSWER: answer,
            ANSWERS: answers  
        }
        for(let el in obj) { 
         if (obj[el] != undefined) { 
           this.wrokSpase[0][el] = obj[el]
         }
        }
    }
    getObject() { 
        console.log(this.wrokSpase)
    }
  
}
class Node { 
    constructor() { 
        this.main     = [];
        this.answer   = {}; 
        this.answers  = []; 
        this.question = question;
        this.result   = result;
        this.note     = note; 
    }
}

let tab = new NodeWorkSpase({result: "ha"});

tab.getObject();

