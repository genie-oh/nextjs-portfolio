import { NextApiRequest, NextApiResponse } from "next";

import { GoogleSpreadsheet } from "google-spreadsheet";
import dateFormat from "dateformat";

//@TODO what logger can used on vercel hosting?
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const rowData = {
    NAME: req.body.NAME,
    EMAIL: req.body.EMAIL,
    MESSAGE: req.body.MESSAGE,
    DATE: dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
  };

  //-- send message to google sheet
  const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
  const SHEET_ID = process.env.REACT_APP_SHEET_ID;
  const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
  const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY.replace(
    /\\n/g,
    "\n",
  );

  const googleSheetService = new GoogleSpreadsheet(SPREADSHEET_ID);

  try {
    await googleSheetService.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    });
    await googleSheetService.loadInfo();

    const sheet = googleSheetService.sheetsById[SHEET_ID];
    await sheet.addRow(rowData);

    res.status(200).json({ success: true });
  } catch (e) {
    //@TODO what logger can used on vercel hosting?
    console.log(e);
    res.status(500).send({ success: false });
  }
};
