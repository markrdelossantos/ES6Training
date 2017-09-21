class HackerUtilites {
    getFilename() {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                console.log("Getting the nuclear codes from Pyongyang...");
                setTimeout(()=> {
                    console.log("Implementing reverse from Utilites subclass..");
                    setTimeout(()=> {
                        console.log("Computing your annual increase... ");
                        setTimeout(()=> {
                            console.log("Computing your monthly salary... ");
                            setTimeout(()=> {
                                console.log("Congratulations, you have been demoted to JG0, your annual increase is -67,439.09 pesos!!");
                                setTimeout(()=> {
                                    console.log("Assigning all TOP prontos to you...");
                                    setTimeout(()=> {
                                        console.log("Sending email to your LM...");
                                        setTimeout(()=> {
                                            console.log("That you are actively looking for opportunities...");
                                            setTimeout(()=> {
                                                console.log("Joke lang...");
                                                setTimeout(()=>{
                                                    console.log("Filename generated!");
                                                    resolve(this.reverse("h6", "3" , undefined) + this.reverse("v" , "982", "dingdong") + this.reverse(".gif", "yolo","bvc456")); 
                                                }, 5000);
                                            },5000)
                                        }, 3000);
                                    }, 2000);
                                }, 4000);
                            }, 3100);
                        }, 2000);
                    }, 5000);
                }, 2700);
            }, 3000);
        });
    }
}

class TestSuite {
    constructor() {
    }

    demo1(func_to_test) {
        const x = "x";
        const y = "y";
        const z = "z";

        const result = func_to_test(x,y,z);

        if(result === "z y x") {
            window.location.assign("http://192.168.99.100/yadidit.mp4");
        }
        else {
            console.log("I think you made a mistake there :), try again!")
        }
    }

    demo2(class_to_test) {
        const type = typeof class_to_test;
        if(type === "object") {
            console.log("You are passing an instance of the class my friend (or maybe another thing).. try removing new?");
            return;
        }
        else if(type === "function") {
            class_to_test = new Utility();
            console.log("Attempt 1");
            const attempt1 = class_to_test.reverse("a", "b", "c");
            if(attempt1 !== "c b a") {
                console.log(`Error! Input was a,b,c but result was ${attempt1}`);
                return;
            }
            console.log(`Correct! Result was ${attempt1}`);

            console.log("Attempt 2");
            const attempt2 = class_to_test.reverse(undefined, "is", "Mikee");
            if(attempt2 !== "Mikee is awesome") {
                console.log(`Error! Input was undefined,is,Mikee but result was ${attempt2}`);
                return;
            }
            console.log(`Correct! Result was ${attempt2}`);

            console.log("Attempt 3");
            const attempt3 = class_to_test.reverse(undefined, undefined, "My trainees");
            if(attempt3 !== "My trainees are awesome") {
                console.log(`Error! Input was undefined,undefined,Mikee but result was ${attempt3}`);
                return;
            }
            console.log(`Correct! Result was ${attempt3}`);

            console.log("Attempt 4");
            const attempt4 = class_to_test.reverse(undefined, undefined, undefined);
            if(attempt4 !== "you are awesome") {
                console.log(`Error! Input was undefined,undefined,undefined but result was ${attempt4}`);
                return;
            }
            console.log(`Correct! Result was ${attempt4}`);

            window.location.assign("http://192.168.99.100/udeditegenfren.gif");
        }
    }
}

window.test = new TestSuite();
window.HackerUtilites = HackerUtilites;