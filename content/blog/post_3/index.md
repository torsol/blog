---
title: Post 2 - Verktøy for stedreferert data
date: "2020-09-07"
description: "Det ser ut som at jeg velger python for arbeidet mitt i år."
tag: "master"
---

## Introduksjon

Python er et kjempepopulært programmeringsspråk, og brukes innenfor mange domener. Ofte trekkes språket frem fordi syntaxen er lett å lese og lære, det finnes god dokumentasjon og mange kraftige biblioteker som gir stor fleksibilitet. 

Dette er tilfellet også når det kommer til datanalyse, både det som er stedrefert og det som ikke er stedrefert.
Min prosjektoppgave kommer til å innebære analyse og operasjoner på AIS-data, så da blir følgende pakker uunværlige. 

I faget programmering i geomatikk skal jeg også skrive et API som skal utføre romlige operasjoner på geodata, så her kommer også noe av det som listes til å bli brukt. 

## Pakker

1. Pandas og Geopandas

Pandas og Geopandas er begge verktøy for data-analyse og representasjon. Av det jeg har skjønt handler mye om Dataframe-objektet som pakkene introduserer, og operasjonene man kan gjøre på dataen representert der. Geopandas bygger på Pandas og gir utvidet funksjonalitet, slik at DataFrames kan ha geometri-felter og utføre geometriske operasjoner (denne funksjonaliteten er hentet fra Shapely-biblioteket.) 

2. Numpy og matplotlib

Numpy og matplotlib er begge pakker som gir python mer rå kraft til å gjøre matematiske operasjoner og visualisering av dette. Siden python er et skriptespråk er det forholdsvis treigt, men disse pakkene skrevet i C gir den regnekraften som enkelte analyser trenger. 

3. Tensorflow og Keras

Tensorflow og Keras er maskinlæringsbiblioteker med forskjellig abstraksjonsnivå. Disse bibliotekene er også skrevet i C, og gir muligheten til å drive med dyp læring i Python. Uten disse pakkene hadde python rett og slett blitt for treigt. 

## Oppsummering
Kort oppsummert så finnes det gode, veldokumenterte og tilgjengelige pakker som tilsynelatende gir meg all funksjonalitet jeg trenger for både prosjektoppgave og programmering i geomatikk. Det er få språk som kan tilby "hele pakka" som python og dens biblioteker tilsynelatende gjør.

Det blir spennende å se hvor enig jeg er i denne påstanden når masteroppgaven leveres juni neste år :P



