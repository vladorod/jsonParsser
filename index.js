const  QUESTION = "question",
       ANSWERS  = "answers",
       ANSWER   = "answer",
       NEXT     = "next",
       NOTE     = "note",
       RESULT   = "result",
       SHOWDISC = "showDefaultDisclaimer"

let NodeWorkSpaseCounter = 0;

class Node { 
    constructor({id, name = "none", showDisc , result , note, answer, answers = [] }) {
        // main obj
        this.wrokSpase = [{}];

        if (id = 0 && showDisc == undefined) { 
            showDisc = false
        }
        // constructor obj 
        let obj = { 
            "id": id+1,
            "showDefaultDisclaimer": showDisc,
            "note": note,
            "answer": answer,
            "answers": answers  
        }
        // verification "undifind"
        verific(obj)
    }
    get() { 
       return this.wrokSpase
    }
    addNode() { 
        if (this.search("answers").result == false) { 
            this.addInWorkSpace(ANSWERS,[])
        } 
        this.wrokSpase[0][ANSWERS].push()
    }
    addInWorkSpace(obj = this.wrokSpase,key,value) { 
        obj[0][key] = value
    }

    search(key) { 
        for(let e in this.wrokSpase[0]) { 
            if(e == key) { 
                return  { key: e, result: true, value: this.wrokSpase[0][e]} 
                }   
            }
        return { key: key, result: false, value: "none"} 
    }  
    verific(obj) { 
        let newojb = {}
        for(let el in obj) { 
            if (obj[el] != undefined) { 
                if (obj[el] = Array && obj[el].length != 0) {
                   this.addInWorkSpace(newojb,el,obj[el])
                }
            }
           }
        return newojb
    }
    }
  



let tab = new Node({id: NodeWorkSpaseCounter, result: "ha"});

tab.addNode()

console.log(tab.get())

