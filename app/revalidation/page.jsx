import { revalidateTag } from 'next/cache';
import { SubmitButton } from '../../components/submit-button';
import { Markdown } from '../../components/markdown';

export const metadata = {
    title: 'On-Demand Revalidation'
};

const tagName = 'randomWiki';
const randomWikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/random/summary';
const maxExtractLength = 200;
const revalidateTTL = 60;

const explainer = `Emirates Airlines, headquartered in Dubai, is one of the global carriers that is very popular for its highly luxurious style of flying and its superior-to-the-rest services. Apart from Emirates which was established in 1985, the airline is now-a-days regarded as the biggest global powerhouse that links millions of passengers with more than 150 destinations around 6 continents (Rawashdeh et al., 2022).

Flow Chart of the Performance Management Process
<p className="text-lg">•	Step 1:Goal Setting: Employee and managers involvement in the goal setting exercise is crucial and they jointly work to develop SMART goals linked with the company’s strategic policies.</p>
<p className="text-lg">•	Step 2: Performance Monitoring: Managers are constantly responsible for employees' performance based on the pursuits of ongoing feedback, coaching, and performance evaluation.
</p>
<p className="text-lg">•	Step 3: Performance Evaluation: Formal performance evaluations are periodically commenced to check employee's success towards their targets and to give them summarized feedback.
</p>
<p className="text-lg">•	Step 4: Development Planning: While performance appraisals are done to determine the deficient areas for each individual, these are next utilized in creating development plans to accommodate workers' skills deficiency and development requirements
</p>
<p className="text-lg">•	Step 5: Small Bonuses and Appreciation: Workers with high results are appreciated by loyalty bonus systems, promotion to higher positions connected to their jobs as well as other rewards (Murphy, 2020).
</p>

<img src="https://lh3.googleusercontent.com/pw/AP1GczMjQORNBo2Wu0j-dhF0xjszE70TLWsC3Zg6HpbnZj5hueEB0l_FbYOm4oK8SBSHItzpChxlOh8MwVqoYLrbz-M47qP6ABjVaCtfHJZXbVWVr9ulrE4NL_6r-Sjy5EJM9-CtNOiF5svRY-XYO8vWhbGXPB_ZWi8UZPQBbzFP22KYLYR1XyI98eiBjTYaoZNCb14_crB43-hbc2DfiD1NoLYbsGD_nUWPRbzJxCxXM14oEfrDCrJAo-Vg3nlmcmDarmSd_2FQp7soGzUkH-y06ymJG26Iu03UJI0Fj5z8x_WgLvL59SHn33iL-Zlt0vezfDAnSiUUhQy6VIzQwD2WMlUbBeV3bCMVtIQY02hYqjNfTqlhqnXAzcsFB9-SMJt0fhcD2hQ8tnQ8_mXigjfhUmdwxTAOHABBs8pWtH86XrO4dNWAZuzwLp130-jpx6CUK5ACFMUgNcWd_C_lPKW8rOCQ7MTLM1bZBSZoNjzc2eLainJaLX9IoBvX7k27dhxqEnuCxISnF7G9ElBTClDi14gr2LeLE52wZfsCA-jDh9UovQaN-BwqLxsIYsZCBxTeszBjfmsuMEAX30_J3el_fSxLN_cm9klhws9Qln38cc1gsCli43GauzjWiHf7C9qEzIZZKwsF0we-z4S9BuVxj4MMcd-fObCoBpr2pG55PdfR_aWDBN2xK3MAIYXW6R2iJ6Ti6eu3azxlsJMBRUbLvw6xzS7TFfmlA8mOSUDVgrkdp-5v3J5X7M6Oa_-VyrVfWlygAQz7XlztHJJVBrv381uAP_CtymeOYhqwyXbRN-hMpnaVRJIJ2UyDdrO9mCRLcUwygIybFS_wCMeOMvs6Moir_y7hiHPWPYfca8u4GLfe65pOKXkuiqqKsOwby5Xzx1dKlc1frGgAwe3_adco7Vlnq4OjHZfFj3j-E15HQ0zcAmlpTQtx2lSbtCUn6A=w351-h607-s-no-gm?authuser=0" />

`;


export default async function Page() {
    async function revalidateWiki() {
        'use server';
        revalidateTag(tagName);
    }

    return (
        <>
            <h1>About Emirates Airlines</h1>
            <Markdown content={explainer} />
            <form className="mt-4" action={revalidateWiki}>
                <SubmitButton text="Click to Revalidate" />
            </form>
            <RandomWikiArticle />
        </>
    );
}

async function RandomWikiArticle() {
    const randomWiki = await fetch(randomWikiUrl, {
        next: { revalidate: revalidateTTL, tags: [tagName] }
    });

    const content = await randomWiki.json();
    let extract = content.extract;
    if (extract.length > maxExtractLength) {
        extract = extract.slice(0, extract.slice(0, maxExtractLength).lastIndexOf(' ')) + ' [...]';
    }

    return (
        <div className="bg-white text-neutral-600 card my-6 max-w-2xl">
            <div className="card-title text-3xl px-8 pt-8">{content.title}</div>
            <div className="card-body py-4">
                <div className="text-lg font-bold">{content.description}</div>
                <p className="italic">{extract}</p>
                <a target="_blank" rel="noopener noreferrer" href={content.content_urls.desktop.page}>
                    From Wikipedia
                </a>
            </div>
        </div>
    );
}
