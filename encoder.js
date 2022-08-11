let final = prompt("Please enter your string : ");
    let times = prompt("How many times do you want to do this action ? : ");
    let code,char,last,f;
    export function encoder(string,times) {
        if(times > 0){

            f = "";
            last = string.slice(-1);
            string = string.substring(0, string.length - 1);
            string = string.replace(/^/, last);
            for (let index = 0; index < string.length; index++) {
                if (string[index] == "z") {
                    code = string[index].codePointAt(0) - 25;
                    char = String.fromCharCode(code);
                    f += char;
                } else if (string[index] == "Z") {
                    code = string[index].codePointAt(0) - 25;
                    char = String.fromCharCode(code);
                    f += char;
                } else {
                    code = string[index].codePointAt(0) + 1;
                    char = String.fromCharCode(code);
                    f += char;
                }
            }
            final = f
            return encoder(final,times-1);

        }else {
            return final
        }
    }

    console.log(encoder(final,times));