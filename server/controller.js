module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = [`Autumn leaves don't just rot and die for no reason. They become the nourishment for new fresh leaves.`, `Those that break the rules and regulations are scum. But those who abandon their comrades are even worse than scum.`, `Those who do not understand true pain can never understand true peace.`, `Those who forgive themselves, and are able to accept their true nature, they are the strong ones.`, `When the tree leaves dance, one shall find flames. The fire's shadow will illuminate the village, and once again, tree leaves shall bud anew.`];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        res.status(200).send(randomFortune);
    },

    getAllGoals: (req, res) => {
        res.status(200).send(goals)
    },

    createGoal: (req, res) => {
        let { text } = req.body
        let newGoal = {
            id: id,
            text
        }
        goals.push(newGoal)
        res.status(200).send(goals)
    },
//This one doesn't work :(
    // deleteGoal: (req, res) => {
    //     console.log(`and here`)
    //     let index = goals.findIndex(element => element.id === +req.params.id)
    //     goals.splice(index, 1)
    //     res.status(200).send(goals)
    // },

    getThrow: (req, res) => {
        let { choice } = req.body
        const throws = [`rock`, `paper`, `scissors`]
        let randomIndex = Math.floor(Math.random() * throws.length);
        let throwResult = throws[randomIndex];
        if((choice === `rock` && throwResult === `scissors`) || (choice === `paper` && throwResult === `rock`) || (choice === `scissors` && throwResult === `paper`)){
            res.status(200).send(`Your opponent threw ${throwResult}! You have won! Be humble in victory, for everyone loses eventually...`)
        }
        else if((choice === `rock` && throwResult === `paper`) || (choice === `paper` && throwResult === `scissors`) || (choice === `scissors` && throwResult === `rock`)){
            res.status(200).send(`Your opponent threw ${throwResult}! You have been defeated. Do not be discouraged, for victory comes to those with determination!`)
        }
        else if(choice === throwResult){
            res.status(200).send(`Your opponent threw ${throwResult}! You have tied, throw again!`)
        }
    },

    getMadLib: (req, res) => {
        //Ideally, there would be a database of possible mad libs, and this function would select a random one when the form is submitted, using the user input. That proved to be way too time-consuming for this assessment (even this was probably too time-consuming). Instead, I selected one madlib and humbly submit this as a proof of concept to demonstrate that the backend COULD do that, if only there was more time. 
        let { person1, person2, noun1, noun2, noun3, noun4, verb1, noun5, noun6, noun7, verb2, noun8, noun9, adjective1, adjective2, place } = req.body
        let madLib = `${person1} and ${person2} wanted to go camping. First they needed a tent. They decided to make a tent out of ${noun1} and ${noun2}. Next, they packed other things they would need for camping, like ${noun3} and ${noun4}. They were ready to go! They started ${verb1} into the woods. They got nervous when they saw a ${noun5}. Then they realized it was just a silly ${noun6}. When they found a campsite, they unpacked the ${noun7} and then decided to go ${verb2}. Now they were tired and asked their other friends to help them make a campfire. They used ${noun8} and ${noun9} to build a campfire. It was very ${adjective1}. They sat around the campfire telling ${adjective2} stories. Finally, it was time to go to sleep. They had a great trip, and next time they'll go camping at ${place}!`
        res.status(200).send(madLib)
    }

}

let id = 0;
const goals = require(`./goals.json`)