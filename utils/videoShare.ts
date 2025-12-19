/**
 * 从视频URL中提取短ID用于分享
 * 支持多种URL格式，提取唯一标识符
 * 
 * @param url 视频的完整URL
 * @returns 短ID字符串
 */
export const getShareVideoId = (url: string): string => {
  try {
    if (!url) {
      throw new Error('URL is empty')
    }

    // 方案1: 如果URL包含路径结构，提取路径部分
    // 例如: https://resp.wan2video.com/wan2ai/video/xxx.mp4
    // 或者: https://resp.wan2video.com/topic_1/infinitetalk/2512/18/3423.mp4
    const urlObj = new URL(url)
    const pathname = urlObj.pathname
    
    // 尝试匹配类似 /topic_1/infinitetalk/{年}/{月}/{视频ID}.mp4 的格式
    const match1 = pathname.match(/topic_1\/infinitetalk\/(\d+)\/(\d+)\/(\d+)\.mp4/)
    if (match1) {
      return `${match1[1]}${match1[2]}-${match1[3]}`
    }
    
    // 尝试匹配类似 /wan2ai/video/{视频ID}.mp4 的格式
    const match2 = pathname.match(/wan2ai\/video\/([^\/]+)\.mp4/)
    if (match2) {
      return match2[1].replace(/\.(mp4|webm)$/, '')
    }
    
    // 尝试匹配类似 /wan2video/christmas/... 的格式
    const match3 = pathname.match(/wan2video\/christmas\/([^\/]+)\.mp4/)
    if (match3) {
      return match3[1]
    }
    
    // 方案2: 提取文件名（去除扩展名）
    const filename = pathname.split('/').pop() || ''
    if (filename && filename.includes('.')) {
      return filename.replace(/\.(mp4|webm|mov)$/i, '')
    }
    
    // 方案3: 如果以上都不匹配，使用URL的hash或编码
    // 使用base64编码URL的一部分作为短ID
    const urlHash = btoa(url).replace(/[+/=]/g, '').substring(0, 16)
    return urlHash
    
  } catch (error) {
    console.error('Failed to extract share video ID:', error)
    // 降级方案：使用URL的简单编码
    try {
      return btoa(url).replace(/[+/=]/g, '').substring(0, 16)
    } catch {
      // 最后的降级方案：使用时间戳
      return Date.now().toString(36)
    }
  }
}

/**
 * 构建短链接
 * @param videoUrl 视频的完整URL
 * @returns 短链接URL
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

