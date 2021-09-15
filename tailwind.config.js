module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkmagenta: 'hsl(300, 43%, 22%)',
        dreymagenta: 'hsl(303, 10%, 53%)',
        lgreymagenta: 'hsl(300, 24%, 96%)',
        softpink: 'hsl(333, 80%, 67%)',
        white: 'hsl(0, 0%, 100%)',
      },

      fontFamily: {
        sans: ['Spartan', 'sans-serif'],
      },

      backgroundImage: (theme) => ({
        'bot-dbg-img': "url('/dist/images/bg-pattern-bottom-desktop.svg')",
        'top-dbg-img': "url('/dist/images/bg-pattern-top-desktop.svg')",
        'bot-cbg-img': "url('/dist/images/bg-pattern-bottom-mobile.svg')",
        'top-cbg-img': "url('/dist/images/bg-pattern-top-mobile.svg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
