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
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("seriole","15kg","https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/414436484_3122013137929085_6295048396404681873_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=dSjvK8HQdGAAX_QsTfL&_nc_ht=scontent-cdg4-2.xx&oh=00_AfCIJbzsRA_JEe3sRB72tLGrCsxAr-TWJ0aoim9IsDiK6w&oe=65A28AA8",2023,1);
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("denti","6kg","https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/414709259_3122013201262412_3316968103233718824_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=e-Bw4mECZ9gAX_DNJ09&_nc_oc=AQlHkXwLjrnnFmkbiWcvD80K7P5Y5VbeyBuTSr8STPQ2CM2P3meuBMvgT2azpQOVwiatncZY9wk0rF86nu1x2s4V&_nc_ht=scontent-cdg4-1.xx&oh=00_AfC6C1CfzeY35ckLN2eFYaXHWCb9u-SAVU1GLJHJ6eCE4w&oe=65A31072",2023,1);
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("tassergale","3kg","https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/414588551_3122012974595768_2173430987586452196_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=PDQ-b-wPUZIAX_gT6Vw&_nc_ht=scontent-cdg4-1.xx&oh=00_AfB4WNCHGmhAx00dLZzAJGVqpwJ3VDQzPNWB426qvpKZSA&oe=65A463B7",2023,2);
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("loup","5kg","https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/414695231_3122013221262410_6975399542782842776_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=_d5gmpiUojMAX-4oinj&_nc_oc=AQleqNH5OAAbw7oQ2aCfTHzYcsCHfuGxyxYTd8HBvWYUIQU7327UtxiB6YxXwrq72eqkd0cwNtmloa81LKwnX7qg&_nc_ht=scontent-cdg4-2.xx&oh=00_AfA5szArwGMhsU2HFf53TxjBUrfdM1NImOn62Kgk64lTWQ&oe=65A363E5",2022,1);
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("congre","7kg","https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/414397813_3124972944299771_7709763348977741072_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=PCSQjpPTrkcAX_l7y8a&_nc_ht=scontent-cdg4-1.xx&oh=00_AfCS6ogWAsAJoh8L0kU2Cmj64YSJf73yrSSaSxCM9WDebQ&oe=65A305A7",2021,1);
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("pelamide","3kg","https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/414693422_3122013027929096_799355180476021261_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=2zCxR-B0QqMAX-mKa5F&_nc_ht=scontent-cdg4-3.xx&oh=00_AfAuVfbHntOD9bI5Q-N2Hty_B83hYKJwgF6Q6JcelhLF-Q&oe=65A30F0A",2021,2);
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("liche","14kg","https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/414697890_3122013281262404_3228243077960122437_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=jsO5wZaOntkAX9DqVfC&_nc_oc=AQkWFGzGHC0IUkN6zn8grEXGTNpCH4iS0OPizaAJXRT_zOyddCNpApTZQfcO_GubfSSRfLVtEXyTH_KFZzkhwEvT&_nc_ht=scontent-cdg4-2.xx&oh=00_AfCpKM97VqfHcRNNjirOpLzrkNuIt10g0FBbCoFM7SOxYQ&oe=65A35EBB",2022,1);
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("seriole","16kg","https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/414662519_3122013114595754_4906505214395501642_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=nPcc5H85vEQAX8y1CWl&_nc_ht=scontent-cdg4-1.xx&oh=00_AfDL5AAJSP2FCmd2cQ99D-YF0fsD3Py6TXlrqBBMGGGVdw&oe=65A2B494",2022,1);
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("daurade","3kg","https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/414698585_3122013181262414_1374057770038656129_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=X-B3smwdZ9IAX9TFqAn&_nc_ht=scontent-cdg4-2.xx&oh=00_AfABN8178S3VsoZ6U325sISch3pq77CA8xNXCvOpqf2-zw&oe=65A2B8AD",2023,3);


CREATE TABLE comment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mail VARCHAR(100) NOT NULL,
    name VARCHAR(50) NOT NULL,
    comment VARCHAR(455) NOT NULL
);
