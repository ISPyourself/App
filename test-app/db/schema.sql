Drop database if exists ZipCodes_db;
Create database ZipCodes_db;

Use ZipCodes_db;

Create table zip_codes
(
ZipCode INTEGER NOT NULL ,
PlaceName VARCHAR(60) NOT NULL,
State VARCHAR(60) NOT NULL,
StateAbbreviation VARCHAR(60) NOT NULL,
County VARCHAR(60) NOT NULL,
GroupExist INTEGER NOT NULL,
Primary Key (ZipCode)
);


Select * from zipcodes_db;