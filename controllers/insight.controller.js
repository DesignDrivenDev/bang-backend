import Insight from "../models/insights.model.js";

export const getInsights = async (req, res) => {
  try {
    const insights = await Insight.find({});
    res.status(200).json(insights);
    // res.send(insights);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getInsightByID = async (req, res) => {
  try {
    const { id } = req.params;
    const insight = await Insight.findById(req.params.id);
    res.status(200).json(insight);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// module.exports = { getInsights, getInsightByID };
