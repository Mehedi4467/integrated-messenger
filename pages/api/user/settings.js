import axios from 'axios';
export default async function handler(req, res) {
  const {
    query: { phone, client_id, token },
    headers,
  } = req;
  if (
    phone != '' &&
    token != '' &&
    headers.token === `${process.env.NEXT_PUBLIC_API_TOKEN}`
  ) {
    const { status, statusText, data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/dashboard/view/user/details/settings?client_id=${client_id}&phone=${phone}`,
      {
        headers: {
          token: `${process.env.NEXT_PUBLIC_APP_TOKEN}`,
          'User-Agent': `${headers['user-agent']}`,
          'Access-Token': token,
        },
      },
    );
    if (status === 200 && statusText === 'OK') {
      return res.status(200).json(data?.result);
    } else {
      res.status(400).json(data);
    }
  } else {
    res.status(400).json('data not found');
  }
}
