module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    colors: {
      	'white': '#FFFFFF',
      	'black': '#000000',

      	'gray': '#B1B1B1',
      	'gray-light': '#C0C0C0',

      	'charcoal': '#353A3D',
		'primary': '#E76035',
		'red': '#E76035',
		'tan': '#EFE6D7',
		'pink': '#EB72AB',
		'pink-light': '#F8AEA3',
		
		'tan-bg': '#F0E9DE',
		'red-bg': '#EA7049',
		'pink-bg': '#EF8EBB',
		'pink-light-bg': '#F8AEA3',
		'charcoal-bg': '#353A3D',
    },
    fontFamily: {
      	'sans': ['calder-dark', 'sans-serif'],
      	'sans-alt': ['calder-lc', 'sans-serif'],
      	'serif': ['utopia-std-headline', 'serif']
    },
    fontSize: {
    	'xs': ['.75rem', {
	        lineHeight: '1rem',
	    }],

    	'sm': ['.875rem', {
	        lineHeight: '1.25rem',
	    }],

		'base': ['1rem', {
			lineHeight: '1.75rem',
		}],

		'lg': ['1.125rem', {
			lineHeight: '1.25rem',
			letterSpacing: '.1em',
		}],

		'xl': ['1.25rem', {
			lineHeight: '1.5rem',
			letterSpacing: '.05em',
		}],

		'2xl': ['1.5625rem', {
			lineHeight: '2.1875rem',
		}],

		'3xl': ['2.1875rem', {
			lineHeight: '1.2',
		}],

		'4xl': ['3.125rem', {
			lineHeight: '1.2',
		}],

		'5xl': ['5rem', {
			lineHeight: '1',
		}],

    },

    extend: {
		inset: {
			'1/2': '50%',
		},

		width: {
       		'screen-80': '80vw',
      	},

		height: {
			'88': '22rem',
	        '104': '26rem',
	        '140': '35rem',
	        '176': '44rem',
	        '192': '48rem',
			'screen-60': '60vh',
       		'screen-80': '80vh',
      	},

		minHeight: {
       		'160': '640px',
      	},

		padding: {
			'16/9': '56.25%',
			'4/3': '75%',
		},

		screens: {
			xxl: '1400px',
		},

		container: {
			center: true
		},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
