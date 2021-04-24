interface StringsInterface {
  [index: string]: {
    headers: any;
    screens: any;
    components: any;
    tabNavigator: any;
    validationMessages: any;
  };
}

const Strings: StringsInterface = {
  eng: {
    headers: {
      signIn: "SIGN IN",
      signUp: "SIGN UP",
      profile: "PROFILE",
      news: "HEALTH NEWS",
      payment: "PAYMENT",
      help: "HELP",
    },
    screens: {
      signIn: {
        labelEmail: "EMAIL",
        labelPassword: "PASSWORD",
        signUpText: "Don’t have an account?",
        signUpLink: "Sign up",
        signInButton: "Sign In",
        socialSignIn: "OR SIGN IN WITH",
      },
      signUp: {
        labelName: "NAME",
        labelEmail: "EMAIL",
        labelPassword: "PASSWORD",
        signInText: "Already have an account?",
        signInLink: "Sign in",
        alertSuccessTitle: "Sign up successfully",
        alertSuccessText: "Continue to Sign in.",
        alertSuccesBtn: "Sign in",
        signUpButton: "Sign Up",
      },
      walkthrough: {
        skipBtn: "SKIP",
        nextBtn: "NEXT",
        getStartedBtn: "Get Started",
        title1: "Sign up for free",
        text1: "Sign up for free, search for an available bike and rent it.",
        title2: "Start your ride",
        text2: "Pay your rental, connect to the bike and start your ride!",
        title3: "Stay tuned",
        text3:
          "Return the bike, evaluate the app and stay tuned for news and promo codes.",
      },
      profile: {
        historyCard: "Rental history",
        paymentCard: "Payment",
        promoCard: "Promocode",
        logoutCard: "Logout",
      },
      payment: {
        alertSuccessTitle: "Payment done successfully",
        alertSuccessText:
          "Now, you can connect with your bike and start riding!",
        cardHeader: "Rental Details",
        durationLabel: "Hour(s)",
        bikeLabel: "Bike",
        batteryLabel: "Battery",
        dateLabel: "Date",
        paymentButton: "Proceed with Payment",
      },
    },
    components: {
      searchBar: {
        placeholder: "Search...",
      },
      rentalModal: {
        noBikesMsg: "No bikes available in this station!",
      },
      bikeListHeader: {
        bikeLabel: "Bike",
        batteryLabel: "Battery",
        priceLabel: "Price",
        rentLabel: "Rent",
      },
      bikeListItem: {
        rentButton: "Rent",
      },
      connectionModal: {
        lottieScaning: "Scanning ...",
        lottieConnecting: "Connecting ...",
        alertSuccessTitle: "Successfully connected with the bike",
        alertSuccessText: "Enjoy your ride!",
        modalTitle: "Connection with the rented bike",
        connectButton: "Connect",
      },
      countDown: {
        finishAlertTitle: "Rent time run out!",
        finishAlertText: "Please, return the bike to the nearest station.",
      },
    },
    tabNavigator: {
      homeTab: "Home",
      newsTab: "Health News",
      profileTab: "Profile",
      helpTab: "Help",
    },
    validationMessages: {
      allFieldsRequired: "All fields are required.",
      invalidInputs: "Invalid email and/or password.",
    },
  },
  ////////////////////////////////////////////////////////
  fr: {
    headers: {
      signIn: "SE CONNECTER",
      signUp: "S'INSCRIRE",
      profile: "PROFIL",
      news: "INFOS SANTE",
      payment: "PAIMENT",
      help: "AIDE",
    },
    screens: {
      signIn: {
        labelEmail: "EMAIL",
        labelPassword: "MOT DE PASSE",
        signUpText: "Vous n'avez pas de compte?",
        signUpLink: "S'inscrire",
        signInButton: "Se connecter",
        socialSignIn: "OU CONNECTEZ-VOUS AVEC",
      },
      signUp: {
        labelName: "NOM",
        labelEmail: "EMAIL",
        labelPassword: "MOT DE PASSE",
        signUpButton: "S'inscrire",
        signInText: "Vous avez déjà un compte?",
        signInLink: "Se connecter",
        alertSuccessTitle: "Inscription réussie",
        alertSuccessText: "Continuer pour vous connecter.",
        alertSuccesBtn: "Se connecter",
      },
      walkthrough: {
        skipBtn: "PASSER",
        nextBtn: "SUIVANT",
        getStartedBtn: "Commencer",
        title1: "S'inscrire gratuitement",
        text1:
          "Inscrivez-vous gratuitement, recherchez un vélo disponible et louez-le.",
        title2: "Commencez votre course",
        text2:
          "Payez votre location, connectez-vous au vélo et commencez votre balade!",
        title3: "Restez à l'écoute",
        text3:
          "Retournez le vélo, évaluez l'application et restez à l'écoute des nouvelles et des codes promotionnels.",
      },
      profile: {
        historyCard: "Historique de la location",
        paymentCard: "Paiment",
        promoCard: "Code promo",
        logoutCard: "Se déconnecter",
      },
      payment: {
        alertSuccessTitle: "Paiement effectué avec succès",
        alertSuccessText:
          "Maintenant, vous pouvez vous connecter avec votre vélo et commencer à rouler!",
        cardHeader: "Détails de la location",
        durationLabel: "Heure(s)",
        bikeLabel: "Vélo",
        batteryLabel: "Batterie",
        dateLabel: "Date",
        paymentButton: "Procéder au paiement",
      },
    },
    components: {
      searchBar: {
        placeholder: "Chercher...",
      },
      rentalModal: {
        noBikesMsg: "Aucun vélo disponible dans cette station!",
      },
      bikeListHeader: {
        bikeLabel: "Vélo",
        batteryLabel: "Batterie",
        priceLabel: "Prix",
        rentLabel: "Louer",
      },
      bikeListItem: {
        rentButton: "Louer",
      },
      connectionModal: {
        lottieScaning: "Recherche ...",
        lottieConnecting: "Connexion ...",
        alertSuccessTitle: "Connexion réussie avec le vélo",
        alertSuccessText: "Profitez de votre balade!",
        modalTitle: "Connexion avec le vélo loué",
        connectButton: "Se connecter",
      },
      countDown: {
        finishAlertTitle: "Le temps de location est épuisé!",
        finishAlertText:
          "Merci de rapporter le vélo à la station la plus proche.",
      },
    },
    tabNavigator: {
      homeTab: "Accueil",
      newsTab: "Infos Santé",
      profileTab: "Profil",
      helpTab: "Aide",
    },
    validationMessages: {
      allFieldsRequired: "Tous les champs sont requis.",
      invalidInputs: "E-mail et/ou mot de passe invalide.",
    },
  },
};

export default Strings;
