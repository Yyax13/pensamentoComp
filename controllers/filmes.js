async function getFilmes(viewerAge) {
    const ageMap = {
        1: {
            filme: "Toy Story"
        },
        2: {
            filme: "Finding Nemo"
        },
        3: {
            filme: "The Lion King"
        },
        4: {
            filme: "Frozen"
        },
        5: {
            filme: "The Incredibles"
        },
        6: {
            filme: "Zootopia"
        },
        7: {
            filme: "Inside Out"
        },
        8: {
            filme: "Coco"
        },
        9: {
            filme: "Moana"
        },
        10: {
            filme: "Ratatouille"
        },
        11: {
            filme: "Big Hero 6"
        },
        12: {
            filme: "Wreck-It Ralph"
        },
        13: {
            filme: "Finding Dory"
        },
        14: {
            filme: "The Good Dinosaur"
        },
        15: {
            filme: "Cars 3"
        },
        16: {
            filme: "Toy Story 4"
        },
        17: {
            filme: "Onward"
        },
        18: {
            filme: "Soul"
        },
        19: {
            filme: "Luca"
        },
        20: {
            filme: "Raya and the Last Dragon"
        },
        21: {
            filme: "Any porn movie"
        }
    }

    if (!(viewerAge <= 21)) {
        return ageMap[21];

    };

    return ageMap[viewerAge];
};

async function api_getByAge(req, res) {
    const {age} = req.query;

    const callGetFilmes = await getFilmes(age);
    res.status(200).json(callGetFilmes);
};

export {api_getByAge}