--
CREATE TABLE methods (
    id INT AUTO_INCREMENT PRIMARY KEY,
    method VARCHAR(25) NOT NULL
);

INSERT INTO methods(method) VALUES ("traine");
INSERT INTO methods(method) VALUES ("leurre");
INSERT INTO methods(method) VALUES ("appat");
INSERT INTO methods(method) VALUES ("bord");
INSERT INTO methods(method) VALUES ("plongee");

CREATE TABLE fishs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    weight VARCHAR(10) NOT NULL,
    picture VARCHAR(455) NOT NULL,
    alt VARCHAR(25) NOT NULL,
    year DECIMAL(10) NOT NULL,
    method_id INT,
    FOREIGN KEY (method_id) REFERENCES methods(id)
);

INSERT INTO fishs(name,weight,picture,alt,year,method_id) VALUES ("tassergale","3kg","../../frontend/src/assets/1.jpg","tassegale",2023,1);
INSERT INTO fishs(name,weight,picture,alt,year,method_id) VALUES ("seriole","15kg","../../frontend/src/assets/2.jpg","seriole",2023,1);
INSERT INTO fishs(name,weight,picture,alt,year,method_id) VALUES ("denti","6kg","../../frontend/src/assets/3.jpg","denti",2023,1);
INSERT INTO fishs(name,weight,picture,alt,year,method_id) VALUES ("tassergale","3kg","../../frontend/src/assets/4.jpg","tassergale",2023,2);
INSERT INTO fishs(name,weight,picture,alt,year,method_id) VALUES ("loup","5kg","../../frontend/src/assets/5.jpg","loup",2022,1);
INSERT INTO fishs(name,weight,picture,alt,year,method_id) VALUES ("seriole","13kg","../../frontend/src/assets/6.jpg","seriole",2021,1);
INSERT INTO fishs(name,weight,picture,alt,year,method_id) VALUES ("pelamide","3kg","../../frontend/src/assets/7.jpg","pelamide",2021,2);
INSERT INTO fishs(name,weight,picture,alt,year,method_id) VALUES ("loup","6kg","https://www.instagram.com/p/CwGKlUMrFPs/","loup",2023,1);
INSERT INTO fishs(name,weight,picture,alt,year,method_id) VALUES ("seriole","11kg","../../frontend/src/assets/9.jpg","seriole",2021,1);
INSERT INTO fishs(name,weight,picture,alt,year,method_id) VALUES ("liche","14kg","https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/367029182_3016556905141376_3524971148814105034_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=YK5F1RJLL8EAX-wCPWA&_nc_ht=scontent-cdg4-3.xx&oh=00_AfBjmMzFCWrYRAkY17Eb8LJKEK_PvpxrGrIssLfWcBRp8w&oe=65892E69","seriole",2022,1);
INSERT INTO fishs(name,weight,picture,alt,year,method_id) VALUES ("seriole","16kg","../../frontend/src/assets/11.jpg","seriole",2022,1);
INSERT INTO fishs(name,weight,picture,alt,year,method_id) VALUES ("daurade","3kg","../../frontend/src/assets/12.jpg","daurade",2023,3);
