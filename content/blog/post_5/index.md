---
title: Post 5 - Jobbe med store romlige data
date: "2020-10-10"
description: 'Enkel innebygd geopandas-funksjon for raskt søk'
tag: "master"
---

`Geopandas`, som tidligere nevnt, er et python-bibliotek som kombinerer pandas med shapely. I effekt får man et verktøy som gjør det å jobbe med store tabell-baserte romlige data lekende lett. I prosjektoppgaven min jobber jeg med en AIS-database med over 400 millioner rader, ganske store data. 

I flere forskjellige operasjoner, foreksempel å rasterisere dataen (for å lage heatmaps, foreksempel) er det håpløst å gå gjennom alle grid-celler og prøve å matche det med alle AIS-meldinger. Heldigvis har Geopandas en innebygd funksjon som bygger en romlig indeks av dataen i tabellen. Nærmere best et R-tre. 

Med et **R-tre** trenger man ikke å lete etter all data i en tabell, fordi de ligger gruppert i flere nivåer. R'en i R-tre står for `Rektangel`, som utgjør skissen til geometriene som tilhører de respektive grupperingene. På øverste nivå har du et rektangel, og jo lavere du går i treet, jo mer granulert blir rektanglene, ettersom man deler inn i mindre og mindre grupper. Hvis du har et perfekt balansert R-tre uten overlapp mellom rektanglene har du kjøretid O(log n), noe som er veldig mye bedre enn 'brute force' metoden som er O(log n). 

Skulle man kjørt et søk på hele databasen (400 millioner rader), trenger man å slå opp i igjennomsnitt 9 verdier i treet. Log(400 000 000) = 8.6.

Man bygger en romlig indeks i Geopandas med følgende linje kode: 

```
geo_dataframe_spatial_index = geo_dataframe.sindex
```




