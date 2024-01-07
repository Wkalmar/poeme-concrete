/*global describe, it*/
import expect from 'expect.js'

import extractLinks from '../links-extractor.mjs';

describe('extractLinks', () => {
    it('extracts urls from html', () => {
      const html = `
        <!doctype html><html lang="uk"><head><meta charset="UTF-8"><meta content="/images/branding/googleg/1x/googleg_standard_color_128dp.png" itemprop="image"><title>russian war crimes - &#1055;&#1086;&#1096;&#1091;&#1082; Google</title></head><body jsmodel="hspDDf"><div class="cOl4Id"><a href="/?sa=X&amp;ved=0ahUKEwip3N6v7aKDAxWOPxAIHbwSBdIQOwgC"><span class="V6gwVd">G</span><span class="iWkuvd">o</span><span class="cDrQ7">o</span><span class="V6gwVd">g</span><span class="ntlR9">l</span><span class="iWkuvd tJ3Myc">e</span></a></div><div class="bz1lBb"><form class="Pg70bf" id="sf"><input name="sca_esv" value="593056060" type="hidden"><input name="ie" value="ISO-8859-1" type="hidden"><input name="tbs" value="qdr:w" type="hidden"><div class="H0PQec"><div class="sbc esbc"><input class="noHIxc" value="russian war crimes" autocapitalize="none" autocomplete="off" name="q" spellcheck="false" type="text"><input name="oq" type="hidden"><input name="aqs" type="hidden"><div class="x">×</div><div class="sc"></div></div></div><button id="qdClwb" type="submit"></button></form></div></header><div id="main"><div><div class="KP7LCb"> <div class="bRsWnc"> <div class="N6RWV"> <div class="Pg70bf Uv67qb"> <span class="OXXup">&#1059;&#1089;&#1110;</span><a class="eZt8xd" href="/search?q=russian+war+crimes&amp;sca_esv=593056060&amp;ie=UTF-8&amp;tbm=nws&amp;source=lnms&amp;sa=X&amp;ved=0ahUKEwip3N6v7aKDAxWOPxAIHbwSBdIQ_AUIBigB">&#1053;&#1086;&#1074;&#1080;&#1085;&#1080;</a><a class="eZt8xd" href="/search?q=russian+war+crimes&amp;sca_esv=593056060&amp;ie=UTF-8&amp;tbm=isch&amp;source=lnms&amp;sa=X&amp;ved=0ahUKEwip3N6v7aKDAxWOPxAIHbwSBdIQ_AUIBygC">&#1047;&#1086;&#1073;&#1088;&#1072;&#1078;&#1077;&#1085;&#1085;&#1103;</a><a class="eZt8xd" href="/search?q=russian+war+crimes&amp;sca_esv=593056060&amp;ie=UTF-8&amp;tbm=vid&amp;source=lnms&amp;sa=X&amp;ved=0ahUKEwip3N6v7aKDAxWOPxAIHbwSBdIQ_AUICCgD">&#1042;&#1110;&#1076;&#1077;&#1086;</a>  <a href="/url?q=https://maps.google.com/maps%3Fq%3Drussian%2Bwar%2Bcrimes%26um%3D1%26ie%3DUTF-8&amp;opi=89978449&amp;sa=U&amp;ved=0ahUKEwip3N6v7aKDAxWOPxAIHbwSBdIQiaAMCAkoBA&amp;usg=AOvVaw39Md9tv0_GZrjMdqfbDDao">&#1050;&#1072;&#1088;&#1090;&#1080;</a>  <a href="/url?q=/search%3Fq%3Drussian%2Bwar%2Bcrimes%26sca_esv%3D593056060%26ie%3DUTF-8%26tbm%3Dshop%26source%3Dlnms&amp;opi=89978449&amp;sa=U&amp;ved=0ahUKEwip3N6v7aKDAxWOPxAIHbwSBdIQiaAMCAooBQ&amp;usg=AOvVaw2ec7PlZL285UzjKjwex-XE">&#1055;&#1086;&#1082;&#1091;&#1087;&#1082;&#1080;</a>  <a href="/search?q=russian+war+crimes&amp;sca_esv=593056060&amp;ie=UTF-8&amp;tbm=bks&amp;source=lnms&amp;sa=X&amp;ved=0ahUKEwip3N6v7aKDAxWOPxAIHbwSBdIQ_AUICygG">&#1050;&#1085;&#1080;&#1075;&#1080;</a>  <div class="FElbsf"><a href="/advanced_search" style="white-space:nowrap" id="st-toggle" role="button">&#1030;&#1085;&#1089;&#1090;&#1088;&#1091;&#1084;&#1077;&#1085;&#1090;&#1080; &#1087;&#1086;&#1096;&#1091;&#1082;&#1091;</a></div> </div> </div> </div> </div><div class="Pg70bf wEsjbd Gx5Zad xpd EtOod pkphOe" id="st-card"><li class="yNFsl SkUj4c">&#1041;&#1091;&#1076;&#1100;-&#1103;&#1082;&#1086;&#1102; &#1084;&#1086;&#1074;&#1086;&#1102;</li><li class="yNFsl"><a href="/search?q=russian+war+crimes&amp;sca_esv=593056060&amp;ie=UTF-8&amp;tbs=qdr:w,lr:lang_1uk&amp;source=lnt&amp;lr=lang_uk&amp;sa=X&amp;ved=0ahUKEwip3N6v7aKDAxWOPxAIHbwSBdIQpwUIDQ">&#1064;&#1091;&#1082;&#1072;&#1090;&#1080; &#1089;&#1090;&#1086;&#1088;&#1110;&#1085;&#1082;&#1080; &#1090;&#1072;&#1082;&#1086;&#1102; &#1084;&#1086;&#1074;&#1086;&#1102;: &#1091;&#1082;&#1088;&#1072;&#1111;&#1085;&#1089;&#1100;&#1082;&#1072;</a></li></ul></div><div class="PA9J5"><div class="RXaOfd vQYuGf" role="button" tabindex="0"><div class="TWMOUc"> &#1047;&#1072; &#1084;&#1080;&#1085;&#1091;&#1083;&#1080;&#1081; &#1090;&#1080;&#1078;&#1076;&#1077;&#1085;&#1100;</div><span class="OmTIzf"></span></div><ul class="sa1toc ozatM"><li class="yNFsl"><a href="/search?q=russian+war+crimes&amp;sca_esv=593056060&amp;ie=UTF-8&amp;tbas=0&amp;source=lnt&amp;sa=X&amp;ved=0ahUKEwip3N6v7aKDAxWOPxAIHbwSBdIQpwUIDg">&#1041;&#1091;&#1076;&#1100;-&#1082;&#1086;&#1083;&#1080;</a></li><div class="kCrYT"><a href="/url?q=https://www.youtube.com/watch%3Fv%3DDgJwDQnO3tQ&amp;sa=U&amp;ved=2ahUKEwip3N6v7aKDAxWOPxAIHbwSBdIQuAJ6BAgIEAI&amp;usg=AOvVaw0MLpeO7xHvxhLRTcJsHX4U" data-ved="2ahUKEwip3N6v7aKDAxWOPxAIHbwSBdIQuAJ6BAgIEAI"><div class="lcJF1d Q6Xouf G6SP0b eeoFaf"><div style="width:120px;height:67px;position:static"><img class="h1hFNe" alt='&#1042;&#1110;&#1076;&#1077;&#1086; &#1079;&#1072; &#1079;&#1072;&#1087;&#1080;&#1090;&#1086;&#1084; "russian war crimes"' src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" style="width:120px;height:67px" id="dimg_7" data-deferred="1"></div><div class="S9HcI oz9fhd"></div><div class="S9HcI UhWgBb" style="background-size:36px"></div></div></a<div><div class="Gx5Zad fP1Qef xpd EtOod pkphOe"><div class="egMi0 kCrYT"><a href="/url?q=https://www.politico.eu/article/ex-russia-wagner-officer-russia-atrocities-ukraine-war-crimes-igor-salikov/&amp;sa=U&amp;ved=2ahUKEwip3N6v7aKDAxWOPxAIHbwSBdIQFnoECAcQAg&amp;usg=AOvVaw27Pl5Rx2tpYKel877iUa_Z" data-ved="2ahUKEwip3N6v7aKDAxWOPxAIHbwSBdIQFnoECAcQAg"><div class="DnJfK"><div class="j039Wc"><h3 class="zBAuLc l97dzf"><div class="BNeawe vvjwJb AP7Wnd">Ex-Wagner officer says Kremlin ordered 'atrocities' in Ukraine</div></h3></div><div class="sCuL3"><div class="BNeawe UPmit AP7Wnd lRVwie">www.politico.eu &#8250; article &#8250; ex-russia-wagner-of...</div></div></div></a></div><div class="kCrYT"><div><div class="BNeawe s3v9rd AP7Wnd"><div><div><div class="BNeawe s3v9rd AP7Wnd"><span class="r0bn4c rQMQod">3 &#1076;&#1085;&#1110; &#1090;&#1086;&#1084;&#1091;</span><span class="r0bn4c rQMQod"> · </span>Igor Salikov to tell ICC he witnessed war crimes and fled Russia after refusing an order to execute civilians.</div></div></div></div></div></div></div></div><div><div class="Gx5Zad fP1Qef xpd EtOod pkphOe"><div class="egMi0 kCrYT"><a href="/url?q=https://english.nv.ua/nation/former-russian-soldier-ready-to-testify-about-russian-crimes-in-ukraine-50378531.html&amp;sa=U&amp;ved=2ahUKEwip3N6v7aKDAxWOPxAIHbwSBdIQFnoECAYQAg&amp;usg=AOvVaw1XF62u3RlMondVTIUfC70h" data-ved="2ahUKEwip3N6v7aKDAxWOPxAIHbwSBdIQFnoECAYQAg"><div class="DnJfK"><div class="j039Wc"><h3 class="zBAuLc l97dzf"><div class="BNeawe vvjwJb AP7Wnd">Former Russian soldier ready to testify about Russian crimes in ...</div></h3></div><div class="sCuL3"><div class="BNeawe UPmit AP7Wnd lRVwie">english.nv.ua &#8250; Nation</div></div></div></a></div><div class="kCrYT"><div><div class="BNeawe s3v9rd AP7Wnd"><div><div><div class="BNeawe s3v9rd AP7Wnd"><span class="r0bn4c rQMQod">1 &#1076;&#1077;&#1085;&#1100; &#1090;&#1086;&#1084;&#1091;</span><span class="r0bn4c rQMQod"> · </span>Kyiv officials previously said Salikov has decided to cooperate with the Ukrainian investigation into apparent Russian war crimes. Please help us continue ...</div></div></div></div></div></div></div></div><div><div class="Gx5Zad fP1Qef xpd EtOod pkphOe"><div class="egMi0 kCrYT"><a href="/url?q=https://www.reuters.com/world/europe/un-decries-russias-failure-protect-ukraine-civilians-2023-12-19/&amp;sa=U&amp;ved=2ahUKEwip3N6v7aKDAxWOPxAIHbwSBdIQFnoECAUQAg&amp;usg=AOvVaw1lAyha4XwkyG-SUbBfAunI" data-ved="2ahUKEwip3N6v7aKDAxWOPxAIHbwSBdIQFnoECAUQAg"><div class="DnJfK"><div class="j039Wc"><h3 class="zBAuLc l97dzf"><div class="BNeawe vvjwJb AP7Wnd">UN decries Russia's failure to protect Ukraine civilians - Reuters</div></h3></div><div class="sCuL3"><div class="BNeawe UPmit AP7Wnd lRVwie">www.reuters.com &#8250; world &#8250; europe &#8250; un-decrie...</div></div></div></a></div><div class="kCrYT"><div><div class="BNeawe s3v9rd AP7Wnd"><div><div><div class="BNeawe s3v9rd AP7Wnd"><span class="r0bn4c rQMQod">3 &#1076;&#1085;&#1110; &#1090;&#1086;&#1084;&#1091;</span><span class="r0bn4c rQMQod"> · </span>UN rights chief says war crimes committed by Russian forces · More than 1,400 attacks against health since invasion - WHO · Russia accuses UN of "whitewashing" ...</div></div></div></div></div></div></div></div><div><div class="Gx5Zad fP1Qef xpd EtOod pkphOe"><div class="egMi0 kCrYT"><a href="/url?q=https://en.defence-ua.com/analysis/war_criminals_from_the_russian_federation_or_bureaucrats_from_the_un_who_holds_ukrainian_prisoners_of_war-8920.html&amp;sa=U&amp;ved=2ahUKEwip3N6v7aKDAxWOPxAIHbwSBdIQFnoECAIQAg&amp;usg=AOvVaw1BU56IOgH3soLqfvkW_vlF" data-ved="2ahUKEwip3N6v7aKDAxWOPxAIHbwSBdIQFnoECAIQAg"><div class="DnJfK"><div class="j039Wc"><h3 class="zBAuLc l97dzf"><div class="BNeawe vvjwJb AP7Wnd">War Criminals From the russian federation or Bureaucrats From the ...</div></h3></div><div class="sCuL3"><div class="BNeawe UPmit AP7Wnd lRVwie">en.defence-ua.com &#8250; analysis &#8250; war_criminals_f...</div></div></div></a></div><div class="kCrYT"><div><div class="BNeawe s3v9rd AP7Wnd"><div><div><div class="BNeawe s3v9rd AP7Wnd"><span class="r0bn4c rQMQod">2 &#1076;&#1085;&#1110; &#1090;&#1086;&#1084;&#1091;</span><span class="r0bn4c rQMQod"> · </span>We are talking about tens of thousands of Ukrainian prisoners of war, civilian hostages, and abducted children held in Russia and on the occupied Ukrainian ...</div></div></div></div></div></div></div></div><div><div class="Gx5Zad fP1Qef xpd EtOod pkphOe"><div class="egMi0 kCrYT"><a href="/url?q=https://www.rferl.org/a/ukraine-russia-bucha-killings-atrocities-condemnation/31784634.html&amp;sa=U&amp;ved=2ahUKEwip3N6v7aKDAxWOPxAIHbwSBdIQFnoECAsQAg&amp;usg=AOvVaw3lzArWH7_FQWGZQGTh6Erm" data-ved="2ahUKEwip3N6v7aKDAxWOPxAIHbwSBdIQFnoECAsQAg"><div class="DnJfK"><div class="j039Wc"><h3 class="zBAuLc l97dzf"><div class="BNeawe vvjwJb AP7Wnd">Global Condemnation Of Ukraine Killings Mounts - RFE/RL</div></h3></div><div class="sCuL3"><div class="BNeawe UPmit AP7Wnd lRVwie">www.rferl.org &#8250; ukraine-russia-bucha-killings-a...</div></div></div></a></div><div class="kCrYT"><div><div class="BNeawe s3v9rd AP7Wnd"><div><div><div class="BNeawe s3v9rd AP7Wnd"><span class="r0bn4c rQMQod">2 &#1076;&#1085;&#1110; &#1090;&#1086;&#1084;&#1091;</span><span class="r0bn4c rQMQod"> · </span>Evidence that Russian troops killed dozens of civilians in Ukraine has sparked cries of "war crimes" from the international community and calls for further ...</div></div></div></div></div></div></div></div><div><div class="Gx5Zad xpd EtOod pkphOe"><div class="K8tyEc"><div class="mEUgP"><span><div class="BNeawe">&#1055;&#1086;&#1074;&#8217;&#1103;&#1079;&#1072;&#1085;&#1110; &#1087;&#1086;&#1096;&#1091;&#1082;&#1086;&#1074;&#1110; &#1079;&#1072;&#1087;&#1080;&#1090;&#1080;</div></span></div></div><div class="x54gtf"></div><div><div class="gGQDvd iIWm4b"><a class="Q71vJc" href="/search?sca_esv=593056060&amp;ie=UTF-8&amp;tbs=qdr:w&amp;q=Russo-Ukrainian+War+Battles&amp;sa=X&amp;ved=2ahUKEwip3N6v7aKDAxWOPxAIHbwSBdIQ1QJ6BAgEEAw" data-ved="2ahUKEwip3N6v7aKDAxWOPxAIHbwSBdIQ1QJ6BAgEEAw"><accordion-entry-search-icon><span class="ieB2Dd"><img class="OEaqif" alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" style="max-width:20px;max-height:20px" id="dimg_13" data-deferred="1"></span></accordion-entry-search-icon><div class="kjGX2"><span><div class="BNeawe s3v9rd AP7Wnd lRVwie">Russo-Ukrainian War Battles</div></span></div></a></div></div><div class="x54gtf"></div><div><div class="gGQDvd iIWm4b"><a class="Q71vJc" href="/search?sca_esv=593056060&amp;ie=UTF-8&amp;tbs=qdr:w&amp;q=War+between+Russia+and+Ukraine&amp;sa=X&amp;ved=2ahUKEwip3N6v7aKDAxWOPxAIHbwSBdIQ1QJ6BAgEEA4" data-ved="2ahUKEwip3N6v7aKDAxWOPxAIHbwSBdIQ1QJ6BAgEEA4"><accordion-entry-search-icon><span class="ieB2Dd"><img class="OEaqif" alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" style="max-width:20px;max-height:20px" id="dimg_15" data-deferred="1"></span></accordion-entry-search-icon><div class="kjGX2"><span><div class="BNeawe s3v9rd AP7Wnd lRVwie">War between Russia and Ukraine</div></span></div></a></div></div><div class="x54gtf"></div><div><div class="gGQDvd iIWm4b"><a class="Q71vJc" href="/search?sca_esv=593056060&amp;ie=UTF-8&amp;tbs=qdr:w&amp;q=Makiivka+shooting&amp;sa=X&amp;ved=2ahUKEwip3N6v7aKDAxWOPxAIHbwSBdIQ1QJ6BAgEEBA" data-ved="2ahUKEwip3N6v7aKDAxWOPxAIHbwSBdIQ1QJ6BAgEEBA"><accordion-entry-search-icon><span class="ieB2Dd"><img class="OEaqif" alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" style="max-width:20px;max-height:20px" id="dimg_17" data-deferred="1"></span></accordion-entry-search-icon><div class="kjGX2"><span><div class="BNeawe s3v9rd AP7Wnd lRVwie">Makiivka shooting</div></span></div></a></div></div></div></div></body></html>
      `;

      const expectedUrls = [
        'https://www.politico.eu/article/ex-russia-wagner-officer-russia-atrocities-ukraine-war-crimes-igor-salikov/',
        'https://english.nv.ua/nation/former-russian-soldier-ready-to-testify-about-russian-crimes-in-ukraine-50378531.html',
        'https://www.reuters.com/world/europe/un-decries-russias-failure-protect-ukraine-civilians-2023-12-19/',
        'https://en.defence-ua.com/analysis/war_criminals_from_the_russian_federation_or_bureaucrats_from_the_un_who_holds_ukrainian_prisoners_of_war-8920.html',
        'https://www.rferl.org/a/ukraine-russia-bucha-killings-atrocities-condemnation/31784634.html'
      ];

      expect(extractLinks(html)).to.eql(expectedUrls);
    });
  });