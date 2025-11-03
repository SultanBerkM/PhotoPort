CREATE DATABASE photoport;

CREATE SCHEMA core;
CREATE SCHEMA sessions;
CREATE SCHEMA media;

CREATE TYPE core.user_role AS ENUM('client', 'photographer', 'admin');
CREATE TYPE sessions.booking_status AS ENUM('accepted', 'pending', 'declined');
CREATE TYPE sessions.payment_method AS ENUM('debit_card', 'credit_card', 'bank_transfer', 'paypal',);
CREATE TYPE sessions.payment_status AS ENUM('completed', 'pending', 'declined');


CREATE TABLE core.users(
user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
first_name VARCHAR(60) NOT NULL,
last_name VARCHAR(60) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE, 
password VARCHAR(255) NOT NULL,
phone_number VARCHAR(20) NOT NULL UNIQUE,
role core.user_role DEFAULT 'client', 
created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE core.photographers(
photographer_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
user_id UUID REFERENCES core.users(user_id) ON DELETE CASCADE,
profile_picture_url VARCHAR(255),
experience_years INT,
bio VARCHAR(1500),
specialization TEXT[]
);

CREATE TABLE core.clients(
client_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
user_id UUID REFERENCES core.users(user_id) ON DELETE CASCADE,  
total_bookings INT DEFAULT 0
);

CREATE TABLE core.locations(
location_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
photographer_id UUID REFERENCES core.photographers(photographer_id) ON DELETE CASCADE, 
client_id UUID REFERENCES core.clients(client_id) ON DELETE CASCADE, 
country varchar(60) NOT NULL,
city varchar(60),
address varchar(60)
);

CREATE TABLE media.portfolios(
portfolio_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
photographer_id UUID REFERENCES core.photographers(photographer_id) ON DELETE CASCADE, 
title VARCHAR(30) NOT NULL,
description VARCHAR(400),
media_url VARCHAR(255) NOT NULL,
created_at TIMESTAMP DEFAULT NOW(),
updated_at TIMESTAMP DEFAULT NULL,
);

CREATE TABLE sessions.pricing_packages(
pricing_package_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
photographer_id UUID REFERENCES core.photographers(photographer_id) ON DELETE CASCADE, 
package_name VARCHAR(30) NOT NULL,
description VARCHAR(600),
price NUMERIC(10,2) NOT NULL,
currency CHAR(3) NOT NULL,
duration_hours INT
);

CREATE TABLE sessions.bookings(
booking_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
photographer_id UUID REFERENCES core.photographers(photographer_id) ON DELETE CASCADE, 
pricing_package_id UUID REFERENCES sessions.pricing_packages(pricing_package_id) ON DELETE CASCADE, 
session_date DATE NOT NULL,
start_time TIME NOT NULL,
end_time TIME NOT NULL,
location VARCHAR(255) NOT NULL,
status sessions.booking_status DEFAULT 'pending', 
notes varchar(200)
);

CREATE TABLE sessions.payments(
payment_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
booking_id UUID REFERENCES sessions.bookings(booking_id) ON DELETE CASCADE,
payment_method sessions.payment_method DEFAULT 'debit_card', 
payment_status sessions.payment_status DEFAULT 'pending', 
total_price NUMERIC(10,2) NOT NULL,
created_at TIMESTAMP DEFAULT NOW(),
updated_at TIMESTAMP DEFAULT NULL
);

CREATE TABLE sessions.reviews(
review_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
photographer_id UUID REFERENCES core.photographers(photographer_id) ON DELETE CASCADE, 
booking_id UUID REFERENCES sessions.bookings(booking_id) ON DELETE CASCADE,
client_id UUID REFERENCES core.clients(client_id) ON DELETE CASCADE,
rating NUMERIC(2,1) CHECK (rating >= 0 AND rating <= 5) NOT NULL,
review_text VARCHAR(1500),
is_visible BOOLEAN DEFAULT TRUE
);
