\c locations_db

DELETE FROM locations;
DELETE FROM favs;

INSERT INTO locations (cname, region, currencyname, flag)
VALUES 
(
  'Aruba',
  'Americas',
  'Aruban florin',
  'https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlags/abw.svg'
),
(
  'Åland Islands',
  'Europe',
  'Euro',
  'https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlags/alb.svg'
),
(
  'Canada',
  'Americas',
  'Canadian dollar',
  'https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlags/can.svg'
),
(
  'China',
  'Asia',
  'Chinese yuan',
  'https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/chn.png'
),
(
  'Costa Rica',
  'Americas',
  'Costa Rican colón',
  'https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/cri.png'
),
(
  'Egypt',
  'Africa',
  'Egyptian pound',
  'https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/egy.png'
),
(
  'Fiji',
  'Oceana',
  'Fijian dollar',
  'https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/fji.png'
),
(
  'France',
  'Europe',
  'Euro',
  'https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/fra.png'
),
(
  'Germany',
  'Europe',
  'Euro',
  'https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/deu.png'
),
(
  'Iceland',
  'Europe',
  'Icelandic króna',
  'https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/isl.png'
),
(
  'Italy',
  'Europe',
  'Euro',
  'https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/ita.png'
),
(
  'Japan',
  'Asia',
  'Japanese yen',
  'https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/jpn.png'
),
(
  'Nepal',
  'Asia',
  'Nepalese rupee',
  'https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/npl.png'
),
(
  'Russia',
  'Europe',
  'Russian ruble',
  'https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/rus.png'
),
(
  'Singapore',
  'Asia',
  'Brunei dollar',
  'https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/sgp.png'
),
(
  'South Korea',
  'Asia',
  'South Korean won',
  'https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/kor.png'
),
(
  'Spain',
  'Europe',
  'Euro',
  'https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/esp.png'
),
(
  'Thailand',
  'Asia',
  'Thai baht',
  'https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/tha.png'
),
(
  'United Kingdom',
  'Europe',
  'British pound',
  'https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/gbr.png'
),
(
  'Vietnam',
  'Asia',
  'Vietnamese đồng',
  'https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/vnm.png'
);

INSERT INTO favs (note, locations_id)
VALUES 
(
  'Notes',
  4
),
(
  'Mt. Everest',
  13
),
(
  'Is Best Korea',
  16
),
(
  'Aurora Borealis',
  10
);