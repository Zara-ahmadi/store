-- Create the Product table with additional columns
CREATE TABLE Product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    images JSON, -- JSON type to store an array of image URLs
    price DECIMAL(10, 2) NOT NULL,
    discountedPrice DECIMAL(10, 2),
    unit INT NOT NULL,
    deliveryInfo DECIMAL(10, 2),
    characteristics JSON, -- JSON type to store characteristics like color, memory, etc.
    brand VARCHAR(255), -- New column for product brand
    category VARCHAR(255), -- New column for product category
    stock INT NOT NULL, -- New column for product stock
    warrantyPeriod VARCHAR(50), -- New column for warranty period, e.g., "2 years"
    supplierInfo JSON -- New column to store supplier information as JSON
);

-- Insert 12 products into the Product table with realistic data
INSERT INTO
    Product (
        title,
        description,
        images,
        price,
        discountedPrice,
        unit,
        deliveryInfo,
        characteristics,
        brand,
        category,
        stock,
        warrantyPeriod,
        supplierInfo
    )
VALUES (
        'Smartphone Model A',
        'High-end smartphone with a sleek design and powerful features.',
        '["https://example.com/images/smartphone_a1.jpg", "https://example.com/images/smartphone_a2.jpg"]',
        699.99,
        649.99,
        1,
        15.00,
        '{"color": ["Black", "Silver"], "memory": ["128 GB", "256 GB"], "battery": "4000 mAh"}',
        'TechBrand',
        'Smartphones',
        150,
        '2 years',
        '{"name": "Best Electronics Ltd.", "contact": ""contact": "This product is designed to provide the best experience with its unique features. It comes in various colors and sizes, making it suitable for everyone.                     This product is designed to provide the best experience with its unique features. It comes in various colors and sizes, making it suitable for everyone.                     This product is designed to provide the best experience with its unique features. It comes in various colors and sizes, making it suitable for everyone.                     This product is designed to provide the best experience with its unique features. It comes in various colors and sizes, making it suitable for everyone.                     This product is designed to provide the best experience with its unique features. It comes in various colors and sizes, making it suitable for everyone.                     This product is designed to provide the best experience with its unique features. It comes in various colors and sizes, making it suitable for everyone."
", "vendor": "Vendor A", "email": "vendorA@bestelectronics.com"}'
    ),
    (
        '4K UHD TV Model B',
        'Experience true 4K resolution with this stunning UHD TV.',
        '["https://example.com/images/tv_b1.jpg", "https://example.com/images/tv_b2.jpg"]',
        1199.99,
        1099.99,
        1,
        30.00,
        '{"size": "55 inch", "resolution": "3840x2160", "refresh_rate": "120 Hz"}',
        'VisionTech',
        'Televisions',
        80,
        '3 years',
        '{"name": "Vision Distributors", "contact": ""contact": "This product is designed to provide the best experience with its unique features. It comes in various colors and sizes, making it suitable for everyone.                     This product is designed to provide the best experience with its unique features. It comes in various colors and sizes, making it suitable for everyone.                     This product is designed to provide the best experience with its unique features. It comes in various colors and sizes, making it suitable for everyone.                     This product is designed to provide the best experience with its unique features. It comes in various colors and sizes, making it suitable for everyone. This product is designed to provide the best experience with its unique features. It comes in various colors and sizes, making it suitable for everyone. This product is designed to provide the best experience with its unique features. It comes in various colors and sizes, making it suitable for everyone.", "vendor": "Vendor B", "email": "vendorB@visiondistributors.com"}'
    ),
    (
        'Wireless Headphones C',
        'Comfortable wireless headphones with superior sound quality.',
        '["https://example.com/images/headphones_c1.jpg", "https://example.com/images/headphones_c2.jpg"]',
        149.99,
        129.99,
        1,
        10.00,
        '{"color": ["Black", "White"], "battery_life": "30 hours", "connectivity": "Bluetooth 5.0"}',
        'SoundWave',
        'Headphones',
        200,
        '1 year',
        '{"name": "AudioWorld Ltd.", "contact": "sales@audioworld.com", "vendor": "Vendor C", "email": "vendorC@audioworld.com"}'
    ),
    (
        'Laptop Pro D',
        'High-performance laptop ideal for professionals and gamers.',
        '["https://example.com/images/laptop_d1.jpg", "https://example.com/images/laptop_d2.jpg"]',
        1599.99,
        1499.99,
        1,
        20.00,
        '{"processor": "Intel i7", "ram": "16 GB", "storage": "512 GB SSD"}',
        'ComputeX',
        'Laptops',
        50,
        '2 years',
        '{"name": "Global Tech Supplies", "contact": "support@globaltechsupplies.com", "vendor": "Vendor D", "email": "vendorD@globaltechsupplies.com"}'
    ),
    (
        'Smartwatch E',
        'Stylish smartwatch with health tracking and notifications.',
        '["https://example.com/images/smartwatch_e1.jpg", "https://example.com/images/smartwatch_e2.jpg"]',
        249.99,
        229.99,
        1,
        8.00,
        '{"color": ["Black", "Gold"], "battery_life": "7 days", "water_resistance": "5 ATM"}',
        'WristTech',
        'Wearables',
        100,
        '1 year',
        '{"name": "Wearable Innovators Inc.", "contact": "contact@wearableinnovators.com", "vendor": "Vendor E", "email": "vendorE@wearableinnovators.com"}'
    ),
    (
        'Gaming Console F',
        'Next-gen gaming console with stunning graphics and fast load times.',
        '["https://example.com/images/console_f1.jpg", "https://example.com/images/console_f2.jpg"]',
        499.99,
        449.99,
        1,
        25.00,
        '{"storage": "1 TB", "resolution": "4K", "color": "Black"}',
        'GameStation',
        'Gaming Consoles',
        75,
        '3 years',
        '{"name": "Game Hub", "contact": "support@gamehub.com", "vendor": "Vendor F", "email": "vendorF@gamehub.com"}'
    ),
    (
        'Bluetooth Speaker G',
        'Portable Bluetooth speaker with rich sound and deep bass.',
        '["https://example.com/images/speaker_g1.jpg", "https://example.com/images/speaker_g2.jpg"]',
        99.99,
        89.99,
        1,
        5.00,
        '{"color": ["Red", "Blue"], "battery_life": "15 hours", "water_resistance": "IPX7"}',
        'SoundBeat',
        'Speakers',
        300,
        '1 year',
        '{"name": "Audio Central", "contact": "service@audiocentral.com", "vendor": "Vendor G", "email": "vendorG@audiocentral.com"}'
    ),
    (
        'Tablet H',
        'Versatile tablet perfect for work, entertainment, and creativity.',
        '["https://example.com/images/tablet_h1.jpg", "https://example.com/images/tablet_h2.jpg"]',
        799.99,
        749.99,
        1,
        18.00,
        '{"screen_size": "10.5 inch", "storage": ["64 GB", "128 GB"], "color": "Silver"}',
        'TabPlus',
        'Tablets',
        120,
        '2 years',
        '{"name": "Digital Gadgets Co.", "contact": "info@digitalgadgets.com", "vendor": "Vendor H", "email": "vendorH@digitalgadgets.com"}'
    ),
    (
        'Smart Home Assistant I',
        'Voice-controlled smart home assistant for hands-free convenience.',
        '["https://example.com/images/assistant_i1.jpg", "https://example.com/images/assistant_i2.jpg"]',
        129.99,
        119.99,
        1,
        7.00,
        '{"color": "White", "connectivity": "Wi-Fi", "compatibility": "Smart Home Devices"}',
        'HomeTech',
        'Smart Home',
        250,
        '2 years',
        '{"name": "Home Innovations", "contact": "support@homeinnovations.com", "vendor": "Vendor I", "email": "vendorI@homeinnovations.com"}'
    ),
    (
        'Fitness Tracker J',
        'Advanced fitness tracker with GPS, heart rate monitoring, and more.',
        '["https://example.com/images/tracker_j1.jpg", "https://example.com/images/tracker_j2.jpg"]',
        179.99,
        159.99,
        1,
        10.00,
        '{"color": ["Black", "Blue"], "battery_life": "10 days", "water_resistance": "5 ATM"}',
        'FitPro',
        'Wearables',
        180,
        '1 year',
        '{"name": "Fitness Gear Co.", "contact": "contact@fitnessgear.com", "vendor": "Vendor J", "email": "vendorJ@fitnessgear.com"}'
    ),
    (
        'Drone Model K',
        'High-performance drone with 4K camera and obstacle avoidance.',
        '["https://example.com/images/drone_k1.jpg", "https://example.com/images/drone_k2.jpg"]',
        899.99,
        849.99,
        1,
        20.00,
        '{"camera": "4K UHD", "battery_life": "30 minutes", "range": "5 km"}',
        'SkyMaster',
        'Drones',
        40,
        '1 year',
        '{"name": "Aerial Innovations", "contact": "sales@aerialinnovations.com", "vendor": "Vendor K", "email": "vendorK@aerialinnovations.com"}'
    ),
    (
        'Digital Camera L',
        'Capture stunning photos and videos with this high-resolution digital camera.',
        '["https://example.com/images/camera_l1.jpg", "https://example.com/images/camera_l2.jpg"]',
        1299.99,
        1199.99,
        1,
        25.00,
        '{"resolution": "24 MP", "zoom": "10x optical", "connectivity": "Wi-Fi"}',
        'CapturePro',
        'Cameras',
        60,
        '2 years',
        '{"name": "PhotoWorld Ltd.", "contact": "support@photoworld.com", "vendor": "Vendor L", "email": "vendorL@photoworld.com"}'
    );

