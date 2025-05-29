async function getFilmes(viewerAge) {
    const ageMap = {
        1: { filme: "Toy Story" },
        2: { filme: "Procurando Nemo" },
        3: { filme: "O Rei Leão" },
        4: { filme: "Frozen: Uma Aventura Congelante" },
        5: { filme: "Os Incríveis" },
        6: { filme: "Zootopia: Essa Cidade é o Bicho" },
        7: { filme: "Divertida Mente" },
        8: { filme: "Viva: A Vida é uma Festa" },
        9: { filme: "Moana: Um Mar de Aventuras" },
        10: { filme: "Ratatouille" },
        11: { filme: "Operação Big Hero" },
        12: { filme: "Detona Ralph" },
        13: { filme: "Procurando Dory" },
        14: { filme: "O Bom Dinossauro" },
        15: { filme: "Carros 3" },
        16: { filme: "Toy Story 4" },
        17: { filme: "Dois Irmãos: Uma Jornada Fantástica" },
        18: { filme: "Soul" },
        19: { filme: "Luca" },
        20: { filme: "Raya e o Último Dragão" },
        21: { filme: "De Pernas pro Ar" },
        22: { filme: "Bruna Surfistinha" },
        23: { filme: "O Clube das Mulheres de Negócios" },
        24: { filme: "A Dama da Lotação" },
        25: { filme: "Amor Estranho Amor" },
        26: { filme: "O Império do Desejo" },
        27: { filme: "O Jardim dos Prazeres" },
        28: { filme: "O Sexo das Bonecas" },
        29: { filme: "O Prazer a Qualquer Preço" },
        30: { filme: "O Olho Mágico do Amor" },
        31: { filme: "O Convite ao Prazer" },
        32: { filme: "O Gosto do Pecado" },
        33: { filme: "O Sexo Nosso de Cada Dia" },
        34: { filme: "O Prazer Solitário" },
        35: { filme: "O Corpo Ardente" },
        36: { filme: "O Pecado Mora ao Lado" },
        37: { filme: "O Desejo Proibido" },
        38: { filme: "O Segredo das Sensuais" },
        39: { filme: "O Prazer da Carne" },
        40: { filme: "O Pecado de Todos Nós" },
        41: { filme: "O Prazer de uma Mulher" },
        42: { filme: "O Corpo e o Prazer" },
        43: { filme: "O Desejo de Amar" },
        44: { filme: "O Prazer dos Outros" },
        45: { filme: "O Pecado de Viver" },
        46: { filme: "O Corpo em Delírio" },
        47: { filme: "O Prazer Proibido" },
        48: { filme: "O Desejo Selvagem" },
        49: { filme: "O Corpo em Chamas" },
        50: { filme: "O Pecado e o Prazer" },
        51: { filme: "O Prazer da Tentação" },
        52: { filme: "O Corpo em Festa" },
        53: { filme: "O Desejo Ardente" },
        54: { filme: "O Prazer da Sedução" },
        55: { filme: "O Pecado do Amor" },
        56: { filme: "O Corpo em Êxtase" },
        57: { filme: "O Prazer do Pecado" },
        58: { filme: "O Desejo e o Corpo" },
        59: { filme: "O Prazer do Amor" },
        60: { filme: "O Pecado da Carne" },
        61: { filme: "O Corpo do Desejo" },
        62: { filme: "O Prazer de Pecar" },
        63: { filme: "O Desejo Proibido" },
        64: { filme: "O Corpo do Pecado" },
        '65+': { filme: "Up altas aventuras, tu é idoso cara" }
    }

    if (!(viewerAge < 65)) {
        return ageMap['65+'];

    };

    return ageMap[viewerAge];
};

async function api_getByAge(req, res) {
    const {age} = req.query;

    const callGetFilmes = await getFilmes(age);
    res.status(200).json(callGetFilmes);
};

export {api_getByAge}