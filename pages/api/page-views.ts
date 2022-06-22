// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { google } from 'googleapis'

type Data = {
  pageViews: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const startDate = req.query.startDate || '2020-01-01';
  const slug = req.query.slug;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
      },
      scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
    });

    const analytics = google.analytics({
      auth,
      version: 'v3',
    });

    // @ts-ignore
    const response = await analytics.data.ga.get({
      'end-date': 'today',
      ids: `ga:${process.env.GOOGLE_ANALYTICS_VIEW_ID}`,
      metrics: 'ga:pageviews',
      dimensions: 'ga:pagePath',
      filters: `ga:pagePath==${slug}`,
      'start-date': startDate,
    });

    // @ts-ignore
    const pageViews = response?.data?.totalsForAllResults['ga:pageviews'];
  
    res.status(200).json({
      pageViews
    });
  } catch (err) {
    console.log(err)
    return res.status(500);
  }
}
