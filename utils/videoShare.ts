/**
 * 从视频URL提取短ID
 * 输入: https://resp.infinitetalkai.com/topic_1/infinitetalk/2512/18/3423.mp4
 * 输出: "251218-3423"
 * 
 * @param url 视频的完整URL
 * @returns 短ID字符串，格式为 {年}{月}-{视频ID}
 */
export const getShareVideoId = (url: string): string => {
  if (!url) {
    throw new Error('URL is empty')
  }
  
  // 尝试匹配 topic_1/infinitetalk/{年}/{月}/{视频ID}.mp4 格式
  // 支持多种域名：resp.infinitetalkai.com, resp.wan2video.com 等
  const match = url.match(/topic_1\/infinitetalk\/(\d+)\/(\d+)\/(\d+)\.mp4/)
  if (match) {
    return `${match[1]}${match[2]}-${match[3]}`
  }
  
  // 如果匹配失败，记录日志以便调试
  console.warn('Failed to extract share video ID from URL:', url)
  throw new Error(`Invalid URL format: ${url}`)
}

/**
 * 从短ID还原完整视频URL
 * @param year 年份，如 "2512"
 * @param month 月份，如 "18"
 * @param videoId 视频ID，如 "3423"
 * @returns 完整的视频URL
 */
export const buildShareVideoUrl = (year: string, month: string, videoId: string): string => {
  return `https://resp.infinitetalkai.com/topic_1/infinitetalk/${year}/${month}/${videoId}.mp4`
}

/**
 * 从短ID解析出年月和视频ID
 * @param shareId 短ID，格式为 "251218-3423"
 * @returns 包含 year, month, videoId 的对象
 */
export const parseShareVideoId = (shareId: string): { year: string; month: string; videoId: string } => {
  const match = shareId.match(/^(\d{4})(\d{2})-(\d+)$/)
  if (!match) throw new Error('Invalid share ID format')
  return {
    year: match[1],
    month: match[2],
    videoId: match[3]
  }
}

/**
 * 构建短链接（分享链接）
 * @param videoUrl 视频的完整URL
 * @returns 短链接URL，格式为 https://christmas.wan2video.com/christmas/share/{短ID}
 */
export const buildShareUrl = (videoUrl: string): string => {
  try {
    const videoId = getShareVideoId(videoUrl)
    return `https://christmas.wan2video.com/christmas/share/${videoId}`
  } catch (error) {
    console.error('Failed to build share URL:', error)
    // 降级方案：使用完整URL
    return `https://cfsource.wan2video.com/wan2video/christmas/christmas.html?video=${encodeURIComponent(videoUrl)}`
  }
}


