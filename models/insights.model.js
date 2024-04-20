import mongoose from "mongoose";

const insightSchema = new mongoose.Schema({
  end_year: { type: String },
  intensity: { type: Number },
  sector: { type: String },
  topic: { type: String },
  insight: { type: String },
  url: { type: String },
  region: { type: String },
  start_year: { type: String },
  impact: { type: String },
  added: { type: String },
  published: { type: String },
  country: { type: String },
  relevance: { type: Number },
  pestle: { type: String },
  source: { type: String },
  title: { type: String },
  likelihood: { type: Number },
});

// Create the model
// const Insight = models.Insight || mongoose.model("Insight", insightSchema);
const Insight = mongoose.model("Insights", insightSchema);

export default Insight;
