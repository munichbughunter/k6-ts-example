import { browser } from 'k6/experimental/browser';
import { Options } from 'k6/options';
import { check } from 'k6';
import http from 'k6/http';

export const options: Options = {
    scenarios: {
        browser: {
            executor: 'constant-vus',
            exec: 'browserTest',
            vus: 3,
            duration: '10s',
            options: {
                browser: {
                    type: 'chromium',
                },
            },
        },
        news: {
            executor: 'constant-vus',
            exec: 'news',
            vus: 500,
            duration: '1m',
        },
    },
};

export async function browserTest() {
    const page = browser.newPage();
    try {
        await page.goto('https://test.k6.io/browser.php');
        page.locator('#checkbox1').check();

        check(page, {
            'checkbox is checked': p => p.locator('#checkbox-info-display').textContent() === 'Thanks for checking the box',
        });
    } finally {
        page.close();
    }
};

export async function news() {
    const res = http.get('https://test.k6.io/news.php');

    check(res, {
        'status is 200': (r) => r.status === 200,
    });
}
// My First Try

// export default async function() {
//     const page = browser.newPage(); 
//     try {
//         await page.goto('https://test.k6.io/');
//         page.screenshot( { path: 'screenshots/screenshot.png' });
//     } finally {
//         page.close();
//     }
// }

