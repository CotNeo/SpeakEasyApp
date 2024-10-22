const { zoomTeamsService } = require('../services/zoomTeamsService');

// Zoom veya Teams ile bağlantı kurma işlemi
const connectZoomTeams = async (req, res) => {
  const { platform, meetingId } = req.body;

  try {
    const connectionInfo = await zoomTeamsService(platform, meetingId);
    res.json(connectionInfo);
  } catch (error) {
    res.status(500).json({ message: 'Connection failed', error });
  }
};

module.exports = { connectZoomTeams };