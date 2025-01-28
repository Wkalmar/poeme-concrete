/*global describe, it*/
import expect from 'expect.js'

import extractLinks from '../google-crawler/links-extractor.mjs';

describe('extractLinks', () => {
    it('extracts urls from html', () => {
      const json = {
   kind:"customsearch#search",
   url:{
      type:"application/json",
      template:"https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
   },
   queries:{
      request:[
         {
            title:"Google Custom Search - russian war crimes in ukraine",
            totalResults:"168000",
            searchTerms:"russian war crimes in ukraine",
            count:10,
            startIndex:1,
            inputEncoding:"utf8",
            outputEncoding:"utf8",
            safe:"off",
            dateRestrict:"w"
         }
      ],
      nextPage:[
         {
            title:"Google Custom Search - russian war crimes in ukraine",
            totalResults:"168000",
            searchTerms:"russian war crimes in ukraine",
            count:10,
            startIndex:11,
            inputEncoding:"utf8",
            outputEncoding:"utf8",
            safe:"off",
            dateRestrict:"w"
         }
      ]
   },
   context:{
      title:"searcher"
   },
   searchInformation:{
      searchTime:0.328212,
      formattedSearchTime:"0.33",
      totalResults:"168000",
      formattedTotalResults:"168,000"
   },
   items:[
      {
         kind:"customsearch#result",
         title:"War crimes in the Russian invasion of Ukraine - Wikipedia",
         htmlTitle:"<b>War crimes</b> in the <b>Russian</b> invasion of <b>Ukraine</b> - Wikipedia",
         link:"https://en.wikipedia.org/wiki/War_crimes_in_the_Russian_invasion_of_Ukraine",
         displayLink:"en.wikipedia.org",
         snippet:"22 hours ago ... The Russian military and authorities have committed war crimes, such as deliberate attacks against civilian targets, including on hospitals, medical facilities ...",
         htmlSnippet:"22 hours ago <b>...</b> The <b>Russian</b> military and authorities have committed <b>war crimes</b>, such as deliberate attacks against civilian targets, including on hospitals, medical facilities&nbsp;...",
         formattedUrl:"https://en.wikipedia.org/.../War_crimes_in_the_Russian_invasion_of_Ukrai...",
         htmlFormattedUrl:"https://en.wikipedia.org/.../<b>War</b>_<b>crimes</b>_in_the_<b>Russian</b>_invasion_of_<b>Ukrai</b>...",
         pagemap:{
            metatags:[
               {
                  referrer:"origin",
                  viewport:"width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.25, maximum-scale=5.0"
               }
            ]
         }
      },
      {
         kind:"customsearch#result",
         title:"Kyiv investigates another case of Russian soldiers executing ...",
         htmlTitle:"Kyiv investigates another case of <b>Russian</b> soldiers executing ...",
         link:"https://www.politico.eu/article/russian-soliders-shot-disarmed-ukrainian-pows-filmed-execution/",
         displayLink:"www.politico.eu",
         snippet:"4 days ago ... KYIV — Ukraine's Prosecutor General's Office opened a criminal case against Russia for war crimes in Ukraine on Thursday after a video emerged showing ...",
         htmlSnippet:"4 days ago <b>...</b> KYIV — <b>Ukraine&#39;s</b> Prosecutor General&#39;s Office opened a criminal case against Russia for <b>war crimes</b> in <b>Ukraine</b> on Thursday after a video emerged showing&nbsp;...",
         formattedUrl:"https://www.politico.eu/.../russian-soliders-shot-disarmed-ukrainian-pows-fi...",
         htmlFormattedUrl:"https://www.politico.eu/.../<b>russian</b>-soliders-shot-disarmed-ukrainian-pows-fi...",
         pagemap:{
            cse_thumbnail:[
               {
                  src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUkdm14DMxrJfG_gazp2PM89VwsX0q5PR1W7Yk_hsHbbSaOTXK7LQ6kcE&s",
                  width:"310",
                  height:"163"
               }
            ],
            website:[
               {
                  target:"https://www.politico.eu/?s={s}"
               }
            ],
            metatags:[
               {
                  section:"defense",
                  viewport:"width=device-width, initial-scale=1"
               }
            ],
            cse_image:[
               {
                  src:"https://www.politico.eu/cdn-cgi/image/width=1200,height=630,fit=crop,quality=80,onerror=redirect/wp-content/uploads/2025/01/23/GettyImages-1248079607-scaled.jpg"
               }
            ]
         }
      },
      {
         kind:"customsearch#result",
         title:"Breaking the Chain: Paths to Stop U.S.-Made Component Exports ...",
         htmlTitle:"Breaking the Chain: Paths to Stop U.S.-Made Component Exports ...",
         link:"https://harriman.columbia.edu/event/breaking-the-chain-paths-to-stop-u-s-made-component-exports-into-russian-war-crimes-in-ukraine/",
         displayLink:"harriman.columbia.edu",
         snippet:"4 days ago ... ... Russian War Crimes in Ukraine. Tuesday, February 11, 2025. Breaking the ... Russian War Crimes in Ukraine. Reserve Your Seat. Registration REQUIRED by 4pm ...",
         htmlSnippet:"4 days ago <b>...</b> ... <b>Russian War Crimes</b> in <b>Ukraine</b>. Tuesday, February 11, 2025. Breaking the ... <b>Russian War Crimes</b> in <b>Ukraine</b>. Reserve Your Seat. Registration REQUIRED by 4pm&nbsp;...",
         formattedUrl:"https://harriman.columbia.edu/.../breaking-the-chain-paths-to-stop-u-s-mad...",
         htmlFormattedUrl:"https://harriman.columbia.edu/.../breaking-the-chain-paths-to-stop-u-s-mad...",
         pagemap:{
            Event:[
               {
                  image:"https://harriman.columbia.edu/wp-content/uploads/2025/01/2025-02-11-IPHR-Event.png",
                  endDate:"2025-02-11T13:30:00-05:00",
                  eventStatus:"http://schema.org/EventScheduled",
                  name:"Breaking the Chain: Paths to Stop U.S.-Made",
                  description:"<p>Please join the Harriman Institute and the",
                  eventAttendanceMode:"http://schema.org/OfflineEventAttendanceMode",
                  url:"https://harriman.columbia.edu/event/breaking-the-chain-paths-to-stop-u-s-made-component-exports-into-russian-war-crimes-in-ukraine/",
                  startDate:"2025-02-11T12:00:00-05:00"
               }
            ]
         }
      },
      {
         kind:"customsearch#result",
         title:"Arria-formula Meeting on Ukraine : What's In Blue : Security Council ...",
         htmlTitle:"Arria-formula Meeting on <b>Ukraine</b> : What&#39;s In Blue : Security Council ...",
         link:"https://www.securitycouncilreport.org/whatsinblue/2025/01/arria-formula-meeting-on-ukraine-5.php",
         displayLink:"www.securitycouncilreport.org",
         snippet:"4 days ago ... ... war crimes committed by Russian troops in Ukraine for its own political purposes. They may allude to international investigations that have documented ...",
         htmlSnippet:"4 days ago <b>...</b> ... <b>war crimes</b> committed by <b>Russian</b> troops in <b>Ukraine</b> for its own political purposes. They may allude to international investigations that have documented&nbsp;...",
         formattedUrl:"https://www.securitycouncilreport.org/.../arria-formula-meeting-on-ukraine...",
         htmlFormattedUrl:"https://www.securitycouncilreport.org/.../arria-formula-meeting-on-<b>ukraine</b>...",
         pagemap:{
            cse_thumbnail:[
               {
                  src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT16x_3mjUjtv5j1pfOKbJUu4Bu7QDd3bWKKpLwGpwijB-6PU2-oroUthk&s",
                  width:"330",
                  height:"153"
               }
            ],
            metatags:[
               {
                  viewport:"width=device-width, initial-scale=1"
               }
            ],
            cse_image:[
               {
                  src:"https://www.securitycouncilreport.org/wp-content/themes/scr2018/_resources/img/global/SCR-logo-share-1400.png"
               }
            ]
         }
      },
      {
         kind:"customsearch#result",
         title:"MEPs condemn Russia's use of disinformation to justify its war in ...",
         htmlTitle:"MEPs condemn <b>Russia&#39;s</b> use of disinformation to justify its <b>war</b> in ...",
         link:"https://www.europarl.europa.eu/news/en/press-room/20250116IPR26330/meps-condemn-russia-s-use-of-disinformation-to-justify-its-war-in-ukraine",
         displayLink:"www.europarl.europa.eu",
         snippet:"4 days ago ... ... Soviet crimes, and for cracking down ... Russian media outlets conducting disinformation campaigns championing Russia's war of aggression against Ukraine.",
         htmlSnippet:"4 days ago <b>...</b> ... Soviet <b>crimes</b>, and for cracking down ... <b>Russian</b> media outlets conducting disinformation campaigns championing Russia&#39;s <b>war</b> of aggression against <b>Ukraine</b>.",
         formattedUrl:"https://www.europarl.europa.eu/.../meps-condemn-russia-s-use-of-disinfor...",
         htmlFormattedUrl:"https://www.europarl.europa.eu/.../meps-condemn-russia-s-use-of-disinfor...",
         pagemap:{
            cse_thumbnail:[
               {
                  src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexaWNW9QRJR_z7hNSy6R1EphcLpi1YdQLUA_5568848E3-ayqQ6o8EvQ&s",
                  width:"310",
                  height:"163"
               }
            ],
            metatags:[
               {
                  planet:"news",
                  available:"23-01-2025",
                  language:"en",
                  routes:"productSubType:PLENARY_SESSION",
                  viewport:"width=device-width, initial-scale=1.0"
               }
            ],
            cse_image:[
               {
                  src:"https://www.europarl.europa.eu/news/img/meta-facebook.jpg"
               }
            ]
         }
      },
      {
         kind:"customsearch#result",
         title:"Russian war crimes in Ukraine - Ukraine Crisis Media Center ...",
         htmlTitle:"<b>Russian war crimes in Ukraine</b> - Ukraine Crisis Media Center ...",
         link:"https://uacrisis.org/en/voienni-zlochyny-rf-en",
         displayLink:"uacrisis.org",
         snippet:"4 days ago ... Russian war crimes in Ukraine · Latest stories · Contacts · UCMC Press center · Departments. UCMC Press center · Hybrid Warfare Analytical Group · Media reboot ...",
         htmlSnippet:"4 days ago <b>...</b> <b>Russian war crimes</b> in <b>Ukraine</b> &middot; Latest stories &middot; Contacts &middot; UCMC Press center &middot; Departments. UCMC Press center &middot; Hybrid Warfare Analytical Group &middot; Media reboot&nbsp;...",
         formattedUrl:"https://uacrisis.org/en/voienni-zlochyny-rf-en",
         htmlFormattedUrl:"https://uacrisis.org/en/voienni-zlochyny-rf-en",
         pagemap:{
            cse_thumbnail:[
               {
                  src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2L1ZFCdou2GXl8vGV1YkgZFjn-Nxz66HqQxxxZYDdv_btNkRYeW3pXGDl&s",
                  width:"299",
                  height:"168"
               }
            ],
            metatags:[
               {
                  viewport:"initial-scale=1.0, minimum-scale=1.0, height=device-height, width=device-width"
               }
            ],
            cse_image:[
               {
                  src:"https://uacrisis.org/wp-content/uploads/2025/01/tsifri-2325x1620-px-4-364x205.jpeg"
               }
            ]
         }
      },
      {
         kind:"customsearch#result",
         title:"MOTION FOR A RESOLUTION on Russia's disinformation and ...",
         htmlTitle:"MOTION FOR A RESOLUTION on <b>Russia&#39;s</b> disinformation and ...",
         link:"https://www.europarl.europa.eu/doceo/document/B-10-2025-0075_EN.html",
         displayLink:"www.europarl.europa.eu",
         snippet:"6 days ago ... ... war of aggression against Ukraine, are being persecuted under Russian legislation;. N. whereas the whitewashing and glorification of Soviet crimes, including ...",
         htmlSnippet:"6 days ago <b>...</b> ... <b>war</b> of aggression against <b>Ukraine</b>, are being persecuted under <b>Russian</b> legislation;. N. whereas the whitewashing and glorification of Soviet <b>crimes</b>, including&nbsp;...",
         formattedUrl:"https://www.europarl.europa.eu/doceo/document/B-10-2025-0075_EN.html",
         htmlFormattedUrl:"https://www.europarl.europa.eu/doceo/document/B-10-2025-0075_EN.html",
         pagemap:{
            cse_thumbnail:[
               {
                  src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKYAXFH3nKu3dyjkiAn5H31EjXlKtOwANUh5QquD2iTHjNrNRRiabr784&s",
                  width:"310",
                  height:"163"
               }
            ],
            metatags:[
               {
                  copyright:"© European Union, 2025 - Source: European Parliament",
                  viewport:"width=device-width, initial-scale=1, shrink-to-fit=no",
                  author:"Michael GAHLER, Daniel CASPARY, Antonio LÓPEZ-ISTÚRIZ WHITE, Inese VAIDERE, Seán KELLY, Milan ZVER, Sandra KALNIETE, Andrey KOVATCHEV, Ana Miguel PEDRO, Davor Ivo STIER, Siegfried MUREŞAN, David MCALLISTER, Željana ZOVKO, Isabel WISELER-LIMA, Andrzej HALICKI, Łukasz KOHUT, Rasa JUKNEVIČIENĖ, Miriam LEXMANN, Matej TONIN, Krzysztof BREJZA, Pekka TOVERI, Paulius SAUDARGAS, Mika AALTOLA, Ondřej KOLÁŘ, Danuše NERUDOVÁ, Ingeborg TER LAAK, Michał SZCZERBA, Nicolás PASCUAL DE LA PARTE, Mirosława NYKIEL, Sebastião BUGALHO, Alice TEODORESCU MÅWE",
                  available:"20-01-2025",
                  language:"en",
                  title:"MOTION FOR A RESOLUTION on Russia’s disinformation and historical falsification to justify its war of aggression against Ukraine | B10-0075/2025 | European Parliament"
               }
            ],
            cse_image:[
               {
                  src:"https://www.europarl.europa.eu/website/common/img/icon/sharelogo_facebook.jpg"
               }
            ]
         }
      },
      {
         kind:"customsearch#result",
         title:"Finland on the frontline for trying Russians for war crimes",
         htmlTitle:"Finland on the frontline for trying <b>Russians</b> for <b>war crimes</b>",
         link:"https://www.justiceinfo.net/en/140579-finland-frontline-trying-russians-war-crimes.html",
         displayLink:"www.justiceinfo.net",
         snippet:"4 days ago ... ... Russian citizen is charged with war crimes committed in Ukraine. Voislav Torden is accused of leading an ambush attack in which 22 Ukrainian soldiers were ...",
         htmlSnippet:"4 days ago <b>...</b> ... <b>Russian</b> citizen is charged with <b>war crimes</b> committed in <b>Ukraine</b>. Voislav Torden is accused of leading an ambush attack in which 22 Ukrainian soldiers were&nbsp;...",
         formattedUrl:"https://www.justiceinfo.net/.../140579-finland-frontline-trying-russians-war...",
         htmlFormattedUrl:"https://www.justiceinfo.net/.../140579-finland-frontline-trying-<b>russian</b>s-<b>war</b>...",
         pagemap:{
            cse_thumbnail:[
               {
                  src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIfoXgtEo7vbhg6j5SZN2nZ1XjG60RRrAw4Co7wi-aNDz7JY2klJtVYw&s=0",
                  width:"150",
                  height:"79"
               }
            ],
            metatags:[
               {
                  author:"Jeanette Björkqvist",
                  viewport:"width=device-width, initial-scale=1.0"
               }
            ],
            cse_image:[
               {
                  src:"https://www.justiceinfo.net/images/cache/post/social_w1200_h628_c/Ukraine-Finland_Voislav-Torden-trial_@Heikki-Saukkomaa-Lehtikuva-AFP.jpg"
               }
            ]
         }
      },
      {
         kind:"customsearch#result",
         title:"U.S. Launches Program To Document War Crimes In Ukraine",
         htmlTitle:"U.S. Launches Program To Document <b>War Crimes In Ukraine</b>",
         link:"https://www.rferl.org/a/us-document-russian-atrocities/31855294.html",
         displayLink:"www.rferl.org",
         snippet:"2 days ago ... The US State Department has announced the launch of a new program to capture and analyze evidence of war crimes and other atrocities committed by Russian ...",
         htmlSnippet:"2 days ago <b>...</b> The US State Department has announced the launch of a new program to capture and analyze evidence of <b>war crimes</b> and other atrocities committed by <b>Russian</b>&nbsp;...",
         formattedUrl:"https://www.rferl.org/a/us-document-russian-atrocities/31855294.html",
         htmlFormattedUrl:"https://www.rferl.org/a/us-document-<b>russian</b>-atrocities/31855294.html",
         pagemap:{
            metatags:[
               {
                  uthor:"RFE/RL",
                  viewport:"width=device-width, initial-scale=1.0"
               }
            ]
         }
      },
      {
         kind:"customsearch#result",
         title:"Ukraine Conflict Monitor",
         htmlTitle:"<b>Ukraine</b> Conflict Monitor",
         link:"https://acleddata.com/ukraine-conflict-monitor/",
         displayLink:"acleddata.com",
         snippet:"4 days ago ... Ukraine War Situation Update: 11 – 17 January 2025. 1160 political ... Ukrainian or Russian military; Russian border guards; Pro-Ukrainian Russian ...",
         htmlSnippet:"4 days ago <b>...</b> <b>Ukraine War</b> Situation Update: 11 – 17 January 2025. 1160 political ... Ukrainian or <b>Russian</b> military; <b>Russian</b> border guards; Pro-Ukrainian <b>Russian</b>&nbsp;...",
         formattedUrl:"https://acleddata.com/ukraine-conflict-monitor/",
         htmlFormattedUrl:"https://acleddata.com/<b>ukraine</b>-conflict-monitor/",
         pagemap:{
            cse_thumbnail:[
               {
                  src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdp7FEZ4tb0QX9na_Glf1qQdgSmwcIFvMFBDXNZ2gHAdF9YK048TOYrcr3&s",
                  width:"308",
                  height:"163"
               }
            ],
            metatags:[
               {
                  viewport:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
               }
            ],
            cse_image:[
               {
                  src:"https://acleddata.com/acleddatanew/wp-content/uploads/2023/03/UCM_Upd.png"
               }
            ]
         }
      }
   ]
};

      const expectedUrls = [
        'https://en.wikipedia.org/wiki/War_crimes_in_the_Russian_invasion_of_Ukraine',
        'https://www.politico.eu/article/russian-soliders-shot-disarmed-ukrainian-pows-filmed-execution/',
        'https://harriman.columbia.edu/event/breaking-the-chain-paths-to-stop-u-s-made-component-exports-into-russian-war-crimes-in-ukraine/',
        'https://www.securitycouncilreport.org/whatsinblue/2025/01/arria-formula-meeting-on-ukraine-5.php',
        'https://www.europarl.europa.eu/news/en/press-room/20250116IPR26330/meps-condemn-russia-s-use-of-disinformation-to-justify-its-war-in-ukraine',
        'https://uacrisis.org/en/voienni-zlochyny-rf-en',
        'https://www.europarl.europa.eu/doceo/document/B-10-2025-0075_EN.html',
        'https://www.justiceinfo.net/en/140579-finland-frontline-trying-russians-war-crimes.html',
        'https://www.rferl.org/a/us-document-russian-atrocities/31855294.html',
        'https://acleddata.com/ukraine-conflict-monitor/'
      ];

      expect(extractLinks(json)).to.eql(expectedUrls);
    });
  });