INSERT INTO
    comments (name, rating, text, date)
VALUES (
        'Jane Doe',
        5,
        'Amazing product! Exceeded my expectations.',
        '2024-07-22'
    ),
    (
        'John Smith',
        3,
        'The product is okay, but it could be better.',
        '2024-07-23'
    ),
    (
        'Alice Johnson',
        4,
        'Good quality, I am satisfied with my purchase.',
        '2024-07-24'
    ),
    (
        'Michael Brown',
        2,
        'Not what I expected, could be improved.',
        '2024-07-25'
    ),
    (
        'Emily Davis',
        5,
        'Fantastic! Highly recommend this to everyone.',
        '2024-07-26'
    ),
    (
        'David Wilson',
        1,
        'Terrible experience, not worth the money.',
        '2024-07-27'
    ),
    (
        'Sophia Martinez',
        4,
        'Pretty good, I am happy with the purchase.',
        '2024-07-28'
    ),
    (
        'Chris Lee',
        3,
        'It’s decent, but I have seen better.',
        '2024-07-29'
    ),
    (
        'Olivia Taylor',
        5,
        'Absolutely love it! Will buy again.',
        '2024-07-30'
    ),
    (
        'Liam Thompson',
        2,
        'Disappointed with the quality.',
        '2024-07-31'
    );