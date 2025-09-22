class studentHogwarts {
    constructor() {
        let privateScore = 0;
        let name = null;

        const changeScoreBy = (points) => {
            privateScore += points 
        }

        return {
            setName(newName) {
                name = newName;
            },

            rewardStudent() {
                changeScoreBy(1);
            },

            penalizeStudent() {
                changeScoreBy(-1);
            },

            getScore() {
                return `${name}: ${privateScore}`;
            },
        };
    };
};

const harry = new studentHogwarts;
harry.setName("Harry")
for(let h = 0; h < 4; h++ )
{
    harry.rewardStudent();
}
console.log(harry.getScore());

const draco = new studentHogwarts;
draco.setName("Draco")
draco.rewardStudent();
for (let i = 0; i < 3; i++) {
    draco.penalizeStudent();
}
console.log(draco.getScore());