const axios = require('axios');
const config = require('../config/config');

const zoomTeamsService = async (platform, meetingId) => {
  let apiUrl = '';
  let apiKey = '';
  let apiSecret = '';

  if (platform === 'zoom') {
    apiUrl = `https://api.zoom.us/v2/meetings/${meetingId}`;
    apiKey = config.apiKeys.zoomApiKey;
    apiSecret = config.apiKeys.zoomApiSecret;
  } else if (platform === 'teams') {
    apiUrl = `https://api.microsoft.com/teams/v1/meetings/${meetingId}`;
    apiKey = config.apiKeys.teamsApiKey;
    // Teams için API secret yok
  } else {
    throw new Error('Unsupported platform');
  }

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`${platform} connection error:`, error);
    throw new Error(`Failed to connect to ${platform}`);
  }
};

module.exports = { zoomTeamsService };