CREATE DATABASE photoport;

CREATE SCHEMA public;
CREATE SCHEMA activity;
CREATE SCHEMA media;

CREATE TABLE public.users(
user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
first_name VARCHAR(60) NOT NULL,
last_name VARCHAR(60) NOT NULL,
email VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
phone_number VARCHAR(20) NOT NULL,
role VARCHAR(20) CHECK (role IN('client', 'photographer', 'admin')),
created_at TIMESTAMPTZ DEFAULT NOW()
)

CREATE TABLE public.photographers(
photographer_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
user_id UUID REFERENCES public.users(user_id) ON DELETE CASCADE,
profile_picture_url VARCHAR(255),
experience_years INT,
bio VARCHAR(1500),
specialization TEXT[20]
)

CREATE TABLE public.clients(
client_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
user_id UUID REFERENCES public.users(user_id) ON DELETE CASCADE,  
total_bookings INT DEFAULT 0
)

CREATE TABLE public.location(
location_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
photographer_id UUID REFERENCES public.photographers(photographer_id) ON DELETE CASCADE, 
client_id UUID REFERENCES public.clients(client_id) ON DELETE CASCADE, 
country varchar(60) NOT NULL,
city varchar(60),
address varchar(60)
)

CREATE TABLE media.portfolios(
portfolio_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
photographer_id UUID REFERENCES public.photographers(photographer_id) ON DELETE CASCADE, 
title VARCHAR(30) NOT NULL,
description VARCHAR(400),
media_url TEXT NOT NULL,
created_at TIMESTAMPTZ DEFAULT NOW(),
updated_at TIMESTAMPTZ DEFAULT NOW()
)

CREATE TABLE activity.pricing_package(
pricing_package_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
photographer_id UUID REFERENCES public.photographers(photographer_id) ON DELETE CASCADE, 
package_name VARCHAR(30) NOT NULL,
description VARCHAR(600),
price NUMERIC(10,2) NOT NULL,
currency CHAR(3) NOT NULL,
duration_hours INT
)

CREATE TABLE activity.bookings(
booking_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
photographer_id UUID REFERENCES public.photographers(photographer_id) ON DELETE CASCADE, 
pricing_package_id UUID REFERENCES activity.pricing_package(pricing_package_id) ON DELETE CASCADE, 
session_date DATE NOT NULL,
start_time TIMESTAMPTZ NOT NULL,
end_time TIMESTAMPTZ NOT NULL,
location VARCHAR(255) NOT NULL,
status VARCHAR(20) CHECK (status IN('accepted', 'pending', 'declined')) NOT NULL,
notes varchar(200)
)

CREATE TABLE activity.payments(
payment_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
booking_id UUID REFERENCES activity.bookings(booking_id) ON DELETE CASCADE,
payment_method VARCHAR(50) NOT NULL,
payment_status VARCHAR(50) NOT NULL,
total_price NUMERIC(10,2) NOT NULL,
created_at TIMESTAMPTZ DEFAULT NOW(),
updated_at TIMESTAMPTZ DEFAULT NOW()
)

CREATE TABLE activity.reviews(
review_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
photographer_id UUID REFERENCES public.photographers(photographer_id) ON DELETE CASCADE, 
booking_id UUID REFERENCES activity.bookings(booking_id) ON DELETE CASCADE,
client_id UUID REFERENCES public.clients(client_id) ON DELETE CASCADE,
rating NUMERIC(2,1) CHECK (rating >= 0 AND rating <= 5) NOT NULL,
review_text VARCHAR(1500),
is_visible BOOLEAN DEFAULT TRUE
)
