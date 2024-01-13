--
CREATE TABLE methods (
    id INT AUTO_INCREMENT PRIMARY KEY,
    method VARCHAR(25) NOT NULL
);

INSERT INTO methods(method) VALUES ("à la traine");
INSERT INTO methods(method) VALUES ("au leurre");
INSERT INTO methods(method) VALUES ("à l'appat naturel");
INSERT INTO methods(method) VALUES ("du bord");
INSERT INTO methods(method) VALUES ("à la plongee");

CREATE TABLE fish (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    weight VARCHAR(10) NOT NULL,
    picture VARCHAR(455) NOT NULL,
    year DECIMAL(10) NOT NULL,
    methods_id INT,
    FOREIGN KEY (methods_id) REFERENCES methods(id)
);

INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("loup","6kg","https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/415703677_3124972977633101_5124925685290909402_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=QjnsuE1W6aUAX_cuSBz&_nc_ht=scontent-cdg4-2.xx&oh=00_AfCy7V3P7qvhMfB9aY7aT4EcpkGH5D-ffFJl7sVrLsUE3w&oe=6594495E",2023,1);
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("seriole","15kg","https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/414436484_3122013137929085_6295048396404681873_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=VVw8be4pqpIAX93SCbN&_nc_ht=scontent-cdg4-2.xx&oh=00_AfAzmi8MIe6QmY35vy_Xo1EjGeHS57PONzQ2uBrdnJp8jQ&oe=658EC428",2023,1);
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("denti","6kg","https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/414709259_3122013201262412_3316968103233718824_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=mOqG-kSdagAAX8J-W3R&_nc_oc=AQksfhqgfppNFbXUK_X-1Rwdcg79O703LhSltx4rGK45HMm6ZveGSnQTESn7Pt-wEbC3SFtDNFdeBWAJuGa0Tqik&_nc_ht=scontent-cdg4-1.xx&oh=00_AfBtB_J6DN857-SRKainfTlxs0zpL8V5MGYpaweFoGLNpQ&oe=658F49F2",2023,1);
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("tassergale","3kg","https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/414588551_3122012974595768_2173430987586452196_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=a8FpPFOgq-YAX-mnVSS&_nc_ht=scontent-cdg4-1.xx&oh=00_AfCmq5BTviWKx9ZSyWHVcfBYKepW9XaHHMNsoJBbue5XwQ&oe=65909D37",2023,2);
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("loup","5kg","https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/414695231_3122013221262410_6975399542782842776_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=kZ0xlPKgskQAX9c7hsw&_nc_oc=AQnw3hj7dTCFF3vP9mhmUZ52dT81pfFxfBRU-6vLO_TZ7ApejxNYfb9cWn4dQxZgrJ0iS6BS6YM7CMbUnx9OrlJW&_nc_ht=scontent-cdg4-2.xx&oh=00_AfBdL0RnLRO0Ey0VX6E9_o0hLlJPE6YoAfUxCvrarKBAMw&oe=658F9D65",2022,1);
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("congre","7kg","https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/414397813_3124972944299771_7709763348977741072_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=ydgBrSAB8k8AX_RHSTx&_nc_ht=scontent-cdg4-1.xx&oh=00_AfBumzitvVhwPS7Dh09qRt5QcIXf0sM7rt8wXMiBGVKHUw&oe=65952DE7",2021,1);
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("pelamide","3kg","https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/414693422_3122013027929096_799355180476021261_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=wBcHwHLVULkAX_B4db1&_nc_ht=scontent-cdg4-3.xx&oh=00_AfA1esChNr__PhB1uofX4H-BTl-nD6fXFHc39b50-pFIHg&oe=658F488A",2021,2);
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("liche","14kg","https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/414697890_3122013281262404_3228243077960122437_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=njTIy13MlN8AX8etKAF&_nc_oc=AQlwWiHst7VHFn62lV-WkarqqyZKHUCH3eP9mVEnGkEjyvC958nD0EL8iFCf2jlygmWLjthIjzzrw1eeacK6BfAx&_nc_ht=scontent-cdg4-2.xx&oh=00_AfAWFZgVGTfoH1gpxUL6N4GMRaec3TxGnpdGP6t5eMbrFA&oe=658F983B",2022,1);
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("seriole","16kg","https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/414662519_3122013114595754_4906505214395501642_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=wZf9NMs71Y0AX9wtA6Y&_nc_ht=scontent-cdg4-1.xx&oh=00_AfCqZzOAjy_voEPm2T_N7QqezyykpAxF6J-biS7YAxdNNw&oe=658EEE14",2022,1);
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("daurade","3kg","https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/414698585_3122013181262414_1374057770038656129_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=laBz-eyoYL4AX_irYzX&_nc_ht=scontent-cdg4-2.xx&oh=00_AfCdzdFSlA9TCo2R3b5Fyd3zH38D9-2faiJVI4o9iY0RMw&oe=658EF22D",2023,3);
