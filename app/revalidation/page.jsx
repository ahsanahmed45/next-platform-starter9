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
<h1>HR Department Overview</h1>

The Human Resources (HR) department at Emirates Airlines is the key contributor to the company's capability to attract, grow and retain the top performing employees, aiming to meet the goals of the company, its constantly increasing internally and externally. The primary task of the HR Department is to conduct recruitment, to train, to monitor performances, to maintain relationship with staff members, and also for the organizational development (Na Nan et al., 2020).
The roles provided by the HR department are as under,
•	Recruitment and Talent Acquisition: Together with the Human Resources (HR) team, it defines recruitment strategy, delivers its implementation, and performs job interviews in the direction of choosing candidates who possess the laid- down values of the Emirates airline and match its requirements. They provide counselling to new employees at every onset of the employment contract.
•	Training and Development: HRM explains the training programs that enable employee to gain skills, knowledge, and competencies. They provide means for professional development, and help each individual in attaining their personal goals.
•	Performance Management: HR department undertakes the responsibility of the performance management process, consisting of setting goals, conducting performance evaluations, and establishing the specific means of feedback. They work hand in glove with managers to implement competence-based evaluations of performance and identify unique problems and solutions (Baird et al., 2020).
•	Employee Relations: Human resources play the role of joining employees and their managers with the objective of successful resolution of complaints, conflicts and disciplinary actions for the employees in an impartial fashion. A healthy organization strives to maintain a positive workplace atmosphere and guarantee good employee morale and loyalty.
•	Compensation and Benefits: HR works on developing and implementing compensation and benefits plans: salary schemes, incentives, health insurance, bonuses, and other benefits with the primary goal of keeping the employees motivated. Their provision of competitive compensation plans helps in the recruitment and retention of the best talent (Dangol, 2021).
•	HR Policy Development: Human resources (HR) team develop and disseminate HR policies, procedures, and guidelines to make applied labour law and regulations compliant. Additionally, they render the function of the company's grievance officer to the managers and employees for HR-related matters (Rehman et al., 2021).
Job Description for a HR Position within the Department
Position Title: HR Manager – Mariam Suhail linkedin.com/in/Mariam suhail-6828a77a
1.	Job Tasks and Responsibilities:
2.	1.Recruitment and Selection: Assist in the completion of the full hiring cycle such as job postings, applicant screening, interviewing candidates, and negotiations of hiring offers. Work hand-in-hand with hiring managers to see to the identification of staffing requirements, and immediately hire qualified candidates when vacancies arise (Taneja et al., 2023).
3.	2.Employee Onboarding and Orientation: Work with a team to arrange new employee orientation programs, so that the employees have a seamless joining into the organization. Offer advice for recent hires on how to get acquainted with organizational processes, agreements, as well as benefits.
4.	Performance Management: Manage the performance appraisal process involves taking various processes like goal setting, review as well as providing feedback to employees and supervisors. Back up the implementation of performance improvement plans where Bideford is needed (Al suwadi et al., 2021).
5.	Training and Development: Evaluate the training needs, develop detailed training plans, and conduct training sessions that will lead to an increase of skills and competencies of the employees. Measure training comparability and determine training outcomes.
6.	Employee Relations: Work as a hub of employee communication where the staff can approach me for any issues, complaints, or requests. Investigate employee relation problems and work with management to figure out ways to solve the conflict and keep the good mood.



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
