// 模拟图片上传API
export interface UploadResponse {
  success: boolean
  url: string
  filename: string
  size: number
  message?: string
}

/**
 * 模拟图片上传到服务器
 * @param file 要上传的文件
 * @returns Promise<UploadResponse>
 */
export const uploadImage = async (file: File): Promise<UploadResponse> => {
  return new Promise((resolve, reject) => {
    // 模拟网络延迟
    setTimeout(() => {
      try {
        // 模拟上传成功
        const filename = `uploaded_${Date.now()}_${file.name}`
        const url = `https://picsum.photos/512/512?random=${Date.now()}`
        
        resolve({
          success: true,
          url,
          filename,
          size: file.size
        })
      } catch (error) {
        reject({
          success: false,
          url: '',
          filename: '',
          size: 0,
          message: 'Upload failed'
        })
      }
    }, 1000) // 模拟1秒上传时间
  })
}

/**
 * 模拟批量上传图片
 * @param files 要上传的文件数组
 * @returns Promise<UploadResponse[]>
 */
export const uploadImages = async (files: File[]): Promise<UploadResponse[]> => {
  const uploadPromises = files.map(file => uploadImage(file))
  return Promise.all(uploadPromises)
}

/**
 * 验证文件类型
 * @param file 文件对象
 * @returns boolean
 */
export const validateImageFile = (file: File): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/bmp', 'image/webp']
    const maxSize = 10 * 1024 * 1024 // 10MB
    
    // 检查文件类型
    if (!allowedTypes.includes(file.type)) {
      reject(new Error('Unsupported file type. Please upload an image in JPEG, JPG, PNG, BMP, or WebP format.'))
      return
    }
    
    // 检查文件大小
    if (file.size > maxSize) {
      reject(new Error('Image file size cannot exceed 10MB'))
      return
    }
    
    // 检查图像分辨率
    const img = new Image()
    img.onload = () => {
      const width = img.width
      const height = img.height
      
      // 检查分辨率范围 [360, 2000]
      if (width < 360 || width > 2000 || height < 360 || height > 2000) {
        reject(new Error('Image resolution must be between 360x360 and 2000x2000 pixels'))
        return
      }
      
      // 检查PNG透明通道（如果支持的话）
      if (file.type === 'image/png') {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        if (ctx) {
          canvas.width = width
          canvas.height = height
          ctx.drawImage(img, 0, 0)
          const imageData = ctx.getImageData(0, 0, width, height)
          const data = imageData.data
          
          // 检查是否有透明像素
          for (let i = 3; i < data.length; i += 4) {
            if (data[i] < 255) {
              reject(new Error('PNG format does not support transparent channels, please use a non-transparent PNG image'))
              return
            }
          }
        }
      }
      
      resolve(true)
    }
    
    img.onerror = () => {
      reject(new Error('Failed to read image file, please ensure the file format is correct'))
    }
    
    img.src = URL.createObjectURL(file)
  })
}

/**
 * 创建文件预览URL
 * @param file 文件对象
 * @returns string
 */
export const createFilePreview = (file: File): string => {
  return URL.createObjectURL(file)
}

/**
 * 清理文件预览URL
 * @param url 预览URL
 */
export const revokeFilePreview = (url: string): void => {
  URL.revokeObjectURL(url)
} 