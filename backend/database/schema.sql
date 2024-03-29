--
CREATE TABLE methods (
    id INT AUTO_INCREMENT PRIMARY KEY,
    style VARCHAR(25) NOT NULL
);

INSERT INTO methods(style) VALUES ('à la traine');
INSERT INTO methods(style) VALUES ('au leurre');
INSERT INTO methods(style) VALUES ("à l'appat naturel");
INSERT INTO methods(style) VALUES ('du bord');
INSERT INTO methods(style) VALUES ('à la plongee');

CREATE TABLE fish (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    weight VARCHAR(10) NOT NULL,
    picture VARCHAR(455) NOT NULL,
    year DECIMAL(10) NOT NULL,
    methods_id INT,
    FOREIGN KEY (methods_id) REFERENCES methods(id)
);
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("drone","st-raphael","https://photoseb.netlify.app/assets/drone-ea0d7de1.jpg",2023,1);
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("loup","6kg","https://photoseb.netlify.app/assets/loup5kg-1cc4a778.jpg",2023,1);
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("seriole","15kg","https://photoseb.netlify.app/assets/seriole16kg-8294364e.jpg",2023,1);
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("denti","6kg","https://photoseb.netlify.app/assets/denti6kg-850245da.jpg",2023,1);
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("tassergale","3kg","https://photoseb.netlify.app/assets/tassergale-41a23ffc.jpg",2023,2);
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("loup","5kg","https://photoseb.netlify.app/assets/loup6kg-b3291e7a.jpg",2022,1);
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("congre","7kg","https://photoseb.netlify.app/assets/congre8kg-4fc2852f.jpg",2021,1);
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("pelamide","3kg","https://photoseb.netlify.app/assets/pelamide-6f9539c6.jpg",2021,2);
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("liche","14kg","https://photoseb.netlify.app/assets/liche15kg-c30b4eb0.jpg",2022,1);
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("seriole","16kg","https://photoseb.netlify.app/assets/seriole17kg-f55bcccd.jpg",2022,1);
INSERT INTO fish(name,weight,picture,year,methods_id) VALUES ("daurade","3kg","https://photoseb.netlify.app/assets/daurade4kg-b49055a9.jpg",2023,3);






create table comment (
  id int unsigned primary key auto_increment not null,
  mail VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  avis VARCHAR(255) NOT NULL,
  rating INT NOT NULL
);
INSERT INTO comment(mail, name, avis, rating) VALUES ("paul@gmail.com","Paul","super sortie en bateau, à refaire !!", "5");
INSERT INTO comment(mail, name, avis, rating) VALUES ("tom@gmail.com","Tom","le site est super, bon dévellopeur !!", "5");

create table user (
  id int unsigned primary key auto_increment not null,
  mail VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);
INSERT INTO user(mail, password) VALUES ("test@gmail.com","444777");

create table admin (
  id int unsigned primary key auto_increment not null,
  mail VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

INSERT INTO admin(mail, password) VALUES ("romeo.sebastien@gmail.com","444777");

