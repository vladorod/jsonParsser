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
        // main obj
        this.wrokSpase = [{}];
        // constructor obj 
        let obj = { 
            "id": NodeWorkSpaseCounter+1,
            "showDefaultDisclaimer": showDisc,
            "note": note,
            "answer": answer,
            "answers": answers  
        }
        // verification "undifind"
        for(let el in obj) { 
         if (obj[el] != undefined) { 
             if (obj[el] = Array && obj[el].length != 0) {
                this.wrokSpase[0][el] = obj[el]
             }
         }
        }
    }
    get() { 
       return this.wrokSpase
    }
    addNode() { 
    
    }
    search(key) { 

        for(let e in this.wrokSpase[0]) { 
            if(e == key) { 
                return  { key: e, result: true, value: this.wrokSpase[0][e]} 
                }   
            }
        return { key: key, result: false, value: "none"} 
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

console.log(tab.search("showDefaultDiscdlaimer"))

