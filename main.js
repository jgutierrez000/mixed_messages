function random(num){
    return Math.floor(Math.random() * num);
}


const word_holder = {
    sign: ['aries', 'gemini', 'leo', 'aquarius', 'sagittarius', 'libra', 'taurus', 'cancer', 'pisces', 'virgo', 'cappricorn', 'scorpius'],
    fortune: ['bad luck', 'good luck', 'ehh luck', 'horrible luck'],
    advice: ['stay inside', 'go get a job', 'go learn some code', 'Be nice to the next person you see']
}

const message = () =>{
    let inspo = [];

    for (let section in word_holder){
        pick = random(word_holder[section].length);

        switch(section){
            case 'sign':
                inspo.push(`Your sign right now is ${word_holder[section][pick]}`);
                break;
            case 'fortune':
                inspo.push(`You will have ${word_holder[section][pick]}`);
                break;
            case 'advice':
                inspo.push(`My advice for you is to ${word_holder[section][pick]}`);
                break;
            default:
                inspo.push("I have nothing for you");
        }

    }

    return inspo
}


const format = (lines) =>{
    for (let line in lines){
        console.log(lines[line], '\n');
    }
}


format(message());

