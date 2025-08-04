import type { Config } from 'tailwindcss'
import { h } from 'vue'

export default {
    darkMode: ['class'],
    content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
  	extend: {
  		colors: {
  			theme: '#1D5FCC',//主题颜色
  			blue: {
   				 // --- 核心品牌色 (保持不变, 但在午夜紫背景下更显活力) ---
				dark: '#665ffa',          // [主品牌色] 用于最重要的按钮、链接和高亮元素，作为视觉焦点。
				medium: '#7D72FF',         // [悬停亮紫色] 提供明亮、积极的交互反馈。

				// --- 全新“午夜紫”背景体系 ---
				pale: '#191825',          // [午夜紫-主背景] 核心背景色。深邃、温暖，带有紫色底调，高级且护眼。
				light: '#2E2C44',          // [午夜紫-高亮背景] 一个更亮的紫色调背景，用于热门套餐等需要“优雅”突出的区域。
				
				// --- 标题与渐变 (已恢复并优化) ---
				h1: '#665ffa',              // [H1备用色] 在不支持渐变的浏览器中，使用渐变的起始亮色作为优雅降级。
				h1p: '#E9E8F2',             // [H2/副标题] 为保证小号标题可读性，建议使用高对比度的柔和白色。
				h1start: '#665ffa',        // [H1渐变起始] 已恢复。
				h1end: '#4004ba',          // [H1渐变结束] 已恢复。
				// CSS实现建议: h1 { background: linear-gradient(to right, #665ffa, #4004ba); -webkit-background-clip: text; background-clip: text; color: transparent; }

				// --- 文本颜色 ---
				maintext: '#E9E8F2',        // [新增-主文本] 柔和的薰衣草白，清晰易读且不刺眼，用于正文、导航文字等。
				secondarytext: '#9893B4',   // [新增-次要文本] 柔和的灰紫色，用于描述、辅助信息等，与主文本形成优雅对比。

				// --- 导航栏 ---
				nav: '#242235',             // [午夜紫-导航栏背景] 比主背景稍亮的“浮动”表面色，营造层次感。
				navtext: '#E9E8F2',         // 使用主文本颜色。

				// --- 组件 ---
				badge: '#665ffa',            // [徽章] 品牌紫，在深色背景上非常醒目。
				button: '#665ffa',          // [按钮] 主按钮。
				buttontext: '#FFFFFF',      // [按钮文字] 纯白在品牌紫上对比度最佳。
				buttonhover: '#7D72FF',      // [按钮悬停] 更亮的紫色。

				// --- 页脚 ---
				footer: '#665ffa',          // [页脚链接] 页脚中的重要链接。
				footertext: '#9893B4',      // 使用次要文本颜色。
				footerhover: '#7D72FF',      // 页脚链接悬停时变为更亮的紫色。
				footerbg: '#191825',        // 与页面主背景色统一，实现无缝感。
				footerborder: '#242235',     // 使用“表面”颜色作为分割线，微妙而清晰。
				
				// --- 其他元素 ---
				logo: '#665ffa',            // [Logo] 品牌色。
				parameters: '#4004ba',      // [次要交互点] 使用深紫色，沉稳且不抢戏。
				backtotop: '#665ffa',       // [返回顶部] 使用主品牌色。
				
				// --- 定价卡片 (采用全新层次感设计) ---
				pricing: '#242235',         // [卡片背景] 使用“浮动”表面色。
				pricingtext: '#9893B4',    // [卡片描述文字] 使用次要文本颜色。
				pricinghover: '#665ffa',    // 悬停时边框或标题变为品牌色。
				pricingborder: 'transparent',// [边框] 默认使用透明边框，依靠背景色和阴影区分，更现代。
				pricingPopular: '#2E2C44',  // [热门套餐背景] 使用“高亮背景色”，并可配合品牌色边框来强化。
				
				// --- 定价卡片交互 ---
				pricingborderhover: '#665ffa',// 悬停时边框颜色变为品牌紫。
				pricingbordertext: '#E9E8F2',// 卡片内主要文字。
				pricingborderhovertext: '#665ffa',// 悬停时文字变为品牌紫。

				// --- 输入框 ---
				inputtext: '#9893B4',       // [输入框提示词] 使用次要文本颜色。
				inputtextfilled: '#E9E8F2', // [输入框已填写文字] 使用主文本颜色。
				
				// --- 分辨率选择 ---
				resolutionlabel: '#665ffa', // [分辨率选择标签] 使用主文本颜色作为标签文字。
				resolutionoption: '#665ffa', // [分辨率选择选项] 使用次要文本颜色作为选项文字。
				resolutionoptionselected: '#665ffa', // [分辨率选择已选选项] 使用主文本颜色作为已选中的选项文字。
				
				// --- 比例选择 ---
				aspectlabel: '#665ffa', // [比例选择标签] 使用主文本颜色作为标签文字。
				aspectoption: '#665ffa', // [比例选择选项] 使用次要文本颜色作为选项文字。
				aspectoptionselected: '#665ffa', // [比例选择已选选项] 使用主文本颜色作为已选中的选项文字。
 			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))',
  				hover: 'hsl(var(--primary-hover))',
  				light: 'hsl(var(--primary-light))',
  				dark: 'hsl(var(--primary-dark))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))',
  				hover: 'hsl(var(--secondary-hover))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))',
  				hover: 'hsl(var(--muted-hover))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))',
  				hover: 'hsl(var(--accent-hover))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))',
  				hover: 'hsl(var(--destructive-hover))'
  			},
  			success: {
  				DEFAULT: 'hsl(var(--success))',
  				foreground: 'hsl(var(--success-foreground))',
  				hover: 'hsl(var(--success-hover))'
  			},
  			warning: {
  				DEFAULT: 'hsl(var(--warning))',
  				foreground: 'hsl(var(--warning-foreground))',
  				hover: 'hsl(var(--warning-hover))'
  			},
  			info: {
  				DEFAULT: 'hsl(var(--info))',
  				foreground: 'hsl(var(--info-foreground))',
  				hover: 'hsl(var(--info-hover))'
  			},
  			border: 'hsl(var(--border))',
  			input: {
  				DEFAULT: 'hsl(var(--input))',
  				hover: 'hsl(var(--input-hover))',
  				focus: 'hsl(var(--input-focus))'
  			},
  			ring: {
  				DEFAULT: 'hsl(var(--ring))',
  				offset: 'hsl(var(--ring-offset))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))',
  				'6': 'hsl(var(--chart-6))',
  				'7': 'hsl(var(--chart-7))',
  				'8': 'hsl(var(--chart-8))'
  			}
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.5s ease-out forwards',
  			'slide-up': 'slideUp 0.5s ease-out forwards',
  			'slide-in-right': 'slideInRight 0.5s ease-out forwards',
  			'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
  			'zoom-in': 'zoomIn 0.5s ease-out forwards'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			slideUp: {
  				'0%': {
  					opacity: '0',
  					transform: 'translate3d(0, 30px, 0)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translate3d(0, 0, 0)'
  				}
  			},
  			slideInRight: {
  				'0%': {
  					opacity: '0',
  					transform: 'translate3d(30px, 0, 0)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translate3d(0, 0, 0)'
  				}
  			},
  			slideInLeft: {
  				'0%': {
  					opacity: '0',
  					transform: 'translate3d(-30px, 0, 0)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translate3d(0, 0, 0)'
  				}
  			},
  			zoomIn: {
  				'0%': {
  					opacity: '0',
  					transform: 'scale3d(0.95, 0.95, 1)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'scale3d(1, 1, 1)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  			xl: 'var(--radius-lg)',
  			'2xl': 'var(--radius-xl)',
  			full: 'var(--radius-full)'
  		},
  		boxShadow: {
  			'sm': 'var(--shadow)',
  			'lg': 'var(--shadow-lg)',
  			'xl': 'var(--shadow-xl)',
  			'2xl': 'var(--shadow-2xl)'
  		}
  	}
  },
} satisfies Config 