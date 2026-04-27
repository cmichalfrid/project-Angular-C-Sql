use master
go
create database Toy_Store_Project collate hebrew_100_ci_as
drop database Toy_Store_Project
use Toy_Store_Project
--------טבלת קטגוריות--------
create table Categories(
Category_name varchar(100) null,
Category_id int identity not null,
constraint PK_Categories primary key(Category_id),
)

--------טבלת חברות--------
create table Companies(
Company_name varchar(100) null,
Company_id int identity not null,
constraint PK_Companies primary key(Company_id),
)

--------טבלת מוצרים--------
create table Products(
Product_name varchar(100) null,
Product_id int identity not null,
Target_Age int  null,
Category_id int null,
Company_id int null,
Picture varchar(250) null,
Product_Des varchar(100) null,
Price int null,
Last_update DATE null,
constraint PK_Products primary key(Product_id),
constraint FK_Products1 foreign key (Category_id) references Categories(Category_id),
constraint FK_Products2 foreign key (Company_id) references Companies(Company_id),
)
drop table Products

--------טבלת לקוחות--------
create table Clients(
Client_name varchar(100) null,
Client_id int identity not null,
PhoneNumber varchar(10) null,
Email varchar(30) null,
BirthDay date null,
constraint PK_Clients primary key(Client_id),
)

--------טבלת קניה--------
create table Purchase(
Purchase_id int identity not null,
Client_id int null,
Purchase_date DATE null, 
Note varchar(100) null,
Amount_to_be_paid int null,
constraint PK_Purchase primary key(Purchase_id),
constraint FK_Purchase foreign key (Client_id) references Clients(Client_id),
)
drop table Products
--------טבלת פרטי קניה--------
create table Purchase_details(
Purchase_details_id int identity not null,
Purchase_id int null, 
Product_id int null,
Amount int null,
constraint PK_Purchase_details primary key(Purchase_details_id),
constraint FK_Purchase_details1 foreign key (Purchase_id) references Purchase(Purchase_id),
constraint FK_Purchase_details2 foreign key (Product_id) references Products(Product_id),
)


insert into Categories(Category_name)
values('Board_games'),
('Card_games'),
('Mind_games'),
('Strategy_games'),
('Assembly_games')

insert into Companies(Company_name)
values('Foxmind'),
('Gaming'),
('Taki'),
('Mindx'),
('Isratoys')
select*from Companies


insert into Products(Product_name,Price,Target_Age,Product_Des,Category_id,Company_id,Last_update,Picture)
values('Rummy', 50, 20,'A fun game for all ages',1,1,'2022-12-07','https://i5.walmartimages.com/seo/Rummikub-Classic-Edition-The-Original-Rummy-Tile-Game-for-Ages-8-and-up-by-Pressman_34e2b3ce-85d3-4ccd-80a8-a099ffe99466.6e72e9aeecfd2302e7257d013cf3fbb8.png'),
('Alias',45, 15,'A great word game for friends and family',2,2,'2023-10-02','https://mindx.co.il/wp-content/uploads/2022/11/%D7%90%D7%9C%D7%99%D7%90%D7%A1.jpg'),
('Shem_code',60, 30,'An exciting code-breaking game for tech enthusiasts',3,3,'2022-03-08','https://www.hakubia.com/wp-content/uploads/2021/01/635-2-1.webp'),
('Link', 77, 15,'A competitive game that challenges your strategy skills',4,5,'2023-09-03','https://kidsbest.co.il/wp-content/uploads/2021/02/link_1.jpg'),
('Shabbos_puzzle', 99, 5,'A fun game for all ages',5,3,'2022-11-06','https://cdn.speedsize.com/e75ea66a-6c43-4ff7-9021-7e2bf51d39ed/https://d3m9l0v76dty0.cloudfront.net/system/photos/8092080/large/aa1370a257edb737433d406dd06c9a0f.webp')
select*from Clients

update Clients
set PhoneNumber='0527660049' 
where Client_id=5


insert into Clients(Client_name,PhoneNumber,Email,BirthDay)
values
('Sara Cohen',0583333333,'Sc@gmail.com','2000-02-11'),
('Rut Levi',055555555,'Rl@gmail.com','1995-04-11'),
('Nechama Lerner',0542226621,'Nee@gmail.com','1998-06-07'),
('Yosef Buksboim',0527636845,'yyyb@gmail.com','1976-01-26'),
('Moishe Avrahami',0527660049,'mamama@gmail.com','2001-04-16')

 insert into Purchase(Client_id,Purchase_date,Note)
 values(1,'2024-05-11','thank-you!!'),
 (2,'2024-03-03','thank-you!!'),
 (3,'2024-04-10','thank-you!!'),
 (4,'2024-02-08','thank-you!!')

insert into Purchase_details(Purchase_id, Product_id, Amount)
values
(1, 1, 1), 
(2, 2, 2),
(3, 3, 1),  
(4, 4, 3),  
(1, 1, 1)
