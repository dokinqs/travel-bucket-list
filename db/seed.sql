\c locations_db

DELETE FROM locations;

-- INSERT INTO locations (Name, username)
-- VALUES ('Iceland', 'doge');

-- INSERT INTO locations (Name, username)
-- VALUES ('Spain', 'Unknown');

-- INSERT INTO locations (Name, username)
-- VALUES ('Japan', 'Karen');

-- INSERT INTO locations (Name, NativeLanguage, CurrencyName)
INSERT INTO locations
(Name, Alpha2Code, Alpha3Code, NativeName, Region, SubRegion, Latitude,Longitude, Area, NumericCode, NativeLanguage, CurrencyCode, CurrencyName, CurrencySymbol, Flag, FlagPng)
VALUES 
('Afghanistan',
'AF',
'AFG',
'افغانستان',
'Asia',
'Southern Asia',
 '33',
'65',
652230,
 4,
'pus',
 'AFN',
'Afghan afghani',
'؋',
'https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlags/afg.svg',
'https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/afg.png'
),
(
'Åland Islands',
'AX',
'ALA',
'Åland',
'Europe',
'Northern Europe',
 '60.116667',
'19.9',
1580,
 248,
'swe',
 'EUR',
'Euro',
'€',
'https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlags/ala.svg',
'https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/ala.png'),
(
'Albania',
'AL',
'ALB',
'Shqipëria',
'Europe',
'Southern Europe',
'41',
'20',
28748,
8,
'sqi',
'ALL',
'Albanian lek',
'L',
'https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlags/alb.svg',
'https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/alb.png'
);


-- (
-- Name: "Iceland",
-- Alpha2Code: "IS",
-- Alpha3Code: "ISL",
-- NativeName: "Ísland",
-- Region: "Europe",
-- SubRegion: "Northern Europe",
-- Latitude: "65",
-- Longitude: "-18",
-- Area: 103000,
-- NumericCode: 352,
-- NativeLanguage: "isl",
-- CurrencyCode: "ISK",
-- CurrencyName: "Icelandic króna",
-- CurrencySymbol: "kr",
-- Flag: "https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlags/isl.svg",
-- FlagPng: "https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/isl.png"
-- ),

-- (
-- Name: "Spain",
-- Alpha2Code: "ES",
-- Alpha3Code: "ESP",
-- NativeName: "España",
-- Region: "Europe",
-- SubRegion: "Southern Europe",
-- Latitude: "40",
-- Longitude: "-4",
-- Area: 505992,
-- NumericCode: 724,
-- NativeLanguage: "spa",
-- CurrencyCode: "EUR",
-- CurrencyName: "Euro",
-- CurrencySymbol: "€",
-- Flag: "https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlags/esp.svg",
-- FlagPng: "https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/esp.png"
-- ),

-- (
-- Name: "Japan",
-- Alpha2Code: "JP",
-- Alpha3Code: "JPN",
-- NativeName: "日本",
-- Region: "Asia",
-- SubRegion: "Eastern Asia",
-- Latitude: "36",
-- Longitude: "138",
-- Area: 377930,
-- NumericCode: 392,
-- NativeLanguage: "jpn",
-- CurrencyCode: "JPY",
-- CurrencyName: "Japanese yen",
-- CurrencySymbol: "¥",
-- Flag: "https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlags/jpn.svg",
-- FlagPng: "https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/jpn.png"
-- ),

-- (
-- Name: "China",
-- Alpha2Code: "CN",
-- Alpha3Code: "CHN",
-- NativeName: "中国",
-- Region: "Asia",
-- SubRegion: "Eastern Asia",
-- Latitude: "35",
-- Longitude: "105",
-- Area: 9640011,
-- NumericCode: 156,
-- NativeLanguage: "cmn",
-- CurrencyCode: "CNY",
-- CurrencyName: "Chinese yuan",
-- CurrencySymbol: "¥",
-- Flag: "https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlags/chn.svg",
-- FlagPng: "https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/chn.png"
-- )