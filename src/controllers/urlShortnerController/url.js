const { shortURl } = require("../../models/Url");
const { nanoid } = require("nanoid");

const urlShortnerController = {
  create: async function (req, res) {
    try {
      const { url } = req.body;
      const shortId = nanoid(8);

      const CreateUrl = await shortURl.create({
        shortId,
        redirect: url,
        visitHistory: [],
      });
      return res.json({ id: shortId });
      //   const { shortId, redirect, visitHistory } = req.body;
    } catch (error) {
      console.log(error);
    }
  },
  getUrl: async function (req, res) {
    try {
      const shortUrlId = req.params.shortid;
      const getUrl = await shortURl.findOne({ where: { shortId: shortUrlId } });

      const newVisitHistory = JSON.parse(getUrl.dataValues.visitHistory);
      newVisitHistory.push({
        timestamp: Date.now(),
      });
      const data = await shortURl.update(
        { visitHistory: newVisitHistory },
        { where: { shortId: shortUrlId } }
      );
      res.redirect(getUrl.redirect);
    } catch (err) {
      console.log("errr", err);
    }
  },
  getAnalytics: async function (req, res) {
    try {
      const shortUrlId = req.params.shortid;
      const getAnalytics = await shortURl.findOne({
        where: { shortId: shortUrlId },
      });
      const totalVisits = JSON.parse(getAnalytics.dataValues.visitHistory);
      return res.json({
        length: totalVisits.length,
        url: getAnalytics.dataValues.shortId,
        timestamp: totalVisits,
      });
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = { urlShortnerController };
