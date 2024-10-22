const adjustVolume = (audioBuffer, volumeLevel) => {
    // Volume level 1.0 is original volume, 0.5 is half, 2.0 is double, etc.
    const factor = volumeLevel || 1.0;
    const adjustedBuffer = Buffer.from(audioBuffer).map(byte => byte * factor);
    return adjustedBuffer;
  };
  
  module.exports = { adjustVolume };