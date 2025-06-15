
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				chess: {
					ivory: 'hsl(var(--foreground))',
					charcoal: 'hsl(var(--background))',
					mahogany: 'hsl(var(--primary))',
					gold: 'hsl(var(--primary))',
					light: 'hsl(var(--muted-foreground))',
					dark: 'hsl(var(--card))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				'fade-up': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-down': {
					from: { opacity: '0', transform: 'translateY(-20px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'chess-float': {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'25%': { transform: 'translateY(-10px) rotate(90deg)' },
					'50%': { transform: 'translateY(-5px) rotate(180deg)' },
					'75%': { transform: 'translateY(-15px) rotate(270deg)' }
				},
				'chess-pulse': {
					'0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.05)' }
				},
				'chess-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(217, 183, 119, 0.3)' 
					},
					'50%': { 
						boxShadow: '0 0 20px rgba(217, 183, 119, 0.6), 0 0 30px rgba(217, 183, 119, 0.4)' 
					}
				},
				'piece-dance': {
					'0%, 100%': { transform: 'translateY(0) rotateY(0deg)' },
					'33%': { transform: 'translateY(-8px) rotateY(120deg)' },
					'66%': { transform: 'translateY(-4px) rotateY(240deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-up': 'fade-up 0.8s ease-out',
				'fade-down': 'fade-down 0.6s ease-out',
				'chess-float': 'chess-float 8s ease-in-out infinite',
				'chess-pulse': 'chess-pulse 4s ease-in-out infinite',
				'chess-glow': 'chess-glow 3s ease-in-out infinite',
				'piece-dance': 'piece-dance 6s ease-in-out infinite'
			},
			backgroundImage: {
				'chess-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='30' height='30' fill='%23242428' opacity='0.4'/%3E%3Crect x='30' width='30' height='30' fill='%2318181B' opacity='0.2'/%3E%3Crect y='30' width='30' height='30' fill='%2318181B' opacity='0.2'/%3E%3Crect x='30' y='30' width='30' height='30' fill='%23242428' opacity='0.4'/%3E%3C/svg%3E\")",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
