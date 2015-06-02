module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "JUG TOUR BRASIL 2015 EDIÇÃO SALVADOR",
      description: "Serie de eventos em comemoração aos 20 anos do Java",
      date: "13:00hs - 04 de Julho de 2015",
      // If your event is free, just comment this line
      //price: "$0",
      venue: "Universidade Catolica do Salvador - UCSal - Campus Pituaçu",
      address:"Avenida Professor Pinto de Aguiar, 2589, Salvador , Bahia, Brasil",
      city: "Salvador",
      state: "Bahia"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
      text: "Inscreva-se!",
      link: "http://even.tc/jugtourbrasil2015edssa"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://javaTour2015.github.io/javaTour2015/",
      googleanalytics: "UA-2890985-10"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      //'schedule',
      //'sponsors',
      'partners',
      'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Localização",
      speakers: "Palestrantes",
      schedule: "Agenda",
      sponsors: "Patrocinadores",
      partners: "Realização",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Bruno Borges",
        photo: "themes/yellow-swan/img/brunoborges.jpeg",
        bio: "Gerente de Produtos da Oracle na linha Java EE como GlassFish e WebLogic. Profissional da área há 10 anos, atuou em empresas como EDS/HP, CETIP, Summa Technologies, CETIP, Neociclo e agora arquiteto de sistemas na wdev; desenvolve softwares e soluções em padrões de integração (EIPs), aplicativos Web e aplicativos Android. Participante de comunidades de software livre (RioJUG, SouJava, Apache Software Foundation, #horaextra), fundou o grupo Wicket em Português e contribui para projetos Open Source da ASF",
        link: {
          href: "http://twitter.com/brunoborges",
          text: "@brunoborges"
        },
         presentation: {
           //title: "Introducing Windows 12",
           //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
           //time: "11h00"
         }
      },
      {
        name: "Stephen Chin",
        photo: "themes/yellow-swan/img/stephenchin.jpg",
        bio: "Stephen Chin is a technical expert in RIA technologies, and Chief Agile Methodologist at GXS. He coauthored the Apress Pro JavaFX Platform title, which is the leading technical reference for JavaFX, and is lead author of the Pro Android Flash title. In addition, Stephen runs the very successful Silicon Valley JavaFX User Group, which has hundreds of members and tens of thousands of online viewers, and also is co-organizer for the Flash on Devices User Group. Finally, he is a Java Champion, chair of the OSCON Java conference, and an internationally recognized speaker featured at Devoxx, Jazoon, and JavaOne, where he received a Rock Star Award",
        link: {
          href: "https://twitter.com/steveonjava",
          text: "@steveonjava"
        },
         presentation: {
           //title: "Introducing Windows 12",
           //description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
           //time: "11h00"
         }
      }


    ],

    // List of Sponsors
    sponsors: [
      // {
      //   name: "Eventick",
      //   logo: "themes/yellow-swan/img/sponsor.png",
      //   url: "http://eventick.com.br"
      // }
    ],

    // List of Partners
    partners: [
      {
        name: "Java Bahia",
        logo: "themes/yellow-swan/img/JavaBahiaLogo.png",
        url: "http://javabahia.blogspot.com.br"
      },
      {
        name: "UCSal",
        logo: "themes/yellow-swan/img/ucsal.jpg",
        url: "http://www.ucsal.br"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
