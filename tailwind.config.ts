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
				dark: '#665ffa',          // [统一] 主品牌色。用于所有重要的按钮、链接和徽章。
				medium: '#7D72FF',         // [统一] 悬停亮紫色。用于交互元素的悬停状态。
				light: '#F0EEFF',          // [统一] 高亮淡紫色。用于需要突出显示的区域背景。
				pale: '#F5F7FA',          // 保持不变。页面主背景色。
				accent: '#665ffa',         // [统一] 与主品牌色一致。
				h1: '#665ffa',              // [占位色] H1标题的备用颜色，用于不支持渐变的旧浏览器。
				h1p: '#4A5568',             // [占位色] H2标题的备用颜色，用于不支持渐变的旧浏览器。
				h1start: '#665ffa',        // [新增] H1/H2标题渐变的起始颜色。
				h1end: '#4004ba',          // [新增] H1/H2标题渐变的结束颜色。
				nav: '#FFFFFF',             // 保持不变。纯白导航。
				navtext: '#4A5568',         // 保持不变。清晰、沉稳的导航文字颜色。
				badge: '#665ffa',            // [统一] 品牌紫徽章。
				button: '#665ffa',          // [统一] 主按钮颜色。
				buttontext: '#FFFFFF',      // 保持不变。
				buttonhover: '#665ffa',      // [统一] 悬停亮紫色。
				footer: '#665ffa',          // [统一] 页脚中的主色，可用于标题或重要链接。
				footertext: '#718096',      // 保持不变。
				footerhover: '#4004ba',      // [调整] 页脚链接悬停时变为深紫色，提供沉稳的反馈。
				footerbg: '#F5F7FA',        // 保持不变。
				footerborder: '#E2E8F0',     // 保持不变。
				footerborderhover: '#665ffa',// [统一] 链接或带边框元素的悬停颜色。
				footerborderbg: '#F5F7FA',  // 保持不变。
				logo: '#665ffa',            // [统一] 主品牌色Logo。
				parameters: '#4004ba',      // [调整] 深紫色，适合次要交互点。
				backtotop: '#665ffa',       // [统一] 返回顶部按钮。
				pricing: '#FFFFFF',         // 保持不变。
				pricingtext: '#718096',    // 保持不变。
				pricinghover: '#665ffa',    // [统一] 悬停时边框或标题变为此颜色。
				pricingborder: '#E2E8F0',    // 保持不变。
				pricingPopular: '#F0EEFF',  // [统一] 热门套餐背景使用高亮淡紫色。
				pricingborderhover: '#665ffa',// [统一] 悬停时边框颜色变为品牌紫。
				pricingborderbg: '#FFFFFF', // 保持不变。
				pricingbordertext: '#4A5568',// 保持不变。
				pricingborderhovertext: '#665ffa',// [统一] 悬停时，文字颜色也变为品牌紫。
				pricingborderbghover: '#FFFFFF',// 保持不变。
				pricingborderborder: '#E2E8F0', // 保持不变。
				inputtext: '#A0AEC0', // 保持不变。
				inputtextfilled: '#2D3748', // 保持不变。
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