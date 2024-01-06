/*global describe, it*/
import expect from 'expect.js'

import splitIntoSentences from '../article-tokenizer.mjs'

describe('splitIntoSentences', () => {
    it('splits parapgraph into sentences', () => {
        const article = `A man claiming to be a former Russian colonel and ex-member of the Wagner paramilitary group who fought in Ukraine and has since defected said he witnessed war crimes and child abductions.



        Igor Salikov, who says he served in the Russian military and in the Wagner Group (which is funded by the Kremlin) for 25 years, arrived in the Netherlands on Monday to testify about alleged war crimes committed by Moscow during its war on Ukraine before the Hague-based International Criminal Court (ICC), Dutch public broadcaster NPO1 reported.



        “I witnessed atrocities against civilians,” the 60-year-old said during an interview, adding that he saw prisoners of war being abused and executed and children being abducted.



        “I have seen people from the secret services take large numbers of children without parents across the border into Belarus,” Salikov said.`;

        const expected = [
            'A man claiming to be a former Russian colonel and ex-member of the Wagner paramilitary group who fought in Ukraine and has since defected said he witnessed war crimes and child abductions.',
            'Igor Salikov, who says he served in the Russian military and in the Wagner Group (which is funded by the Kremlin) for 25 years, arrived in the Netherlands on Monday to testify about alleged war crimes committed by Moscow during its war on Ukraine before the Hague-based International Criminal Court (ICC), Dutch public broadcaster NPO1 reported.',
            '“I witnessed atrocities against civilians,” the 60-year-old said during an interview, adding that he saw prisoners of war being abused and executed and children being abducted.',
            '“I have seen people from the secret services take large numbers of children without parents across the border into Belarus,” Salikov said.'
        ]
        expect(splitIntoSentences(article)).to.eql(expected);
    })

    it('removes newline inside the sentence', () => {
        const article = `
        '“I witnessed atrocities against civilians,” the 60-year-old said during an interview, adding that he saw prisoners of war being abused and executed
        and children being abducted.



        “I have seen people from the secret services take large numbers of children without parents across the border into Belarus,” Salikov said.`

        const expected = [
            '“I witnessed atrocities against civilians,” the 60-year-old said during an interview, adding that he saw prisoners of war being abused and executed and children being abducted.',
            '“I have seen people from the secret services take large numbers of children without parents across the border into Belarus,” Salikov said.'
        ]
        expect(splitIntoSentences(article)).to.eql(expected);
    })

    it('removes empty sentences', () => {
        const article = `
        'Salikov said he fled the Russian forces after refusing an order to execute civilians, and that he now wants to report what he saw to the ICC because he has “lost faith in the Russian cause.”



        He said he was also in Ukraine when the Kremlin’s forces invaded the eastern Donbas region in 2014, when he saw similar abuses, with “civilians being threatened and murdered.”`

        const expected = [
            'Salikov said he fled the Russian forces after refusing an order to execute civilians, and that he now wants to report what he saw to the ICC because he has “lost faith in the Russian cause.”',
            'He said he was also in Ukraine when the Kremlin’s forces invaded the eastern Donbas region in 2014, when he saw similar abuses, with “civilians being threatened and murdered.”'
        ]
        expect(splitIntoSentences(article)).to.eql(expected);
    })

    it('handles three dots', () => {
        const article = `The situation is critical because representatives of the UN, OSCE, International Committee of the Red Cross (ICRC), Human Rights Watch, Amnesty International, and others do not have access to captured Ukrainian citizens... The russians refuse to inspect the conditions of detention of prisoners.`;

        const expected = [
            'The situation is critical because representatives of the UN, OSCE, International Committee of the Red Cross (ICRC), Human Rights Watch, Amnesty International, and others do not have access to captured Ukrainian citizens.',
            'The russians refuse to inspect the conditions of detention of prisoners.'
        ]
        expect(splitIntoSentences(article)).to.eql(expected);
    });
});