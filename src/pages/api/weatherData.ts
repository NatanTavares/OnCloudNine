import { NextApiRequest, NextApiResponse } from "next";
import { api } from "../../services/api";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const cityName: string = req.body.cityName;
      const { data } = await api.get(
        `weather?key=${process.env.HGBRASIL_KEY}&city_name=${cityName}`
      );
      return res.json({ data });
    } catch (error) {
      return res.json({ error: "Failed request for weather data" });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
};
