module.exports = {
    content: ["*"],
    theme: {
      extend: {
            colors:{
              headerBg: "#160C6D",
              hoverColor: "#1BBF00",
              overlay:"rgba(106, 98, 197, 0.9)",
              whyColor:"#726E9E",
            },
            fontFamily:{
              first: ['Open Sans'],
              second:['Paprika'],
            },
            maxWidth:{
            header:"1170px",
            },
            backgroundImage:{
              bannerBg:"url('../images/banner.png')",
              oneBg:"url('../images/bg.png')",
              twoBg:"url('../images/bg2.png')"
            }
      },
    },
    plugins: [],
  }