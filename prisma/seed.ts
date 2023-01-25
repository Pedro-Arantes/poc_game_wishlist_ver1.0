import prisma from "../src/database/db.js";

async function main(){

    await prisma.games.createMany({
        data: [
            {
                name: "Mortal Kombat",
                platform: "Console",
                genre: "Luta"
            },
            {
                name: "Elden Ring",
                platform: "Pc",
                genre: "RPG",
                grade: 10,
                status: true
            },
            {
                name: "League of Legends",
                platform: "Pc",
                genre: "Moba"
            },
            {
                name: "Hades",
                platform: "Pc",
                genre: "Roguelike"
            }
        ]
    })
}

main()
    .then(()=>{
        console.log("Registros Inseridos com Sucesso!");
    })
    .catch(e =>{
        console.error(e);
        process.exit(1);
    })
    .finally(async () =>{
        await prisma.$disconnect();
    })