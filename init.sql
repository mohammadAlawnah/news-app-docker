CREATE TABLE News (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
);

INSERT INTO News (title, content) VALUES 
('News 3', 'This is the news 3'),
('News 4', 'This is the news 4'),
('News 5', 'This is the news 5')
