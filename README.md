# Modewji Foundation — Mfumo wa Mikopo

Mfumo wa maombi ya mikopo kwa wateja na wasimamizi. Toleo lililopo ni **prototype ya kiolesura** inayoweza kuendeshwa kwenye kompyuta; bado si huduma ya kupokea maombi halisi.

## Kuendesha kwenye kompyuta
1. Sakinisha Node.js 18 au toleo jipya zaidi.
2. Pakua au clone repository hii.
3. Fungua terminal ndani ya folda ya mradi.
4. Endesha \`npm start\`.
5. Fungua \`http://localhost:3000\` kwenye kivinjari.

Mradi unatumia Node.js built-in modules pekee; kwa sasa hauhitaji \`npm install\`.

## Mafaili yaliyopo
- \`server.js\` — seva rahisi ya kutoa mafaili ya website.
- \`public/index.html\` — ukurasa wa mwanzo, maelezo ya mchakato, na miundo ya kuingia/kusajili/kurejesha nenosiri.
- \`public/styles.css\` — muonekano wa kitaalamu na unaojibadilisha kwa simu.
- \`public/app.js\` — tab na ujumbe wa majaribio wa fomu za akaunti.
- \`public/ombi.html\` — fomu ya mfano ya ombi la mkopo.
- \`public/loan.js\` — uthibitishaji wa fomu ya mfano.
- \`package.json\` — amri ya kuanzisha seva.

## Kilichofanya kazi katika prototype
- Lugha ya Kiswahili na muonekano wa simu/kompyuta.
- Fomu za mfano za kuingia, usajili, kurejesha nenosiri, na maombi ya mkopo.
- Aina za kazi: Mfanyabiashara, Mkulima, Mwajiriwa, Mjiajiri.
- Orodha ya kiasi cha mkopo kutoka TSh 300,000 hadi TSh 20,000,000; TSh 20,000,000 imewekewa alama ya kusubiri uthibitisho.
- Fomu hazitumi data kwenye seva wala kuihifadhi. Usijaze NIDA halisi au kupakia picha binafsi.

## Bado haijatekelezwa
- Usajili/kuingia halisi, hashing ya nenosiri, uthibitishaji wa barua pepe na kurejesha nenosiri.
- Hifadhidata na udhibiti wa ruhusa za wateja/wasimamizi.
- Uhifadhi salama wa NIDA, picha na nyaraka.
- Dashibodi ya msimamizi, ukaguzi wa maombi, idhini/kukataliwa, na hatua ya bima.
- Ujumbe wa kuthibitisha malipo na miunganisho ya SMS/barua pepe.
- Pawnpesa API na uthibitishaji wa webhook.

## Taarifa zinazohitaji kuthibitishwa
1. Kiasi cha juu cha mkopo: mahitaji ya awali yalitaja TSh 10,000,000 na pia TSh 20,000,000.
2. Ada ya kila kiasi cha mkopo: orodha ya awali ina thamani zisizo wazi au zisizolingana. Hakuna ada iliyowekwa kwenye mfumo huu mpaka ithibitishwe kwa maandishi.
3. Riba, muda wa marejesho, ada nyingine, masharti ya bima na utaratibu wa kurejesha fedha.
4. Nyaraka rasmi za usajili wa kampuni na masharti kamili ya mkopo.
5. Nyaraka za Pawnpesa API, taarifa za sandbox na webhook/callback.

## Usalama kabla ya uzinduzi
- Tumia backend na hifadhidata zenye ruhusa za server-side.
- Hash nenosiri kwa algoriti salama kama Argon2id au bcrypt; usilihifadhi kama maandishi ya kawaida.
- Hifadhi API keys kwenye environment secrets; usiziweke kwenye GitHub source code.
- Linda NIDA/picha kwa ruhusa finyu na storage isiyo ya umma.
- Hakiki malipo kupitia webhook iliyosainiwa na uthibitishaji wa upande wa seva; usiamini taarifa kutoka browser pekee.
- Fanya majaribio ya usalama kabla ya kupokea taarifa au malipo halisi.

**Tahadhari:** hii ni prototype ya maendeleo tu. Haiwezi kupokea maombi halisi, kufungua akaunti, au kuchakata malipo.
