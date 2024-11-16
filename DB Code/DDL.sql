create database test_db

create schema test_db_schema

-- Dimension Table: DimDate
CREATE TABLE DimDate (
    DateID INT PRIMARY KEY,
    Date DATE,
    DayOfWeek VARCHAR(10),
    Month VARCHAR(10),
    Quarter INT,
    Year INT,
    IsWeekend BOOLEAN
);

-- Dimension Table: DimCustomer
CREATE TABLE DimCustomer (
    CustomerID INT PRIMARY KEY autoincrement start 1 increment 1,
    FirstName VARCHAR(50),
    LastName VARCHAR(100),
    Gender VARCHAR(10),
    DateOfBirth DATE,
    Email VARCHAR(100),
    PhoneNumber VARCHAR(20),  -- Added PhoneNumber column
    Address VARCHAR(255),
    City VARCHAR(50),
    State VARCHAR(70),
    ZipCode VARCHAR(20),
    Country VARCHAR(70),
    LoyaltyProgramID INT
);
select * from dimcustomer;
 drop table DIMCUSTOMER;

-- Dimension Table: DimProduct
CREATE TABLE DimProduct (
    ProductID INT PRIMARY KEY autoincrement start 1 increment 1,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Brand VARCHAR(50),
    UnitPrice DECIMAL(10, 2)
);

-- Dimension Table: DimStore
CREATE TABLE DimStore (
    StoreID INT PRIMARY KEY autoincrement start 1 increment 1,
    StoreName VARCHAR(100),
    StoreType VARCHAR(50),
	StoreOpeningDate DATE,
    Address VARCHAR(255),
    City VARCHAR(50),
    State VARCHAR(50),
    ZipCode VARCHAR(10),
    Country VARCHAR(50),
    ManagerName VARCHAR(100)
);

-- Dimension Table: DimLoyaltyProgram
CREATE TABLE TEST_DB.TEST_DB_SCHEMA.DIMLOYALTYPROGRAM (
    LoyaltyProgramID INT PRIMARY KEY,
    ProgramName VARCHAR(100),
    ProgramTier VARCHAR(50),
    PointsAccrued INT
);

-- Fact Table: FactOrders
CREATE TABLE FactOrders (
    OrderID INT PRIMARY KEY autoincrement start 1 increment 1,
    DateID INT,
    CustomerID INT,
    ProductID INT,
    StoreID INT,
    QuantityOrdered INT,
    OrderAmount DECIMAL(10, 2),
    DiscountAmount DECIMAL(10, 2),
    ShippingCost DECIMAL(10, 2),
    TotalAmount DECIMAL(10, 2),
    FOREIGN KEY (DateID) REFERENCES DimDate(DateID),
    FOREIGN KEY (CustomerID) REFERENCES DimCustomer(CustomerID),
    FOREIGN KEY (ProductID) REFERENCES DimProduct(ProductID),
    FOREIGN KEY (StoreID) REFERENCES DimStore(StoreID)
);

select * from DIMLOYALTYPROGRAM;

TEST_DB.TEST_DB_SCHEMA.DIMLOYALTYPROGRAM



CREATE OR REPLACE FILE FORMAT my_csv_format
TYPE = 'CSV'
SKIP_HEADER = 1
FIELD_OPTIONALLY_ENCLOSED_BY = '"'
DATE_FORMAT = 'YYYY-MM-DD';


COPY INTO DimDate
FROM @TEST_DB.TEST_DB_SCHEMA.TESTSTAGE/DimDate/DimDate.csv
FILE_FORMAT = (FORMAT_NAME = 'my_csv_format');

select * from DIMDATE;


COPY INTO DimStore (StoreName, StoreType, StoreOpeningDate, Address, City, State, ZipCode, Country, ManagerName)
FROM @TEST_DB.TEST_DB_SCHEMA.TESTSTAGE/DimStore
FILE_FORMAT = (TYPE = 'CSV' SKIP_HEADER = 1 FIELD_OPTIONALLY_ENCLOSED_BY = '"' DATE_FORMAT = 'YYYY-MM-DD')
ON_ERROR = 'CONTINUE'
TRUNCATECOLUMNS = TRUE;

select * from DIMSTORE;

COPY INTO DimCustomer (FirstName, LastName, Gender, DateOfBirth, Email, PhoneNumber, Address, City, State, ZipCode, Country, LoyaltyProgramID)
FROM @TEST_DB.TEST_DB_SCHEMA.TESTSTAGE/DimCustomerData/DimCustomerData.csv
FILE_FORMAT = (TYPE = 'CSV' SKIP_HEADER = 1 FIELD_OPTIONALLY_ENCLOSED_BY = '"' DATE_FORMAT = 'YYYY-MM-DD')
ON_ERROR = 'CONTINUE'
TRUNCATECOLUMNS = TRUE;

select * from dimcustomer;


COPY INTO TEST_DB.TEST_DB_SCHEMA.FACTORDERS (DATEID, CUSTOMERID, PRODUCTID, STOREID, QUANTITYORDERED, ORDERAMOUNT, DISCOUNTAMOUNT, SHIPPINGCOST, TOTALAMOUNT)
FROM @TEST_DB.TEST_DB_SCHEMA.TESTSTAGE/FactOrders/FactOrders.csv
FILE_FORMAT = (TYPE = 'CSV' SKIP_HEADER = 1 FIELD_OPTIONALLY_ENCLOSED_BY = '"' DATE_FORMAT = 'YYYY-MM-DD');

select * from factorders;

COPY INTO TEST_DB.TEST_DB_SCHEMA.DIMPRODUCT (PRODUCTNAME, CATEGORY, BRAND, UNITPRICE)
FROM @TEST_DB.TEST_DB_SCHEMA.TESTSTAGE/DimProduct/DimProductData.csv
FILE_FORMAT = (TYPE = 'CSV' SKIP_HEADER = 1 FIELD_OPTIONALLY_ENCLOSED_BY = '"' DATE_FORMAT = 'YYYY-MM-DD');


select * from dimproduct;

--Snowsql commands to load data to stage
--PUT 'file:////Users/amolikagodse/Documents/DataWarehousing/DWProject-master/Landing_Directory/*.csv' @TEST_DB.TEST_DB_SCHEMA.TESTSTAGE/Landing_Directory AUTO_COMPRESS=FALSE;
