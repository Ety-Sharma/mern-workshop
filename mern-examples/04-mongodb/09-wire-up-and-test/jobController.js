import Job from "../Job.js";

export const getJobs = async (req, res) => {
  res.json(await Job.find().sort({ createdAt: -1 }));      // newest first
};

export const getJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) return res.status(404).json({ message: "Not found" });
  res.json(job);
};

export const addJob = async (req, res) => {
  const { company, ctc, status } = req.body;
  res.status(201).json(await Job.create({ company, ctc, status }));
};

export const updateJob = async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!job) return res.status(404).json({ message: "Not found" });
  res.json(job);
};

export const deleteJob = async (req, res) => {
  const job = await Job.findByIdAndDelete(req.params.id);
  if (!job) return res.status(404).json({ message: "Not found" });
  res.status(204).end();
};
